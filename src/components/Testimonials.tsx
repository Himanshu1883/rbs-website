import { PortraitImage } from "@/components/PortraitImage";
import { images, testimonials } from "@/content/content";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <PortraitImage
          image={images.ownerFull}
          sizes="100vw"
          imgClassName="object-[50%_18%] scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/88 to-bg/55 dark:from-black dark:via-black/88 dark:to-black/50" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <p className="text-[11px] uppercase tracking-[0.38em] text-pink">
          Kind words
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl sm:text-5xl">
          From the chair.
        </h2>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="rounded-3xl border border-line bg-bg/80 p-6 backdrop-blur-md"
            >
              <p className="font-display text-2xl leading-snug italic">
                “{item.quote}”
              </p>
              <footer className="mt-6 text-sm text-muted">
                <p className="text-fg">{item.name}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
