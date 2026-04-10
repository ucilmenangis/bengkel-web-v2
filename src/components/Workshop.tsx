import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations";

export default function Workshop() {
  return (
    <section id="bengkel" className="bg-surface-container-low py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          {/* Image grid */}
          <StaggerContainer className="grid grid-cols-2 gap-3">
            <StaggerItem>
              <div className="overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=500&h=600&fit=crop"
                  alt="Ruang kerja bengkel"
                  className="h-full w-full object-cover"
                />
              </div>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-8 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=500&h=600&fit=crop"
                  alt="Peralatan diagnostik"
                  className="h-full w-full object-cover"
                />
              </div>
            </StaggerItem>
          </StaggerContainer>

          {/* Content */}
          <FadeIn delay={0.15}>
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Fasilitas
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-on-surface md:text-4xl lg:text-5xl">
              RUANG KERJA
              <br />
              BENGKEL
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-on-surface-variant-strong">
              Fasilitas modern kami dilengkapi dengan alat diagnostik terbaru
              dan lingkungan kerja yang bersih demi standar kualitas tertinggi.
            </p>
            <a
              href="#kontak"
              className="mt-8 inline-block bg-primary px-5 py-2 font-heading text-xs font-semibold uppercase tracking-widest text-on-primary transition-colors hover:bg-primary-container"
            >
              Jadwalkan Kunjungan
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
