import React from "react";
import { useParams, Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import StatCounter from "../components/common/StatCounter";
import { programmes } from "../mock";

export default function Programme() {
  const { slug } = useParams();
  const p = programmes.find((x) => x.slug === slug);

  if (!p) {
    return (
      <Section tone="paper" className="pt-40 text-center">
        <h1 className="display text-3xl text-lc-ink">Programme not found</h1>
        <div className="mt-6"><Button to="/interventions" variant="primary">Back to Our Work</Button></div>
      </Section>
    );
  }

  const Icon = Icons[p.icon] || Icons.Circle;
  const others = programmes.filter((x) => x.slug !== p.slug);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-lc-ink text-lc-paper pt-[74px]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.10]" style={{ backgroundImage: `radial-gradient(circle at 12% 20%, ${p.color} 0, transparent 45%)` }} />
        <div className="container-lc relative grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 md:py-24 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <Link to="/interventions" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-lc-yellow transition-colors">
                <ArrowLeft className="h-4 w-4" /> Our Work
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-white" style={{ backgroundColor: `${p.color}E6` }}>
                <Icon className="h-3.5 w-3.5" />{p.block}
              </span>
            </Reveal>
            <Reveal delay={140}>
              <h1 className="display mt-5 text-4xl md:text-6xl leading-[1.05] text-white">{p.name}</h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 text-lg md:text-xl text-white/75 max-w-xl">{p.heroLine}</p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/get-involved" variant="yellow" arrow>Support this programme</Button>
                <Button to="/contact" variant="outlineLight">Get in touch</Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={160} className="overflow-hidden rounded-lg shadow-2xl">
              <img src={p.image} alt={p.name} className="h-[380px] md:h-[460px] w-full object-cover" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Why + What */}
      <Section tone="paper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal><p className="eyebrow mb-5"><span className="h-px w-8" style={{ backgroundColor: p.color }} />Why {p.name}?</p></Reveal>
            <Reveal delay={80}><p className="text-lg text-lc-ink/75 leading-relaxed">{p.why}</p></Reveal>
            {p.endorsement && (
              <Reveal delay={140}>
                <div className="mt-6 flex gap-3 rounded-lg border-l-4 bg-lc-paper2 p-5" style={{ borderColor: p.color }}>
                  <Check className="h-5 w-5 shrink-0" style={{ color: p.color }} />
                  <p className="text-[15px] text-lc-ink/80">{p.endorsement}</p>
                </div>
              </Reveal>
            )}
            <div className="mt-10">
              <Reveal><h3 className="display text-2xl md:text-3xl text-lc-ink">What we do</h3></Reveal>
              {p.what.map((para, i) => (
                <Reveal key={i} delay={80 + i * 60}><p className="mt-4 text-[16px] leading-relaxed text-lc-ink/70">{para}</p></Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <Reveal className="sticky top-24 rounded-lg border border-lc-ink/10 bg-lc-paper2 p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-lc-muted">By the numbers</p>
              <div className="mt-6 space-y-8">
                {p.stats.map((s, i) => (
                  <div key={i} className="border-b border-lc-ink/10 pb-6 last:border-0 last:pb-0">
                    <StatCounter value={s.value} suffix={s.suffix} label={s.label} />
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Other programmes */}
      <Section tone="paper2">
        <Reveal><h2 className="display text-2xl md:text-3xl text-lc-ink">Explore other interventions</h2></Reveal>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {others.map((o, i) => {
            const OIcon = Icons[o.icon] || Icons.Circle;
            return (
              <Reveal key={o.slug} delay={i * 80}>
                <Link to={`/interventions/${o.slug}`} className="group flex items-center justify-between rounded-lg border border-lc-ink/10 bg-lc-paper p-6 transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 items-center justify-center rounded-md" style={{ backgroundColor: `${o.color}18`, color: o.color }}><OIcon className="h-5 w-5" /></span>
                    <span className="display text-lg text-lc-ink">{o.name}</span>
                  </div>
                  <ArrowRight className="h-5 w-5 text-lc-muted transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
