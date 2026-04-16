/* ========================================
   Semi Equipment Value Chain Dashboard — i18n System
   ======================================== */
// Use safeStorage if available (from page's own shim), otherwise use own store
var i18nStorage = (typeof safeStorage !== 'undefined') ? safeStorage : {
  _s: {},
  getItem: function(k) { return this._s[k] || null; },
  setItem: function(k, v) { this._s[k] = v; }
};

var I18N_LANG = i18nStorage.getItem('lang') || 'en';

var I18N = {
  // ── Cross-Dashboard Nav ──
  "AI Hardware":            { zh: "AI硬件" },
  "Software Stack":         { zh: "软件生态" },
  "Semi Equipment":         { zh: "半导体设备" },
  "News Feed":              { zh: "新闻动态" },

  // ── Tab Bar ──
  "Main Dashboard":       { zh: "主控面板" },
  "Correlation":          { zh: "相关性分析" },
  "Technicals":           { zh: "技术分析" },
  "Insider Activity":     { zh: "内部交易" },
  "Options Flow":         { zh: "期权动向" },
  "Sentiment":            { zh: "市场情绪" },
  "Leaderboard":          { zh: "排行榜" },
  "Stress Test":          { zh: "压力测试" },

  // ── Page Titles ──
  "Semi Equipment — Complete Value Chain Research":  { zh: "半导体设备 — 完整价值链研究" },
  "Performance Leaderboard":        { zh: "绩效排行榜" },
  "Scenario / Stress Test":         { zh: "情景 / 压力测试" },
  "Market Sentiment Dashboard":     { zh: "市场情绪面板" },
  "Options Flow & Unusual Activity": { zh: "期权动向 & 异常活动" },
  "Options Flow &amp; Unusual Activity": { zh: "期权动向 & 异常活动" },
  "Insider & Institutional Activity": { zh: "内部 & 机构交易活动" },
  "Insider &amp; Institutional Activity": { zh: "内部 & 机构交易活动" },
  "Correlation Matrix & Cross-Layer Analysis": { zh: "相关性矩阵 & 跨层分析" },
  "Technical Analysis Dashboard":   { zh: "技术分析面板" },

  // ── Layer Names ──
  "Equipment Layers":             { zh: "设备层级" },
  "All Layers":                   { zh: "所有层级" },
  "EUV / Lithography":            { zh: "EUV光刻" },
  "EUV/Lithography":              { zh: "EUV光刻" },
  "Etch & Deposition":            { zh: "刻蚀与沉积" },
  "Etch &amp; Deposition":        { zh: "刻蚀与沉积" },
  "Process Control & Inspection": { zh: "过程控制与检测" },
  "Process Control &amp; Inspection": { zh: "过程控制与检测" },
  "Test & Measurement":           { zh: "测试与测量" },
  "Test &amp; Measurement":       { zh: "测试与测量" },
  "Materials & Chemicals":        { zh: "材料与化学品" },
  "Materials &amp; Chemicals":    { zh: "材料与化学品" },
  "Wafer & Substrate":            { zh: "晶圆与基板" },
  "Wafer &amp; Substrate":        { zh: "晶圆与基板" },
  "EDA & Design Software":        { zh: "EDA与设计软件" },
  "EDA &amp; Design Software":    { zh: "EDA与设计软件" },
  "Packaging & Assembly":         { zh: "封装与组装" },
  "Packaging &amp; Assembly":     { zh: "封装与组装" },
  "Foundry & IDM":                { zh: "代工与IDM" },
  "Foundry &amp; IDM":            { zh: "代工与IDM" },
  "Capital Equipment Services":   { zh: "设备服务与零部件" },

  // ── Section Titles ──
  "Overview":                     { zh: "概览" },
  "Macro Dashboard":              { zh: "宏观面板" },
  "Value Chain Map":              { zh: "价值链地图" },
  "Equipment Bottleneck Radar":   { zh: "设备瓶颈雷达" },
  "Bottleneck Radar":             { zh: "瓶颈雷达" },
  "Conviction List":              { zh: "信仰清单" },
  "Earnings Calendar":            { zh: "财报日历" },
  "Valuation Table":              { zh: "估值表" },
  "Risk Tracker":                 { zh: "风险追踪" },
  "Market Overview":              { zh: "市场概览" },
  "Performance Heatmap":          { zh: "绩效热力图" },
  "Portfolio Simulator":          { zh: "投资组合模拟器" },
  "Allocation":                   { zh: "配置" },
  "Results":                      { zh: "结果" },

  // ── Sidebar Labels ──
  "Upstream":                     { zh: "上游" },
  "Midstream":                    { zh: "中游" },
  "Downstream":                   { zh: "下游" },
  "Features":                     { zh: "功能" },
  "Analysis":                     { zh: "分析" },

  // ── KPI Labels ──
  "WFE Market 2026":              { zh: "2026年WFE市场" },
  "WFE YoY Growth":               { zh: "WFE同比增长" },
  "EUV Install Base":             { zh: "EUV装机量" },
  "CoWoS Capacity Gap":           { zh: "CoWoS产能缺口" },
  "Market Cap":                   { zh: "市值" },
  "P/E Ratio":                    { zh: "市盈率" },
  "EPS":                          { zh: "每股收益" },
  "Volume":                       { zh: "成交量" },
  "Avg Volume":                   { zh: "平均成交量" },
  "Day Range":                    { zh: "日内区间" },
  "52W Range":                    { zh: "52周区间" },
  "52-Week Range":                { zh: "52周区间" },
  "Div Yield":                    { zh: "股息率" },
  "Dividend Yield":               { zh: "股息率" },
  "Previous Close":               { zh: "前收盘价" },
  "Price":                        { zh: "价格" },
  "Change":                       { zh: "涨跌" },
  "Change %":                     { zh: "涨跌幅" },
  "Year Low":                     { zh: "52周最低" },
  "Year High":                    { zh: "52周最高" },
  "6M Return":                    { zh: "6个月回报" },

  // ── Conviction Tiers ──
  "Tier 1 — High Conviction":       { zh: "第一梯队 — 高确信度" },
  "Tier 2 — Growth + Value":        { zh: "第二梯队 — 成长 + 价值" },
  "Tier 3 — Speculative Upside":    { zh: "第三梯队 — 投机上行" },
  "Avoid / Caution":                { zh: "回避 / 谨慎" },
  "High Conviction":                { zh: "高确信度" },
  "Growth + Value":                 { zh: "成长 + 价值" },
  "Speculative Upside":             { zh: "投机上行" },
  "Score":                          { zh: "评分" },
  "Thesis":                         { zh: "投资逻辑" },
  "Signals":                        { zh: "信号" },

  // ── Bottleneck Labels ──
  "EUV Lithography Capacity":       { zh: "EUV光刻产能" },
  "Advanced Packaging (CoWoS)":     { zh: "先进封装(CoWoS)" },
  "HBM Supply":                     { zh: "HBM供应" },
  "Etch Tool Delivery":             { zh: "刻蚀设备交付" },
  "EDA Compute Resources":          { zh: "EDA算力资源" },
  "Critical":                       { zh: "严重" },
  "High":                           { zh: "高" },
  "Medium":                         { zh: "中等" },
  "Low":                            { zh: "低" },
  "Healthy":                        { zh: "健康" },
  "Moderate":                       { zh: "适中" },
  "Elevated":                       { zh: "偏高" },
  "Severe":                         { zh: "严重" },

  // ── Risk Labels ──
  "China Export Controls":          { zh: "中国出口管制" },
  "WFE Cycle Downturn":             { zh: "WFE周期下行" },
  "TSMC Concentration Risk":        { zh: "台积电集中风险" },
  "Geopolitical (Taiwan)":          { zh: "地缘政治(台湾)" },
  "AI Capex Pullback":              { zh: "AI资本开支收缩" },
  "Impact":                         { zh: "影响" },
  "Probability":                    { zh: "概率" },
  "Affected Layers":                { zh: "受影响层" },
  "Affected Tickers":               { zh: "受影响标的" },

  // ── Table Headers ──
  "Ticker":                         { zh: "代码" },
  "Company":                        { zh: "公司" },
  "Layer":                          { zh: "层" },
  "Return":                         { zh: "回报" },
  "Rank":                           { zh: "排名" },
  "1D":                             { zh: "1日" },
  "1W":                             { zh: "1周" },
  "1M":                             { zh: "1月" },
  "3M":                             { zh: "3月" },
  "6M":                             { zh: "6月" },
  "YTD":                            { zh: "年初至今" },
  "Signal":                         { zh: "信号" },
  "Direction":                      { zh: "方向" },
  "Buy":                            { zh: "买入" },
  "Sell":                           { zh: "卖出" },
  "Hold":                           { zh: "持有" },
  "Strong Buy":                     { zh: "强烈买入" },
  "Strong Sell":                    { zh: "强烈卖出" },
  "Bullish":                        { zh: "看多" },
  "Bearish":                        { zh: "看空" },
  "Neutral":                        { zh: "中性" },

  // ── Technicals ──
  "SMA 20":                         { zh: "20日均线" },
  "SMA 50":                         { zh: "50日均线" },
  "SMA 200":                        { zh: "200日均线" },
  "RSI":                            { zh: "相对强弱指标" },
  "MACD":                           { zh: "MACD" },
  "Bollinger Bands":                { zh: "布林带" },
  "Support":                        { zh: "支撑位" },
  "Resistance":                     { zh: "阻力位" },
  "Overbought":                     { zh: "超买" },
  "Oversold":                       { zh: "超卖" },
  "Moving Averages":                { zh: "移动平均" },
  "Volume Analysis":                { zh: "成交量分析" },
  "Technical Signals":              { zh: "技术信号" },
  "Average RSI":                    { zh: "平均RSI" },
  "Above SMA50":                    { zh: "高于SMA50" },
  "Bullish %":                      { zh: "看多占比" },
  "Overbought Count":               { zh: "超买数量" },
  "Price Chart":                    { zh: "价格图表" },
  "Support / Resistance":           { zh: "支撑位 / 阻力位" },

  // ── Correlation ──
  "Correlation Matrix":             { zh: "相关性矩阵" },
  "Cross-Layer Correlation":        { zh: "跨层相关性" },
  "Rolling Correlation":            { zh: "滚动相关性" },
  "Highly Correlated":              { zh: "高度相关" },
  "Low Correlation":                { zh: "低相关性" },
  "Negative Correlation":           { zh: "负相关" },
  "Highly Correlated Pairs":        { zh: "高度相关配对" },
  "Least Correlated Pairs":         { zh: "最低相关配对" },

  // ── Insider ──
  "Recent Transactions":            { zh: "近期交易" },
  "Buy/Sell Ratio":                 { zh: "买卖比" },
  "Notable Moves":                  { zh: "重要动态" },
  "Cluster Detection":              { zh: "聚集检测" },
  "Total Buys":                     { zh: "总买入" },
  "Total Sells":                    { zh: "总卖出" },
  "Net Activity":                   { zh: "净活动" },
  "Insider":                        { zh: "内部人" },
  "Title":                          { zh: "职位" },
  "Type":                           { zh: "类型" },
  "Shares":                         { zh: "股数" },
  "Value":                          { zh: "价值" },
  "Date":                           { zh: "日期" },

  // ── Options ──
  "Total Premium":                  { zh: "总权利金" },
  "Put/Call Ratio":                 { zh: "看跌/看涨比" },
  "Unusual Activity":               { zh: "异常活动" },
  "Most Active":                    { zh: "最活跃" },
  "Block Trades":                   { zh: "大宗交易" },
  "Gamma Exposure":                 { zh: "Gamma暴露" },
  "Max Pain":                       { zh: "最大痛苦值" },
  "Call":                           { zh: "看涨" },
  "Put":                            { zh: "看跌" },
  "Strike":                         { zh: "行权价" },
  "Expiry":                         { zh: "到期日" },
  "Premium":                        { zh: "权利金" },
  "OI":                             { zh: "未平仓量" },

  // ── Sentiment ──
  "Overall Sentiment":              { zh: "整体情绪" },
  "Sentiment by Layer":             { zh: "各层情绪" },
  "Social Media":                   { zh: "社交媒体" },
  "Analyst Ratings":                { zh: "分析师评级" },
  "Sentiment Momentum":             { zh: "情绪动量" },
  "News Sentiment":                 { zh: "新闻情绪" },
  "Improving":                      { zh: "改善中" },
  "Deteriorating":                  { zh: "恶化中" },
  "Stable":                         { zh: "稳定" },
  "Reddit":                         { zh: "Reddit" },
  "Twitter / X":                    { zh: "Twitter / X" },
  "StockTwits":                     { zh: "StockTwits" },

  // ── Leaderboard ──
  "Top Gainers":                    { zh: "涨幅榜" },
  "Top Losers":                     { zh: "跌幅榜" },
  "Volume Leaders":                 { zh: "成交量领先" },
  "Momentum Rankings":              { zh: "动量排名" },
  "Layer Performance":              { zh: "各层表现" },
  "Market Cap Leaders":             { zh: "市值排行" },
  "Relative Strength":              { zh: "相对强弱" },
  "Best Performer":                 { zh: "最佳表现" },
  "Worst Performer":                { zh: "最差表现" },
  "Avg Return":                     { zh: "平均回报" },
  "Tickers >20% 6M":               { zh: "6月涨幅>20%标的" },

  // ── Stress Test ──
  "China Export Controls Scenario":      { zh: "中国出口管制情景" },
  "WFE Cycle Downturn Scenario":         { zh: "WFE周期下行情景" },
  "TSMC Concentration Risk Scenario":    { zh: "台积电集中风险情景" },
  "Geopolitical (Taiwan) Scenario":      { zh: "地缘政治(台湾)情景" },
  "AI Capex Pullback Scenario":          { zh: "AI资本开支收缩情景" },
  "Impact Matrix":                  { zh: "影响矩阵" },
  "Projected Impact":               { zh: "预计影响" },
  "Before":                         { zh: "之前" },
  "After":                          { zh: "之后" },
  "Portfolio Impact":               { zh: "投资组合影响" },
  "Select Scenario":                { zh: "选择情景" },
  "Run Stress Test":                { zh: "运行压力测试" },
  "Winners":                        { zh: "赢家" },
  "Losers":                         { zh: "输家" },
  "Risk Summary":                   { zh: "风险概要" },

  // ── Common UI ──
  "Loading...":                     { zh: "加载中..." },
  "No data":                        { zh: "无数据" },
  "Search":                         { zh: "搜索" },
  "Filter":                         { zh: "筛选" },
  "Sort":                           { zh: "排序" },
  "All":                            { zh: "全部" },
  "Apply":                          { zh: "应用" },
  "Reset":                          { zh: "重置" },
  "Close":                          { zh: "关闭" },
  "Details":                        { zh: "详情" },
  "View on Yahoo Finance":          { zh: "在Yahoo Finance查看" },
  "View on Perplexity Finance":     { zh: "在Perplexity Finance查看" },
  "Open in Perplexity":             { zh: "在Perplexity中打开" },
  "LIVE":                           { zh: "实时" },
  "Apr 2026":                       { zh: "2026年4月" },
  "Full Ecosystem Research":        { zh: "完整生态系统研究" },
  "Semi Equipment Value Chain":     { zh: "半导体设备价值链" },
  "Full Ecosystem Research · Apr 2026": { zh: "完整生态系统研究 · 2026年4月" },

  // ── Portfolio Simulator ──
  "Initial Capital":                { zh: "初始资金" },
  "Total Allocation":               { zh: "总配置" },
  "Calculate":                      { zh: "计算" },
  "Projected Returns":              { zh: "预计回报" },
  "Equal Weight":                   { zh: "等权重" },

  // ── Theme ──
  "Light Mode":                     { zh: "亮色模式" },
  "Dark Mode":                      { zh: "暗色模式" },

  // ── Language toggle ──
  "EN":                             { zh: "EN" },
  "中文":                           { zh: "中文" },
};

