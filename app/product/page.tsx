
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { CheckCircle2, ArrowRight } from "lucide-react";


const features = [
  "Real-time orders dashboard",
  "Multi-tenant operations",
  "Rider analytics & dispatch",
  "Click & collect workflow",
  "Loyalty & promotions engine",
  "POS & kitchen display sync",
];

export default function ProductPage() {
  return (
    <Layout>
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Flagship Product</p>
            <h1 className="mt-3 text-4xl text-navy md:text-6xl">Meet <span className="text-gradient-red">Foodzo</span></h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              A complete F&B SaaS ecosystem built for scale. We architected operations, ordering and rider logistics into a single high-availability platform that runs in 12+ countries.
            </p>
            <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-foreground/85"><CheckCircle2 className="h-4 w-4 text-primary" /> {f}</li>
              ))}
            </ul>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-red)]">
              Request Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img src="/assets/foodzo.jpg" alt="Foodzo product" width={1024} height={768} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading title="Built on our " redPart="engineering DNA" description="Foodzo runs on the same architecture we deliver to enterprise clients — battle-tested, observable and secure." />
      </Section>
    </Layout>
  );
}
