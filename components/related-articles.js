// ChinaHub.travel - Related Articles Injection
// Dynamically adds "You Might Also Like" section before footer

const RELATED_ARTICLES = {
  "visa-guide": [
    {
      "title": "144-Hour Visa-Free Transit: Complete Guide 2026",
      "url": "/144-hour-transit-visa.html",
      "desc": "Which countries qualify and how to use it"
    },
    {
      "title": "Best Time to Visit China",
      "url": "/best-time-to-visit-china.html",
      "desc": "Season-by-season breakdown"
    },
    {
      "title": "China Travel Checklist",
      "url": "/china-travel-checklist.html",
      "desc": "Everything to prepare before your trip"
    }
  ],
  "payment-apps": [
    {
      "title": "Alipay & WeChat Pay: Complete Setup Guide",
      "url": "/alipay-wechat-pay-guide.html",
      "desc": "Link foreign cards step by step"
    },
    {
      "title": "eSIM vs VPN for China: Which Do You Need?",
      "url": "/china-esim-vs-vpn.html",
      "desc": "Connectivity comparison"
    },
    {
      "title": "China Travel Checklist",
      "url": "/china-travel-checklist.html",
      "desc": "Pre-trip preparation guide"
    }
  ],
  "vpn-internet": [
    {
      "title": "eSIM vs VPN for China: Which Do You Need?",
      "url": "/china-esim-vs-vpn.html",
      "desc": "Complete connectivity comparison"
    },
    {
      "title": "Best eSIM for China 2026",
      "url": "/esim-china-guide.html",
      "desc": "Top eSIM providers compared"
    },
    {
      "title": "China Train Travel Guide",
      "url": "/china-train-travel-guide.html",
      "desc": "High-speed rail booking tips"
    }
  ],
  "survival-guide": [
    {
      "title": "China Train Travel Guide",
      "url": "/china-train-travel-guide.html",
      "desc": "Navigate China's bullet trains"
    },
    {
      "title": "Food in China: A Traveler's Guide",
      "url": "/food.html",
      "desc": "Must-try dishes and dining etiquette"
    },
    {
      "title": "China Travel Checklist",
      "url": "/china-travel-checklist.html",
      "desc": "Pre-trip essentials"
    }
  ],
  "transport-guide": [
    {
      "title": "China Train Travel Guide",
      "url": "/china-train-travel-guide.html",
      "desc": "High-speed rail booking and tips"
    },
    {
      "title": "Shanghai to Hangzhou by Train",
      "url": "/shanghai-to-hangzhou-train.html",
      "desc": "Day trip guide"
    },
    {
      "title": "Survival Guide for China",
      "url": "/survival-guide.html",
      "desc": "Transportation and practical tips"
    }
  ],
  "faq": [
    {
      "title": "144-Hour Visa-Free Transit Guide",
      "url": "/144-hour-transit-visa.html",
      "desc": "Visa policies explained"
    },
    {
      "title": "eSIM vs VPN for China",
      "url": "/china-esim-vs-vpn.html",
      "desc": "Stay connected in China"
    },
    {
      "title": "China Travel Checklist",
      "url": "/china-travel-checklist.html",
      "desc": "Pre-trip preparation"
    }
  ],
  "china-esim-vs-vpn": [
    {
      "title": "Best eSIM for China 2026",
      "url": "/esim-china-guide.html",
      "desc": "Top eSIM providers reviewed"
    },
    {
      "title": "Internet & VPN Guide for China",
      "url": "/vpn-internet.html",
      "desc": "Complete connectivity guide"
    },
    {
      "title": "China Travel Checklist",
      "url": "/china-travel-checklist.html",
      "desc": "Pre-trip essentials"
    }
  ],
  "esim-china-guide": [
    {
      "title": "eSIM vs VPN for China",
      "url": "/china-esim-vs-vpn.html",
      "desc": "Which connectivity option is right for you?"
    },
    {
      "title": "Internet & VPN Guide for China",
      "url": "/vpn-internet.html",
      "desc": "Complete connectivity guide"
    },
    {
      "title": "Alipay & WeChat Pay Setup",
      "url": "/alipay-wechat-pay-guide.html",
      "desc": "Payments guide"
    }
  ],
  "china-travel-checklist": [
    {
      "title": "Visa Guide for China 2026",
      "url": "/visa-guide.html",
      "desc": "Entry requirements"
    },
    {
      "title": "Payments & Apps in China",
      "url": "/payment-apps.html",
      "desc": "Alipay, WeChat setup"
    },
    {
      "title": "Internet & VPN Guide",
      "url": "/vpn-internet.html",
      "desc": "Stay connected"
    }
  ],
  "china-train-travel-guide": [
    {
      "title": "Shanghai to Hangzhou by Train",
      "url": "/shanghai-to-hangzhou-train.html",
      "desc": "Popular day trip route"
    },
    {
      "title": "Transport Guide for China",
      "url": "/transport-guide.html",
      "desc": "All transportation options"
    },
    {
      "title": "Beijing 3-Day Itinerary",
      "url": "/beijing-3-day-itinerary.html",
      "desc": "Complete Beijing plan"
    }
  ],
  "144-hour-transit-visa": [
    {
      "title": "Visa Guide for China 2026",
      "url": "/visa-guide.html",
      "desc": "Complete visa information"
    },
    {
      "title": "Best Time to Visit China",
      "url": "/best-time-to-visit-china.html",
      "desc": "Seasonal travel guide"
    },
    {
      "title": "Beijing 3-Day Itinerary",
      "url": "/beijing-3-day-itinerary.html",
      "desc": "Make the most of 144 hours"
    }
  ],
  "alipay-wechat-pay-guide": [
    {
      "title": "Payments & Apps in China",
      "url": "/payment-apps.html",
      "desc": "Complete payment guide"
    },
    {
      "title": "eSIM vs VPN for China",
      "url": "/china-esim-vs-vpn.html",
      "desc": "Connectivity options"
    },
    {
      "title": "Survival Guide for China",
      "url": "/survival-guide.html",
      "desc": "Practical tips"
    }
  ],
  "best-time-to-visit-china": [
    {
      "title": "Visa Guide for China 2026",
      "url": "/visa-guide.html",
      "desc": "Entry requirements"
    },
    {
      "title": "Beijing 3-Day Itinerary",
      "url": "/beijing-3-day-itinerary.html",
      "desc": "Spring in Beijing"
    },
    {
      "title": "China Travel Checklist",
      "url": "/china-travel-checklist.html",
      "desc": "Seasonal packing tips"
    }
  ],
  "beijing-3-day-itinerary": [
    {
      "title": "Destinations: Beijing",
      "url": "/destinations/beijing.html",
      "desc": "Beijing travel guide"
    },
    {
      "title": "China Train Travel Guide",
      "url": "/china-train-travel-guide.html",
      "desc": "Getting around China"
    },
    {
      "title": "Heritage Sites in China",
      "url": "/heritage-sites.html",
      "desc": "UNESCO sites overview"
    }
  ],
  "shanghai-3-day-itinerary": [
    {
      "title": "Destinations: Shanghai",
      "url": "/destinations/shanghai.html",
      "desc": "Shanghai travel guide"
    },
    {
      "title": "Shanghai to Hangzhou by Train",
      "url": "/shanghai-to-hangzhou-train.html",
      "desc": "Day trip from Shanghai"
    },
    {
      "title": "China Train Travel Guide",
      "url": "/china-train-travel-guide.html",
      "desc": "Getting around China"
    }
  ],
  "guilin-3-day-itinerary": [
    {
      "title": "Destinations: Guilin",
      "url": "/destinations/guilin.html",
      "desc": "Guilin travel guide"
    },
    {
      "title": "Best Time to Visit China",
      "url": "/best-time-to-visit-china.html",
      "desc": "Best seasons for Guilin"
    },
    {
      "title": "Heritage Sites in China",
      "url": "/heritage-sites.html",
      "desc": "Natural wonders"
    }
  ],
  "shanghai-to-hangzhou-train": [
    {
      "title": "China Train Travel Guide",
      "url": "/china-train-travel-guide.html",
      "desc": "Complete train guide"
    },
    {
      "title": "Shanghai 3-Day Itinerary",
      "url": "/shanghai-3-day-itinerary.html",
      "desc": "Explore Shanghai"
    },
    {
      "title": "Destinations: Hangzhou",
      "url": "/destinations/hangzhou.html",
      "desc": "West Lake and more"
    }
  ],
  "food": [
    {
      "title": "Survival Guide for China",
      "url": "/survival-guide.html",
      "desc": "Dining and practical tips"
    },
    {
      "title": "China Travel Checklist",
      "url": "/china-travel-checklist.html",
      "desc": "Pre-trip essentials"
    },
    {
      "title": "Culture & History",
      "url": "/history.html",
      "desc": "Chinese cultural background"
    }
  ],
  "history": [
    {
      "title": "Heritage Sites in China",
      "url": "/heritage-sites.html",
      "desc": "56 UNESCO World Heritage sites"
    },
    {
      "title": "Food in China: A Traveler's Guide",
      "url": "/food.html",
      "desc": "Culinary culture"
    },
    {
      "title": "Destinations: Beijing",
      "url": "/destinations/beijing.html",
      "desc": "Imperial capital"
    }
  ],
  "heritage-sites": [
    {
      "title": "Culture & History",
      "url": "/history.html",
      "desc": "5000 years of civilization"
    },
    {
      "title": "Destinations: Beijing",
      "url": "/destinations/beijing.html",
      "desc": "Forbidden City & Great Wall"
    },
    {
      "title": "Destinations: Xi'an",
      "url": "/destinations/xi'an.html",
      "desc": "Terracotta Army"
    }
  ],
  "destinations/beijing": [
    {
      "title": "Beijing 3-Day Itinerary",
      "url": "/beijing-3-day-itinerary.html",
      "desc": "Perfect Beijing plan"
    },
    {
      "title": "Heritage Sites in China",
      "url": "/heritage-sites.html",
      "desc": "UNESCO wonders"
    },
    {
      "title": "China Train Travel Guide",
      "url": "/china-train-travel-guide.html",
      "desc": "Getting to Beijing"
    }
  ],
  "destinations/shanghai": [
    {
      "title": "Shanghai 3-Day Itinerary",
      "url": "/shanghai-3-day-itinerary.html",
      "desc": "Perfect Shanghai plan"
    },
    {
      "title": "Shanghai to Hangzhou by Train",
      "url": "/shanghai-to-hangzhou-train.html",
      "desc": "Day trip idea"
    },
    {
      "title": "Payments & Apps in China",
      "url": "/payment-apps.html",
      "desc": "Cashless Shanghai"
    }
  ],
  "destinations/chengdu": [
    {
      "title": "Food in China: A Traveler's Guide",
      "url": "/food.html",
      "desc": "Sichuan cuisine guide"
    },
    {
      "title": "China Train Travel Guide",
      "url": "/china-train-travel-guide.html",
      "desc": "Getting to Chengdu"
    },
    {
      "title": "Heritage Sites in China",
      "url": "/heritage-sites.html",
      "desc": "Nearby UNESCO sites"
    }
  ],
  "destinations/xi'an": [
    {
      "title": "Heritage Sites in China",
      "url": "/heritage-sites.html",
      "desc": "Terracotta Army & more"
    },
    {
      "title": "China Train Travel Guide",
      "url": "/china-train-travel-guide.html",
      "desc": "Getting to Xi'an"
    },
    {
      "title": "History of China",
      "url": "/history.html",
      "desc": "Ancient capital stories"
    }
  ],
  "destinations/guilin": [
    {
      "title": "Guilin 3-Day Itinerary",
      "url": "/guilin-3-day-itinerary.html",
      "desc": "Perfect Guilin plan"
    },
    {
      "title": "Best Time to Visit China",
      "url": "/best-time-to-visit-china.html",
      "desc": "Best seasons for Guilin"
    },
    {
      "title": "China Train Travel Guide",
      "url": "/china-train-travel-guide.html",
      "desc": "Getting to Guilin"
    }
  ],
  "destinations/hangzhou": [
    {
      "title": "Shanghai to Hangzhou by Train",
      "url": "/shanghai-to-hangzhou-train.html",
      "desc": "Easy trip from Shanghai"
    },
    {
      "title": "Destinations: Shanghai",
      "url": "/destinations/shanghai.html",
      "desc": "Nearby metropolis"
    },
    {
      "title": "Best Time to Visit China",
      "url": "/best-time-to-visit-china.html",
      "desc": "When to visit Hangzhou"
    }
  ]
};

