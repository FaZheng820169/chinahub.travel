const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

// 目的地详情数据
const destinationData = {
    beijing: {
        name: 'Beijing',
        nameCn: '北京',
        tag: 'Capital',
        tagColor: 'bg-red-600/90',
        image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200&q=80',
        description: '北京，中国的首都，是一座将五千年文明与现代都市活力完美融合的城市。从宏伟的紫禁城到蜿蜒的长城，从古老的胡同到时尚的798艺术区，每一步都在诉说着历史与未来的对话。',
        highlights: ['故宫博物院', '长城', '天坛公园', '颐和园', '南锣鼓巷', '798艺术区'],
        bestTime: '9月-11月（秋季）',
        duration: '建议停留 4-5 天'
    },
    xian: {
        name: "Xi'an",
        nameCn: '西安',
        tag: 'Ancient History',
        tagColor: 'bg-amber-600/90',
        image: 'https://images.unsplash.com/photo-1599814467007-6bcfc23ffc8f?q=80&w=1200',
        description: '西安，古称长安，是丝绸之路的起点，中国历史上十三个朝代的古都。这里埋葬着秦始皇的兵马俑，保存着完整的明代城墙，每一块砖石都在诉说着千年的故事。',
        highlights: ['兵马俑博物馆', '明城墙', '大雁塔', '回民街', '华清池', '钟鼓楼'],
        bestTime: '3月-5月（春季）或 9月-11月（秋季）',
        duration: '建议停留 3-4 天'
    },
    chengdu: {
        name: 'Chengdu',
        nameCn: '成都',
        tag: 'Pandas & Food',
        tagColor: 'bg-green-600/90',
        image: 'https://images.unsplash.com/photo-1570183884393-27ab206f6e52?q=80&w=1200',
        description: '成都，一座来了就不想走的城市。这里是国宝大熊猫的故乡，也是联合国认证的美食之都。悠闲的茶馆文化、火辣的川菜、繁华的春熙路，构成了这座城市独特的生活美学。',
        highlights: ['大熊猫繁育研究基地', '宽窄巷子', '锦里古街', '武侯祠', '都江堰', '青城山'],
        bestTime: '3月-6月（春季）或 9月-11月（秋季）',
        duration: '建议停留 3-4 天'
    },
    guilin: {
        name: 'Guilin',
        nameCn: '桂林',
        tag: 'Natural Wonder',
        tagColor: 'bg-teal-600/90',
        image: 'https://images.unsplash.com/photo-1552688468-15d9cc0357f0?q=80&w=1200',
        description: '桂林山水甲天下，这句话完美概括了这座城市的精髓。漓江两岸的喀斯特地貌如同一幅流动的水墨画，竹筏漂流其间，仿佛置身仙境。阳朔的田园风光更是让人流连忘返。',
        highlights: ['漓江竹筏漂流', '阳朔西街', '龙脊梯田', '象鼻山', '两江四湖', '银子岩'],
        bestTime: '4月-10月（春夏秋季）',
        duration: '建议停留 3-4 天'
    },
    hangzhou: {
        name: 'Hangzhou',
        nameCn: '杭州',
        tag: 'Scenic Beauty',
        tagColor: 'bg-emerald-600/90',
        image: 'https://images.unsplash.com/photo-1628100787126-7f41f0a205a2?q=80&w=1200',
        description: '上有天堂，下有苏杭。杭州以西湖闻名于世，湖光山色与古典园林交相辉映。这里是龙井茶的故乡，也是中国茶文化的发源地之一。漫步苏堤春晓，品味龙井问茶，感受江南水乡的诗意生活。',
        highlights: ['西湖风景区', '灵隐寺', '龙井村', '宋城', '千岛湖', '河坊街'],
        bestTime: '3月-5月（春季）或 9月-11月（秋季）',
        duration: '建议停留 3-4 天'
    },
    shanghai: {
        name: 'Shanghai',
        nameCn: '上海',
        tag: 'Metropolis',
        tagColor: 'bg-blue-600/90',
        image: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80',
        description: '上海，东方明珠，中国最具国际化的大都市。外滩的万国建筑博览群与陆家嘴的摩天大楼隔江相望，传统与现代在这里碰撞出耀眼的火花。从法租界的梧桐小道到南京路的繁华商圈，上海永远充满惊喜。',
        highlights: ['外滩', '陆家嘴金融中心', '豫园', '田子坊', '南京路步行街', '上海迪士尼'],
        bestTime: '3月-5月（春季）或 9月-11月（秋季）',
        duration: '建议停留 4-5 天'
    }
};

