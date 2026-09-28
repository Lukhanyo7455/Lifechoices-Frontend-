import React from "react";
import * as Icons from "lucide-react";
import { ArrowUpRight, Leaf } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import { sustainabilityInitiatives } from "../mock";

export default function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title="Building a self-sustaining organisation."
        subtitle="Alongside our core programmes, Life Choices runs a set of social enterprises and initiatives that build skills, create opportunity and support our long-term financial sustainability."
      />

      <Section tone="paper">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Our Initiatives</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-3xl md:text-5xl leading-[1.08] text-lc-ink">
              Enterprises that extend our impact.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg text-lc-ink/70">Click through to find out more about each initiative.</p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-7">
          {sustainabilityInitiatives.map((it, i) => {
            const Icon = Icons[it.icon] || Leaf;
            return (
              <Reveal key={it.name} delay={(i % 2) * 90}>
                <a
                  href={it.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-3d group flex h-full items-start gap-5 p-8"
                >
                  <span className="icon-tile flex h-14 w-14 shrink-0 items-center justify-center" style={{ backgroundColor: `${it.color}1F`, color: it.color }}>
                    <Icon className="h-7 w-7" />
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h3 className="display text-2xl text-lc-ink">{it.name}</h3>
                      <ArrowUpRight className="h-5 w-5 text-lc-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-lc-muted">{it.desc}</p>
                    <span className="mt-5 block h-1 w-12 origin-left rounded-full transition-transform duration-300 group-hover:scale-x-[1.8]" style={{ backgroundColor: it.color }} />
                  </div>
                </a>
              </Reveal>
            );
          })}
        </div>
        <Reveal delay={120}>
          <p className="mt-8 text-sm text-lc-muted">Initiative descriptions are summarised for this prototype.</p>
        </Reveal>
      </Section>
    </>
  );
}
