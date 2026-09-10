import Image from "next/image";
import { hero, site } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-24 bg-maroon text-white"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Contenido izquierda */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium uppercase tracking-widest text-ivory/80">
              {site.tagline}
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {hero.title}
            </h1>
            <p className="text-lg leading-relaxed text-ivory/70">
              {hero.subtitle}
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href="#contacto"
                className="inline-block rounded-full bg-ivory text-maroon border border-maroon px-8 py-3 text-sm font-semibold transition-colors hover:bg-maroon hover:text-ivory"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#servicios"
                className="inline-block rounded-full border-2 border-ivory px-8 py-3 text-sm font-semibold text-ivory transition-colors hover:bg-ivory/10"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Foto institucional derecha */}
          <div className="flex justify-center">
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-xl shadow-xl">
              <Image
                src="/images/hero-banner.jpeg"
                alt="Juan Pablo Gaseli Rozados — Abogado Penalista"
                fill
                className="object-cover"
                priority
                sizes="(min-width: 1024px) 384px, 90vw"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
