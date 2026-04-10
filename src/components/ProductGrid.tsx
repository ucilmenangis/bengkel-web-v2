"use client";

import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import type { Product } from "@/components/ProductModal";

export default function ProductGrid({
  products,
}: {
  products: Product[];
}) {
  const [selected, setSelected] = useState<Product | null>(null);

  return (
    <>
      <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
        {products.map((product) => (
          <StaggerItem key={product.name}>
            <ProductCard product={product} onSelect={setSelected} />
          </StaggerItem>
        ))}
      </StaggerContainer>
      <ProductModal
        product={selected}
        open={selected !== null}
        onClose={() => setSelected(null)}
      />
    </>
  );
}
