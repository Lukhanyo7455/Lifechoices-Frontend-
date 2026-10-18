import React from "react";
import Atmosphere from "./Atmosphere";

// Reusable section wrapper with consistent vertical rhythm and background tones.
export default function Section({
  id,
  tone = "paper",
  className = "",
  containerClassName = "",
  children,
  size = "lg",
  atmosphere
}) {
  const tones = {
    paper: "bg-lc-paper text-lc-ink",
    paper2: "bg-lc-paper2 text-lc-ink",
    ink: "bg-lc-ink text-lc-paper",
    greenDark: "bg-lc-greenDark text-lc-paper",
    white: "bg-white text-lc-ink"
  };
  const sizes = {
    sm: "py-14 md:py-16",
    lg: "py-20 md:py-28",
    xl: "py-24 md:py-36"
  };
  // Dark sections get atmosphere by default; light sections can opt in.
  const showAtm = atmosphere !== undefined ? atmosphere : tone === "ink";
  const isDark = tone === "ink" || tone === "greenDark";
  return (
    <section id={id} className={`relative overflow-hidden ${tones[tone]} ${sizes[size]} ${className}`}>
      {showAtm && <Atmosphere dark={isDark} />}
      <div className={`container-lc relative z-10 ${containerClassName}`}>{children}</div>
    </section>
  );
}
