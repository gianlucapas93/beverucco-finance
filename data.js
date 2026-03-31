// ============================================================
//  data.js — Report Patrimoniale Famigliare
//  ► Aggiorna SOLO questo file quando fai acquisti o
//    vuoi aggiornare i prezzi. Non toccare index.html.
//
//  STRUTTURA PORTAFOGLI:
//    SERIO       → Gianluca, Directa (ETF + Bond)
//    SPECULATIVO → Gianluca, Directa + BG Saxo (Azioni)
//    BENEDETTA   → Benedetta, Directa (ETF + Bond)
// ============================================================

const REPORT_DATE = "30 marzo 2026";

// ------------------------------------------------------------
//  TASSI DI CAMBIO  (aggiorna a piacere)
//  Fonte: mercato al momento dell'aggiornamento
// ------------------------------------------------------------
const FX = {
  EURUSD: 1.1484,   // 1 EUR = X USD
  EURGBP: 0.8697,   // 1 EUR = X GBP
};

// ------------------------------------------------------------
//  PORTAFOGLIO SERIO — Gianluca (Directa, regime amministrato)
//  Orizzonte 15-20 anni · PAC attivo ~1.000 €/mese su VWCE
// ------------------------------------------------------------
const SERIO = [
  // ── ETF ──────────────────────────────────────────────────
  {
    name: "🌍 Vanguard FTSE All-World",
    ticker: "VWCE", isin: "IE00B3RBWM25",
    note: "Borsa Italiana (IT) — acquisti PAC attivi",
    qty: 84, pmc: 145.0419, price: 141.84, // aggiornato
    currency: "EUR", logo: "vanguard.com", type: "etf"
  },
  {
    name: "🌍 Vanguard FTSE All-World",
    ticker: "VWCE", isin: "IE00B3RBWM25",
    note: "Xetra (DE) — quota storica, non si accresce",
    qty: 23, pmc: 98.3543, price: 141.84, // aggiornato
    currency: "EUR", logo: "vanguard.com", type: "etf"
  },
  {
    name: "🌐 Amundi Core MSCI World",
    ticker: "MWRD", isin: "LU1781541179",
    note: "Borsa Italiana",
    qty: 51, pmc: 120.1775, price: 136.52, // aggiornato (ultimo 20/3)
    currency: "EUR", logo: "amundi.com", type: "etf"
  },
  // ── OBBLIGAZIONI ─────────────────────────────────────────
  {
    name: "🇪🇺 EU NextGen Ukraine 4% Oct55",
    ticker: "EU55", isin: "EU000A3K4C43",
    qty: 5010, pmc: 99.1198, price: 98.23, // aggiornato (ultimo 26/3)
    currency: "EUR", flag: "🇪🇺", type: "bond",
    note: "Scad. Ott 2055"
  },
  {
    name: "🇷🇴 Romania 6,125% Oct37",
    ticker: "RO37", isin: "XS2344633961",
    qty: 3000, pmc: 99.8467, price: 60.81, // aggiornato
    currency: "EUR", flag: "🇷🇴", type: "bond",
    note: "Scad. Ott 2037"
  },
  {
    name: "🇮🇹 BTP TF 0,25% Marzo 2028",
    ticker: "BTP28", isin: "IT0005422891",
    qty: 3000, pmc: 95.7067, price: 88.60, // aggiornato (27/3)
    currency: "EUR", flag: "🇮🇹", type: "bond",
    note: "Scad. Mar 2028"
  },
  {
    name: "🇮🇹 BTP TF 1,35% Aprile 2030",
    ticker: "BTP30", isin: "IT0005398406",
    qty: 3000, pmc: 94.8667, price: 68.50, // aggiornato (27/3)
    currency: "EUR", flag: "🇮🇹", type: "bond",
    note: "Scad. Apr 2030"
  },
];

const LIQ_SERIO = 1255.28;

