const express = require('express');
const path = require('path');
const fetch = (...args) => import('node-fetch').then(m => m.default(...args));

const app = express();
const PORT = process.env.PORT || 3000;

// ── Input validation & fetch hardening ─────────────────────────────
// Tickers: 1–10 chars, leading letter, allow letters/digits/dot/dash (BRK.B, RDS-A).
// Caps protect against unbounded fan-out → Yahoo rate limit / OOM.
const TICKER_RE = /^[A-Z][A-Z0-9.-]{0,9}$/;
const MAX_SYMBOLS = 200;
const FETCH_TIMEOUT_MS = 10000;
const FETCH_CONCURRENCY = 5;
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

function validateTicker(s) {
  if (s == null) throw new Error('ticker required');
  const u = String(s).toUpperCase().trim();
  if (!TICKER_RE.test(u)) throw new Error(`invalid ticker: ${s}`);
  return u;
}

function validateSymbols(raw) {
  const list = String(raw || '').split(',').map(s => s.trim().toUpperCase()).filter(Boolean);
  if (list.length > MAX_SYMBOLS) throw new Error(`too many symbols (max ${MAX_SYMBOLS})`);
  for (const s of list) if (!TICKER_RE.test(s)) throw new Error(`invalid ticker: ${s}`);
  return list;
}

async function fetchWithTimeout(url, opts = {}, ms = FETCH_TIMEOUT_MS) {
  const ctl = new AbortController();
  const t = setTimeout(() => ctl.abort(), ms);
  try {
    return await fetch(url, { ...opts, signal: ctl.signal });
  } finally {
    clearTimeout(t);
  }
}

async function mapLimit(items, limit, worker) {
  const results = new Array(items.length);
  let i = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx], idx);
    }
  });
  await Promise.all(runners);
  return results;
}

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Yahoo Finance proxy — avoids CORS issues on client
app.get('/api/quote/:symbol', async (req, res) => {
  let symbol;
  try {
    symbol = validateTicker(req.params.symbol);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
  try {
    const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(symbol)}?range=6mo&interval=1d`;
    const response = await fetchWithTimeout(url, { headers: { 'User-Agent': UA } });
    if (!response.ok) {
      return res.status(response.status).json({ error: `Yahoo returned ${response.status}` });
    }
    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(`/api/quote/${symbol} failed:`, err.message);
    res.status(502).json({ error: 'upstream fetch failed' });
  }
});

// Multi-quote endpoint
app.get('/api/quotes', async (req, res) => {
  let symbols;
  try {
    symbols = validateSymbols(req.query.symbols);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
  if (!symbols.length) return res.status(400).json({ error: 'symbols required' });

  try {
    const results = {};
    await mapLimit(symbols, FETCH_CONCURRENCY, async (sym) => {
      try {
        const url = `https://query1.finance.yahoo.com/v8/finance/chart/${encodeURIComponent(sym)}?range=1d&interval=1d`;
        const response = await fetchWithTimeout(url, { headers: { 'User-Agent': UA } });
        if (!response.ok) {
          results[sym] = { error: `Yahoo ${response.status}` };
          return;
        }
        const data = await response.json();
        const meta = data?.chart?.result?.[0]?.meta;
        if (meta && typeof meta.regularMarketPrice === 'number') {
          // Fall back to chartPreviousClose if previousClose is missing (sw-supply-chain pattern).
          const prev = meta.chartPreviousClose ?? meta.previousClose;
          results[sym] = {
            price: meta.regularMarketPrice,
            previousClose: prev,
            change: prev != null ? meta.regularMarketPrice - prev : 0,
            changePct: prev ? ((meta.regularMarketPrice - prev) / prev) * 100 : 0,
            currency: meta.currency,
            exchange: meta.exchangeName
          };
        }
      } catch (err) {
        // Per-symbol failures don't fail the batch — log and skip.
        console.warn(`/api/quotes ${sym}:`, err.message);
        results[sym] = { error: err.message };
      }
    });
    res.json(results);
  } catch (err) {
    console.error('/api/quotes failed:', err.message);
    res.status(502).json({ error: 'upstream fetch failed' });
  }
});

// News API endpoint
const NEWS_DATA = require('./news_data.json');
app.get('/api/news', (req, res) => {
  res.json(NEWS_DATA);
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Semi Equipment Dashboard running on port ${PORT}`);
});
