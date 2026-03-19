// ============================================================
//  data.js — Report Patrimoniale Famigliare
//  ► Aggiorna SOLO questo file quando fai acquisti o
//    vuoi aggiornare i prezzi. Non toccare index.html.
// ============================================================

const REPORT_DATE = "19 marzo 2026";

// ------------------------------------------------------------
//  TASSI DI CAMBIO  (aggiorna a piacere)
// ------------------------------------------------------------
const FX = {
  EURUSD: 1.0856,   // 1 EUR = X USD
  EURGBP: 0.8601,   // 1 EUR = X GBP
};

// ------------------------------------------------------------
//  PORTAFOGLIO SERIO — Gianluca (Directa, regime amministrato)
//
//  Campi obbligatori:
//    name     : nome visualizzato
//    ticker   : codice borsa
//    isin     : ISIN
//    qty      : numero di quote
//    pmc      : prezzo medio di carico (valuta nativa)
//    price    : prezzo attuale (valuta nativa)
//    currency : 'EUR' | 'USD' | 'GBp'
//    type     : 'etf' | 'stock' | 'bond'
//
//  Campi opzionali:
//    logo     : dominio clearbit (es. "vanguard.com")
//    flag     : emoji bandiera per obbligazioni sovrane
//    note     : testo piccolo sotto il nome
// ------------------------------------------------------------
const SERIO = [
  // ── ETF ──────────────────────────────────────────────────
  {
    name: "Vanguard FTSE All-World",
    ticker: "VWCE", isin: "IE00B3RBWM25",
    qty: 93, pmc: 133.31, price: 147.26,
    currency: "EUR", logo: "vanguard.com", type: "etf"
  },
  {
    name: "Amundi MSCI World",
    ticker: "MWRD", isin: "LU1781541179",
    qty: 51, pmc: 120.18, price: 141.01,
    currency: "EUR", logo: "amundi.com", type: "etf"
  },
  {
    name: "VanEck Uranium & Nuclear",
    ticker: "NUKL", isin: "IE000YYE6WK6",
    qty: 9, pmc: 47.29, price: 52.07,
    currency: "EUR", logo: "vaneck.com", type: "etf"
  },
  {
    name: "Global X Copper Miners",
    ticker: "COPX", isin: "IE0003Z9E2Y3",
    qty: 5, pmc: 43.57, price: 48.70,
    currency: "EUR", logo: "globalxetfs.com", type: "etf"
  },
  // ── OBBLIGAZIONI (prezzo in %, es. 98.08 = 98,08 su 100) ─
  {
    name: "EU 2055 4,00%",
    ticker: "EU55", isin: "EU000A3K4C43",
    qty: 5010, pmc: 99.11, price: 98.08,
    currency: "EUR", flag: "🇪🇺", type: "bond",
    note: "Scad. 2055"
  },
  {
    name: "Romania 6,125%",
    ticker: "RO37", isin: "XS2344633961",
    qty: 3000, pmc: 99.84, price: 101.49,
    currency: "EUR", flag: "🇷🇴", type: "bond",
    note: "Scad. 2037"
  },
  {
    name: "BTP Marzo 2028 0,25%",
    ticker: "BTP28", isin: "IT0005422891",
    qty: 3000, pmc: 95.70, price: 95.46,
    currency: "EUR", flag: "🇮🇹", type: "bond",
    note: "Scad. Mar 2028"
  },
  {
    name: "BTP Aprile 2030 1,35%",
    ticker: "BTP30", isin: "IT0005398406",
    qty: 3000, pmc: 94.86, price: 94.47,
    currency: "EUR", flag: "🇮🇹", type: "bond",
    note: "Scad. Apr 2030"
  },
];

// Liquidità sul conto broker Directa — Serio
const LIQ_SERIO = 1255.28;

// ------------------------------------------------------------
//  PORTAFOGLIO BENEDETTA (Directa, regime amministrato)
// ------------------------------------------------------------
const BENEDETTA = [
  // ── ETF ──────────────────────────────────────────────────
  {
    name: "Vanguard FTSE All-World",
    ticker: "VWCE", isin: "IE00B3RBWM25",
    qty: 88, pmc: 144.90, price: 147.26,
    currency: "EUR", logo: "vanguard.com", type: "etf"
  },
  {
    name: "Amundi MSCI World",
    ticker: "MWRD", isin: "LU1781541179",
    qty: 17, pmc: 127.12, price: 141.01,
    currency: "EUR", logo: "amundi.com", type: "etf"
  },
  {
    name: "iShares MSCI World Quality",
    ticker: "IS3Q", isin: "IE00BP3QZD73",
    qty: 28, pmc: 70.02, price: 68.41,
    currency: "EUR", logo: "ishares.com", type: "etf"
  },
  {
    name: "VanEck Defense",
    ticker: "DFEN", isin: "IE000YYE6WK7",
    qty: 12, pmc: 52.29, price: 62.89,
    currency: "EUR", logo: "vaneck.com", type: "etf"
  },
  // ── OBBLIGAZIONI ─────────────────────────────────────────
  {
    name: "BTP Italia Giugno 2030",
    ticker: "BTPIT30", isin: "IT0005482529",
    qty: 10000, pmc: 100.89, price: 102.33,
    currency: "EUR", flag: "🇮🇹", type: "bond",
    note: "Indicizzato inflazione · Scad. Giu 2030"
  },
];

