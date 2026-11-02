"use client";

import { useEffect, useState } from "react";
import { PortraitImage } from "@/components/PortraitImage";
import { SectionHeading } from "@/components/SectionHeading";
import { services, type SiteImage } from "@/content/content";

function ServiceCard({
  service,
}: {
  service: (typeof services)[number];
}) {
  const slides = service.images;
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = window.setInterval(() => {
      setIndex((n) => (n + 1) % slides.length);
    }, 4200);
    return () => window.clearInterval(id);
  }, [slides.length]);

  return (
    <article className="group relative isolate overflow-hidden rounded-[1.4rem] bg-black text-white">
      <div className="relative aspect-[3/4] min-h-[28rem] sm:min-h-[32rem]">
        {slides.length > 0 ? (
          slides.map((image: SiteImage, i: number) => (
            <div
              key={image.alt}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <PortraitImage
                image={image}
                sizes="(min-width: 768px) 50vw, 100vw"
                imgClassName="object-cover"
              />
            </div>
          ))
        ) : (
          <div className="pink-gradient absolute inset-0" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/5" />
      </div>

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
        {slides.length > 1 ? (
          <div className="mt-6 flex gap-2">
            {slides.map((image, i) => (
              <button
                key={image.alt}
                type="button"
                aria-label={`Show ${service.title} look ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1.5 flex-1 rounded-full ${
                  i === index ? "bg-pink" : "bg-white/30"
                }`}
              />
            ))}
          </div>
        ) : null}
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-bg px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          gold
          eyebrow="The menu"
          title="Four rooms of glamour."
          copy="Bridal HD and airbrush, party glam, hair and men's grooming — under one studio."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