// 生成带点击事件的卡片 HTML
function generateCardHTML() {
    const cards = [
        {
            key: 'beijing',
            img: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80',
            alt: 'Beijing',
            gradient: 'from-black/95',
            tags: `<span class="px-3 py-1 backdrop-blur-md bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-widest rounded-full uppercase">Capital</span>
                                <span class="px-3 py-1 backdrop-blur-md bg-red-600/80 border border-red-500/30 text-white text-[10px] font-bold tracking-widest rounded-full uppercase">Must Visit</span>`,
            title: 'Beijing <span class="text-2xl text-white/50 font-light ml-1">北京</span>',
            desc: 'The cultural and political heart of China. Walk the ancient stones of the Great Wall and explore the majestic Forbidden City.',
            delay: '100ms'
        },
        {
            key: 'xian',
            img: 'https://images.unsplash.com/photo-1599814467007-6bcfc23ffc8f?q=80&w=800',
            alt: "Xi'an",
            gradient: 'from-amber-950/90',
            tag: '<span class="inline-block px-3 py-1 bg-amber-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Ancient History</span>',
            title: "Xi'an <span class=\"text-2xl text-white/50 font-light ml-1\">西安</span>",
            desc: 'The starting point of the Silk Road and home to the world-famous Terracotta Army.',
            delay: '200ms'
        },
        {
            key: 'chengdu',
            img: 'https://images.unsplash.com/photo-1570183884393-27ab206f6e52?q=80&w=800',
            alt: 'Chengdu Pandas',
            gradient: 'from-green-950/90',
            tag: '<span class="inline-block px-3 py-1 bg-green-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Pandas & Food</span>',
            title: 'Chengdu <span class="text-2xl text-white/50 font-light ml-1">成都</span>',
            desc: 'A relaxed city famous for its spicy Sichuan cuisine, vibrant teahouses, and giant panda sanctuaries.',
            delay: '300ms'
        },
        {
            key: 'guilin',
            img: 'https://images.unsplash.com/photo-1552688468-15d9cc0357f0?q=80&w=800',
            alt: 'Guilin Landscape',
            gradient: 'from-teal-950/90',
            tag: '<span class="inline-block px-3 py-1 bg-teal-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Natural Wonder</span>',
            title: 'Guilin <span class="text-2xl text-white/50 font-light ml-1">桂林</span>',
            desc: 'Renowned for its dramatic karst mountains rising mysteriously from the meandering Li River.',
            delay: '400ms'
        },
        {
            key: 'hangzhou',
            img: 'https://images.unsplash.com/photo-1628100787126-7f41f0a205a2?q=80&w=800',
            alt: 'Hangzhou West Lake',
            gradient: 'from-emerald-950/90',
            tag: '<span class="inline-block px-3 py-1 bg-emerald-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Scenic Beauty</span>',
            title: 'Hangzhou <span class="text-2xl text-white/50 font-light ml-1">杭州</span>',
            desc: 'Celebrated for the picturesque West Lake, classical elegant gardens, and rich green tea culture.',
            delay: '500ms'
        },
        {
            key: 'shanghai',
            img: 'https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80',
            alt: 'Shanghai',
            gradient: 'from-blue-950/95',
            tag: '<span class="inline-block px-3 py-1 bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Metropolis</span>',
            title: 'Shanghai <span class="text-2xl text-white/50 font-light ml-1">上海</span>',
            desc: 'A futuristic cyberpunk metropolis blending colonial European architecture on the Bund with soaring skyscrapers.',
            delay: '600ms'
        }
    ];

    let cardsHTML = '';
    cards.forEach(card => {
        const tagSection = card.tags || card.tag || '';
        cardsHTML += `
                <!-- ${card.alt} -->
                <div onclick="openDestModal('${card.key}')" class="relative h-[420px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl reveal-up bg-stone-900 border border-white/10 transition-shadow duration-500" style="animation-delay: ${card.delay};">
                    <img src="${card.img}" alt="${card.alt}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" onerror="this.style.display='none'">
                    <div class="absolute inset-0 bg-gradient-to-t ${card.gradient} via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700"></div>
                    <div class="absolute inset-0 p-8 flex flex-col justify-end">
                        <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            ${tagSection}
                            <h3 class="text-4xl font-bold text-white mb-2 font-serif tracking-tight">${card.title}</h3>
                            <div class="h-0 group-hover:h-20 overflow-hidden transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                                <p class="text-gray-300 mt-2 text-sm leading-relaxed line-clamp-3">${card.desc}</p>
                            </div>
                            <div class="mt-4 flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                <span class="tracking-wider uppercase text-xs border-b border-white pb-0.5">Explore</span>
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>
`;
    });

    return `
        <!-- Uniform Grid Destinations with Modal -->
        <section id="destinations" class="mb-32">
            <div class="text-center mb-16 reveal-up">
                <span class="text-red-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Uncover the extraordinary</span>
                <h2 class="text-5xl md:text-7xl font-extrabold text-[var(--text-primary)] font-serif mb-6 tracking-tight">Top Destinations</h2>
                <div class="w-32 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full"></div>
            </div>
            
            <!-- Uniform Grid Container (3 columns, 2 rows) -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                ${cardsHTML}
            </div>
        </section>`;
}

