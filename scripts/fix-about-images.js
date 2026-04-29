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

    // 1. Fix Hero section
    // Add background gradient to the parent container of the hero image
    content = content.replace(
        /<div class="absolute inset-0 z-0">/g,
        '<div class="absolute inset-0 z-0 bg-gradient-to-br from-red-950 via-stone-900 to-black">'
    );
    // Replace onerror in hero image
    content = content.replace(
        /onerror="this\.src='https:\/\/placehold\.co\/1920x1080'"/g,
        'onerror="this.style.display=\'none\'"'
    );

    // 2. Fix Destination images
    // Replace images to add onerror
    content = content.replace(
        /<img src="(https:\/\/images\.unsplash\.com[^"]+)"([^>]*)class="([^"]*transition-transform[^"]*)"([^>]*)>/g,
        '<img src="$1"$2class="$3" onerror="this.style.display=\'none\'"$4>'
    );

    // Add fallback background to destination cards
    content = content.replace(
        /class="([^"]*relative rounded-3xl overflow-hidden group cursor-pointer[^"]*)"/g,
        (match, p1) => {
            if (!p1.includes('bg-stone-900')) {
                return `class="${p1} bg-stone-900"`;
            }
            return match;
        }
    );

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated ${file}`);
});
