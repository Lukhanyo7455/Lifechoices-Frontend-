import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { Download } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import Placeholder from "../components/common/Placeholder";
import { getContent } from "../content/contentMap";

function TextBlock({ s }) {
  return (
    <div className="max-w-3xl">
      {s.heading && <Reveal><h2 className="display text-3xl md:text-4xl leading-[1.1] text-lc-ink">{s.heading}</h2></Reveal>}
      {s.body.map((p, i) => (
        <Reveal key={i} delay={60 + i * 50}><p className="mt-5 text-lg leading-relaxed text-lc-ink/70">{p}</p></Reveal>
      ))}
    </div>
  );
}

function PeopleBlock({ s }) {
  return (
    <div>
      <Reveal><h2 className="display text-3xl md:text-4xl leading-[1.1] text-lc-ink">{s.heading}</h2></Reveal>
      {s.note && <Reveal delay={60}><p className="mt-4 text-lc-muted">{s.note}</p></Reveal>}
      <div className="mt-10 grid grid-cols-2 lg:grid-cols-3 gap-6">
        {s.people.map((m, i) => (
          <Reveal key={i} delay={i * 70}>
            <div className="card-3d group overflow-hidden">
              <Placeholder label="Portrait" className="h-60 w-full" rounded="rounded-none" />
              <div className="p-5">
                <h3 className="display text-lg text-lc-ink">{m.name}</h3>
                <p className="text-sm text-lc-yellowDeep font-semibold">{m.role}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function DownloadsBlock({ s }) {
  return (
    <div>
      <Reveal><h2 className="display text-2xl md:text-3xl leading-[1.1] text-lc-ink">{s.heading}</h2></Reveal>
      {s.note && <Reveal delay={60}><p className="mt-3 text-sm text-lc-muted">{s.note}</p></Reveal>}
      <div className="mt-8 space-y-5">
        {s.items.map((it, i) => (
          <Reveal key={i} delay={i * 60}>
            <div className="card-3d p-6 md:flex md:items-center md:justify-between gap-6">
              <h3 className="display text-xl text-lc-ink">{it.label}</h3>
              <div className="mt-5 md:mt-0 flex flex-wrap gap-2">
                {it.years.map((y) => (
                  <a key={y} href="https://lifechoices.co.za/" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-lc-ink/15 px-3 py-2 text-sm font-medium text-lc-ink transition-all hover:-translate-y-0.5 hover:border-lc-ink hover:bg-lc-ink hover:text-lc-paper">
                    <Download className="h-3.5 w-3.5" />{y}
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function DocumentsBlock({ s }) {
  return (
    <div>
      <Reveal><h2 className="display text-2xl md:text-3xl leading-[1.1] text-lc-ink">{s.heading}</h2></Reveal>
      {s.note && <Reveal delay={60}><p className="mt-3 text-sm text-lc-muted">{s.note}</p></Reveal>}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
        {s.items.map((it, i) => (
          <Reveal key={i} delay={i * 60}>
            <a href="https://lifechoices.co.za/" target="_blank" rel="noopener noreferrer" className="card-3d group flex items-center justify-between p-6">
              <div>
                <h3 className="display text-lg text-lc-ink">{it.label}</h3>
                <p className="text-sm text-lc-muted">{it.desc}</p>
              </div>
              <Download className="h-5 w-5 text-lc-muted transition-transform group-hover:translate-y-0.5" />
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function CtaBlock({ s }) {
  return (
    <div className="card-3d p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
      <div className="max-w-xl">
        <h2 className="display text-2xl md:text-3xl leading-[1.15] text-lc-ink">{s.heading}</h2>
        {s.text && <p className="mt-4 text-lc-muted">{s.text}</p>}
      </div>
      <div className="flex flex-wrap gap-3">
        {s.primary && <Button to={s.primary.to} variant="yellow" size="lg" arrow>{s.primary.label}</Button>}
        {s.secondary && <Button to={s.secondary.to} variant="outline" size="lg">{s.secondary.label}</Button>}
      </div>
    </div>
  );
}

const renderers = { text: TextBlock, people: PeopleBlock, downloads: DownloadsBlock, documents: DocumentsBlock, cta: CtaBlock };

export default function StandardPage() {
  const { slug } = useParams();
  const data = getContent(slug);
  if (!data || data.template !== "standard") return <Navigate to="/" replace />;

  return (
    <>
      <PageHero eyebrow={data.eyebrow} title={data.title} subtitle={data.subtitle} />
      {data.sections.map((s, i) => {
        const R = renderers[s.type];
        if (!R) return null;
        const tone = i % 2 === 0 ? "paper" : "paper2";
        return (
          <Section key={i} tone={tone}>
            <R s={s} />
          </Section>
        );
      })}
    </>
  );
}
