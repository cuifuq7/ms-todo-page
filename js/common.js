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

/* ========== 访问统计配置（双通道） ==========
 * 1. Abacus：页脚展示的实时“总访问量”。/hit 一次请求即完成计次并返回最新值，无缓存，
 *    清空 ABACUS_NAMESPACE 或 ABACUS_KEY 即关闭页脚访问量显示。
 *    管理地址（重置/改值需 admin key，勿提交到仓库）：
 *    https://abacus.jasoncameron.dev/create | /set | /reset
 * 2. GoatCounter：只做明细分析（Pages / Referer / 设备），不参与页脚展示。
 *    后台 https://mstodohub.goatcounter.com，留空则不发送打点。
 * 说明：两者均不使用 Cookie、不采集个人信息
 */
window.ABACUS_NAMESPACE = 'mstodo.dpdns.org';
window.ABACUS_KEY = 'visits';
window.GOATCOUNTER_CODE = 'mstodohub';

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
    '<p class="footer-copyright">&copy; 2026 MS-ToDo Hub. <span data-i18n="footer-copy">基于 Google Tasks 与 Microsoft To Do 官方 API 构建，与 Google LLC 及微软公司均无附属关系。</span></p>' +
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
        'footer-copy': '基于 Google Tasks 与 Microsoft To Do 官方 API 构建，与 Google LLC 及微软公司均无附属关系。',
        'footer-version': '当前版本 v5.5.2.42 | 更新于 2026-10-23',
        'footer-visitors': '本站总访问量 {n} 次'
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
        'footer-copy': 'Built on the official Google Tasks and Microsoft To Do APIs. Not affiliated with Google LLC or Microsoft.',
        'footer-version': 'Version v5.5.2.42 | Updated 2026-10-23',
        'footer-visitors': 'Total page views: {n}'
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

/* ========== 访问统计（GoatCounter） ========== */
window.visitorCount = null;

/**
 * 在页脚插入访问量占位行
 * 由 initCommon() 调用，index.html 与子页面共用同一套逻辑
 */
window.injectVisitorFooter = function() {
    if (!window.ABACUS_NAMESPACE || !window.ABACUS_KEY) return;
    var footer = document.querySelector('footer');
    if (!footer || document.getElementById('footer-visitors')) return;
    var p = document.createElement('p');
    p.className = 'footer-visitors';
    p.id = 'footer-visitors';
    p.innerHTML = '<i class="fa-solid fa-chart-simple"></i> <span id="footer-visitors-text"></span>';
    footer.appendChild(p);
    window.renderVisitorCount();
};

/** 数字格式化：Abacus 返回 number，GoatCounter 返回带千分位的 string */
window.formatVisitorCount = function(value) {
    if (value == null || value === '') return '--';
    var num = Number(String(value).replace(/,/g, ''));
    if (!isFinite(num)) return String(value);
    return num.toLocaleString(window.currentLang === 'zh' ? 'zh-CN' : 'en-US');
};

/** 按当前语言渲染访问量文案（语言切换时由 updateContent 触发） */
window.renderVisitorCount = function() {
    var text = document.getElementById('footer-visitors-text');
    if (!text) return;
    var tpl = (window.i18n[window.currentLang] || {})['footer-visitors'] || '本站总访问量 {n} 次';
    text.innerText = tpl.replace('{n}', window.formatVisitorCount(window.visitorCount));
};

/**
 * 拉取页脚实时总量：Abacus /hit 每次请求自增并返回最新值，刷新即可看到最新数字。
 * 失败（超时 / 限流 / 服务不可用）时降级读 GoatCounter 总量。
 */
window.loadVisitorCount = function() {
    var ctrl = typeof AbortController === 'function' ? new AbortController() : null;
    var timer = ctrl ? setTimeout(function() { ctrl.abort(); }, 4000) : null;
    function finish(value) {
        if (timer) clearTimeout(timer);
        if (value == null) return;
        window.visitorCount = value;
        window.renderVisitorCount();
    }
    var opts = { cache: 'no-store' };
    if (ctrl) opts.signal = ctrl.signal;

    fetch('https://abacus.jasoncameron.dev/hit/' +
        encodeURIComponent(window.ABACUS_NAMESPACE) + '/' + encodeURIComponent(window.ABACUS_KEY), opts)
        .then(function(res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        })
        .then(function(data) {
            if (data && data.value != null) finish(data.value);
            else window.loadGoatCounterTotal(finish);
        })
        .catch(function() {
            if (timer) clearTimeout(timer);
            window.loadGoatCounterTotal(finish);
        });
};

/** 降级方案：读取 GoatCounter 站点总量（该接口约 4 小时缓存） */
window.loadGoatCounterTotal = function(done) {
    var code = window.GOATCOUNTER_CODE;
    if (!code) return;
    fetch('https://' + code + '.goatcounter.com/counter/TOTAL.json', { cache: 'no-store' })
        .then(function(res) {
            if (!res.ok) throw new Error('HTTP ' + res.status);
            return res.json();
        })
        .then(function(data) {
            if (data && data.count != null) done(data.count);
        })
        .catch(function() {
            // 两个来源都不可用时保持 "--"，不影响页面其他功能
        });
};

/** 初始化访问统计：GoatCounter 打点（明细）+ Abacus 实时总量（页脚展示） */
window.initVisitorCount = function() {
    // 1) 明细打点：官方支持的无 JS 图片方式，不引入 gc.zgo.at（该 CDN 国内常不可达）
    if (window.GOATCOUNTER_CODE) {
        var hit = new Image();
        hit.src = 'https://' + window.GOATCOUNTER_CODE + '.goatcounter.com/count' +
            '?p=' + encodeURIComponent(location.pathname + location.search) +
            '&t=' + encodeURIComponent(document.title || '') +
            '&r=' + encodeURIComponent(document.referrer || '') +
            '&rnd=' + Date.now().toString(36);
    }

    // 2) 页脚实时总量：一次请求同时完成计次与取数
    if (window.ABACUS_NAMESPACE && window.ABACUS_KEY) window.loadVisitorCount();
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
    window.renderVisitorCount();
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
    window.injectVisitorFooter();
    window.initVisitorCount();
    window.updateContent();
};

document.addEventListener('DOMContentLoaded', function() {
    window.initCommon();
});
