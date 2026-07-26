import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.join(__dirname, '../content/blog');

const files = fs.readdirSync(CONTENT_DIR);

function cleanHtmlForMdx(str) {
  if (!str) return '';
  let s = str;

  // Fix unclosed/invalid HTML tags inside markdown
  s = s.replace(/<figcaption[^>]*>(.*?)<\/figcaption>/gi, '\n*$1*\n');
  s = s.replace(/<figure[^>]*>/gi, '').replace(/<\/figure>/gi, '\n');
  s = s.replace(/<iframe[^>]*src="([^"]+)"[^>]*><\/iframe>/gi, '\n[Watch Video]($1)\n');
  s = s.replace(/<iframe[^>]*src="([^"]+)"[^>]*\/>/gi, '\n[Watch Video]($1)\n');
  s = s.replace(/<iframe[^>]*src="([^"]+)"[^>]*>/gi, '\n[Watch Video]($1)\n');

  s = s.replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n');
  s = s.replace(/<ul[^>]*>/gi, '').replace(/<\/ul>/gi, '\n');
  s = s.replace(/<ol[^>]*>/gi, '').replace(/<\/ol>/gi, '\n');
  s = s.replace(/<p[^>]*>/gi, '').replace(/<\/p>/gi, '\n\n');
  s = s.replace(/<div[^>]*>/gi, '').replace(/<\/div>/gi, '\n');
  s = s.replace(/<span[^>]*>/gi, '').replace(/<\/span>/gi, '');
  s = s.replace(/<br\s*\/?>/gi, '\n');

  // Strip leftover standalone HTML tags that break JSX parser
  s = s.replace(/<[a-zA-Z\/][^>]*>/g, '');

  return s;
}

for (const file of files) {
  if (!file.endsWith('.mdx')) continue;
  const filePath = path.join(CONTENT_DIR, file);
  const raw = fs.readFileSync(filePath, 'utf8');

  // Split frontmatter and body
  const parts = raw.split('---');
  if (parts.length >= 3) {
    let frontmatter = parts[1];
    let body = parts.slice(2).join('---');

    // Clean excerpt in frontmatter if any HTML tags present
    frontmatter = frontmatter.replace(/(excerpt:\s*".*?")/s, (match) => {
      return match.replace(/<[^>]+>/g, '');
    });

    const cleanBody = cleanHtmlForMdx(body);
    const newContent = `---${frontmatter}---` + cleanBody;
    fs.writeFileSync(filePath, newContent);
    console.log(`Sanitized MDX for ${file}`);
  }
}

console.log('Sanitized all MDX files!');
