import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const CONTENT_DIR = path.join(__dirname, '../content/blog');

const files = fs.readdirSync(CONTENT_DIR);

for (const file of files) {
  if (!file.endsWith('.mdx')) continue;
  const filePath = path.join(CONTENT_DIR, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Decode URI components in frontmatter
  let cleanSlug = file.replace('.mdx', '');
  try {
    cleanSlug = decodeURIComponent(cleanSlug);
  } catch (e) {}

  // Replace special characters / emojis in slug with clean hyphens
  cleanSlug = cleanSlug
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

  if (!cleanSlug) cleanSlug = 'post';

  // Update slug field in frontmatter
  content = content.replace(/^slug:\s*".*?"/m, `slug: "${cleanSlug}"`);
  
  const newFilePath = path.join(CONTENT_DIR, `${cleanSlug}.mdx`);
  if (filePath !== newFilePath) {
    fs.unlinkSync(filePath);
    fs.writeFileSync(newFilePath, content);
    console.log(`Renamed ${file} -> ${cleanSlug}.mdx`);
  } else {
    fs.writeFileSync(filePath, content);
  }
}

console.log('Cleaned all slugs!');
