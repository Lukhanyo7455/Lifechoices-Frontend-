import React from "react";
import { org } from "../../mock";
import Reveal from "../common/Reveal";

export default function Intro() {
  return (
    <section className="bg-lc-paper py-24 md:py-32">
      <div className="container-lc grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-5">
          <Reveal className="relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src="https://images.unsplash.com/photo-1543689604-6fe8dbcd1f59?crop=entropy&cs=srgb&fm=jpg&q=85&w=1200"
                alt="Mentor and young people together"
                className="h-[380px] md:h-[480px] w-full object-cover"
              />
            </div>
            <div className="absolute bottom-5 right-5 bg-lc-yellow text-lc-ink rounded-md px-5 py-4 max-w-[200px]">
              <p className="display text-lg leading-tight">Healing, uplifting & empowering.</p>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal>
            <p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Our Vision</p>
          </Reveal>
          <Reveal delay={80}>
            <p className="text-lc-muted text-lg">{org.visionLead}</p>
          </Reveal>
          <Reveal delay={140}>
            <h2 className="display mt-4 text-3xl md:text-[44px] leading-[1.1] text-lc-ink">
              {org.vision}
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-7 max-w-2xl text-lg text-lc-ink/70">{org.visionSupport}</p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-8 flex items-center gap-6 border-t border-lc-ink/10 pt-8">
              <div>
                <div className="display text-3xl font-semibold text-lc-ink">Lansdowne</div>
                <div className="text-sm text-lc-muted">Our Cape Town campus</div>
              </div>
              <div className="h-10 w-px bg-lc-ink/10" />
              <div>
                <div className="display text-3xl font-semibold text-lc-ink">Cape Flats</div>
                <div className="text-sm text-lc-muted">The communities we serve</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
