const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const ROOT_DIR = path.join(__dirname, '..');
const LANGUAGES = [
    { code: 'es', prefix: '[Español] ' },
    { code: 'fr', prefix: '[Français] ' },
    { code: 'zh', prefix: '[中文] ' }
];

const FILES_TO_MOCK = [
    'about.html', 'contact.html', 'cookie-policy.html', 'index.html', 
    'payment-apps.html', 'privacy-policy.html', 'survival-guide.html', 
    'terms-of-service.html', 'transport-guide.html', 'visa-guide.html', 
    'vpn-internet.html', 'faq.html', '404.html'
];

console.log('Starting mock translation...');

LANGUAGES.forEach(lang => {
    const outDir = path.join(ROOT_DIR, lang.code);
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    FILES_TO_MOCK.forEach(filename => {
        const srcPath = path.join(ROOT_DIR, filename);
        if (!fs.existsSync(srcPath)) return;

        const html = fs.readFileSync(srcPath, 'utf8');
        const $ = cheerio.load(html, { decodeEntities: false });

        // Update language attribute
        $('html').attr('lang', lang.code);

        // Update Title
        const currentTitle = $('title').text();
        if (currentTitle && !currentTitle.startsWith(lang.prefix)) {
            $('title').text(lang.prefix + currentTitle);
        }

        // Add prefix to main headings to simulate translation
        $('h1, h2').each((i, el) => {
            const currentText = $(el).text();
            if (currentText && currentText.trim().length > 0 && !currentText.includes(lang.prefix)) {
                // Prepend the prefix, preserving inner structure if simple
                $(el).prepend(`<span>${lang.prefix}</span>`);
            }
        });

        // Ensure CDN is removed (since it's a clone of the cleaned root)
        $('script[src*="cdn.tailwindcss.com"]').remove();

        // Ensure relative paths for css (e.g. common.css needs to be ../common.css)
        $('link[href="common.css"]').attr('href', '../common.css');
        $('link[href="/favicon.svg"]').attr('href', '../favicon.svg');
        
        // Fix home links if they just point to '/'
        $('a[href="/"]').attr('href', `/${lang.code}/`);

        const destPath = path.join(outDir, filename);
        fs.writeFileSync(destPath, $.html(), 'utf8');
    });
    console.log(`Generated mock pages for: ${lang.code}`);
});

console.log('Mock translation complete.');
