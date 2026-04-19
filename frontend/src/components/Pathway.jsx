import { useState } from "react";
import { generatePathway } from "../data/compass";
import { Label, SectionHead, ContextBar, Masthead } from "./Shared";

export default function Pathway({ context, pathway, setPathway, onReset }) {
  const [flagText, setFlagText] = useState("");
  const [flagged, setFlagged] = useState(false);
  const [showFlag, setShowFlag] = useState(false);
  const steps = generatePathway(context, pathway);

  const removeItem = (id) => setPathway(pathway.filter((p) => p.id !== id));

  return (
    <div className="min-h-screen bg-[#f3f3f3] print:bg-white">
      <Masthead />
      <ContextBar context={context} onReset={onReset} />

      <section className="max-w-4xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-6">
        <SectionHead
          num="04"
          kicker="Your Activation Pathway"
          title="From recognition to action."
          lede="Generated for your specific context. Not a generic checklist. Print it, carry it, call the number."
        />
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-8 pb-16">
        {/* Timeline */}
        <div className="relative pl-8 sm:pl-12">
          <div className="absolute left-[7px] sm:left-[15px] top-2 bottom-2 w-px bg-black/20" />
          {steps.map((step, i) => (
            <div
              key={i}
              data-testid={`pathway-step-${i}`}
              className="relative mb-8 sm:mb-10 last:mb-0 bg-white border border-black/15 p-5 sm:p-6"
            >
              {/* Dot */}
              <div
                className="absolute -left-[34px] sm:-left-[42px] top-6 w-4 h-4 border-2 border-white"
                style={{ backgroundColor: step.accent }}
              />
              <div className="flex items-baseline gap-4">
                <span className="font-serif text-4xl sm:text-5xl leading-none tabular-nums" style={{ color: step.accent }}>
                  {step.ord}
                </span>
                <div className="flex-1">
                  <Label color={step.accent}>{step.timing}</Label>
                  <p className="mt-2 font-serif text-xl sm:text-2xl leading-snug tracking-tight text-[#0a1629]">
                    {step.action}
                  </p>
                  <div className="mt-3 flex items-center gap-2 pt-3 border-t border-black/10">
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50 shrink-0">
                      Point of contact
                    </span>
                    <span className="font-mono text-[12px] text-[#0a1629]">{step.contact}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Saved items */}
        {pathway.length > 0 && (
          <div className="mt-6 bg-white border border-black/15 p-5 sm:p-6" data-testid="saved-items-block">
            <div className="flex items-baseline justify-between mb-4">
              <div>
                <Label color="#2161c2">Items You Identified</Label>
                <h3 className="mt-1 font-serif text-2xl sm:text-3xl text-[#0a1629]">
                  Your shortlist · {pathway.length}
                </h3>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40">
                PG. 04 / ITEMS
              </span>
            </div>
            <ul className="divide-y divide-black/10 border-t border-black/10">
              {pathway.map((item, i) => (
                <li key={item.id} className="py-4 flex items-start gap-4">
                  <span className="font-mono text-[11px] text-black/40 tabular-nums pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <p className="font-serif text-lg leading-tight text-[#0a1629]">{item.name}</p>
                    {item.firstStep && (
                      <p className="mt-1 font-sans text-[13px] text-black/70 leading-relaxed">
                        {item.firstStep}
                      </p>
                    )}
                    {item.category && (
                      <span className="mt-1 inline-block font-mono text-[10px] uppercase tracking-[0.15em] text-black/50">
                        {item.category}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    data-testid={`btn-remove-${item.id}`}
                    className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/40 hover:text-[#e74c3c] no-print"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="mt-6 grid sm:grid-cols-2 gap-3 no-print">
          <button
            onClick={() => window.print()}
            data-testid="btn-print-pathway"
            className="py-4 px-5 bg-white border border-black/20 font-mono text-[11px] uppercase tracking-[0.2em] text-[#0a1629] hover:bg-[#0a1629] hover:text-white transition-colors"
          >
            ⎙ Print / Save this pathway
          </button>
          <button
            onClick={() => setShowFlag(!showFlag)}
            data-testid="btn-toggle-flag"
            className="py-4 px-5 bg-white border border-[#e74c3c] font-mono text-[11px] uppercase tracking-[0.2em] text-[#e74c3c] hover:bg-[#e74c3c] hover:text-white transition-colors"
          >
            ⚑ Flag a gap — my need is not here
          </button>
        </div>

        {showFlag && !flagged && (
          <div className="mt-4 bg-white border border-black/20 p-5" data-testid="flag-form">
            <Label color="#e74c3c">Flag a gap</Label>
            <p className="mt-1 font-sans text-sm text-black/60">
              Unmet needs become demand signals. Be specific — what wasn't here?
            </p>
            <textarea
              value={flagText}
              onChange={(e) => setFlagText(e.target.value)}
              data-testid="flag-textarea"
              placeholder="Describe the need that wasn't met…"
              className="mt-3 w-full h-24 p-3 bg-[#f3f3f3] border border-black/20 font-sans text-sm text-[#0a1629] resize-none focus:outline-none focus:border-[#2161c2]"
            />
            <button
              onClick={() => {
                if (flagText.trim()) {
                  setFlagged(true);
                  setShowFlag(false);
                }
              }}
              data-testid="btn-submit-flag"
              className="mt-3 px-5 py-3 bg-[#0a1629] text-white font-mono text-[11px] uppercase tracking-[0.2em] hover:bg-[#ffa600] hover:text-[#0a1629] transition-colors"
            >
              Submit gap signal →
            </button>
          </div>
        )}

        {flagged && (
          <div
            className="mt-4 bg-[#e8f8ee] border-l-4 border-[#2ecc71] p-5"
            data-testid="flag-confirmation"
          >
            <Label color="#1e8449">Signal received</Label>
            <p className="mt-1 font-serif text-lg text-[#0a1629]">
              Your gap has been logged locally. Thank you — unmet needs become the demand signals that
              change priorities.
            </p>
          </div>
        )}

        {/* Colophon */}
        <div className="mt-10 pt-6 border-t-2 border-[#0a1629] flex flex-wrap items-baseline justify-between gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
            COMPASS · Pathway generated {new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-black/50">
            Keep this page. Call the first number today.
          </span>
        </div>
      </section>
    </div>
  );
}
