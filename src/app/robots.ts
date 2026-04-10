import type { MetadataRoute } from "next";

const SITE_URL =
  "https://bengkel-web-v2-eubpnh6mo-ucilmenangis-projects.vercel.app";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
