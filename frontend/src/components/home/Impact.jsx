import React from "react";
import { impactStats } from "../../mock";
import StatCounter from "../common/StatCounter";
import Reveal from "../common/Reveal";
import Button from "../common/Button";

export default function Impact() {
  return (
    <section className="relative overflow-hidden bg-lc-ink text-lc-paper py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle at 20% 20%, #FFC629 0, transparent 45%)" }} />
      <div className="container-lc relative grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
        <div className="lg:col-span-5">
          <Reveal>
            <p className="eyebrow-light mb-5"><span className="h-px w-8 bg-lc-yellow" />Measured Impact</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-3xl md:text-5xl leading-[1.08] text-white">
              Two decades of change on the Cape Flats.
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 text-lg text-white/70 max-w-lg">
              Since 2005 we have worked in schools, homes and communities to invest in young people —
              tracking our outcomes openly through annual programme reports.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-8">
              <Button to="/impact" variant="yellow" size="lg" arrow>See our impact & reports</Button>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid grid-cols-2 gap-x-10 gap-y-12 border-l border-white/10 pl-10">
            {impactStats.map((s, i) => (
              <Reveal key={i} delay={i * 90}>
                <StatCounter value={s.value} suffix={s.suffix} label={s.label} light />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
