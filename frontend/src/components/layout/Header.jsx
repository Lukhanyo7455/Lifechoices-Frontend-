import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Home,
  HeartPulse,
  Compass,
  GraduationCap,
  Briefcase,
  ShieldCheck
} from "lucide-react";
import { nav } from "../../mock";

const iconMap = { Home, HeartPulse, Compass, GraduationCap, Briefcase, ShieldCheck };

function Logo() {
  return (
    <Link to="/" className="flex items-center shrink-0" aria-label="Life Choices home">
      <span className="flex items-center rounded-xl bg-lc-ink px-3 py-2">
        <img src="/brand/logo.png" alt="Life Choices" className="h-7 w-auto md:h-8" />
      </span>
    </Link>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSub, setMobileSub] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileSub(null);
    setActiveMenu(null);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [mobileOpen]);

  const isActive = (to) => (to === "/" ? location.pathname === "/" : location.pathname.startsWith(to));

  return (
    <header className="fixed top-0 left-0 right-0 z-50" onMouseLeave={() => setActiveMenu(null)}>
      <div className="container-lc relative">
        <div
          className={`glass-nav ${scrolled ? "is-scrolled" : ""} mt-3 flex h-[64px] items-center justify-between gap-4 rounded-2xl px-3 md:px-5 transition-all duration-500`}
        >
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {nav.map((item) => {
              const hasMenu = item.type === "dropdown" || item.type === "mega";
              return (
                <div key={item.label} className="relative" onMouseEnter={() => hasMenu && setActiveMenu(item.label)}>
                  <Link
                    to={item.to}
                    className={`relative flex items-center gap-1 rounded-lg px-3.5 py-2 text-[14px] font-medium transition-colors ${
                      isActive(item.to) || activeMenu === item.label
                        ? "text-lc-ink"
                        : "text-lc-ink/60 hover:text-lc-ink"
                    }`}
                  >
                    {item.label}
                    {hasMenu && (
                      <ChevronDown
                        className={`h-3.5 w-3.5 transition-transform duration-300 ${
                          activeMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <span
                      className={`absolute left-3.5 right-3.5 -bottom-0.5 h-0.5 rounded-full bg-lc-yellow transition-transform duration-300 origin-left ${
                        isActive(item.to) ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <Link
              to="/get-involved"
              className="rounded-lg px-3.5 py-2 text-[14px] font-medium text-lc-ink/70 transition-colors hover:text-lc-ink"
            >
              Get Involved
            </Link>
            <Link
              to="/get-involved"
              className="group inline-flex items-center gap-1.5 rounded-lg bg-lc-yellow px-4 py-2 text-[14px] font-semibold text-lc-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_6px_16px_rgba(155,190,59,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lc-yellowDeep hover:text-white"
            >
              Donate
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-lc-ink"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Desktop dropdown / mega panels */}
        {activeMenu &&
          nav
            .filter((i) => i.label === activeMenu && (i.type === "dropdown" || i.type === "mega"))
            .map((item) => (
              <div key={item.label} className="hidden lg:block absolute left-0 right-0 top-[76px] menu-in">
                <div className={`glass-panel rounded-2xl p-6 ${item.type === "mega" ? "" : "max-w-3xl"}`}>
                  {item.type === "mega" ? (
                    <div className="grid grid-cols-12 gap-6">
                      <div className="col-span-8">
                        <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-lc-yellowDeep">
                          Our Interventions
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          {item.items.map((sub) => {
                            const Icon = iconMap[sub.icon] || Home;
                            return (
                              <Link key={sub.to} to={sub.to} className="glass-item group flex gap-3.5 rounded-xl p-3.5">
                                <span
                                  className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg"
                                  style={{ backgroundColor: `${sub.color}1F`, color: sub.color }}
                                >
                                  <Icon className="h-5 w-5" />
                                </span>
                                <span>
                                  <span className="flex items-center gap-1 font-semibold text-lc-ink">
                                    {sub.label}
                                    <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                  </span>
                                  <span className="mt-0.5 block text-[12.5px] leading-snug text-lc-muted">
                                    {sub.desc}
                                  </span>
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                      <div className="col-span-4">
                        <div className="flex h-full flex-col justify-between rounded-xl bg-lc-ink p-6">
                          <div>
                            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-lc-yellow">
                              Since 2005
                            </p>
                            <p className="display text-xl leading-tight text-white">
                              Interlocking programmes that help youth thrive.
                            </p>
                          </div>
                          <Link to="/interventions" className="mt-6 inline-flex items-center gap-2 font-semibold text-lc-yellow">
                            Explore all our work
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-2">
                      {item.items.map((sub) => (
                        <Link key={sub.to + sub.label} to={sub.to} className="glass-item group rounded-xl p-4">
                          <span className="flex items-center gap-1 font-semibold text-lc-ink">
                            {sub.label}
                            <ArrowUpRight className="h-4 w-4 text-lc-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                          </span>
                          <span className="mt-1 block text-[12.5px] leading-snug text-lc-muted">{sub.desc}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
      </div>

      {/* Mobile drawer (white glass) */}
      <div
        className={`lg:hidden fixed inset-0 top-0 z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="glass-panel h-full overflow-y-auto px-6 pt-24 pb-28">
          {nav.map((item) => {
            const hasMenu = item.type === "dropdown" || item.type === "mega";
            const open = mobileSub === item.label;
            return (
              <div key={item.label} className="border-b border-lc-ink/10">
                <div className="flex items-center justify-between">
                  <Link to={item.to} className="py-4 text-lg font-medium text-lc-ink">
                    {item.label}
                  </Link>
                  {hasMenu && (
                    <button
                      className="p-3 text-lc-ink/60"
                      onClick={() => setMobileSub(open ? null : item.label)}
                      aria-label={`Toggle ${item.label}`}
                    >
                      <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {hasMenu && (
                  <div className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[640px]" : "max-h-0"}`}>
                    <div className="pb-4 pl-2">
                      {item.items.map((sub) => {
                        const Icon = iconMap[sub.icon] || Home;
                        return (
                          <Link
                            key={sub.to + sub.label}
                            to={sub.to}
                            className="flex items-center gap-3 py-3 text-[15px] text-lc-ink/70"
                          >
                            {sub.icon && (
                              <span
                                className="flex h-8 w-8 items-center justify-center rounded-lg"
                                style={{ backgroundColor: `${sub.color || "#9BBE3B"}1F`, color: sub.color || "#9BBE3B" }}
                              >
                                <Icon className="h-4 w-4" />
                              </span>
                            )}
                            {sub.label}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className="mt-8 flex flex-col gap-3">
            <Link to="/get-involved" className="rounded-xl border border-lc-ink/20 px-6 py-3.5 text-center font-semibold text-lc-ink">
              Get Involved
            </Link>
            <Link to="/get-involved" className="rounded-xl bg-lc-yellow px-6 py-3.5 text-center font-semibold text-lc-ink">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
