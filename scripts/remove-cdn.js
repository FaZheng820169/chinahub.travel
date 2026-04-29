const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const SUB_DIRS = ['es', 'fr', 'zh'];

function processDirectory(dirPath) {
    if (!fs.existsSync(dirPath)) return;
    
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && SUB_DIRS.includes(file) && dirPath === ROOT_DIR) {
            processDirectory(fullPath);
        } else if (stat.isFile() && file.endsWith('.html')) {
            cleanHtmlFile(fullPath);
        }
    }
}

function cleanHtmlFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Remove Tailwind CDN script
    const cdnRegex = /<script\s+src=["']https:\/\/cdn\.tailwindcss\.com["']><\/script>\s*/g;
    content = content.replace(cdnRegex, '');
    
    // Remove tailwind inline config
    const configRegex = /<script>\s*tailwind\.config\s*=\s*{[\s\S]*?}\s*<\/script>\s*/g;
    content = content.replace(configRegex, '');
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Cleaned: ${path.relative(ROOT_DIR, filePath)}`);
}

console.log('Starting to remove Tailwind CDN and inline configs...');
processDirectory(ROOT_DIR);
console.log('Done.');