// 生成弹窗 HTML 和 JavaScript
function generateModalHTML() {
    const dataJSON = JSON.stringify(destinationData);
    
    return `
        <!-- Destination Detail Modal -->
        <div id="destModal" class="fixed inset-0 z-[9999] hidden items-center justify-center p-4 md:p-8" style="pointer-events: none; opacity: 0; transition: opacity 0.4s ease;">
            <div class="absolute inset-0 bg-black/80 backdrop-blur-md" onclick="closeDestModal()"></div>
            <div class="relative w-full max-w-4xl max-h-full overflow-y-auto bg-white rounded-3xl shadow-2xl transform scale-95 transition-transform duration-400 ease-out" id="destModalContent" style="pointer-events: auto;">
                <!-- Close Button -->
                <button onclick="closeDestModal()" class="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </button>
                
                <!-- Modal Image -->
                <div class="relative h-[300px] md:h-[400px] overflow-hidden">
                    <img id="modalImage" src="" alt="" class="w-full h-full object-cover">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                    <div class="absolute bottom-6 left-8">
                        <span id="modalTag" class="px-4 py-1.5 text-white text-xs font-bold uppercase tracking-widest rounded-full"></span>
                        <h2 id="modalTitle" class="text-4xl md:text-5xl font-bold text-white font-serif mt-2"></h2>
                    </div>
                </div>
                
                <!-- Modal Content -->
                <div class="p-8 md:p-12">
                    <p id="modalDescription" class="text-lg text-gray-700 leading-relaxed mb-8"></p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path></svg>
                                必游亮点
                            </h3>
                            <ul id="modalHighlights" class="space-y-2"></ul>
                        </div>
                        <div>
                            <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <svg class="w-5 h-5 text-red-600" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
                                旅行贴士
                            </h3>
                            <div class="space-y-3">
                                <div class="flex items-start gap-3">
                                    <span class="text-sm font-semibold text-gray-500 min-w-[80px]">最佳季节</span>
                                    <span id="modalBestTime" class="text-sm text-gray-700"></span>
                                </div>
                                <div class="flex items-start gap-3">
                                    <span class="text-sm font-semibold text-gray-500 min-w-[80px]">建议行程</span>
                                    <span id="modalDuration" class="text-sm text-gray-700"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="flex flex-wrap gap-4 pt-4 border-t border-gray-200">
                        <button class="px-8 py-3 bg-red-600 text-white font-semibold rounded-full hover:bg-red-700 transition-colors shadow-lg hover:shadow-xl">
                            查看完整行程
                        </button>
                        <button onclick="closeDestModal()" class="px-8 py-3 bg-gray-100 text-gray-700 font-semibold rounded-full hover:bg-gray-200 transition-colors">
                            关闭
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <script>
        var destinationData = ${dataJSON};
        
        function openDestModal(cityKey) {
            var data = destinationData[cityKey];
            if (!data) return;
            
            document.getElementById('modalImage').src = data.image;
            document.getElementById('modalImage').alt = data.name;
            document.getElementById('modalTag').textContent = data.tag;
            document.getElementById('modalTag').className = 'px-4 py-1.5 text-white text-xs font-bold uppercase tracking-widest rounded-full ' + data.tagColor;
            document.getElementById('modalTitle').innerHTML = data.name + ' <span class="text-2xl text-white/60 font-light ml-2">' + data.nameCn + '</span>';
            document.getElementById('modalDescription').textContent = data.description;
            document.getElementById('modalBestTime').textContent = data.bestTime;
            document.getElementById('modalDuration').textContent = data.duration;
            
            var highlightsList = document.getElementById('modalHighlights');
            highlightsList.innerHTML = '';
            data.highlights.forEach(function(h) {
                var li = document.createElement('li');
                li.className = 'flex items-center gap-2 text-gray-700';
                li.innerHTML = '<svg class="w-4 h-4 text-green-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>' + h;
                highlightsList.appendChild(li);
            });
            
            var modal = document.getElementById('destModal');
            var content = document.getElementById('destModalContent');
            modal.style.display = 'flex';
            modal.style.pointerEvents = 'auto';
            
            requestAnimationFrame(function() {
                modal.style.opacity = '1';
                content.style.transform = 'scale(1)';
            });
            
            document.body.style.overflow = 'hidden';
        }
        
        function closeDestModal() {
            var modal = document.getElementById('destModal');
            var content = document.getElementById('destModalContent');
            modal.style.opacity = '0';
            content.style.transform = 'scale(0.95)';
            
            setTimeout(function() {
                modal.style.display = 'none';
                modal.style.pointerEvents = 'none';
                document.body.style.overflow = '';
            }, 400);
        }
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeDestModal();
            }
        });
        <\/script>
    `;
}

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
const modalHTML = generateModalHTML();
const cardHTML = generateCardHTML();

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');

    // 先移除可能存在的旧弹窗代码
    content = content.replace(/<!-- Destination Detail Modal -->[\s\S]*?<\/script>/, '');

    // For root about.html (it has <section id="destinations">)
    if (content.includes('<section id="destinations"')) {
        content = content.replace(/<section id="destinations"[^>]*>[\s\S]*?<\/section>/, cardHTML);
        // 在 </body> 之前插入弹窗代码
        content = content.replace('</body>', modalHTML + '\n    </body>');
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated layout and added modal in ${file}`);
    } 
    // For localized versions
    else if (content.includes('id="destinations"')) {
        const startIndex = content.indexOf('<h2', content.indexOf('id="destinations"') - 100);
        if(startIndex !== -1) {
            const endIndex = content.indexOf('<h2', content.indexOf('id="best-time"') - 100);
            if(endIndex !== -1) {
                content = content.substring(0, startIndex) + cardHTML + '\n        ' + content.substring(endIndex);
                // 在 </body> 之前插入弹窗代码
                content = content.replace('</body>', modalHTML + '\n    </body>');
                fs.writeFileSync(file, content, 'utf8');
                console.log(`Updated layout and added modal in ${file}`);
            } else {
                console.log(`Could not find end index for ${file}`);
            }
        }
    }
});

console.log('Done! All about.html files updated with modal functionality.');