/* ── Company Name Translations ── */
var I18N_COMPANIES = {
  "ASML Holding N.V.": "阿斯麦",
  "Onto Innovation Inc.": "Onto创新",
  "Lam Research Corporation": "泛林半导体",
  "Applied Materials, Inc.": "应用材料",
  "KLA Corporation": "科磊",
  "Teradyne, Inc.": "泰瑞达",
  "Coherent Corp.": "相干公司",
  "IPG Photonics Corporation": "IPG光子",
  "Entegris, Inc.": "英特格",
  "MKS Instruments, Inc.": "MKS仪器",
  "Camtek Ltd.": "康检",
  "Ultra Clean Holdings, Inc.": "超净控股",
  "Synopsys, Inc.": "新思科技",
  "Cadence Design Systems, Inc.": "楷登电子",
  "Ansys, Inc.": "安世",
  "Amkor Technology, Inc.": "安靠科技",
  "Aehr Test Systems": "Aehr测试",
  "FormFactor, Inc.": "FormFactor",
  "Taiwan Semiconductor Manufacturing Company Limited": "台积电",
  "Intel Corporation": "英特尔",
  "GLOBALFOUNDRIES Inc.": "格芯",
  "United Microelectronics Corporation": "联华电子",
  "Azenta, Inc.": "Azenta",
  "Ichor Holdings, Ltd.": "Ichor控股",
};

