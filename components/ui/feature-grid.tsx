"use client";

import { getIcon } from "@/lib/icon-mapper";

export type Feature = {
  title: string;
  description: string;
  icon: string;
  highlight?: boolean;
  tags?: string[];
};

export function FeatureGrid({ features, cols = 3 }: { features: Feature[]; cols?: 2 | 3 | 4 }) {
  const colCls = cols === 2 ? "md:grid-cols-2" : cols === 4 ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid gap-5 ${colCls}`}>
      {features.map((f) => {
        const Icon = getIcon(f.icon);
        const isRed = f.highlight;
        return (
          <div
            key={f.title}
            className={`card-hover rounded-2xl border p-6 shadow-[var(--shadow-soft)] ${
              isRed ? "border-transparent bg-primary text-primary-foreground" : "border-border bg-card"
            }`}
          >
            <div
              className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${
                isRed ? "bg-white/15 text-white" : "bg-accent text-primary"
              }`}
            >
              <Icon className="h-5 w-5" />
            </div>
            <h3 className={`text-lg font-bold ${isRed ? "text-white" : "text-navy"}`}>{f.title}</h3>
            <p className={`mt-2 text-sm leading-relaxed ${isRed ? "text-white/85" : "text-muted-foreground"}`}>{f.description}</p>
            {f.tags && (
              <div className="mt-5 flex flex-wrap gap-2">
                {f.tags.map((t) => (
                  <span
                    key={t}
                    className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                      isRed ? "bg-white/15 text-white" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
