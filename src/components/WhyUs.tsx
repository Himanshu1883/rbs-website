import { site, whyUs } from "@/content/content";

export function WhyUs() {
  return (
    <section className="bg-bg px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <p className="text-[11px] uppercase tracking-[0.38em] text-pink">
          Why this studio
        </p>
        <h2 className="mt-4 max-w-xl font-display text-4xl leading-tight sm:text-5xl">
          Proof you can walk into.
        </h2>
        <p className="mt-5 max-w-lg text-muted">
          A real chair, a real logo wall, and a unisex studio built for bridal
          days as much as a sharp Tuesday cut.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {whyUs.map((item, i) => (
            <article
              key={item.title}
              className="rounded-3xl border border-line bg-bg-2 p-6"
            >
              <p className="font-display text-2xl text-gold/70">0{i + 1}</p>
              <h3 className="mt-3 font-display text-2xl italic">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted">{item.copy}</p>
            </article>
          ))}
          <article className="rounded-3xl bg-pink p-6 text-white sm:col-span-2">
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/70">
              Social studio
            </p>
            <p className="mt-2 font-display text-4xl italic">
              {site.instagramFollowers} on Instagram
            </p>
            <p className="mt-2 text-sm text-white/80">
              Follow {site.instagramHandle} for reels, days-of and new work.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
