import { PortraitImage } from "@/components/PortraitImage";
import { SectionHeading } from "@/components/SectionHeading";
import { processSteps } from "@/content/content";

export function Process() {
  return (
    <section className="bg-bg-2 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          gold
          eyebrow="The sitting"
          title="How a look is built."
          copy="From the logo-wall studio to the finished face — a calm, three-step ritual."
        />

        <div className="mt-8 grid gap-8 lg:grid-cols-3">
          {processSteps.map((step) => (
            <article key={step.number} className="relative">
              <p className="font-display text-6xl text-gold/35">{step.number}</p>
              <h3 className="mt-3 font-display text-3xl italic">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{step.copy}</p>
              {step.image ? (
                <div className="relative mt-6 overflow-hidden rounded-[1.4rem] bg-black">
                  <PortraitImage
                    image={step.image}
                    sizes="(min-width: 1024px) 30vw, 100vw"
                    className="aspect-[3/4]"
                  />
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
