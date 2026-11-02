"use client";

import { useEffect, useState } from "react";
import { PortraitImage } from "@/components/PortraitImage";
import { hero, site } from "@/content/content";

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((n) => (n + 1) % hero.panels.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate h-[88svh] min-h-[34rem] overflow-hidden bg-black text-white"
    >
      {hero.panels.map((image, i) => (
        <div
          key={image.alt}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <PortraitImage
            image={image}
            sizes="100vw"
            priority={i === 0}
            imgClassName="kenburns-hero"
          />
        </div>
      ))}

      <div className="film-grain pointer-events-none absolute inset-0 bg-gradient-to-r from-black/55 via-black/20 to-black/10" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-4 pb-10 pt-24 sm:px-6 lg:px-8 lg:pb-14">
        <p className="mb-4 text-[11px] uppercase tracking-[0.42em] text-gold">
          {hero.eyebrow}
        </p>
        <h1 className="max-w-3xl font-display text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
          {hero.title}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-white/80 sm:text-lg">
          {hero.subtitle}
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={hero.primaryCta.href}
            className="rounded-full bg-pink px-7 py-3 text-sm font-medium text-white transition hover:brightness-110"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.href}
            className="rounded-full border border-white/30 px-7 py-3 text-sm text-white transition hover:border-white"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
        <p className="mt-6 text-xs tracking-[0.28em] uppercase text-white/50">
          {site.owner} · {site.location} · {site.instagramHandle}
        </p>

        <div className="mt-6 flex gap-2">
          {hero.panels.map((image, i) => (
            <button
              key={image.alt}
              type="button"
              aria-label={`Show look ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 flex-1 rounded-full ${
                i === index ? "bg-pink" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
