"use client";

import { useState } from "react";

const navLinks = [
  { label: "Layanan", href: "#layanan" },
  { label: "Komponen", href: "#komponen" },
  { label: "Bengkel", href: "#bengkel" },
  { label: "Testimoni", href: "#testimoni" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-[20px]">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="#" className="font-heading text-xl font-bold tracking-tight text-on-surface">
          MODULAR<span className="text-primary">.</span>AUTO
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-heading text-xs font-medium uppercase tracking-widest text-on-surface-variant-strong transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="bg-primary px-5 py-2 font-heading text-xs font-semibold uppercase tracking-widest text-on-primary transition-colors hover:bg-primary-container"
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
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="border-t border-surface-container-highest bg-surface px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-heading text-sm font-medium uppercase tracking-widest text-on-surface-variant-strong"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontak"
            onClick={() => setMenuOpen(false)}
            className="mt-2 inline-block bg-primary px-5 py-2 font-heading text-xs font-semibold uppercase tracking-widest text-on-primary"
          >
            Hubungi Kami
          </a>
        </nav>
      )}
    </header>
  );
}
