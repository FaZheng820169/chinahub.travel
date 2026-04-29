const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const BASE_URL = 'https://chinahub.travel';
const SUB_DIRS = ['es', 'fr', 'zh'];

let urls = [];

function scanDirectory(dirPath, urlPrefix = '') {
    if (!fs.existsSync(dirPath)) return;
    
    const files = fs.readdirSync(dirPath);
    for (const file of files) {
        const fullPath = path.join(dirPath, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && SUB_DIRS.includes(file) && dirPath === ROOT_DIR) {
            scanDirectory(fullPath, `/${file}`);
        } else if (stat.isFile() && file.endsWith('.html')) {
            // e.g. /index.html or /es/visa-guide.html
            let pagePath = `${urlPrefix}/${file}`;
            if (file === 'index.html') {
                pagePath = `${urlPrefix}/`;
            }
            urls.push(`${BASE_URL}${pagePath}`);
        }
    }
}

function generateSitemap() {
    scanDirectory(ROOT_DIR);
    
    const today = new Date().toISOString().split('T')[0];
    
    let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
    xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
    
    urls.forEach(url => {
        // priority: root index = 1.0, sub index = 0.9, others = 0.8
        let priority = '0.8';
        if (url === `${BASE_URL}/`) priority = '1.0';
        else if (url.endsWith('/')) priority = '0.9';
        
        xml += `  <url>\n`;
        xml += `    <loc>${url}</loc>\n`;
        xml += `    <lastmod>${today}</lastmod>\n`;
        xml += `    <changefreq>weekly</changefreq>\n`;
        xml += `    <priority>${priority}</priority>\n`;
        xml += `  </url>\n`;
    });
    
    xml += `</urlset>`;
    
    fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), xml, 'utf8');
    console.log(`Generated sitemap.xml with ${urls.length} URLs.`);
}

function generateRobotsTxt() {
    const txt = `User-agent: *
Allow: /

Sitemap: ${BASE_URL}/sitemap.xml
`;
    fs.writeFileSync(path.join(ROOT_DIR, 'robots.txt'), txt, 'utf8');
    console.log('Generated robots.txt.');
}

generateSitemap();
generateRobotsTxt();
