import { EyebrowChip } from "./section-shell";

export function ServiceHero({
  eyebrow,
  title,
  redPart,
  description,
  stats,
  visual,
}: {
  eyebrow: string;
  title: string;
  redPart: string;
  description: string;
  stats?: { value: string; label: string }[];
  visual?: React.ReactNode;
}) {
  return (
    <section className="bg-hero-soft pt-6 pb-6 md:pt-10 md:pb-8">
      <div className="mx-auto grid max-w-8xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10 lg:px-6">
        <div className="anim-fade-up">
          <EyebrowChip>{eyebrow}</EyebrowChip>
          <h1 className="mt-5 text-4xl leading-[1.05] text-navy md:text-6xl">
            {title} <br />
            <span className="text-gradient-red">{redPart}</span>
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">{description}</p>
          {stats && (
            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card px-4 py-4 text-center shadow-[var(--shadow-soft)]">
                  <div className="text-xl font-extrabold text-primary md:text-2xl">{s.value}</div>
                  <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="anim-fade-up">
          {visual ?? (
            <div className="aspect-[4/3] w-full rounded-3xl bg-gradient-to-br from-navy to-[oklch(0.25_0.05_265)] shadow-[var(--shadow-card)]" />
          )}
        </div>
      </div>
    </section>
  );
}
