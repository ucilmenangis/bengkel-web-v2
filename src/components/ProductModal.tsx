"use client";

import { useEffect, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export interface Product {
  name: string;
  price: string;
  description: string;
  specs: { label: string; value: string }[];
  image: string;
}

export default function ProductModal({
  product,
  open,
  onClose,
}: {
  product: Product | null;
  open: boolean;
  onClose: () => void;
}) {
  const reduced = useReducedMotion();

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (open) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, handleKeyDown]);

  return (
    <AnimatePresence>
      {open && product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0 : 0.3 }}
          className="fixed inset-0 z-[100] flex items-end justify-center bg-on-surface/90 backdrop-blur-sm md:items-center"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={product.name}
        >
          <motion.div
            initial={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? { opacity: 0 } : { opacity: 0, y: 24 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl overflow-y-auto bg-surface-container-lowest"
          >
            {/* Image */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.image}
              alt={product.name}
              className="h-64 w-full object-cover md:h-80"
            />

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start justify-between">
                <h3 className="font-heading text-xl font-bold tracking-tight text-on-surface">
                  {product.name}
                </h3>
                <span className="font-heading text-xl font-black text-primary">
                  {product.price}
                </span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-on-surface-variant-strong">
                {product.description}
              </p>

              {/* Specs table */}
              {product.specs.length > 0 && (
                <div className="mt-6 border border-surface-container-highest">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-surface-container-highest">
                        <th className="px-4 py-2 text-left font-heading text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                          Spesifikasi
                        </th>
                        <th className="px-4 py-2 text-left font-heading text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                          Nilai
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.specs.map((spec) => (
                        <tr
                          key={spec.label}
                          className="border-b border-surface-container-highest last:border-b-0"
                        >
                          <td className="px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wider text-on-surface">
                            {spec.label}
                          </td>
                          <td className="px-4 py-2 text-sm text-on-surface-variant-strong">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* CTA */}
              <a
                href="#kontak"
                onClick={onClose}
                className="mt-6 inline-block bg-primary px-8 py-3 font-heading text-sm font-semibold uppercase tracking-widest text-on-primary transition-colors hover:bg-primary-container"
              >
                Hubungi Kami
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