/* ── Translation Function ── */
function t(key) {
  if (I18N_LANG === 'en') return key;
  var entry = I18N[key];
  if (entry && entry.zh) return entry.zh;
  // Try normalized lookup (replace various dash types with standard em-dash)
  var normalized = key.replace(/[\u2012\u2013\u2014\u2015\u2212—–-]+/g, '\u2014');
  if (normalized !== key) {
    entry = I18N[normalized];
    if (entry && entry.zh) return entry.zh;
  }
  return key;
}

function tCompany(name) {
  if (I18N_LANG === 'en') return name;
  return I18N_COMPANIES[name] || name;
}

/* ── Apply translations to static DOM elements ── */
function applyI18n() {
  // Translate tab links
  document.querySelectorAll('.tab-link').forEach(function(el) {
    var orig = el.getAttribute('data-i18n') || el.textContent.trim();
    if (!el.getAttribute('data-i18n')) el.setAttribute('data-i18n', orig);
    el.textContent = t(orig);
  });

  // Translate h1, h2, h3
  document.querySelectorAll('h1, h2, h3').forEach(function(el) {
    // Skip if it contains child elements that aren't just text
    if (el.querySelector('button, input, select')) return;
    var orig = el.getAttribute('data-i18n') || el.innerHTML.trim();
    if (!el.getAttribute('data-i18n')) el.setAttribute('data-i18n', orig);
    el.innerHTML = t(orig);
  });

  // Translate buttons (but not period buttons like 1D, 1W etc., and not sb-item/sidebar-item which are handled separately)
  document.querySelectorAll('button').forEach(function(el) {
    if (el.classList.contains('sb-item') || el.classList.contains('sidebar-item')) return;
    var txt = el.textContent.trim();
    if (/^[0-9]/.test(txt) || txt === '×' || txt === '&times;' || txt.length > 60) return;
    var orig = el.getAttribute('data-i18n') || txt;
    if (!el.getAttribute('data-i18n')) el.setAttribute('data-i18n', orig);
    var translated = t(orig);
    if (translated !== orig) el.textContent = translated;
  });

  // Translate th elements
  document.querySelectorAll('th').forEach(function(el) {
    var orig = el.getAttribute('data-i18n') || el.textContent.trim();
    if (!el.getAttribute('data-i18n')) el.setAttribute('data-i18n', orig);
    var translated = t(orig);
    if (translated !== orig) el.textContent = translated;
  });

  // Translate p subtitles
  document.querySelectorAll('p').forEach(function(el) {
    var orig = el.getAttribute('data-i18n') || el.textContent.trim();
    if (I18N[orig]) {
      if (!el.getAttribute('data-i18n')) el.setAttribute('data-i18n', orig);
      el.textContent = t(orig);
    }
  });

  // Translate nav section buttons on index.html
  document.querySelectorAll('.nav-btn, .section-btn, [data-section]').forEach(function(el) {
    var orig = el.getAttribute('data-i18n') || el.textContent.trim();
    if (!el.getAttribute('data-i18n')) el.setAttribute('data-i18n', orig);
    el.textContent = t(orig);
  });

  // Translate sidebar items (sb-item and sidebar-item buttons) — preserve inner <span> dot
  document.querySelectorAll('.sb-item, .sidebar-item').forEach(function(el) {
    // The button has <span class="dot">...</span> + text node
    var textNodes = [];
    el.childNodes.forEach(function(n) {
      if (n.nodeType === 3 && n.textContent.trim()) textNodes.push(n);
    });
    if (textNodes.length > 0) {
      var orig = el.getAttribute('data-i18n') || textNodes[0].textContent.trim();
      if (!el.getAttribute('data-i18n')) el.setAttribute('data-i18n', orig);
      textNodes[0].textContent = t(orig);
    }
  });

  // Translate sidebar section titles
  document.querySelectorAll('.sb-section-title, .sidebar-title').forEach(function(el) {
    var orig = el.getAttribute('data-i18n') || el.textContent.trim();
    if (!el.getAttribute('data-i18n')) el.setAttribute('data-i18n', orig);
    el.textContent = t(orig);
  });

  // Translate card-title, sbar-label, kpi-label, section-header, stat-label elements
  document.querySelectorAll('.card-title, .sbar-label, .sec-title, .section-title, .section-header, .stat-title, .stat-label, .mr-label, .sc-metric-label, .rsk-title, .sidebar-group-title, .sidebar-category, .kpi-label, .section-desc, .page-subtitle').forEach(function(el) {
    var orig = el.getAttribute('data-i18n') || el.textContent.trim();
    if (!el.getAttribute('data-i18n')) el.setAttribute('data-i18n', orig);
    el.textContent = t(orig);
  });

  // Translate descriptions and subtitles with broad matching
  document.querySelectorAll('.sec-sub, .section-sub, .card-sub, .subtitle').forEach(function(el) {
    var orig = el.getAttribute('data-i18n') || el.textContent.trim();
    if (I18N[orig]) {
      if (!el.getAttribute('data-i18n')) el.setAttribute('data-i18n', orig);
      el.textContent = t(orig);
    }
  });

  // Update lang toggle button text
  var langBtn = document.getElementById('langToggle');
  if (langBtn) {
    langBtn.textContent = I18N_LANG === 'en' ? '中文' : 'EN';
  }
}

