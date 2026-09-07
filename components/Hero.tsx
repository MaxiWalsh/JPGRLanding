import { hero, site } from "@/lib/content";
import { IconScale } from "@/components/icons";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-24 bg-slate-900 text-white"
    >
      <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Contenido izquierda */}
          <div className="flex flex-col gap-6">
            <p className="text-sm font-medium uppercase tracking-widest text-green-400">
              {site.tagline}
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {hero.title}
            </h1>
            <p className="text-lg leading-relaxed text-slate-300">
              {hero.subtitle}
            </p>
            <div className="flex flex-col gap-3 pt-2 sm:flex-row">
              <a
                href="#contacto"
                className="inline-block rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
              >
                {hero.ctaPrimary}
              </a>
              <a
                href="#servicios"
                className="inline-block rounded-full border-2 border-white px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                {hero.ctaSecondary}
              </a>
            </div>
          </div>

          {/* Foto placeholder derecha */}
          <div className="flex justify-center">
            <div className="aspect-square w-full max-w-sm rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <IconScale className="w-20 h-20 text-slate-400 mb-4" />
                <p className="text-sm text-slate-400">
                  {/* Foto de perfil profesional — reemplazar cuando esté disponible */}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
