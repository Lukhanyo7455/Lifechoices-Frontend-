import React from "react";
import { Building2 } from "lucide-react";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import { donorsPresent, donorsPrevious } from "../mock";

function LogoTile({ name, muted }) {
  return (
    <div className={`card-3d flex h-24 items-center justify-center px-4 text-center ${muted ? "opacity-80" : ""}`}>
      <span className="text-sm font-semibold leading-snug text-lc-ink/70">{name}</span>
    </div>
  );
}

export default function Donors() {
  return (
    <>
      <PageHero
        eyebrow="Our Donors"
        title="Partnerships that make our mission possible."
        subtitle="Ongoing partnership with a range of different donors is critical to ensure that Life Choices is able to fulfil its mission."
      />

      <Section tone="paper">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Our Present Donors</p></Reveal>
          <Reveal delay={80}><h2 className="display text-3xl md:text-4xl leading-[1.1] text-lc-ink">Standing with us today.</h2></Reveal>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
          {donorsPresent.map((d, i) => (
            <Reveal key={d} delay={(i % 4) * 60}>
              <LogoTile name={d} />
            </Reveal>
          ))}
        </div>
        <Reveal delay={120}>
          <p className="mt-8 text-sm text-lc-muted">Donor names are real; logos are shown as placeholder tiles for this prototype.</p>
        </Reveal>
      </Section>

      <Section tone="paper2">
        <div className="max-w-3xl">
          <Reveal><p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Donors From Previous Years</p></Reveal>
          <Reveal delay={80}>
            <h2 className="display text-3xl md:text-4xl leading-[1.1] text-lc-ink">Gratitude for the journey so far.</h2>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-5 text-lg text-lc-ink/70">
              We are eternally grateful to anyone that has supported our journey. Thank you for your
              contribution — we would not be where we are today without you.
            </p>
          </Reveal>
        </div>
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-5">
          {donorsPrevious.map((d, i) => (
            <Reveal key={d} delay={(i % 6) * 50}>
              <LogoTile name={d} muted />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ink" size="lg" className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-grid-dark opacity-50" />
        <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-xl">
            <span className="icon-tile inline-flex h-12 w-12 items-center justify-center bg-white/10 text-lc-yellow"><Building2 className="h-6 w-6" /></span>
            <h2 className="display mt-6 text-3xl md:text-4xl leading-[1.1] text-white">Become a Life Choices partner.</h2>
            <p className="mt-4 text-lg text-white/70">Join a community of funders and partners investing in the potential of young people.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/get-involved" variant="yellow" size="lg" arrow>Support our work</Button>
            <Button to="/contact" variant="outlineLight" size="lg">Partner with us</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
