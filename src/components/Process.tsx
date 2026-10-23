import { PortraitImage } from "@/components/PortraitImage";
import { SectionHeading } from "@/components/SectionHeading";
import { images, processSteps } from "@/content/content";

export function Process() {
  return (
    <section className="bg-bg-2 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          gold
          eyebrow="The sitting"
          title="How a look is built."
          copy="From the logo-wall studio to the mirror lights — a calm, three-step ritual."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {processSteps.map((step) => {
            const max = step.image.maxDisplayWidth;
            return (
              <article key={step.number} className="relative">
                <p className="font-display text-6xl text-gold/35">{step.number}</p>
                <h3 className="mt-3 font-display text-3xl italic">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted">{step.copy}</p>
                {max ? (
                  <div
                    className="mt-6 overflow-hidden rounded-2xl border border-line bg-bg p-1.5 shadow-lg"
                    style={{ maxWidth: max }}
                  >
                    <PortraitImage
                      image={step.image}
                      sizes={`${max}px`}
                      className="aspect-[3/4] rounded-xl"
                    />
                  </div>
                ) : (
                  <div className="relative mt-6 h-44 overflow-hidden rounded-2xl">
                    <PortraitImage
                      image={step.image}
                      sizes="(min-width: 1024px) 30vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-2/80 to-transparent" />
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="relative mt-16 overflow-hidden rounded-[1.8rem]">
          <div className="relative h-48 sm:h-64">
            <PortraitImage
              image={images.studioGlamorous}
              sizes="100vw"
              imgClassName="object-[40%_30%]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/75 to-bg/20 dark:from-black dark:via-black/75 dark:to-black/25" />
            <div className="absolute inset-0 flex items-end p-8 sm:p-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.32em] text-pink">
                  Behind the scenes
                </p>
                <p className="mt-2 max-w-lg font-display text-3xl italic sm:text-4xl">
                  A physical studio. Mirror lights. The pink face-line on the wall.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
