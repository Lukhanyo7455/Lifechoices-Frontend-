import React, { useState } from "react";
import { Heart, Check, Handshake, Megaphone, Users } from "lucide-react";
import { toast } from "sonner";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";

const amounts = [100, 250, 500, 1000];
const impactByAmount = {
  100: "Provides youth-friendly health information materials for a class.",
  250: "Supports a parenting workshop session for caregivers.",
  500: "Funds one-on-one coaching for a Leaders’ Quest learner.",
  1000: "Sponsors a young person’s work-readiness journey for a month."
};

const otherWays = [
  { icon: Handshake, title: "Corporate partnership", text: "Align your CSI with measurable youth-development outcomes on the Cape Flats." },
  { icon: Users, title: "Volunteer", text: "Share your skills and time as a mentor, coach or workshop facilitator." },
  { icon: Megaphone, title: "Advocate", text: "Champion youth voices and amplify our work within your network." }
];

export default function GetInvolved() {
  const [freq, setFreq] = useState("monthly");
  const [amount, setAmount] = useState(250);
  const [custom, setCustom] = useState("");

  const active = custom ? Number(custom) : amount;

  const donate = () => {
    if (!active || active <= 0) {
      toast.error("Please choose or enter a donation amount.");
      return;
    }
    toast.success(`Thank you! Your ${freq} gift of R${active.toLocaleString("en-US")} is ready (prototype demo).`);
  };

  return (
    <>
      <PageHero
        eyebrow="Get Involved"
        title="Your support changes the story for a young person."
        subtitle="Every contribution helps us heal, uplift and empower young people across Cape Town."
      />

      <Section tone="paper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Donation card */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="rounded-lg border border-lc-ink/10 bg-lc-paper2 p-7 md:p-9">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-md bg-lc-ink text-lc-yellow"><Heart className="h-5 w-5" /></span>
                  <h2 className="display text-2xl text-lc-ink">Make a donation</h2>
                </div>

                {/* Frequency */}
                <div className="mt-7 grid grid-cols-2 gap-2 rounded-md bg-lc-paper p-1 border border-lc-ink/10">
                  {["once", "monthly"].map((f) => (
                    <button key={f} onClick={() => setFreq(f)} className={`rounded-sm py-2.5 text-sm font-semibold capitalize transition-all ${freq === f ? "bg-lc-ink text-lc-paper" : "text-lc-ink/60"}`}>
                      {f === "once" ? "One-time" : "Monthly"}
                    </button>
                  ))}
                </div>

                {/* Amounts */}
                <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {amounts.map((a) => (
                    <button
                      key={a}
                      onClick={() => { setAmount(a); setCustom(""); }}
                      className={`rounded-md border py-3 font-semibold transition-all ${!custom && amount === a ? "border-lc-yellow bg-lc-yellow/15 text-lc-ink" : "border-lc-ink/15 text-lc-ink/70 hover:border-lc-ink"}`}
                    >
                      R{a}
                    </button>
                  ))}
                </div>

                <div className="mt-3">
                  <div className="flex items-center rounded-md border border-lc-ink/15 bg-lc-paper px-4">
                    <span className="font-semibold text-lc-muted">R</span>
                    <input
                      type="number"
                      value={custom}
                      onChange={(e) => setCustom(e.target.value)}
                      placeholder="Custom amount"
                      className="w-full bg-transparent px-2 py-3 text-lc-ink outline-none"
                    />
                  </div>
                </div>

                {active > 0 && impactByAmount[active] && (
                  <div className="mt-4 flex gap-2 rounded-md bg-lc-paper p-4 text-sm text-lc-ink/75 border border-lc-ink/10">
                    <Check className="h-4 w-4 shrink-0 text-lc-green mt-0.5" />
                    {impactByAmount[active]}
                  </div>
                )}

                <div className="mt-6">
                  <Button onClick={donate} variant="yellow" size="lg" arrow className="w-full">
                    Donate R{(active || 0).toLocaleString("en-US")} {freq === "monthly" ? "/ month" : ""}
                  </Button>
                </div>
                <p className="mt-3 text-center text-xs text-lc-muted">Prototype demo — no payment is processed.</p>
              </div>
            </Reveal>
          </div>

          {/* Why give */}
          <div className="lg:col-span-6">
            <Reveal><p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Why Give</p></Reveal>
            <Reveal delay={80}><h2 className="display text-3xl md:text-4xl leading-[1.1] text-lc-ink">A gift that goes further.</h2></Reveal>
            <Reveal delay={140}>
              <p className="mt-5 text-lg text-lc-ink/70">
                For nearly two decades, Life Choices has invested in young people across the Cape Flats.
                Your support helps us keep our programmes free, local and rooted in care.
              </p>
            </Reveal>
            <div className="mt-8 space-y-4">
              {["100% programme-focused impact", "Trusted since 2005", "Transparent annual reporting"].map((t, i) => (
                <Reveal key={i} delay={180 + i * 60}>
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lc-green/15 text-lc-green"><Check className="h-4 w-4" /></span>
                    <span className="text-lc-ink">{t}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Other ways */}
      <Section tone="paper2">
        <div className="max-w-2xl">
          <Reveal><p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Beyond Giving</p></Reveal>
          <Reveal delay={80}><h2 className="display text-3xl md:text-4xl leading-[1.1] text-lc-ink">Other ways to get involved.</h2></Reveal>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherWays.map((w, i) => {
            const Icon = w.icon;
            return (
              <Reveal key={w.title} delay={i * 90}>
                <div className="h-full rounded-lg border border-lc-ink/10 bg-lc-paper p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-md" style={{ backgroundColor: "#14181F", color: "#FFC629" }}><Icon className="h-6 w-6" /></span>
                  <h3 className="display mt-6 text-2xl text-lc-ink">{w.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-lc-muted">{w.text}</p>
                  <div className="mt-6"><Button to="/contact" variant="ghost" size="sm" arrow className="px-0">Enquire</Button></div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Section>
    </>
  );
}
