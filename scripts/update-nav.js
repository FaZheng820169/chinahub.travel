const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const files = [
    'about.html', 'contact.html', 'cookie-policy.html', 'index.html', 
    'payment-apps.html', 'privacy-policy.html', 'survival-guide.html', 
    'terms-of-service.html', 'transport-guide.html', 'visa-guide.html', 
    'vpn-internet.html'
];

files.forEach(file => {
    const filePath = path.join(rootDir, file);
    if (!fs.existsSync(filePath)) return;
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace Top Nav
    const topNavOld = '<a href="survival-guide.html" class="hover:text-[var(--primary-main)] transition-colors">Survival Guide</a>';
    const topNavNew = '<a href="survival-guide.html" class="hover:text-[var(--primary-main)] transition-colors">Survival Guide</a>\n                <a href="faq.html" class="hover:text-[var(--primary-main)] transition-colors">FAQ & Scams</a>';
    
    if (content.includes(topNavOld) && !content.includes('href="faq.html" class="hover:text-[var(--primary-main)] transition-colors"')) {
        content = content.replace(topNavOld, topNavNew);
    }
    
    // Replace Footer Nav
    const footerNavOld = '<li><a href="survival-guide.html" class="hover:text-primary transition-colors">Ultimate Survival Guide</a></li>';
    const footerNavNew = '<li><a href="survival-guide.html" class="hover:text-primary transition-colors">Ultimate Survival Guide</a></li>\n                        <li><a href="faq.html" class="hover:text-primary transition-colors">FAQ & Scams</a></li>';
    
    if (content.includes(footerNavOld) && !content.includes('href="faq.html" class="hover:text-primary transition-colors">FAQ & Scams</a>')) {
        content = content.replace(footerNavOld, footerNavNew);
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated navigation links in ${file}`);
});
