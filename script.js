/* ═══════════════════════════════════════════
   CANVAS PARTICLE SYSTEM
═══════════════════════════════════════════ */
(function(){
  const canvas=document.getElementById('bgCanvas');
  const ctx=canvas.getContext('2d');
  let W,H,particles=[];
  const COLORS=['rgba(124,58,237,','rgba(236,72,153,','rgba(59,130,246,','rgba(16,185,129,','rgba(249,115,22,','rgba(14,165,233,'];
  
  function resize(){W=canvas.width=window.innerWidth;H=canvas.height=window.innerHeight}
  
  function Particle(){
    this.reset=function(){
      this.x=Math.random()*W;this.y=Math.random()*H;
      this.vx=(Math.random()-.5)*.35;this.vy=(Math.random()-.5)*.35;
      this.r=Math.random()*3+1;this.a=Math.random()*.35+.05;
      this.col=COLORS[Math.floor(Math.random()*COLORS.length)];
      this.life=0;this.maxLife=300+Math.random()*400;
    };this.reset();
  }
  
  for(let i=0;i<80;i++){const p=new Particle();p.life=Math.random()*p.maxLife;particles.push(p)}
  
  function draw(){
    ctx.clearRect(0,0,W,H);
    const dark=document.documentElement.getAttribute('data-theme')==='dark';
    particles.forEach(p=>{
      p.life++;if(p.life>p.maxLife)p.reset();
      const t=p.life/p.maxLife;
      const alpha=p.a*Math.sin(t*Math.PI)*(dark?.7:.4);
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<-10)p.x=W+10;if(p.x>W+10)p.x=-10;
      if(p.y<-10)p.y=H+10;if(p.y>H+10)p.y=-10;
      ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
      ctx.fillStyle=p.col+alpha+')';ctx.fill();
    });
    requestAnimationFrame(draw);
  }
  window.addEventListener('resize',resize);
  resize();draw();
})();

/* ═══════════════════════════════════════════
   DATA
═══════════════════════════════════════════ */
const PAL=['#7C3AED','#DC2626','#059669','#D97706','#2563EB','#DB2777','#0D9488','#EA580C','#A855F7','#4F46E5','#10B981','#0284C7'];
const CAT_C={'Food & Dining':'#EA580C','Transport':'#4F46E5','Shopping':'#DB2777','Housing':'#D97706','Entertainment':'#A855F7','Health':'#DC2626','Education':'#10B981','Salary':'#059669','Freelance':'#7C3AED','Investments':'#2563EB','Utilities':'#0D9488','Other':'#9890C0'};
const CAT_STRIPE={'Food & Dining':'linear-gradient(90deg,#EA580C,#FB923C)','Transport':'linear-gradient(90deg,#4F46E5,#818CF8)','Shopping':'linear-gradient(90deg,#DB2777,#F472B6)','Housing':'linear-gradient(90deg,#D97706,#FCD34D)','Entertainment':'linear-gradient(90deg,#A855F7,#D946EF)','Health':'linear-gradient(90deg,#DC2626,#F87171)','Education':'linear-gradient(90deg,#10B981,#34D399)','Salary':'linear-gradient(90deg,#059669,#34D399)','Freelance':'linear-gradient(90deg,#7C3AED,#A855F7)','Investments':'linear-gradient(90deg,#2563EB,#60A5FA)','Utilities':'linear-gradient(90deg,#0D9488,#2DD4BF)','Other':'linear-gradient(90deg,#6B7280,#9CA3AF)'};
const LS={TX:'ff5_txs',THEME:'ff5_theme',ROLE:'ff5_role',LOG:'ff5_log',BUDGET:'ff5_budget'};
const SEED=[
  {id:1,desc:'Monthly Salary',amount:75000,type:'income',category:'Salary',date:'2024-01-01',note:''},
  {id:2,desc:'House Rent',amount:15000,type:'expense',category:'Housing',date:'2024-01-03',note:'Jan rent'},
  {id:3,desc:'Grocery Shopping',amount:3200,type:'expense',category:'Food & Dining',date:'2024-01-05',note:'Big Bazaar'},
  {id:4,desc:'Metro Card',amount:500,type:'expense',category:'Transport',date:'2024-01-07',note:''},
  {id:5,desc:'Netflix',amount:649,type:'expense',category:'Entertainment',date:'2024-01-10',note:''},
  {id:6,desc:'Freelance Project A',amount:22000,type:'income',category:'Freelance',date:'2024-01-12',note:'UI design'},
  {id:7,desc:'Doctor Visit',amount:1200,type:'expense',category:'Health',date:'2024-01-14',note:''},
  {id:8,desc:'Amazon Purchase',amount:4800,type:'expense',category:'Shopping',date:'2024-01-18',note:'Electronics'},
  {id:9,desc:'Electricity Bill',amount:1400,type:'expense',category:'Utilities',date:'2024-01-22',note:''},
  {id:10,desc:'Mutual Fund SIP',amount:10000,type:'expense',category:'Investments',date:'2024-01-25',note:''},
  {id:11,desc:'Monthly Salary',amount:75000,type:'income',category:'Salary',date:'2024-02-01',note:''},
  {id:12,desc:'House Rent',amount:15000,type:'expense',category:'Housing',date:'2024-02-03',note:'Feb rent'},
  {id:13,desc:'Restaurant',amount:1800,type:'expense',category:'Food & Dining',date:'2024-02-08',note:'Team lunch'},
  {id:14,desc:'Online Course',amount:3999,type:'expense',category:'Education',date:'2024-02-10',note:'Udemy React'},
  {id:15,desc:'Freelance Invoice B',amount:18000,type:'income',category:'Freelance',date:'2024-02-14',note:'Web dev'},
  {id:16,desc:'Water Bill',amount:280,type:'expense',category:'Utilities',date:'2024-02-17',note:''},
  {id:17,desc:'Movie Tickets',amount:900,type:'expense',category:'Entertainment',date:'2024-02-20',note:'IMAX'},
  {id:18,desc:'Cab Rides',amount:1200,type:'expense',category:'Transport',date:'2024-02-24',note:'Weekly'},
  {id:19,desc:'Mutual Fund SIP',amount:10000,type:'expense',category:'Investments',date:'2024-02-25',note:''},
  {id:20,desc:'Monthly Salary',amount:75000,type:'income',category:'Salary',date:'2024-03-01',note:''},
  {id:21,desc:'House Rent',amount:15000,type:'expense',category:'Housing',date:'2024-03-03',note:'Mar rent'},
  {id:22,desc:'Pharmacy',amount:760,type:'expense',category:'Health',date:'2024-03-06',note:''},
  {id:23,desc:'Grocery Run',amount:2600,type:'expense',category:'Food & Dining',date:'2024-03-09',note:'D-Mart'},
  {id:24,desc:'Clothes Shopping',amount:7200,type:'expense',category:'Shopping',date:'2024-03-14',note:'Spring'},
  {id:25,desc:'Freelance Invoice C',amount:28000,type:'income',category:'Freelance',date:'2024-03-18',note:'Brand design'},
  {id:26,desc:'Spotify',amount:119,type:'expense',category:'Entertainment',date:'2024-03-21',note:''},
  {id:27,desc:'Books',amount:1100,type:'expense',category:'Education',date:'2024-03-25',note:''},
  {id:28,desc:'Electricity',amount:1600,type:'expense',category:'Utilities',date:'2024-03-27',note:''},
  {id:29,desc:'Mutual Fund SIP',amount:10000,type:'expense',category:'Investments',date:'2024-03-28',note:''},
];
const DEFAULT_BUDGETS={
  'Housing':18000,'Food & Dining':5000,'Transport':2000,
  'Entertainment':2000,'Shopping':8000,'Investments':10000,
  'Health':2000,'Education':3000,'Utilities':3000
};