(function() {
    // Determine current page key from URL
    let pageKey = window.location.pathname.replace(/^\//, '').replace(/\.html$/, '');
    if (!pageKey || pageKey === 'index') return;
    
    let articles = RELATED_ARTICLES[pageKey];
    if (!articles) return;
    
    // Build HTML
    let html = '<section class="max-w-7xl mx-auto px-6 py-16 mt-12 border-t border-gray-200">';
    html += '<h2 class="text-3xl font-extrabold text-[var(--text-primary)] mb-3">📖 You Might Also Like</h2>';
    html += '<p class="text-gray-500 mb-10 text-lg">Continue planning your China adventure</p>';
    html += '<div class="grid grid-cols-1 md:grid-cols-3 gap-8">';
    
    articles.forEach(a => {
        html += `<a href="${a.url}" class="group block bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-primary/30">
            <div class="p-6">
                <h3 class="font-bold text-lg text-[var(--text-primary)] group-hover:text-primary transition-colors mb-2">${a.title}</h3>
                <p class="text-gray-500 text-sm leading-relaxed">${a.desc}</p>
                <span class="inline-flex items-center gap-1 text-primary font-semibold text-sm mt-3 group-hover:gap-2 transition-all">
                    Read article <span class="group-hover:translate-x-0.5 transition-transform">→</span>
                </span>
            </div>
        </a>`;
    });
    
    html += '</div></section>';
    
    // Insert before footer
    let footer = document.querySelector('footer');
    if (footer) {
        footer.insertAdjacentHTML('beforebegin', html);
    }
})();
