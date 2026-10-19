import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Linkedin, Facebook, Instagram } from "lucide-react";
import { org, programmes } from "../../mock";
import Button from "../common/Button";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-lc-ink text-lc-paper">
      {/* CTA band */}
      <div className="border-b border-white/10">
        <div className="container-lc py-14 md:py-16 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div>
            <p className="eyebrow-light mb-3">Be part of the change</p>
            <h3 className="display text-3xl md:text-4xl max-w-xl">
              Invest in a young person’s future today.
            </h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button to="/get-involved" variant="yellow" size="lg" arrow>Donate now</Button>
            <Button to="/contact" variant="outlineLight" size="lg">Partner with us</Button>
          </div>
        </div>
      </div>

      <div className="container-lc py-14 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-4">
          <div className="flex items-center">
            <img src="/brand/logo.png" alt="Life Choices" className="h-9 w-auto" />
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/65">
            An innovative youth development organisation based in Cape Town, investing in young people so
            they can reach their potential.
          </p>
          <div className="mt-6 flex gap-3">
            {[Linkedin, Facebook, Instagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/15 text-white/70 transition-colors hover:border-lc-yellow hover:text-lc-yellow"
                aria-label="Social link"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Organisation</p>
          <ul className="mt-4 space-y-3 text-sm">
            <li><Link to="/about" className="text-white/75 hover:text-lc-yellow">About Us</Link></li>
            <li><Link to="/team" className="text-white/75 hover:text-lc-yellow">Meet The Team</Link></li>
            <li><Link to="/meet-the-board" className="text-white/75 hover:text-lc-yellow">Meet the Board</Link></li>
            <li><Link to="/donors" className="text-white/75 hover:text-lc-yellow">Donors</Link></li>
            <li><Link to="/annual-reports" className="text-white/75 hover:text-lc-yellow">Annual Reports</Link></li>
            <li><Link to="/legal-documents" className="text-white/75 hover:text-lc-yellow">Legal Documents</Link></li>
            <li><Link to="/sustainability" className="text-white/75 hover:text-lc-yellow">Sustainability</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Our Work</p>
          <ul className="mt-4 space-y-3 text-sm">
            {programmes.map((p) => (
              <li key={p.slug}>
                <Link to={`/interventions/${p.slug}`} className="text-white/75 hover:text-lc-yellow">
                  {p.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Visit / Contact</p>
          <ul className="mt-4 space-y-5 text-sm text-white/75">
            <li>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-lc-yellow">Visit</span>
              <span className="mt-1 block">{org.address}</span>
            </li>
            <li>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-lc-yellow">Email</span>
              <a href={`mailto:${org.email}`} className="mt-1 block hover:text-lc-yellow">{org.email}</a>
            </li>
            <li>
              <span className="block text-[11px] font-semibold uppercase tracking-[0.16em] text-lc-yellow">Call</span>
              <a href={`tel:${org.phone.replace(/\s/g, "")}`} className="mt-1 block hover:text-lc-yellow">{org.phone}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-lc py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} Life Choices. Redesign prototype. Not the official website.</p>
          <p className="flex items-center gap-1">
            Registered NPO · PBO · Cape Town, South Africa
          </p>
        </div>
      </div>
    </footer>
  );
}
