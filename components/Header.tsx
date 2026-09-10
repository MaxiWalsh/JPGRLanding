import { site } from "@/lib/content";
import { IconPhone } from "@/components/icons";

const navLinks = [
  { href: "#inicio", label: "INICIO" },
  { href: "#quien-soy", label: "QUIÉN SOY" },
  { href: "#servicios", label: "SERVICIOS" },
  { href: "#contacto", label: "CONTACTO" },
];

const whatsappHref = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(
  "Hola, quisiera hacer una consulta sobre un caso penal."
)}`;

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/40 bg-ivory/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="text-sm font-bold tracking-tight text-slate-900">
          {site.lawyerName} | {site.tagline}
        </a>
        <nav className="hidden gap-8 text-xs font-semibold tracking-wide text-slate-600 sm:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-900"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-ivory text-maroon border border-maroon px-4 py-2 text-xs font-semibold transition-colors hover:bg-maroon hover:text-ivory"
        >
          <IconPhone className="w-4 h-4" />
          WHATSAPP
        </a>
      </div>
    </header>
  );
}
