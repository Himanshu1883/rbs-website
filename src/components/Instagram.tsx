"use client";

import { useEffect, useRef } from "react";
import { PortraitImage } from "@/components/PortraitImage";
import { instagramTiles, reels, site } from "@/content/content";

function ReelCard({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.play().catch(() => {});
        } else {
          el.pause();
        }
      },
      { threshold: 0.45 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <a
      href={site.instagram}
      target="_blank"
      rel="noreferrer"
      className="relative w-[min(78vw,18rem)] shrink-0 snap-center overflow-hidden rounded-2xl bg-black shadow-xl sm:w-auto"
    >
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload="metadata"
        className="aspect-[9/16] h-full w-full object-cover object-[center_18%]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
      <div className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
        Reel
      </div>
      <p className="absolute bottom-3 left-3 right-3 text-sm font-medium text-white">
        {title}
      </p>
    </a>
  );
}

export function Instagram() {
  return (
    <section id="instagram" className="bg-bg px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.38em] text-pink">
              Instagram
            </p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">
              {site.instagramHandle}
            </h2>
            <p className="mt-2 text-sm text-muted">
              Autoplay reels from the studio — tap any to open Instagram.
            </p>
          </div>
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-pink px-5 py-2.5 text-sm text-white"
          >
            Follow for more
          </a>
        </div>

        <div className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-4 sm:gap-4 sm:overflow-visible sm:px-0">
          {reels.map((reel) => (
            <ReelCard key={reel.src} src={reel.src} title={reel.title} />
          ))}
        </div>

        <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-3">
          {instagramTiles.slice(0, 4).map((tile) => (
            <a
              key={tile.id}
              href={site.instagram}
              target="_blank"
              rel="noreferrer"
              className="relative block aspect-square overflow-hidden rounded-xl"
            >
              {tile.image ? (
                <PortraitImage image={tile.image} sizes="22vw" />
              ) : null}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
