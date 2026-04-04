# 💰 Finflow — Finance Dashboard 

> A beautiful, fully-featured personal finance dashboard built with pure **HTML, CSS & JavaScript** — no frameworks, no build tools, just open the file in any browser.

![Version](https://img.shields.io/badge/version-5.0-7C3AED?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-059669?style=flat-square)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chartdotjs&logoColor=white)
![No Dependencies](https://img.shields.io/badge/dependencies-0-success?style=flat-square)
![Single File](https://img.shields.io/badge/build-single--file-blueviolet?style=flat-square)

---

## 🔑 Key Features

---

### 🖥️ 1. Interactive Dashboard
> Your financial command centre — everything at a glance

- 📡 **Live scrolling ticker** — a real-time marquee strip showing balance, income, expenses, savings rate, top spend category and last-month net
- 🃏 **6 animated KPI summary cards** — each with a 3-stop vivid gradient background and drop shadow glow:
  - 💜 **Net Balance** — surplus or deficit at a glance
  - 💚 **Total Income** — all earnings across all months
  - ❤️ **Total Expenses** — all spending with entry count
  - 💙 **Savings Rate** — percentage of income saved
  - 🧡 **Transactions** — total count across all months
  - 🩷 **Avg Monthly Expense** — smoothed monthly spend
- 🧭 **Animated SVG savings gauge** — arc needle that sweeps from red (0%) to teal (40%+)
- 📈 **Balance trend line chart** — filled area chart of monthly net balance
- 📊 **Income vs Expenses bar chart** — side-by-side monthly comparison
- 🍩 **Spending donut chart** — category breakdown with colour-coded legend and percentages
- 📏 **Top category progress bars** — ranked horizontal bars with amounts and percentage share

---

### 📊 2. Rich Data Visualisations — 17 Charts Total
> Every angle of your finances, visually

| # | Chart | Type | Page |
|:---:|---|---|:---:|
| 1 | Balance Trend | Filled line | Dashboard |
| 2 | Income vs Expenses | Grouped bar | Dashboard |
| 3 | Spending by Category | Doughnut | Dashboard |
| 4 | Savings Rate Gauge | Animated SVG arc | Dashboard |
| 5 | Top Categories | Horizontal progress bars | Dashboard |
| 6 | Cumulative Cash Flow | Filled area | Analytics |
| 7 | Income Sources | Pie | Analytics |
| 8 | Expense Radar | Spider / radar | Analytics |
| 9 | Spending Heatmap | 12-cell intensity grid | Analytics |
| 10 | Monthly Net Waterfall | Green / red bar | Analytics |
| 11 | Income Distribution | Polar area | Analytics |
| 12 | Category Bubble | Bubble scatter | Analytics |
| 13 | 7-Day Rolling Average | Dual-layer line | Analytics |
| 14 | Income Streams | Stacked bar | Analytics |
| 15 | Budget Utilisation | Budget vs actual bar | Budget Goals |
| 16 | Remaining Budget | Doughnut | Budget Goals |
| 17 | Monthly Cashflow Delta | Surplus / deficit bar | Insights |

All charts **rebuild automatically** on dark/light mode switch and update live when transactions change.

---

### 💳 3. Full Transaction Management
> Complete CRUD with powerful filtering, grouping and sorting

- ➕ **Add** transactions via an animated glassmorphism modal with 6 fields: description, amount, date, type, category, note
- ✏️ **Edit** any transaction — modal pre-fills with existing values
- 🗑️ **Delete** with a confirmation prompt
- 🔍 **Live search** — filters across description, category and notes simultaneously as you type
- 🏷️ **Filter by type** — All / Income / Expense
- 🏷️ **Filter by category** — dropdown + quick-select coloured tag pills
- 📅 **Advanced filters** — date range (from / to), min & max amount, sort column, sort direction
- 📦 **Group by** — month, category or type; each group shows record count and net subtotal
- ↕️ **Sort by** — date, amount, name or category; ascending or descending
- ✨ **Staggered row animations** — each row slides in with a sequential delay

---

### 🎯 4. Budget Goals Tracker
> Set targets, track progress, catch overspending before it hurts

- 🎯 **Set a monthly budget** for any spending category with a single number
- 🎨 **Smart colour-coded progress bars** that shift automatically:
  - 🟢 **Green** — on track (0–79% of budget used)
  - 🟡 **Amber** — approaching limit (80–99% used)
  - 🔴 **Red** — over budget (100%+) with a ⚠ warning label
- 📊 **Budget vs Actual bar chart** — every category's budget vs real spending side-by-side
- 🍩 **Remaining budget donut** — visualises how much of each budget is still available
- 🚨 **Automatic over-budget alerts** in the Insights page listing every breached category
- 💾 **9 pre-loaded default budgets** covering Housing, Food, Transport, Entertainment, Shopping, Investments, Health, Education, Utilities
- 🔐 Budget management is **Admin-only** — Viewers can see but not change goals

---

### 💡 5. Smart Insights & Observations
> Automatic analysis that turns raw numbers into actionable findings

Five auto-generated insight cards with findings based on your actual data:

| Observation | What it tells you |
|---|---|
| 🔥 **Top spending category** | Highest expense category + % of total spend |
| 🎯 **Savings rate check** | Green if >20%, amber warning if below |
| 📈 **Month-over-month change** | Whether expenses rose or fell vs last month |
| 💹 **Investment recognition** | Positive note when investment spending is detected |
| 🚨 **Budget breach alert** | Lists every category that exceeded its monthly goal |

Plus category spending breakdown bars and a monthly cashflow delta chart.

---

### 🔐 6. Role-Based Access Control
> Simulate real-world permission levels with a single sidebar toggle

| Capability | 👑 Admin | 👁️ Viewer |
|---|:---:|:---:|
| View dashboard, analytics, insights | ✅ | ✅ |
| View transaction list | ✅ | ✅ |
| Search, filter, sort, group | ✅ | ✅ |
| View budget goals | ✅ | ✅ |
| Export CSV & JSON | ✅ | ✅ |
| Add new transactions | ✅ | ❌ |
| Edit existing transactions | ✅ | ❌ |
| Delete transactions | ✅ | ❌ |
| Set & remove budget goals | ✅ | ❌ |

Role selection **persists across page refreshes** via `localStorage`. UI controls appear and disappear instantly on role switch.

---

### 🌗 7. Dark Mode & Full Theming
> Every pixel adapts — no half-measures

- ☀️ / 🌙 **One-click toggle** in the sidebar footer
- 🎨 **Fully themed** — sidebar, topbar, all cards, modals, inputs, badges, scrollbars
- 📊 **Chart-aware** — axis ticks, grid line opacity and tooltip backgrounds all switch
- 🌈 **Background mesh** shifts from soft lavender gradients (light) to deep indigo/violet (dark)
- 🫧 **Orb colours** intensify in dark mode for a richer atmospheric effect
- 💾 **Persisted** — preference saved and restored on next visit
- ⚡ **Instant transition** — CSS custom properties enable smooth colour interpolation across all elements

---

### 💾 8. LocalStorage Data Persistence
> Everything survives a page refresh — no backend, no login, no data loss

| Key | What's Stored |
|---|---|
| `ff5_txs` | All transactions + next ID counter |
| `ff5_budget` | Category → monthly budget amount |
| `ff5_theme` | `"light"` or `"dark"` |
| `ff5_role` | `"admin"` or `"viewer"` |
| `ff5_log` | Last 50 mock API request logs |

Data is written automatically on every add, edit, delete, theme toggle and role switch.

---

### 🔌 9. Mock API Integration
> Simulates a real REST backend with live request logging

Every user action fires a **simulated HTTP call** with randomised latency (120–620ms):

| Action | Method | Endpoint |
|---|---|---|
| Load dashboard | `GET` | `/api/summary` |
| Load transactions | `GET` | `/api/txs` |
| Add transaction | `POST` | `/api/txs` |
| Edit transaction | `PUT` | `/api/txs/:id` |
| Delete transaction | `DELETE` | `/api/txs/:id` |
| Load / save budget | `GET` / `POST` | `/api/budget` |
| Export CSV or JSON | `GET` | `/api/export?fmt=csv|json` |

The API Log page includes **manual simulation buttons** for `500 Internal Server Error` and `401 Unauthorized`. Each entry shows method badge (colour-coded), path, status code, latency and timestamp.

---

### 📤 10. Export Functionality
> Download your data in the format you need

- 📄 **CSV** — headers: `Date, Description, Category, Type, Amount, Note`
- 🗂️ **JSON** — structured object with export timestamp, record count, financial summary, budget goals and full transaction array
- 🎯 **Filter-aware** — both exports reflect your **currently active filters**
- 📅 **Auto-named** — `finflow_YYYY-MM-DD.csv` / `.json`

---

### 🎨 11. Animated Background & Visual Effects
> A living, breathing canvas behind every screen

- 🌌 **Canvas particle system** — 80 glowing dots in 6 colours drifting continuously via `requestAnimationFrame`; each particle has its own lifespan, speed and opacity fade
- 🫧 **6 animated orbs** — large blurred circles (200–500px) on independent speeds (18–32s) with full 360° rotation + scale oscillation
- 🌈 **Mesh gradient backdrop** — 5 layered `radial-gradient` blobs over a base linear gradient; entirely different palette in dark mode
- 🪟 **Glassmorphism** — `backdrop-filter: blur(20px) saturate(200%)` on every card, sidebar, topbar, modal and input
- ⚡ **Rainbow shimmer loading bar** — 7-colour gradient that animates its `background-position` on every page transition
- 💎 **Logo pulse animation** — sidebar gem breathes with an expanding glow every 3 seconds
- 🎨 **Per-card colour stripes** — each chart card has a unique gradient top border matching the data it displays
- 🏔️ **Hover lift effects** — cards rise 2px with enhanced shadow; summary cards scale up on hover

---

### 📱 12. Fully Responsive Design
> Works on desktop, tablet and mobile

- 📱 **Mobile sidebar** — slides off-screen on viewports < 820px; hamburger toggle with smooth `cubic-bezier` transition and dark overlay
- 🔲 **Adaptive grids** — 3-col → 2-col at 1100px → 1-col at 820px
- 📋 **Transaction table** — columns progressively hide on narrow screens
- 🃏 **Summary cards** — reflow from 6-column to 2-column on mobile
- 🔧 **Filter toolbar** — controls wrap naturally, nothing overflows
- 🖥️ **Sticky topbar** — always visible during scroll on all screen sizes

---

## 🚀 Getting Started

### Option 1 — Zero setup *(recommended)*
```bash
open finflow-v5-final.html       # macOS
start finflow-v5-final.html      # Windows
xdg-open finflow-v5-final.html  # Linux
```
No server needed. Works entirely offline.

### Option 2 — Local server
```bash
python -m http.server 8080    # Python 3
npx serve .                   # Node.js
# → http://localhost:8080/finflow-v5-final.html
```

### Option 3 — GitHub Pages *(free live link)*
1. Push this repo to GitHub
2. **Settings → Pages → Deploy from branch → main → / (root)**
3. Live at: `https://YOUR_USERNAME.github.io/finflow-dashboard/finflow-v5-final.html`

---

## 🗃 Project Structure

```
finflow-dashboard/
├── finflow-v5-final.html   # The entire app — HTML + CSS + JS in one file
└── README.md               # This file
```

---

## 🛠 Tech Stack

| Technology | Role |
|---|---|
| **HTML5** | Structure & markup |
| **CSS3** — custom properties, keyframe animations, glassmorphism | Styling & theming |
| **Vanilla JavaScript ES6+** | State, routing, all logic |
| **[Chart.js 4.4](https://www.chartjs.org/)** | All 17 charts |
| **Canvas API** | Animated particle background |
| **localStorage API** | Client-side persistence |
| **[Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)** | Primary font |
| **[DM Mono](https://fonts.google.com/specimen/DM+Mono)** | Numbers & data labels |

**Zero npm packages · Zero build steps · Zero backend**

---

## 📝 Customising

### Add a new category
```js
// 1. In CAT_C:
const CAT_C = { 'Travel': '#0EA5E9' };

// 2. In CAT_STRIPE:
const CAT_STRIPE = { 'Travel': 'linear-gradient(90deg, #0284C7, #38BDF8)' };

// 3. Add <option>Travel</option> to both <select id="fCat2"> elements in HTML
```

### Change default budgets
```js
const DEFAULT_BUDGETS = {
  'Housing': 18000,
  'Food & Dining': 5000,
  // add or adjust any category
};
```

### Change seed data
Edit the `SEED` array near the top of the `<script>` block.

---

## 📄 License

**MIT** — free to use, modify and distribute for any purpose.

---

<div align="center">

**Built with ❤️ — HTML · CSS · JavaScript**

*No npm &nbsp;·&nbsp; No webpack &nbsp;·&nbsp; No framework &nbsp;·&nbsp; No backend &nbsp;·&nbsp; Just open and use*

</div>