let S={txs:[],nextId:100,role:'admin',dark:false,editId:null,advOpen:false,tags:new Set(),log:[],budgets:{...DEFAULT_BUDGETS},charts:{}};

/* ═══════════════════════════════════════════
   PERSISTENCE
═══════════════════════════════════════════ */
function save(){try{localStorage.setItem(LS.TX,JSON.stringify({txs:S.txs,nextId:S.nextId}));localStorage.setItem(LS.ROLE,S.role);localStorage.setItem(LS.LOG,JSON.stringify(S.log.slice(0,50)));localStorage.setItem(LS.BUDGET,JSON.stringify(S.budgets))}catch(e){}}
function load(){
  try{
    const d=localStorage.getItem(LS.TX);
    if(d){const p=JSON.parse(d);S.txs=p.txs||[...SEED];S.nextId=p.nextId||100}else S.txs=[...SEED];
    const t=localStorage.getItem(LS.THEME);if(t==='dark'){S.dark=true;document.documentElement.setAttribute('data-theme','dark')}
    const r=localStorage.getItem(LS.ROLE);if(r){S.role=r;document.getElementById('roleSel').value=r}
    const l=localStorage.getItem(LS.LOG);if(l)S.log=JSON.parse(l);
    const b=localStorage.getItem(LS.BUDGET);if(b)S.budgets={...DEFAULT_BUDGETS,...JSON.parse(b)};
  }catch(e){S.txs=[...SEED]}
}

/* ═══════════════════════════════════════════
   HELPERS
═══════════════════════════════════════════ */
function fmt(n){return '₹'+Math.round(n).toLocaleString('en-IN')}
function fmtS(n){if(n>=100000)return '₹'+(n/100000).toFixed(1)+'L';if(n>=1000)return '₹'+(n/1000).toFixed(1)+'K';return fmt(n)}
function h2r(hex,a){const r=parseInt(hex.slice(1,3),16),g=parseInt(hex.slice(3,5),16),b=parseInt(hex.slice(5,7),16);return`rgba(${r},${g},${b},${a})`}
function calcSumm(txs=S.txs){const inc=txs.filter(t=>t.type==='income').reduce((s,t)=>s+t.amount,0);const exp=txs.filter(t=>t.type==='expense').reduce((s,t)=>s+t.amount,0);return{inc,exp,bal:inc-exp,count:txs.length,sr:inc>0?((inc-exp)/inc*100):0}}
function getMonthly(txs=S.txs){const m={};txs.forEach(t=>{const k=t.date.slice(0,7);if(!m[k])m[k]={inc:0,exp:0};if(t.type==='income')m[k].inc+=t.amount;else m[k].exp+=t.amount});return m}
function getCatExp(txs=S.txs){const c={};txs.filter(t=>t.type==='expense').forEach(t=>{c[t.category]=(c[t.category]||0)+t.amount});return c}
function gCol(){return S.dark?'rgba(255,255,255,0.07)':'rgba(0,0,0,0.05)'}
function tCol(){return S.dark?'#5A5280':'#9890C0'}
function dc(k){if(S.charts[k]){S.charts[k].destroy();delete S.charts[k]}}

/* ═══════════════════════════════════════════
   MOCK API
═══════════════════════════════════════════ */
function mFetch(method,ep,status=200){
  setApiStatus('loading');
  const lat=120+Math.floor(Math.random()*500);
  setTimeout(()=>{
    const ok=status<400;
    S.log.unshift({method,ep,status,lat,time:new Date().toLocaleTimeString(),ok});
    if(S.log.length>50)S.log.pop();
    setApiStatus(ok?'ok':'error');
    renderLog();save();
  },lat);
}
function setApiStatus(s){
  const d=document.getElementById('apiDot'),l=document.getElementById('apiLbl');
  if(s==='loading'){d.className='api-dot loading';l.textContent='Fetching…'}
  else if(s==='error'){d.className='api-dot error';l.textContent='Error';setTimeout(()=>setApiStatus('ok'),2500)}
  else{d.className='api-dot';l.textContent='API ready'}
}

/* ═══════════════════════════════════════════
   THEME & ROLE
═══════════════════════════════════════════ */
function toggleTheme(){
  S.dark=!S.dark;
  document.documentElement.setAttribute('data-theme',S.dark?'dark':'light');
  document.getElementById('themeLabel').textContent=S.dark?'☀ Light mode':'☾ Dark mode';
  try{localStorage.setItem(LS.THEME,S.dark?'dark':'light')}catch(e){}
  rebuildAll();
}
function setRole(r){
  S.role=r;
  document.getElementById('rBadge').className='r-badge '+r;
  document.getElementById('rBadge').textContent='● '+(r==='admin'?'Admin':'Viewer')+' access';
  const ab=document.getElementById('addBtn');if(ab)ab.style.display=r==='admin'?'':'none';
  const bb=document.getElementById('addBudgetBtn');if(bb)bb.style.display=r==='admin'?'':'none';
  renderTx();save();
}

/* ═══════════════════════════════════════════
   NAVIGATION
═══════════════════════════════════════════ */
const META={
  dashboard:{title:'Dashboard',sub:'Financial overview'},
  analytics:{title:'Analytics',sub:'Visual deep-dive into your finances'},
  transactions:{title:'Transactions',sub:'All records with filtering & grouping'},
  budget:{title:'Budget Goals',sub:'Track spending against monthly targets'},
  insights:{title:'Insights',sub:'Smart observations from your data'},
  apilog:{title:'API Log',sub:'Mock integration activity'}
};
function goPage(id,btn){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.querySelectorAll('.sb-link').forEach(b=>b.classList.remove('active'));
  document.getElementById('page-'+id).classList.add('active');
  if(btn)btn.classList.add('active');
  const m=META[id]||{};
  document.getElementById('pgTitle').textContent=m.title||id;
  document.getElementById('pgSub').innerHTML=(m.sub||'')+' · <span>'+document.getElementById('todayLbl').textContent+'</span>';
  animLbar();
  if(id==='dashboard'){renderDash();mFetch('GET','/api/summary',200)}
  if(id==='analytics'){renderAnalytics();mFetch('GET','/api/analytics',200)}
  if(id==='transactions'){renderTx();mFetch('GET','/api/txs',200)}
  if(id==='budget'){renderBudget();mFetch('GET','/api/budget',200)}
  if(id==='insights'){renderInsights();mFetch('GET','/api/insights',200)}
  if(id==='apilog')renderLog();
  closeSB();
}
function animLbar(){
  const b=document.getElementById('lbar');
  b.style.transition='none';b.style.width='0%';
  requestAnimationFrame(()=>{b.style.transition='width .45s ease';b.style.width='65%';setTimeout(()=>{b.style.width='100%';setTimeout(()=>b.style.width='0%',260)},380)});
}
function toggleSB(){document.getElementById('sidebar').classList.toggle('open');document.getElementById('sbOverlay').classList.toggle('open')}
function closeSB(){document.getElementById('sidebar').classList.remove('open');document.getElementById('sbOverlay').classList.remove('open')}

