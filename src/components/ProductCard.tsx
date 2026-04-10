"use client";

import type { Product } from "@/components/ProductModal";

export default function ProductCard({
  product,
  onSelect,
}: {
  product: Product;
  onSelect: (product: Product) => void;
}) {
  return (
    <div className="bg-surface-container-lowest group">
      {/* Product image with Spec HUD */}
      <div className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.name}
          className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Spec HUD overlay */}
        <div className="absolute bottom-0 left-0 right-0 flex bg-surface-container-highest/90 backdrop-blur-sm">
          {product.specs.map((spec, i) => (
            <div
              key={spec.label}
              className={`flex-1 px-4 py-2 ${i > 0 ? "border-l border-on-surface/10" : ""}`}
            >
              <span className="block font-heading text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                {spec.label}
              </span>
              <span className="block font-heading text-sm font-bold text-on-surface">
                {spec.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Product info */}
      <div className="p-6">
        <h3 className="font-heading text-base font-bold tracking-tight text-on-surface">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-on-surface-variant-strong">
          {product.description}
        </p>
        <div className="mt-4 flex items-center justify-between">
          <span className="font-heading text-xl font-black text-primary">
            {product.price}
          </span>
          <button
            onClick={() => onSelect(product)}
            className="bg-surface-container-highest px-5 py-2 font-heading text-xs font-semibold uppercase tracking-wider text-on-surface transition-colors hover:bg-primary hover:text-on-primary"
          >
            Lihat Spesifikasi
          </button>
        </div>
      </div>
    </div>
  );
}
