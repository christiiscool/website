# The Real Dell — research provenance

This site page is a public-facing retrospective of Christi's 2025 Dell (NYSE: DELL) student equity pitch. It is **not** a current recommendation and does not publish the private research workbook or the original slide deck.

## Authoritative source materials (kept private)

- `Christi_the real DELL slides.pdf`, 22 slides. Original three investment theses: slide 11–14 "The Direct Model: The Dell Model", slides 15–16 "The Tariffic Test, Dell Wins", slides 17–19 "Refreshing Revenue Recovery"; street/variant framing on slide 10; valuation on slide 20; risk map on slide 21.
- `Christi _DELL MoDELL (the real one).xlsx`. Driver and valuation cells listed below. The workbook is a **historical modelling artefact**; no forecast is current.

## Reconciled valuation

- Model valuation date: `Valuation!C33` = 2025-03-04. `Cover Page!E16` is `=TODAY()` and should not determine the original pitch date.
- Historical reference price: `Valuation!C34`, `Football Field!J17` = $95.56 (rounded to $95.60 on slides).
- DCF terminal growth: `Valuation!C68` = $117.54; DCF exit multiple: `Valuation!F68` = $132.12.
- Median peer-method price: `Valuation!D103` = $97.02.
- Equal model weights: `Football Field!J11:J13` = one-third each. `Football Field!K17` = $115.5613 ($115.56; rounded to $115.60 on slides); upside `L17` = +20.93%.
- Model WACC: `Valuation!C30` = 11.0503%; terminal growth = 2.0%; exit EBITDA multiple = 7.0326x.
- All price targets refer to the original March 2025 research, not the present share price.

## Figures reproduced as original analysis

- Annual segment revenue and mix: `Drivers!D14:M21`, FY2021–FY2025 model historical and FY2026–FY2030 model projected.
- Regional PC unit forecasts, market shares and PC ASP: `Drivers!D188:M251`. Actual/forecast qualifiers are printed on the site.
- Free cash flow and valuation assumptions: `Valuation!C42:G70` and `Football Field!D9:L20`.
- Sensitivity grid is **recomputed** from original `Valuation` FCFF, year fractions, terminal value and price bridge. It is not copied from `Valuation!D77:H81` or `D86:H90`, whose cached cells were constant and did not correctly update with sensitivity axes.

## Known historical-model QA limitations / do not silently "fix" in site code

1. `Cover Page!E16` has a volatile `TODAY()` formula with a later cached date; original `Valuation!C33` records March 4, 2025.
2. The baseline DCF bridge uses an end-forecast projected cash balance (`Valuation!C65`, sourced to `3FS!M27`) alongside a debt figure (`Valuation!C64`) from a different basis; the net debt/cash bridge deserves reconciliation before using this target as an actionable independent valuation.
3. `Valuation!C25` is labelled an *after-tax* cost of debt but the underlying `SUM(C22:C24)` expression does not visibly apply a tax shield. The WACC is reproduced, not independently corrected.
4. Historical `Drivers!H19` has $3,541m of "Other" revenue in FY2025A, while forecasts `Drivers!I19:M19` set it to zero; this affects any naive growth comparison across the FY2025/FY2026 boundary.
5. The slide chart on page 18 visually shows ~75% Dell commercial PC mix, while its narrative text says >80%. The public site avoids turning that un-reconciled assertion into a new statistic.
6. Several claims in the original 2025 slides are forward-looking claims based on then-current third-party material. The site presents them as the author's *2025 thesis and scenarios*, not as ex post outcomes.

No raw model contracts, full workbook, or original deck is placed in the public site repository.
