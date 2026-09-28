import React from "react";
import { Heart, Handshake, Megaphone } from "lucide-react";
import Button from "../common/Button";
import Reveal from "../common/Reveal";

const ways = [
  { icon: Heart, title: "Donate", text: "Fund a young person\u2019s journey through our programmes.", to: "/get-involved" },
  { icon: Handshake, title: "Partner", text: "Collaborate with us as a school, funder or corporate partner.", to: "/contact" },
  { icon: Megaphone, title: "Advocate", text: "Amplify youth voices and champion change in your network.", to: "/contact" }
];

export default function CTA() {
  return (
    <section className="bg-lc-paper py-24 md:py-32">
      <div className="container-lc">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Get Involved</p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="display text-3xl md:text-5xl leading-[1.08] text-lc-ink">
              There are many ways to change the story.
            </h2>
          </Reveal>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ways.map((w, i) => {
            const Icon = w.icon;
            return (
              <Reveal key={w.title} delay={i * 90}>
                <div className="card-3d group h-full p-8">
                  <span className="icon-tile flex h-12 w-12 items-center justify-center bg-lc-ink text-lc-yellow">
                    <Icon className="h-6 w-6" />
                  </span>
                  <h3 className="display mt-6 text-2xl text-lc-ink">{w.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-lc-muted">{w.text}</p>
                  <div className="mt-6">
                    <Button to={w.to} variant="ghost" size="sm" arrow className="px-0">Learn more</Button>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
