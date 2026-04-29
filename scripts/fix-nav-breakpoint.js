const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');

function getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file.startsWith('.')) continue;
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            getAllFiles(filePath, fileList);
        } else if (filePath.endsWith('.html') || filePath.endsWith('inject-mobile-menu.js')) {
            fileList.push(filePath);
        }
    }
    return fileList;
}

const targetFiles = getAllFiles(rootDir);
let updatedCount = 0;

targetFiles.forEach(filePath => {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;

    // Replace the main links container breakpoint
    content = content.replace(/hidden lg:flex lg:space-x-4 xl:space-x-8/g, 'hidden xl:flex xl:space-x-6');
    
    // Simplify text size class since it only shows on xl now
    content = content.replace(/text-sm xl:text-base/g, 'text-base');

    // Update the right side action buttons
    content = content.replace(/hidden lg:block/g, 'hidden xl:block');
    
    // Update the hamburger menu and the injected mobile menu container
    content = content.replace(/lg:hidden/g, 'xl:hidden');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        updatedCount++;
    }
});

console.log(`Successfully upgraded responsive breakpoints from lg to xl in ${updatedCount} files.`);
