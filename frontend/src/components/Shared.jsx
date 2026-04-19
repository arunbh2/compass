import { HAZARDS, ROLES, GEOGRAPHIES } from "../data/compass";

// — Mono label (small caps / tracking)
export const Label = ({ children, color = "#2161c2", className = "" }) => (
  <span
    className={`font-mono text-[10px] uppercase tracking-[0.22em] ${className}`}
    style={{ color }}
  >
    {children}
  </span>
);

// — Rule / divider
export const Rule = ({ color = "rgba(0,0,0,0.15)", className = "" }) => (
  <div className={`h-px w-full ${className}`} style={{ backgroundColor: color }} />
);

// — Tag (document-style pill, sharp)
export const Tag = ({ children, tone = "default" }) => {
  const tones = {
    default: "bg-white text-black/70 border-black/20",
    warn: "bg-[#fff7e6] text-[#9a6a00] border-[#ffa600]/50",
    aqua: "bg-[#eafafa] text-[#167a7b] border-[#2bb6b7]/40",
    blue: "bg-[#eef3fc] text-[#1b4595] border-[#2161c2]/40",
  };
  return (
    <span className={`inline-flex items-center font-mono text-[10px] uppercase tracking-[0.1em] px-2 py-[3px] border ${tones[tone]}`}>
      {children}
    </span>
  );
};

// — Evidence dots
export const EvidenceDots = ({ level }) => {
  const label = level === 3 ? "Strong evidence" : level === 2 ? "Moderate" : "Emerging";
  const color = level === 3 ? "#2ecc71" : level === 2 ? "#ffa600" : "#ed6a82";
  return (
    <div className="flex items-center gap-2" data-testid={`evidence-level-${level}`}>
      <div className="flex gap-[3px]">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="w-2 h-2 border"
            style={{
              backgroundColor: i <= level ? color : "transparent",
              borderColor: i <= level ? color : "rgba(0,0,0,0.2)",
            }}
          />
        ))}
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-black/70">{label}</span>
    </div>
  );
};

// — Responsiveness stars
export const Stars = ({ score }) => (
  <div className="flex gap-[2px]" aria-label={`Responsiveness ${score} of 5`}>
    {[1, 2, 3, 4, 5].map((i) => (
      <svg
        key={i}
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill={i <= score ? "#ffa600" : "none"}
        stroke={i <= score ? "#ffa600" : "rgba(0,0,0,0.25)"}
        strokeWidth="1.5"
      >
        <polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" />
      </svg>
    ))}
  </div>
);

// — Accessibility bar (5 segments)
export const AccessBar = ({ score }) => {
  const colors = { 1: "#e74c3c", 2: "#ed6a82", 3: "#ffa600", 4: "#2bb6b7", 5: "#2ecc71" };
  const labels = { 1: "Very Hard", 2: "Difficult", 3: "Moderate", 4: "Accessible", 5: "Easy" };
  return (
    <div className="flex items-center gap-3" data-testid={`access-bar-${score}`}>
      <div className="flex gap-[3px]">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="w-6 h-[6px]"
            style={{ backgroundColor: i <= score ? colors[score] : "#e2e2e2" }}
          />
        ))}
      </div>
      <span className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: colors[score] }}>
        {labels[score]}
      </span>
    </div>
  );
};

// — Context Bar (persistent across screens)
export const ContextBar = ({ context, onReset }) => {
  if (!context?.hazard) return null;
  const h = HAZARDS.find((x) => x.id === context.hazard);
  const g = GEOGRAPHIES.find((x) => x.id === context.geo);
  const r = ROLES.find((x) => x.id === context.role);

  return (
    <div className="sticky top-0 z-40 bg-white/95 backdrop-blur border-b border-black/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-2 flex flex-wrap items-center gap-x-6 gap-y-1 text-[11px]">
        <span className="font-mono uppercase tracking-[0.2em] text-black/40">Context</span>
        <span className="flex items-center gap-2">
          <span className="w-[6px] h-[6px]" style={{ backgroundColor: h?.accent }} />
          <span className="font-sans font-medium text-black/80">{h?.label}</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="w-[6px] h-[6px]" style={{ backgroundColor: g?.color }} />
          <span className="font-sans font-medium text-black/80">{g?.label}</span>
          <span className="font-mono text-black/40">— {g?.sub}</span>
        </span>
        <span className="flex items-center gap-2">
          <span className="font-mono text-black/40">ROLE</span>
          <span className="font-sans font-medium text-black/80">{r?.label}</span>
        </span>
        <div className="flex-1" />
        <button
          onClick={onReset}
          data-testid="btn-reset-context"
          className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/60 hover:text-[#e74c3c] transition-colors"
        >
          ↺ Restart
        </button>
      </div>
    </div>
  );
};

// — Section header (editorial numbered)
export const SectionHead = ({ num, kicker, title, lede }) => (
  <div className="max-w-4xl">
    <div className="flex items-baseline gap-4 mb-3">
      <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#2161c2]">§ {num}</span>
      <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">{kicker}</span>
    </div>
    <h2 className="font-serif text-3xl sm:text-5xl leading-[1.02] tracking-tight text-[#0a1629]">
      {title}
    </h2>
    {lede && <p className="mt-4 font-sans text-base sm:text-lg text-black/70 leading-relaxed max-w-2xl">{lede}</p>}
  </div>
);

// — Bottom navigation
export const BottomNav = ({ screen, setScreen, pathwayCount }) => {
  const items = [
    { id: "solutions", label: "Solutions", num: "01" },
    { id: "providers", label: "Providers", num: "02" },
    { id: "schemes", label: "Schemes", num: "03" },
    { id: "pathway", label: "My Path", num: "04", badge: pathwayCount },
    { id: "dashboard", label: "Intel", num: "05" },
  ];
  return (
    <>
      <div className="h-16" aria-hidden />
      <nav
        className="fixed bottom-0 inset-x-0 z-50 bg-white border-t border-black/15 no-print"
        data-testid="bottom-nav"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-5">
          {items.map((it) => {
            const active = screen === it.id;
            return (
              <button
                key={it.id}
                onClick={() => setScreen(it.id)}
                data-testid={`nav-${it.id}`}
                className={`relative py-3 px-2 flex flex-col items-center gap-[2px] border-r last:border-r-0 border-black/10 transition-colors ${
                  active ? "bg-[#0a1629] text-white" : "bg-white text-black/70 hover:bg-[#f3f3f3]"
                }`}
              >
                <span
                  className={`font-mono text-[9px] uppercase tracking-[0.2em] ${
                    active ? "text-[#ffa600]" : "text-black/40"
                  }`}
                >
                  {it.num}
                </span>
                <span className="font-sans text-[12px] font-medium">{it.label}</span>
                {it.badge > 0 && (
                  <span
                    className="absolute top-2 right-2 min-w-[18px] h-[18px] px-1 inline-flex items-center justify-center font-mono text-[10px] font-semibold bg-[#ffa600] text-black"
                    data-testid="pathway-count-badge"
                  >
                    {it.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};

// — Masthead (used on non-entry screens)
export const Masthead = () => (
  <header className="bg-[#0a1629] text-white border-b-4 border-[#ffa600] no-print">
    <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
      <div className="flex items-baseline gap-3">
        <span className="font-serif text-xl sm:text-2xl leading-none tracking-tight">COMPASS</span>
        <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#ffa600]">
          Est. 2026 · India Edition
        </span>
      </div>
      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/60 hidden sm:inline">
        Climate Action · Routing Layer
      </span>
    </div>
  </header>
);
