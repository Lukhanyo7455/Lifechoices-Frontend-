import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Quote, Newspaper } from "lucide-react";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import Placeholder from "../components/common/Placeholder";
import { stories } from "../mock";

const placeholderBody = [
  "This is placeholder article copy for the redesign prototype. The full story text from the Life Choices website can be inserted here later, preserving the original voice and detail of the piece.",
  "Each story from the field captures a real journey — a young person, a family or a community touched by the work of our programmes. The redesigned article layout keeps the focus on the storytelling, with generous typography and space to breathe.",
  "Imagery, pull quotes and supporting detail can be added inline as the existing content is migrated across. For now, this placeholder demonstrates how a complete story reads within the new design system."
];

export default function StoryDetail() {
  const { slug } = useParams();
  const story = stories.find((s) => s.slug === slug);

  if (!story) {
    return (
      <Section tone="paper" className="pt-40 text-center">
        <h1 className="display text-3xl text-lc-ink">Story not found</h1>
        <div className="mt-6"><Button to="/stories" variant="primary">Back to Stories</Button></div>
      </Section>
    );
  }

  const related = stories.filter((s) => s.slug !== story.slug).slice(0, 3);

  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden bg-lc-ink text-lc-paper pt-[104px]">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.10]" style={{ backgroundImage: "radial-gradient(circle at 15% 25%, #9BBE3B 0, transparent 42%)" }} />
        <div className="container-lc relative py-16 md:py-20 max-w-3xl">
          <Reveal>
            <Link to="/stories" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-lc-yellow transition-colors">
              <ArrowLeft className="h-4 w-4" /> All Stories
            </Link>
          </Reveal>
          <Reveal delay={80}>
            <div className="mt-6 flex items-center gap-3 text-xs uppercase tracking-widest text-white/60">
              <span className="font-semibold text-lc-yellow">{story.programme}</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>{story.date}</span>
            </div>
          </Reveal>
          <Reveal delay={140}>
            <h1 className="display mt-4 text-4xl md:text-5xl leading-[1.08] text-white">{story.title}</h1>
          </Reveal>
        </div>
      </section>

      {/* Article */}
      <Section tone="paper">
        <div className="mx-auto max-w-3xl">
          <Reveal className="group">
            <Placeholder icon={Newspaper} label={`${story.programme} imagery`} className="h-[300px] md:h-[420px] w-full" rounded="rounded-2xl" />
          </Reveal>

          <Reveal delay={80}>
            <p className="mt-10 text-xl leading-relaxed text-lc-ink">{story.excerpt}</p>
          </Reveal>

          {placeholderBody.map((para, i) => (
            <Reveal key={i} delay={100 + i * 40}>
              <p className="mt-6 text-[17px] leading-relaxed text-lc-ink/75">{para}</p>
            </Reveal>
          ))}

          <Reveal delay={160}>
            <blockquote className="card-3d my-10 flex gap-4 p-8">
              <Quote className="h-8 w-8 shrink-0 text-lc-yellowDeep" />
              <p className="display text-xl md:text-2xl leading-snug text-lc-ink">
                “Every young person we meet has a story worth sharing.”
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={120}>
            <p className="text-sm text-lc-muted">Full article copy is a placeholder for this prototype.</p>
          </Reveal>
        </div>
      </Section>

      {/* Related */}
      <Section tone="paper2">
        <Reveal><h2 className="display text-2xl md:text-3xl text-lc-ink">More stories from the field</h2></Reveal>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-7">
          {related.map((s, i) => (
            <Reveal key={s.slug} delay={i * 80}>
              <Link to={`/stories/${s.slug}`} className="card-3d group block overflow-hidden">
                <Placeholder icon={Newspaper} label={`${s.programme} story`} className="h-48 w-full" rounded="rounded-none" />
                <div className="p-6">
                  <div className="flex items-center gap-3 text-xs uppercase tracking-widest text-lc-muted">
                    <span className="font-semibold text-lc-yellowDeep">{s.programme}</span>
                  </div>
                  <h3 className="display mt-2 text-xl text-lc-ink leading-snug">{s.title}</h3>
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
