import React from "react";
import { User } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import Placeholder from "../components/common/Placeholder";
import { team } from "../mock";

export default function Team() {
  return (
    <>
      <PageHero
        eyebrow="Meet the Team"
        title="The people behind Life Choices."
        subtitle="A dedicated team of practitioners, coaches and social workers working across our campus, schools and communities."
      />

      <Section tone="paper">
        <Reveal>
          <p className="text-lc-muted">Team members shown are placeholders for this prototype.</p>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {team.map((m, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card-3d group overflow-hidden">
                {m.photo ? (
                  <img src={m.photo} alt={m.name} loading="lazy" className="h-64 w-full object-cover object-top" />
                ) : (
                  <Placeholder icon={User} label="Team portrait" className="h-64 w-full" rounded="rounded-none" />
                )}
                <div className="p-5">
                  <h3 className="display text-lg text-lc-ink">{m.name}</h3>
                  <p className="text-sm text-lc-yellowDeep font-semibold">{m.role}</p>
                  {m.bio && <p className="mt-3 text-sm leading-relaxed text-lc-muted">{m.bio}</p>}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="paper2">
        <div className="card-3d p-8 md:p-12 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="display text-2xl md:text-3xl leading-[1.15] text-lc-ink">Interested in joining our team?</h2>
            <p className="mt-4 text-lc-muted">We are always looking for people who care deeply about young people and their futures.</p>
          </div>
          <Button to="/contact" variant="primary" size="lg" arrow>Get in touch</Button>
        </div>
      </Section>
    </>
  );
}
