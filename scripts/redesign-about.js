const fs = require('fs');
const path = require('path');

const aboutFilePath = path.join(__dirname, '..', 'about.html');
let content = fs.readFileSync(aboutFilePath, 'utf8');

// The new premium layout for the main content
const newMainContent = `
    <!-- Hero Section: Immersive full-screen with gradient overlay -->
    <header class="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1543097692-f397315b0e00?q=80&w=2070&auto=format&fit=crop" 
                 alt="Traditional Chinese Architecture" 
                 class="w-full h-full object-cover animate-[scale-in_20s_ease-out_forwards]" 
                 onerror="this.src='https://placehold.co/1920x1080'">
            <div class="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-white/95"></div>
        </div>
        <div class="relative z-10 text-center px-4 max-w-5xl mx-auto reveal-up">
            <p class="text-red-500 font-bold tracking-[0.2em] uppercase mb-4 text-sm md:text-base">Explore the Middle Kingdom</p>
            <h1 class="text-6xl md:text-8xl font-extrabold text-white mb-8 font-serif tracking-tight drop-shadow-2xl">
                5,000 Years of<br/><span class="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-yellow-500">Heritage</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-light">
                Dive into the profound culture, ancient traditions, and epic landscapes of China.
            </p>
        </div>
        <!-- Scroll indicator -->
        <div class="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 animate-bounce text-gray-400">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
        </div>
    </header>

    <main class="max-w-7xl mx-auto px-6 py-24 flex-grow z-20 relative -mt-20">
        
        <!-- Bento Grid Destinations -->
        <section id="destinations" class="mb-32">
            <div class="text-center mb-16 reveal-up">
                <h2 class="text-5xl font-extrabold text-[var(--text-primary)] font-serif mb-4">Top Destinations</h2>
                <div class="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
                
                <!-- Beijing (Large) -->
                <div class="md:col-span-8 relative rounded-3xl overflow-hidden group cursor-pointer shadow-2xl reveal-up" style="animation-delay: 100ms;">
                    <img src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=1200" alt="Beijing" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8 md:p-12 w-full transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <span class="inline-block px-3 py-1 bg-red-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">Capital</span>
                        <h3 class="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">Beijing 北京</h3>
                        <p class="text-gray-300 text-lg md:text-xl max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">The cultural and political heart of China. Home to the Forbidden City and the Great Wall.</p>
                    </div>
                </div>

                <!-- Xi'an (Tall) -->
                <div class="md:col-span-4 md:row-span-2 relative rounded-3xl overflow-hidden group cursor-pointer shadow-2xl reveal-up" style="animation-delay: 200ms;">
                    <img src="https://images.unsplash.com/photo-1599814467007-6bcfc23ffc8f?q=80&w=800&auto=format&fit=crop" alt="Xi'an Terracotta Warriors" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                    <div class="absolute bottom-0 left-0 p-8 w-full transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <span class="inline-block px-3 py-1 bg-amber-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">History</span>
                        <h3 class="text-3xl md:text-4xl font-bold text-white mb-2 font-serif">Xi'an 西安</h3>
                        <p class="text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">The starting point of the Silk Road and home to the world-famous Terracotta Army.</p>
                    </div>
                </div>

                <!-- Shanghai (Wide) -->
                <div class="md:col-span-8 relative rounded-3xl overflow-hidden group cursor-pointer shadow-2xl reveal-up" style="animation-delay: 300ms;">
                    <img src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1200" alt="Shanghai" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-colors duration-500 group-hover:from-blue-900/90"></div>
                    <div class="absolute bottom-0 left-0 p-8 md:p-12 w-full transition-transform duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <span class="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded-full mb-3">Metropolis</span>
                        <h3 class="text-4xl md:text-5xl font-bold text-white mb-2 font-serif">Shanghai 上海</h3>
                        <p class="text-gray-300 text-lg md:text-xl max-w-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">A futuristic metropolis blending colonial European architecture on the Bund with cyberpunk skyscrapers.</p>
                    </div>
                </div>

            </div>
        </section>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <!-- Travel Time (Glassmorphism Card) -->
            <section id="best-time" class="relative bg-gray-50 rounded-[2.5rem] p-10 md:p-14 overflow-hidden reveal-up group hover:shadow-2xl transition-all duration-500 border border-gray-100">
                <div class="absolute top-0 right-0 -mr-8 -mt-8 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-50 group-hover:bg-blue-200 transition-colors"></div>
                <div class="relative z-10">
                    <div class="w-14 h-14 bg-white rounded-2xl shadow-sm flex items-center justify-center text-2xl mb-8 border border-gray-100">🌤️</div>
                    <h2 class="text-4xl font-extrabold text-[var(--text-primary)] mb-6 font-serif">When to Visit</h2>
                    <p class="text-lg text-gray-600 mb-8 leading-relaxed">
                        China is vast, but generally speaking, the best times to visit are <strong class="text-blue-600">Spring (April to May)</strong> and <strong class="text-orange-600">Autumn (September to October)</strong>. The weather is temperate and comfortable across most regions.
                    </p>
                    
                    <div class="bg-white/80 backdrop-blur-md border border-red-100 p-6 rounded-2xl shadow-sm relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                        <h4 class="text-lg font-bold text-red-900 mb-2 flex items-center gap-2">
                            <span class="text-xl">⚠️</span> Avoid the "Golden Weeks"
                        </h4>
                        <p class="text-red-800/80 text-sm m-0">Do not travel during the first week of May (Labor Day) or the first week of October (National Day). Tourist sites will be unimaginably crowded.</p>
                    </div>
                </div>
            </section>

            <!-- Culinary (Glassmorphism Card) -->
            <section id="food" class="relative bg-[var(--text-primary)] text-white rounded-[2.5rem] p-10 md:p-14 overflow-hidden reveal-up group hover:shadow-2xl transition-all duration-500">
                <div class="absolute bottom-0 right-0 -mr-12 -mb-12 w-64 h-64 bg-red-900 rounded-full blur-3xl opacity-40 group-hover:bg-red-800 transition-colors"></div>
                <div class="relative z-10">
                    <div class="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl mb-8 border border-white/10">🥢</div>
                    <h2 class="text-4xl font-extrabold text-white mb-6 font-serif">Culinary Diversity</h2>
                    <p class="text-lg text-gray-300 mb-8 leading-relaxed">
                        Chinese cuisine is not a monolith. It is divided into eight great traditions, with the most famous internationally being Sichuan (spicy and numbing), Cantonese (dim sum), and Shandong.
                    </p>
                    
                    <div class="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl relative overflow-hidden">
                        <div class="absolute top-0 left-0 w-1 h-full bg-primary"></div>
                        <h4 class="text-lg font-bold text-white mb-2">Dining Etiquette</h4>
                        <p class="text-gray-400 text-sm m-0 leading-relaxed">Never stick your chopsticks vertically into a bowl of rice, as it resembles incense offered to the dead. Always place them flat across your bowl or on a chopstick rest.</p>
                    </div>
                </div>
            </section>
        </div>
    </main>
`;

// Replace the old header and main content with the new one
const oldContentRegex = /<header class="relative h-\[60vh\].*?<\/main>/s;
content = content.replace(oldContentRegex, newMainContent.trim());

// Add scale animation keyframes to common.css if not present
const cssPath = path.join(__dirname, '..', 'input.css');
let cssContent = fs.readFileSync(cssPath, 'utf8');
if (!cssContent.includes('@keyframes scale-in')) {
    cssContent += `
@layer utilities {
  @keyframes scale-in {
    0% { transform: scale(1.1); }
    100% { transform: scale(1); }
  }
}
`;
    fs.writeFileSync(cssPath, cssContent, 'utf8');
}

fs.writeFileSync(aboutFilePath, content, 'utf8');
console.log('Successfully redesigned about.html with premium UI elements.');
