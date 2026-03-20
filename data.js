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

const REPORT_DATE = "20 marzo 2026";

// ------------------------------------------------------------
//  TASSI DI CAMBIO  (aggiorna a piacere)
//  Fonte: mercato al momento dell'aggiornamento
// ------------------------------------------------------------
const FX = {
  EURUSD: 1.0856,   // 1 EUR = X USD
  EURGBP: 0.8601,   // 1 EUR = X GBP
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
    qty: 82, pmc: 145.0839, price: 147.26,
    currency: "EUR", logo: "vanguard.com", type: "etf"
  },
  {
    name: "🌍 Vanguard FTSE All-World",
    ticker: "VWCE", isin: "IE00B3RBWM25",
    note: "Xetra (DE) — quota storica, non si accresce",
    qty: 23, pmc: 98.3543, price: 147.26,
    currency: "EUR", logo: "vanguard.com", type: "etf"
  },
  {
    name: "🌐 Amundi Core MSCI World",
    ticker: "MWRD", isin: "LU1781541179",
    note: "Borsa Italiana",
    qty: 51, pmc: 120.1775, price: 141.01,
    currency: "EUR", logo: "amundi.com", type: "etf"
  },

  // ── OBBLIGAZIONI (prezzo in %, es. 99.11 = 99,11 su 100) ─

  {
    name: "🇪🇺 EU NextGen Ukraine 4% Oct55",
    ticker: "EU55", isin: "EU000A3K4C43",
    qty: 5010, pmc: 99.1198, price: 98.08,
    currency: "EUR", flag: "🇪🇺", type: "bond",
    note: "Scad. Ott 2055"
  },
  {
    name: "🇷🇴 Romania 6,125% Oct37",
    ticker: "RO37", isin: "XS2344633961",
    qty: 3000, pmc: 99.8467, price: 101.49,
    currency: "EUR", flag: "🇷🇴", type: "bond",
    note: "Scad. Ott 2037"
  },
  {
    name: "🇮🇹 BTP TF 0,25% Marzo 2028",
    ticker: "BTP28", isin: "IT0005422891",
    qty: 3000, pmc: 95.7067, price: 95.46,
    currency: "EUR", flag: "🇮🇹", type: "bond",
    note: "Scad. Mar 2028"
  },
  {
    name: "🇮🇹 BTP TF 1,35% Aprile 2030",
    ticker: "BTP30", isin: "IT0005398406",
    qty: 3000, pmc: 94.8667, price: 94.47,
    currency: "EUR", flag: "🇮🇹", type: "bond",
    note: "Scad. Apr 2030"
  },
];

// Liquidità broker Directa — Serio
const LIQ_SERIO = 1255.28;

// ------------------------------------------------------------
//  PORTAFOGLIO SPECULATIVO — Gianluca
//  Directa (ex-Fun) + BG Saxo (ex-Aggressivo)
//  Satellite / high conviction / posizioni tattiche
// ------------------------------------------------------------
const SPECULATIVO = [

  // ── ex-Fun (Directa) ─────────────────────────────────────

  {
    name: "🚀 Rocket Lab USA",
    ticker: "RKLB", isin: "US77281T3059",
    note: "NASDAQ · Space infrastructure",
    qty: 10, pmc: 43.4875, price: 71.94,
    currency: "USD", logo: "rocketlabusa.com", type: "stock"
  },
  {
    name: "🔎 Alphabet (Google) Class A",
    ticker: "GOOGL", isin: "US02079K3059",
    note: "NASDAQ · AI + Search + Cloud",
    qty: 2, pmc: 328.8164, price: 307.69,
    currency: "USD", logo: "abc.xyz", type: "stock"
  },
  {
    name: "✈️ Leonardo S.p.A.",
    ticker: "LDO", isin: "IT0003856405",
    note: "BIT · Difesa & Aerospazio",
    qty: 6, pmc: 46.2600, price: 64.14,
    currency: "EUR", logo: "leonardocompany.com", type: "stock"
  },
  {
    name: "🧬 Recursion Pharmaceuticals",
    ticker: "RXRX", isin: "US75629H1032",
    note: "NASDAQ · AI Drug Discovery",
    qty: 65, pmc: 4.6202, price: 3.39,
    currency: "USD", logo: "recursion.com", type: "stock"
  },
  {
    name: "💊 Viking Therapeutics",
    ticker: "VKTX", isin: "US9271871070",
    note: "NASDAQ · Obesity & Metabolic",
    qty: 8, pmc: 37.8765, price: 36.36,
    currency: "USD", logo: "vikingtherapeutics.com", type: "stock"
  },
  {
    name: "🎰 Lottomatica Group",
    ticker: "LTMC", isin: "IT0005530340",
    note: "BIT · Gaming & Betting Italia",
    qty: 7, pmc: 22.4543, price: 24.90,
    currency: "EUR", logo: "lottomatica.it", type: "stock"
  },

  // ── ex-Aggressivo (BG Saxo) ──────────────────────────────

  {
    name: "🏦 KKR & Co.",
    ticker: "KKR", isin: "US48251W1045",
    note: "NYSE · Private Equity",
    qty: 4, pmc: 114.5900, price: 90.63,
    currency: "USD", logo: "kkr.com", type: "stock"
  },
  {
    name: "📊 Man Group Plc",
    ticker: "EMG", isin: "GB0008578196",
    note: "LSE · Hedge Fund (GBp)",
    qty: 100, pmc: 258.7800, price: 257.80,
    currency: "GBp", logo: "man.com", type: "stock"
  },
  {
    name: "⚡ Virtu Financial",
    ticker: "VIRT", isin: "US9282981086",
    note: "NASDAQ · Market Making",
    qty: 7, pmc: 40.3000, price: 41.05,
    currency: "USD", logo: "virtu.com", type: "stock"
  },
];

