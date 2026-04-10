import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const SITE_URL =
  "https://bengkel-web-v2-eubpnh6mo-ucilmenangis-projects.vercel.app";

export const viewport: Viewport = {
  themeColor: "#af000e",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Modular Auto — Rekayasa Presisi Kendaraan",
  description:
    "Bengkel otomotif premium dengan spesialisasi tuning performa, diagnostik lanjutan, dan perawatan kendaraan modern.",
  keywords: [
    "bengkel otomotif",
    "tuning performa",
    "ECU remapping",
    "diagnostik kendaraan",
    "suku cadang OEM",
    "perawatan mobil",
    "bengkel Jakarta",
    "Modular Auto",
  ],
  authors: [{ name: "Modular Auto" }],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: SITE_URL,
    siteName: "Modular Auto",
    title: "Modular Auto — Rekayasa Presisi Kendaraan",
    description:
      "Bengkel otomotif premium dengan spesialisasi tuning performa, diagnostik lanjutan, dan perawatan kendaraan modern.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Modular Auto — Rekayasa Presisi Kendaraan",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Modular Auto — Rekayasa Presisi Kendaraan",
    description:
      "Bengkel otomotif premium dengan spesialisasi tuning performa, diagnostik lanjutan, dan perawatan kendaraan modern.",
    images: [`${SITE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "Modular Auto",
  image: `${SITE_URL}/og-image.png`,
  url: SITE_URL,
  telephone: "+622155558888",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Otomotif Raya No. 88",
    addressLocality: "Jakarta Selatan",
    postalCode: "12345",
    addressCountry: "ID",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  sameAs: [],
  priceRange: "$$",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Layanan Otomotif",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Perawatan Umum",
          description:
            "Pemeriksaan komprehensif dan layanan esensial menggunakan suku cadang OEM.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Tuning Performa",
          description:
            "Remapping ECU presisi dan pembaruan komponen performa tinggi.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Diagnostik Lanjutan",
          description:
            "Solusi akurat untuk masalah elektrikal dan mekanikal menggunakan perangkat lunak berlisensi global.",
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="min-h-screen">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
