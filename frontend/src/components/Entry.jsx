import { useState } from "react";
import { HAZARDS, ROLES, GEOGRAPHIES } from "../data/compass";
import PhotoSlot from "./PhotoSlot";
import { Label } from "./Shared";

export default function Entry({ onComplete }) {
  const [hazard, setHazard] = useState(null);
  const [role, setRole] = useState(null);
  const [geo, setGeo] = useState(null);
  const ok = hazard && role && geo;

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      {/* ── Editorial Masthead ───────────────────────────────────────── */}
      <header className="bg-[#0a1629] text-white border-b-4 border-[#ffa600]">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="font-serif text-xl sm:text-2xl tracking-tight">COMPASS</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#ffa600]">
              Issue No. 01 · India Edition
            </span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-white/60 hidden sm:inline">
            Recognition → Next Step → Action
          </span>
        </div>
      </header>

      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 sm:pt-16 pb-10 sm:pb-16">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          <div className="lg:col-span-7">
            <Label color="#2161c2">Climate Action Routing System · India</Label>
            <h1 className="mt-4 font-serif text-[56px] sm:text-[88px] lg:text-[120px] leading-[0.92] tracking-[-0.02em] text-[#0a1629]">
              Not a directory.
              <br />
              <em className="text-[#2161c2]">A routing</em>
              <br />
              layer.
            </h1>
            <p className="mt-6 font-sans text-base sm:text-lg text-black/70 leading-relaxed max-w-xl">
              COMPASS moves a climate question — a flood, a heat wave, a glacial lake — from
              <em className="font-serif"> recognition</em> to <em className="font-serif"> next step</em> in
              under a minute. Built for the three geographies where the evidence is hardest-won:
              Vidarbha, Coastal Odisha, Ladakh.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3">
              {GEOGRAPHIES.map((g, i) => (
                <div key={g.id} className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-black/40">0{i + 1}</span>
                  <span className="w-2 h-2" style={{ backgroundColor: g.color }} />
                  <span className="font-sans text-sm font-medium text-[#0a1629]">{g.label}</span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-black/40">
                    {g.sub}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <PhotoSlot
              name="hero.jpg"
              fallback="https://images.pexels.com/photos/20515274/pexels-photo-20515274.jpeg"
              caption="Rainfed dryland, Vidarbha — the first geography COMPASS maps."
              index="01"
              aspect="aspect-[4/5]"
              alt="Hero photograph — rural Indian climate context"
            />
            <div className="mt-3 flex items-start justify-between gap-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
                Photograph · Documentary Archive
              </span>
              <span className="font-mono text-[10px] text-black/40">PG. 01</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Divider ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="h-px bg-black/20" />
        <div className="flex items-center justify-between py-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/50">
            The Protocol · Three Questions
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/50">
            No login · No forms
          </span>
        </div>
        <div className="h-px bg-black/20" />
      </div>

      {/* ── Step 1: Hazard ───────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-6xl sm:text-7xl leading-none text-[#ffa600]">01</span>
              <Label>Question One</Label>
            </div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl leading-[1.05] tracking-tight text-[#0a1629]">
              What are you facing?
            </h2>
            <p className="mt-3 font-sans text-sm text-black/60 leading-relaxed max-w-sm">
              Select the primary climate risk. This anchors everything that follows.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-0 border-l border-t border-black/15">
              {HAZARDS.map((h) => {
                const active = hazard === h.id;
                return (
                  <button
                    key={h.id}
                    onClick={() => setHazard(h.id)}
                    data-testid={`select-hazard-${h.id}`}
                    className={`relative border-r border-b border-black/15 px-4 py-6 text-left transition-all ${
                      active ? "bg-[#0a1629] text-white" : "bg-white hover:bg-[#f3f3f3]"
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span
                        className={`font-mono text-[10px] uppercase tracking-[0.2em] ${
                          active ? "text-[#ffa600]" : "text-black/40"
                        }`}
                      >
                        Haz.
                      </span>
                      <span className="w-3 h-3" style={{ backgroundColor: h.accent }} />
                    </div>
                    <div className="mt-8 font-serif text-2xl leading-tight tracking-tight">{h.label}</div>
                    {active && (
                      <span className="absolute bottom-2 right-3 font-mono text-[10px] text-[#ffa600]">
                        ● selected
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 2: Role ─────────────────────────────────────────────── */}
      <section
        className={`max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 border-t border-black/15 transition-opacity ${
          hazard ? "opacity-100" : "opacity-40 pointer-events-none"
        }`}
      >
        <div className="grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-6xl sm:text-7xl leading-none text-[#2bb6b7]">02</span>
              <Label color="#2bb6b7">Question Two</Label>
            </div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl leading-[1.05] tracking-tight text-[#0a1629]">
              Who are you?
            </h2>
            <p className="mt-3 font-sans text-sm text-black/60 leading-relaxed max-w-sm">
              Your role shapes what you see. The Block Officer and the Farmer see different first steps.
            </p>
          </div>
          <div className="lg:col-span-8">
            <div className="divide-y divide-black/15 border-y border-black/15">
              {ROLES.map((r, i) => {
                const active = role === r.id;
                return (
                  <button
                    key={r.id}
                    onClick={() => setRole(r.id)}
                    data-testid={`select-role-${r.id}`}
                    className={`w-full grid grid-cols-12 items-center gap-4 px-4 py-5 text-left transition-colors ${
                      active ? "bg-[#2161c2] text-white" : "bg-white hover:bg-[#f3f3f3]"
                    }`}
                  >
                    <span
                      className={`col-span-1 font-mono text-[11px] ${
                        active ? "text-[#ffa600]" : "text-black/40"
                      }`}
                    >
                      0{i + 1}
                    </span>
                    <span className="col-span-5 font-serif text-xl sm:text-2xl tracking-tight">{r.label}</span>
                    <span
                      className={`col-span-5 font-mono text-[11px] uppercase tracking-[0.12em] ${
                        active ? "text-white/80" : "text-black/50"
                      }`}
                    >
                      {r.sub}
                    </span>
                    <span className="col-span-1 text-right font-mono text-sm">{active ? "●" : "○"}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Step 3: Geography ────────────────────────────────────────── */}
      <section
        className={`max-w-6xl mx-auto px-4 sm:px-8 py-12 sm:py-16 border-t border-black/15 transition-opacity ${
          role ? "opacity-100" : "opacity-40 pointer-events-none"
        }`}
      >
        <div className="grid lg:grid-cols-12 gap-8 mb-6">
          <div className="lg:col-span-4">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-6xl sm:text-7xl leading-none text-[#2161c2]">03</span>
              <Label color="#2161c2">Question Three</Label>
            </div>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl leading-[1.05] tracking-tight text-[#0a1629]">
              Where are you?
            </h2>
            <p className="mt-3 font-sans text-sm text-black/60 leading-relaxed max-w-sm">
              Solutions, schemes and providers vary by geography. Choose the one that anchors your work.
            </p>
          </div>
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4">
            {GEOGRAPHIES.map((g, i) => {
              const active = geo === g.id;
              return (
                <button
                  key={g.id}
                  onClick={() => setGeo(g.id)}
                  data-testid={`select-geo-${g.id}`}
                  className={`group relative text-left bg-white border transition-all ${
                    active ? "border-[#0a1629] shadow-[6px_6px_0_#0a1629]" : "border-black/15 hover:border-[#2bb6b7]"
                  }`}
                  style={{ transform: active ? "translate(-3px,-3px)" : "none" }}
                >
                  <PhotoSlot
                    name={g.photo}
                    fallback={g.fallback}
                    index={`0${i + 2}`}
                    aspect="aspect-[4/3]"
                    alt={`${g.label} — ${g.sub}`}
                  />
                  <div className="p-4">
                    <div className="flex items-baseline justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: g.color }}>
                        Region 0{i + 1}
                      </span>
                      <span className="font-mono text-[10px] text-black/40">{g.sub}</span>
                    </div>
                    <div className="mt-2 font-serif text-2xl tracking-tight text-[#0a1629]">{g.label}</div>
                    <p className="mt-1 font-sans text-[12px] text-black/60 leading-relaxed">{g.blurb}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-24">
        <div className="border-t-2 border-[#0a1629] pt-6">
          <button
            onClick={() => ok && onComplete({ hazard, role, geo })}
            disabled={!ok}
            data-testid="btn-find-my-path"
            className={`group w-full flex items-center justify-between gap-4 px-6 sm:px-10 py-6 sm:py-8 border-2 border-[#0a1629] transition-all ${
              ok
                ? "bg-[#0a1629] text-white hover:bg-[#ffa600] hover:text-[#0a1629] hover:border-[#ffa600]"
                : "bg-[#f3f3f3] text-black/30 cursor-not-allowed border-black/15"
            }`}
          >
            <div className="text-left">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
                {ok ? "Protocol Complete" : "Complete All Three"}
              </div>
              <div className="mt-1 font-serif text-3xl sm:text-5xl tracking-tight leading-none">
                {ok ? "Find my climate path" : "Awaiting inputs…"}
              </div>
            </div>
            <span className="font-serif text-4xl sm:text-6xl leading-none">{ok ? "→" : "·"}</span>
          </button>
          {ok && (
            <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.25em] text-black/50 text-center sm:text-right">
              No login · No forms · Immediate routing
            </p>
          )}
        </div>
      </section>

      <footer className="border-t border-black/15 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-8 py-6 flex flex-wrap items-center justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
            © COMPASS India · Routing Layer · v1.0
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
            Set in Cormorant Garamond & IBM Plex
          </span>
        </div>
      </footer>
    </div>
  );
}
