import { site } from "@/lib/content";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <a href="#inicio" className="text-lg font-semibold tracking-tight text-slate-900">
          {site.lawyerName}
        </a>
        <nav className="hidden gap-8 text-sm font-medium text-slate-600 sm:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-slate-900">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contacto"
          className="rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-slate-700"
        >
          Consultá
        </a>
      </div>
    </header>
  );
}
