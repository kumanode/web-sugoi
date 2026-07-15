const fs = require('fs');
const path = require('path');

function walkSync(dir, callback) {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    var filepath = path.join(dir, file);
    const stats = fs.statSync(filepath);
    if (stats.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== 'dist') {
        walkSync(filepath, callback);
      }
    } else if (stats.isFile()) {
      callback(filepath);
    }
  });
}

walkSync('c:/Users/PopGore/.gemini/antigravity-ide/scratch/website', (filepath) => {
  if (/\.(md|ts|js|vue|json|webmanifest|txt)$/.test(filepath)) {
    let content = fs.readFileSync(filepath, 'utf8');
    let newContent = content.replace(/Sugoi/g, 'Sugoi');
    newContent = newContent.replace(/sugoi-website/g, 'sugoi-website');
    // Also replace mihonapp with sugoiapp if any
    // newContent = newContent.replace(/mihonapp/g, 'sugoiapp'); 
    // Let's leave github links alone unless they want a full fork.

    if (newContent !== content) {
      fs.writeFileSync(filepath, newContent, 'utf8');
      console.log('Updated: ' + filepath);
    }
  }
});
