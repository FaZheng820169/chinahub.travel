const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const langs = ['zh', 'fr', 'es'];

// Helper to get all HTML files recursively
function getAllHtmlFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        // Skip node_modules and hidden files
        if (file === 'node_modules' || file.startsWith('.')) continue;
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllHtmlFiles(filePath, fileList);
        } else if (filePath.endsWith('.html')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const allHtmlFiles = getAllHtmlFiles(rootDir);
let updatedCount = 0;

allHtmlFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    const currentDir = path.dirname(filePath);

    // Compute relative path to a target absolute path
    const getRel = (targetPath) => {
        let rel = path.relative(currentDir, targetPath).replace(/\\/g, '/');
        if (rel === '') rel = '.';
        return rel === '.' ? 'index.html' : rel + '/index.html';
    };

    // Replace href="/"
    const rootIndex = getRel(rootDir);
    content = content.replace(/href="\/"/g, `href="${rootIndex}"`);

    // Replace href="/lang/"
    langs.forEach(lang => {
        const regex = new RegExp(`href="/${lang}/"`, 'g');
        const langTarget = path.join(rootDir, lang);
        const langIndex = getRel(langTarget);
        content = content.replace(regex, `href="${langIndex}"`);
    });

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        updatedCount++;
    }
});

console.log(`Successfully updated absolute root links to relative paths in ${updatedCount} HTML files.`);
