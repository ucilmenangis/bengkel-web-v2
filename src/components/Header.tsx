"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Komponen", href: "#komponen" },
  { label: "Bengkel", href: "#bengkel" },
  { label: "Testimoni", href: "#testimoni" },
];

const ctaHref = "#kontak";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = [
      "layanan",
      "komponen",
      "bengkel",
      "testimoni",
      "kontak",
    ];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-[20px]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#"
          className="font-heading text-xl font-bold tracking-tight text-on-surface"
        >
          MODULAR<span className="text-primary">.</span>AUTO
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={`font-heading text-xs font-medium uppercase tracking-widest transition-colors hover:text-primary ${isActive ? "text-primary" : "text-on-surface-variant-strong"}`}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={ctaHref}
            className={`px-5 py-2 font-heading text-xs font-semibold uppercase tracking-widest transition-colors ${
              activeSection === "kontak"
                ? "bg-primary-container ring-1 ring-primary text-on-primary-container"
                : "bg-primary text-on-primary hover:bg-primary-container"
            }`}
          >
            Hubungi Kami
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      <AnimatePresence initial={false}>
        {menuOpen && (
          <motion.nav
            key="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1.0] }}
            className="overflow-hidden border-t border-surface-container-highest bg-surface md:hidden"
          >
            <div className="px-6 py-4">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={`block py-3 font-heading text-sm font-medium uppercase tracking-widest ${isActive ? "text-primary" : "text-on-surface-variant-strong"}`}
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href={ctaHref}
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-block bg-primary px-5 py-2 font-heading text-xs font-semibold uppercase tracking-widest text-on-primary"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
