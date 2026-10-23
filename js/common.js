/**
 * MS-ToDo Hub 官网共享模块
 * 提供子页面（privacy.html / price-tracker.html 等）共用的：
 *   - 导航栏 HTML
 *   - 页脚 HTML
 *   - 公共 i18n 键（nav / footer）
 *   - 语言切换核心逻辑
 *
 * 用法：
 *   1. HTML 中放置 <div id="nav-placeholder"></div> 和 <div id="footer-placeholder"></div>
 *   2. 在 inline <script> 之前引入本文件：<script src="js/common.js"></script>
 *   3. 用 extendI18n() 注入页面特有 i18n 键
 *   4. 如需页面特有后处理，定义 window.afterUpdate = function() { ... }
 */

/* ========== 共享导航栏 HTML ========== */
window.NAV_HTML = '<nav>' +
    '<div class="logo"><a href="/"><img src="img/logo/logo.png" alt="MS-ToDo Hub Logo"> MS-ToDo Hub</a></div>' +
    '<div class="nav-links">' +
        '<a href="/#features"><i class="fa-solid fa-star"></i> <span data-i18n="nav-features">功能</span></a>' +
        '<a href="/#showcase"><i class="fa-solid fa-eye"></i> <span data-i18n="nav-showcase">预览</span></a>' +
        '<a href="/#faq"><i class="fa-solid fa-circle-question"></i> FAQ</a>' +
        '<a href="price-tracker.html"><i class="fa-solid fa-tags"></i> <span data-i18n="nav-pricetracker">价格跟踪</span></a>' +
        '<div class="nav-lang" onclick="toggleLanguage()"><i class="fa-solid fa-globe"></i> <span id="lang-btn-text">English</span></div>' +
    '</div>' +
'</nav>';

/* ========== 共享页脚 HTML ========== */
window.FOOTER_HTML = '<footer>' +
    '<div class="footer-links">' +
        '<a href="https://github.com/cuifuq7/ms-todo" target="_blank"><i class="fa-brands fa-github"></i> <span data-i18n="footer-repo">代码仓库</span></a>' +
        '<a href="https://github.com/cuifuq7/ms-todo/issues" target="_blank"><i class="fa-solid fa-circle-exclamation"></i> <span data-i18n="footer-issue">提交 Issue</span></a>' +
        '<a href="/"><i class="fa-solid fa-house"></i> <span data-i18n="footer-home">返回首页</span></a>' +
        '<a href="price-tracker.html"><i class="fa-solid fa-tags"></i> <span data-i18n="footer-pricetracker">价格跟踪</span></a>' +
        '<a href="https://github.com/cuifuq7" target="_blank"><i class="fa-solid fa-user"></i> <span data-i18n="footer-contact">联系作者</span></a>' +
    '</div>' +
    '<p class="footer-copyright">&copy; 2026 MS-ToDo Hub. <span data-i18n="footer-copy">基于 Microsoft To Do 官方 API 构建，与微软公司无附属关系。</span></p>' +
    '<p class="footer-copyright" style="margin-top: 0.5rem;" data-i18n="footer-version">当前版本 v5.5.2.42 | 更新于 2026-10-23</p>' +
'</footer>';

/* ========== 公共 i18n 键（nav / footer） ========== */
window.COMMON_I18N = {
    'zh': {
        'nav-features': '功能',
        'nav-showcase': '预览',
        'nav-faq': 'FAQ',
        'nav-privacypolicy': '隐私政策',
        'nav-pricetracker': '价格跟踪',
        'footer-repo': '代码仓库',
        'footer-issue': '提交 Issue',
        'footer-contact': '联系作者',
        'footer-home': '返回首页',
        'footer-privacy': '隐私政策',
        'footer-pricetracker': '价格跟踪',
        'footer-copy': '基于 Microsoft To Do 官方 API 构建，与微软公司无附属关系。',
        'footer-version': '当前版本 v5.5.2.42 | 更新于 2026-10-23'
    },
    'en': {
        'nav-features': 'Features',
        'nav-showcase': 'Showcase',
        'nav-faq': 'FAQ',
        'nav-privacypolicy': 'Privacy Policy',
        'nav-pricetracker': 'Price Tracker',
        'footer-repo': 'Repository',
        'footer-issue': 'Submit Issue',
        'footer-contact': 'Contact Author',
        'footer-home': 'Back to Home',
        'footer-privacy': 'Privacy Policy',
        'footer-pricetracker': 'Price Tracker',
        'footer-copy': 'Built on Microsoft To-Do official API. Not affiliated with Microsoft.',
        'footer-version': 'Version v5.5.2.42 | Updated 2026-10-23'
    }
};

/* ========== 核心状态与钩子 ========== */
window.i18n = JSON.parse(JSON.stringify(window.COMMON_I18N));
window.currentLang = navigator.language.startsWith('zh') ? 'zh' : 'en';
window.afterUpdate = null;

/**
 * 合并页面特有 i18n 键到共享对象
 * @param {Object} pageI18n - 格式与 COMMON_I18N 相同：{ zh: {...}, en: {...} }
 */
window.extendI18n = function(pageI18n) {
    ['zh', 'en'].forEach(function(lang) {
        if (pageI18n[lang]) {
            Object.keys(pageI18n[lang]).forEach(function(key) {
                window.i18n[lang][key] = pageI18n[lang][key];
            });
        }
    });
};

/** 获取当前语言代码 */
window.getCurrentLang = function() {
    return window.currentLang;
};

/** 更新所有 [data-i18n] 元素的文本，末尾调用 afterUpdate 钩子 */
window.updateContent = function() {
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
        var key = el.getAttribute('data-i18n');
        if (window.i18n[window.currentLang] && window.i18n[window.currentLang][key]) {
            if (key === 'version-badge') {
                el.innerHTML = window.i18n[window.currentLang][key];
            } else {
                el.innerText = window.i18n[window.currentLang][key];
            }
        }
    });
    var langBtn = document.getElementById('lang-btn-text');
    if (langBtn) langBtn.innerText = window.currentLang === 'zh' ? 'English' : '中文';
    if (typeof window.afterUpdate === 'function') {
        window.afterUpdate();
    }
};

/** 切换中英文 */
window.toggleLanguage = function() {
    window.currentLang = window.currentLang === 'zh' ? 'en' : 'zh';
    window.updateContent();
};

/**
 * 初始化：注入 nav/footer，合并页面 i18n，设置初始内容
 * 由 DOMContentLoaded 自动调用
 */
window.initCommon = function() {
    var navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) navPlaceholder.outerHTML = window.NAV_HTML;
    var footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) footerPlaceholder.outerHTML = window.FOOTER_HTML;
    window.updateContent();
};

document.addEventListener('DOMContentLoaded', function() {
    window.initCommon();
});
