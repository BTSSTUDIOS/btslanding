import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const WP_API = 'https://blog.bts-studios.io/wp-json/wp/v2';
const CONTENT_DIR = path.join(__dirname, '../content/blog');
const IMAGES_DIR = path.join(__dirname, '../public/images/blog');

if (!fs.existsSync(CONTENT_DIR)) {
  fs.mkdirSync(CONTENT_DIR, { recursive: true });
}
if (!fs.existsSync(IMAGES_DIR)) {
  fs.mkdirSync(IMAGES_DIR, { recursive: true });
}

function htmlToMarkdown(html) {
  if (!html) return '';
  let md = html;
  // Replace headings
  md = md.replace(/<h1[^>]*>(.*?)<\/h1>/gi, '# $1\n\n');
  md = md.replace(/<h2[^>]*>(.*?)<\/h2>/gi, '## $1\n\n');
  md = md.replace(/<h3[^>]*>(.*?)<\/h3>/gi, '### $1\n\n');
  md = md.replace(/<h4[^>]*>(.*?)<\/h4>/gi, '#### $1\n\n');

  // Replace paragraphs & breaks
  md = md.replace(/<p[^>]*>(.*?)<\/p>/gi, '$1\n\n');
  md = md.replace(/<br\s*\/?>/gi, '\n');

  // Replace strong & em
  md = md.replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**');
  md = md.replace(/<b[^>]*>(.*?)<\/b>/gi, '**$1**');
  md = md.replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*');
  md = md.replace(/<i[^>]*>(.*?)<\/i>/gi, '*$1*');

  // Replace links
  md = md.replace(/<a[^>]*href="([^"]+)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)');

  // Replace images
  md = md.replace(/<img[^>]*src="([^"]+)"[^>]*alt="([^"]*)"[^>]*\/?>/gi, '![$2]($1)');
  md = md.replace(/<img[^>]*src="([^"]+)"[^>]*\/?>/gi, '![]($1)');

  // Clean remaining HTML tags (except simple formatting if any left)
  md = md.replace(/<div[^>]*>/gi, '').replace(/<\/div>/gi, '\n');
  md = md.replace(/<span[^>]*>/gi, '').replace(/<\/span>/gi, '');

  // Fix HTML entities
  md = md.replace(/&#8217;/g, "'").replace(/&#8220;/g, '"').replace(/&#8221;/g, '"').replace(/&amp;/g, '&');

  return md.trim();
}

async function downloadImage(url, filename) {
  try {
    const res = await fetch(url);
    if (!res.ok) return null;
    const arrayBuffer = await res.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const filePath = path.join(IMAGES_DIR, filename);
    fs.writeFileSync(filePath, buffer);
    return `/images/blog/${filename}`;
  } catch (err) {
    console.error(`Failed to download image ${url}:`, err.message);
    return null;
  }
}

async function run() {
  console.log('Fetching WordPress posts...');
  try {
    const postsRes = await fetch(`${WP_API}/posts?per_page=100`);
    if (!postsRes.ok) throw new Error(`HTTP error ${postsRes.status}`);
    const posts = await postsRes.json();
    console.log(`Found ${posts.length} posts.`);

    const categoriesRes = await fetch(`${WP_API}/categories?per_page=100`);
    const categories = categoriesRes.ok ? await categoriesRes.json() : [];
    const catMap = Object.fromEntries(categories.map(c => [c.id, c.name]));

    const tagsRes = await fetch(`${WP_API}/tags?per_page=100`);
    const tags = tagsRes.ok ? await tagsRes.json() : [];
    const tagMap = Object.fromEntries(tags.map(t => [t.id, t.name]));

    for (const post of posts) {
      const slug = post.slug;
      const title = post.title?.rendered ? post.title.rendered.replace(/&#8217;/g, "'").replace(/&amp;/g, '&') : slug;
      const date = post.date;
      const postCatNames = (post.categories || []).map(cid => catMap[cid]).filter(Boolean);
      const postTagNames = (post.tags || []).map(tid => tagMap[tid]).filter(Boolean);

      let featuredImageUrl = '';
      if (post.featured_media) {
        try {
          const mediaRes = await fetch(`${WP_API}/media/${post.featured_media}`);
          if (mediaRes.ok) {
            const media = await mediaRes.json();
            const sourceUrl = media.source_url;
            if (sourceUrl) {
              const ext = path.extname(sourceUrl.split('?')[0]) || '.jpg';
              const localImgName = `${slug}${ext}`;
              const localPath = await downloadImage(sourceUrl, localImgName);
              if (localPath) featuredImageUrl = localPath;
            }
          }
        } catch (e) {
          console.error(`Media fetch failed for post ${slug}:`, e.message);
        }
      }

      const rawContent = post.content?.rendered || '';
      const markdownContent = htmlToMarkdown(rawContent);
      const rawExcerpt = post.excerpt?.rendered || '';
      const cleanExcerpt = htmlToMarkdown(rawExcerpt).replace(/\n/g, ' ');

      const frontmatter = `---
title: ${JSON.stringify(title)}
date: ${JSON.stringify(date)}
slug: ${JSON.stringify(slug)}
categories: ${JSON.stringify(postCatNames)}
tags: ${JSON.stringify(postTagNames)}
featuredImage: ${JSON.stringify(featuredImageUrl)}
excerpt: ${JSON.stringify(cleanExcerpt)}
---

${markdownContent}
`;

      fs.writeFileSync(path.join(CONTENT_DIR, `${slug}.mdx`), frontmatter);
      console.log(`Saved post: ${slug}.mdx`);
    }

    console.log('Migration complete!');
  } catch (err) {
    console.error('Error during migration:', err);
  }
}

run();
