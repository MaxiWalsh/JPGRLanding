import { trust } from "@/lib/content";

export default function TrustSection() {
  return (
    <section className="scroll-mt-24 bg-gradient-to-b from-white to-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-slate-600 mb-2">
            Sección de confianza
          </h2>
          <p className="text-2xl font-bold text-slate-900">{trust.title}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {trust.items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
