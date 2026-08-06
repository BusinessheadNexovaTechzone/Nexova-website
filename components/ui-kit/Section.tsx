export function Section({
  id,
  className = "",
  children,
  bg = "default",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  bg?: "default" | "surface" | "blush" | "navy";
}) {
  const bgClass =
    bg === "surface"
      ? "bg-surface"
      : bg === "blush"
        ? "bg-[oklch(0.965_0.018_18)]"
        : bg === "navy"
          ? "bg-navy text-primary-foreground"
          : "bg-background";
  return (
    <section id={id} className={`relative ${bgClass} ${className}`}>
      <div className="mx-auto max-w-7xl px-5 lg:px-8 py-20 lg:py-28">{children}</div>
    </section>
  );
}

export function EyebrowBadge({ children, tone = "crimson" }: { children: React.ReactNode; tone?: "crimson" | "navy" }) {
  const cls =
    tone === "crimson"
      ? "bg-[oklch(0.96_0.02_18)] text-primary border-primary/15"
      : "bg-muted text-navy border-navy/10";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full border ${cls} px-3 py-1 text-[11px] font-bold uppercase tracking-wider`}>
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}

export function GradientText({ children }: { children: React.ReactNode }) {
  return (
    <span className="bg-gradient-crimson bg-clip-text text-transparent italic">
      {children}
    </span>
  );
}

export function StatCard({
  value,
  label,
  variant = "card",
}: {
  value: string;
  label: string;
  variant?: "card" | "plain";
}) {
  if (variant === "plain") {
    return (
      <div>
        <p className="text-3xl lg:text-4xl font-extrabold text-primary">{value}</p>
        <p className="mt-1 text-[11px] uppercase tracking-wider font-semibold text-muted-foreground">{label}</p>
      </div>
    );
  }
  return (
    <div className="rounded-2xl bg-card border border-border px-5 py-4 shadow-soft">
      <p className="text-2xl lg:text-3xl font-extrabold text-primary">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider font-semibold text-muted-foreground">{label}</p>
    </div>
  );
}
