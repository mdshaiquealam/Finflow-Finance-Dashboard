💰 Finflow — Finance Dashboard v5

A beautiful, fully-featured personal finance dashboard built with pure HTML, CSS & JavaScript — no frameworks, no build tools, just open the file in any browser.
✨ Features
🎨 Beautiful UI

Animated canvas particle system — 80 glowing floating dots drifting across the background
6 floating glowing orbs with independent rotation & scale animations
Glassmorphism design — every card, sidebar and modal uses backdrop-filter: blur(20px) saturate(200%)
5-colour mesh gradient background in both light and dark modes
Dark mode with full theme persistence via localStorage
Rainbow shimmer loading bar that plays on every page transition
Gradient summary cards — each with a vibrant 3-stop colour + matching glow shadow

📊 Charts & Visualisations (13 total)
ChartDescriptionBalance trendLine chart showing monthly net balanceIncome vs ExpensesGrouped bar chart by monthSpending donutCategory breakdown with legendSavings gaugeAnimated SVG arc needleTop categoriesRanked horizontal progress barsCumulative cash flowFilled area chart of running totalIncome sourcesPie chart by income categoryExpense radarSpider web of spending patternsSpending heatmap12-cell monthly intensity mapMonthly waterfallGreen/red net bars by monthIncome polarRadial area chart by monthCategory bubbleFrequency vs spend scatter7-day rolling avgSmoothed daily expense trendIncome streamsStacked bar by income typeMonthly deltaSurplus/deficit bar chartBudget utilisationBudget vs actual grouped barsRemaining budgetDonut of remaining budget by category
🗂 Pages

Dashboard — Live ticker, 6 KPI cards, trend line, bar chart, donut, gauge, top categories
Analytics — 9 deep-dive charts covering every angle of your finances
Transactions — Full table with search, filter, sort, grouping, and CRUD
Budget Goals — Set monthly budgets per category, track progress, get alerts
Insights — Smart auto-generated observations with budget breach alerts
API Log — Mock API activity log with method badges, latency, and status codes

🔐 Role System
FeatureAdminViewerView all data✅✅Add transactions✅❌Edit transactions✅❌Delete transactions✅❌Set budget goals✅❌Export CSV / JSON✅✅
💾 Data & State

localStorage persistence — transactions, budgets, role, theme and API log all survive page refresh
Mock API integration — every action fires a simulated HTTP call with realistic latency (120–620ms)
Export — CSV and JSON export of the currently filtered transaction view
Advanced filtering — date range, amount range, category tags, sort column & direction
Grouping — group transactions by month, category or type with subtotals


🚀 Getting Started
Option 1 — Just open it
bash# Download finflow-v5-final.html, then simply:
open finflow-v5-final.html        # macOS
start finflow-v5-final.html       # Windows
xdg-open finflow-v5-final.html   # Linux
No server, no install, no dependencies. It works entirely offline.
Option 2 — Serve locally
bash# Python
python -m http.server 8080
🗃 Project Structure
finflow-dashboard/
├── finflow-v5-final.html   # Complete self-contained app (HTML + CSS + JS)
└── README.md               # This file
Everything is in a single HTML file — no external files, no bundler, no npm install.

🛠 Tech Stack
TechnologyPurposeHTML5StructureCSS3 (custom properties, animations, glassmorphism)StylingVanilla JavaScript (ES6+)Logic & state managementChart.js 4.4All charts (loaded from CDN)Plus Jakarta SansPrimary fontDM MonoMonospace / data fontlocalStoragePersistence

📸 Pages Preview
Dashboard
Live ticker strip → 6 gradient KPI cards → balance trend line → income vs expenses bar chart → spending donut → animated savings gauge → top category bars
Analytics
9 charts: cumulative area, income pie, expense radar, spending heatmap, waterfall, polar area, category bubble, 7-day rolling average, stacked income bars
Transactions
Full data table with live search, type/category/group filters, advanced date & amount range panel, quick category tag pills, animated row entries
Budget Goals
Set monthly budgets per category, animated progress bars (green → amber → red), budget vs actual chart, remaining budget donut
Insights
Smart auto-generated observations: top spending category, savings rate assessment, month-over-month change, investment habit, budget breach alerts

🎨 Design Decisions

Glassmorphism — All surfaces use backdrop-filter so the animated background always shows through
Single file — The entire app is one .html file for maximum portability
No framework — Pure vanilla JS keeps the bundle at zero and loading instant
CSS custom properties — Every colour is a variable, making light/dark mode a single attribute toggle
Chart.js via CDN — The only external dependency, loaded from jsDelivr


📝 Customising
Add a transaction category
In the CAT_C object near the top of the <script> tag:
jsconst CAT_C = {
  'Your Category': '#HexColor',
  // ...existing categories
};
Then add the option to both <select id="fCat2"> dropdowns.
Change the seed data
Edit the SEED array to pre-populate different transactions.
Change the default budgets
Edit the DEFAULT_BUDGETS object:
jsconst DEFAULT_BUDGETS = {
  'Housing': 18000,
  'Food & Dining': 5000,
  // ...
};

📄 License

This project is licensed under the MIT License.

<div align="center">
  <strong>Built with ❤️ using HTML, CSS & JavaScript</strong><br>
  <sub>No npm · No webpack · No framework · Just open and use</sub>
</div>
