"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { contact, site } from "@/lib/content";
import { IconPhone } from "@/components/icons";

const initialState: ContactFormState = { status: "idle" };

const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hola, quisiera hacer una consulta sobre mi caso penal."
)}`;

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <section id="contacto" className="scroll-mt-24 bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            {contact.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{contact.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Bloque oscuro izquierda */}
          <div className="rounded-3xl bg-maroon text-white p-8 sm:p-10 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                {contact.consultBoxTitle}
              </h3>
              <p className="text-ivory/70 mb-8">
                {contact.consultBoxSubtitle}
              </p>

              <div className="space-y-6 mb-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ivory/80 mb-1">
                    Teléfono
                  </p>
                  <p className="text-lg text-white">{site.phoneDisplay}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ivory/80 mb-1">
                    Email
                  </p>
                  <p className="text-lg text-white">{site.email}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-ivory/80 mb-1">
                    Actuación profesional en
                  </p>
                  <p className="text-lg text-white">{site.address}</p>
                </div>
              </div>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 rounded-full bg-ivory text-maroon border border-maroon px-6 py-3 text-sm font-semibold transition-colors hover:bg-maroon hover:text-ivory w-full"
            >
              <IconPhone className="w-4 h-4" />
              Consultar mi caso por WhatsApp
            </a>
          </div>

          {/* Formulario derecha */}
          <form action={formAction} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-slate-900 mb-2">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20 transition-colors"
                placeholder="Tu nombre completo"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-900 mb-2">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20 transition-colors"
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-slate-900 mb-2">
                Consulta
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-500 focus:border-maroon focus:outline-none focus:ring-2 focus:ring-maroon/20 transition-colors resize-none"
                placeholder="Describe tu situación legal..."
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full rounded-full bg-ivory text-maroon border border-maroon px-6 py-3 text-sm font-semibold transition-colors hover:bg-maroon hover:text-ivory disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending ? "Enviando..." : "Enviar Consulta"}
            </button>

            {state.status !== "idle" && state.message && (
              <p
                role="status"
                className={`text-sm font-medium ${
                  state.status === "success" ? "text-maroon" : "text-red-600"
                }`}
              >
                {state.message}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
