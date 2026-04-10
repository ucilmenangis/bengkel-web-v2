import { FadeIn } from "@/components/animations";

export default function Marketplace() {
  return (
    <section className="bg-primary py-20">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <FadeIn>
          <div className="flex justify-center animate-float">
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-on-primary"
            >
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0" />
            </svg>
          </div>
          <h2 className="mt-6 font-heading text-3xl font-bold tracking-tight text-on-primary md:text-4xl">
            EKSPRESIKAN PERFORMA
            <br />
            DI MARKETPLACE KAMI
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-on-primary/80">
            Dapatkan kemudahan transaksi dengan cicilan 0% dan jaminan keaslian
            suku cadang melalui platform belanja favorit Anda.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            <a
              href="#"
              className="border border-on-primary/40 bg-on-primary/10 px-8 py-4 transition-colors hover:bg-on-primary"
              title="Belanja di Tokopedia"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-tokopedia.png" alt="Tokopedia" className="h-8 w-auto" />
            </a>
            <a
              href="#"
              className="border border-on-primary/40 bg-on-primary/10 px-8 py-4 transition-colors hover:bg-on-primary"
              title="Belanja di Shopee"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/shopee.png" alt="Shopee" className="h-8 w-auto" />
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