// ------------------------------------------------------------
//  PORTAFOGLIO SPECULATIVO — Gianluca
// ------------------------------------------------------------
const SPECULATIVO = [
  // ── ex-Fun (Directa) ───────────────
  {
    name: "🚀 Rocket Lab USA",
    ticker: "RKLB", isin: "US77281T3059",
    note: "NASDAQ · Space infrastructure",
    qty: 10, pmc: 43.4875, price: 57.38, // aggiornato
    currency: "USD", logo: "rocketlabusa.com", type: "stock"
  },
  {
    name: "🔎 Alphabet (Google) Class A",
    ticker: "GOOGL", isin: "US02079K3059",
    note: "NASDAQ · AI + Search + Cloud",
    qty: 2, pmc: 328.8164, price: 273.50, // aggiornato
    currency: "USD", logo: "abc.xyz", type: "stock"
  },
  {
    name: "✈️ Leonardo S.p.A.",
    ticker: "LDO", isin: "IT0003856405",
    note: "BIT · Difesa & Aerospazio",
    qty: 6, pmc: 46.2600, price: 55.66, // aggiornato
    currency: "EUR", logo: "leonardocompany.com", type: "stock"
  },
  {
    name: "🧬 Recursion Pharmaceuticals",
    ticker: "RXRX", isin: "US75629H1032",
    note: "NASDAQ · AI Drug Discovery",
    qty: 65, pmc: 4.6202, price: 2.84, // aggiornato
    currency: "USD", logo: "recursion.com", type: "stock"
  },
  {
    name: "💊 Viking Therapeutics",
    ticker: "VKTX", isin: "US9271871070",
    note: "NASDAQ · Obesity & Metabolic",
    qty: 8, pmc: 37.8765, price: 29.92, // aggiornato
    currency: "USD", logo: "vikingtherapeutics.com", type: "stock"
  },
  {
    name: "🎰 Lottomatica Group",
    ticker: "LTMC", isin: "IT0005530340",
    note: "BIT · Gaming & Betting Italia",
    qty: 7, pmc: 22.4543, price: 24.62, // aggiornato
    currency: "EUR", logo: "lottomatica.it", type: "stock"
  },
  // ── ex-Aggressivo (BG Saxo) ───────────
  {
    name: "🏦 KKR & Co.",
    ticker: "KKR", isin: "US48251W1045",
    note: "NYSE · Private Equity",
    qty: 4, pmc: 114.5900, price: 90.36, // aggiornato
    currency: "USD", logo: "kkr.com", type: "stock"
  },
  {
    name: "📊 Man Group Plc",
    ticker: "EMG", isin: "GB0008578196",
    note: "LSE · Hedge Fund (GBp)",
    qty: 100, pmc: 258.7800, price: 248.60, // aggiornato (27/3)
    currency: "GBp", logo: "man.com", type: "stock"
  },
  {
    name: "⚡ Virtu Financial",
    ticker: "VIRT", isin: "US9282981086",
    note: "NASDAQ · Market Making",
    qty: 7, pmc: 40.3000, price: 42.84, // aggiornato
    currency: "USD", logo: "virtu.com", type: "stock"
  },
];

const LIQ_SPECULATIVO = 9.83;

// ------------------------------------------------------------
//  PORTAFOGLIO BENEDETTA (Directa, regime amministrato)
// ------------------------------------------------------------
const BENEDETTA = [
  // ── ETF ─────────────────────────────
  {
    name: "🌍 Vanguard FTSE All-World",
    ticker: "VWCE", isin: "IE00B3RBWM25",
    note: "Borsa Italiana",
    qty: 92, pmc: 145.0153, price: 141.84, // aggiornato
    currency: "EUR", logo: "vanguard.com", type: "etf"
  },
  {
    name: "🌐 Amundi Core MSCI World",
    ticker: "MWRD", isin: "LU1781541179",
    note: "Borsa Italiana",
    qty: 17, pmc: 127.1259, price: 136.52, // aggiornato (ultimo 20/3)
    currency: "EUR", logo: "amundi.com", type: "etf"
  },
  {
    name: "⭐ iShares MSCI World Quality",
    ticker: "IWQU", isin: "IE00BP3QZ601",
    note: "Borsa Italiana · Quality Factor",
    qty: 37, pmc: 70.1595, price: 66.77, // aggiornato Borsa Italiana
    currency: "EUR", logo: "ishares.com", type: "etf"
  },
  {
    name: "🛡️ VanEck Defense",
    ticker: "DFEN", isin: "IE000YYE6WK7",
    note: "Xetra · Difesa europea",
    qty: 12, pmc: 52.2883, price: 84.75, // aggiornato (ultimo utile in USD)
    currency: "USD", logo: "vaneck.com", type: "etf"
  },
  // ── OBBLIGAZIONI ─────────────
  {
    name: "🇮🇹 BTP Italia Giugno 2030",
    ticker: "BTPIT30", isin: "IT0005482529",
    qty: 10000, pmc: 100.6876, price: 101.71, // confermato
    currency: "EUR", flag: "🇮🇹", type: "bond",
    note: "Indicizzato inflazione · Scad. Giu 2030"
  },
];

const LIQ_BENEDETTA = 1889.23;

// ... resto invariato ...