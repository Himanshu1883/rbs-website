import { PortraitImage } from "@/components/PortraitImage";
import { SectionHeading } from "@/components/SectionHeading";
import { beforeAfter } from "@/content/content";

export function BeforeAfter() {
  return (
    <section className="bg-bg px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          gold
          eyebrow="Transformations"
          title="Before the chair. After the look."
          copy="Four real sittings from RBS Make-Over — the same face, finished."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {beforeAfter.map((pair) => (
            <article
              key={pair.id}
              className="overflow-hidden rounded-[1.6rem] border border-line bg-bg-2"
            >
              <div className="grid grid-cols-2">
                <div className="relative">
                  <PortraitImage
                    image={pair.before}
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="aspect-[3/4]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white">
                    Before
                  </span>
                </div>
                <div className="relative">
                  <PortraitImage
                    image={pair.after}
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="aspect-[3/4]"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-pink px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white">
                    After
                  </span>
                </div>
              </div>
              <p className="px-5 py-4 text-[11px] uppercase tracking-[0.28em] text-gold">
                {pair.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
