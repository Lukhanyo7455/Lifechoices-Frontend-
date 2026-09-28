import React from "react";
import * as Icons from "lucide-react";
import { buildingBlocks } from "../../mock";
import Reveal from "../common/Reveal";

export default function BuildingBlocks() {
  return (
    <section className="relative bg-lc-paper2 py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-50" />
      <div className="container-lc relative">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Our Approach</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-3xl md:text-5xl leading-[1.08] text-lc-ink">
              Five building blocks that help young people thrive.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg text-lc-ink/70 max-w-2xl">
              Our programmes operate across all these blocks so that young people can know themselves,
              access caring youth-friendly support, gain vital life skills, and get ready for their future.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {buildingBlocks.map((b, i) => {
            const Icon = Icons[b.icon] || Icons.Circle;
            return (
              <Reveal key={b.key} delay={i * 70}>
                <div className="card-3d group h-full p-6">
                  <span
                    className="icon-tile flex h-12 w-12 items-center justify-center transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${b.color}1F`, color: b.color }}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="display mt-5 text-xl text-lc-ink leading-tight">{b.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-lc-muted">{b.text}</p>
                  <span className="mt-5 block h-1 w-10 rounded-full" style={{ backgroundColor: b.color }} />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
