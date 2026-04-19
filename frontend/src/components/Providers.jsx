import { useState } from "react";
import { PROVIDERS } from "../data/compass";
import { Label, Stars, SectionHead, ContextBar, Masthead } from "./Shared";

export default function Providers({ context, onReset }) {
  const [typeFilter, setTypeFilter] = useState("all");

  const filtered = PROVIDERS.filter((p) => {
    const geo = !context.geo || p.geographies.includes(context.geo);
    const haz = !context.hazard || p.hazards.includes(context.hazard);
    const type = typeFilter === "all" || p.type.toLowerCase() === typeFilter;
    return (geo || haz) && type;
  }).sort((a, b) => (b.geographies.includes(context.geo) ? 1 : 0) - (a.geographies.includes(context.geo) ? 1 : 0));

  return (
    <div className="min-h-screen bg-[#f3f3f3]">
      <Masthead />
      <ContextBar context={context} onReset={onReset} />

      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-6">
        <SectionHead
          num="02"
          kicker="Service Provider Registry"
          title="Who can help you, near you."
          lede="Ranked by contextual match. Responsiveness scores reflect what communities and partners report on the ground — not press releases."
        />
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-8 pb-6">
        <div className="flex items-center gap-2 pb-2 border-b border-black/15">
          <Label className="shrink-0 mr-2">Type</Label>
          {["all", "ngo", "government"].map((t) => {
            const active = typeFilter === t;
            return (
              <button
                key={t}
                onClick={() => setTypeFilter(t)}
                data-testid={`filter-type-${t}`}
                className={`px-3 py-[6px] font-mono text-[11px] uppercase tracking-[0.15em] border transition-colors ${
                  active
                    ? "bg-[#0a1629] text-white border-[#0a1629]"
                    : "bg-white text-black/70 border-black/20 hover:border-[#2161c2] hover:text-[#2161c2]"
                }`}
              >
                {t === "all" ? "All" : t === "ngo" ? "NGOs" : "Government"}
              </button>
            );
          })}
          <div className="flex-1" />
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
            {filtered.length} providers
          </span>
        </div>
      </div>

      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-32">
        <ul className="border-t border-black/15 divide-y divide-black/15 bg-white border-x border-b">
          {filtered.map((p) => {
            const match = p.geographies.includes(context.geo);
            return (
              <li
                key={p.id}
                data-testid={`provider-row-${p.id}`}
                className={`p-5 sm:p-6 relative ${match ? "bg-[#eef3fc]" : "bg-white"}`}
              >
                {match && (
                  <span className="absolute top-0 left-0 w-1 h-full bg-[#2161c2]" />
                )}
                <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
                  {/* Left: name + meta */}
                  <div className="lg:col-span-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-serif text-2xl sm:text-3xl leading-tight tracking-tight text-[#0a1629]">
                            {p.name}
                          </h3>
                          {match && (
                            <span className="font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-[2px] bg-[#2161c2] text-white">
                              Best Match
                            </span>
                          )}
                        </div>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-black/50">
                          {p.full}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-2">
                      <span
                        className={`font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-[2px] border ${
                          p.type === "NGO"
                            ? "border-[#2bb6b7] text-[#167a7b]"
                            : "border-[#2161c2] text-[#2161c2]"
                        }`}
                      >
                        {p.type}
                      </span>
                      <span
                        className={`font-mono text-[9px] uppercase tracking-[0.2em] px-2 py-[2px] border ${
                          p.projectOnly
                            ? "border-[#ffa600] text-[#9a6a00]"
                            : "border-[#2ecc71] text-[#1e8449]"
                        }`}
                      >
                        {p.projectOnly ? "Project only" : "Open demand"}
                      </span>
                    </div>
                  </div>

                  {/* Middle: description */}
                  <div className="lg:col-span-5">
                    <p className="font-sans text-[14px] text-black/80 leading-relaxed">{p.what}</p>
                    <p className="mt-3 font-serif italic text-[13px] text-black/60 leading-relaxed">
                      {p.track}
                    </p>
                    <div className="mt-3">
                      <Label>Active Districts</Label>
                      <p className="mt-1 font-mono text-[11px] text-black/70">{p.districts}</p>
                    </div>
                  </div>

                  {/* Right: responsiveness + CTAs */}
                  <div className="lg:col-span-3 flex flex-col gap-3">
                    <div>
                      <Label>Responsiveness</Label>
                      <div className="mt-1 flex items-center gap-2">
                        <Stars score={p.responsiveness} />
                        <span className="font-mono text-[11px] text-black/60">{p.responsiveness}/5</span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-auto">
                      {p.phone && (
                        <a
                          href={`tel:${p.phone}`}
                          data-testid={`provider-call-${p.id}`}
                          className="px-3 py-[10px] font-mono text-[11px] uppercase tracking-[0.15em] text-center border border-black/20 text-[#0a1629] hover:bg-[#0a1629] hover:text-white transition-colors"
                        >
                          ☏ {p.phone}
                        </a>
                      )}
                      {p.email && (
                        <a
                          href={`mailto:${p.email}`}
                          data-testid={`provider-email-${p.id}`}
                          className="px-3 py-[10px] font-mono text-[11px] uppercase tracking-[0.15em] text-center bg-[#2161c2] text-white hover:bg-[#ffa600] hover:text-[#0a1629] transition-colors"
                        >
                          ✉ Connect
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
}
