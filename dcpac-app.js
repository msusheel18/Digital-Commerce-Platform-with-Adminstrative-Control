/**
 * DCPAC — Digital Commerce Platform with Administrative Control
 * dcpac-app.js — Complete Application Logic
 */

'use strict';

/* ══════════════════════════════════════════════
   PRODUCT DATABASE (45 Products)
══════════════════════════════════════════════ */
const DB = [
  {id:1,  name:"Apple iPhone 15 Pro Max 256GB Titanium",           cat:"Electronics", price:134900, mrp:159900, rating:4.8, rev:14532, disc:16, img:"https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500&q=80",  desc:"A17 Pro chip, titanium frame, 48MP camera system, 5x telephoto, Action button, USB-C with USB 3.", badge:"NEW"},
  {id:2,  name:"Samsung Galaxy S24 Ultra 512GB Titanium",          cat:"Electronics", price:129999, mrp:149999, rating:4.7, rev:9823,  disc:13, img:"https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500&q=80",  desc:"Built-in S Pen, Galaxy AI, 200MP camera, Snapdragon 8 Gen 3, 5000mAh battery.", badge:"HOT"},
  {id:3,  name:"MacBook Air M3 13-inch 16GB 512GB",                cat:"Electronics", price:114900, mrp:134900, rating:4.9, rev:5634,  disc:15, img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&q=80",  desc:"Apple M3 chip, 18-hr battery, Liquid Retina display, MagSafe charging, fanless design.", badge:""},
  {id:4,  name:"Sony WH-1000XM5 Noise Cancelling Headphones",      cat:"Electronics", price:24990,  mrp:34990,  rating:4.8, rev:19867, disc:29, img:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",  desc:"Industry-leading ANC, 30-hour battery, Auto NC Optimizer, Speak-to-Chat, multipoint.", badge:"BEST"},
  {id:5,  name:"iPad Pro M4 13-inch Wi-Fi 256GB",                  cat:"Electronics", price:109900, mrp:129900, rating:4.7, rev:3451,  disc:15, img:"https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80",  desc:"Ultra Retina XDR OLED, M4 chip, ProRes video, Thunderbolt 4, 5G optional.", badge:"NEW"},
  {id:6,  name:"OnePlus 12 5G 16GB 512GB Silky Black",             cat:"Electronics", price:64999,  mrp:74999,  rating:4.6, rev:6234,  disc:13, img:"https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=500&q=80",  desc:"Snapdragon 8 Gen 3, 100W SUPERVOOC, 50W wireless, Hasselblad camera, 5400mAh.", badge:""},
  {id:7,  name:"Dell XPS 15 Core i9 32GB RTX 4070",               cat:"Electronics", price:199990, mrp:229990, rating:4.7, rev:2187,  disc:13, img:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=500&q=80",  desc:"OLED 3.5K touch, i9-13900H, 1TB SSD, 32GB DDR5, RTX 4070, Windows 11 Pro.", badge:"PRO"},
  {id:8,  name:"Apple Watch Series 9 GPS 45mm Midnight",           cat:"Electronics", price:44900,  mrp:54900,  rating:4.8, rev:9876,  disc:18, img:"https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80",  desc:"S9 chip, Double Tap, always-on display, blood oxygen, ECG, crash detection.", badge:""},
  {id:9,  name:"Sony PlayStation 5 Slim Disc Edition",             cat:"Electronics", price:54990,  mrp:64999,  rating:4.9, rev:28451, disc:15, img:"https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=500&q=80",  desc:"Ultra-high speed 1TB SSD, 4K@120fps, ray tracing, DualSense haptics, 3D audio.", badge:"🎮"},
  {id:10, name:"Canon EOS R6 Mark II Mirrorless Body",             cat:"Electronics", price:239990, mrp:279990, rating:4.8, rev:1234,  disc:14, img:"https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80",  desc:"40fps continuous, 6K RAW video, 5-axis IBIS, Dual Pixel CMOS AF II, 24.2MP.", badge:"PRO"},
  {id:11, name:"JBL Flip 6 Portable Bluetooth Speaker",            cat:"Electronics", price:9999,   mrp:12999,  rating:4.7, rev:23456, disc:23, img:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",  desc:"IP67 waterproof, 12-hour playtime, 2-way speaker, JBL PartyBoost, USB-C.", badge:""},
  {id:12, name:"Samsung 65\" Neo QLED 8K 120Hz Smart TV",          cat:"Electronics", price:199990, mrp:269990, rating:4.7, rev:3456,  disc:26, img:"https://images.unsplash.com/photo-1593359677879-a4bb92f829e1?w=500&q=80",  desc:"Neural Quantum Processor 8K, HDR10+, Quantum Matrix Pro, Bixby, 120Hz.", badge:"TV"},
  {id:13, name:"GoPro HERO12 Black + Accessories Kit",             cat:"Electronics", price:39990,  mrp:47990,  rating:4.7, rev:8765,  disc:17, img:"https://images.unsplash.com/photo-1551874347-63b5c0abf8f3?w=500&q=80",  desc:"5.3K60 video, 27MP, HyperSmooth 6.0, 70% longer battery, waterproof 10m.", badge:""},
  {id:14, name:"Kindle Paperwhite Signature 32GB",                 cat:"Electronics", price:14999,  mrp:18999,  rating:4.8, rev:56789, disc:21, img:"https://images.unsplash.com/photo-1592899350337-dd19b8773e5a?w=500&q=80",  desc:"6.8\" 300ppi, auto-adjusting front light, IPX8, 10-week battery, USB-C.", badge:""},
  {id:15, name:"Nike Air Max 270 React Men's Shoes",               cat:"Fashion",     price:12995,  mrp:16995,  rating:4.6, rev:34521, disc:24, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",  desc:"Max Air 270 unit, engineered mesh, rubber outsole, cushioned sock liner.", badge:"NIKE"},
  {id:16, name:"Levi's 511 Slim Fit Stretch Jeans",                cat:"Fashion",     price:2799,   mrp:4299,   rating:4.5, rev:56789, disc:35, img:"https://images.unsplash.com/photo-1542272604-787c3835535d?w=500&q=80",  desc:"Slim from hip to ankle, sits below waist, Advanced Stretch denim.", badge:""},
  {id:17, name:"Women's Chiffon Floral Maxi Wrap Dress",           cat:"Fashion",     price:1799,   mrp:2999,   rating:4.4, rev:12345, disc:40, img:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80",  desc:"Lightweight chiffon, V-neck wrap, adjustable tie, all-over floral print.", badge:"SALE"},
  {id:18, name:"Ray-Ban Classic Aviator RB3025 Gold/G-15",         cat:"Fashion",     price:9990,   mrp:12990,  rating:4.7, rev:23456, disc:23, img:"https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80",  desc:"Teardrop shape, 100% UV, crystal lenses, lightweight gold metal frame.", badge:""},
  {id:19, name:"Tommy Hilfiger Men's Pique Polo T-Shirt",          cat:"Fashion",     price:2799,   mrp:4500,   rating:4.5, rev:8765,  disc:38, img:"https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=500&q=80",  desc:"100% pique cotton, flag embroidery, ribbed collar, two-button placket.", badge:""},
  {id:20, name:"Adidas Ultraboost 22 Running Shoes Men's",         cat:"Fashion",     price:14999,  mrp:17999,  rating:4.7, rev:19876, disc:17, img:"https://images.unsplash.com/photo-1556906781-9a412961d28e?w=500&q=80",  desc:"Responsive Boost midsole, Primeknit+ upper, Continental rubber, LEP.", badge:"ADIDAS"},
  {id:21, name:"Coach Tabby 26 Pebbled Leather Shoulder Bag",      cat:"Fashion",     price:24999,  mrp:35000,  rating:4.6, rev:4321,  disc:29, img:"https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",  desc:"Pebbled leather, gold-tone hardware, interior zip pocket, 10\" strap drop.", badge:""},
  {id:22, name:"Casio G-Shock DW-5600 Tough Quartz Watch",         cat:"Fashion",     price:7495,   mrp:9995,   rating:4.8, rev:34567, disc:25, img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",  desc:"200m water resist, shock proof, stopwatch, auto-calendar, resin band.", badge:""},
  {id:23, name:"Dyson V15 Detect Absolute Cordless Vacuum",        cat:"Home",        price:52900,  mrp:62900,  rating:4.7, rev:3456,  disc:16, img:"https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80",  desc:"Laser Slim Fluffy, acoustic piezo sensor, LCD particle count screen.", badge:"DYSON"},
  {id:24, name:"Instant Pot Duo 7-in-1 Pressure Cooker 6L",        cat:"Home",        price:8999,   mrp:12999,  rating:4.8, rev:67890, disc:31, img:"https://images.unsplash.com/photo-1585515320310-259814833e62?w=500&q=80",  desc:"7-in-1: pressure cooker, slow cooker, rice cooker, sauté, yogurt.", badge:""},
  {id:25, name:"KitchenAid Artisan 5.5-Qt Tilt-Head Mixer",        cat:"Home",        price:39999,  mrp:49999,  rating:4.8, rev:12345, disc:20, img:"https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=500&q=80",  desc:"5.5L stainless bowl, 10-speed, includes beater, dough hook & whip.", badge:""},
  {id:26, name:"Philips Air Purifier Series 3000i Auto Mode",      cat:"Home",        price:14999,  mrp:19999,  rating:4.6, rev:5678,  disc:25, img:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80",  desc:"NanoProtect HEPA, 99.97% particle capture, real-time air quality.", badge:""},
  {id:27, name:"Prestige 5L SS Induction Pressure Cooker",         cat:"Home",        price:2499,   mrp:3999,   rating:4.7, rev:45678, disc:38, img:"https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",  desc:"Induction base, 304 food-grade SS, 3-year warranty, BIS certified.", badge:""},
  {id:28, name:"Yonex Astrox 99 Pro Carbon Badminton Racket",      cat:"Sports",      price:15999,  mrp:19999,  rating:4.7, rev:4321,  disc:20, img:"https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=500&q=80",  desc:"Rotational Generator System, steep angle attack, graphite shaft, 83g.", badge:"YONEX"},
  {id:29, name:"Decathlon Domyos Fitness Mat 6mm TPE",             cat:"Sports",      price:999,    mrp:1599,   rating:4.6, rev:34567, disc:38, img:"https://images.unsplash.com/photo-1601925228946-47d05f88a1a5?w=500&q=80",  desc:"Anti-slip TPE, 183x61cm, integrated carry strap, wipe-clean.", badge:""},
  {id:30, name:"ON Gold Standard Whey 5 lbs Chocolate",            cat:"Sports",      price:4799,   mrp:6499,   rating:4.8, rev:78901, disc:26, img:"https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500&q=80",  desc:"24g protein, 5.5g BCAAs, 4g glutamine, 74 servings, mixes instantly.", badge:"ON"},
  {id:31, name:"Nike React Infinity Run Flyknit 3 Men's",          cat:"Sports",      price:10995,  mrp:13995,  rating:4.6, rev:8543,  disc:21, img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80",  desc:"React foam, Flyknit upper, wide base for stability, Flywire lockdown.", badge:"NIKE"},
  {id:32, name:"MAC Lipstick Ruby Woo Retro Matte 3g",             cat:"Beauty",      price:1900,   mrp:2500,   rating:4.7, rev:45678, disc:24, img:"https://images.unsplash.com/photo-1586495777744-4e6232bf2f5d?w=500&q=80",  desc:"Iconic retro matte, classic true red, full-coverage, up to 8 hours.", badge:"MAC"},
  {id:33, name:"The Ordinary Hyaluronic Acid 2% + B5 30ml",        cat:"Beauty",      price:990,    mrp:1500,   rating:4.6, rev:89012, disc:34, img:"https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500&q=80",  desc:"Multi-molecular weight HA with vitamin B5, plumps fine lines.", badge:""},
  {id:34, name:"Dyson Airwrap Multi-Styler Complete Long",          cat:"Beauty",      price:44900,  mrp:54900,  rating:4.8, rev:12345, disc:18, img:"https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&q=80",  desc:"Style and dry simultaneously, no extreme heat, 6 attachments, Coanda.", badge:"DYSON"},
  {id:35, name:"L'Oréal Revitalift Laser Pure Retinol Night Serum",cat:"Beauty",      price:1299,   mrp:1799,   rating:4.5, rev:23456, disc:28, img:"https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80",  desc:"0.2% pure retinol, visible anti-wrinkle in 4 weeks, all skin types.", badge:""},
  {id:36, name:"Atomic Habits by James Clear — Paperback",         cat:"Books",       price:499,    mrp:799,    rating:4.9, rev:234567,disc:38, img:"https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&q=80",  desc:"Proven framework for building habits. Tiny changes, remarkable results.", badge:"#1"},
  {id:37, name:"Rich Dad Poor Dad — 25th Anniversary Ed.",         cat:"Books",       price:349,    mrp:599,    rating:4.7, rev:345678,disc:42, img:"https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&q=80",  desc:"What the rich teach kids about money. Robert Kiyosaki's timeless classic.", badge:""},
  {id:38, name:"The Psychology of Money — Morgan Housel",          cat:"Books",       price:399,    mrp:699,    rating:4.8, rev:156789,disc:43, img:"https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=500&q=80",  desc:"19 stories about wealth, greed and happiness. Timeless finance lessons.", badge:"#1"},
  {id:39, name:"Zero to One — Peter Thiel",                        cat:"Books",       price:449,    mrp:699,    rating:4.7, rev:89012, disc:36, img:"https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=500&q=80",  desc:"Build companies that create new things. Notes on startups and the future.", badge:""},
  {id:40, name:"LEGO Technic Lamborghini Sián FKP 37 (42115)",     cat:"Toys",        price:24999,  mrp:32999,  rating:4.8, rev:8765,  disc:24, img:"https://images.unsplash.com/photo-1568625365131-079e026a927d?w=500&q=80",  desc:"3,696 pieces, working V12, gearbox 4 speeds, 400+ moving parts. Age 18+.", badge:"LEGO"},
  {id:41, name:"Barbie Dreamhouse 3-Story Playset 77 Accessories", cat:"Toys",        price:12999,  mrp:16999,  rating:4.6, rev:12345, disc:24, img:"https://images.unsplash.com/photo-1559456108-5e05cf6e1c93?w=500&q=80",  desc:"3 stories, 8 rooms, working elevator, pool with slide, 77 accessories.", badge:""},
  {id:42, name:"Tata Premium Assam Leaf Tea 1 kg Gold",            cat:"Grocery",     price:499,    mrp:699,    rating:4.7, rev:45678, disc:29, img:"https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=80",  desc:"Rich Assam leaves, bold morning brew, freshness-sealed foil pack.", badge:""},
  {id:43, name:"Organic India Tulsi Green Tea 100 Sachets",        cat:"Grocery",     price:349,    mrp:499,    rating:4.6, rev:23456, disc:30, img:"https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=500&q=80",  desc:"Certified organic adaptogenic tulsi + green tea, antioxidant-rich.", badge:"BIO"},
  {id:44, name:"Borges Extra Virgin Olive Oil 750ml Spain",        cat:"Grocery",     price:699,    mrp:999,    rating:4.7, rev:34567, disc:30, img:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=500&q=80",  desc:"Cold-extracted Spanish olives, high polyphenols, no additives.", badge:""},
  {id:45, name:"Bagrry's Oats & More Mixed Grain Muesli 1kg",     cat:"Grocery",     price:389,    mrp:549,    rating:4.5, rev:18765, disc:29, img:"https://images.unsplash.com/photo-1557461759-459c4a909fba?w=500&q=80",  desc:"High fibre, no added sugar, whole grains, fruit & nut mix, ready-to-eat.", badge:""},
];

/* ══════════════════════════════════════════════
   STATE
══════════════════════════════════════════════ */
let cart    = JSON.parse(localStorage.getItem('dcpac_cart')   || '[]');
let users   = JSON.parse(localStorage.getItem('dcpac_users')  || '[]');
let orders  = JSON.parse(localStorage.getItem('dcpac_orders') || '[]');
let session = JSON.parse(localStorage.getItem('dcpac_sess')   || 'null');
let activeCat   = '';
let prevPage    = 'home';
let lastOrdId   = '';
let couponAmt   = 0;
let isSignup    = false;

/* ══════════════════════════════════════════════
   BOOT
══════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  seedDemo();
  initCursor();
  initParticles();
  initHeroReel();
  buildTicker();
  buildCatGrid();
  buildHomeRows();
  buildFsbCats();
  bindSearch();
  updateCartBadge();
  updateAcctUI();
  P('home');
});

function seedDemo() {
  if (!users.find(u => u.email === 'demo@dcpac.com'))
    users.push({ name:'Demo User', email:'demo@dcpac.com', pass:'demo123' });
  localStorage.setItem('dcpac_users', JSON.stringify(users));
}

/* ══════════════════════════════════════════════
   CURSOR
══════════════════════════════════════════════ */
function initCursor() {
  const dot = document.getElementById('cur');
  const trail = document.getElementById('curTrail');
  if (!dot || !trail) return;
  let mx = 0, my = 0;
  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    dot.style.transform = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
  });
  let tx = 0, ty = 0;
  function smoothTrail() {
    tx += (mx - tx) * 0.12;
    ty += (my - ty) * 0.12;
    trail.style.transform = `translate(${tx}px,${ty}px) translate(-50%,-50%)`;
    requestAnimationFrame(smoothTrail);
  }
  smoothTrail();
  document.querySelectorAll('button,a,input,select,[class*="card"],[class*="tile"],[class*="item"]').forEach(el => {
    el.addEventListener('mouseenter', () => { dot.classList.add('big'); trail.classList.add('big'); });
    el.addEventListener('mouseleave', () => { dot.classList.remove('big'); trail.classList.remove('big'); });
  });
}

/* ══════════════════════════════════════════════
   PARTICLE CANVAS
══════════════════════════════════════════════ */
function initParticles() {
  const canvas = document.getElementById('particleCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [];
  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  for (let i = 0; i < 70; i++) particles.push({
    x: Math.random() * 1920, y: Math.random() * 900,
    r: Math.random() * 1.5 + 0.3,
    vx: (Math.random() - 0.5) * 0.4, vy: (Math.random() - 0.5) * 0.4,
    o: Math.random() * 0.5 + 0.1
  });
  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(57,255,20,${p.o})`;
      ctx.shadowBlur = 6; ctx.shadowColor = '#39ff14';
      ctx.fill();
    });
    // Connection lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(57,255,20,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

/* ══════════════════════════════════════════════
   HERO REEL
══════════════════════════════════════════════ */
function initHeroReel() {
  const wrap = document.getElementById('heroReel');
  if (!wrap) return;
  const picks = DB.filter(p => p.disc >= 20).slice(0, 5);
  picks.forEach((p, i) => {
    const d = document.createElement('div');
    d.className = 'hero-reel-card';
    d.style.animationDelay = `${i * 0.1}s`;
    d.onclick = () => openDetail(p.id);
    d.innerHTML = `
      <img class="hrc-img" src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=100&q=60'">
      <div class="hrc-info">
        <div class="hrc-name">${p.name}</div>
        <div class="hrc-cat">${p.cat}</div>
      </div>
      <div>
        <div class="hrc-price">₹${p.price.toLocaleString()}</div>
        <div class="hrc-off">${p.disc}% off</div>
      </div>`;
    wrap.appendChild(d);
  });
}

/* ══════════════════════════════════════════════
   TICKER
══════════════════════════════════════════════ */
function buildTicker() {
  const track = document.getElementById('tickerTrack');
  if (!track) return;
  const items = DB.map(p => `${p.name} — ₹${p.price.toLocaleString()}`);
  const doubled = [...items, ...items];
  track.innerHTML = doubled.map(t =>
    `<span class="tick-item"><span class="tick-sep">◆</span>${t}</span>`
  ).join('');
}

/* ══════════════════════════════════════════════
   PAGE ROUTER
══════════════════════════════════════════════ */
function P(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('pg-' + id);
  if (!pg) return;
  pg.classList.add('active');
  prevPage = id;
  window.scrollTo({ top: 0, behavior: 'smooth' });
  if (id === 'cart')    renderCart();
  if (id === 'payment') renderPayment();
  if (id === 'orders')  renderOrders();
  if (id === 'deals')   renderDeals();
}

function C(cat) { activeCat = cat; openProducts(cat); }
function goBack() { P(prevPage === 'detail' ? 'home' : prevPage); }

/* ══════════════════════════════════════════════
   CATEGORY GRID (HOME)
══════════════════════════════════════════════ */
const CAT_META = {
  Electronics:{ img:'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&q=80' },
  Fashion:    { img:'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&q=80' },
  Home:       { img:'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80' },
  Sports:     { img:'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&q=80' },
  Beauty:     { img:'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80' },
  Books:      { img:'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&q=80' },
  Toys:       { img:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80' },
  Grocery:    { img:'https://images.unsplash.com/photo-1542838132-92c53300491e?w=400&q=80' },
};

function buildCatGrid() {
  const grid = document.getElementById('catGrid');
  if (!grid) return;
  Object.keys(CAT_META).forEach(cat => {
    const count = DB.filter(p => p.cat === cat).length;
    const div = document.createElement('div');
    div.className = 'cat-tile';
    div.onclick = () => C(cat);
    div.innerHTML = `
      <img src="${CAT_META[cat].img}" alt="${cat}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&q=60'">
      <div class="cat-tile-overlay">
        <div class="ct-tag">${count} products</div>
        <div class="ct-name">${cat.toUpperCase()}</div>
      </div>
      <div class="ct-arrow">→</div>`;
    grid.appendChild(div);
  });
}

/* ══════════════════════════════════════════════
   HOME ROWS
══════════════════════════════════════════════ */
function buildHomeRows() {
  renderGrid('trendGrid',  shuffle(DB).slice(0, 8));
  renderGrid('elecGrid',   DB.filter(p => p.cat === 'Electronics').slice(0, 8));
  renderGrid('fashGrid',   DB.filter(p => p.cat === 'Fashion').slice(0, 8));
  buildDealsBento();
}

function buildDealsBento() {
  const wrap = document.getElementById('dealsBento');
  if (!wrap) return;
  const picks = DB.filter(p => p.disc >= 25).sort((a,b) => b.disc - a.disc).slice(0, 5);
  wrap.innerHTML = picks.map((p,i) => `
    <div class="bento-item" onclick="openDetail(${p.id})">
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&q=60'">
      <div class="bento-ov">
        <span class="bento-disc">${p.disc}% OFF</span>
        <div class="bento-name">${p.name.substring(0,40)}${p.name.length>40?'…':''}</div>
        <div class="bento-price">₹${p.price.toLocaleString()}</div>
        <span class="bento-cta">SHOP NOW →</span>
      </div>
    </div>`).join('');
}

function shuffle(a) { return [...a].sort(() => Math.random() - 0.5); }

/* ══════════════════════════════════════════════
   PRODUCT CARD FACTORY
══════════════════════════════════════════════ */
function makeCard(p) {
  const el = document.createElement('div');
  el.className = 'prod-card';
  const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '') + '☆'.repeat(5 - Math.ceil(p.rating));
  el.innerHTML = `
    ${p.badge ? `<div class="pc-badge">${p.badge}</div>` : ''}
    <button class="pc-wish" onclick="wish(event,${p.id})">♡</button>
    <div class="pc-img">
      <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&q=60'">
      <div class="pc-hover-bar">
        <button class="pc-btn-c" onclick="addCart(event,${p.id})">+ CART</button>
        <button class="pc-btn-b" onclick="buyNow(event,${p.id})">BUY NOW</button>
      </div>
    </div>
    <div class="pc-body">
      <div class="pc-cat">${p.cat}</div>
      <div class="pc-name">${p.name}</div>
      <div class="pc-stars">
        <span class="pc-star-str">${stars.substring(0,5)}</span>
        <span class="pc-revs">(${p.rev.toLocaleString()})</span>
      </div>
      <div class="pc-price-row">
        <span class="pc-price">₹${p.price.toLocaleString()}</span>
        <span class="pc-mrp">₹${p.mrp.toLocaleString()}</span>
        <span class="pc-off">${p.disc}% OFF</span>
      </div>
      <div class="pc-del">⚡ FREE DELIVERY</div>
    </div>`;
  el.addEventListener('click', e => {
    if (!e.target.closest('.pc-btn-c,.pc-btn-b,.pc-wish')) openDetail(p.id);
  });
  return el;
}

function renderGrid(id, prods) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = '';
  prods.forEach(p => el.appendChild(makeCard(p)));
}

/* ══════════════════════════════════════════════
   PRODUCT DETAIL
══════════════════════════════════════════════ */
function openDetail(id) {
  const p = DB.find(x => x.id === id);
  if (!p) return;
  const saved = p.mrp - p.price;
  document.getElementById('detailMount').innerHTML = `
    <div class="detail-grid">
      <div class="detail-img-box">
        <img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&q=60'">
      </div>
      <div class="detail-info-col">
        <div class="di-cat">${p.cat.toUpperCase()}</div>
        <h1 class="di-name">${p.name}</h1>
        <div class="di-rating-row">
          <span class="di-stars">${'★'.repeat(Math.floor(p.rating))}${'☆'.repeat(5-Math.floor(p.rating))}</span>
          <span class="di-revs">${p.rating} · ${p.rev.toLocaleString()} ratings</span>
        </div>
        <div class="di-price-panel">
          <div class="di-price">₹${p.price.toLocaleString()}</div>
          <div class="di-price-sub">
            <span class="di-mrp">₹${p.mrp.toLocaleString()}</span>
            <span class="di-off">${p.disc}% OFF</span>
          </div>
          <div class="di-save">You save ₹${saved.toLocaleString()}</div>
          <div class="di-del">⚡ Free delivery · ↩ 7-day returns</div>
        </div>
        <p class="di-desc">${p.desc}</p>
        <div class="di-btns">
          <button class="di-btn-c" onclick="addCart(event,${p.id})">ADD TO CART</button>
          <button class="di-btn-b" onclick="buyNow(event,${p.id})">BUY NOW</button>
        </div>
        <div class="di-features">
          <h4>KEY HIGHLIGHTS</h4>
          <div class="df-row">100% Authentic product from verified seller</div>
          <div class="df-row">7-Day hassle-free return & exchange policy</div>
          <div class="df-row">Free delivery on all orders above ₹499</div>
          <div class="df-row">SSL encrypted secure payment gateway</div>
          <div class="df-row">DCPAC Buyer Protection on every order</div>
        </div>
      </div>
    </div>`;
  P('detail');
}

/* ══════════════════════════════════════════════
   SEARCH
══════════════════════════════════════════════ */
function bindSearch() {
  const input = document.getElementById('searchInput');
  const drop  = document.getElementById('searchDrop');
  if (!input || !drop) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const cat = document.getElementById('hdrCatSel')?.value;
    if (!q) { drop.classList.remove('open'); return; }
    const res = DB.filter(p =>
      (p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)) &&
      (!cat || p.cat === cat)
    ).slice(0, 6);
    drop.innerHTML = res.length
      ? res.map(p => `
          <div class="sd-row" onclick="openDetail(${p.id});drop.classList.remove('open')">
            <img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'">
            <div class="sd-name">${p.name.substring(0,45)}…</div>
            <div class="sd-price">₹${p.price.toLocaleString()}</div>
          </div>`).join('')
      : '<div class="sd-row" style="color:var(--text3)">No results found</div>';
    drop.classList.add('open');
  });
  input.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(); });
  document.addEventListener('click', e => { if (!e.target.closest('.hdr-search')) drop.classList.remove('open'); });
}

function doSearch() {
  document.getElementById('searchDrop')?.classList.remove('open');
  const q   = document.getElementById('searchInput')?.value.trim().toLowerCase() || '';
  const cat = document.getElementById('hdrCatSel')?.value || '';
  activeCat = cat;
  openProducts(cat, q);
}

/* ══════════════════════════════════════════════
   PRODUCTS PAGE
══════════════════════════════════════════════ */
function openProducts(cat, q = '') {
  document.getElementById('prodPageTitle').textContent = q ? `RESULTS: "${q}"` : (cat || 'ALL PRODUCTS');
  buildFsbCats(cat);
  P('products');
  setTimeout(() => applyF(q), 40);
}

function buildFsbCats(active = '') {
  const wrap = document.getElementById('fsbCats');
  if (!wrap) return;
  const cats = ['', ...Object.keys(CAT_META)];
  wrap.innerHTML = cats.map(c => `
    <button class="fsb-cat-btn${c === active ? ' active' : ''}" onclick="setCat('${c}')">
      ${c || 'ALL CATEGORIES'}
    </button>`).join('');
}

function setCat(cat) { activeCat = cat; buildFsbCats(cat); document.getElementById('prodPageTitle').textContent = cat || 'ALL PRODUCTS'; applyF(); }

function resetFilters() {
  activeCat = '';
  document.getElementById('priceSlider').value = 250000;
  document.getElementById('slideVal').textContent = '2,50,000';
  document.querySelector('input[name="rF"][value="0"]').checked = true;
  document.querySelector('input[name="dF"][value="0"]').checked = true;
  document.getElementById('sortSel').value = '';
  buildFsbCats('');
  document.getElementById('prodPageTitle').textContent = 'ALL PRODUCTS';
  applyF();
}

function onSlide(v) {
  document.getElementById('slideVal').textContent = Number(v).toLocaleString('en-IN');
  applyF();
}

function applyF(q = '') {
  let prods = [...DB];
  if (activeCat) prods = prods.filter(p => p.cat === activeCat);
  if (q) prods = prods.filter(p => p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q));
  const maxP = parseFloat(document.getElementById('priceSlider')?.value || 250000);
  const minR = parseFloat(document.querySelector('input[name="rF"]:checked')?.value || 0);
  const minD = parseFloat(document.querySelector('input[name="dF"]:checked')?.value || 0);
  const sort  = document.getElementById('sortSel')?.value || '';
  prods = prods.filter(p => p.price <= maxP && p.rating >= minR && p.disc >= minD);
  if (sort === 'pLo') prods.sort((a,b) => a.price - b.price);
  if (sort === 'pHi') prods.sort((a,b) => b.price - a.price);
  if (sort === 'rat') prods.sort((a,b) => b.rating - a.rating);
  if (sort === 'dis') prods.sort((a,b) => b.disc - a.disc);
  const el = document.getElementById('prodGrid');
  const cnt = document.getElementById('prodCount');
  if (el) { el.innerHTML = ''; prods.forEach(p => el.appendChild(makeCard(p))); }
  if (cnt) cnt.textContent = `${prods.length} RESULTS`;
}

function toggleFilterSidebar() {
  document.getElementById('filterSidebar')?.classList.toggle('open');
}

/* ══════════════════════════════════════════════
   CART
══════════════════════════════════════════════ */
function saveCart() { localStorage.setItem('dcpac_cart', JSON.stringify(cart)); }
function updateCartBadge() {
  const total = cart.reduce((s,i) => s + i.qty, 0);
  document.getElementById('cartCt').textContent = total;
}

function addCart(e, id) {
  if (e) e.stopPropagation();
  const p = DB.find(x => x.id === id);
  if (!p) return;
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty++; else cart.push({ id, qty: 1 });
  saveCart(); updateCartBadge();
  toast(`✓ ${p.name.substring(0,30)}… added to cart`);
}

function buyNow(e, id) {
  if (e) e.stopPropagation();
  if (!session) { toast('⚠ Sign in to continue'); P('auth'); return; }
  addCart(null, id);
  P('payment');
}

function rmCart(id) { cart = cart.filter(i => i.id !== id); saveCart(); updateCartBadge(); renderCart(); }
function chgQty(id, d) {
  const it = cart.find(i => i.id === id);
  if (!it) return;
  it.qty = Math.max(1, it.qty + d);
  saveCart(); renderCart();
}

function renderCart() {
  const mount  = document.getElementById('cartMount');
  const sumWrap = document.getElementById('cartSum');
  if (!mount) return;
  couponAmt = 0;
  const cm = document.getElementById('couponMsg');
  if (cm) cm.textContent = '';

  if (!cart.length) {
    mount.innerHTML = `<div class="cart-empty"><div class="cart-empty-icon">🛒</div><h3 style="font-family:var(--font-hd);font-size:1.5rem;letter-spacing:.04em">CART IS EMPTY</h3><p style="color:var(--text3);margin:.5rem 0 1.5rem">Add products to your cart</p><button class="btn-primary" onclick="C('')">EXPLORE PRODUCTS</button></div>`;
    if (sumWrap) sumWrap.innerHTML = '';
    return;
  }

  const rows = [];
  let sub = 0, orig = 0;
  cart.forEach(ci => {
    const p = DB.find(x => x.id === ci.id);
    if (!p) return;
    sub += p.price * ci.qty;
    orig += p.mrp * ci.qty;
    rows.push(`
      <div class="cart-item">
        <img class="ci-img" src="${p.img}" alt="${p.name}" onclick="openDetail(${p.id})" onerror="this.src='https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=100&q=60'">
        <div class="ci-info">
          <div class="ci-name" onclick="openDetail(${p.id})">${p.name}</div>
          <div class="ci-cat">${p.cat}</div>
          <div class="ci-price">₹${(p.price * ci.qty).toLocaleString()}</div>
        </div>
        <div class="ci-right">
          <div class="qty-ctrl">
            <button onclick="chgQty(${p.id},-1)">−</button>
            <span class="qty-num">${ci.qty}</span>
            <button onclick="chgQty(${p.id},1)">+</button>
          </div>
          <button class="ci-rm" onclick="rmCart(${p.id})">REMOVE</button>
        </div>
      </div>`);
  });

  mount.innerHTML = `<div class="cart-items-col">${rows.join('')}</div>`;
  const disc = orig - sub;
  const del = sub >= 499 ? 0 : 49;
  const total = sub + del;
  if (sumWrap) sumWrap.innerHTML = `
    <div class="sum-row"><span>Subtotal</span><span>₹${orig.toLocaleString()}</span></div>
    <div class="sum-row"><span>Product Discount</span><span class="sum-neon">−₹${disc.toLocaleString()}</span></div>
    <div class="sum-row"><span>Delivery</span><span>${del ? '₹49' : '<span class="sum-neon">FREE</span>'}</span></div>
    <div class="sum-row total"><span>TOTAL</span><span>₹${total.toLocaleString()}</span></div>
    <p style="font-family:var(--font-mono);font-size:.62rem;color:var(--neon);margin-top:.3rem">YOU SAVE ₹${disc.toLocaleString()}</p>`;
}

function useCoupon() {
  const code = (document.getElementById('couponIn')?.value || '').trim().toUpperCase();
  const msg = document.getElementById('couponMsg');
  const valid = { DCPAC20: 20, SAVE10: 10, WELCOME15: 15, FLAT50: 50 };
  if (valid[code]) {
    couponAmt = valid[code];
    msg.textContent = `✓ CODE "${code}" APPLIED — ₹${couponAmt} OFF`;
    msg.className = 'coupon-msg coupon-ok';
    toast(`Code ${code} applied!`);
  } else {
    msg.textContent = '✗ INVALID CODE. TRY: DCPAC20, SAVE10';
    msg.className = 'coupon-msg coupon-err';
  }
}

function goCheckout() {
  if (!session) { toast('⚠ Sign in to checkout'); P('auth'); return; }
  if (!cart.length) { toast('Your cart is empty'); return; }
  P('payment');
}

/* ══════════════════════════════════════════════
   PAYMENT
══════════════════════════════════════════════ */
function renderPayment() {
  const im = document.getElementById('payItemsMount');
  const sm = document.getElementById('paySumMount');
  if (!im) return;
  let sub = 0, orig = 0;
  im.innerHTML = '';
  cart.forEach(ci => {
    const p = DB.find(x => x.id === ci.id);
    if (!p) return;
    sub += p.price * ci.qty; orig += p.mrp * ci.qty;
    const div = document.createElement('div');
    div.className = 'pay-item';
    div.innerHTML = `
      <img src="${p.img}" alt="${p.name}" onerror="this.style.display='none'">
      <div class="pay-item-info">
        <div class="pay-item-name">${p.name}</div>
        <div class="pay-item-qty">QTY: ${ci.qty}</div>
      </div>
      <div class="pay-item-price">₹${(p.price*ci.qty).toLocaleString()}</div>`;
    im.appendChild(div);
  });
  const del = sub >= 499 ? 0 : 49;
  const total = sub + del - couponAmt;
  if (sm) sm.innerHTML = `
    <div class="sum-row"><span>Subtotal</span><span>₹${sub.toLocaleString()}</span></div>
    <div class="sum-row"><span>Discount</span><span class="sum-neon">−₹${(orig-sub).toLocaleString()}</span></div>
    <div class="sum-row"><span>Delivery</span><span>${del ? '₹49' : 'FREE'}</span></div>
    <div class="sum-row total"><span>TOTAL</span><span>₹${total.toLocaleString()}</span></div>`;
}

function switchPM() {
  const m = document.querySelector('input[name="pm"]:checked')?.value;
  ['pmCard','pmUpi','pmNet','pmCod'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
  const map = { card:'pmCard', upi:'pmUpi', net:'pmNet', cod:'pmCod' };
  const show = document.getElementById(map[m]);
  if (show) show.style.display = 'block';
}

function fmtCard(input) {
  let v = input.value.replace(/\D/g,'').substring(0,16);
  v = v.replace(/(.{4})/g,'$1 ').trim();
  input.value = v;
  document.getElementById('cvNum').textContent = v || '•••• •••• •••• ••••';
}

function placeOrder() {
  if (!session) { toast('Sign in first'); P('auth'); return; }
  if (!cart.length) { toast('Cart is empty'); return; }
  const name = document.getElementById('pName')?.value.trim();
  const phone = document.getElementById('pPhone')?.value.trim();
  const addr = document.getElementById('pAddr')?.value.trim();
  const city = document.getElementById('pCity')?.value.trim();
  const pin = document.getElementById('pPin')?.value.trim();
  if (!name || !phone || !addr || !city || !pin) { toast('⚠ Fill all required address fields'); return; }
  if (pin.length < 6) { toast('⚠ Enter valid 6-digit pincode'); return; }
  const method = document.querySelector('input[name="pm"]:checked')?.value;
  if (method === 'card') {
    const num = document.getElementById('cardNum')?.value.replace(/\s/g,'');
    const cvv = document.getElementById('cardCvv')?.value;
    const exp = document.getElementById('cardExp')?.value;
    if (!num || num.length < 16 || !cvv || cvv.length < 3 || !exp || !exp.includes('/')) {
      toast('⚠ Enter valid card details'); return;
    }
  }
  lastOrdId = 'DCPAC-' + new Date().getFullYear() + '-' + String(Math.floor(Math.random()*900)+100).padStart(3,'0');
  const sub = cart.reduce((s,ci) => { const p=DB.find(x=>x.id===ci.id); return s+(p?p.price*ci.qty:0); }, 0);
  orders.push({
    id: lastOrdId,
    date: new Date().toISOString(),
    user: session.email,
    items: cart.map(ci => { const p=DB.find(x=>x.id===ci.id); return {id:ci.id,qty:ci.qty,name:p?.name,img:p?.img,price:p?.price}; }),
    total: sub, status:'In Transit',
    addr: `${addr}, ${city} – ${pin}`
  });
  localStorage.setItem('dcpac_orders', JSON.stringify(orders));
  cart = []; saveCart(); updateCartBadge();
  document.getElementById('sOrdId').textContent = lastOrdId;
  P('success');
}

function goTrackS() {
  document.getElementById('trackIn').value = lastOrdId;
  P('tracking'); setTimeout(trackOrder, 100);
}

/* ══════════════════════════════════════════════
   TRACKING
══════════════════════════════════════════════ */
function qTrack(id) { document.getElementById('trackIn').value = id; trackOrder(); }

function trackOrder() {
  const id = document.getElementById('trackIn')?.value.trim();
  const mount = document.getElementById('trackMount');
  if (!id || !mount) return;
  const steps = [
    { icon:'✅', label:'ORDER PLACED',    note:'Payment confirmed.',          date:'Today, 10:32 AM' },
    { icon:'📦', label:'PACKED',          note:'Dispatched to carrier.',       date:'Today, 2:15 PM' },
    { icon:'🚚', label:'IN TRANSIT',      note:'En route to your city.',       date:'Expected Tomorrow' },
    { icon:'🏍', label:'OUT FOR DELIVERY',note:'Delivery partner on the way.', date:'Expected Tomorrow 9AM' },
    { icon:'🏠', label:'DELIVERED',       note:'Delivered to your door.',      date:'Expected in 2–4 days' },
  ];
  const prog = Math.floor(Math.random() * 2) + 1;
  mount.innerHTML = `
    <div class="track-result-box">
      <div class="tr-head">
        <div><h3>ORDER #${id}</h3><p>${new Date().toLocaleDateString('en-IN',{day:'numeric',month:'long',year:'numeric'})}</p></div>
        <div class="tr-badge${prog >= 4 ? ' delivered' : ''}">${steps[prog].label}</div>
      </div>
      <div class="tl">
        ${steps.map((s,i) => `
          <div class="tl-row ${i<prog?'done':i===prog?'current':'pending'}">
            <div class="tl-ic">${s.icon}</div>
            <div class="tl-txt">
              <strong>${s.label}</strong>
              <span>${s.date}</span>
              <em>${s.note}</em>
            </div>
          </div>`).join('')}
      </div>
      <div class="dp-bar">
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80" alt="Delivery Partner" onerror="this.style.display='none'">
        <div>
          <strong>Arjun Kumar</strong>
          <span>DELIVERY PARTNER · 3.2 KM AWAY</span>
        </div>
        <button class="dp-call">📞 CALL</button>
      </div>
    </div>`;
}

/* ══════════════════════════════════════════════
   ORDERS
══════════════════════════════════════════════ */
function renderOrders() {
  const mount = document.getElementById('ordersMount');
  if (!mount) return;
  const mine = orders.filter(o => !session || o.user === session.email);
  if (!mine.length) {
    mount.innerHTML = `<div class="orders-empty"><div style="font-size:3rem;margin-bottom:1rem;opacity:.3">📋</div><h3 style="font-family:var(--font-hd);font-size:1.5rem;letter-spacing:.05em;color:#fff">NO ORDERS YET</h3><p style="color:var(--text3);margin:.5rem 0 1.5rem">Start shopping to see orders here</p><button class="btn-primary" onclick="C('')">SHOP NOW</button></div>`;
    return;
  }
  mount.innerHTML = '';
  [...mine].reverse().forEach(ord => {
    const div = document.createElement('div');
    div.className = 'order-card';
    div.innerHTML = `
      <div class="oc-hdr">
        <span class="oc-id">${ord.id}</span>
        <span class="oc-date">${new Date(ord.date).toLocaleDateString('en-IN')}</span>
        <span class="oc-status">${ord.status || 'In Transit'}</span>
        <span class="oc-total">₹${(ord.total||0).toLocaleString()}</span>
      </div>
      ${(ord.items||[]).map(it => `
        <div class="oc-item">
          <img src="${it.img||''}" alt="${it.name||''}" onerror="this.style.display='none'">
          <div><div class="oc-name">${it.name||'Product'}</div><div class="oc-meta">QTY: ${it.qty||1}</div></div>
          <div class="oc-price">₹${((it.price||0)*(it.qty||1)).toLocaleString()}</div>
        </div>`).join('')}
      <div class="oc-actions">
        <button class="oc-btn oc-track" onclick="document.getElementById('trackIn').value='${ord.id}';P('tracking');setTimeout(trackOrder,100)">TRACK</button>
        <button class="oc-btn oc-reorder" onclick="reorder('${ord.id}')">REORDER</button>
      </div>`;
    mount.appendChild(div);
  });
}

function reorder(ordId) {
  const ord = orders.find(o => o.id === ordId);
  if (!ord) return;
  ord.items.forEach(it => {
    const ex = cart.find(i => i.id === it.id);
    if (ex) ex.qty += it.qty; else cart.push({ id: it.id, qty: it.qty });
  });
  saveCart(); updateCartBadge();
  toast('Items added to cart!');
  P('cart');
}

/* ══════════════════════════════════════════════
   DEALS
══════════════════════════════════════════════ */
function renderDeals() {
  const grid = document.getElementById('dealsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  DB.filter(p => p.disc >= 20).sort((a,b) => b.disc - a.disc).forEach(p => grid.appendChild(makeCard(p)));
}

/* ══════════════════════════════════════════════
   AUTH
══════════════════════════════════════════════ */
function handleAcct() {
  if (session) {
    if (confirm(`Signed in as ${session.name}.\n\nClick OK to sign out.`)) {
      session = null;
      localStorage.removeItem('dcpac_sess');
      updateAcctUI();
      toast('Signed out successfully');
      P('home');
    }
  } else {
    P('auth');
  }
}

function toggleAuth() {
  isSignup = !isSignup;
  document.getElementById('authMode').textContent = isSignup ? 'CREATE ACCOUNT' : 'SIGN IN';
  document.getElementById('authSubmit').textContent = isSignup ? 'CREATE ACCOUNT' : 'SIGN IN';
  document.getElementById('authToggleLabel').textContent = isSignup ? 'Already have an account?' : 'New here?';
  document.getElementById('authToggleBtn').textContent = isSignup ? 'Sign in' : 'Create account';
  const nw = document.getElementById('nameFieldWrap');
  if (nw) nw.style.display = isSignup ? 'block' : 'none';
}

function submitAuth() {
  const email = (document.getElementById('authEmail')?.value||'').trim();
  const pass  = (document.getElementById('authPass')?.value||'').trim();
  if (!email || !pass) { toast('Enter email and password'); return; }
  if (pass.length < 6) { toast('Password min 6 characters'); return; }
  if (isSignup) {
    const name = (document.getElementById('regName')?.value||'').trim();
    if (!name) { toast('Enter your full name'); return; }
    if (users.find(u => u.email === email)) { toast('Email already registered'); toggleAuth(); return; }
    users.push({ name, email, pass });
    localStorage.setItem('dcpac_users', JSON.stringify(users));
    session = { name, email };
  } else {
    const u = users.find(u => u.email === email && u.pass === pass);
    if (!u) { toast('Invalid email or password'); return; }
    session = { name: u.name, email: u.email };
  }
  localStorage.setItem('dcpac_sess', JSON.stringify(session));
  updateAcctUI();
  toast(`WELCOME ${session.name.toUpperCase().split(' ')[0]}!`);
  P('home');
}

function updateAcctUI() {
  const lbl = document.getElementById('acctLabel');
  const mob = document.getElementById('mobAuthBtn');
  if (session) {
    if (lbl) lbl.textContent = session.name.split(' ')[0];
    if (mob) mob.textContent = `Sign Out (${session.name.split(' ')[0]})`;
  } else {
    if (lbl) lbl.textContent = 'Sign In';
    if (mob) mob.textContent = 'Sign In';
  }
}

/* ══════════════════════════════════════════════
   WISHLIST
══════════════════════════════════════════════ */
function wish(e, id) {
  e.stopPropagation();
  e.currentTarget.textContent = '♥';
  e.currentTarget.style.color = 'var(--neon)';
  const p = DB.find(x => x.id === id);
  toast(`♥ SAVED: ${(p?.name||'').substring(0,30)}`);
}

/* ══════════════════════════════════════════════
   QUICK VIEW MODAL
══════════════════════════════════════════════ */
function openQV(id) {
  const p = DB.find(x => x.id === id);
  const ov = document.getElementById('qvOverlay');
  const panel = document.getElementById('qvPanel');
  if (!p || !ov || !panel) return;
  panel.innerHTML = `
    <button class="qv-close-btn" onclick="document.getElementById('qvOverlay').classList.add('hidden')">✕</button>
    <div class="qv-inner">
      <div class="qv-img"><img src="${p.img}" alt="${p.name}" onerror="this.src='https://images.unsplash.com/photo-1560393464-5c69a73c5770?w=400&q=60'"></div>
      <div class="qv-body">
        <div class="di-cat">${p.cat}</div>
        <div class="di-name" style="font-size:1.3rem">${p.name}</div>
        <div class="di-price" style="font-size:1.6rem">₹${p.price.toLocaleString()}</div>
        <p class="di-desc" style="margin:.8rem 0 1rem">${p.desc.substring(0,120)}…</p>
        <div class="di-btns">
          <button class="di-btn-c" onclick="addCart(event,${p.id})">ADD TO CART</button>
          <button class="di-btn-b" onclick="openDetail(${p.id});closeQV()">VIEW DETAILS</button>
        </div>
      </div>
    </div>`;
  ov.classList.remove('hidden');
}

function closeQV(e) {
  if (!e || e.target === document.getElementById('qvOverlay'))
    document.getElementById('qvOverlay')?.classList.add('hidden');
}

/* ══════════════════════════════════════════════
   MOBILE NAV
══════════════════════════════════════════════ */
function toggleMob() {
  document.getElementById('mobDrawer')?.classList.toggle('open');
  document.getElementById('mobBackdrop')?.classList.toggle('open');
}
function closeMob() {
  document.getElementById('mobDrawer')?.classList.remove('open');
  document.getElementById('mobBackdrop')?.classList.remove('open');
}

/* ══════════════════════════════════════════════
   SCROLL HEADER
══════════════════════════════════════════════ */
window.addEventListener('scroll', () => {
  const hdr = document.getElementById('hdr');
  if (hdr) hdr.classList.toggle('scrolled', window.scrollY > 40);
});

/* ══════════════════════════════════════════════
   TOAST
══════════════════════════════════════════════ */
let _tt;
function toast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(_tt);
  _tt = setTimeout(() => t.classList.remove('show'), 3000);
}