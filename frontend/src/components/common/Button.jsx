import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

// Institutional CTA button. Renders a router Link, external anchor, or button.
export default function Button({
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  arrow = false,
  className = "",
  children,
  type = "button"
}) {
  const base =
    "group inline-flex items-center justify-center gap-2 font-semibold tracking-tight transition-all duration-300 rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-lc-ink/60";
  const sizes = {
    sm: "text-sm px-4 py-2.5",
    md: "text-[15px] px-6 py-3.5",
    lg: "text-base px-8 py-4"
  };
  const variants = {
    primary:
      "bg-lc-ink text-lc-paper hover:bg-lc-ink2 shadow-[0_1px_0_rgba(0,0,0,0.1)] hover:-translate-y-0.5",
    yellow:
      "bg-lc-yellow text-lc-ink hover:bg-lc-yellowDeep hover:-translate-y-0.5",
    outline:
      "border border-lc-ink/25 text-lc-ink hover:border-lc-ink hover:bg-lc-ink hover:text-lc-paper",
    outlineLight:
      "border border-white/35 text-white hover:bg-white hover:text-lc-ink",
    ghost: "text-lc-ink hover:text-lc-yellowDeep"
  };
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const inner = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} onClick={onClick} className={cls}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} onClick={onClick} className={cls}>
      {inner}
    </button>
  );
}
