"use client";

import { useState } from "react";
import { StaggerContainer, StaggerItem } from "@/components/animations";
import ImageLightbox from "@/components/ImageLightbox";

const images = [
  {
    src: "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=1200&h=800&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=500&h=600&fit=crop",
    alt: "Ruang kerja bengkel",
  },
  {
    src: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=1200&h=800&fit=crop",
    thumb:
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=600&fit=crop",
    alt: "Peralatan diagnostik",
  },
];

export default function WorkshopImages() {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      <StaggerContainer className="grid grid-cols-2 gap-3">
        {images.map((img, i) => (
          <StaggerItem key={img.alt}>
            <button
              onClick={() => setLightbox({ src: img.src, alt: img.alt })}
              className="overflow-hidden text-left"
              aria-label={`Lihat gambar: ${img.alt}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.thumb}
                alt={img.alt}
                className={`h-full w-full object-cover transition-transform duration-500 hover:scale-105 ${i === 1 ? "mt-8" : ""}`}
              />
            </button>
          </StaggerItem>
        ))}
      </StaggerContainer>
      <ImageLightbox
        src={lightbox?.src ?? ""}
        alt={lightbox?.alt ?? ""}
        open={lightbox !== null}
        onClose={() => setLightbox(null)}
      />
    </>
  );
}
