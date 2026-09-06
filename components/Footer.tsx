import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 px-6 py-8 text-sm sm:flex-row sm:justify-between">
        <p>
          © {new Date().getFullYear()} {site.lawyerName}. Todos los derechos reservados.
        </p>
        <p>{site.address}</p>
      </div>
    </footer>
  );
}
