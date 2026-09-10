import { site } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="bg-maroon text-ivory/60">
      <div className="mx-auto max-w-5xl px-6 py-8 text-sm">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div>
            <p className="font-semibold text-white">{site.lawyerName}</p>
            <p className="text-ivory/60">{site.tagline}</p>
          </div>
          <div className="text-center sm:text-right">
            <p>{site.address}</p>
            <div className="mt-2 flex items-center justify-center gap-4 sm:justify-end">
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-white transition-colors flex items-center gap-1"
              >
                📷 {site.instagram}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-6 border-t border-gold/40 pt-6 text-center text-xs text-ivory/60">
          <p>© {new Date().getFullYear()} {site.lawyerName}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
