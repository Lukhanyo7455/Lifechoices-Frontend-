import React from "react";
import { Link } from "react-router-dom";
import * as Icons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { programmes } from "../../mock";
import Reveal from "../common/Reveal";

export default function Programmes() {
  return (
    <section className="bg-lc-paper py-24 md:py-32">
      <div className="container-lc">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Our Interventions</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-3xl md:text-5xl leading-[1.08] text-lc-ink">
                Programmes that meet young people where they are.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <Link to="/interventions" className="group inline-flex items-center gap-2 font-semibold text-lc-ink">
              View all programmes
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-7">
          {programmes.map((p, i) => {
            const Icon = Icons[p.icon] || Icons.Circle;
            return (
              <Reveal key={p.slug} delay={(i % 2) * 90}>
                <Link
                  to={`/interventions/${p.slug}`}
                  className="group block overflow-hidden rounded-lg border border-lc-ink/10 bg-lc-paper transition-all duration-300 hover:shadow-[0_30px_60px_rgba(20,24,31,0.12)]"
                >
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-lc-ink/55 to-transparent" />
                    <span
                      className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm"
                      style={{ backgroundColor: `${p.color}E6` }}
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {p.block}
                    </span>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center justify-between">
                      <h3 className="display text-2xl text-lc-ink">{p.name}</h3>
                      <ArrowRight className="h-5 w-5 text-lc-muted transition-all duration-300 group-hover:text-lc-ink group-hover:translate-x-1" />
                    </div>
                    <p className="mt-3 text-[15px] leading-relaxed text-lc-muted">{p.summary}</p>
                    <span
                      className="mt-5 block h-1 w-12 origin-left rounded-full transition-transform duration-300 group-hover:scale-x-[1.8]"
                      style={{ backgroundColor: p.color }}
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