// Liquidità sul conto broker Directa — Benedetta
const LIQ_BENEDETTA = 1115.23;

// ------------------------------------------------------------
//  PORTAFOGLIO SPECULATIVO — Gianluca
//  (Directa per azioni IT/EU · BG Saxo per US/UK)
// ------------------------------------------------------------
const SPECULATIVO = [
  {
    name: "Rocket Lab USA",
    ticker: "RKLB", isin: "US77281T3059",
    qty: 10, pmc: 43.48, price: 71.94,
    currency: "USD", logo: "rocketlabusa.com", type: "stock"
  },
  {
    name: "Alphabet (Google)",
    ticker: "GOOGL", isin: "US02079K3059",
    qty: 2, pmc: 328.81, price: 307.69,
    currency: "USD", logo: "abc.xyz", type: "stock"
  },
  {
    name: "Leonardo S.p.A.",
    ticker: "LDO", isin: "IT0003856405",
    qty: 6, pmc: 46.26, price: 64.14,
    currency: "EUR", logo: "leonardocompany.com", type: "stock"
  },
  {
    name: "Lottomatica Group",
    ticker: "LTMC", isin: "IT0005530340",
    qty: 7, pmc: 22.45, price: 24.90,
    currency: "EUR", logo: "lottomatica.it", type: "stock"
  },
  {
    name: "Viking Therapeutics",
    ticker: "VKTX", isin: "US9271871070",
    qty: 8, pmc: 37.87, price: 36.36,
    currency: "USD", logo: "vikingtherapeutics.com", type: "stock"
  },
  {
    name: "Recursion Pharmaceuticals",
    ticker: "RXRX", isin: "US75629H1032",
    qty: 65, pmc: 4.62, price: 3.39,
    currency: "USD", logo: "recursion.com", type: "stock"
  },
  {
    name: "KKR & Co.",
    ticker: "KKR", isin: "US48251W1045",
    qty: 4, pmc: 114.59, price: 90.63,
    currency: "USD", logo: "kkr.com", type: "stock"
  },
  {
    name: "Man Group Plc",
    ticker: "EMG", isin: "GB0008578196",
    qty: 100, pmc: 258.78, price: 257.80,
    currency: "GBp", logo: "man.com", type: "stock",
    note: "Prezzi in pence (GBp)"
  },
  {
    name: "Virtu Financial",
    ticker: "VIRT", isin: "US9282981086",
    qty: 7, pmc: 40.30, price: 41.05,
    currency: "USD", logo: "virtu.com", type: "stock"
  },
];

// Liquidità broker (Directa + BG Saxo) — Speculativo
const LIQ_SPECULATIVO = 10.00;

// ------------------------------------------------------------
//  PREVIDENZA
//  value = valore attuale del fondo (aggiorna periodicamente)
// ------------------------------------------------------------
const PREVIDENZA = [
  {
    name: "Fondo Arca Crescita",
    note: "Fondo Pensione",
    owner: "gianluca",
    logo: "arca.it",
    value: 31543.00
  },
  {
    name: "Fondo Pensione",
    note: "Stima arrotondata",
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
    name: "Conto BBVA 1,75%",
    note: "Deposito Bancario",
    owner: "gianluca",
    logo: "bbva.it",
    value: 12000.00
  },
  {
    name: "Conto BBVA 1,75%",
    note: "Deposito Bancario",
    owner: "benedetta",
    logo: "bbva.it",
    value: 15000.00
  },
];

// ------------------------------------------------------------
//  ASSET REALI
//  valore_stima = stima di mercato attuale
//  debito       = debito residuo (numero negativo o 0)
//  owner        : 'gianluca' | 'benedetta' | 'entrambi'
// ------------------------------------------------------------
const REAL_ASSETS = [
  {
    name: "Casa di Proprietà",
    note: "Mutuo fisso 2,93%",
    stato: "Mutuo attivo",
    stato_color: "muted",
    valore_acquisto: 260000.00,
    valore_stima: 260000.00,
    debito: -217000.00,
    owner: "entrambi",
    logo: null, flag: "🏠"
  },
  {
    name: "Peugeot 308 (2022)",
    note: "Autovettura · Stima mercato",
    stato: "Proprietà 100%",
    stato_color: "green",
    valore_acquisto: 30000.00,
    valore_stima: 21500.00,
    debito: 0,
    owner: "entrambi",
    logo: "peugeot.it", flag: null
  },
];
