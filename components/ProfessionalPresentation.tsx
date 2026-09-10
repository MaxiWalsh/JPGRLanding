import { professional } from "@/lib/content";
import { IconUser } from "@/components/icons";

export default function ProfessionalPresentation() {
  return (
    <section id="quien-soy" className="scroll-mt-24 bg-ivory py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Foto placeholder izquierda */}
          <div className="flex justify-center">
            <div className="aspect-square w-full max-w-sm rounded-3xl bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center shadow-lg overflow-hidden">
              <div className="text-center">
                <IconUser className="w-20 h-20 text-slate-400 mx-auto" />
              </div>
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
