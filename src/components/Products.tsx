import { FadeIn } from "@/components/animations";
import ProductGrid from "@/components/ProductGrid";

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
        <FadeIn>
          <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Inventaris Premium
          </span>
          <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-on-surface md:text-4xl lg:text-5xl">
            KOMPONEN REKAYASA
          </h2>
        </FadeIn>

        <ProductGrid products={products} />
      </div>
    </section>
  );
}
