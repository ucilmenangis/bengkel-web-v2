import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const services = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "PERAWATAN UMUM",
    description:
      "Pemeriksaan komprehensif dan layanan esensial menggunakan suku cadang OEM untuk memastikan kendaraan Anda tetap dalam kondisi prima.",
    features: ["Penggantian Cairan", "Sistem Pengereman", "Optimasi Filter"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "TUNING PERFORMA",
    description:
      "Membuka potensi tersembunyi mesin Anda melalui remapping presisi dan pembaruan komponen performa tinggi pilihan.",
    features: ["ECU Remapping", "Pengujian Dyno", "Kit Induksi"],
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    title: "DIAGNOSTIK LANJUTAN",
    description:
      "Solusi akurat untuk masalah elektrikal dan mekanikal yang kompleks menggunakan perangkat lunak teknis berlisensi global.",
    features: ["Analisis Kesalahan", "Kalibrasi Sensor", "Perbaikan Kabel"],
  },
];

export default function Services() {
  return (
    <section id="layanan" className="bg-surface-container-low py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Spesialisasi Teknis
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-on-surface md:text-4xl lg:text-5xl">
            LAYANAN UTAMA KAMI
          </h2>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-on-surface-variant-strong">
            Keahlian mendalam dalam setiap aspek perawatan dan peningkatan
            performa kendaraan modern.
          </p>
        </FadeIn>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.title}>
              <div className="flex h-full flex-col bg-surface-container-lowest p-8">
                <div className="flex h-12 w-12 items-center justify-center bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="mt-6 font-heading text-lg font-bold tracking-tight text-on-surface">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-on-surface-variant-strong">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="font-heading text-xs font-medium uppercase tracking-wider text-on-surface"
                    >
                      <span className="mr-2 text-primary">&mdash;</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#layanan"
                  className="mt-auto pt-6 font-heading text-xs font-semibold uppercase tracking-wider text-primary transition-colors hover:text-primary-container"
                >
                  Pelajari Lebih Lanjut &rarr;
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
