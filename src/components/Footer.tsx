import Image from "next/image";
import { LogoLockup } from "@/components/Brand";
import { images, nav, site } from "@/content/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-center gap-4">
          <LogoLockup />
          <Image
            src={images.ownerPortrait.src}
            alt={images.ownerPortrait.alt}
            width={56}
            height={70}
            className="h-14 w-11 rounded-full object-cover object-[50%_12%]"
          />
        </div>
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
        <p className="mt-2">
          Photo: Unsplash credits for hair, men&apos;s and interior stock live in{" "}
          <span className="text-fg">ASSETS.md</span>. Portfolio frames are client work.
        </p>
      </div>
    </footer>
  );
}
