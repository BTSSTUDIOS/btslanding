import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const CONTENT_DIR = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  categories: string[];
  tags: string[];
  featuredImage?: string;
  excerpt?: string;
  content: string;
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR);

  const posts = files
    .filter(file => file.endsWith('.mdx'))
    .map(file => {
      const filePath = path.join(CONTENT_DIR, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        slug: data.slug || file.replace('.mdx', ''),
        title: data.title || 'Untitled Post',
        date: data.date || new Date().toISOString(),
        categories: Array.isArray(data.categories) ? data.categories : [],
        tags: Array.isArray(data.tags) ? data.tags : [],
        featuredImage: data.featuredImage || '',
        excerpt: data.excerpt || '',
        content,
      } as BlogPost;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getPostBySlug(slug: string): BlogPost | null {
  const posts = getAllPosts();
  return posts.find(p => p.slug === slug) || null;
}

export function getPostsByCategory(category: string): BlogPost[] {
  const posts = getAllPosts();
  return posts.filter(p => 
    p.categories.some(c => c.toLowerCase() === category.toLowerCase())
  );
}

export function getAllCategories(): { name: string; slug: string; count: number }[] {
  const posts = getAllPosts();
  const catCounts: Record<string, number> = {};

  posts.forEach(post => {
    post.categories.forEach(cat => {
      if (cat) {
        catCounts[cat] = (catCounts[cat] || 0) + 1;
      }
    });
  });

  return Object.entries(catCounts).map(([name, count]) => ({
    name,
    slug: name.toLowerCase().replace(/[^\w\s-]/g, '').replace(/[\s_]+/g, '-'),
    count,
  }));
}
