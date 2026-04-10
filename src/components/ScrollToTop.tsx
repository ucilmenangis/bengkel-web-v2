"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: reduced ? "auto" : "smooth" });
  }, [reduced]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          animate={reduced ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 flex h-11 w-11 items-center justify-center bg-primary text-on-primary shadow-lg"
          aria-label="Scroll ke atas"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="square"
          >
            <path d="M10 16V4M4 10l6-6 6 6" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
