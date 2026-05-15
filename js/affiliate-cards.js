// Affiliate Card Renderer - 生成高转化推荐卡片
(function() {
  // 等待 AFFILIATE 配置加载
  function renderAffiliateCards() {
    document.querySelectorAll('[data-affiliate]').forEach(el => {
      const provider = el.dataset.affiliate;
      const config = AFFILIATE[provider];
      if (!config || config.id === 'YOUR_' + provider.toUpperCase() + '_ID') return;
      
      // 生成卡片
      el.innerHTML = `
        <a href="${config.link}" target="_blank" rel="nofollow sponsored" 
           class="affiliate-card block p-4 bg-white border-2 border-gray-200 rounded-xl hover:border-primary hover:shadow-lg transition-all duration-300 no-underline">
          <div class="flex items-center justify-between">
            <div>
              <p class="font-bold text-lg text-gray-900">${el.dataset.title || config.cta}</p>
              <p class="text-sm text-gray-500 mt-1">${el.dataset.desc || 'Best price guaranteed'}</p>
            </div>
            <span class="px-4 py-2 bg-green-500 text-white rounded-lg font-bold text-sm hover:bg-green-600 transition">
              ${config.cta || 'Check it out →'}
            </span>
          </div>
        </a>
      `;
      el.classList.add('affiliate-loaded');
    });
  }
  
  // Run on load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAffiliateCards);
  } else {
    renderAffiliateCards();
  }
})();
