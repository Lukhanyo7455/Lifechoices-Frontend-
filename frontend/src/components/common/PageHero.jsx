import React from "react";
import Reveal from "./Reveal";

// Reusable inner-page hero band (dark, institutional).
export default function PageHero({ eyebrow, title, subtitle, align = "left", color }) {
  return (
    <section className="relative overflow-hidden bg-lc-ink text-lc-paper pt-[74px]">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{ backgroundImage: `radial-gradient(circle at 15% 25%, ${color || "#FFC629"} 0, transparent 42%)` }}
      />
      <div className={`container-lc relative py-20 md:py-28 ${align === "center" ? "text-center mx-auto max-w-3xl" : "max-w-3xl"}`}>
        {eyebrow && (
          <Reveal>
            <p className={`eyebrow-light mb-5 ${align === "center" ? "justify-center" : ""}`}>
              <span className="h-px w-8" style={{ backgroundColor: color || "#FFC629" }} />
              {eyebrow}
            </p>
          </Reveal>
        )}
        <Reveal delay={80}>
          <h1 className="display text-4xl md:text-6xl leading-[1.05] text-white">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={150}>
            <p className={`mt-6 text-lg md:text-xl text-white/70 ${align === "center" ? "mx-auto" : ""} max-w-2xl`}>
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
