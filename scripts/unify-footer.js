const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const dirs = ['.', 'es', 'fr', 'zh'];

dirs.forEach(dir => {
    const fullDir = path.join(rootDir, dir);
    if (!fs.existsSync(fullDir)) return;
    
    // 从当前目录的 index.html 提取富页脚（确保路径相对正确）
    const indexPath = path.join(fullDir, 'index.html');
    if (!fs.existsSync(indexPath)) return;
    
    const indexHtml = fs.readFileSync(indexPath, 'utf8');
    const footerMatch = indexHtml.match(/<footer[\s\S]*?<\/footer>/);
    if (!footerMatch) return;
    const richFooter = footerMatch[0];

    const files = fs.readdirSync(fullDir).filter(f => f.endsWith('.html') && f !== 'index.html');
    files.forEach(file => {
        const filePath = path.join(fullDir, file);
        let content = fs.readFileSync(filePath, 'utf8');
        
        // 替换每个页面的 footer
        if (content.match(/<footer[\s\S]*?<\/footer>/)) {
            content = content.replace(/<footer[\s\S]*?<\/footer>/, richFooter);
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Unified footer for ${path.join(dir, file)}`);
        }
    });
});
console.log('Unify footer script completed.');