/* ── Translate dynamic content (company names, layer names in table cells) ── */
function applyI18nDynamic() {
  // Translate company names in table cells
  document.querySelectorAll('td').forEach(function(el) {
    var txt = el.textContent.trim();
    if (I18N_COMPANIES[txt]) {
      el.textContent = I18N_LANG === 'en' ? txt : I18N_COMPANIES[txt];
    }
    // Check for layer names in cells
    if (I18N[txt] && I18N[txt].zh) {
      el.textContent = t(txt);
    }
  });

  // Translate layer names in any element with class containing 'layer', 'sector', 'category'
  document.querySelectorAll('[class*="layer"], [class*="sector"], [class*="category"], .hl-name, .sector-name').forEach(function(el) {
    var txt = el.textContent.trim();
    if (I18N_COMPANIES[txt]) {
      el.textContent = I18N_LANG === 'en' ? txt : I18N_COMPANIES[txt];
    }
    if (I18N[txt] && I18N[txt].zh) {
      el.textContent = t(txt);
    }
  });

  // Translate labels in cards, divs with financial text
  document.querySelectorAll('.card-label, .metric-label, .stat-label, dt, label').forEach(function(el) {
    var txt = el.textContent.trim();
    if (I18N[txt] && I18N[txt].zh) {
      el.textContent = t(txt);
    }
  });

  // Translate option/select elements
  document.querySelectorAll('option').forEach(function(el) {
    var orig = el.getAttribute('data-i18n') || el.textContent.trim();
    if (I18N[orig] && I18N[orig].zh) {
      if (!el.getAttribute('data-i18n')) el.setAttribute('data-i18n', orig);
      el.textContent = t(orig);
    }
  });
}

