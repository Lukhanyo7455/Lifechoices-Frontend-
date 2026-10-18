import React from "react";
import * as Icons from "lucide-react";
import { Users, User } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import Placeholder from "../components/common/Placeholder";
import { org, buildingBlocks, team } from "../mock";

const values = [
  { icon: "ShieldCheck", title: "Safety & Dignity", text: "Every young person deserves to feel safe, seen and valued." },
  { icon: "HeartHandshake", title: "Care First", text: "We build nurturing relationships that put wellbeing at the centre." },
  { icon: "TrendingUp", title: "Real Outcomes", text: "We track our impact openly and report on it every year." },
  { icon: "Users", title: "Community Rooted", text: "We work with schools, families and local organisations — not around them." }
];

export default function About() {
  return (
    <>
      <PageHero
        eyebrow={`Since ${org.established}`}
        title="Investing in young people so they can reach their potential."
        subtitle={org.intro}
      />

      {/* Story */}
      <Section tone="paper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6">
            <Reveal className="group relative">
              <div className="absolute -left-4 -top-4 hidden sm:block h-32 w-32 bg-lc-yellow/90 rounded-2xl shadow-[0_20px_40px_rgba(155,190,59,0.25)]" />
              <Placeholder label="Life Choices imagery" icon={Users} className="h-[440px] w-full" rounded="rounded-2xl" />
            </Reveal>
          </div>
          <div className="lg:col-span-6">
            <Reveal><p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Who We Are</p></Reveal>
            <Reveal delay={80}>
              <h2 className="display text-3xl md:text-[40px] leading-[1.1] text-lc-ink">
                Rooted in the Cape Flats, working for a fairer future.
              </h2>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-6 text-lg text-lc-ink/70">
                Since 2005, Life Choices has impacted the lives of more than 200,000 people from the Cape
                Flats. We work in schools, communities and from our campus in {org.location}, meeting young
                people where they are.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-4 text-lg text-lc-ink/70">{org.visionSupport}</p>
            </Reveal>
            <Reveal delay={260}>
              <div className="mt-8"><Button to="/interventions" variant="primary" arrow>See our programmes</Button></div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Vision statement band */}
      <Section tone="ink" size="lg" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
        <Reveal className="relative max-w-4xl mx-auto text-center">
          <p className="eyebrow-light justify-center mb-6">Our Vision</p>
          <p className="display text-3xl md:text-5xl leading-[1.15] text-white">
            “Every young person feels safe and valued. Every young person is free to thrive.”
          </p>
        </Reveal>
      </Section>

      {/* Approach / building blocks */}
      <Section id="approach" tone="paper2">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Our Approach</p></Reveal>
          <Reveal delay={80}>
            <h2 className="display text-3xl md:text-5xl leading-[1.08] text-lc-ink">
              The five building blocks of a thriving young life.
            </h2>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {buildingBlocks.map((b, i) => {
            const Icon = Icons[b.icon] || Icons.Circle;
            return (
              <Reveal key={b.key} delay={i * 70}>
                <div className="card-3d h-full p-6">
                  <span className="icon-tile flex h-12 w-12 items-center justify-center" style={{ backgroundColor: `${b.color}1F`, color: b.color }}>
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="display mt-5 text-lg text-lc-ink leading-tight">{b.title}</h3>
                  <p className="mt-2 text-sm text-lc-muted">{b.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>

      {/* Values */}
      <Section tone="paper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <Reveal><p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />What Guides Us</p></Reveal>
            <Reveal delay={80}><h2 className="display text-3xl md:text-4xl leading-[1.1] text-lc-ink">Values that shape every programme.</h2></Reveal>
          </div>
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v, i) => {
              return (
                <Reveal key={v.title} delay={i * 80}>
                  <div className="card-3d flex gap-5 p-6">
                    <span className="display text-3xl font-bold text-lc-yellowDeep leading-none">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <h3 className="display text-xl text-lc-ink">{v.title}</h3>
                      <p className="mt-1.5 text-[15px] text-lc-muted">{v.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section id="team" tone="paper2">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Meet the Team</p></Reveal>
          <Reveal delay={80}><h2 className="display text-3xl md:text-5xl leading-[1.08] text-lc-ink">The people behind Life Choices.</h2></Reveal>
          <Reveal delay={140}><p className="mt-5 text-lc-muted">Team members shown are placeholders for this prototype.</p></Reveal>
        </div>
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((m, i) => (
            <Reveal key={i} delay={i * 80}>
              <div className="card-3d group overflow-hidden">
                <Placeholder icon={User} label="Team portrait" className="h-64 w-full" rounded="rounded-none" />
                <div className="p-5">
                  <h3 className="display text-lg text-lc-ink">{m.name}</h3>
                  <p className="text-sm text-lc-yellowDeep font-semibold">{m.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}
