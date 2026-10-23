import { marqueeItems } from "@/content/content";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden border-y border-line bg-bg-2 py-4">
      <div className="marquee-track flex w-max gap-10 whitespace-nowrap">
        {items.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-10">
            <span className="text-[12px] uppercase tracking-[0.32em] text-muted">
              {item}
            </span>
            <span className="text-gold" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
