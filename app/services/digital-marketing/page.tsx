
import { Layout } from "@/components/layout/Layout";
import { Section, EyebrowChip } from "@/components/ui/section-shell";
import { CtaBanner, TechStackStrip } from "@/components/ui/cta-banner";
import { techStack } from "@/lib/services";
import { getIcon } from "@/lib/icon-mapper";
import { BadgeCheck, Mail, BarChart3, ArrowRight } from "lucide-react";


const cores = [
  { icon: "Search", title: "Search Engine Optimization (SEO)", desc: "Our SEO methodology goes beyond keywords. We focus on technical excellence and content authority to dominate rankings.", points: ["Technical audits & core web vitals", "Authority content & semantic SEO", "White-hat link acquisition"] },
  { icon: "MousePointerClick", title: "Pay-Per-Click Advertising (PPC)", desc: "Aggressive Performance Max and Search campaigns designed for maximum ROI and granular control.", highlight: true, points: ["Google Search, Display & Shopping", "YouTube & Performance Max", "Ad group segmentation"] },
  { icon: "FileText", title: "Content Marketing", desc: "Strategic storytelling that establishes your brand as an industry authority and fuels your search strategy.", points: ["Pillar page & cluster strategy", "Keyword-optimised editorial", "Multi-format distribution"] },
  { icon: "Share2", title: "Social Media Management", desc: "Platform-specific content that cuts through the noise on the networks where your audience lives.", points: ["LinkedIn & X (Twitter) B2B", "Instagram & TikTok creative", "Engagement & community building"] },
];

export default function DigitalMarketingPage() {
  return (
    <Layout>
      <section className="bg-hero-soft pt-12 pb-10 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="anim-fade-up">
            <EyebrowChip>Digital Marketing</EyebrowChip>
            <h1 className="mt-5 text-4xl leading-[1.05] text-navy md:text-6xl">
              Data-driven<br />campaigns that<br />drive <span className="italic text-gradient-red">measurable</span><br />results.
            </h1>
            <div className="mt-8 flex flex-wrap items-center gap-6">
              <div>
                <div className="text-3xl font-extrabold text-primary">500%</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Avg. ROAS</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-navy">3x</div>
                <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">Lead Generation</div>
              </div>
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-primary"><BadgeCheck className="h-5 w-5" /></span>
                <div className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">Google Certified<br />Partners</div>
              </div>
            </div>
          </div>
          <div className="anim-fade-up overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img src="/assets/laptop-glow.jpg" alt="Analytics dashboard" width={1024} height={768} className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <Section className="pt-8">
        <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 className="text-3xl text-navy">The Philosophy</h2>
            <div className="mt-3 h-1 w-16 rounded-full bg-primary" />
          </div>
          <div className="space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>Digital marketing without data is just guesswork. We eliminate the noise by bridging the gap between <strong className="text-foreground">creative storytelling</strong> and <strong className="text-foreground">rigorous analytics</strong>.</p>
            <p className="text-sm">Our approach is rooted in the belief that every touchpoint must be measured and every creative choice must be justified by performance. We don't just chase clicks; we architect journeys that convert.</p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-5 md:grid-cols-2">
          {cores.map((c) => {
            const Icon = getIcon(c.icon);
            const isRed = c.highlight;
            return (
              <div key={c.title} className={`card-hover rounded-2xl border p-7 shadow-[var(--shadow-soft)] ${isRed ? "border-transparent bg-primary text-primary-foreground" : "border-border bg-card"}`}>
                <div className={`mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl ${isRed ? "bg-white/15" : "bg-accent text-primary"}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className={`text-lg font-bold ${isRed ? "text-white" : "text-navy"}`}>{c.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${isRed ? "text-white/85" : "text-muted-foreground"}`}>{c.desc}</p>
                <ul className="mt-5 space-y-2 text-sm">
                  {c.points.map((p) => (
                    <li key={p} className={`flex items-center gap-2 ${isRed ? "text-white/90" : "text-foreground/80"}`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${isRed ? "bg-white" : "bg-primary"}`} /> {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      <Section className="pt-0">
        <h2 className="mb-8 text-center text-3xl text-navy md:text-4xl">Advanced Marketing Services</h2>
        <div className="grid gap-5 lg:grid-cols-[2fr_1fr]">
          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-accent text-primary"><Mail className="h-4 w-4" /></div>
                  <h3 className="text-base font-bold text-navy">Email Marketing & Automation</h3>
                  <p className="mt-2 text-sm text-muted-foreground">Sophisticated HubSpot and Klaviyo workflows including welcome sequences and abandoned cart recovery systems.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {["HUBSPOT", "KLAVIYO"].map((t) => <span key={t} className="rounded-full bg-muted px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">{t}</span>)}
                  </div>
                </div>
                <Mail className="h-12 w-12 text-muted-foreground/30" />
              </div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <h3 className="text-base font-bold text-navy">LinkedIn B2B</h3>
                <p className="mt-2 text-sm text-muted-foreground">Account-based marketing (ABM) and CRM-matched audiences for high-intent lead generation.</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary">Explore ABM <ArrowRight className="h-3.5 w-3.5" /></a>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                <h3 className="text-base font-bold text-navy">Influencer & Partnerships</h3>
                <p className="mt-2 text-sm text-muted-foreground">Affiliate program setup and commission management tracking for scalable growth.</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-primary">Partner Network <ArrowRight className="h-3.5 w-3.5" /></a>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-border bg-muted/40 p-6">
            <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-card text-primary"><BarChart3 className="h-4 w-4" /></div>
            <h3 className="text-base font-bold text-navy">Analytics & Attribution</h3>
            <p className="mt-2 text-sm text-muted-foreground">Full GA4 event taxonomy design, server-side GTM tagging and custom Looker Studio performance dashboards.</p>
            <div className="mt-6 overflow-hidden rounded-xl">
              <img src="/assets/laptop-glow.jpg" alt="Dashboard preview" width={400} height={200} className="h-32 w-full object-cover" loading="lazy" />
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