/* ═══════════════════════════════════════════
   TICKER
═══════════════════════════════════════════ */
function renderTicker(){
  const{inc,exp,bal,sr}=calcSumm();
  const catExp=getCatExp();
  const topCat=Object.keys(catExp).sort((a,b)=>catExp[b]-catExp[a])[0]||'—';
  const monthly=getMonthly();const months=Object.keys(monthly).sort();
  const last=months[months.length-1];const lastNet=last?monthly[last].inc-monthly[last].exp:0;
  const items=[
    {label:'Balance',val:fmtS(Math.abs(bal)),color:bal>=0?'var(--inc)':'var(--exp)'},
    {label:'Total Income',val:fmtS(inc),color:'var(--inc)'},
    {label:'Total Expenses',val:fmtS(exp),color:'var(--exp)'},
    {label:'Savings Rate',val:sr.toFixed(1)+'%',color:sr>20?'var(--inc)':'var(--warn)'},
    {label:'Top Spend Cat',val:topCat,color:'var(--acc)'},
    {label:'Last Month Net',val:(lastNet>=0?'+':'')+fmtS(lastNet),color:lastNet>=0?'var(--inc)':'var(--exp)'},
    {label:'Transactions',val:S.txs.length+'',color:'var(--blue)'},
  ];
  const inner=document.getElementById('ticker');
  const html=items.map(i=>`<div class="ticker-item"><span class="ticker-label">${i.label}</span><span class="ticker-val" style="color:${i.color}">${i.val}</span></div>`).join('');
  inner.innerHTML=`<div class="ticker-inner">${html}${html}</div>`;
}

/* ═══════════════════════════════════════════
   DASHBOARD
═══════════════════════════════════════════ */
function renderDash(){
  const{inc,exp,bal,count,sr}=calcSumm();
  const monthly=getMonthly();const months=Object.keys(monthly).sort();
  const avgExp=months.length?exp/months.length:0;
  renderTicker();
  document.getElementById('sumGrid').innerHTML=`
    <div class="scard sc-bal"><div class="scard-glyph">₹</div><div class="lbl">Net Balance</div><div class="val">${fmtS(Math.abs(bal))}</div><div class="sub">${bal>=0?'▲ Surplus':'▼ Deficit'}</div></div>
    <div class="scard sc-inc"><div class="scard-glyph">↑</div><div class="lbl">Total Income</div><div class="val">${fmtS(inc)}</div><div class="sub">${S.txs.filter(t=>t.type==='income').length} entries</div></div>
    <div class="scard sc-exp"><div class="scard-glyph">↓</div><div class="lbl">Total Expenses</div><div class="val">${fmtS(exp)}</div><div class="sub">${S.txs.filter(t=>t.type==='expense').length} entries</div></div>
    <div class="scard sc-sav"><div class="scard-glyph">%</div><div class="lbl">Savings Rate</div><div class="val">${sr.toFixed(1)}%</div><div class="sub">${sr>20?'✓ Healthy':'Needs work'}</div></div>
    <div class="scard sc-tx"><div class="scard-glyph">#</div><div class="lbl">Transactions</div><div class="val">${count}</div><div class="sub">${months.length} months</div></div>
    <div class="scard sc-avg"><div class="scard-glyph">~</div><div class="lbl">Avg Monthly Exp</div><div class="val">${fmtS(avgExp)}</div><div class="sub">per month</div></div>`;
  buildTrend();buildBar();buildDonut();buildGauge(sr);buildTopCats();
}

function buildTrend(){
  const m=getMonthly();const keys=Object.keys(m).sort();
  const labels=keys.map(k=>{const d=new Date(k+'-01');return d.toLocaleString('default',{month:'short'})+"'"+(d.getFullYear()+'').slice(2)});
  const data=keys.map(k=>m[k].inc-m[k].exp);
  dc('trend');const ctx=document.getElementById('cTrend');if(!ctx)return;
  S.charts.trend=new Chart(ctx,{type:'line',data:{labels,datasets:[{label:'Net',data,borderColor:'#7C3AED',backgroundColor:h2r('#7C3AED',.08),tension:.45,pointBackgroundColor:'#7C3AED',pointRadius:5,pointHoverRadius:8,fill:true,borderWidth:2.5}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{ticks:{callback:v=>fmtS(v),font:{size:10,family:'DM Mono'},color:tCol()},grid:{color:gCol()},border:{display:false}},x:{ticks:{font:{size:10,family:'DM Mono'},color:tCol()},grid:{display:false},border:{display:false}}}}});
}

function buildBar(){
  const m=getMonthly();const keys=Object.keys(m).sort();
  const labels=keys.map(k=>{const d=new Date(k+'-01');return d.toLocaleString('default',{month:'short'})});
  dc('bar');const ctx=document.getElementById('cBar');if(!ctx)return;
  S.charts.bar=new Chart(ctx,{type:'bar',data:{labels,datasets:[{label:'Income',data:keys.map(k=>m[k].inc),backgroundColor:h2r('#059669',.85),borderRadius:5,borderSkipped:false},{label:'Expenses',data:keys.map(k=>m[k].exp),backgroundColor:h2r('#DC2626',.85),borderRadius:5,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'top',labels:{font:{size:10,family:'DM Mono'},color:tCol(),boxWidth:10,boxHeight:10}}},scales:{y:{ticks:{callback:v=>fmtS(v),font:{size:10,family:'DM Mono'},color:tCol()},grid:{color:gCol()},border:{display:false}},x:{ticks:{font:{size:10,family:'DM Mono'},color:tCol()},grid:{display:false},border:{display:false}}}}});
}

function buildDonut(){
  const ce=getCatExp();const cats=Object.keys(ce).sort((a,b)=>ce[b]-ce[a]);
  const total=cats.reduce((s,c)=>s+ce[c],0);
  dc('donut');const ctx=document.getElementById('cDonut');if(!ctx)return;
  S.charts.donut=new Chart(ctx,{type:'doughnut',data:{labels:cats,datasets:[{data:cats.map(c=>ce[c]),backgroundColor:cats.map(c=>CAT_C[c]||'#888'),borderWidth:0,hoverOffset:8}]},options:{responsive:true,maintainAspectRatio:false,cutout:'68%',plugins:{legend:{display:false}}}});
  const leg=document.getElementById('donutLeg');if(!leg)return;
  leg.innerHTML=cats.slice(0,6).map(c=>`<div class="dl"><span class="dl-dot" style="background:${CAT_C[c]||'#888'}"></span><span class="dl-name">${c}</span><span class="dl-pct">${total>0?(ce[c]/total*100).toFixed(0):0}%</span><span class="dl-amt">${fmtS(ce[c])}</span></div>`).join('');
}

