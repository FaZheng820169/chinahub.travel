const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const dirsToProcess = [
    rootDir, 
    path.join(rootDir, 'es'), 
    path.join(rootDir, 'fr'), 
    path.join(rootDir, 'zh')
];

function processHtmlFiles(dir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) return;
        if (!file.endsWith('.html')) return;

        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // 1. Navigation links container
        content = content.replace(
            /hidden md:flex space-x-8 items-center font-medium text-\[var\(--text-secondary\)\]/g,
            'hidden lg:flex lg:space-x-4 xl:space-x-8 items-center font-medium text-[var(--text-secondary)] text-sm xl:text-base whitespace-nowrap'
        );

        // 2. "Plan Your Trip" button
        content = content.replace(
            /hidden md:block bg-primary hover-bg-primary-dark/g,
            'hidden lg:block whitespace-nowrap bg-primary hover-bg-primary-dark'
        );

        // 3. Language Switcher container
        content = content.replace(
            /relative group ml-4 hidden md:block/g,
            'relative group ml-4 hidden lg:block'
        );

        // 4. Mobile Menu Toggle
        content = content.replace(
            /md:hidden text-2xl text-\[var\(--text-primary\)\]/g,
            'lg:hidden text-2xl text-[var(--text-primary)]'
        );

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated navigation spacing in ${path.relative(rootDir, filePath)}`);
        }
    });
}

dirsToProcess.forEach(processHtmlFiles);
console.log("Fix navigation spacing script completed.");
