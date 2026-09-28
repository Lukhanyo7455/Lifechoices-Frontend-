import React from "react";
import { Layers } from "lucide-react";
import { org, heroStats } from "../../mock";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import Placeholder from "../common/Placeholder";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-lc-paper pt-[104px]">
      {/* Layered depth backgrounds */}
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[560px] bg-grid opacity-70" />
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-lc-yellow/10 blur-3xl" />

      <div className="container-lc relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 py-14 md:py-20 items-center">
        {/* Text column */}
        <div className="lg:col-span-6">
          <Reveal>
            <p className="eyebrow">
              <span className="h-px w-8 bg-lc-yellowDeep" />
              Youth development · Cape Town · Since {org.established}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display mt-6 text-[42px] leading-[1.03] sm:text-6xl lg:text-[64px] text-lc-ink">
              Youth is <span className="relative whitespace-nowrap">37%<span className="absolute left-0 -bottom-1 h-3 w-full bg-lc-yellow/60 -z-0" /></span> of South Africa
              <span className="block">— but <em className="italic">100%</em> of its future.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-xl text-lg text-lc-ink/70">{org.intro}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button to="/get-involved" variant="yellow" size="lg" arrow>Support our work</Button>
              <Button to="/interventions" variant="outline" size="lg">Explore our programmes</Button>
            </div>
          </Reveal>
        </div>

        {/* Image placeholder column */}
        <div className="lg:col-span-6">
          <Reveal delay={120} className="group relative">
            <div className="absolute -left-5 -top-5 hidden sm:block h-40 w-40 bg-lc-yellow/90 rounded-2xl shadow-[0_20px_40px_rgba(155,190,59,0.25)]" />
            <div className="absolute -right-4 -bottom-4 hidden sm:block h-28 w-28 border border-lc-ink/15 rounded-2xl" />
            <div className="relative rounded-2xl shadow-[0_40px_80px_rgba(20,24,31,0.16)]">
              <Placeholder label="Life Choices imagery" icon={Layers} className="h-[420px] md:h-[520px] w-full" rounded="rounded-2xl" />
            </div>
            {/* Floating stat card */}
            <div className="card-3d-dark absolute -bottom-7 left-6 sm:left-10 px-6 py-5">
              <div className="display text-3xl font-semibold text-white">200,000<span className="text-lc-yellow">+</span></div>
              <div className="text-xs uppercase tracking-widest text-white/60 mt-1">Lives impacted</div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stat strip */}
      <div className="relative border-t border-lc-ink/10 bg-lc-paper2">
        <div className="container-lc grid grid-cols-2 md:grid-cols-4 divide-x divide-lc-ink/10">
          {heroStats.map((s, i) => (
            <Reveal key={i} delay={i * 70} className="px-5 py-7 md:py-9">
              <div className="display text-3xl md:text-4xl font-semibold text-lc-ink">
                {s.value.toLocaleString("en-US")}
                <span className="text-lc-yellowDeep">{s.suffix}</span>
              </div>
              <div className="mt-1.5 text-sm text-lc-muted leading-snug">{s.label}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