function buildGauge(sr){
  const pct=Math.min(sr,50)/50;
  const arcLen=236;const offset=arcLen-(pct*arcLen);
  const p=document.getElementById('gaugePath');const n=document.getElementById('gaugeNeedle');const v=document.getElementById('gaugeVal');
  if(!p)return;
  setTimeout(()=>{
    p.style.strokeDashoffset=offset;
    const angle=-180+(pct*180);const rad=angle*Math.PI/180;
    const x=95+75*Math.cos(rad);const y=92+75*Math.sin(rad);
    if(n){n.setAttribute('cx',x.toFixed(1));n.setAttribute('cy',y.toFixed(1))}
    if(v)v.textContent=sr.toFixed(1)+'%';
  },200);
}

function buildTopCats(){
  const ce=getCatExp();const cats=Object.keys(ce).sort((a,b)=>ce[b]-ce[a]);
  const maxV=ce[cats[0]]||1;const total=cats.reduce((s,c)=>s+ce[c],0);
  document.getElementById('topCatBars').innerHTML=cats.slice(0,6).map(c=>`
    <div class="prog-row">
      <div class="prog-lbl">${c}</div>
      <div class="prog-track"><div class="prog-fill" style="width:${Math.round(ce[c]/maxV*100)}%;background:${CAT_C[c]||'#888'}"></div></div>
      <div class="prog-pct">${total>0?(ce[c]/total*100).toFixed(0):0}%</div>
      <div class="prog-amt">${fmtS(ce[c])}</div>
    </div>`).join('');
}

/* ═══════════════════════════════════════════
   ANALYTICS
═══════════════════════════════════════════ */
function renderAnalytics(){
  buildArea();buildPie();buildRadar();buildHeatmap();
  buildWaterfall();buildPolar();buildBubble();buildRolling();buildStack();
}

function buildArea(){
  const m=getMonthly();const keys=Object.keys(m).sort();
  const labels=keys.map(k=>{const d=new Date(k+'-01');return d.toLocaleString('default',{month:'short'})+"'"+(d.getFullYear()+'').slice(2)});
  let cum=0;const data=keys.map(k=>{cum+=m[k].inc-m[k].exp;return cum});
  dc('area');const ctx=document.getElementById('cArea');if(!ctx)return;
  S.charts.area=new Chart(ctx,{type:'line',data:{labels,datasets:[{label:'Cumulative',data,borderColor:'#059669',backgroundColor:h2r('#059669',.1),tension:.45,fill:true,borderWidth:2.5,pointBackgroundColor:'#059669',pointRadius:5,pointHoverRadius:8}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{ticks:{callback:v=>fmtS(v),font:{size:10,family:'DM Mono'},color:tCol()},grid:{color:gCol()},border:{display:false}},x:{ticks:{font:{size:10,family:'DM Mono'},color:tCol()},grid:{display:false},border:{display:false}}}}});
}

function buildPie(){
  const ic={};S.txs.filter(t=>t.type==='income').forEach(t=>{ic[t.category]=(ic[t.category]||0)+t.amount});
  const cats=Object.keys(ic).sort((a,b)=>ic[b]-ic[a]);
  dc('pie');const ctx=document.getElementById('cPie');if(!ctx)return;
  S.charts.pie=new Chart(ctx,{type:'pie',data:{labels:cats,datasets:[{data:cats.map(c=>ic[c]),backgroundColor:cats.map((c,i)=>PAL[i%PAL.length]),borderWidth:0,hoverOffset:10}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'right',labels:{font:{size:11,family:'DM Mono'},color:tCol(),boxWidth:12,boxHeight:12,padding:8}},tooltip:{callbacks:{label:ctx=>{const tot=ctx.dataset.data.reduce((a,b)=>a+b,0);return` ${fmt(ctx.parsed)} (${(ctx.parsed/tot*100).toFixed(1)}%)`}}}}}});
}

