import React from "react";

// Clean, branded image placeholder used across the redesign. Marks exactly
// where existing Life Choices imagery can be inserted later. Intentionally
// icon-free to suit the editorial, no-decorative-icons design system.
export default function Placeholder({
  label = "Life Choices imagery",
  className = "",
  rounded = "rounded-xl",
  dark = false
}) {
  return (
    <div className={`ph ${dark ? "ph-dark" : ""} ${rounded} ${className}`}>
      <span
        className={`relative z-10 px-6 text-center text-[11px] font-semibold uppercase tracking-[0.2em] ${
          dark ? "text-white/45" : "text-lc-ink/35"
        }`}
      >
        {label}
      </span>
    </div>
  );
}
