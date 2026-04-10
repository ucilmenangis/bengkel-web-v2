const stats = [
  { number: "15+", label: "Tahun Pengalaman" },
  { number: "3K+", label: "Kendaraan Ditangani" },
  { number: "100%", label: "Suku Cadang OEM" },
  { number: "24/7", label: "Dukungan Teknis" },
];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center bg-surface pt-16">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 z-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1920&h=1080&fit=crop&crop=center"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-on-surface/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Text content */}
          <div>
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-primary-container">
              Keunggulan Teknik Tanpa Kompromi
            </span>
            <h1 className="mt-4 font-heading text-5xl font-black leading-[1.05] tracking-tight text-on-primary md:text-6xl lg:text-7xl">
              REKAYASA
              <br />
              PRESISI
              <br />
              <span className="text-primary-container">TOTAL.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-on-primary/70">
              Mendefinisikan ulang performa melalui layanan mekanis yang teliti.
              Kami beroperasi di puncak standar otomotif untuk memastikan
              kendaraan Anda melampaui batas kemampuannya.
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
                className="border border-on-primary/30 px-8 py-3 font-heading text-sm font-semibold uppercase tracking-widest text-on-primary transition-colors hover:border-on-primary hover:bg-on-primary/10"
              >
                Komponen
              </a>
            </div>
          </div>

          {/* Key stats */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={
                  i % 2 === 0
                    ? "border border-on-primary/15 bg-on-primary/5 p-8"
                    : "border border-primary/30 bg-primary/10 p-8"
                }
              >
                <span className="block font-heading text-4xl font-black text-primary-container">
                  {stat.number}
                </span>
                <span className="mt-2 block font-heading text-xs font-medium uppercase tracking-wider text-on-primary/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
