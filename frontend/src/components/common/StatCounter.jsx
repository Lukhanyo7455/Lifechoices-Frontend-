import React, { useEffect, useRef, useState } from "react";

// Animated count-up statistic that triggers when scrolled into view.
export default function StatCounter({ value, suffix = "", label, duration = 1800, className = "", light = false }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const animate = (now) => {
              const p = Math.min((now - start) / duration, 1);
              const eased = 1 - Math.pow(1 - p, 3);
              setDisplay(Math.floor(eased * value));
              if (p < 1) requestAnimationFrame(animate);
              else setDisplay(value);
            };
            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [value, duration]);

  const formatted = display.toLocaleString("en-US");

  return (
    <div ref={ref} className={className}>
      <div className={`display text-4xl md:text-5xl font-semibold ${light ? "text-white" : "text-lc-ink"}`}>
        {formatted}
        <span className="text-lc-yellowDeep">{suffix}</span>
      </div>
      <div className={`mt-2 text-sm leading-snug ${light ? "text-white/70" : "text-lc-muted"}`}>{label}</div>
    </div>
  );
}
