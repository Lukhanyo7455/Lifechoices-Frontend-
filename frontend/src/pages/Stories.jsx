import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Newspaper } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import Placeholder from "../components/common/Placeholder";
import { stories, programmes } from "../mock";

export default function Stories() {
  const filters = ["All", ...programmes.map((p) => p.name)];
  const [active, setActive] = useState("All");
  const list = active === "All" ? stories : stories.filter((s) => s.programme === active);

  return (
    <>
      <PageHero
        eyebrow="Stories from the Field"
        title="Every person we meet has a story worth sharing."
        subtitle="Real journeys of healing, leadership and hope from across our programmes."
      />

      <Section tone="paper">
        {/* Filters */}
        <Reveal className="flex flex-wrap gap-2">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                active === f ? "bg-lc-ink text-lc-paper shadow-lg" : "border border-lc-ink/15 text-lc-ink/70 hover:border-lc-ink"
              }`}
            >
              {f}
            </button>
          ))}
        </Reveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {list.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 80}>
              <Link to="/stories" onClick={(e) => e.preventDefault()} className="card-3d group block overflow-hidden">
                <Placeholder icon={Newspaper} label={`${s.programme} story`} className="h-60 w-full" rounded="rounded-none" />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-lc-muted">
                    <span className="font-semibold text-lc-yellowDeep">{s.programme}</span>
                    <span className="h-1 w-1 rounded-full bg-lc-muted" /><span>{s.date}</span>
                  </div>
                  <h3 className="display mt-2 text-2xl text-lc-ink leading-snug">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-lc-muted">{s.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-lc-ink">
                    Read story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
