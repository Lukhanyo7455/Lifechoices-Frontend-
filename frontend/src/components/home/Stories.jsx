import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { stories } from "../../mock";
import Reveal from "../common/Reveal";

export default function Stories() {
  const featured = stories.slice(0, 3);
  return (
    <section className="bg-lc-paper2 py-24 md:py-32">
      <div className="container-lc">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Stories from the Field</p>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display text-3xl md:text-5xl leading-[1.08] text-lc-ink">
                Every person we meet has a story worth sharing.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <Link to="/stories" className="group inline-flex items-center gap-2 font-semibold text-lc-ink">
              Read more stories
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-7">
          {featured.map((s, i) => (
            <Reveal key={s.slug} delay={i * 90}>
              <Link to="/stories" className="group block">
                <div className="overflow-hidden rounded-lg">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-64 w-full object-cover transition-transform duration-[900ms] group-hover:scale-105"
                  />
                </div>
                <div className="mt-5">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-lc-muted">
                    <span className="font-semibold text-lc-yellowDeep">{s.programme}</span>
                    <span className="h-1 w-1 rounded-full bg-lc-muted" />
                    <span>{s.date}</span>
                  </div>
                  <h3 className="display mt-2 text-2xl text-lc-ink leading-snug group-hover:text-lc-ink/80 transition-colors">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-lc-muted">{s.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
