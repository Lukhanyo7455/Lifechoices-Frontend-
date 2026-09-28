import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import Placeholder from "../components/common/Placeholder";
import { programmes, buildingBlocks } from "../mock";

export default function Interventions() {
  return (
    <>
      <PageHero
        eyebrow="Our Work"
        title="Four interventions. One connected journey."
        subtitle="Our programmes operate across the five building blocks so young people can know themselves, access support, gain life skills and get ready for the future."
      />

      <Section tone="paper">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {programmes.map((p, i) => {
            const Icon = Icons[p.icon] || Icons.Circle;
            return (
              <Reveal key={p.slug} delay={(i % 2) * 90}>
                <Link to={`/interventions/${p.slug}`} className="card-3d group flex h-full flex-col overflow-hidden">
                  <div className="relative">
                    <Placeholder icon={Icon} label={`${p.block} imagery`} accent={p.color} className="h-64 w-full" rounded="rounded-none" />
                    <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg" style={{ backgroundColor: `${p.color}F2` }}>
                      <Icon className="h-3.5 w-3.5" />{p.block}
                    </span>
                    <span className="absolute left-5 bottom-5 rounded-full bg-lc-ink/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">{p.tag}</span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="display text-2xl text-lc-ink">{p.name}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-lc-muted flex-1">{p.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-2 font-semibold text-lc-ink">
                      Explore programme
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section tone="paper2" size="lg">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />How It Fits Together</p></Reveal>
          <Reveal delay={80}><h2 className="display text-3xl md:text-4xl leading-[1.1] text-lc-ink">Every programme strengthens a building block.</h2></Reveal>
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          {buildingBlocks.map((b, i) => (
            <Reveal key={b.key} delay={i * 60}>
              <span className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium" style={{ borderColor: `${b.color}55`, color: b.color, backgroundColor: `${b.color}12` }}>
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: b.color }} />
                {b.title}
              </span>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
