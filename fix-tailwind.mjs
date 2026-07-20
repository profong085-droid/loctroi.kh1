import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const regex = /((?:sm:|md:|lg:|xl:|2xl:)?(?:w|h|min-w|min-h|max-w|max-h))-\[(\d+)px\]/g;

function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let newContent = content.replace(regex, (match, prefix, pixels) => {
    const num = parseInt(pixels, 10);
    const val = num / 4;
    return `${prefix}-${val}`;
  });
  
  if (content !== newContent) {
    fs.writeFileSync(filePath, newContent, 'utf8');
    console.log(`Updated ${filePath}`);
  }
}

function walk(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (!fullPath.includes('node_modules') && !fullPath.includes('.next')) {
        walk(fullPath);
      }
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.jsx') || fullPath.endsWith('.js')) {
      processFile(fullPath);
    }
  }
}

walk(path.join(__dirname, 'src'));
console.log('Done.');
