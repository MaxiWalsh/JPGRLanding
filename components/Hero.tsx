import { hero, site } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-slate-900 text-white"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-6 px-6 py-24 sm:py-32">
        <p className="text-sm font-medium uppercase tracking-widest text-amber-400">
          {site.tagline}
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
          {hero.title}
        </h1>
        <p className="max-w-xl text-lg leading-relaxed text-slate-300">
          {hero.subtitle}
        </p>
        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
          <a
            href="#contacto"
            className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-amber-300"
          >
            {hero.ctaPrimary}
          </a>
          <a
            href="#servicios"
            className="rounded-full border border-slate-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:border-slate-300"
          >
            {hero.ctaSecondary}
          </a>
        </div>
      </div>
    </section>
  );
}
