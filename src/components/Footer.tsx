import { LogoLockup } from "@/components/Brand";
import { nav, site } from "@/content/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <LogoLockup />
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-pink">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="text-sm text-muted">
          <p>{site.owner}</p>
          <p>{site.location} · {site.hours}</p>
          <a href={site.instagram} className="text-pink" target="_blank" rel="noreferrer">
            {site.instagramHandle}
          </a>
        </div>
      </div>
      <div className="mx-auto mt-12 max-w-7xl border-t border-line pt-6 text-xs text-muted">
        <p>
          © 2026 {site.legalName}. Makeup by {site.owner}.
        </p>
      </div>
    </footer>
  );
}