function buildRadar(){
  const ce=getCatExp();const cats=Object.keys(ce).sort((a,b)=>ce[b]-ce[a]).slice(0,7);
  dc('radar');const ctx=document.getElementById('cRadar');if(!ctx)return;
  S.charts.radar=new Chart(ctx,{type:'radar',data:{labels:cats,datasets:[{label:'Spending',data:cats.map(c=>ce[c]),borderColor:'#7C3AED',backgroundColor:h2r('#7C3AED',.14),borderWidth:2.5,pointBackgroundColor:'#7C3AED',pointRadius:5}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{r:{ticks:{callback:v=>fmtS(v),font:{size:9,family:'DM Mono'},color:tCol()},grid:{color:gCol()},pointLabels:{font:{size:11,family:'DM Mono'},color:tCol()},angleLines:{color:gCol()}}}}});
}

function buildHeatmap(){
  const m=getMonthly();
  const allM=['2024-01','2024-02','2024-03','2024-04','2024-05','2024-06','2024-07','2024-08','2024-09','2024-10','2024-11','2024-12'];
  const maxE=Math.max(...Object.values(m).map(v=>v.exp),1);
  const hm=document.getElementById('heatmap');if(!hm)return;
  hm.innerHTML=allM.map(mn=>{
    const exp=m[mn]?m[mn].exp:0;
    const intensity=exp/maxE;
    const alpha=exp>0?(.12+intensity*.88):.06;
    const tip=exp>0?`${new Date(mn+'-01').toLocaleString('default',{month:'long'})}: ${fmt(exp)}`:'No data';
    return`<div class="hm" style="background:rgba(219,39,119,${alpha.toFixed(2)})" title="${tip}"></div>`;
  }).join('');
}

function buildWaterfall(){
  const m=getMonthly();const keys=Object.keys(m).sort();
  const labels=keys.map(k=>{const d=new Date(k+'-01');return d.toLocaleString('default',{month:'short'})});
  const nets=keys.map(k=>m[k].inc-m[k].exp);
  dc('waterfall');const ctx=document.getElementById('cWaterfall');if(!ctx)return;
  S.charts.waterfall=new Chart(ctx,{type:'bar',data:{labels,datasets:[{label:'Net',data:nets,backgroundColor:nets.map(v=>v>=0?h2r('#059669',.85):h2r('#DC2626',.85)),borderColor:nets.map(v=>v>=0?'#059669':'#DC2626'),borderWidth:1.5,borderRadius:6,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{ticks:{callback:v=>fmtS(v),font:{size:10,family:'DM Mono'},color:tCol()},grid:{color:gCol()},border:{display:false}},x:{ticks:{font:{size:10,family:'DM Mono'},color:tCol()},grid:{display:false},border:{display:false}}}}});
}

function buildPolar(){
  const m=getMonthly();const keys=Object.keys(m).sort();
  const labels=keys.map(k=>{const d=new Date(k+'-01');return d.toLocaleString('default',{month:'short'})});
  dc('polar');const ctx=document.getElementById('cPolar');if(!ctx)return;
  S.charts.polar=new Chart(ctx,{type:'polarArea',data:{labels,datasets:[{data:keys.map(k=>m[k].inc),backgroundColor:keys.map((_,i)=>h2r(PAL[i%PAL.length],.72)),borderColor:keys.map((_,i)=>PAL[i%PAL.length]),borderWidth:1}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'bottom',labels:{font:{size:10,family:'DM Mono'},color:tCol(),boxWidth:10,boxHeight:10,padding:6}}},scales:{r:{ticks:{callback:v=>fmtS(v),font:{size:9,family:'DM Mono'},color:tCol()},grid:{color:gCol()},angleLines:{color:gCol()}}}}});
}

function buildBubble(){
  const ce=getCatExp();const cc={};S.txs.filter(t=>t.type==='expense').forEach(t=>{cc[t.category]=(cc[t.category]||0)+1});
  const cats=Object.keys(ce);const maxA=Math.max(...cats.map(c=>ce[c]),1);
  dc('bubble');const ctx=document.getElementById('cBubble');if(!ctx)return;
  S.charts.bubble=new Chart(ctx,{type:'bubble',data:{datasets:cats.map((c,i)=>({label:c,data:[{x:cc[c]||0,y:ce[c],r:Math.max(5,Math.round(ce[c]/maxA*30))}],backgroundColor:h2r(CAT_C[c]||PAL[i%PAL.length],.72),borderColor:CAT_C[c]||PAL[i%PAL.length],borderWidth:1.5}))},options:{responsive:true,maintainAspectRatio:false,layout:{padding:20},plugins:{legend:{position:'bottom',labels:{font:{size:10,family:'DM Mono'},color:tCol(),boxWidth:10,boxHeight:10,padding:6}},tooltip:{callbacks:{label:ctx=>`${ctx.dataset.label}: ${fmt(ctx.raw.y)} (${ctx.raw.x} txns)`}}},scales:{y:{title:{display:true,text:'Total spent',font:{size:10,family:'DM Mono'},color:tCol()},ticks:{callback:v=>fmtS(v),font:{size:10,family:'DM Mono'},color:tCol()},grid:{color:gCol()},border:{display:false}},x:{title:{display:true,text:'# Transactions',font:{size:10,family:'DM Mono'},color:tCol()},ticks:{stepSize:1,font:{size:10,family:'DM Mono'},color:tCol()},grid:{color:gCol()},border:{display:false}}}}});
}

function buildRolling(){
  const ebd={};S.txs.filter(t=>t.type==='expense').forEach(t=>{ebd[t.date]=(ebd[t.date]||0)+t.amount});
  const dates=Object.keys(ebd).sort();
  const rolling=dates.map((_,i)=>{const sl=dates.slice(Math.max(0,i-6),i+1);return sl.reduce((s,d)=>s+ebd[d],0)/sl.length});
  dc('rolling');const ctx=document.getElementById('cRolling');if(!ctx)return;
  S.charts.rolling=new Chart(ctx,{type:'line',data:{labels:dates.map(d=>d.slice(5)),datasets:[{label:'Daily',data:dates.map(d=>ebd[d]),borderColor:h2r('#DC2626',.35),backgroundColor:'transparent',borderWidth:1,pointRadius:2},{label:'7d avg',data:rolling,borderColor:'#DC2626',backgroundColor:h2r('#DC2626',.08),borderWidth:2.5,tension:.45,fill:true,pointRadius:0}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'top',labels:{font:{size:10,family:'DM Mono'},color:tCol(),boxWidth:10,boxHeight:10}}},scales:{y:{ticks:{callback:v=>fmtS(v),font:{size:10,family:'DM Mono'},color:tCol()},grid:{color:gCol()},border:{display:false}},x:{ticks:{maxTicksLimit:8,font:{size:10,family:'DM Mono'},color:tCol()},grid:{display:false},border:{display:false}}}}});
}

function buildStack(){
  const m=getMonthly();const keys=Object.keys(m).sort();
  const labels=keys.map(k=>{const d=new Date(k+'-01');return d.toLocaleString('default',{month:'short'})});
  const icm={};S.txs.filter(t=>t.type==='income').forEach(t=>{const k=t.date.slice(0,7);if(!icm[t.category])icm[t.category]={};icm[t.category][k]=(icm[t.category][k]||0)+t.amount});
  const cats=Object.keys(icm);
  dc('stack');const ctx=document.getElementById('cStack');if(!ctx)return;
  S.charts.stack=new Chart(ctx,{type:'bar',data:{labels,datasets:cats.map((c,i)=>({label:c,data:keys.map(k=>icm[c][k]||0),backgroundColor:h2r(PAL[i%PAL.length],.82),borderRadius:4,borderSkipped:false}))},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'top',labels:{font:{size:10,family:'DM Mono'},color:tCol(),boxWidth:10,boxHeight:10}}},scales:{x:{stacked:true,ticks:{font:{size:10,family:'DM Mono'},color:tCol()},grid:{display:false},border:{display:false}},y:{stacked:true,ticks:{callback:v=>fmtS(v),font:{size:10,family:'DM Mono'},color:tCol()},grid:{color:gCol()},border:{display:false}}}}});
}

function rebuildAll(){
  const active=document.querySelector('.page.active');if(!active)return;
  const id=active.id.replace('page-','');
  if(id==='dashboard')renderDash();
  if(id==='analytics')renderAnalytics();
  if(id==='budget')renderBudget();
  if(id==='insights')renderInsights();
}

/* ═══════════════════════════════════════════
   BUDGET GOALS
═══════════════════════════════════════════ */
function renderBudget(){
  const ce=getCatExp();
  const bg=document.getElementById('budgetGrid');
  if(!bg)return;
  const budgetCats=Object.keys(S.budgets).sort();
  if(!budgetCats.length){bg.innerHTML='<div style="grid-column:1/-1;text-align:center;padding:40px;color:var(--text3);font-size:14px">No budget goals set yet. Click "+ Set Budget" to add one.</div>';return}
  bg.innerHTML=budgetCats.map(cat=>{
    const budget=S.budgets[cat]||0;
    const spent=ce[cat]||0;
    const pct=budget>0?Math.min(spent/budget*100,100):0;
    const over=spent>budget&&budget>0;
    const col=over?'linear-gradient(90deg,#DC2626,#F87171)':pct>80?'linear-gradient(90deg,#D97706,#FCD34D)':'linear-gradient(90deg,#059669,#34D399)';
    const stripe=CAT_STRIPE[cat]||'linear-gradient(90deg,#7C3AED,#A855F7)';
    return`<div class="bcard" style="--bc-stripe:${stripe}">
      <div class="bcard-hd">
        <div>
          <div style="font-size:10px;font-family:var(--mono);color:var(--text3);text-transform:uppercase;letter-spacing:.08em;margin-bottom:2px">${cat}</div>
          <div class="bcard-name" style="color:${CAT_C[cat]||'var(--acc)'}">${over?'⚠ Over budget':'On track'}</div>
        </div>
        <div class="bcard-pct" style="color:${over?'var(--exp)':pct>80?'var(--warn)':'var(--inc)'}">${Math.round(pct)}%</div>
      </div>
      <div class="bcard-bar-track">
        <div class="bcard-bar-fill" style="width:${pct}%;background:${col}"></div>
      </div>
      <div class="bcard-meta">
        <span>Spent: <strong style="color:${over?'var(--exp)':'var(--text)'}">${fmt(spent)}</strong></span>
        <span>Budget: ${fmt(budget)}</span>
      </div>
      ${S.role==='admin'?`<div style="margin-top:10px"><button class="btn sm danger" onclick="deleteBudget('${cat}')">Remove</button></div>`:''}
    </div>`;
  }).join('');
  buildBudgetCharts(budgetCats,ce);
}

