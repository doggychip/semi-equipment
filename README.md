# Semi Equipment — Full Value Chain Research Dashboard

A self-hosted equity research dashboard covering the **semiconductor equipment value chain**: lithography (ASML), deposition and etch (AMAT, LRCX, TEL, KLA), test and metrology, plus upstream materials and downstream foundries. Live prices, technicals, sentiment, options, news, insider activity, correlations, and stress-tests across the universe.

> **Stack:** Node.js + Express server, vanilla HTML/JS, Chart.js, Yahoo Finance v8 chart API.

---

## Quick start

```bash
git clone https://github.com/doggychip/semi-equipment.git
cd semi-equipment
npm install
npm start
```

Open `http://localhost:3000`. The server fetches live quotes from Yahoo on demand and serves the static dashboard pages from `public/`.

To run on a different port:

```bash
PORT=4000 npm start
```

---

## What's in here

The dashboard is a **multi-page static site** with a shared layout. Each page is a single self-contained HTML file in `public/`.

| Page | File | What it shows |
|---|---|---|
| **Main** | `index.html` | Value-chain view of equipment names, ticker cards with live price, change, range, thesis |
| **Technicals** | `technicals.html` | RSI, MACD, moving averages, support/resistance per ticker |
| **Sentiment** | `sentiment.html` | Sentiment scoring across the universe |
| **Options** | `options.html` | Options activity, IV, put/call ratios |
| **Stress Test** | `stress-test.html` | Scenario stress (WFE capex cycle, foundry pullback, China export controls) |
| **Correlation** | `correlation.html` | Pairwise correlation matrix across tickers |
| **Insider** | `insider.html` | Insider buy/sell activity |
| **News** | `news.html` | Aggregated news feed by ticker |
| **Leaderboard** | `leaderboard.html` | Daily winners/losers, momentum ranking |

The sidebar layout, theme tokens (dark/light), and i18n strings are defined in `dashboard_enhancements.css`, `dashboard_enhancements.js`, and `i18n.js` respectively.

---

## Data flow

```
Browser ─┐
         │  GET /api/quote/:symbol
         │  GET /api/quotes?symbols=...
         ▼
   server.js  ──►  Yahoo Finance v8 chart API
         │
         └──►  in-memory cache (60s TTL)
```

- **Canonical ticker list** is sourced from `public/semi_data.json`.
- **Editorial fields** (thesis, tags, layer, marketCap, pe) are authored manually and never overwritten.
- **Live fields** (`price`, `previousClose`, `change`, `changePct`, `dayHigh`, `dayLow`, `yearHigh`, `yearLow`, `volume`) are refreshed from Yahoo.

### Refreshing prices manually

This repo currently does not ship a `scripts/update_prices.js`. To refresh prices, copy the script from the sibling [`software-supply-chain`](https://github.com/doggychip/software-supply-chain/blob/main/scripts/update_prices.js) repo, which auto-detects the same `semi_data.json` schema. Roadmap item: vendor it into this repo.

---

## Adding a new ticker

1. Edit `public/semi_data.json` — add the ticker with editorial fields filled in.
2. Refresh prices (see above).
3. Reload the page — the dashboard reads `semi_data.json` on load.

---

## Project structure

```
semi-equipment/
├── server.js                     # Express server + Yahoo proxy + cache
├── package.json
├── news_data.json                # cached news feed
└── public/
    ├── index.html                # main value-chain view
    ├── sentiment.html
    ├── technicals.html
    ├── options.html
    ├── stress-test.html
    ├── correlation.html
    ├── insider.html
    ├── news.html
    ├── leaderboard.html
    ├── semi_data.json            # canonical ticker + editorial data
    ├── dashboard_enhancements.css
    ├── dashboard_enhancements.js
    └── i18n.js
```

---

## Configuration

| Env var | Default | Purpose |
|---|---|---|
| `PORT` | `3000` | HTTP port |

No secrets required — Yahoo's `v8/finance/chart` endpoint is unauthenticated. The `User-Agent` header in `server.js` is required to avoid 403s.

---

## Known limitations

- **No price-update script** — needs to be vendored from the sibling repo.
- **Yahoo dependency** — the v8 chart endpoint is unofficial and can rate-limit or change without notice. Migration to LSEG/Refinitiv is on the roadmap.
- **Cache is in-memory** — restarting flushes all quotes.
- **No tests, no CI**.
- **Heavy code duplication** with sibling repos — extracting shared assets into a shared package is on the roadmap.

---

## Sibling dashboards

- [`software-supply-chain`](https://github.com/doggychip/software-supply-chain) — Software value chain
- [`ai-supply-chain`](https://github.com/doggychip/ai-supply-chain) — AI infrastructure value chain

---

## License

MIT
