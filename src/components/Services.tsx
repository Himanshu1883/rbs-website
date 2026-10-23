import { PortraitImage } from "@/components/PortraitImage";
import { SectionHeading } from "@/components/SectionHeading";
import { services } from "@/content/content";

export function Services() {
  return (
    <section id="services" className="bg-bg px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          gold
          eyebrow="The menu"
          title="Four rooms of glamour."
          copy="Bridal and party are photographed here. Hair and men's grooming use tagged stock until Rachna's own frames arrive."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article
              key={service.id}
              className="group relative isolate h-[22rem] overflow-hidden rounded-[1.4rem] bg-black text-white sm:h-[26rem]"
            >
              <PortraitImage
                image={service.image}
                sizes="(min-width: 768px) 50vw, 100vw"
                imgClassName="transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/10" />
              <div className="absolute inset-0 flex flex-col justify-end p-7 sm:p-9">
                <div className="mb-4 flex items-center justify-between text-[11px] uppercase tracking-[0.32em] text-gold">
                  <span>{service.number}</span>
                  <span>{service.price}</span>
                </div>
                <h3 className="font-display text-4xl italic">{service.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-6 text-white/75">
                  {service.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-full border border-white/20 px-3 py-1 text-[11px] uppercase tracking-wider text-white/80"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
                {service.image.isStock ? (
                  <p className="mt-4 text-[10px] uppercase tracking-[0.22em] text-white/45">
                    Photo: Unsplash · replace with client photo
                  </p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
