import React from "react";
import * as Icons from "lucide-react";
import { buildingBlocks } from "../../mock";
import Reveal from "../common/Reveal";

export default function BuildingBlocks() {
  return (
    <section className="bg-lc-paper2 py-24 md:py-32">
      <div className="container-lc">
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
                <div className="group h-full bg-lc-paper rounded-lg border border-lc-ink/10 p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_24px_50px_rgba(20,24,31,0.10)]">
                  <span
                    className="flex h-12 w-12 items-center justify-center rounded-md transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${b.color}18`, color: b.color }}
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
