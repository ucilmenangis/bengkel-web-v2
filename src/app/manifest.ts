import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Modular Auto — Rekayasa Presisi Kendaraan",
    short_name: "Modular Auto",
    description:
      "Bengkel otomotif premium dengan spesialisasi tuning performa, diagnostik lanjutan, dan perawatan kendaraan modern.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f9fa",
    theme_color: "#af000e",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
