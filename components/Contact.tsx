"use client";

import { useActionState } from "react";
import { submitContactForm, type ContactFormState } from "@/app/actions/contact";
import { contact, site } from "@/lib/content";

const initialState: ContactFormState = { status: "idle" };

const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hola, quería hacer una consulta legal."
)}`;

export default function Contact() {
  const [state, formAction, isPending] = useActionState(submitContactForm, initialState);

  return (
    <section id="contacto" className="bg-slate-50">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
            {contact.title}
          </h2>
          <p className="mt-4 text-lg text-slate-600">{contact.subtitle}</p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-4 text-slate-700">
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
                Teléfono
              </p>
              <p className="text-lg">{site.phoneDisplay}</p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
                Email
              </p>
              <p className="text-lg">{site.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
                Dirección
              </p>
              <p className="text-lg">{site.address}</p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-wide text-slate-400">
                Horario de atención
              </p>
              <p className="text-lg">{site.officeHours}</p>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-500"
            >
              Escribir por WhatsApp
            </a>
          </div>

          <form action={formAction} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-700">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700">
                Consulta
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="mt-1 w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
              />
            </div>

            <button
              type="submit"
              disabled={isPending}
              className="w-full rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isPending ? "Enviando..." : "Enviar consulta"}
            </button>

            {state.status !== "idle" && state.message && (
              <p
                role="status"
                className={`text-sm ${
                  state.status === "success" ? "text-emerald-600" : "text-red-600"
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
