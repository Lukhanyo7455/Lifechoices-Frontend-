import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { programmes } from "../../mock";
import Reveal from "../common/Reveal";
import Placeholder from "../common/Placeholder";
import Atmosphere from "../common/Atmosphere";

export default function Programmes() {
  return (
    <section className="relative overflow-hidden bg-lc-paper py-24 md:py-32">
      <Atmosphere />
      <div className="container-lc relative z-10">
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
            return (
              <Reveal key={p.slug} delay={(i % 2) * 90}>
                <Link to={`/interventions/${p.slug}`} className="card-3d group block overflow-hidden">
                  <div className="relative">
                    <Placeholder label={`${p.block} imagery`} className="h-60 w-full" rounded="rounded-none" />
                    <span
                      className="absolute left-5 top-5 inline-flex items-center rounded-full px-3 py-1.5 text-xs font-semibold text-white shadow-lg"
                      style={{ backgroundColor: `${p.color}F2` }}
                    >
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
