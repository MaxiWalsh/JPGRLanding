import { services, servicesIntro, commonSituations, site } from "@/lib/content";
import {
  IconScale,
  IconDocument,
  IconAlert,
  IconBriefcase,
  IconShield,
  IconCar,
} from "@/components/icons";

const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hola, quisiera consultar sobre uno de estos temas."
)}`;

const iconMap = {
  scale: IconScale,
  document: IconDocument,
  alert: IconAlert,
  briefcase: IconBriefcase,
  shield: IconShield,
  car: IconCar,
};

export default function Services() {
  return (
    <section id="servicios" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        {/* Encabezado */}
        <div className="mx-auto max-w-2xl text-center mb-4">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            {servicesIntro.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{servicesIntro.subtitle}</p>
        </div>

        {/* Bloque intro destacado */}
        <div className="mx-auto max-w-2xl mb-14 rounded-2xl bg-slate-50 p-6 border border-slate-200">
          <p className="text-center text-slate-700 font-medium">
            Brindamos acompañamiento especializado en cada área del Derecho Penal, con estrategias personalizadas según tu caso.
          </p>
        </div>

        {/* Grid de servicios */}
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
            <div
              key={service.title}
              className="group rounded-2xl bg-white p-8 shadow-sm border border-slate-100 transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full bg-green-50">
                {Icon && <Icon className="w-6 h-6 text-green-600" />}
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-4">
                {service.description}
              </p>
              <a
                href="#contacto"
                className="text-sm font-semibold text-green-600 hover:text-green-700 transition-colors"
              >
                Leer más →
              </a>
            </div>
            );
          })}
        </div>

        {/* Sección de situaciones comunes */}
        <div className="mt-16 rounded-3xl bg-slate-50 p-8 sm:p-12 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6">
            ¿Te encontrás en alguna de estas situaciones?
          </h3>
          <ul className="space-y-3 mb-8">
            {commonSituations.map((situation, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-green-600 font-bold text-lg flex-shrink-0">✓</span>
                <span className="text-slate-700">{situation}</span>
              </li>
            ))}
          </ul>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-green-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-green-700"
          >
            Consultar mi caso por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
