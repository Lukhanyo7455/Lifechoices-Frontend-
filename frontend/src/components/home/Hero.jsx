import React from "react";
import { org, heroStats } from "../../mock";
import Button from "../common/Button";
import Reveal from "../common/Reveal";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-lc-paper pt-[74px]">
      {/* subtle texture accents */}
      <div className="pointer-events-none absolute -top-24 -right-24 h-96 w-96 rounded-full bg-lc-yellow/10 blur-3xl" />
      <div className="container-lc relative grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 py-16 md:py-24 items-center">
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

        {/* Image column */}
        <div className="lg:col-span-6">
          <Reveal delay={120} className="relative">
            <div className="absolute -left-5 -top-5 hidden sm:block h-40 w-40 bg-lc-yellow rounded-sm" />
            <div className="absolute -right-4 -bottom-4 hidden sm:block h-28 w-28 border-2 border-lc-ink/15 rounded-sm" />
            <div className="relative overflow-hidden rounded-lg shadow-[0_40px_80px_rgba(20,24,31,0.18)]">
              <img
                src="https://images.unsplash.com/photo-1584365098838-50ccef838f4a?crop=entropy&cs=srgb&fm=jpg&q=85&w=1400"
                alt="Young people from a Life Choices programme in Cape Town"
                className="h-[420px] md:h-[520px] w-full object-cover kenburns"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg" />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-7 left-6 sm:left-10 bg-lc-ink text-lc-paper rounded-lg px-6 py-5 shadow-xl">
              <div className="display text-3xl font-semibold">200,000<span className="text-lc-yellow">+</span></div>
              <div className="text-xs uppercase tracking-widest text-white/60 mt-1">Lives impacted</div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Stat strip */}
      <div className="border-t border-lc-ink/10 bg-lc-paper2">
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
