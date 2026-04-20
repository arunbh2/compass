import { useState } from "react";
import { SOLUTIONS } from "../data/compass";
import PhotoSlot from "./PhotoSlot";
import { Label, EvidenceDots, Tag, SectionHead, ContextBar, Masthead } from "./Shared";

const CATS = ["all", "Watershed", "Coastal Protection", "Heat Stress", "Mountain Resilience", "Agroecology", "Early Warning", "Livelihoods", "Ecosystem", "Health"];

export default function Solutions({ context, pathway, setPathway, onNavigate, onReset }) {
  const [cat, setCat] = useState("all");
  const [open, setOpen] = useState(null);

  const filtered = SOLUTIONS.filter((s) => {
    const h = !context.hazard || s.hazards.includes(context.hazard);
    const g = !context.geo || s.geographies.includes(context.geo);
    const c = cat === "all" || s.category === cat;
    return h && g && c;
  });

  const addToPathway = (sol) => {
    if (!pathway.find((p) => p.id === sol.id)) setPathway([...pathway, sol]);
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <Masthead />
      <ContextBar context={context} onReset={onReset} />

      {/* Header */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-6">
        <SectionHead
          num="01"
          kicker="Solutions Routing Layer"
          title="What has worked — and how to access it."
          lede="Each solution is evidence-rated, geographically-anchored, and ends with a specific first step. No abstractions."
        />
      </section>

      {/* Filter Row */}
      <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-6">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 border-b border-black/15">
          <Label className="shrink-0 mr-2">Filter</Label>
          {CATS.map((c) => {
            const active = cat === c;
            return (
              <button
                key={c}
                onClick={() => setCat(c)}
                data-testid={`filter-cat-${c}`}
                className={`shrink-0 px-3 py-[6px] font-mono text-[11px] uppercase tracking-[0.15em] border transition-colors ${
                  active
                    ? "bg-[#0a1629] text-white border-[#0a1629]"
                    : "bg-white text-black/70 border-black/20 hover:border-[#2161c2] hover:text-[#2161c2]"
                }`}
              >
                {c === "all" ? "All" : c}
              </button>
            );
          })}
          <div className="flex-1" />
          <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
            {filtered.length} matches
          </span>
        </div>
      </div>

      {/* Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-32">
        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-serif text-2xl text-black/50">No solutions match this filter.</p>
            <button
              onClick={() => setCat("all")}
              className="mt-4 font-mono text-[11px] uppercase tracking-[0.2em] text-[#2161c2] underline"
            >
              Show all
            </button>
          </div>
        )}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {filtered.map((sol, i) => {
            const inPath = pathway.find((p) => p.id === sol.id);
            const isOpen = open === sol.id;
            return (
              <article
                key={sol.id}
                data-testid={`solution-card-${sol.id}`}
                className={`bg-white border transition-all ${
                  inPath ? "border-[#2161c2] shadow-[4px_4px_0_#2161c2]" : "border-black/15"
                }`}
              >
                <PhotoSlot
                  name={sol.photo}
                  fallback={`https://images.pexels.com/photos/${[ 20515274, 5261381, 34998312, 7538896, 2876025, 2889496, 4622422, 1486290 ][i % 8]}/pexels-photo-${[ 20515274, 5261381, 34998312, 7538896, 2876025, 2889496, 4622422, 1486290 ][i % 8]}.jpeg`}
                  caption={sol.name}
                  index={`${String(sol.id).padStart(2, "0")}`}
                  aspect="aspect-[16/9]"
                  alt={sol.name}
                />

                <div className="p-5 sm:p-6">
                  {/* Meta row */}
                  <div className="flex items-center justify-between mb-3">
                    <Label color="#2161c2">{sol.category}</Label>
                    <span
                      className={`font-mono text-[10px] uppercase tracking-[0.15em] px-2 py-[2px] border ${
                        sol.accessible
                          ? "border-[#2ecc71] text-[#2ecc71]"
                          : "border-[#ffa600] text-[#9a6a00]"
                      }`}
                    >
                      {sol.accessible ? "Accessible" : "Needs support"}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl leading-tight tracking-tight text-[#0a1629]">
                    {sol.name}
                  </h3>

                  <p className="mt-3 font-sans text-[14px] text-black/75 leading-relaxed">{sol.plain}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2">
                    <EvidenceDots level={sol.evidenceLevel} />
                    <span className="font-mono text-[11px] text-black/60 tabular-nums">
                      ₹ {sol.costRange}
                    </span>
                  </div>

                  {/* Story blockquote */}
                  <blockquote className="mt-5 border-l-2 border-[#2bb6b7] pl-4">
                    <p className="font-serif italic text-[15px] text-[#0a1629]/90 leading-relaxed">
                      “{sol.story}”
                    </p>
                    <cite className="mt-2 block font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 not-italic">
                      — {sol.storyBy}
                    </cite>
                  </blockquote>

                  {/* First step — signature callout */}
                  <div className="mt-5 bg-[#0a1629] text-white p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#ffa600]">
                        Your first step
                      </span>
                      <span className="flex-1 h-px bg-[#ffa600]/40" />
                      <span className="font-mono text-[9px] text-[#ffa600]">→</span>
                    </div>
                    <p className="mt-2 font-sans text-[14px] leading-relaxed">{sol.firstStep}</p>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white/50">
                      Supported by {sol.provider}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="mt-4 flex flex-wrap gap-[6px]">
                    {sol.tags.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>

                  {/* Expanded */}
                  {isOpen && (
                    <div className="mt-5 pt-4 border-t border-black/15 space-y-4">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <Label color="#2bb6b7">Tried at</Label>
                          <p className="mt-1 font-sans text-[13px] text-black/75">{sol.triedAt}</p>
                        </div>
                        <div>
                          <Label color="#2bb6b7">Works best when</Label>
                          <p className="mt-1 font-sans text-[13px] text-black/75">{sol.bestFor}</p>
                        </div>
                      </div>
                      <div className="border-l-2 border-[#ffa600] pl-4 bg-[#fff7e6] py-3 pr-3">
                        <Label color="#9a6a00">When it doesn't work</Label>
                        <p className="mt-1 font-sans text-[13px] text-[#5c4200]">{sol.failureModes}</p>
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    <button
                      onClick={() => setOpen(isOpen ? null : sol.id)}
                      data-testid={`btn-expand-${sol.id}`}
                      className="py-3 font-mono text-[11px] uppercase tracking-[0.15em] border border-black/20 text-black/75 hover:bg-[#f3f3f3] transition-colors"
                    >
                      {isOpen ? "Hide details ↑" : "Full details ↓"}
                    </button>
                    <button
                      onClick={() => addToPathway(sol)}
                      data-testid={`btn-add-pathway-${sol.id}`}
                      className={`py-3 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
                        inPath
                          ? "bg-[#2ecc71] text-white"
                          : "bg-[#2161c2] text-white hover:bg-[#ffa600] hover:text-[#0a1629]"
                      }`}
                    >
                      {inPath ? "✓ In Pathway" : "+ Add to Pathway"}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {pathway.length > 0 && (
          <button
            onClick={() => onNavigate("pathway")}
            data-testid="btn-view-pathway"
            className="mt-10 w-full py-5 bg-[#ffa600] text-[#0a1629] font-mono text-[12px] uppercase tracking-[0.25em] hover:bg-[#0a1629] hover:text-[#ffa600] transition-colors border-2 border-[#0a1629]"
          >
            View my pathway ({pathway.length} {pathway.length === 1 ? "item" : "items"}) →
          </button>
        )}
      </section>
    </div>
  );
}
