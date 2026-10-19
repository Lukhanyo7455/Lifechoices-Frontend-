import React, { useEffect, useRef } from "react";

// Premium abstract 3D atmosphere: soft light orbs, translucent glass panels,
// wireframe rings and floating geometric forms with CONTROLLED parallax.
// Always decorative, behind content, non-interactive and accessibility-safe.
export default function Atmosphere({ dark = false, variant = "section", className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const layers = Array.from(root.querySelectorAll(".atm-layer"));
    let mx = 0;
    let my = 0;
    let ticking = false;

    const render = () => {
      ticking = false;
      const rect = root.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      // progress: -1 (below) .. 0 (centered) .. 1 (above)
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh;
      layers.forEach((l) => {
        const s = parseFloat(l.dataset.speed || "3");
        const y = (-progress * s * 26).toFixed(2);
        const x = (mx * s * 8).toFixed(2);
        const rot = l.dataset.rot ? (progress * s * 6).toFixed(2) : 0;
        l.style.transform = `translate3d(${x}px, ${y}px, 0)${rot ? ` rotate(${rot}deg)` : ""}`;
      });
    };

    const request = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(render);
      }
    };

    const onScroll = () => request();
    const onMove = (e) => {
      mx = (e.clientX / (window.innerWidth || 1)) - 0.5;
      my = (e.clientY / (window.innerHeight || 1)) - 0.5;
      request();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    if (finePointer) window.addEventListener("pointermove", onMove, { passive: true });
    render();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (finePointer) window.removeEventListener("pointermove", onMove);
    };
  }, []);

  const green = dark ? "rgba(155,190,59,0.16)" : "rgba(155,190,59,0.20)";
  const blue = dark ? "rgba(46,98,216,0.14)" : "rgba(46,98,216,0.10)";
  const ringCls = dark ? "atm-ring atm-ring-dark" : "atm-ring";
  const panelCls = dark ? "atm-panel atm-panel-dark" : "atm-panel";
  const squareCls = dark ? "atm-square atm-square-dark" : "atm-square";

  return (
    <div ref={ref} className={`atm ${className}`} aria-hidden="true">
      {/* Soft light orb — top right */}
      <div className="atm-layer" data-speed="3" style={{ top: "-8%", right: "-6%" }}>
        <div className="atm-float atm-orb" style={{ width: 360, height: 360, background: green }} />
      </div>

      {/* Soft light orb — bottom left */}
      <div className="atm-layer" data-speed="5" style={{ bottom: "-14%", left: "-8%" }}>
        <div className="atm-float-slow atm-orb" style={{ width: 320, height: 320, background: blue }} />
      </div>

      {/* Wireframe ring */}
      <div className="atm-layer" data-speed="6" data-rot="1" style={{ top: "12%", right: "14%" }}>
        <div className={`atm-spin ${ringCls}`} style={{ width: 240, height: 240 }} />
      </div>

      {/* Translucent glass panel, tilted in perspective */}
      <div
        className="atm-layer"
        data-speed="2"
        style={{ top: variant === "hero" ? "28%" : "18%", left: "8%", transformStyle: "preserve-3d" }}
      >
        <div
          className={`atm-float ${panelCls}`}
          style={{ width: 200, height: 148, transform: "perspective(700px) rotateX(14deg) rotateY(-18deg)" }}
        />
      </div>

      {/* Small floating geometric square */}
      <div className="atm-layer" data-speed="8" data-rot="1" style={{ bottom: "16%", right: "9%" }}>
        <div
          className={`atm-float ${squareCls}`}
          style={{ width: 84, height: 84, transform: "perspective(600px) rotateX(-16deg) rotateY(20deg)" }}
        />
      </div>
    </div>
  );
}
