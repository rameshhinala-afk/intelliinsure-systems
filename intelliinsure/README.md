# IntelliInsure Systems
## AI for Insurance Data — Complete Web Application

Dark enterprise-themed insurance intelligence platform powered by Claude AI.

---

## Project Structure

```
intelliinsure/
├── index.html                  ← Dashboard (open this first)
├── css/
│   └── styles.css              ← Full design system (dark theme)
├── js/
│   ├── app.js                  ← Core utilities + Claude API helper
│   └── sidebar.js              ← Shared sidebar component
└── pages/
    ├── policy.html             ← AI Policy Analyzer
    ├── claims.html             ← AI Claims Processor + Queue
    ├── risk.html               ← AI Risk Scorer + Gauge
    ├── fraud.html              ← AI Fraud Detector + Case Library
    ├── customers.html          ← Customer Database + AI Profiles
    ├── reports.html            ← AI Report Generator + Quick Insights
    └── settings.html           ← Platform Settings
```

---

## Features

| Module | Key Capabilities |
|---|---|
| **Dashboard** | Metrics, claims trend chart, category breakdown, quick access |
| **Policy Analyzer** | AI assessment: suitability, gaps, premium, risk level, recommendations |
| **Claims Processor** | AI decision (approve/reject/investigate), fraud risk, payout suggestion, queue management |
| **Risk Scorer** | 1–10 risk score with animated gauge, factor breakdown, premium loading, underwriting decision |
| **Fraud Detector** | Pattern matching, red flags, investigation checklist, SIU referral, case library |
| **Customers** | Searchable/filterable table, AI-generated customer profiles |
| **Reports** | 7 report types + 6 quick intelligence queries |
| **Settings** | Company profile, AI config, user account, notification prefs |

---

## How to Run

### Option 1 — Python (simplest)
```bash
cd intelliinsure
python -m http.server 8080
# Open: http://localhost:8080
```

### Option 2 — Node.js
```bash
cd intelliinsure
npx serve .
```

### Option 3 — VS Code Live Server
Right-click `index.html` → Open with Live Server

> ⚠ **Do not open HTML files directly as file:// URLs** — browsers will block the Anthropic API CORS requests. Always use a local server.

---

## AI Setup

### Inside Claude.ai (default — no key needed)
The app calls `https://api.anthropic.com/v1/messages` through the Claude.ai proxy. No API key required.

### Outside Claude.ai (standalone use)
Edit `js/app.js` — find the `ai()` function and add headers:

```javascript
headers: {
  'Content-Type': 'application/json',
  'x-api-key': 'sk-ant-YOUR_KEY_HERE',
  'anthropic-version': '2023-06-01',
  'anthropic-dangerous-direct-browser-access': 'true'
},
```

Get API key: https://console.anthropic.com

---

## Tech Stack
- **Frontend**: Pure HTML5 · CSS3 · Vanilla JavaScript
- **Fonts**: Syne (display/headings) + Instrument Sans (body) via Google Fonts
- **Theme**: Dark enterprise — navy/slate with teal accent
- **AI**: Claude Sonnet 4 via Anthropic Messages API
- **No frameworks, no npm, no build tools required**
- **Zero external JS dependencies**

---

## Design Language
- Dark base: `#0d1117` (GitHub-inspired deep navy)
- Surface layers: `#161b22`, `#1a2030`, `#1e2530`
- Accent: `#00c9a7` (teal/emerald)
- Typography: Syne for headings (geometric, modern), Instrument Sans for body
- Semantic color system for badges, alerts, and status indicators
