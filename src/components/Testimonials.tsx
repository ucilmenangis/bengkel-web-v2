import { SiBmw, SiPorsche, SiVolkswagen, SiAudi } from "@icons-pack/react-simple-icons";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

const testimonials = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" rx="0" />
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
    text: "Presisi teknis di Modular Auto tidak tertandingi. Mereka menangani tuning ECU saya dengan kesempurnaan mutlak. Respon mesin sekarang jauh lebih linear.",
    author: "DAVID R.",
    role: "Pemilik Porsche 911 GT3",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    text: "Mencari mekanik yang paham knalpot performa tinggi sangat sulit sampai saya menemukan Modular. Pemasangannya sangat rapi dan suaranya luar biasa.",
    author: "SARAH K.",
    role: "BMW M4 Competition",
  },
];

const brands = [
  { Icon: SiBmw, label: "BMW" },
  { Icon: SiPorsche, label: "Porsche" },
  { Icon: SiVolkswagen, label: "Volkswagen" },
  { Icon: SiAudi, label: "Audi" },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-primary">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimoni" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <FadeIn>
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Reputasi Teruji
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-on-surface md:text-4xl lg:text-5xl">
            DIPERCAYA OLEH KOMUNITAS.
          </h2>
        </FadeIn>

        <StaggerContainer className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <StaggerItem key={t.author}>
              <div className="bg-surface-container-low p-8">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center bg-primary/10 text-primary">
                    {t.icon}
                  </div>
                  <div>
                    <StarRating />
                    <blockquote className="mt-4 text-base leading-relaxed text-on-surface-variant-strong">
                      &ldquo;{t.text}&rdquo;
                    </blockquote>
                    <div className="mt-6">
                      <span className="block font-heading text-xs text-on-surface/70">
                        {t.author}
                      </span>
                      <span className="block font-heading text-[10px] font-medium uppercase tracking-wider text-on-surface/50">
                        {t.role}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Brand logos */}
        <StaggerContainer className="mt-16 flex flex-wrap items-center justify-center gap-12 border-t border-surface-container pt-12">
          {brands.map(({ Icon, label }) => (
            <StaggerItem key={label}>
              <div className="flex items-center gap-3 text-on-surface-variant-strong">
                <Icon size={40} />
                <span className="font-heading text-base font-medium uppercase tracking-wider">
                  {label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
