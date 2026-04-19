import { useState } from "react";

/**
 * PhotoSlot — editorial photo placeholder.
 *
 * HOW TO ADD YOUR OWN PHOTOS (novice-friendly):
 *   1. Put JPG files in:  /app/frontend/public/photos/
 *   2. Name them to match the `name` prop (e.g. "vidarbha.jpg").
 *   3. Refresh — your photo replaces the placeholder automatically.
 *
 * If no local photo exists, a `fallback` URL is used.
 * If that also fails, an elegant editorial slot ("IMG. 01 — caption") is shown.
 */
export default function PhotoSlot({
  name,
  fallback,
  caption = "",
  index = "01",
  className = "",
  aspect = "aspect-[4/3]",
  alt = "",
}) {
  const [stage, setStage] = useState(name ? "local" : fallback ? "fallback" : "placeholder");

  const localSrc = name ? `${process.env.PUBLIC_URL || ""}/photos/${name}` : null;
  const src = stage === "local" ? localSrc : stage === "fallback" ? fallback : null;

  if (src) {
    return (
      <div
        className={`relative overflow-hidden bg-[#f3f3f3] border border-black/10 ${aspect} ${className}`}
        data-testid={`photo-${name || index}`}
      >
        <img
          src={src}
          alt={alt || caption}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setStage(stage === "local" ? "fallback" : "placeholder")}
          loading="lazy"
        />
        {caption && (
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/70 to-transparent">
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/90">
              Fig. {index} — {caption}
            </span>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      className={`relative ${aspect} bg-[#f3f3f3] border border-black/15 ${className}`}
      data-testid={`photo-slot-${name || index}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
        <div className="w-10 h-10 border border-black/20 flex items-center justify-center">
          <span className="font-mono text-[10px] text-black/50">IMG</span>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-black/50">
          FIG. {index}
        </span>
        {caption && (
          <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-black/40 text-center max-w-[180px]">
            {caption}
          </span>
        )}
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-black/30 mt-1">
          /photos/{name}
        </span>
      </div>
      <div className="absolute top-2 left-2 right-2 flex justify-between">
        <div className="w-3 h-3 border-l border-t border-black/20" />
        <div className="w-3 h-3 border-r border-t border-black/20" />
      </div>
      <div className="absolute bottom-2 left-2 right-2 flex justify-between">
        <div className="w-3 h-3 border-l border-b border-black/20" />
        <div className="w-3 h-3 border-r border-b border-black/20" />
      </div>
    </div>
  );
}
