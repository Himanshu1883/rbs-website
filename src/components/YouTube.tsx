import Image from "next/image";
import { site, youtubeShorts } from "@/content/content";

export function YouTube() {
  return (
    <section id="youtube" className="bg-bg-2 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.38em] text-pink">
              YouTube
            </p>
            <h2 className="mt-2 font-display text-4xl sm:text-5xl">
              {site.youtubeHandle}
            </h2>
            <p className="mt-2 text-sm text-muted">
              Bridal transformations and glam shorts from the studio chair.
            </p>
          </div>
          <a
            href={site.youtube}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#FF0000] px-5 py-2.5 text-sm text-white transition hover:brightness-110"
          >
            Subscribe on YouTube
          </a>
        </div>

        <a
          href={site.youtube}
          target="_blank"
          rel="noreferrer"
          className="group relative mb-6 block overflow-hidden rounded-[1.6rem]"
        >
          <div className="relative h-44 sm:h-56 lg:h-64">
            <div className="absolute inset-0 grid grid-cols-6">
              {youtubeShorts.map((short) => (
                <div key={short.id} className="relative h-full overflow-hidden">
                  <Image
                    src={short.thumbnail}
                    alt=""
                    fill
                    unoptimized
                    quality={100}
                    sizes="20vw"
                    className="object-cover object-[50%_20%] transition duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/35" />
            <div className="absolute inset-0 flex items-end gap-4 p-6 sm:p-8">
              <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white/80 shadow-xl sm:h-20 sm:w-20">
                <Image
                  src="/youtube/channel-avatar.jpg"
                  alt={site.owner}
                  fill
                  unoptimized
                  quality={100}
                  sizes="80px"
                  className="object-cover object-[50%_20%]"
                />
              </div>
              <div className="min-w-0 text-white">
                <p className="text-[11px] uppercase tracking-[0.28em] text-gold">
                  Channel
                </p>
                <p className="mt-1 truncate font-display text-2xl italic sm:text-3xl">
                  {site.youtubeChannelName}
                </p>
                <p className="mt-1 text-sm text-white/75">
                  {site.youtubeHandle} · Shorts & beauty classes
                </p>
              </div>
            </div>
          </div>
        </a>

        <div className="no-scrollbar -mx-4 flex snap-x gap-3 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-3 sm:gap-4 lg:grid-cols-6 sm:overflow-visible sm:px-0">
          {youtubeShorts.map((short) => (
            <a
              key={short.id}
              href={short.href}
              target="_blank"
              rel="noreferrer"
              className="group relative w-[min(48vw,14rem)] shrink-0 snap-center overflow-hidden rounded-2xl bg-black shadow-xl sm:w-auto"
            >
              <div className="relative aspect-[9/16]">
                <Image
                  src={short.thumbnail}
                  alt={short.title}
                  fill
                  unoptimized
                  quality={100}
                  sizes="(min-width: 1024px) 16vw, 48vw"
                  className="object-cover object-[50%_18%] transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/15" />
                <div className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#FF0000] text-white shadow-lg transition group-hover:scale-110">
                  <svg
                    viewBox="0 0 24 24"
                    className="ml-0.5 h-5 w-5 fill-current"
                    aria-hidden
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="absolute left-2.5 top-2.5 rounded-full bg-black/50 px-2 py-1 text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur-sm">
                  Short
                </div>
                <div className="absolute inset-x-0 bottom-0 p-3">
                  <p className="line-clamp-2 text-xs font-medium leading-snug text-white sm:text-sm">
                    {short.title}
                  </p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/65">
                    {short.views}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="mt-6 text-center">
          <a
            href={site.youtubeShorts}
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted underline-offset-4 transition hover:text-pink hover:underline"
          >
            View all Shorts on YouTube
          </a>
        </div>
      </div>
    </section>
  );
}
