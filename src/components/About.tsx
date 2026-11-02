import { PortraitImage } from "@/components/PortraitImage";
import { RotatingBadge } from "@/components/Brand";
import { SectionHeading } from "@/components/SectionHeading";
import { about, images } from "@/content/content";

export function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-bg px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="relative mx-auto w-full max-w-xl">
          <PortraitImage
            image={images.ownerPortrait}
            sizes="(min-width: 1024px) 40vw, 90vw"
            className="aspect-[4/5] rounded-[1.8rem]"
          />
          <div
            className="absolute -bottom-8 -left-2 w-[min(42%,340px)] overflow-hidden rounded-2xl border border-white/70 bg-bg-2 p-1.5 shadow-2xl sm:-left-8"
            style={{ maxWidth: 340 }}
          >
            <PortraitImage
              image={images.studioMakeupSession}
              sizes="340px"
              className="aspect-[3/4] rounded-xl"
            />
          </div>
          <RotatingBadge className="absolute -right-3 -top-6 h-28 w-28 text-fg sm:-right-8 sm:h-36 sm:w-36" />
        </div>

        <div className="lg:pl-6">
          <SectionHeading
            gold
            eyebrow={about.eyebrow}
            title={about.title}
            copy={about.lead}
          />
          <div className="mt-6 space-y-4 text-base leading-7 text-muted">
            {about.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          <div className="mt-8 rounded-3xl border border-line bg-bg-2 p-6">
            <p className="text-[11px] uppercase tracking-[0.32em] text-gold">
              Academy
            </p>
            <p className="mt-2 font-display text-2xl italic">{about.certification}</p>
            <p className="mt-3 text-sm leading-6 text-muted">{about.products}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
