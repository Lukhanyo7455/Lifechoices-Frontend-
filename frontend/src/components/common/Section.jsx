import React from "react";

// Reusable section wrapper with consistent vertical rhythm and background tones.
export default function Section({
  id,
  tone = "paper",
  className = "",
  containerClassName = "",
  children,
  size = "lg"
}) {
  const tones = {
    paper: "bg-lc-paper text-lc-ink",
    paper2: "bg-lc-paper2 text-lc-ink",
    ink: "bg-lc-ink text-lc-paper",
    white: "bg-white text-lc-ink"
  };
  const sizes = {
    sm: "py-14 md:py-16",
    lg: "py-20 md:py-28",
    xl: "py-24 md:py-36"
  };
  return (
    <section id={id} className={`${tones[tone]} ${sizes[size]} ${className}`}>
      <div className={`container-lc ${containerClassName}`}>{children}</div>
    </section>
  );
}
