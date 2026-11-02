"use client";

import { useCallback, useEffect, useRef } from "react";
import { reels, site } from "@/content/content";

function unlockAndPlay(el: HTMLVideoElement) {
  el.muted = true;
  el.defaultMuted = true;
  el.playsInline = true;
  el.setAttribute("muted", "");
  el.setAttribute("playsinline", "true");
  el.setAttribute("webkit-playsinline", "true");
  const play = el.play();
  if (play) play.catch(() => {});
}

function ReelCard({ src, title }: { src: string; title: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  const keepPlaying = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    unlockAndPlay(el);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    keepPlaying();

    const resume = () => keepPlaying();
    el.addEventListener("loadeddata", resume);
    el.addEventListener("canplay", resume);
    el.addEventListener("canplaythrough", resume);
    el.addEventListener("playing", resume);
    el.addEventListener("suspend", resume);
    el.addEventListener("stalled", resume);
    el.addEventListener("waiting", resume);
    el.addEventListener("pause", resume);
    el.addEventListener("ended", () => {
      el.currentTime = 0;
      keepPlaying();
    });

    const onVisible = () => {
      if (document.visibilityState === "visible") keepPlaying();
    };
    document.addEventListener("visibilitychange", onVisible);
    window.addEventListener("pageshow", resume);
    window.addEventListener("focus", resume);
    document.addEventListener("touchstart", resume, { passive: true });
    document.addEventListener("click", resume);

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) keepPlaying();
      },
      { threshold: 0.01, rootMargin: "80px" },
    );
    io.observe(el);

    const tick = window.setInterval(() => {
      if (el.paused) keepPlaying();
    }, 1200);

    return () => {
      window.clearInterval(tick);
      io.disconnect();
      el.removeEventListener("loadeddata", resume);
      el.removeEventListener("canplay", resume);
      el.removeEventListener("canplaythrough", resume);
      el.removeEventListener("playing", resume);
      el.removeEventListener("suspend", resume);
      el.removeEventListener("stalled", resume);
      el.removeEventListener("waiting", resume);
      el.removeEventListener("pause", resume);
      document.removeEventListener("visibilitychange", onVisible);
      window.removeEventListener("pageshow", resume);
      window.removeEventListener("focus", resume);
      document.removeEventListener("touchstart", resume);
      document.removeEventListener("click", resume);
    };
  }, [keepPlaying, src]);

  return (
    <article className="relative w-[min(78vw,18rem)] shrink-0 snap-center overflow-hidden rounded-2xl bg-black shadow-xl sm:w-auto">
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        controls={false}
        disablePictureInPicture
        disableRemotePlayback
        aria-label={title}
        className="aspect-[9/16] h-full w-full object-cover object-[center_18%]"
        {...{
          "webkit-playsinline": "true",
          "x5-playsinline": "true",
          "x5-video-player-type": "h5",
          "x5-video-player-fullscreen": "false",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25" />
      <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur-sm">
        Reel
      </div>
      <p className="pointer-events-none absolute bottom-10 left-3 right-3 text-sm font-medium text-white">
        {title}
      </p>
      <a
        href={site.instagram}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-3 right-3 z-10 rounded-full bg-pink px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-white"
      >
        Instagram
      </a>
    </article>
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
              Studio reels — they keep playing. Tap any to open Instagram.
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
      </div>
    </section>
  );
}
