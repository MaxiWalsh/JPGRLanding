import Image from "next/image";
import { professional } from "@/lib/content";

export default function ProfessionalPresentation() {
  return (
    <section id="quien-soy" className="scroll-mt-24 bg-ivory py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Foto del profesional izquierda */}
          <div className="flex justify-center">
            <div className="relative aspect-square w-full max-w-sm overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/quien-soy.jpeg"
                alt={professional.name}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 384px, 90vw"
              />
            </div>
          </div>

          {/* Contenido derecha */}
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-2">
                {professional.name}
              </h2>
              <p className="text-xl font-semibold text-maroon">
                {professional.title}
              </p>
            </div>

            <p className="text-lg leading-relaxed text-slate-700">
              {professional.bio}
            </p>

            <div className="space-y-2">
              {professional.credentials.map((credential) => (
                <div key={credential} className="flex items-start gap-3">
                  <span className="text-maroon font-bold mt-1">✓</span>
                  <p className="text-slate-700">{credential}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
