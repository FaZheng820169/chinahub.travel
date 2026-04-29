const fs = require('fs');
const path = require('path');

const rootDir = path.join(__dirname, '..');
const dirs = ['.', 'es', 'fr', 'zh'];

dirs.forEach(dir => {
    const fullDir = path.join(rootDir, dir);
    if (!fs.existsSync(fullDir)) return;

    const files = fs.readdirSync(fullDir).filter(f => f.endsWith('.html'));

    files.forEach(file => {
        const filePath = path.join(fullDir, file);
        let content = fs.readFileSync(filePath, 'utf8');

        // 1. 给汉堡按钮增加 ID 和必要的 z-index 控制（避免被菜单层遮挡）
        content = content.replace(
            /<button class="xl:hidden text-2xl text-\[var\(--text-primary\)\]">☰<\/button>/,
            '<button id="mobile-menu-btn" class="xl:hidden text-2xl text-[var(--text-primary)] relative z-50 transition-colors w-10 h-10 flex items-center justify-center rounded-lg hover:bg-gray-100">☰</button>'
        );

        // 如果已经注入过了则跳过
        if (content.includes('id="mobile-menu"')) return;

        // 2. 提取桌面端导航链接
        const navMatch = content.match(/<div class="hidden lg:flex[^>]*>([\s\S]*?)<\/div>/);
        let mobileLinksHtml = '';
        if (navMatch) {
            let linksContent = navMatch[1];
            mobileLinksHtml = linksContent.replace(/<a href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g, 
                '<a href="$1" class="block border-b border-gray-100/50 pb-4 text-2xl font-extrabold text-[var(--text-primary)] hover:text-primary transition-colors tracking-tight">$2</a>'
            );
        }

        // 3. 提取 "Plan Your Trip" 按钮
        const planBtnMatch = content.match(/<a href="([^"]+)" class="hidden xl:block whitespace-nowrap bg-primary[^>]*>([\s\S]*?)<\/a>/);
        let planBtnHtml = '';
        if (planBtnMatch) {
            planBtnHtml = `<a href="${planBtnMatch[1]}" class="block w-full text-center mt-6 bg-primary text-white py-4 rounded-2xl text-xl font-bold hover:bg-red-800 shadow-xl shadow-red-500/20 active:scale-95 transition-transform">${planBtnMatch[2].trim()}</a>`;
        }

        // 4. 构建拥有高级毛玻璃质感的 Mobile Menu HTML 结构
        const mobileMenuHtml = `
    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl hidden flex-col pt-28 px-6 xl:hidden overflow-y-auto pb-12 transition-all">
        <div class="flex flex-col gap-6 reveal-up">
            ${mobileLinksHtml.trim()}
            ${planBtnHtml}
        </div>
        <div class="mt-10 pt-8 border-t border-gray-100/50 reveal-up" style="animation-delay: 100ms;">
            <p class="text-sm text-[var(--text-secondary)] mb-4 font-bold uppercase tracking-widest">Languages</p>
            <div class="grid grid-cols-2 gap-3">
                <a href="javascript:void(0)" onclick="let p=window.location.pathname.replace(/^\\/(es|fr|zh)(\\/|$)/, '/'); window.location.href=p" class="p-3 bg-gray-50/80 backdrop-blur rounded-xl text-center font-semibold border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-colors">🇬🇧 EN</a>
                <a href="javascript:void(0)" onclick="let p=window.location.pathname.replace(/^\\/(es|fr|zh)(\\/|$)/, '/'); window.location.href='/es'+(p==='/'?'/':p)" class="p-3 bg-gray-50/80 backdrop-blur rounded-xl text-center font-semibold border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-colors">🇪🇸 ES</a>
                <a href="javascript:void(0)" onclick="let p=window.location.pathname.replace(/^\\/(es|fr|zh)(\\/|$)/, '/'); window.location.href='/fr'+(p==='/'?'/':p)" class="p-3 bg-gray-50/80 backdrop-blur rounded-xl text-center font-semibold border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-colors">🇫🇷 FR</a>
                <a href="javascript:void(0)" onclick="let p=window.location.pathname.replace(/^\\/(es|fr|zh)(\\/|$)/, '/'); window.location.href='/zh'+(p==='/'?'/':p)" class="p-3 bg-gray-50/80 backdrop-blur rounded-xl text-center font-semibold border border-gray-100 hover:border-primary/30 hover:bg-primary/5 transition-colors">🇨🇳 ZH</a>
            </div>
        </div>
    </div>
    `;

        content = content.replace('</nav>', '</nav>\n' + mobileMenuHtml);

        // 5. 注入控制展现隐藏的原生 JS (放置在 </body> 前)
        const scriptHtml = `
    <!-- Mobile Menu Script -->
    <script>
        document.addEventListener("DOMContentLoaded", function() {
            const mobileBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            if (mobileBtn && mobileMenu) {
                mobileBtn.addEventListener('click', () => {
                    const isHidden = mobileMenu.classList.contains('hidden');
                    if (isHidden) {
                        mobileMenu.classList.remove('hidden');
                        mobileMenu.classList.add('flex');
                        mobileBtn.innerHTML = '✕';
                        mobileBtn.classList.add('text-primary');
                        document.body.style.overflow = 'hidden'; // 防止背景滚动
                    } else {
                        mobileMenu.classList.add('hidden');
                        mobileMenu.classList.remove('flex');
                        mobileBtn.innerHTML = '☰';
                        mobileBtn.classList.remove('text-primary');
                        document.body.style.overflow = '';
                    }
                });
            }
        });
    </script>
</body>`;
        content = content.replace('</body>', scriptHtml);

        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Injected high-end mobile menu into ${path.join(dir, file)}`);
    });
});
console.log('Mobile menu injection script completed.');