"use client";

import { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

type MetricDatum = {
  label: string;
  value: number;
  display: string;
};

const modelData = [
  {
    model: "ElasticNet",
    return: 8.55,
    sharpe: 0.488,
    drawdown: -20.1,
    note: "Primary model with variable selection and the best directional factor timing.",
  },
  {
    model: "Ridge",
    return: 6.22,
    sharpe: 0.357,
    drawdown: -25.29,
    note: "Viable linear baseline, but weaker drawdown control and noisier predictions.",
  },
  {
    model: "XGBoost",
    return: -5.51,
    sharpe: -0.322,
    drawdown: -43.58,
    note: "Overfit the short regime-feature dataset and produced unstable allocations.",
  },
];

const hedgeData = [
  { scenario: "Unhedged", sharpe: 0.488, drawdown: -20.1 },
  { scenario: "Fixed 0.50%", sharpe: 0.52, drawdown: -17.89 },
  { scenario: "Score-scaled", sharpe: 0.539, drawdown: -17.89 },
  { scenario: "1.50% budget", sharpe: 0.575, drawdown: -17.89 },
];

const eventData = [
  { month: "Feb 2020", putReturn: 568.8, portfolioLift: 2.76 },
  { month: "Mar 2022", putReturn: 333.9, portfolioLift: 1.65 },
  { month: "False positive 1", putReturn: -85.9, portfolioLift: -0.5 },
  { month: "False positive 2", putReturn: -99.8, portfolioLift: -0.5 },
  { month: "False positive 3", putReturn: -99.9, portfolioLift: -0.5 },
];

const allocationData = [
  { factor: "Momentum", preCovid: 0.28, covid: 0.65, lateCycle: 0.42 },
  { factor: "Reversal", preCovid: -0.12, covid: -0.25, lateCycle: -0.08 },
  { factor: "Low vol", preCovid: 0.47, covid: 0.18, lateCycle: -0.2 },
  { factor: "Behavioural", preCovid: 0.18, covid: 0.31, lateCycle: 0.24 },
];

const wealthData = [
  { label: "Jan 2018", unhedged: 100, overlay: 100, note: "Backtest starts" },
  { label: "Dec 2018", unhedged: 106, overlay: 106, note: "Early factor timing gains" },
  { label: "Dec 2019", unhedged: 115, overlay: 115, note: "Pre-COVID accumulation" },
  { label: "Feb 2020", unhedged: 116, overlay: 119, note: "Put hedge helped during stress" },
  { label: "Dec 2020", unhedged: 112, overlay: 116, note: "Drawdown recovery begins" },
  { label: "Dec 2021", unhedged: 126, overlay: 130, note: "Momentum leadership returns" },
  { label: "Mar 2022", unhedged: 120, overlay: 124, note: "Overlay softened losses" },
  { label: "Dec 2022", unhedged: 111, overlay: 115, note: "Largest drawdown window" },
  { label: "Dec 2023", unhedged: 131, overlay: 136, note: "Recovery and factor rotation" },
  { label: "Dec 2024", unhedged: 151, overlay: 158, note: "AI-led momentum period" },
  { label: "Mar 2026", unhedged: 165, overlay: 172, note: "Ending wealth index" },
];

function BarGroup({ data, tone = "green" }: { data: MetricDatum[]; tone?: "green" | "dark" }) {
  const [active, setActive] = useState<string | null>(null);
  const max = Math.max(...data.map((item) => Math.abs(item.value)), 1);

  return (
    <div className="space-y-4">
      {data.map((item) => {
        const width = `${Math.max((Math.abs(item.value) / max) * 100, 4)}%`;
        const selected = active === item.label;

        return (
          <button
            key={item.label}
            type="button"
            onMouseEnter={() => setActive(item.label)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(item.label)}
            onBlur={() => setActive(null)}
            className="grid w-full gap-2 text-left"
          >
            <div className="flex items-center justify-between gap-4 text-sm">
              <span className="font-semibold text-[#111713]">{item.label}</span>
              <span className="font-mono text-[#445046]">{item.display}</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-[#183b2b]/10">
              <div
                className={cn(
                  "h-full rounded-full transition-all duration-300",
                  tone === "green" ? "bg-[#c8ff5a]" : "bg-[#183b2b]",
                  selected && "brightness-95",
                )}
                style={{ width }}
              />
            </div>
          </button>
        );
      })}
    </div>
  );
}

function WealthGrowthChart() {
  const [activeIndex, setActiveIndex] = useState(wealthData.length - 1);
  const chartWidth = 720;
  const chartHeight = 300;
  const padding = 34;
  const values = wealthData.flatMap((item) => [item.unhedged, item.overlay]);
  const min = Math.min(...values) * 0.96;
  const max = Math.max(...values) * 1.04;
  const active = wealthData[activeIndex];

  const pointFor = (value: number, index: number) => {
    const x =
      padding + (index / (wealthData.length - 1)) * (chartWidth - padding * 2);
    const y =
      chartHeight -
      padding -
      ((value - min) / (max - min)) * (chartHeight - padding * 2);

    return { x, y };
  };

  const pathFor = (key: "unhedged" | "overlay") =>
    wealthData
      .map((item, index) => {
        const point = pointFor(item[key], index);
        return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
      })
      .join(" ");

  const activeUnhedged = pointFor(active.unhedged, activeIndex);
  const activeOverlay = pointFor(active.overlay, activeIndex);

  return (
    <div className="grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
      <div className="rounded-[26px] bg-[#edf3dc] p-4">
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-semibold text-[#111713]">Wealth index over time</h3>
            <p className="mt-1 text-sm text-[#667064]">
              Illustrative reconstruction from report milestones, indexed to 100.
            </p>
          </div>
          <div className="flex gap-3 text-xs font-semibold text-[#445046]">
            <span className="inline-flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#183b2b]" />
              Overlay
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="size-2 rounded-full bg-[#94a38c]" />
              Unhedged
            </span>
          </div>
        </div>
        <svg
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
          role="img"
          aria-label="Interactive wealth index chart"
          className="h-auto w-full overflow-visible"
        >
          {[100, 120, 140, 160].map((tick) => {
            const y = pointFor(tick, 0).y;
            return (
              <g key={tick}>
                <line
                  x1={padding}
                  x2={chartWidth - padding}
                  y1={y}
                  y2={y}
                  stroke="#183b2b"
                  strokeOpacity="0.10"
                />
                <text x={0} y={y + 4} fill="#667064" fontSize="12">
                  {tick}
                </text>
              </g>
            );
          })}
          <path d={pathFor("unhedged")} fill="none" stroke="#94a38c" strokeWidth="4" />
          <path d={pathFor("overlay")} fill="none" stroke="#183b2b" strokeWidth="4.5" />
          <line
            x1={activeOverlay.x}
            x2={activeOverlay.x}
            y1={padding}
            y2={chartHeight - padding}
            stroke="#183b2b"
            strokeDasharray="4 6"
            strokeOpacity="0.35"
          />
          {wealthData.map((item, index) => {
            const overlayPoint = pointFor(item.overlay, index);
            const unhedgedPoint = pointFor(item.unhedged, index);
            return (
              <g
                key={item.label}
                role="button"
                tabIndex={0}
                aria-label={`Show ${item.label}`}
                className="cursor-pointer outline-none"
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    setActiveIndex(index);
                  }
                }}
              >
                <circle
                  cx={overlayPoint.x}
                  cy={overlayPoint.y}
                  r={activeIndex === index ? 8 : 5}
                  fill="#c8ff5a"
                  stroke="#183b2b"
                  strokeWidth="3"
                />
                <circle cx={unhedgedPoint.x} cy={unhedgedPoint.y} r="4" fill="#94a38c" />
              </g>
            );
          })}
          <circle cx={activeOverlay.x} cy={activeOverlay.y} r="9" fill="#c8ff5a" stroke="#183b2b" strokeWidth="3" />
          <circle cx={activeUnhedged.x} cy={activeUnhedged.y} r="6" fill="#94a38c" />
        </svg>
      </div>

      <div className="rounded-[26px] bg-[#183b2b] p-5 text-[#f7f3e8]">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#c8ff5a]">
          Selected point
        </p>
        <h3 className="mt-3 text-2xl font-semibold">{active.label}</h3>
        <div className="mt-5 grid gap-3">
          <div className="rounded-2xl bg-[#f7f3e8]/10 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[#d8e4c9]">
              Overlay wealth
            </p>
            <p className="mt-2 font-mono text-3xl">{active.overlay.toFixed(0)}</p>
          </div>
          <div className="rounded-2xl bg-[#f7f3e8]/10 p-4">
            <p className="text-xs uppercase tracking-[0.18em] text-[#d8e4c9]">
              Unhedged wealth
            </p>
            <p className="mt-2 font-mono text-3xl">{active.unhedged.toFixed(0)}</p>
          </div>
        </div>
        <p className="mt-5 text-sm leading-6 text-[#d8e4c9]">{active.note}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {wealthData.map((item, index) => (
            <button
              key={item.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={cn(
                "rounded-full px-3 py-1 text-xs font-semibold transition",
                activeIndex === index
                  ? "bg-[#c8ff5a] text-[#111713]"
                  : "bg-[#f7f3e8]/10 text-[#d8e4c9] hover:bg-[#f7f3e8]/18",
              )}
            >
              {item.label.split(" ").at(-1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Qf206InteractiveCharts() {
  const [view, setView] = useState<"wealth" | "models" | "hedge" | "events" | "factors">(
    "wealth",
  );

  const modelMetrics = useMemo(
    () =>
      modelData.map((item) => ({
        label: item.model,
        value: item.sharpe,
        display: `Sharpe ${item.sharpe.toFixed(3)}`,
      })),
    [],
  );

  return (
    <section className="rounded-[32px] border border-[#111713]/10 bg-[#fffaf0] p-5 shadow-[0_18px_45px_rgba(24,59,43,0.08)] md:p-8">
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#59705f]">
            Interactive results
          </p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111713]">
            Explore the backtest
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {[
            ["wealth", "Wealth"],
            ["models", "Models"],
            ["hedge", "Hedge"],
            ["events", "Stress events"],
            ["factors", "Factors"],
          ].map(([key, label]) => (
            <button
              key={key}
              type="button"
              onClick={() => setView(key as typeof view)}
              className={cn(
                "rounded-full border px-3 py-1.5 text-sm font-semibold transition",
                view === key
                  ? "border-[#183b2b] bg-[#183b2b] text-[#f7f3e8]"
                  : "border-[#111713]/10 bg-[#edf3dc] text-[#183b2b] hover:border-[#183b2b]/30",
              )}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-8">
        {view === "wealth" ? <WealthGrowthChart /> : null}

        {view === "models" ? (
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <BarGroup data={modelMetrics} tone="dark" />
            <div className="grid gap-3">
              {modelData.map((item) => (
                <div key={item.model} className="rounded-[22px] bg-[#edf3dc] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="font-semibold text-[#111713]">{item.model}</h3>
                    <span className="font-mono text-sm text-[#445046]">
                      {item.return.toFixed(2)}% return
                    </span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#445046]">{item.note}</p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#667064]">
                    Max drawdown {item.drawdown.toFixed(2)}%
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : null}

        {view === "hedge" ? (
          <div className="grid gap-8 lg:grid-cols-2">
            <BarGroup
              data={hedgeData.map((item) => ({
                label: item.scenario,
                value: item.sharpe,
                display: `Sharpe ${item.sharpe.toFixed(3)}`,
              }))}
              tone="dark"
            />
            <BarGroup
              data={hedgeData.map((item) => ({
                label: item.scenario,
                value: Math.abs(item.drawdown),
                display: `${item.drawdown.toFixed(2)}% max DD`,
              }))}
            />
          </div>
        ) : null}

        {view === "events" ? (
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <BarGroup
              data={eventData.map((item) => ({
                label: item.month,
                value: item.putReturn,
                display: `${item.putReturn.toFixed(1)}% put return`,
              }))}
              tone="dark"
            />
            <div className="rounded-[24px] bg-[#183b2b] p-5 text-[#f7f3e8]">
              <h3 className="font-semibold">Interpretation</h3>
              <p className="mt-3 text-sm leading-6 text-[#d8e4c9]">
                The overlay was highly valuable in the largest stress months, especially
                February 2020 and March 2022. The tradeoff is visible in the false-positive
                months, where put premiums decayed when stress did not develop into a major
                drawdown.
              </p>
            </div>
          </div>
        ) : null}

        {view === "factors" ? (
          <div className="overflow-x-auto">
            <div className="min-w-[640px] rounded-[24px] bg-[#edf3dc] p-5">
              <div className="grid grid-cols-[1.1fr_repeat(3,1fr)] gap-3 text-sm font-semibold text-[#111713]">
                <span>Factor</span>
                <span>Pre-COVID</span>
                <span>COVID regime</span>
                <span>Late cycle</span>
              </div>
              <div className="mt-4 grid gap-3">
                {allocationData.map((row) => (
                  <div
                    key={row.factor}
                    className="grid grid-cols-[1.1fr_repeat(3,1fr)] items-center gap-3 rounded-2xl bg-[#fffaf0] p-3 text-sm"
                  >
                    <span className="font-semibold text-[#111713]">{row.factor}</span>
                    {[row.preCovid, row.covid, row.lateCycle].map((value, index) => (
                      <span key={`${row.factor}-${index}`} className="font-mono text-[#445046]">
                        {value > 0 ? "+" : ""}
                        {value.toFixed(2)}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
