const products = [
  {
    name: "Filter Udara Performa",
    price: "Rp 1.450.000",
    description:
      "Peningkatan aliran udara hingga 40%. Menggunakan media katun berlapis-lapis untuk proteksi maksimal.",
    specs: [
      { label: "ALIRAN", value: "+40%" },
      { label: "MEDIA", value: "KATUN 5-LAPIS" },
    ],
    image:
      "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=600&h=500&fit=crop",
  },
  {
    name: "Knalpot High-Flow",
    price: "Rp 12.800.000",
    description:
      "Sistem baja tahan karat T304 yang dilas tangan. Dirancang untuk resonansi rendah dan tenaga tinggi.",
    specs: [
      { label: "MATERIAL", value: "T304 SS" },
      { label: "LAS", value: "TANGAN" },
    ],
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=600&h=500&fit=crop",
  },
  {
    name: "Kit Suspensi",
    price: "Rp 18.200.000",
    description:
      "32-way damping adjustment. Dilengkapi camber plates untuk tuning geometri roda yang presisi.",
    specs: [
      { label: "DAMPING", value: "32-WAY" },
      { label: "CAMBER", value: "PLATES" },
    ],
    image:
      "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?w=600&h=500&fit=crop",
  },
];

export default function Products() {
  return (
    <section id="komponen" className="bg-surface py-24">
      <div className="mx-auto max-w-7xl px-6">
        <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-primary">
          Inventaris Premium
        </span>
        <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-on-surface md:text-4xl lg:text-5xl">
          KOMPONEN REKAYASA
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-surface-container-lowest group"
            >
              {/* Product image with Spec HUD */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Spec HUD overlay */}
                <div className="absolute bottom-0 left-0 right-0 flex bg-surface-container-highest/90 backdrop-blur-sm">
                  {product.specs.map((spec, i) => (
                    <div
                      key={spec.label}
                      className={`flex-1 px-4 py-2 ${i > 0 ? "border-l border-on-surface/10" : ""}`}
                    >
                      <span className="block font-heading text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                        {spec.label}
                      </span>
                      <span className="block font-heading text-sm font-bold text-on-surface">
                        {spec.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Product info */}
              <div className="p-6">
                <h3 className="font-heading text-base font-bold tracking-tight text-on-surface">
                  {product.name}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                  {product.description}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="font-heading text-xl font-black text-primary">
                    {product.price}
                  </span>
                  <button className="bg-surface-container-highest px-4 py-2 font-heading text-xs font-semibold uppercase tracking-wider text-on-surface transition-colors hover:bg-primary hover:text-on-primary">
                    Detail
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