function buildBudgetCharts(cats,ce){
  const budgets=cats.map(c=>S.budgets[c]||0);
  const spents=cats.map(c=>ce[c]||0);
  dc('budgetBar');const ctx1=document.getElementById('cBudgetBar');if(!ctx1)return;
  S.charts.budgetBar=new Chart(ctx1,{type:'bar',data:{labels:cats.map(c=>c.length>10?c.slice(0,10)+'…':c),datasets:[{label:'Budget',data:budgets,backgroundColor:h2r('#7C3AED',.25),borderColor:'#7C3AED',borderWidth:1.5,borderRadius:4},{label:'Spent',data:spents,backgroundColor:spents.map((s,i)=>s>budgets[i]?h2r('#DC2626',.85):h2r('#059669',.85)),borderColor:spents.map((s,i)=>s>budgets[i]?'#DC2626':'#059669'),borderWidth:1,borderRadius:4}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{position:'top',labels:{font:{size:10,family:'DM Mono'},color:tCol(),boxWidth:10,boxHeight:10}}},scales:{y:{ticks:{callback:v=>fmtS(v),font:{size:10,family:'DM Mono'},color:tCol()},grid:{color:gCol()},border:{display:false}},x:{ticks:{font:{size:9,family:'DM Mono'},color:tCol(),maxRotation:30},grid:{display:false},border:{display:false}}}}});

  const remaining=cats.map((c,i)=>Math.max(0,budgets[i]-spents[i]));
  dc('budgetDonut');const ctx2=document.getElementById('cBudgetDonut');if(!ctx2)return;
  const hasRem=remaining.some(r=>r>0);
  if(!hasRem){ctx2.parentElement.innerHTML='<div style="text-align:center;padding:40px;color:var(--exp);font-weight:700;font-size:14px">⚠ All budgets exceeded!</div>';return}
  S.charts.budgetDonut=new Chart(ctx2,{type:'doughnut',data:{labels:cats,datasets:[{data:remaining,backgroundColor:cats.map(c=>CAT_C[c]||'#888'),borderWidth:0,hoverOffset:8}]},options:{responsive:true,maintainAspectRatio:false,cutout:'65%',plugins:{legend:{position:'right',labels:{font:{size:10,family:'DM Mono'},color:tCol(),boxWidth:10,boxHeight:10,padding:8}},tooltip:{callbacks:{label:ctx=>`Remaining: ${fmt(ctx.parsed)}`}}}}});
}

function openBudgetModal(){if(S.role!=='admin'){toast('Viewer cannot edit','e');return}document.getElementById('bAmt').value='';document.getElementById('budgetModalBg').classList.add('open')}
function closeBudgetModal(){document.getElementById('budgetModalBg').classList.remove('open')}
function saveBudget(){
  const cat=document.getElementById('bCat').value;
  const amt=parseFloat(document.getElementById('bAmt').value);
  if(!amt||amt<=0){toast('Enter a valid amount','e');return}
  S.budgets[cat]=amt;save();closeBudgetModal();renderBudget();toast(`Budget set for ${cat}`,'s');
  mFetch('POST','/api/budget',201);
}
function deleteBudget(cat){if(!confirm(`Remove budget for ${cat}?`))return;delete S.budgets[cat];save();renderBudget();toast(`Budget removed`,'i')}

/* ═══════════════════════════════════════════
   TRANSACTIONS
═══════════════════════════════════════════ */
function getFiltered(){
  const q=(document.getElementById('srch')?.value||'').toLowerCase();
  const ft=document.getElementById('fType')?.value||'';
  const fc=document.getElementById('fCat')?.value||'';
  const df=document.getElementById('dFrom')?.value||'';
  const dt=document.getElementById('dTo')?.value||'';
  const amin=parseFloat(document.getElementById('aMin')?.value)||0;
  const amax=parseFloat(document.getElementById('aMax')?.value)||Infinity;
  const sb=document.getElementById('sortBy')?.value||'date';
  const sd=parseInt(document.getElementById('sortDir')?.value||'-1');
  return S.txs.filter(t=>{
    if(q&&!t.desc.toLowerCase().includes(q)&&!(t.note||'').toLowerCase().includes(q)&&!t.category.toLowerCase().includes(q))return false;
    if(ft&&t.type!==ft)return false;
    if(fc&&t.category!==fc)return false;
    if(df&&t.date<df)return false;
    if(dt&&t.date>dt)return false;
    if(t.amount<amin||t.amount>amax)return false;
    if(S.tags.size>0&&!S.tags.has(t.category))return false;
    return true;
  }).sort((a,b)=>{let va=a[sb],vb=b[sb];if(sb==='amount'){va=+va;vb=+vb}if(va<vb)return -sd;if(va>vb)return sd;return 0});
}

function updateCatSel(){
  const cats=[...new Set(S.txs.map(t=>t.category))].sort();
  const fc=document.getElementById('fCat');const cur=fc?.value||'';
  if(fc)fc.innerHTML='<option value="">All categories</option>'+cats.map(c=>`<option value="${c}"${c===cur?' selected':''}>${c}</option>`).join('');
  const tags=document.getElementById('catTags');
  if(tags)tags.innerHTML=cats.map(c=>`<span class="tag${S.tags.has(c)?' active':''}" onclick="toggleTag('${c}')">${c}</span>`).join('');
}
function toggleTag(c){if(S.tags.has(c))S.tags.delete(c);else S.tags.add(c);updateCatSel();renderTx()}

