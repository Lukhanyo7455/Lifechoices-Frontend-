import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import * as Icons from "lucide-react";
import { ArrowLeft } from "lucide-react";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import StatCounter from "../components/common/StatCounter";
import Placeholder from "../components/common/Placeholder";
import { getContent } from "../content/contentMap";

export default function InitiativePage() {
  const { slug } = useParams();
  const p = getContent(slug);
  if (!p || p.template !== "initiative") return <Navigate to="/" replace />;
  const Icon = Icons[p.icon] || Icons.Sparkles;

  return (
    <>
      <section className="relative overflow-hidden bg-lc-ink text-lc-paper pt-[104px]">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12]" style={{ backgroundImage: `radial-gradient(circle at 12% 20%, ${p.color} 0, transparent 45%)` }} />
        <div className="container-lc relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 py-16 md:py-24 items-center">
          <div className="lg:col-span-6">
            <Reveal>
              <Link to="/interventions" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-lc-yellow transition-colors">
                <ArrowLeft className="h-4 w-4" /> Our Work
              </Link>
            </Reveal>
            <Reveal delay={80}>
              <span className="mt-6 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg" style={{ backgroundColor: `${p.color}F2` }}>
                <Icon className="h-3.5 w-3.5" />{p.block}
              </span>
            </Reveal>
            <Reveal delay={140}><h1 className="display mt-5 text-4xl md:text-6xl leading-[1.05] text-white">{p.title}</h1></Reveal>
            <Reveal delay={200}><p className="mt-6 text-lg md:text-xl text-white/75 max-w-xl">{p.heroLine}</p></Reveal>
            <Reveal delay={260}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button to="/get-involved" variant="yellow" arrow>Support this work</Button>
                <Button to="/contact" variant="outlineLight">Get in touch</Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal delay={160} className="group">
              <Placeholder dark icon={Icon} accent={p.color} label={`${p.title} imagery`} className="h-[380px] md:h-[460px] w-full" rounded="rounded-2xl" />
            </Reveal>
          </div>
        </div>
      </section>

      <Section tone="paper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal><p className="eyebrow mb-5"><span className="h-px w-8" style={{ backgroundColor: p.color }} />About this initiative</p></Reveal>
            <Reveal delay={80}><p className="text-lg text-lc-ink/75 leading-relaxed">{p.intro}</p></Reveal>
            <div className="mt-10">
              <Reveal><h3 className="display text-2xl md:text-3xl text-lc-ink">What we do</h3></Reveal>
              {p.what.map((para, i) => (
                <Reveal key={i} delay={80 + i * 60}><p className="mt-4 text-[16px] leading-relaxed text-lc-ink/70">{para}</p></Reveal>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <Reveal className="card-3d sticky top-28 p-8">
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
    </>
  );
}
