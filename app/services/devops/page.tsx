
import { Layout } from "@/components/layout/Layout";
import { Section, EyebrowChip, SectionHeading } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/ui/cta-banner";
import { getIcon } from "@/lib/icon-mapper";
import { Users, Sparkles, ArrowRight } from "lucide-react";


const stats = [
  { value: "10×", label: "Faster Deployments" },
  { value: "Daily", label: "Release Cycles" },
  { value: "90%", label: "Less Downtime" },
];

const services = [
  { icon: "Settings2", title: "CI/CD Pipeline Design", desc: "Architecting robust automated build and deployment workflows that ensure code quality and rapid delivery cycles across all environments.", link: true },
  { icon: "Code2", title: "Infrastructure as Code (IaC)", desc: "Defining and managing cloud infrastructure using declarative code to achieve consistency and scalability." },
  { icon: "Boxes", title: "Containerisation", desc: "Standardising application packaging and orchestration with Docker and Kubernetes for portability." },
  { icon: "BarChart3", title: "Observability", desc: "Full-stack monitoring and log aggregation to gain deep insights into application health and performance." },
  { icon: "ShieldCheck", title: "Site Reliability Engineering (SRE)", desc: "Applying software engineering principles to operations to build ultra-scalable and highly reliable distributed systems.", tags: ["SERVICE LEVEL OBJECTIVES", "ERROR BUDGETS"] },
  { icon: "GitBranch", title: "GitOps & Platform", desc: "Using Git as the single source of truth for infrastructure and application state." },
  { icon: "ShieldCheck", title: "Security DevSecOps", desc: "Integrating security scans and compliance checks directly into the automated pipeline." },
  { icon: "DollarSign", title: "Cloud Cost Management (FinOps)", desc: "Optimising cloud spending through continuous monitoring and automated resource scaling strategies to ensure maximum ROI." },
];

const support = [
  { icon: "Tag", title: "White-Label Solutions", desc: "Rebrandable SaaS platforms, multi-tenant architectures and configurable feature flags allow you to license your software to clients under your own brand." },
  { icon: "Clock", title: "Support & Evolution", desc: "SLA-backed support tiers (8x5 to 24x7) with defined P1–P4 response times. Quarterly roadmap reviews and proactive security patching." },
  { icon: "ShieldCheck", title: "Regulatory Compliance", desc: "Audit trails, role-based access control, GDPR consent management and automated compliance reporting for FDA 21 CFR Part 11 and EU GMP." },
  { icon: "Lock", title: "IP Strategy", desc: "Full IP ownership transfer to the client upon project completion. Code escrow and knowledge transfer programs protect your investment." },
];

const tech = [
  { code: "DK", label: "Docker" },
  { code: "K8", label: "Kubernetes" },
  { code: "TF", label: "Terraform" },
  { code: "JK", label: "Jenkins" },
  { code: "GA", label: "GitHub Actions" },
  { code: "AC", label: "ArgoCD" },
];

export default function DevOpsPage() {
  return (
    <Layout>
      <section className="bg-hero-soft pt-12 pb-10 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="anim-fade-up">
            <EyebrowChip>Engineering Excellence</EyebrowChip>
            <h1 className="mt-5 text-4xl leading-[1.05] text-navy md:text-6xl">
              13 DevOps<br /><span className="text-gradient-red">Services</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Accelerating delivery with automation, culture and collaboration. We break down silos to build high-performance engineering organisations.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-2xl font-extrabold text-navy md:text-3xl">{s.value}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="anim-fade-up overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img src="/assets/hero-monitor.jpg" alt="DevOps graph" width={1024} height={768} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <Section className="pt-8">
        <div className="grid gap-6 lg:grid-cols-[1.3fr_1fr_1fr] lg:items-start">
          <div>
            <h2 className="text-3xl text-navy">Redefining Transformation</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              DevOps is more than a toolchain; it's a strategic shift in how organisations deliver value. We bridge the gap between development and operations through radical transparency and automated governance.
            </p>
          </div>
          <div className="card-hover rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
              <Users className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-navy">Culture First</h4>
            <p className="mt-2 text-sm text-muted-foreground">Breaking down legacy silos through collaborative workflows and shared accountability models.</p>
          </div>
          <div className="card-hover rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
              <Sparkles className="h-5 w-5" />
            </div>
            <h4 className="font-bold text-navy">Automation Always</h4>
            <p className="mt-2 text-sm text-muted-foreground">Removing manual intervention in the path to production to ensure repeatable, reliable releases.</p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading title="Core Service " redPart="Capabilities" description="End-to-end engineering solutions for the modern cloud era." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => {
            const Icon = getIcon(s.icon);
            return (
              <div key={s.title} className="card-hover rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                {s.tags && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span key={t} className="rounded-full bg-muted px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{t}</span>
                    ))}
                  </div>
                )}
                {s.link && (
                  <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-semibold text-primary">View Details <ArrowRight className="h-3.5 w-3.5" /></a>
                )}
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading title="Ongoing Support & " redPart="Evolution" description="A partnership that grows with your business — ensuring security, compliance and technological edge." />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {support.map((s) => {
            const Icon = getIcon(s.icon);
            return (
              <div key={s.title} className="card-hover rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-navy">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-3xl text-navy">Our Technology Stack</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">We leverage the best-of-breed open source and enterprise tools to build resilient platforms.</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 sm:grid-cols-6">
          {tech.map((t) => (
            <div key={t.code} className="rounded-2xl border border-border bg-card px-4 py-5 text-center shadow-[var(--shadow-soft)]">
              <div className="text-xl font-extrabold text-primary">{t.code}</div>
              <div className="mt-1 text-xs font-semibold text-foreground/70">{t.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBanner />
      </Section>
    </Layout>
  );
}
