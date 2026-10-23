import { PortraitImage } from "@/components/PortraitImage";
import { images } from "@/content/content";

export function BeforeAfter() {
  return (
    <section className="bg-bg px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
        <div>
          <p className="text-[11px] uppercase tracking-[0.38em] text-pink">
            Transformations
          </p>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl">
            Before & after, when the real pairs arrive.
          </h2>
          <p className="mt-5 max-w-md text-muted">
            We will not invent a before. Until paired photographs are sent, this
            slot holds one of Rachna&apos;s party looks as a promise of the finish.
          </p>
        </div>
        <div className="relative overflow-hidden rounded-[1.6rem]">
          <div className="grid grid-cols-2">
            <div className="relative h-[24rem] pink-gradient grid place-items-center p-6 text-center text-white">
              <div>
                <p className="font-display text-3xl italic">Before</p>
                <p className="mt-2 text-xs uppercase tracking-[0.24em] text-white/70">
                  Waiting on client photo
                </p>
              </div>
            </div>
            <PortraitImage
              image={images.partyChinHand}
              sizes="40vw"
              className="h-[24rem]"
            />
          </div>
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-950">
            After
          </div>
        </div>
      </div>
    </section>
  );
}
