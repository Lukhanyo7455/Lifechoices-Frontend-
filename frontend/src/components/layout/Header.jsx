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
  Briefcase
} from "lucide-react";
import { nav } from "../../mock";
import Button from "../common/Button";

const iconMap = { Home, HeartPulse, Compass, GraduationCap, Briefcase };

function Logo({ light }) {
  return (
    <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Life Choices home">
      <span className="inline-block h-7 w-2 rounded-sm bg-lc-yellow" />
      <span className="leading-none">
        <span className={`display text-2xl italic font-semibold ${light ? "text-white" : "text-lc-ink"}`}>life</span>
        <span className={`display text-2xl font-semibold ${light ? "text-white" : "text-lc-ink"}`}>choices</span>
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-lc-paper/95 backdrop-blur-md border-b border-lc-ink/10 shadow-[0_8px_30px_rgba(20,24,31,0.06)]"
          : "bg-lc-paper border-b border-transparent"
      }`}
      onMouseLeave={() => setActiveMenu(null)}
    >
      <div className="container-lc">
        <div className="flex h-[74px] items-center justify-between">
          <Logo />

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {nav.map((item) => {
              const hasMenu = item.type === "dropdown" || item.type === "mega";
              return (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => hasMenu && setActiveMenu(item.label)}
                >
                  <Link
                    to={item.to}
                    className={`flex items-center gap-1 px-4 py-2 text-[15px] font-medium transition-colors ${
                      isActive(item.to) ? "text-lc-ink" : "text-lc-ink/70 hover:text-lc-ink"
                    }`}
                  >
                    {item.label}
                    {hasMenu && (
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-300 ${
                          activeMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                    <span
                      className={`absolute left-4 right-4 -bottom-0.5 h-0.5 bg-lc-yellow transition-transform duration-300 origin-left ${
                        isActive(item.to) ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </div>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button to="/get-involved" variant="ghost" size="sm">Get Involved</Button>
            <Button to="/get-involved" variant="yellow" size="sm" arrow>Donate</Button>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-sm text-lc-ink"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Desktop dropdown / mega panels */}
      {activeMenu &&
        nav
          .filter((i) => i.label === activeMenu && (i.type === "dropdown" || i.type === "mega"))
          .map((item) => (
            <div
              key={item.label}
              className="hidden lg:block absolute left-0 right-0 top-full border-t border-lc-ink/10 bg-lc-paper/98 backdrop-blur-md shadow-[0_30px_60px_rgba(20,24,31,0.12)]"
            >
              <div className="container-lc py-9 menu-in">
                {item.type === "mega" ? (
                  <div className="grid grid-cols-12 gap-8">
                    <div className="col-span-8">
                      <p className="eyebrow mb-5">Our Interventions</p>
                      <div className="grid grid-cols-2 gap-x-8 gap-y-1">
                        {item.items.map((sub) => {
                          const Icon = iconMap[sub.icon] || Home;
                          return (
                            <Link
                              key={sub.to}
                              to={sub.to}
                              className="group flex gap-4 rounded-md p-4 -mx-4 transition-colors hover:bg-lc-paper2"
                            >
                              <span
                                className="mt-0.5 flex h-11 w-11 shrink-0 items-center justify-center rounded-md"
                                style={{ backgroundColor: `${sub.color}18`, color: sub.color }}
                              >
                                <Icon className="h-5 w-5" />
                              </span>
                              <span>
                                <span className="flex items-center gap-1 font-semibold text-lc-ink">
                                  {sub.label}
                                  <ArrowRight className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all group-hover:opacity-100 group-hover:translate-x-0" />
                                </span>
                                <span className="mt-0.5 block text-[13px] leading-snug text-lc-muted">
                                  {sub.desc}
                                </span>
                              </span>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                    <div className="col-span-4">
                      <div className="flex h-full flex-col justify-between rounded-lg bg-lc-ink p-7 text-lc-paper">
                        <div>
                          <p className="eyebrow-light mb-3">Since 2005</p>
                          <p className="display text-2xl leading-tight">
                            Interlocking programmes that help youth thrive.
                          </p>
                        </div>
                        <Link
                          to="/interventions"
                          className="mt-6 inline-flex items-center gap-2 font-semibold text-lc-yellow"
                        >
                          Explore all our work
                          <ArrowRight className="h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="grid grid-cols-3 gap-4 max-w-4xl">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.to + sub.label}
                        to={sub.to}
                        className="group rounded-md p-5 -m-1 transition-colors hover:bg-lc-paper2"
                      >
                        <span className="flex items-center gap-1 font-semibold text-lc-ink">
                          {sub.label}
                          <ArrowUpRight className="h-4 w-4 text-lc-muted transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                        <span className="mt-1 block text-[13px] leading-snug text-lc-muted">{sub.desc}</span>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[74px] z-40 bg-lc-paper transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full overflow-y-auto px-6 py-6 pb-28">
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
                      className="p-3 text-lc-ink"
                      onClick={() => setMobileSub(open ? null : item.label)}
                      aria-label={`Toggle ${item.label}`}
                    >
                      <ChevronDown className={`h-5 w-5 transition-transform ${open ? "rotate-180" : ""}`} />
                    </button>
                  )}
                </div>
                {hasMenu && (
                  <div
                    className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[600px]" : "max-h-0"}`}
                  >
                    <div className="pb-4 pl-3">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.to + sub.label}
                          to={sub.to}
                          className="block py-2.5 text-[15px] text-lc-ink/75"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
          <div className="mt-8 flex flex-col gap-3">
            <Button to="/get-involved" variant="outline" size="md">Get Involved</Button>
            <Button to="/get-involved" variant="yellow" size="md" arrow>Donate</Button>
          </div>
        </div>
      </div>
    </header>
  );
}
