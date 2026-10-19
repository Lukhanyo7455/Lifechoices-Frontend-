import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const KEY = "lc_welcome_seen";
const GREEN = "#ABCC37";
const EASE = [0.22, 1, 0.36, 1];

// Cinematic, once-per-session brand intro: black screen, an official-green
// wipe reveals the logo on black, then the large white "Welcome to Life Choices"
// slides up through a mask before the overlay fades into the homepage.
// Respects reduced-motion (skips entirely) and auto-dismisses without a click.
export default function Welcome() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const seen = typeof sessionStorage !== "undefined" && sessionStorage.getItem(KEY);
    if (seen || reduced) {
      if (reduced && typeof sessionStorage !== "undefined") sessionStorage.setItem(KEY, "1");
      return;
    }
    setShow(true);
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => {
      sessionStorage.setItem(KEY, "1");
      document.body.style.overflow = "";
      setShow(false);
    }, 3600);
    return () => {
      clearTimeout(t);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          key="welcome"
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden bg-black"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: EASE } }}
          aria-hidden="true"
          data-testid="welcome-overlay"
        >
          {/* Official-green reveal wipe (in from left, out to right) */}
          <motion.div
            className="absolute inset-0"
            style={{ backgroundColor: GREEN }}
            initial={{ x: "-100%" }}
            animate={{ x: ["-100%", "0%", "0%", "112%"] }}
            transition={{ duration: 1.6, times: [0, 0.34, 0.5, 1], ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
          />

          {/* Logo, revealed on the black stage */}
          <motion.img
            src="/brand/logo.png"
            alt="Life Choices"
            className="relative z-10 h-14 w-auto md:h-20"
            initial={{ opacity: 0, y: 18, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.3 }}
            draggable="false"
          />

          {/* Masked "Welcome to Life Choices" */}
          <div className="relative z-10 mt-7 overflow-hidden md:mt-9">
            <motion.h1
              className="display px-6 text-center text-[2.1rem] font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl"
              initial={{ y: "115%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 0.9, ease: EASE, delay: 1.75 }}
            >
              Welcome to Life Choices
            </motion.h1>
          </div>

          {/* Green accent underline */}
          <motion.span
            className="relative z-10 mt-8 block h-[3px] rounded-full"
            style={{ backgroundColor: GREEN }}
            initial={{ width: 0 }}
            animate={{ width: 170 }}
            transition={{ duration: 0.7, ease: EASE, delay: 2.55 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
