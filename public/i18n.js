/* ========================================
   Semi Equipment Value Chain Dashboard — i18n System
   ======================================== */
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

  // ── Company Names ──
  "ASML Holding N.V.":              { zh: "阿斯麦" },
  "Onto Innovation Inc.":           { zh: "Onto创新" },
  "Lam Research Corporation":       { zh: "泛林半导体" },
  "Applied Materials, Inc.":        { zh: "应用材料" },
  "KLA Corporation":                { zh: "科磊" },
  "Teradyne, Inc.":                 { zh: "泰瑞达" },
  "Coherent Corp.":                 { zh: "相干公司" },
  "IPG Photonics Corporation":      { zh: "IPG光子" },
  "Entegris, Inc.":                 { zh: "英特格" },
  "MKS Instruments, Inc.":          { zh: "MKS仪器" },
  "Camtek Ltd.":                    { zh: "康检" },
  "Ultra Clean Holdings, Inc.":     { zh: "超净控股" },
  "Synopsys, Inc.":                 { zh: "新思科技" },
  "Cadence Design Systems, Inc.":   { zh: "楷登电子" },
  "Ansys, Inc.":                    { zh: "安世" },
  "Amkor Technology, Inc.":         { zh: "安靠科技" },
  "Aehr Test Systems":              { zh: "Aehr测试" },
  "FormFactor, Inc.":               { zh: "FormFactor" },
  "Taiwan Semiconductor Manufacturing Company Limited": { zh: "台积电" },
  "Intel Corporation":              { zh: "英特尔" },
  "GLOBALFOUNDRIES Inc.":           { zh: "格芯" },
  "United Microelectronics Corporation": { zh: "联华电子" },
  "Azenta, Inc.":                   { zh: "Azenta" },
  "Ichor Holdings, Ltd.":           { zh: "Ichor控股" },

  // ── Theme ──
  "Light Mode":                     { zh: "亮色模式" },
  "Dark Mode":                      { zh: "暗色模式" },
  "EN":                             { zh: "EN" },
  "中":                             { zh: "中" },
};

/**
 * Translate a key. Returns Chinese if available and lang=zh, else returns key.
 * Normalizes dashes for cross-encoding compatibility.
 */
function t(key) {
  if (I18N_LANG !== 'zh') return key;
  if (I18N[key] && I18N[key].zh) return I18N[key].zh;
  var nk = key.replace(/[\u2013\u2014]/g, '-').replace(/&amp;/g, '&');
  if (I18N[nk] && I18N[nk].zh) return I18N[nk].zh;
  return key;
}

/**
 * Apply translations to all elements with data-i18n attribute
 */
function applyI18n() {
  var els = document.querySelectorAll('[data-i18n]');
  els.forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (I18N_LANG === 'zh') {
      el.textContent = t(key);
    } else {
      el.textContent = key;
    }
  });

  var tabs = document.querySelectorAll('.tab-link');
  tabs.forEach(function(tab) {
    var key = tab.getAttribute('data-i18n') || tab.textContent.trim();
    if (I18N_LANG === 'zh' && I18N[key]) {
      tab.textContent = I18N[key].zh;
    }
  });

  var sbItems = document.querySelectorAll('.sidebar-item');
  sbItems.forEach(function(btn) {
    var span = btn.querySelector('.sidebar-dot');
    var textSpan = btn.querySelector('[data-i18n]');
    if (textSpan) return;
    var text = btn.textContent.trim();
    if (I18N_LANG === 'zh') {
      var translated = t(text);
      if (span) {
        btn.textContent = '';
        btn.appendChild(span);
        btn.appendChild(document.createTextNode(translated));
      } else {
        btn.textContent = translated;
      }
    }
  });

  var titles = document.querySelectorAll('.sidebar-title, .section-title, .card-title, .stat-label, .page-subtitle');
  titles.forEach(function(el) {
    var key = el.getAttribute('data-i18n') || el.textContent.trim();
    if (I18N_LANG === 'zh') {
      el.textContent = t(key);
    }
  });

  var h1 = document.querySelector('.page-title');
  if (h1) {
    var key = h1.getAttribute('data-i18n') || h1.textContent.trim();
    if (I18N_LANG === 'zh') {
      h1.textContent = t(key);
    }
  }
}

/**
 * Toggle between English and Chinese
 */
function toggleLang() {
  I18N_LANG = (I18N_LANG === 'en') ? 'zh' : 'en';
  i18nStorage.setItem('lang', I18N_LANG);
  
  var langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.textContent = (I18N_LANG === 'en') ? '中' : 'EN';
  }
  
  applyI18n();
  
  if (typeof refreshI18n === 'function') refreshI18n();
}

// Apply on load
document.addEventListener('DOMContentLoaded', function() {
  var langBtn = document.getElementById('lang-btn');
  if (langBtn) {
    langBtn.textContent = (I18N_LANG === 'en') ? '中' : 'EN';
  }
  applyI18n();
});
