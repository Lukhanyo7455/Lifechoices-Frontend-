import React from "react";
import { ImageIcon } from "lucide-react";

// Clean, branded image placeholder used across the redesign.
// Marks exactly where existing Life Choices imagery can be inserted later.
export default function Placeholder({
  label = "Life Choices imagery",
  className = "",
  rounded = "rounded-xl",
  icon: Icon = ImageIcon,
  dark = false,
  accent
}) {
  return (
    <div className={`ph ${dark ? "ph-dark" : ""} ${rounded} ${className}`}>
      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <span
          className={`flex h-14 w-14 items-center justify-center rounded-xl ${
            dark ? "bg-white/10" : "bg-white"
          } icon-tile`}
        >
          <Icon className="h-6 w-6" style={{ color: accent || "#6E9327" }} />
        </span>
        <span
          className={`text-[11px] font-semibold uppercase tracking-[0.18em] ${
            dark ? "text-white/45" : "text-lc-ink/40"
          }`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}
