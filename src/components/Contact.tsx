"use client";

export default function Contact() {
  return (
    <section id="kontak" className="bg-surface-container py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          {/* Contact info */}
          <div>
            <span className="font-heading text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Hubungi Kami
            </span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-on-surface md:text-4xl">
              JADWALKAN
              <br />
              KUNJUNGAN ANDA.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-on-surface-variant-strong">
              Konsultasikan kebutuhan kendaraan Anda dengan tim teknisi kami.
              Kami siap memberikan solusi terbaik.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-on-surface-variant-strong">
                  Alamat
                </span>
                <p className="mt-1 text-sm text-on-surface">
                  Jl. Otomotif Raya No. 88, Jakarta Selatan 12345
                </p>
              </div>
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-on-surface-variant-strong">
                  Telepon
                </span>
                <p className="mt-1 text-sm text-on-surface">+62 21 5555 8888</p>
              </div>
              <div>
                <span className="font-heading text-xs font-semibold uppercase tracking-wider text-on-surface-variant-strong">
                  Jam Operasional
                </span>
                <p className="mt-1 text-sm text-on-surface">
                  Senin — Sabtu: 08.00 — 18.00
                </p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="bg-surface-container-low p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label className="block font-heading text-xs font-semibold uppercase tracking-wider text-on-surface-variant-strong">
                    Nama
                  </label>
                  <input
                    type="text"
                    className="mt-2 w-full border-b-2 border-surface-container-highest bg-transparent py-2 font-body text-sm text-on-surface outline-none transition-all focus:border-primary focus:bg-primary/5"
                    placeholder="Nama lengkap"
                  />
                </div>
                <div>
                  <label className="block font-heading text-xs font-semibold uppercase tracking-wider text-on-surface-variant-strong">
                    Email
                  </label>
                  <input
                    type="email"
                    className="mt-2 w-full border-b-2 border-surface-container-highest bg-transparent py-2 font-body text-sm text-on-surface outline-none transition-all focus:border-primary focus:bg-primary/5"
                    placeholder="email@contoh.com"
                  />
                </div>
              </div>
              <div>
                <label className="block font-heading text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                  Kendaraan
                </label>
                <input
                  type="text"
                  className="mt-2 w-full border-b-2 border-surface-container-highest bg-transparent py-2 font-body text-sm text-on-surface outline-none transition-all focus:border-primary focus:bg-primary/5"
                  placeholder="Merk, model, dan tahun"
                />
              </div>
              <div>
                <label className="block font-heading text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                  Layanan
                </label>
                <select className="mt-2 w-full border-b-2 border-surface-container-highest bg-transparent py-2 font-body text-sm text-on-surface outline-none transition-all focus:border-primary focus:bg-primary/5">
                  <option>Perawatan Umum</option>
                  <option>Tuning Performa</option>
                  <option>Diagnostik Lanjutan</option>
                  <option>Konsultasi</option>
                </select>
              </div>
              <div>
                <label className="block font-heading text-xs font-semibold uppercase tracking-wider text-on-surface-variant">
                  Pesan
                </label>
                <textarea
                  rows={4}
                  className="mt-2 w-full resize-none border-b-2 border-surface-container-highest bg-transparent py-2 font-body text-sm text-on-surface outline-none transition-all focus:border-primary focus:bg-primary/5"
                  placeholder="Deskripsikan kebutuhan Anda..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary py-3 font-heading text-sm font-semibold uppercase tracking-widest text-on-primary transition-colors hover:bg-primary-container"
              >
                Kirim Permintaan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