/* ── Toggle Language ── */
function toggleLang() {
  I18N_LANG = I18N_LANG === 'en' ? 'zh' : 'en';
  i18nStorage.setItem('lang', I18N_LANG);
  applyI18n();
  // Re-render dynamic content if renderAll exists
  if (typeof renderAll === 'function') {
    try { renderAll(); } catch(e) {}
  }
  if (typeof renderTable === 'function' && typeof renderAll !== 'function') {
    try { renderTable(); } catch(e) {}
  }
  // Apply dynamic translations after re-render
  applyI18nDynamic();
}

/* ── Inject language toggle button into tab bar ── */
function injectLangToggle() {
  var nav = document.querySelector('.tab-bar');
  if (!nav) return;
  if (document.getElementById('langToggle')) return;
  var btn = document.createElement('button');
  btn.id = 'langToggle';
  btn.className = 'lang-toggle-btn';
  btn.textContent = I18N_LANG === 'en' ? '中文' : 'EN';
  btn.onclick = toggleLang;
  btn.style.cssText = 'margin-left:auto;padding:4px 14px;border-radius:6px;border:1px solid rgba(255,255,255,0.15);background:rgba(255,255,255,0.06);color:inherit;font-size:13px;font-weight:600;cursor:pointer;letter-spacing:0.5px;transition:all 0.2s;white-space:nowrap;';
  btn.onmouseenter = function() { btn.style.background = 'rgba(99,102,241,0.25)'; };
  btn.onmouseleave = function() { btn.style.background = 'rgba(255,255,255,0.06)'; 
  // ── Dashboard Enhancements: Search, Watchlist, Dark Mode, Compare ──
  "Search tickers...": { zh: "搜索股票代码…" },
  "No results found": { zh: "未找到结果" },
  "Navigate": { zh: "导航" },
  "Select": { zh: "选择" },
  "Close": { zh: "关闭" },
  "Watchlist": { zh: "关注列表" },
  "Compare": { zh: "对比" },
  "Dark Mode": { zh: "深色模式" },
  "Light Mode": { zh: "浅色模式" },
  "Quick Compare": { zh: "快速对比" },
  "Select 2-3 tickers to compare normalized performance": { zh: "选择2-3只股票以对比标准化表现" },
  "Click tickers below to select (max 3)": { zh: "点击下方股票代码以选择（最多3只）" },
  "No price data available for comparison": { zh: "没有可用于对比的价格数据" },
  "Normalized Performance (% Change)": { zh: "标准化表现（%变化）" },
  "Select at least 2 tickers": { zh: "至少选择2只股票" },
  "Search": { zh: "搜索" },
  "Toggle theme": { zh: "切换主题" },
  "Show watchlist only": { zh: "仅显示关注列表" },
  "Remove from compare": { zh: "从对比中移除" },
};
  nav.appendChild(btn);
}

/* ── Auto-init on DOM ready ── */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', function() {
    injectLangToggle();
    applyI18n();
    applyI18nDynamic();
  });
} else {
  injectLangToggle();
  applyI18n();
  applyI18nDynamic();
}
