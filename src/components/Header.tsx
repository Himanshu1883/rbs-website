"use client";

import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { LogoLockup } from "@/components/Brand";
import { nav, site } from "@/content/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const overHero = !scrolled && !open;
  const text = overHero ? "text-white" : "text-fg";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "border-b border-line bg-bg/85 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-[4.5rem] sm:px-6 lg:px-8">
        <a href="#top" className="relative z-10 shrink-0" aria-label={site.name}>
          <LogoLockup />
        </a>

        <nav className={`hidden items-center gap-5 text-[13px] tracking-wide xl:gap-8 lg:flex ${text}`}>
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="opacity-80 transition hover:opacity-100 hover:text-pink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Toggle color theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className={`grid h-10 w-10 place-items-center rounded-full border border-white/15 ${text}`}
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun size={16} />
            ) : (
              <Moon size={16} />
            )}
          </button>
          <a
            href="#contact"
            className="hidden rounded-full bg-pink px-5 py-2.5 text-[13px] font-medium text-white transition hover:brightness-110 sm:inline-flex"
          >
            Book
          </a>
          <button
            type="button"
            className={`grid h-10 w-10 place-items-center rounded-full border border-white/15 lg:hidden ${text}`}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-line bg-bg px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-5 text-lg">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl italic"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-fit rounded-full bg-pink px-6 py-3 text-sm text-white"
            >
              Book your look
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
