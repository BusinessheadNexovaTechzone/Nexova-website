
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { Star } from "lucide-react";


const all = [
  { name: "Maria L.", role: "CTO, FinEdge", quote: "Their team operates with surgical precision. We shipped our flagship product in half the time we estimated.", stars: 5 },
  { name: "David R.", role: "Head of Product, Stax", quote: "The most architecturally rigorous partner we have ever engaged. Code quality is exceptional.", stars: 5 },
  { name: "Elena B.", role: "VP Eng, NorthCloud", quote: "They feel like an extension of our internal team — strategic, fast and accountable.", stars: 5 },
  { name: "Tom A.", role: "Founder, RiderOps", quote: "From discovery to launch in 11 weeks. The team's velocity is unmatched.", stars: 5 },
  { name: "Priya S.", role: "Director, MetaHealth", quote: "They didn't just write code — they reshaped our product strategy. Truly board-level partners.", stars: 5 },
  { name: "Owen K.", role: "CEO, Lumen Retail", quote: "Best investment we made this year. Our store operations were transformed within a quarter.", stars: 5 },
];

export default function TestimonialsPage() {
  return (
    <Layout>
      <Section>
        <SectionHeading title="Board-Level " redPart="Impact" description="Insights from clients, technology leaders and architects who trusted us with their most ambitious work." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {all.map((t) => (
            <div key={t.name} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: t.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">"{t.quote}"</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent font-bold text-primary">{t.name[0]}</div>
                <div>
                  <div className="text-sm font-bold text-navy">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
