"use client";

import { useMemo, useState } from "react";
import { X } from "lucide-react";
import { PortraitImage } from "@/components/PortraitImage";
import { SectionHeading } from "@/components/SectionHeading";
import {
  gallery,
  galleryFilters,
  type GalleryFilter,
} from "@/content/content";

export function Gallery() {
  const [filter, setFilter] = useState<GalleryFilter>("All");
  const [active, setActive] = useState<number | null>(null);

  const items = useMemo(() => {
    if (filter === "All") return gallery;
    return gallery.filter((item) => item.category === filter);
  }, [filter]);

  const lightbox = active !== null ? items[active] : null;

  return (
    <section id="gallery" className="bg-bg-2 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            gold
            eyebrow="Our work"
            title="The real portfolio."
            copy="Bridal, party, hair and studio days — photographed at RBS Make-Over."
          />
          <div className="flex flex-wrap gap-2">
            {galleryFilters.map((chip) => (
              <button
                key={chip}
                type="button"
                onClick={() => {
                  setFilter(chip);
                  setActive(null);
                }}
                className={`rounded-full px-4 py-2 text-[12px] uppercase tracking-[0.2em] ${
                  filter === chip
                    ? "bg-pink text-white"
                    : "border border-line text-muted"
                }`}
              >
                {chip}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {items.map((item, i) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActive(i)}
              className="mb-4 block w-full overflow-hidden rounded-2xl"
            >
              <PortraitImage
                image={item.image}
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 50vw, 100vw"
                className="aspect-[3/4]"
                imgClassName="transition duration-500 hover:scale-[1.03]"
              />
            </button>
          ))}
        </div>
      </div>

      {lightbox ? (
        <div
          className="fixed inset-0 z-[80] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            aria-label="Close"
            className="absolute right-5 top-5 text-white"
            onClick={() => setActive(null)}
          >
            <X />
          </button>
          <div
            className="relative h-[84vh] w-full max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            <PortraitImage image={lightbox.image} sizes="80vw" />
          </div>
        </div>
      ) : null}
    </section>
  );
}