function renderTx(){
  updateCatSel();
  const rows=getFiltered();
  const grp=document.getElementById('fGrp')?.value||'';
  const admin=S.role==='admin';
  const ab=document.getElementById('addBtn');if(ab)ab.style.display=admin?'':'none';
  const list=document.getElementById('txList');if(!list)return;
  const TH=`<div class="tx-head"><div class="th" onclick="srtBy('date')">Date</div><div class="th" onclick="srtBy('desc')">Description</div><div class="th" onclick="srtBy('category')">Category</div><div class="th" onclick="srtBy('type')">Type</div><div class="th" onclick="srtBy('amount')" style="text-align:right">Amount</div><div>${admin?'Actions':''}</div></div>`;
  if(!rows.length){list.innerHTML=`<div class="tx-box">${TH}<div class="empty-st"><div class="empty-ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M9 9h6M9 13h4"/></svg></div><div style="font-size:15px;font-weight:800">No transactions found</div><div style="font-size:13px;color:var(--text3)">Adjust filters or add a new transaction</div>${admin?'<button class="btn primary" onclick="openModal()">+ Add transaction</button>':''}</div></div>`;return}
  function row(t,delay=0){
    return`<div class="tx-row" style="animation-delay:${delay}ms">
      <div class="tx-date">${t.date}</div>
      <div><div class="tx-desc">${t.desc}</div>${t.note?`<div class="tx-note">${t.note}</div>`:''}</div>
      <div><span class="tx-cat" style="background:${CAT_C[t.category]||'#888'}18;color:${CAT_C[t.category]||'#888'}">${t.category}</span></div>
      <div><span class="tx-type ${t.type==='income'?'t-inc':'t-exp'}">${t.type}</span></div>
      <div class="tx-amt ${t.type==='income'?'a-inc':'a-exp'}">${t.type==='income'?'+':'-'}${fmt(t.amount)}</div>
      <div class="tx-acts">${admin?`<button class="btn sm" onclick="openModal(${t.id})">Edit</button><button class="btn sm danger" onclick="delTx(${t.id})">Del</button>`:''}</div>
    </div>`;
  }
  let html=`<div class="tx-box">${TH}`;
  if(grp){
    const groups={};rows.forEach(r=>{let k;if(grp==='month'){const d=new Date(r.date+'-01');k=d.toLocaleString('default',{month:'long',year:'numeric'})}else if(grp==='category')k=r.category;else k=r.type.charAt(0).toUpperCase()+r.type.slice(1);if(!groups[k])groups[k]=[];groups[k].push(r)});
    Object.keys(groups).sort().forEach(k=>{
      const gr=groups[k];const net=gr.reduce((s,t)=>s+(t.type==='income'?t.amount:-t.amount),0);
      html+=`<div class="grp-hd"><span>${k} · <span style="opacity:.6">${gr.length} records</span></span><span style="color:${net>=0?'var(--inc)':'var(--exp)'};font-weight:700">${net>=0?'+':''}${fmt(net)}</span></div>`;
      gr.forEach((t,i)=>html+=row(t,i*16));
    });
  }else rows.forEach((t,i)=>html+=row(t,i*12));
  list.innerHTML=html+'</div>';
}

function srtBy(col){if(!col)return;const sd=document.getElementById('sortDir');if(document.getElementById('sortBy')?.value===col){if(sd)sd.value=sd.value==='-1'?'1':'-1'}else{const sb=document.getElementById('sortBy');if(sb)sb.value=col}renderTx()}
function toggleAdv(){S.advOpen=!S.advOpen;document.getElementById('advPanel')?.classList.toggle('open',S.advOpen)}

function openModal(id=null){
  if(S.role!=='admin'){toast('Viewer cannot edit','e');return}
  S.editId=id;
  document.getElementById('modalTitle').textContent=id?'Edit transaction':'Add transaction';
  if(id){const t=S.txs.find(x=>x.id===id);document.getElementById('fDesc').value=t.desc;document.getElementById('fAmt').value=t.amount;document.getElementById('fDate').value=t.date;document.getElementById('fType2').value=t.type;document.getElementById('fCat2').value=t.category;document.getElementById('fNote').value=t.note||''}
  else{document.getElementById('fDesc').value='';document.getElementById('fAmt').value='';document.getElementById('fDate').value=new Date().toISOString().slice(0,10);document.getElementById('fType2').value='expense';document.getElementById('fCat2').value='Food & Dining';document.getElementById('fNote').value=''}
  document.getElementById('modalBg').classList.add('open');
}
function closeModal(){document.getElementById('modalBg').classList.remove('open')}
function saveTx(){
  const desc=document.getElementById('fDesc').value.trim();
  const amount=parseFloat(document.getElementById('fAmt').value);
  const date=document.getElementById('fDate').value;
  const type=document.getElementById('fType2').value;
  const category=document.getElementById('fCat2').value;
  const note=document.getElementById('fNote').value.trim();
  if(!desc||!amount||!date){toast('Fill all required fields','e');return}
  const method=S.editId?'PUT':'POST';
  if(S.editId){const idx=S.txs.findIndex(t=>t.id===S.editId);S.txs[idx]={id:S.editId,desc,amount,type,category,date,note};toast('Transaction updated','s')}
  else{S.txs.push({id:S.nextId++,desc,amount,type,category,date,note});toast('Transaction added ✓','s')}
  mFetch(method,'/api/txs',S.editId?200:201);save();closeModal();renderTx();renderDash();
}
function delTx(id){if(!confirm('Delete this transaction?'))return;S.txs=S.txs.filter(t=>t.id!==id);mFetch('DELETE','/api/txs/'+id,200);save();renderTx();renderDash();toast('Deleted','i')}