// Liquidità broker (Directa + BG Saxo) — Speculativo
const LIQ_SPECULATIVO = 9.83;

// ------------------------------------------------------------
//  PORTAFOGLIO BENEDETTA (Directa, regime amministrato)
//  PAC attivo ~800-1.000 €/mese (80% VWCE / 20% IWQU)
// ------------------------------------------------------------
const BENEDETTA = [

  // ── ETF ──────────────────────────────────────────────────

  {
    name: "🌍 Vanguard FTSE All-World",
    ticker: "VWCE", isin: "IE00B3RBWM25",
    note: "Borsa Italiana",
    qty: 92, pmc: 145.0153, price: 147.26,
    currency: "EUR", logo: "vanguard.com", type: "etf"
  },
  {
    name: "🌐 Amundi Core MSCI World",
    ticker: "MWRD", isin: "LU1781541179",
    note: "Borsa Italiana",
    qty: 17, pmc: 127.1259, price: 141.01,
    currency: "EUR", logo: "amundi.com", type: "etf"
  },
  {
    name: "⭐ iShares MSCI World Quality",
    ticker: "IWQU", isin: "IE00BP3QZD73",
    note: "Borsa Italiana · Quality Factor",
    qty: 37, pmc: 70.1595, price: 68.41,
    currency: "EUR", logo: "ishares.com", type: "etf"
  },
  {
    name: "🛡️ VanEck Defense",
    ticker: "DFEN", isin: "IE000YYE6WK7",
    note: "Xetra · Difesa europea",
    qty: 12, pmc: 52.2883, price: 62.89,
    currency: "EUR", logo: "vaneck.com", type: "etf"
  },

  // ── OBBLIGAZIONI ─────────────────────────────────────────

  {
    name: "🇮🇹 BTP Italia Giugno 2030",
    ticker: "BTPIT30", isin: "IT0005482529",
    qty: 10000, pmc: 100.6876, price: 102.33,
    currency: "EUR", flag: "🇮🇹", type: "bond",
    note: "Indicizzato inflazione · Scad. Giu 2030"
  },
];

// Liquidità broker Directa — Benedetta
const LIQ_BENEDETTA = 1889.23;

// ------------------------------------------------------------
//  PARTECIPAZIONI PRIVATE — Benedetta
//  Non incluse nel patrimonio finanziario liquido.
// ------------------------------------------------------------
const PRIVATE_EQUITY = [
  {
    name: "🥄 Bending Spoons S.p.A.",
    note: "Pre-IPO · Stima valore lordo",
    owner: "benedetta",
    logo: "bendingspoons.com",
    costo_carico: 3000.00,
    valore_stimato: 45000.00,
    includi_in_totale: false   // ← cambia in true per includerlo nel patrimonio netto
  },
];

// ------------------------------------------------------------
//  PREVIDENZA
//  value = saldo totale attuale (controvalore netto)
// ------------------------------------------------------------
const PREVIDENZA = [
  {
    name: "📈 Fondo Arca Alta Crescita",
    note: "Fondo Pensione · +575 €/mese",
    owner: "gianluca",
    logo: "arca.it",
    value: 32942.00
  },
  {
    name: "📈 Fondo Pensione",
    note: "Stima · +130 €/mese",
    owner: "benedetta",
    logo: null,
    value: 20000.00
  },
];

// ------------------------------------------------------------
//  LIQUIDITÀ BANCARIA
//  value = saldo attuale del conto
// ------------------------------------------------------------
const CONTI = [
  {
    name: "🏦 Conto BBVA",
    note: "Remunerazione 1,75%",
    owner: "gianluca",
    logo: "bbva.it",
    value: 12000.00
  },
  {
    name: "🏦 Conto BBVA",
    note: "3,25% → 1,75% da Apr 2026",
    owner: "benedetta",
    logo: "bbva.it",
    value: 18000.00
  },
];

// ------------------------------------------------------------
//  ASSET REALI
//  valore_stima = stima di mercato attuale
//  debito       = debito residuo (numero negativo, o 0)
//  owner        : 'gianluca' | 'benedetta' | 'entrambi'
// ------------------------------------------------------------
const REAL_ASSETS = [
  {
    name: "🏠 Casa di Proprietà",
    note: "Mutuo fisso 2,93% · 30 anni · 90% LTV",
    stato: "Mutuo attivo",
    stato_color: "muted",
    valore_acquisto: 260000.00,
    valore_stima: 260000.00,
    debito: -217000.00,
    owner: "entrambi",
    logo: null, flag: "🏠"
  },
  {
    name: "🚗 Peugeot 308 (2022)",
    note: "~65.000 km · Leasing riscattato",
    stato: "Proprietà 100%",
    stato_color: "green",
    valore_acquisto: 30000.00,
    valore_stima: 18000.00,
    debito: 0,
    owner: "entrambi",
    logo: "peugeot.it", flag: null
  },
];
