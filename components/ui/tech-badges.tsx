export function TechBadges({ items }: { items: { code: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
      {items.map((t) => (
        <div key={t.code} className="rounded-2xl border border-border bg-card px-4 py-4 text-center shadow-[var(--shadow-soft)]">
          <div className="text-lg font-extrabold text-primary">{t.code}</div>
          <div className="mt-1 text-xs font-semibold text-foreground/70">{t.label}</div>
        </div>
      ))}
    </div>
  );
}

export function PillBadges({ items }: { items: string[] }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
      {items.map((t) => (
        <div key={t} className="rounded-full border border-border bg-muted/60 px-5 py-3 text-center text-sm font-semibold text-foreground/80">
          {t}
        </div>
      ))}
    </div>
  );
}
