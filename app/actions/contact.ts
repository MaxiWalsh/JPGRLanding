"use server";

import { Resend } from "resend";
import { site } from "@/lib/content";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
};

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return { status: "error", message: "Completá todos los campos." };
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return { status: "error", message: "Ingresá un email válido." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY no está configurada.");
    return {
      status: "error",
      message: "No se pudo enviar la consulta. Intentá más tarde.",
    };
  }

  try {
    const resend = new Resend(apiKey);
    const toAddress = process.env.CONTACT_TO_EMAIL || site.email;

    await resend.emails.send({
      from: "Consultas web <onboarding@resend.dev>",
      to: toAddress,
      replyTo: email,
      subject: `Nueva consulta de ${name}`,
      text: `Nombre: ${name}\nEmail: ${email}\n\nMensaje:\n${message}`,
    });

    return {
      status: "success",
      message: "¡Gracias! Tu consulta fue enviada, te voy a responder a la brevedad.",
    };
  } catch (error) {
    console.error("Error enviando el email de contacto:", error);
    return {
      status: "error",
      message: "No se pudo enviar la consulta. Intentá más tarde.",
    };
  }
}
