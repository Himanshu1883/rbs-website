export function SectionHeading({
  eyebrow,
  title,
  copy,
  align = "left",
  gold = false,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
  align?: "left" | "center";
  gold?: boolean;
}) {
  const alignClass = align === "center" ? "mx-auto text-center" : "";
  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {eyebrow ? (
        <p className="mb-3 text-[11px] font-medium uppercase tracking-[0.38em] text-pink">
          {eyebrow}
        </p>
      ) : null}
      {gold ? <div className="gold-rule mb-5 w-24" /> : null}
      <h2 className="font-display text-3xl leading-[1.08] tracking-tight text-fg sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {copy ? (
        <p className="mt-3 text-sm leading-6 text-muted sm:text-base">{copy}</p>
      ) : null}
    </div>
  );
}