/* ═══════════════════════════════════════════
   INSIGHTS
═══════════════════════════════════════════ */
function renderInsights(){
  const ce=getCatExp();const top=Object.keys(ce).sort((a,b)=>ce[b]-ce[a])[0]||'—';
  const m=getMonthly();const months=Object.keys(m).sort();
  const last=months[months.length-1];const prev=months[months.length-2];
  const lastNet=last?m[last].inc-m[last].exp:0;const prevNet=prev?m[prev].inc-m[prev].exp:0;
  const{inc,exp,sr}=calcSumm();const avgExp=months.length?exp/months.length:0;
  const totExp=Object.values(ce).reduce((s,v)=>s+v,0);
  document.getElementById('insGrid').innerHTML=`
    <div class="icard"><div class="ico">🔥</div><div class="ic-lbl">Top spending</div><div class="ic-val" style="color:var(--exp)">${top}</div><div class="ic-sub">${fmt(ce[top]||0)} · ${totExp>0?((ce[top]||0)/totExp*100).toFixed(0):0}%</div></div>
    <div class="icard"><div class="ico">💰</div><div class="ic-lbl">Last month net</div><div class="ic-val" style="color:${lastNet>=0?'var(--inc)':'var(--exp)'}">${fmt(lastNet)}</div><div class="ic-sub">vs prev: ${prevNet!==0?(lastNet-prevNet>=0?'+':'')+fmt(lastNet-prevNet):'n/a'}</div></div>
    <div class="icard"><div class="ico">📊</div><div class="ic-lbl">Avg monthly exp</div><div class="ic-val">${fmt(avgExp)}</div><div class="ic-sub">over ${months.length} months</div></div>
    <div class="icard"><div class="ico">📈</div><div class="ic-lbl">Savings rate</div><div class="ic-val" style="color:${sr>20?'var(--inc)':sr>10?'var(--warn)':'var(--exp)'}">${sr.toFixed(1)}%</div><div class="ic-sub">${sr>25?'Excellent':sr>15?'Good':sr>5?'Moderate':'Alert!'}</div></div>`;
  const cats=Object.keys(ce).sort((a,b)=>ce[b]-ce[a]);const maxC=ce[cats[0]]||1;
  document.getElementById('spBars').innerHTML=cats.slice(0,8).map(c=>`<div class="prog-row"><div class="prog-lbl">${c}</div><div class="prog-track"><div class="prog-fill" style="width:${Math.round(ce[c]/maxC*100)}%;background:${CAT_C[c]||'#888'}"></div></div><div class="prog-pct">${totExp>0?(ce[c]/totExp*100).toFixed(0):0}%</div><div class="prog-amt">${fmtS(ce[c])}</div></div>`).join('');
  buildDelta();
  const obs=[];
  if(top)obs.push({e:'🏠',bg:'rgba(220,38,38,.08)',txt:`<strong>${top}</strong> is your biggest expense — ${fmt(ce[top]||0)} (${totExp>0?((ce[top]||0)/totExp*100).toFixed(0):0}% of total spending).`});
  if(sr>20)obs.push({e:'🎯',bg:'rgba(5,150,105,.08)',txt:`Savings rate <strong>${sr.toFixed(1)}%</strong> exceeds the recommended 20%. Great financial discipline!`});
  else obs.push({e:'⚠️',bg:'rgba(217,119,6,.08)',txt:`Savings rate is <strong>${sr.toFixed(1)}%</strong>. Aim for 20%+ by reducing discretionary spending.`});
  if(months.length>=2){const ec=m[last].exp-m[prev].exp;obs.push({e:ec>0?'📈':'📉',bg:ec>0?'rgba(220,38,38,.06)':'rgba(5,150,105,.06)',txt:`Expenses ${ec>0?'rose':'fell'} by <strong>${fmt(Math.abs(ec))}</strong> month-over-month.`})}
  if(ce['Investments'])obs.push({e:'💹',bg:'rgba(37,99,235,.08)',txt:`You've invested <strong>${fmt(ce['Investments'])}</strong>. Consistent investing builds long-term wealth.`});
  if(Object.keys(S.budgets).length>0){const over=Object.keys(S.budgets).filter(c=>ce[c]>S.budgets[c]);if(over.length)obs.push({e:'🚨',bg:'rgba(220,38,38,.08)',txt:`You've exceeded budget in: <strong>${over.join(', ')}</strong>. Review your spending.`})}
  document.getElementById('obsList').innerHTML=obs.map(o=>`<div style="display:flex;gap:12px;align-items:flex-start;padding:13px;border-radius:12px;background:${o.bg};margin-bottom:9px;border:1px solid rgba(124,58,237,.07)"><span style="font-size:22px;flex-shrink:0;line-height:1.2">${o.e}</span><p style="font-size:13px;line-height:1.65">${o.txt}</p></div>`).join('');
}

function buildDelta(){
  const m=getMonthly();const keys=Object.keys(m).sort();
  const labels=keys.map(k=>{const d=new Date(k+'-01');return d.toLocaleString('default',{month:'short'})});
  const nets=keys.map(k=>m[k].inc-m[k].exp);
  dc('delta');const ctx=document.getElementById('cDelta');if(!ctx)return;
  S.charts.delta=new Chart(ctx,{type:'bar',data:{labels,datasets:[{label:'Net',data:nets,backgroundColor:nets.map(v=>v>=0?h2r('#059669',.82):h2r('#DC2626',.82)),borderColor:nets.map(v=>v>=0?'#059669':'#DC2626'),borderWidth:1.5,borderRadius:6,borderSkipped:false}]},options:{responsive:true,maintainAspectRatio:false,plugins:{legend:{display:false}},scales:{y:{ticks:{callback:v=>fmtS(v),font:{size:10,family:'DM Mono'},color:tCol()},grid:{color:gCol()},border:{display:false}},x:{ticks:{font:{size:10,family:'DM Mono'},color:tCol()},grid:{display:false},border:{display:false}}}}});
}

/* ═══════════════════════════════════════════
   API LOG
═══════════════════════════════════════════ */
function renderLog(){
  const body=document.getElementById('apiBody');const cnt=document.getElementById('logCount');
  if(!body)return;
  if(cnt)cnt.textContent=S.log.length+' entries';
  if(!S.log.length){body.innerHTML='<div class="api-entry" style="color:var(--text3)">No API calls yet — use the buttons below to simulate.</div>';return}
  body.innerHTML=S.log.map(e=>`<div class="api-entry"><span class="api-m m-${e.method}">${e.method}</span><span style="flex:1;color:var(--text2);font-size:11px">${e.ep}</span><span class="api-sc ${e.ok?'ok':'err'}">${e.status}</span><span class="api-time">${e.lat}ms</span><span class="api-time">${e.time}</span></div>`).join('');
}
function clearLog(){S.log=[];save();renderLog();toast('Log cleared','i')}

/* ═══════════════════════════════════════════
   EXPORT
═══════════════════════════════════════════ */
function exportCSV(){
  const rows=getFiltered();if(!rows.length){toast('No data to export','e');return}
  const body=rows.map(t=>`${t.date},"${t.desc}","${t.category}",${t.type},${t.amount},"${t.note||''}"`).join('\n');
  dl('finflow_'+new Date().toISOString().slice(0,10)+'.csv','text/csv','Date,Description,Category,Type,Amount,Note\n'+body);
  mFetch('GET','/api/export?fmt=csv',200);toast(`Exported ${rows.length} rows as CSV ✓`,'s');
}
function exportJSON(){
  const rows=getFiltered();if(!rows.length){toast('No data to export','e');return}
  dl('finflow_'+new Date().toISOString().slice(0,10)+'.json','application/json',JSON.stringify({exported:new Date().toISOString(),count:rows.length,summary:calcSumm(rows),budgets:S.budgets,transactions:rows},null,2));
  mFetch('GET','/api/export?fmt=json',200);toast(`Exported ${rows.length} records as JSON ✓`,'s');
}
function dl(name,mime,content){const a=document.createElement('a');a.href='data:'+mime+';charset=utf-8,'+encodeURIComponent(content);a.download=name;a.click()}

/* ═══════════════════════════════════════════
   TOAST
═══════════════════════════════════════════ */
function toast(msg,type='i'){
  const wrap=document.getElementById('toastWrap');
  const el=document.createElement('div');el.className='toast';
  el.innerHTML=`<div class="t-dot ${type}"></div><span>${msg}</span>`;
  wrap.appendChild(el);
  setTimeout(()=>{el.classList.add('out');setTimeout(()=>el.remove(),240)},2600);
}

/* ═══════════════════════════════════════════
   INIT
═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded',()=>{
  load();
  document.getElementById('todayLbl').textContent=new Date().toLocaleDateString('en-IN',{weekday:'short',day:'numeric',month:'short',year:'numeric'});
  if(S.dark)document.getElementById('themeLabel').textContent='☀ Light mode';
  setRole(S.role);
  renderDash();
  mFetch('GET','/api/summary',200);
});
