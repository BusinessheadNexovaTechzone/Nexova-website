
import { Layout } from "@/components/layout/Layout";
import { Section, EyebrowChip, SectionHeading } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/ui/cta-banner";
import { PillBadges } from "@/components/ui/tech-badges";
import { getIcon } from "@/lib/icon-mapper";
import { ArrowRight } from "lucide-react";


const stats = [
  { value: "100%", label: "Tailored Builds" },
  { value: "Fixed Price", label: "& T&M Models" },
  { value: "Dedicated", label: "Dev Teams" },
];

const features = [
  { icon: "Users", title: "Requirements Engineering", desc: "Structured discovery workshops with stakeholders, subject matter experts and end users produce detailed Business Requirements Specifications (BRS), Functional Requirements Specifications (FRS) and non-functional requirements covering performance, security and scalability." },
  { icon: "Building2", title: "Domain-Specific Applications", desc: "Deep industry expertise in healthcare, financial services, logistics and retail allows us to deliver software that speaks the language of your industry from day one." },
  { icon: "Boxes", title: "System Integration", desc: "We connect disparate enterprise systems (ERP, CRM, HRMS, SCM) via RESTful APIs, event-driven messaging (Kafka, RabbitMQ) and ESB middleware." },
  { icon: "Workflow", title: "Workflow Automation & RPA", desc: "Repetitive manual processes — data entry, document processing, invoice matching, report generation — automated using UiPath, Automation Anywhere or custom Python orchestration. ROI calculations consistently show 6–12 month payback periods.", highlight: true, tags: ["UIPATH", "PYTHON"] },
];

const support = [
  { icon: "Tag", title: "White-Label Solutions", desc: "Rebrandable SaaS platforms, multi-tenant architectures and configurable feature flags allow you to license your software to clients under your own brand." },
  { icon: "Clock", title: "Support & Evolution", desc: "SLA-backed support tiers (8x5 to 24x7) with defined P1–P4 response times. Quarterly roadmap reviews and proactive security patching." },
  { icon: "ShieldCheck", title: "Regulatory Compliance", desc: "Audit trails, role-based access control, GDPR consent management and automated compliance reporting for FDA 21 CFR Part 11 and EU GMP." },
  { icon: "Lock", title: "IP Strategy", desc: "Full IP ownership transfer to the client upon project completion. Code escrow and knowledge transfer programs protect your investment." },
];

const techStack = ["Selenium", "Playwright", "Cypress", "JMeter", "Postman", "JIRA", "TestRail", "k6", "Appium", "BrowserStack"];

export default function CustomizedSoftwarePage() {
  return (
    <Layout>
      <section className="bg-hero-soft pt-12 pb-10 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="anim-fade-up">
            <EyebrowChip>Service Overview</EyebrowChip>
            <h1 className="mt-5 text-4xl leading-[1.05] text-navy md:text-6xl">
               Customized<br /><span className="text-gradient-red">Software</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Bespoke solutions built precisely for your unique business needs. We encode your logic into high-performance digital tools.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-3">
              {stats.map((s) => (
                <div key={s.label} className="rounded-2xl border border-border bg-card px-4 py-4 shadow-[var(--shadow-soft)]">
                  <div className="text-xl font-extrabold text-primary md:text-2xl">{s.value}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="anim-fade-up overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img src="/assets/dev-dual-monitors.jpg" alt="Custom development" width={1024} height={768} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <Section className="pt-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-3xl text-navy">Overview</h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
          </div>
          <p className="text-base leading-relaxed text-muted-foreground">
            Off-the-shelf software rarely fits the precise workflows, data models and competitive differentiators of your business. Our custom software practice builds bespoke solutions from the ground up — or extends existing platforms — to encode your unique business logic in software. With dedicated cross-functional teams, transparent governance and flexible commercial models, we become a true technology partner invested in your long-term success.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl text-navy md:text-4xl">Key Features & Capabilities</h2>
          <a href="#stack" className="hidden items-center gap-1 text-sm font-semibold text-primary md:inline-flex">
            Explore Details <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          {features.map((f) => {
            const Icon = getIcon(f.icon);
            const isRed = f.highlight;
            return (
              <div
                key={f.title}
                className={`relative card-hover rounded-2xl border p-6 shadow-[var(--shadow-soft)] ${isRed ? "border-transparent bg-primary text-primary-foreground" : "border-border bg-card"}`}
              >
                {!isRed && <div className="absolute inset-x-6 top-0 h-1 rounded-full bg-primary/0 group-hover:bg-primary" />}
                <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${isRed ? "bg-white/15 text-white" : "bg-accent text-primary"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={`text-lg font-bold ${isRed ? "text-white" : "text-navy"}`}>{f.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${isRed ? "text-white/85" : "text-muted-foreground"}`}>{f.desc}</p>
                {f.tags && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {f.tags.map((t) => (
                      <span key={t} className="rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">{t}</span>
                    ))}
                  </div>
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
            const Icon = s.icon;
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

      <Section id="stack" className="pt-0">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h2 className="text-3xl text-navy">Our Technology Stack</h2>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground">We leverage the world's most powerful open-source and enterprise tools to build your custom quality framework.</p>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm font-semibold text-primary md:inline-flex">
            Explore full ecosystem <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <PillBadges items={techStack} />
      </Section>

      <Section className="pt-0">
        <CtaBanner />
      </Section>
    </Layout>
  );
}
