import { PortraitImage } from "@/components/PortraitImage";
import { showcase } from "@/content/content";

export function Showcase() {
  return (
    <section id="work" className="bg-bg-2">
      {showcase.map((chapter) => (
        <article
          key={chapter.id}
          className="grid border-b border-line lg:grid-cols-[minmax(16rem,0.7fr)_1.3fr]"
        >
          <div className="flex flex-col justify-center px-4 py-8 sm:px-8 lg:py-10">
            <p className="font-display text-4xl text-gold/80">{chapter.number}</p>
            <p className="mt-3 text-[11px] uppercase tracking-[0.38em] text-pink">
              {chapter.kicker}
            </p>
            <h3 className="mt-2 font-display text-4xl italic lg:text-5xl">
              {chapter.title}
            </h3>
            <div className="gold-rule my-4 w-16" />
            <p className="max-w-md text-sm leading-6 text-muted sm:text-base">
              {chapter.copy}
            </p>
          </div>
          <div className="grid sm:grid-cols-2">
            {chapter.images.map((image, i) => (
              <div key={`${chapter.id}-${i}`} className="relative aspect-[3/4] bg-black">
                <PortraitImage
                  image={image}
                  sizes="(min-width: 1024px) 32vw, 100vw"
                />
                {image.isStock ? (
                  <span className="absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/80">
                    Photo: Unsplash
                  </span>
                ) : null}
              </div>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
}
