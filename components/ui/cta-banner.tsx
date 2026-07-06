import Link from "next/link";

export function CtaBanner({
  title = "Ready for a Security Audit?",
  description = "Stop guessing about your security posture. Get a comprehensive assessment from our specialized security team today.",
  primary = { label: "Schedule Audit", to: "/contact" },
  secondary = { label: "Talk to an Expert", to: "/contact" },
}: {
  title?: string;
  description?: string;
  primary?: { label: string; to: string };
  secondary?: { label: string; to: string };
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.5_0.22_18)] px-8 py-14 text-center text-primary-foreground shadow-[var(--shadow-red)] md:px-16">
      <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-white/10 blur-2xl" />
      <h3 className="relative text-3xl font-extrabold md:text-4xl">{title}</h3>
      <p className="relative mx-auto mt-3 max-w-2xl text-sm opacity-90 md:text-base">{description}</p>
      <div className="relative mt-8 flex flex-wrap items-center justify-center gap-3">
        <Link href={primary.to} className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-primary transition-transform hover:-translate-y-0.5">
          {primary.label}
        </Link>
        <Link href={secondary.to} className="inline-flex items-center justify-center rounded-full border border-white/70 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
          {secondary.label}
        </Link>
      </div>
    </div>
  );
}

export function TechStackStrip({ items }: { items: string[] }) {
  return (
    <div className="rounded-6xl border border-border bg-muted/40 px-6 py-5">
      <p className="mb-4 text-center text-[16px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
        The Integrated Tech Stack
      </p>
      <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-semibold text-foreground/80">
        {items.map((it) => (
          <span key={it} className="inline-flex items-center gap-2">
            <span className="text-primary">◆</span> {it}
          </span>
        ))}
      </div>
    </div>
  );
}
