import { useState } from "react";
import { SCHEMES } from "../data/compass";
import { Label, AccessBar, Tag, SectionHead, ContextBar, Masthead } from "./Shared";

export default function Schemes({ context, pathway, setPathway, onReset }) {
  const [open, setOpen] = useState(null);

  const filtered = SCHEMES.filter(
    (s) =>
      (!context.hazard || s.hazards.includes(context.hazard)) &&
      (!context.geo || s.geographies.includes(context.geo))
  );

  const addToPathway = (scheme) => {
    const pid = `scheme-${scheme.id}`;
    if (!pathway.find((p) => p.id === pid)) {
      setPathway([...pathway, { ...scheme, id: pid, kind: "scheme" }]);
    }
  };

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <Masthead />
      <ContextBar context={context} onReset={onReset} />

      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-6">
        <SectionHead
          num="03"
          kicker="Government Scheme Navigator"
          title="Government money — and how to actually get it."
          lede="Real eligibility. Real process. What communities actually encounter between the gazette and the bank account."
        />
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-32 space-y-6">
        {filtered.map((scheme) => {
          const isOpen = open === scheme.id;
          const added = pathway.find((p) => p.id === `scheme-${scheme.id}`);
          return (
            <article
              key={scheme.id}
              data-testid={`scheme-card-${scheme.id}`}
              className={`bg-white border p-5 sm:p-8 ${
                added ? "border-[#2161c2] shadow-[4px_4px_0_#2161c2]" : "border-black/15"
              }`}
            >
              <div className="grid lg:grid-cols-12 gap-6">
                {/* Left rail */}
                <div className="lg:col-span-4">
                  <Label color="#ffa600">{scheme.ministry}</Label>
                  <h3 className="mt-2 font-serif text-4xl sm:text-5xl leading-[0.95] tracking-tight text-[#0a1629]">
                    {scheme.name}
                  </h3>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-black/50">
                    {scheme.full}
                  </p>

                  <div className="mt-5">
                    <Label>Community accessibility</Label>
                    <div className="mt-2">
                      <AccessBar score={scheme.accessible} />
                    </div>
                  </div>
                </div>

                {/* Middle: funds + real world + warning */}
                <div className="lg:col-span-8 space-y-4">
                  <div>
                    <Label color="#2bb6b7">What it funds</Label>
                    <p className="mt-1 font-sans text-[15px] text-black/80 leading-relaxed">{scheme.funds}</p>
                  </div>

                  <div>
                    <Label>Eligibility</Label>
                    <p className="mt-1 font-sans text-[13px] text-black/70 leading-relaxed">{scheme.eligibility}</p>
                  </div>

                  <div className="bg-[#f3f3f3] border-l-2 border-[#0a1629] px-4 py-3">
                    <Label>What communities actually encounter</Label>
                    <p className="mt-1 font-sans text-[13px] text-black/80 leading-relaxed">{scheme.realWorld}</p>
                  </div>

                  <div className="border-l-4 border-[#e74c3c] bg-[#fdecea] px-4 py-3">
                    <div className="flex items-start gap-2">
                      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#b43021] shrink-0">
                        Warning
                      </span>
                      <p className="font-sans text-[13px] text-[#7a1f15] leading-relaxed">{scheme.warning}</p>
                    </div>
                  </div>

                  {/* First step signature callout */}
                  <div className="bg-[#0a1629] text-white p-4">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#ffa600]">
                        Your first step
                      </span>
                      <span className="flex-1 h-px bg-[#ffa600]/40" />
                      <span className="font-mono text-[9px] text-[#ffa600]">→</span>
                    </div>
                    <p className="mt-2 font-sans text-[14px] leading-relaxed">{scheme.firstStep}</p>
                  </div>

                  {isOpen && (
                    <div className="space-y-4 pt-2">
                      <div>
                        <Label color="#2161c2">Step-by-step access</Label>
                        <ol className="mt-2 space-y-2">
                          {scheme.steps.map((step, i) => (
                            <li key={i} className="flex gap-3">
                              <span className="font-serif text-2xl leading-none text-[#2161c2] w-8 shrink-0 tabular-nums">
                                {String(i + 1).padStart(2, "0")}
                              </span>
                              <span className="font-sans text-[13px] text-black/80 leading-relaxed pt-1">
                                {step}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </div>

                      <div className="bg-[#f3f3f3] px-4 py-3 border border-black/10">
                        <Label>Key gatekeeper</Label>
                        <p className="mt-1 font-sans text-[13px] text-black/80">{scheme.bottleneck}</p>
                      </div>

                      <div>
                        <Label>Combine with</Label>
                        <div className="mt-2 flex flex-wrap gap-[6px]">
                          {scheme.convergence.map((c) => (
                            <Tag key={c} tone="aqua">
                              {c}
                            </Tag>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <button
                      onClick={() => setOpen(isOpen ? null : scheme.id)}
                      data-testid={`btn-expand-scheme-${scheme.id}`}
                      className="py-3 font-mono text-[11px] uppercase tracking-[0.15em] border border-black/20 text-black/75 hover:bg-[#f3f3f3] transition-colors"
                    >
                      {isOpen ? "Hide process ↑" : "Full process ↓"}
                    </button>
                    <button
                      onClick={() => addToPathway(scheme)}
                      data-testid={`btn-add-scheme-${scheme.id}`}
                      className={`py-3 font-mono text-[11px] uppercase tracking-[0.15em] transition-colors ${
                        added
                          ? "bg-[#2ecc71] text-white"
                          : "bg-[#2161c2] text-white hover:bg-[#ffa600] hover:text-[#0a1629]"
                      }`}
                    >
                      {added ? "✓ In Pathway" : "+ Add to Pathway"}
                    </button>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
