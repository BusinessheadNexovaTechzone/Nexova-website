
import { Layout } from "@/components/layout/Layout";
import { Section, EyebrowChip, SectionHeading } from "@/components/ui/section-shell";
import { CtaBanner, TechStackStrip } from "@/components/ui/cta-banner";
import { techStack } from "@/lib/services";
import { getIcon } from "@/lib/icon-mapper";
import { Database, ShieldCheck, Users, CheckCircle2 } from "lucide-react";


const capabilities = [
  { icon: "Database", title: "Data Engineering & Pipelines", desc: "Scalable ETL/ELT processes with robust orchestration.", tags: ["AIRFLOW", "SNOWFLAKE"] },
  { icon: "BarChart3", title: "Business Intelligence (BI)", desc: "Interactive storytelling and executive visibility dashboards.", tags: ["TABLEAU", "LOOKER"] },
  { icon: "FileBarChart", title: "Statistical Modeling", desc: "Price elasticity, demand forecasting and predictive scoring.", tags: ["PYTHON", "R"] },
  { icon: "Boxes", title: "Big Data Processing", desc: "Distributed compute for petabyte-scale data lakes.", tags: ["SPARK", "DATABRICKS"] },
];

export default function DataSciencePage() {
  return (
    <Layout>
      <section className="bg-hero-soft pt-12 pb-10 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="anim-fade-up">
            <EyebrowChip>Advanced Analytics</EyebrowChip>
            <h1 className="mt-5 text-4xl leading-[1.05] text-navy md:text-6xl">
              10 Data Science<br />& <span className="text-gradient-red">Analytics</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Turning raw data into strategic competitive advantage through high-fidelity modelling and engineering.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#caps" className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-red)]">Get Started</a>
              <a href="#proc" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground hover:border-primary">Our Process</a>
            </div>
          </div>
          <div className="anim-fade-up relative overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img src="/assets/ai-globe.jpg" alt="Data" width={1024} height={768} className="h-full w-full object-cover" />
            <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)]">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                <Database className="h-5 w-5" />
              </div>
              <div>
                <div className="text-base font-extrabold text-navy">1B+</div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Records Processed</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-0 rounded-2xl border border-border bg-card divide-y divide-border md:grid-cols-2 md:divide-x md:divide-y-0 shadow-[var(--shadow-soft)]">
            <div className="px-6 py-6 text-center">
              <div className="text-3xl font-extrabold text-primary">360°</div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Customer View</div>
            </div>
            <div className="px-6 py-6 text-center">
              <div className="text-3xl font-extrabold text-primary">Real-time</div>
              <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">Streaming Analytics</div>
            </div>
          </div>
        </div>
      </section>

      <Section id="proc">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-3xl text-navy">Strategic Intelligence</h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Data is the most valuable asset in the modern enterprise, yet it remains siloed and underutilised. We bridge the gap between collection and insight, transforming fragmented signals into clear, actionable roadmaps for growth.
          </p>
        </div>
      </Section>

      <Section id="caps" className="pt-0">
        <h2 className="text-3xl text-navy md:text-4xl">Core Capabilities</h2>
        <p className="mt-2 text-sm text-muted-foreground">Precision engineering for data-driven organisations.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => {
            const Icon = getIcon(c.icon);
            return (
              <div key={c.title} className="card-hover rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-navy">{c.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span key={t} className="rounded-full bg-muted px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{t}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-bold text-navy">Data Governance & Quality</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Ensure data integrity with automated testing and clear ownership. We implement Great Expectations and dbt tests to maintain lineage and absolute trust in your reports.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-border pt-5">
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-primary">Lineage</div>
                <div className="mt-1 text-sm font-semibold text-foreground/85">End-to-end visibility</div>
              </div>
              <div>
                <div className="text-[11px] font-bold uppercase tracking-wider text-primary">Ownership</div>
                <div className="mt-1 text-sm font-semibold text-foreground/85">Defined data stewards</div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-primary p-8 text-primary-foreground shadow-[var(--shadow-red)]">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
              <Users className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-xl font-bold">Customer Analytics</h3>
            <p className="mt-3 text-sm leading-relaxed opacity-90">
              Advanced CLV models and RFM segmentation integrated directly with your CRM/CDP for automated personalisation.
            </p>
            <ul className="mt-6 space-y-2 text-sm">
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Lifetime Value</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Churn Prediction</li>
              <li className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Segment Tuning</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 lg:grid-cols-[1fr_2fr]">
          <div className="rounded-3xl border border-border bg-muted/40 p-6">
            <h4 className="text-base font-bold text-navy">Real-time Streaming</h4>
            <p className="mt-2 text-sm text-muted-foreground">Apache Kafka and Flink deployments for sub-second event processing — move from daily batches to instant intelligence.</p>
          </div>
          <div className="grid gap-5 rounded-3xl border border-border bg-card p-6 sm:grid-cols-[2fr_1fr_1fr] shadow-[var(--shadow-soft)]">
            <div>
              <h4 className="text-base font-bold text-navy">Strategy & Maturity Assessment</h4>
              <p className="mt-2 text-sm text-muted-foreground">A comprehensive evaluation of your infrastructure, governance, culture and skills. We identify the highest-impact use cases to build your roadmap.</p>
            </div>
            <div className="rounded-2xl bg-muted/60 p-4 text-center">
              <div className="text-2xl font-extrabold text-primary">140+</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Checkpoints</div>
            </div>
            <div className="rounded-2xl bg-muted/60 p-4 text-center">
              <div className="text-2xl font-extrabold text-primary">4-Wk</div>
              <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Duration</div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <TechStackStrip items={techStack} />
      </Section>

      <Section className="pt-0">
        <CtaBanner />
      </Section>
    </Layout>
  );
}
