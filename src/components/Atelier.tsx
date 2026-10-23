import { PortraitImage } from "@/components/PortraitImage";
import { images } from "@/content/content";

export function Atelier() {
  return (
    <section className="bg-bg px-4 py-16 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[1.8rem]">
        <div className="relative h-[18rem] sm:h-[24rem]">
          <PortraitImage
            image={images.stockSalonInterior}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-black/25" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-8 sm:p-12">
          <p className="text-[11px] uppercase tracking-[0.38em] text-gold">
            Inspiration visual · Photo: Unsplash
          </p>
          <h2 className="mt-3 max-w-lg font-display text-4xl text-white italic sm:text-5xl">
            A quiet chair. Warm light. The rest is her.
          </h2>
          <p className="mt-3 max-w-md text-sm text-white/70">
            Replace this interior with Rachna&apos;s studio the moment a high-res
            frame arrives.
          </p>
        </div>
        <div
          className="absolute bottom-8 right-8 hidden w-40 overflow-hidden rounded-2xl border border-white/30 shadow-2xl sm:block"
        >
          <PortraitImage
            image={images.stockMakeupBrushes}
            sizes="160px"
            className="aspect-square"
          />
        </div>
      </div>
    </section>
  );
}
