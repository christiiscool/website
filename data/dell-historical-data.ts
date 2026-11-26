/**
 * Historical 2025 student investment research snapshot.
 * Extracted from: Christi _DELL MoDELL (the real one).xlsx (Valuation, Drivers,
 * 3FS, Football Field); reconciled to Christi_the real DELL slides.pdf pp. 1, 20.
 * USD millions unless the field explicitly says per share or multiple.
 * The source workbook and pitch deck are NOT published with the site.
 * Values here are historical model estimates, not actual forward financials.
 */
export const dellModel = {
  "asOf": "2025-03-04",
  "sourceYear": 2025,
  "referencePrice": 95.56,
  "targetPrice": 115.56131567718839,
  "upside": 0.20930635911666373,
  "methods": [
    {
      "id": "tgr",
      "label": "DCF · Gordon growth",
      "price": 117.54003628125582,
      "weight": 0.333333333333333,
      "source": "Valuation!C68"
    },
    {
      "id": "emm",
      "label": "DCF · exit multiple",
      "price": 132.12201336165253,
      "weight": 0.333333333333333,
      "source": "Valuation!F68"
    },
    {
      "id": "rv",
      "label": "Peer median EV/EBITDA",
      "price": 97.02189738865718,
      "weight": 0.333333333333333,
      "source": "Valuation!D103"
    }
  ],
  "rows": [
    {
      "year": 2021,
      "kind": "actual",
      "isg": 33002.0,
      "csg": 48387.0,
      "other": 5281.0,
      "revenue": 86670.0,
      "ebit": 3685.0,
      "pcUnits": 50.493954,
      "pcAsp": 958.273142958858
    },
    {
      "year": 2022,
      "kind": "actual",
      "isg": 34366.0,
      "csg": 61464.0,
      "other": 5367.0,
      "revenue": 101197.0,
      "ebit": 4659.0,
      "pcUnits": 59.560210999999995,
      "pcAsp": 1031.9641077161396
    },
    {
      "year": 2023,
      "kind": "actual",
      "isg": 38356.0,
      "csg": 58213.0,
      "other": 5732.0,
      "revenue": 102301.0,
      "ebit": 5771.0,
      "pcUnits": 50.013438,
      "pcAsp": 1163.9471775565598
    },
    {
      "year": 2024,
      "kind": "actual",
      "isg": 33885.0,
      "csg": 48916.0,
      "other": 5624.0,
      "revenue": 88425.0,
      "ebit": 5211.0,
      "pcUnits": 40.230474,
      "pcAsp": 1215.8942000037086
    },
    {
      "year": 2025,
      "kind": "actual",
      "isg": 43593.0,
      "csg": 48433.0,
      "other": 3541.0,
      "revenue": 95567.0,
      "ebit": 6237.0,
      "pcUnits": 39.377179,
      "pcAsp": 1229.9763779421578
    },
    {
      "year": 2026,
      "kind": "forecast",
      "isg": 56856.9755,
      "csg": 52088.86761653563,
      "other": 0.0,
      "revenue": 108945.84311653563,
      "ebit": 11566.690116257583,
      "pcUnits": 41.51312598,
      "pcAsp": 1254.575905501001
    },
    {
      "year": 2027,
      "kind": "forecast",
      "isg": 56856.9755,
      "csg": 54601.164534037205,
      "other": 0.0,
      "revenue": 111458.1400340372,
      "ebit": 11380.498886361387,
      "pcUnits": 42.24818727,
      "pcAsp": 1292.2131826660311
    },
    {
      "year": 2028,
      "kind": "forecast",
      "isg": 56856.9755,
      "csg": 54602.30400736323,
      "other": 0.0,
      "revenue": 111459.27950736323,
      "ebit": 10658.640632283237,
      "pcUnits": 41.018513659999996,
      "pcAsp": 1330.979578146012
    },
    {
      "year": 2029,
      "kind": "forecast",
      "isg": 61844.4755,
      "csg": 56508.016377659806,
      "other": 0.0,
      "revenue": 118352.4918776598,
      "ebit": 12810.914607773513,
      "pcUnits": 41.21390829,
      "pcAsp": 1370.9089654903923
    },
    {
      "year": 2030,
      "kind": "forecast",
      "isg": 61844.4755,
      "csg": 58960.0127885006,
      "other": 0.0,
      "revenue": 120804.48828850061,
      "ebit": 12659.97329951372,
      "pcUnits": 41.75,
      "pcAsp": 1412.0362344551042
    }
  ],
  "wacc": 0.11050330093818525,
  "tgr": 0.02,
  "exitMultiple": 7.0326065350056375,
  "terminalEbitda": 14044.460395287599,
  "terminalFcff": 7391.184305957926,
  "forecastEbitda2026": 12170.90718292425,
  "fcff": [
    {
      "year": 2026,
      "value": 2476.5265753348976,
      "yearFraction": 0.0
    },
    {
      "year": 2027,
      "value": 5999.812716743413,
      "yearFraction": 1.0
    },
    {
      "year": 2028,
      "value": 6519.279805800386,
      "yearFraction": 2.0
    },
    {
      "year": 2029,
      "value": 6083.98120742281,
      "yearFraction": 2.9972222222222222
    },
    {
      "year": 2030,
      "value": 7391.184305957926,
      "yearFraction": 3.9972222222222222
    }
  ],
  "sensitivity": [
    {
      "method": "tgr",
      "wacc": 0.0905033,
      "driver": 0.01,
      "price": 134.3201,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.0905033,
      "driver": 0.015,
      "price": 141.0414,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.0905033,
      "driver": 0.02,
      "price": 148.7161,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.0905033,
      "driver": 0.025,
      "price": 157.5624,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.0905033,
      "driver": 0.03,
      "price": 167.8709,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1005033,
      "driver": 0.01,
      "price": 120.2734,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1005033,
      "driver": 0.015,
      "price": 125.4104,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1005033,
      "driver": 0.02,
      "price": 131.1855,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1005033,
      "driver": 0.025,
      "price": 137.7254,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1005033,
      "driver": 0.03,
      "price": 145.193,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1105033,
      "driver": 0.01,
      "price": 109.0333,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1105033,
      "driver": 0.015,
      "price": 113.064,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1105033,
      "driver": 0.02,
      "price": 117.54,
      "base": true
    },
    {
      "method": "tgr",
      "wacc": 0.1105033,
      "driver": 0.025,
      "price": 122.5396,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1105033,
      "driver": 0.03,
      "price": 128.1602,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1205033,
      "driver": 0.01,
      "price": 99.8372,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1205033,
      "driver": 0.015,
      "price": 103.0677,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1205033,
      "driver": 0.02,
      "price": 106.6196,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1205033,
      "driver": 0.025,
      "price": 110.5434,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1205033,
      "driver": 0.03,
      "price": 114.9008,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1305033,
      "driver": 0.01,
      "price": 92.1759,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1305033,
      "driver": 0.015,
      "price": 94.8107,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1305033,
      "driver": 0.02,
      "price": 97.684,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1305033,
      "driver": 0.025,
      "price": 100.8296,
      "base": false
    },
    {
      "method": "tgr",
      "wacc": 0.1305033,
      "driver": 0.03,
      "price": 104.2882,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.0905033,
      "driver": 5.032613,
      "price": 111.9672,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.0905033,
      "driver": 6.032613,
      "price": 126.2046,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.0905033,
      "driver": 7.0326065,
      "price": 140.4419,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.0905033,
      "driver": 8.032613,
      "price": 154.6793,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.0905033,
      "driver": 9.032613,
      "price": 168.9167,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1005033,
      "driver": 5.032613,
      "price": 108.7361,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1005033,
      "driver": 6.032613,
      "price": 122.4634,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1005033,
      "driver": 7.0326065,
      "price": 136.1905,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1005033,
      "driver": 8.032613,
      "price": 149.9179,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1005033,
      "driver": 9.032613,
      "price": 163.6451,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1105033,
      "driver": 5.032613,
      "price": 105.6426,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1105033,
      "driver": 6.032613,
      "price": 118.8823,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1105033,
      "driver": 7.0326065,
      "price": 132.122,
      "base": true
    },
    {
      "method": "emm",
      "wacc": 0.1105033,
      "driver": 8.032613,
      "price": 145.3619,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1105033,
      "driver": 9.032613,
      "price": 158.6016,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1205033,
      "driver": 5.032613,
      "price": 102.6794,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1205033,
      "driver": 6.032613,
      "price": 115.4531,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1205033,
      "driver": 7.0326065,
      "price": 128.2268,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1205033,
      "driver": 8.032613,
      "price": 141.0006,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1205033,
      "driver": 9.032613,
      "price": 153.7743,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1305033,
      "driver": 5.032613,
      "price": 99.8399,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1305033,
      "driver": 6.032613,
      "price": 112.1679,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1305033,
      "driver": 7.0326065,
      "price": 124.4959,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1305033,
      "driver": 8.032613,
      "price": 136.824,
      "base": false
    },
    {
      "method": "emm",
      "wacc": 0.1305033,
      "driver": 9.032613,
      "price": 149.152,
      "base": false
    }
  ],
  "sourceNotes": {
    "referencePrice": "Valuation!C34 / Football Field!J17",
    "target": "Football Field!K17 (equal weighting in J11:J13)",
    "fySplit": "Drivers!D14:M21",
    "forecastIsg": "Drivers!D25:M181",
    "forecastCsg": "Drivers!D188:M251",
    "fcf": "Valuation!C42:G70",
    "originalSensitivities": "Valuation!D77:H81 and D86:H90 contain stale/constant cached values; recomputed with Valuation!C42:G70 underlying data",
    "notAudited": "The 2025 historical model is an archived research exercise, not a current estimate."
  }
} as const;
