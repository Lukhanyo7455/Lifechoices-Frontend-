import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import PageHero from "../components/common/PageHero";
import Section from "../components/common/Section";
import Reveal from "../components/common/Reveal";
import Button from "../components/common/Button";
import { org } from "../mock";

const subjects = ["General enquiry", "Partnership", "Volunteering", "Media", "Donations"];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: subjects[0], message: "" });

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please complete your name, email and message.");
      return;
    }
    toast.success("Thank you — your message has been sent (prototype demo).");
    setForm({ name: "", email: "", subject: subjects[0], message: "" });
  };

  const info = [
    { icon: MapPin, label: "Visit us", value: org.address },
    { icon: Mail, label: "Email", value: org.email },
    { icon: Phone, label: "Call", value: org.phone },
    { icon: Clock, label: "Hours", value: "Mon–Fri, 08:30–16:30 SAST" }
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let’s start a conversation."
        subtitle="Whether you want to partner, volunteer or simply learn more, we’d love to hear from you."
      />

      <Section tone="paper">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form onSubmit={submit} className="card-3d p-7 md:p-9">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-lc-ink mb-2">Full name</label>
                    <input value={form.name} onChange={update("name")} className="w-full rounded-md border border-lc-ink/15 bg-lc-paper px-4 py-3 text-lc-ink outline-none transition-colors focus:border-lc-ink" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-lc-ink mb-2">Email</label>
                    <input type="email" value={form.email} onChange={update("email")} className="w-full rounded-md border border-lc-ink/15 bg-lc-paper px-4 py-3 text-lc-ink outline-none transition-colors focus:border-lc-ink" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="mt-5">
                  <label className="block text-sm font-semibold text-lc-ink mb-2">Subject</label>
                  <select value={form.subject} onChange={update("subject")} className="w-full rounded-md border border-lc-ink/15 bg-lc-paper px-4 py-3 text-lc-ink outline-none transition-colors focus:border-lc-ink">
                    {subjects.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </div>
                <div className="mt-5">
                  <label className="block text-sm font-semibold text-lc-ink mb-2">Message</label>
                  <textarea rows={5} value={form.message} onChange={update("message")} className="w-full rounded-md border border-lc-ink/15 bg-lc-paper px-4 py-3 text-lc-ink outline-none transition-colors focus:border-lc-ink resize-none" placeholder="How can we help?" />
                </div>
                <div className="mt-6">
                  <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                    <Send className="h-4 w-4" /> Send message
                  </Button>
                </div>
              </form>
            </Reveal>
          </div>

          {/* Info */}
          <div className="lg:col-span-5">
            <Reveal><p className="eyebrow mb-5"><span className="h-px w-8 bg-lc-yellowDeep" />Reach Us</p></Reveal>
            <div className="space-y-6">
              {info.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={i} delay={i * 70}>
                    <div className="flex gap-4">
                      <span className="icon-tile flex h-11 w-11 shrink-0 items-center justify-center bg-lc-ink text-lc-yellow"><Icon className="h-5 w-5" /></span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-widest text-lc-muted">{item.label}</p>
                        <p className="mt-1 text-lc-ink">{item.value}</p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
            <Reveal delay={200} className="card-3d mt-8 overflow-hidden">
              <iframe
                title="Life Choices location"
                src="https://www.google.com/maps?q=Lansdowne,Cape%20Town&output=embed"
                className="h-64 w-full grayscale"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  );
}
