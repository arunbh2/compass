import { Masthead } from "./Shared";

// — Dashboard: Intel / dark command center
export default function Dashboard() {
  const stats = [
    { label: "Searches this month", value: "2,847", change: "+23%", accent: "#2bb6b7" },
    { label: "Provider connections", value: "341", change: "+18%", accent: "#ffa600" },
    { label: "Unmet needs flagged", value: "89", change: "requires response", accent: "#e74c3c", alert: true },
    { label: "Schemes navigated", value: "1,203", change: "+31%", accent: "#2ecc71" },
  ];
  const hazardData = [
    { geo: "Vidarbha", items: [{ n: "Heat Stress", p: 42 }, { n: "Drought", p: 33 }, { n: "Flood", p: 25 }] },
    { geo: "Coastal Odisha", items: [{ n: "Cyclone", p: 51 }, { n: "Flood", p: 38 }, { n: "Drought", p: 11 }] },
    { geo: "Ladakh", items: [{ n: "Drought", p: 48 }, { n: "GLOF", p: 35 }, { n: "Landslide", p: 17 }] },
  ];
  const gaps = [
    { s: "No heat action protocol for rural farm labourers in Vidarbha", n: 23, g: "Vidarbha" },
    { s: "PMFBY claim rejection in Yavatmal — no documentation support available", n: 19, g: "Vidarbha" },
    { s: "Mangrove restoration in Mahanadi delta — no NGO with tenure support capacity", n: 14, g: "Coastal Odisha" },
    { s: "GLOF early warning for Zanskar villages — no community protocol", n: 11, g: "Ladakh" },
    { s: "Kargil district under-served across all categories", n: 9, g: "Ladakh" },
  ];
  const blocks = [
    { scheme: "PMFBY", issue: "72-hr intimation deadline not widely known", f: "High" },
    { scheme: "NDRF / SDRF", issue: "Panchnama delays of 2–6 weeks in Vidarbha", f: "High" },
    { scheme: "MGNREGS", issue: "Wage payment delays 60–90 days in Odisha", f: "Medium" },
    { scheme: "PMAY-G", issue: "SECC list exclusion blocks eligible households", f: "Medium" },
  ];

  return (
    <div className="min-h-screen bg-[#0a1629] text-white">
      <Masthead />

      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-6">
        <div className="flex items-baseline gap-3 mb-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#ffa600]">§ 05</span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
            Ecosystem Intelligence · Restricted
          </span>
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl leading-[1.02] tracking-tight text-white">
          What the system is hearing.
        </h2>
        <p className="mt-4 font-sans text-base text-white/60 leading-relaxed max-w-2xl">
          Aggregated across anonymous searches. Honest accounting — what communities flagged,
          what providers couldn't reach, where schemes choke.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-6">
        <div className="h-px bg-white/15" />
        <div className="flex items-center justify-between py-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Section A · Volume Metrics
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Period: Last 30 days
          </span>
        </div>
        <div className="h-px bg-white/15" />
      </section>

      {/* Stats */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-l border-t border-white/15">
          {stats.map((s) => (
            <div
              key={s.label}
              className={`relative border-r border-b border-white/15 p-5 ${
                s.alert ? "bg-[#2a0f12]" : "bg-[#0f1f3a]"
              }`}
              data-testid={`stat-${s.label.replace(/\s+/g, "-").toLowerCase()}`}
            >
              <span className="absolute top-2 right-3 font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: s.accent }}>
                ●
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                {s.label}
              </span>
              <div className="mt-6 font-serif text-5xl sm:text-6xl leading-none tracking-tight tabular-nums" style={{ color: s.alert ? "#ff6b6b" : "#ffffff" }}>
                {s.value}
              </div>
              <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.15em]" style={{ color: s.accent }}>
                {s.change}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section B label */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-4 pb-3">
        <div className="h-px bg-white/15" />
        <div className="flex items-center justify-between py-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Section B · Hazard Distribution
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            by geography
          </span>
        </div>
        <div className="h-px bg-white/15" />
      </section>

      {/* Hazards by geography */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <div className="grid lg:grid-cols-3 gap-0 border-l border-t border-white/15">
          {hazardData.map((g) => (
            <div key={g.geo} className="border-r border-b border-white/15 p-6 bg-[#0f1f3a]">
              <div className="flex items-baseline justify-between">
                <h3 className="font-serif text-2xl tracking-tight text-white">{g.geo}</h3>
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
                  Share %
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {g.items.map((h) => (
                  <div key={h.n}>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="font-sans text-[13px] text-white/85">{h.n}</span>
                      <span className="font-mono text-[11px] text-[#ffa600] tabular-nums">{h.p}%</span>
                    </div>
                    <div className="h-[4px] bg-white/10">
                      <div
                        className="h-full"
                        style={{
                          width: `${h.p}%`,
                          backgroundColor: h.n.includes("Heat") ? "#e74c3c" : h.n.includes("Cyclone") ? "#2161c2" : h.n.includes("Drought") ? "#ffa600" : h.n.includes("GLOF") ? "#2bb6b7" : h.n.includes("Landslide") ? "#ed6a82" : "#1b9cfc",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section C: Gaps */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-4">
        <div className="h-px bg-white/15" />
        <div className="flex items-center justify-between py-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ed6a82]">
            ⚑ Section C · Unmet Need Signals
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Honest accounting
          </span>
        </div>
        <div className="h-px bg-white/15" />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-6">
        <ul className="border-l border-t border-white/15 bg-[#0f1f3a]">
          {gaps.map((g, i) => (
            <li
              key={i}
              data-testid={`gap-row-${i}`}
              className="border-r border-b border-white/15 p-5 flex items-start gap-5"
            >
              <div className="w-14 h-14 shrink-0 bg-[#2a0f12] border border-[#e74c3c]/40 flex flex-col items-center justify-center">
                <span className="font-serif text-2xl leading-none text-[#ff6b6b] tabular-nums">{g.n}</span>
                <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-[#ff6b6b]/70 mt-1">
                  flags
                </span>
              </div>
              <div className="flex-1">
                <p className="font-serif text-lg sm:text-xl leading-snug text-white">{g.s}</p>
                <span className="mt-2 inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-[#2bb6b7]">
                  {g.g}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Section D: Scheme Bottlenecks */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-4">
        <div className="h-px bg-white/15" />
        <div className="flex items-center justify-between py-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#ffa600]">
            ⚠ Section D · Recurring Scheme Bottlenecks
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Patterns across geographies
          </span>
        </div>
        <div className="h-px bg-white/15" />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-6 pb-32">
        <div className="grid sm:grid-cols-2 gap-0 border-l border-t border-white/15">
          {blocks.map((b, i) => (
            <div
              key={i}
              data-testid={`bottleneck-${i}`}
              className="border-r border-b border-white/15 p-5 bg-[#0f1f3a]"
            >
              <div className="flex items-center justify-between">
                <h4 className="font-serif text-2xl tracking-tight text-white">{b.scheme}</h4>
                <span
                  className={`font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-[2px] border ${
                    b.f === "High"
                      ? "border-[#e74c3c] text-[#ff6b6b]"
                      : "border-[#ffa600] text-[#ffa600]"
                  }`}
                >
                  {b.f}
                </span>
              </div>
              <p className="mt-3 font-sans text-[13px] text-white/70 leading-relaxed">{b.issue}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 pt-4 border-t border-white/15 flex flex-wrap items-baseline justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            Data aggregated anonymously · no personal identifiers
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
            End of Intel Report
          </span>
        </div>
      </section>
    </div>
  );
}
