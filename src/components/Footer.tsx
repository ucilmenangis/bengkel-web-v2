const footerLinks = [
  {
    title: "Layanan",
    links: [
      "Perawatan Umum",
      "Tuning Performa",
      "Diagnostik Lanjutan",
      "Konsultasi",
    ],
  },
  {
    title: "Perusahaan",
    links: ["Tentang Kami", "Tim", "Karir", "Blog"],
  },
  {
    title: "Bantuan",
    links: ["FAQ", "Kontak", "Garansi", "Kebijakan Privasi"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-inverse-surface py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-heading text-xl font-bold tracking-tight text-inverse-on-surface">
              MODULAR<span className="text-primary-container">.</span>AUTO
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-inverse-on-surface/60">
              Bengkel otomotif premium dengan spesialisasi tuning performa dan
              perawatan kendaraan modern.
            </p>
          </div>

          {/* Link columns */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-heading text-xs font-semibold uppercase tracking-wider text-inverse-on-surface">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-inverse-on-surface/50 transition-colors hover:text-inverse-on-surface"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-on-surface/10 pt-8">
          <p className="text-xs text-inverse-on-surface/40">
            &copy; {new Date().getFullYear()} Modular Auto. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
