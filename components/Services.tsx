import { services, servicesIntro } from "@/lib/content";

export default function Services() {
  return (
    <section id="servicios" className="bg-white">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            {servicesIntro.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{servicesIntro.subtitle}</p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-slate-200 p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
