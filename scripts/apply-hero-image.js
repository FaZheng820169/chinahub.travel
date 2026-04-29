const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

// Find all about.html files
function findAboutHtmlFiles(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        if (stat && stat.isDirectory()) {
            if (!fullPath.includes('node_modules') && !fullPath.includes('.git') && !fullPath.includes('.codebuddy')) {
                results = results.concat(findAboutHtmlFiles(fullPath));
            }
        } else {
            if (path.basename(fullPath) === 'about.html') {
                results.push(fullPath);
            }
        }
    });
    return results;
}

const files = findAboutHtmlFiles(projectRoot);

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // Calculate relative path to projectRoot/image/about-hero.jpg
    const relativeDir = path.relative(path.dirname(file), projectRoot);
    const imagePath = relativeDir ? relativeDir + '/image/about-hero.jpg' : 'image/about-hero.jpg';
    const finalImagePath = imagePath.replace(/\\/g, '/');

    // Replace the Unsplash URL specifically for the hero image
    content = content.replace(
        /(<div class="absolute inset-0 z-0[^>]*>\s*<img src=")[^"]+(")/g,
        `$1${finalImagePath}$2`
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file} with image path: ${finalImagePath}`);
});
