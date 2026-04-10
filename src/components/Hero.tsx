export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-surface pt-16">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2 lg:gap-16">
        {/* Text content */}
        <div className="flex flex-col justify-center">
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Keunggulan Teknik Tanpa Kompromi
          </span>
          <h1 className="mt-4 font-heading text-5xl font-black leading-[1.05] tracking-tight text-on-surface md:text-6xl lg:text-7xl">
            REKAYASA
            <br />
            PRESISI
            <br />
            <span className="text-primary">TOTAL.</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-on-surface-variant">
            Mendefinisikan ulang performa melalui layanan mekanis yang teliti. Kami
            beroperasi di puncak standar otomotif untuk memastikan kendaraan Anda
            melampaui batas kemampuannya.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#layanan"
              className="bg-primary px-8 py-3 font-heading text-sm font-semibold uppercase tracking-widest text-on-primary transition-colors hover:bg-primary-container"
            >
              Layanan Kami
            </a>
            <a
              href="#komponen"
              className="border border-surface-container-highest bg-surface-container-highest px-8 py-3 font-heading text-sm font-semibold uppercase tracking-widest text-on-surface transition-colors hover:bg-surface-dim"
            >
              Komponen
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div className="relative hidden lg:block">
          <div className="bg-surface-container-low overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=900&fit=crop&crop=center"
              alt="Performa kendaraan"
              className="h-[600px] w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
