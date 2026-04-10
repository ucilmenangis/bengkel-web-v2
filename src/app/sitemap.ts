import type { MetadataRoute } from "next";

const SITE_URL =
  "https://bengkel-web-v2-eubpnh6mo-ucilmenangis-projects.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
