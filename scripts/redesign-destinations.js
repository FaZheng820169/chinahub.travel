const fs = require('fs');
const path = require('path');

const projectRoot = path.join(__dirname, '..');

const bentoGridHTML = `
        <!-- Bento Grid Destinations 2.0 (Premium 6-Card Layout) -->
        <section id="destinations" class="mb-32">
            <div class="text-center mb-20 reveal-up">
                <span class="text-red-600 font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Uncover the extraordinary</span>
                <h2 class="text-5xl md:text-7xl font-extrabold text-[var(--text-primary)] font-serif mb-6 tracking-tight">Top Destinations</h2>
                <div class="w-32 h-1 bg-gradient-to-r from-red-600 to-amber-500 mx-auto rounded-full"></div>
            </div>
            
            <!-- Bento Grid Container -->
            <div class="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6 auto-rows-[250px] md:auto-rows-[300px]">
                
                <!-- 1. Beijing (Large Hero Card) -->
                <div class="md:col-span-8 md:row-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl reveal-up bg-stone-900 border border-white/10" style="animation-delay: 100ms;">
                    <img src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1600&q=80" alt="Beijing" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" onerror="this.style.display='none'">
                    <!-- Complex Gradient Overlay -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-700"></div>
                    <div class="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent w-1/2"></div>
                    
                    <div class="absolute inset-0 p-10 flex flex-col justify-end">
                        <div class="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            <div class="flex items-center gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                <span class="px-4 py-1.5 backdrop-blur-md bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest rounded-full uppercase">Capital</span>
                                <span class="px-4 py-1.5 backdrop-blur-md bg-red-600/80 border border-red-500/30 text-white text-xs font-bold tracking-widest rounded-full uppercase">Must Visit</span>
                            </div>
                            <h3 class="text-5xl md:text-7xl font-bold text-white mb-4 font-serif tracking-tight drop-shadow-lg">Beijing <span class="text-3xl md:text-5xl text-white/50 font-light tracking-widest ml-2">北京</span></h3>
                            <div class="h-0 group-hover:h-20 md:group-hover:h-16 overflow-hidden transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                                <p class="text-gray-300 text-lg max-w-2xl leading-relaxed">The cultural and political heart of China. Walk the ancient stones of the Great Wall and explore the majestic Forbidden City.</p>
                            </div>
                            <!-- Explore Button -->
                            <div class="mt-6 flex items-center gap-2 text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-300">
                                <span class="tracking-wider uppercase text-sm border-b border-white pb-1">Explore Itinerary</span>
                                <svg class="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 2. Xi'an (Tall Card) -->
                <div class="md:col-span-4 md:row-span-2 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl reveal-up bg-stone-900 border border-white/10" style="animation-delay: 200ms;">
                    <img src="https://images.unsplash.com/photo-1599814467007-6bcfc23ffc8f?q=80&w=800" alt="Xi'an" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" onerror="this.style.display='none'">
                    <div class="absolute inset-0 bg-gradient-to-t from-amber-950/90 via-black/40 to-transparent opacity-90"></div>
                    
                    <div class="absolute inset-0 p-8 flex flex-col justify-end">
                        <div class="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            <span class="inline-block px-3 py-1 bg-amber-600/90 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Ancient History</span>
                            <h3 class="text-4xl font-bold text-white mb-2 font-serif">Xi'an <span class="text-2xl text-white/50 font-light ml-1">西安</span></h3>
                            <div class="h-0 group-hover:h-24 overflow-hidden transition-all duration-700 ease-out opacity-0 group-hover:opacity-100">
                                <p class="text-gray-300 mt-2 text-sm leading-relaxed">The starting point of the Silk Road and home to the world-famous Terracotta Army.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3. Chengdu (Square Card) -->
                <div class="md:col-span-4 md:row-span-1 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl reveal-up bg-stone-900 border border-white/10" style="animation-delay: 300ms;">
                    <img src="https://images.unsplash.com/photo-1570183884393-27ab206f6e52?q=80&w=800" alt="Chengdu Pandas" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" onerror="this.style.display='none'">
                    <div class="absolute inset-0 bg-gradient-to-t from-green-950/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div class="absolute inset-0 p-8 flex flex-col justify-end">
                        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 class="text-3xl font-bold text-white mb-1 font-serif">Chengdu <span class="text-xl text-white/50 font-light ml-1">成都</span></h3>
                            <p class="text-green-300 font-medium tracking-wide uppercase text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Pandas & Spicy Food</p>
                        </div>
                    </div>
                </div>

                <!-- 4. Guilin (Square Card) -->
                <div class="md:col-span-4 md:row-span-1 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl reveal-up bg-stone-900 border border-white/10" style="animation-delay: 400ms;">
                    <img src="https://images.unsplash.com/photo-1552688468-15d9cc0357f0?q=80&w=800" alt="Guilin Landscape" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" onerror="this.style.display='none'">
                    <div class="absolute inset-0 bg-gradient-to-t from-teal-950/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div class="absolute inset-0 p-8 flex flex-col justify-end">
                        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 class="text-3xl font-bold text-white mb-1 font-serif">Guilin <span class="text-xl text-white/50 font-light ml-1">桂林</span></h3>
                            <p class="text-teal-300 font-medium tracking-wide uppercase text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">Karst Mountains</p>
                        </div>
                    </div>
                </div>

                <!-- 5. Hangzhou (Square Card) -->
                <div class="md:col-span-4 md:row-span-1 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl reveal-up bg-stone-900 border border-white/10" style="animation-delay: 500ms;">
                    <img src="https://images.unsplash.com/photo-1628100787126-7f41f0a205a2?q=80&w=800" alt="Hangzhou West Lake" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110" onerror="this.style.display='none'">
                    <div class="absolute inset-0 bg-gradient-to-t from-emerald-950/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div class="absolute inset-0 p-8 flex flex-col justify-end">
                        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                            <h3 class="text-3xl font-bold text-white mb-1 font-serif">Hangzhou <span class="text-xl text-white/50 font-light ml-1">杭州</span></h3>
                            <p class="text-emerald-300 font-medium tracking-wide uppercase text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">West Lake & Tea</p>
                        </div>
                    </div>
                </div>

                <!-- 6. Shanghai (Wide Panoramic Card) -->
                <div class="md:col-span-12 md:row-span-1 relative rounded-[2rem] overflow-hidden group cursor-pointer shadow-2xl reveal-up bg-stone-900 border border-white/10" style="animation-delay: 600ms;">
                    <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1600&q=80" alt="Shanghai" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105" onerror="this.style.display='none'">
                    <div class="absolute inset-0 bg-gradient-to-t from-blue-950/95 via-black/40 to-transparent opacity-90"></div>
                    
                    <div class="absolute inset-0 p-8 md:px-12 md:py-10 flex flex-col md:flex-row md:items-end justify-between">
                        <div class="transform translate-y-6 md:translate-y-0 group-hover:translate-y-0 transition-transform duration-700 ease-out">
                            <span class="inline-block px-3 py-1 bg-blue-600/90 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">Metropolis</span>
                            <h3 class="text-4xl md:text-5xl font-bold text-white font-serif">Shanghai <span class="text-3xl text-white/50 font-light ml-2">上海</span></h3>
                        </div>
                        
                        <div class="mt-4 md:mt-0 text-left md:text-right md:max-w-md">
                            <p class="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100 text-sm md:text-base">A futuristic cyberpunk metropolis blending colonial European architecture on the Bund with soaring skyscrapers.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>`;

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

    // Due to previous versions not having the wrapper section tag in localized folders,
    // we use a more robust regex to replace the old block starting with <h2 id="destinations"> 
    // or <section id="destinations"> all the way to the end of its enclosing div/section.
    
    // For root about.html (it has <section id="destinations">)
    if (content.includes('<section id="destinations"')) {
        content = content.replace(/<section id="destinations"[^>]*>[\s\S]*?<\/section>/, bentoGridHTML);
    } 
    // For localized versions (they had <h2 ... id="destinations"> followed by grid)
    else if (content.includes('id="destinations"')) {
        // Find the start of the destinations h2
        const startIndex = content.indexOf('<h2', content.indexOf('id="destinations"') - 100);
        if(startIndex !== -1) {
            // Very hacky but reliable for this specific template structure:
            // The destinations block ends right before the "Best Time to Visit" section or the end of <main>
            const endIndex = content.indexOf('<div class="bg-gray-50', startIndex);
            if(endIndex !== -1) {
                content = content.substring(0, startIndex) + bentoGridHTML + '\n        ' + content.substring(endIndex);
            }
        }
    }

    fs.writeFileSync(file, content, 'utf8');
    console.log(`Updated layout in ${file}`);
});
