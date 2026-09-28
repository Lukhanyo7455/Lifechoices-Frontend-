import React from "react";
import { partners } from "../../mock";
import Reveal from "../common/Reveal";

export default function Partners() {
  const loop = [...partners, ...partners];
  return (
    <section className="bg-lc-paper py-16 md:py-20 border-y border-lc-ink/10">
      <div className="container-lc">
        <Reveal>
          <p className="text-center text-sm uppercase tracking-[0.22em] text-lc-muted">
            Working alongside partners across government, business & philanthropy
          </p>
        </Reveal>
      </div>
      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-lc-paper to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-lc-paper to-transparent" />
        <div className="marquee-track gap-14 px-7">
          {loop.map((p, i) => (
            <div
              key={i}
              className="flex h-12 shrink-0 items-center whitespace-nowrap text-lg font-semibold text-lc-ink/40 transition-colors hover:text-lc-ink/70"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
      <div className="container-lc mt-6">
        <p className="text-center text-xs text-lc-muted/70">Partner names shown are placeholders for this prototype.</p>
      </div>
    </section>
  );
}
