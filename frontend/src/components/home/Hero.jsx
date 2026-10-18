import React from "react";
import { org, heroStats } from "../../mock";
import Button from "../common/Button";
import Reveal from "../common/Reveal";
import HeroCarousel from "../common/HeroCarousel";

const heroImages = ["/hero/hero1.webp", "/hero/hero2.webp", "/hero/hero3.webp"];

export default function Hero() {
  return (
    <section className="relative bg-white pt-[80px]">
      <HeroCarousel images={heroImages}>
        <div className="max-w-2xl text-white">
          <Reveal>
            <p className="text-[12px] font-semibold uppercase tracking-[0.22em] text-lc-yellow">
              Youth development · Cape Town · Since {org.established}
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="display mt-5 text-[40px] leading-[1.04] sm:text-5xl lg:text-[58px] text-white">
              Youth is <span className="text-lc-yellow">37%</span> of South Africa
              <span className="block">— but <em className="italic">100%</em> of its future.</span>
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg text-white/85">{org.intro}</p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button to="/get-involved" variant="yellow" size="lg" arrow>Support our work</Button>
              <Button to="/interventions" variant="outlineLight" size="lg">Explore our programmes</Button>
            </div>
          </Reveal>
        </div>
      </HeroCarousel>

      {/* Stat strip */}
      <div className="relative border-b border-lc-ink/10 bg-white">
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
