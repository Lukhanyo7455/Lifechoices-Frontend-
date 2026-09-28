import React from "react";
import { FileText, Download } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import StatCounter from "../components/common/StatCounter";
import { impactStats, programmes } from "../mock";

const reportYears = ["2025", "2024", "2023", "2022", "2021"];

export default function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Measured Impact"
        title="We report on our impact, openly, every year."
        subtitle="Since 2005 we have tracked outcomes across all our programmes and published annual reports for each intervention."
      />

      {/* Big stats */}
      <Section tone="paper">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {impactStats.map((s, i) => (
            <Reveal key={i} delay={i * 90}>
              <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Statement */}
      <Section tone="ink" size="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <h2 className="display text-3xl md:text-5xl leading-[1.1] text-white">
              Behind every number is a young person with a name and a future.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-lg text-white/70">
              We believe accountability matters. That’s why we measure participation, wellbeing and outcomes
              across each programme — and share what we learn with the communities, schools and partners who
              make our work possible.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* Reports */}
      <Section tone="paper2">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Annual Reports</p></Reveal>
          <Reveal delay={80}><h2 className="display text-3xl md:text-4xl leading-[1.1] text-lc-ink">Download programme reports.</h2></Reveal>
          <Reveal delay={140}><p className="mt-4 text-lc-muted">Report links reference the publicly available Life Choices reports for this prototype.</p></Reveal>
        </div>

        <div className="mt-12 space-y-5">
          {programmes.map((p, i) => (
            <Reveal key={p.slug} delay={i * 70}>
              <div className="rounded-lg border border-lc-ink/10 bg-lc-paper p-6 md:flex md:items-center md:justify-between gap-6">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md" style={{ backgroundColor: `${p.color}18`, color: p.color }}><FileText className="h-6 w-6" /></span>
                  <div>
                    <h3 className="display text-xl text-lc-ink">{p.name}</h3>
                    <p className="text-sm text-lc-muted">Annual impact reports</p>
                  </div>
                </div>
                <div className="mt-5 md:mt-0 flex flex-wrap gap-2">
                  {reportYears.map((y) => (
                    <a
                      key={y}
                      href="https://lifechoices.co.za/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-md border border-lc-ink/15 px-3 py-2 text-sm font-medium text-lc-ink transition-colors hover:border-lc-ink hover:bg-lc-ink hover:text-lc-paper"
                    >
                      <Download className="h-3.5 w-3.5" />{y}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
