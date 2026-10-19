import React, { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const INTERVAL = 5500;

// Full-width crossfade hero carousel. Pauses on hover and when the user
// prefers reduced motion. Keyboard accessible (arrow keys, focusable controls).
export default function HeroCarousel({ images = [], children }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);
  const count = images.length;

  const go = useCallback((n) => setIndex((i) => (n + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || paused || count <= 1) return;
    timer.current = setTimeout(() => setIndex((i) => (i + 1) % count), INTERVAL);
    return () => clearTimeout(timer.current);
  }, [index, paused, count]);

  const onKey = (e) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  return (
    <div
      className="relative h-[72vh] min-h-[520px] w-full overflow-hidden bg-lc-ink"
      role="region"
      aria-roledescription="carousel"
      aria-label="Life Choices highlights"
      tabIndex={0}
      onKeyDown={onKey}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      {/* Slides (crossfade) */}
      {images.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <img
            src={src}
            alt=""
            className="h-full w-full object-cover object-center"
            loading={i === 0 ? "eager" : "lazy"}
            fetchpriority={i === 0 ? "high" : "low"}
            draggable="false"
          />
        </div>
      ))}

      {/* Contrast overlay (subtle, only for text legibility) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-lc-ink/80 via-lc-ink/45 to-lc-ink/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-lc-ink/55 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container-lc w-full">{children}</div>
      </div>

      {/* Prev / Next controls */}
      {count > 1 && (
        <>
          <button
            onClick={prev}
            aria-label="Previous slide"
            className="group absolute left-4 md:left-8 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-lc-ink/30 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-lc-ink"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={next}
            aria-label="Next slide"
            className="group absolute right-4 md:right-8 top-1/2 z-20 -translate-y-1/2 flex h-11 w-11 items-center justify-center rounded-full border border-white/30 bg-lc-ink/30 text-white backdrop-blur-sm transition-all hover:bg-white hover:text-lc-ink"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 flex items-center gap-2.5">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? "w-7 bg-lc-yellow" : "w-2 bg-white/50 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
