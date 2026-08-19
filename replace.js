const fs = require('fs');
function replaceInDir(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const path = dir + '/' + file.name;
    if (file.isDirectory()) {
      replaceInDir(path);
    } else if (path.endsWith('.tsx') || path.endsWith('.css')) {
      let content = fs.readFileSync(path, 'utf8');
      if (content.includes('font-koulen')) {
        content = content.replace(/font-koulen/g, 'font-khmer font-black');
        fs.writeFileSync(path, content, 'utf8');
        console.log('Updated', path);
      }
    }
  }
}
replaceInDir('e:/កាងា/code/loctroi-next/src');
