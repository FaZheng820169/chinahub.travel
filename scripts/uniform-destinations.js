const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const uniformGridHTML = `
        <!-- Uniform Grid Destinations 3.0 (Premium Equal-Sized 6-Card Layout) -->
        <section id="destinations" class="mb-32">
            <div class="text-center mb-16 reveal-up">
                <span class="text-red-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Uncover the extraordinary</span>
                <h2 class="text-5xl md:text-7xl font-extrabold text-[var(--text-primary)] font-serif mb-6 tracking-tight">Top Destinations</h2>
                <div class="w-32 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full"></div>
            </div>
            
            <!-- Uniform Grid Container (3 columns, 2 rows) -->
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                
                <!-- 1. Beijing -->
                <div class="relative h-[420px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl reveal-up bg-stone-900 border border-white/10 transition-shadow duration-500" style="animation-delay: 100ms;">
                    <img src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&q=80" alt="Beijing" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" onerror="this.style.display='none'">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700"></div>
                    <div class="absolute inset-0 p-8 flex flex-col justify-end">
                        <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            <div class="flex flex-wrap items-center gap-2 mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                <span class="px-3 py-1 backdrop-blur-md bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-widest rounded-full uppercase">Capital</span>
                                <span class="px-3 py-1 backdrop-blur-md bg-red-600/80 border border-red-500/30 text-white text-[10px] font-bold tracking-widest rounded-full uppercase">Must Visit</span>
                            </div>
                            <h3 class="text-4xl font-bold text-white mb-2 font-serif tracking-tight">Beijing <span class="text-2xl text-white/50 font-light ml-1">北京</span></h3>
                            <div class="h-0 group-hover:h-20 overflow-hidden transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                                <p class="text-gray-300 mt-2 text-sm leading-relaxed line-clamp-3">The cultural and political heart of China. Walk the ancient stones of the Great Wall and explore the majestic Forbidden City.</p>
                            </div>
                            <div class="mt-4 flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                <span class="tracking-wider uppercase text-xs border-b border-white pb-0.5">Explore</span>
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 2. Xi'an -->
                <div class="relative h-[420px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl reveal-up bg-stone-900 border border-white/10 transition-shadow duration-500" style="animation-delay: 200ms;">
                    <img src="https://images.unsplash.com/photo-1599814467007-6bcfc23ffc8f?q=80&w=800" alt="Xi'an" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" onerror="this.style.display='none'">
                    <div class="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="absolute inset-0 p-8 flex flex-col justify-end">
                        <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            <span class="inline-block px-3 py-1 bg-amber-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Ancient History</span>
                            <h3 class="text-4xl font-bold text-white mb-2 font-serif tracking-tight">Xi'an <span class="text-2xl text-white/50 font-light ml-1">西安</span></h3>
                            <div class="h-0 group-hover:h-20 overflow-hidden transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                                <p class="text-gray-300 mt-2 text-sm leading-relaxed line-clamp-3">The starting point of the Silk Road and home to the world-famous Terracotta Army.</p>
                            </div>
                            <div class="mt-4 flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                <span class="tracking-wider uppercase text-xs border-b border-white pb-0.5">Explore</span>
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3. Chengdu -->
                <div class="relative h-[420px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl reveal-up bg-stone-900 border border-white/10 transition-shadow duration-500" style="animation-delay: 300ms;">
                    <img src="https://images.unsplash.com/photo-1570183884393-27ab206f6e52?q=80&w=800" alt="Chengdu Pandas" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" onerror="this.style.display='none'">
                    <div class="absolute inset-0 bg-gradient-to-t from-green-950/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700"></div>
                    <div class="absolute inset-0 p-8 flex flex-col justify-end">
                        <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            <span class="inline-block px-3 py-1 bg-green-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Pandas & Food</span>
                            <h3 class="text-4xl font-bold text-white mb-2 font-serif tracking-tight">Chengdu <span class="text-2xl text-white/50 font-light ml-1">成都</span></h3>
                            <div class="h-0 group-hover:h-20 overflow-hidden transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                                <p class="text-gray-300 mt-2 text-sm leading-relaxed line-clamp-3">A relaxed city famous for its spicy Sichuan cuisine, vibrant teahouses, and giant panda sanctuaries.</p>
                            </div>
                            <div class="mt-4 flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                <span class="tracking-wider uppercase text-xs border-b border-white pb-0.5">Explore</span>
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 4. Guilin -->
                <div class="relative h-[420px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl reveal-up bg-stone-900 border border-white/10 transition-shadow duration-500" style="animation-delay: 400ms;">
                    <img src="https://images.unsplash.com/photo-1552688468-15d9cc0357f0?q=80&w=800" alt="Guilin Landscape" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" onerror="this.style.display='none'">
                    <div class="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700"></div>
                    <div class="absolute inset-0 p-8 flex flex-col justify-end">
                        <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            <span class="inline-block px-3 py-1 bg-teal-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Natural Wonder</span>
                            <h3 class="text-4xl font-bold text-white mb-2 font-serif tracking-tight">Guilin <span class="text-2xl text-white/50 font-light ml-1">桂林</span></h3>
                            <div class="h-0 group-hover:h-20 overflow-hidden transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                                <p class="text-gray-300 mt-2 text-sm leading-relaxed line-clamp-3">Renowned for its dramatic karst mountains rising mysteriously from the meandering Li River.</p>
                            </div>
                            <div class="mt-4 flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                <span class="tracking-wider uppercase text-xs border-b border-white pb-0.5">Explore</span>
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 5. Hangzhou -->
                <div class="relative h-[420px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl reveal-up bg-stone-900 border border-white/10 transition-shadow duration-500" style="animation-delay: 500ms;">
                    <img src="https://images.unsplash.com/photo-1628100787126-7f41f0a205a2?q=80&w=800" alt="Hangzhou West Lake" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" onerror="this.style.display='none'">
                    <div class="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-black/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-700"></div>
                    <div class="absolute inset-0 p-8 flex flex-col justify-end">
                        <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            <span class="inline-block px-3 py-1 bg-emerald-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Scenic Beauty</span>
                            <h3 class="text-4xl font-bold text-white mb-2 font-serif tracking-tight">Hangzhou <span class="text-2xl text-white/50 font-light ml-1">杭州</span></h3>
                            <div class="h-0 group-hover:h-20 overflow-hidden transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                                <p class="text-gray-300 mt-2 text-sm leading-relaxed line-clamp-3">Celebrated for the picturesque West Lake, classical elegant gardens, and rich green tea culture.</p>
                            </div>
                            <div class="mt-4 flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                <span class="tracking-wider uppercase text-xs border-b border-white pb-0.5">Explore</span>
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 6. Shanghai -->
                <div class="relative h-[420px] rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl reveal-up bg-stone-900 border border-white/10 transition-shadow duration-500" style="animation-delay: 600ms;">
                    <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=800&q=80" alt="Shanghai" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" onerror="this.style.display='none'">
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-black/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-700"></div>
                    <div class="absolute inset-0 p-8 flex flex-col justify-end">
                        <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            <span class="inline-block px-3 py-1 bg-blue-600/90 text-white text-[10px] font-bold uppercase tracking-wider rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Metropolis</span>
                            <h3 class="text-4xl font-bold text-white mb-2 font-serif tracking-tight">Shanghai <span class="text-2xl text-white/50 font-light ml-1">上海</span></h3>
                            <div class="h-0 group-hover:h-20 overflow-hidden transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                                <p class="text-gray-300 mt-2 text-sm leading-relaxed line-clamp-3">A futuristic cyberpunk metropolis blending colonial European architecture on the Bund with soaring skyscrapers.</p>
                            </div>
                            <div class="mt-4 flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                <span class="tracking-wider uppercase text-xs border-b border-white pb-0.5">Explore</span>
                                <svg class="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>`;

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

    // For root about.html (it has <section id="destinations">)
    if (content.includes('<section id="destinations"')) {
        content = content.replace(/<section id="destinations"[^>]*>[\s\S]*?<\/section>/, uniformGridHTML);
        fs.writeFileSync(file, content, 'utf8');
        console.log(`Updated layout in ${file}`);
    } 
    // For localized versions (they had <h2 ... id="destinations"> followed by grid)
    else if (content.includes('id="destinations"')) {
        const startIndex = content.indexOf('<h2', content.indexOf('id="destinations"') - 100);
        if(startIndex !== -1) {
            const endIndex = content.indexOf('<h2', content.indexOf('id="best-time"') - 100);
            if(endIndex !== -1) {
                content = content.substring(0, startIndex) + uniformGridHTML + '\n        ' + content.substring(endIndex);
                fs.writeFileSync(file, content, 'utf8');
                console.log(`Updated layout in ${file}`);
            } else {
                console.log(`Could not find end index for ${file}`);
            }
        }
    } 
});
