
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/layout/Layout";
import { Section, EyebrowBadge } from "@/components/ui-kit/Section";
import { LinkButton } from "@/components/ui-kit/Button";
import {
  BookOpen,
  BadgeCheck,
  Globe2,
  ShieldCheck,
  Zap,
  ArrowRight,
  User,
  Briefcase,
  CheckCircle2,
} from "lucide-react";


export default function WhyChooseUs() {
  return (
    <Layout>
      {/* Header */}
      <Section bg="surface" className="!pb-10">
        <div className="text-center max-w-3xl mx-auto">
          <EyebrowBadge>● Value Proposition</EyebrowBadge>
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-navy">
            Why Choose Us
          </h1>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground">
            What sets us apart from every other technology partner
          </p>
        </div>
      </Section>

      {/* Row 1: Experience + Certified Experts */}
      <section className="bg-surface pb-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-6">
          {/* Experience card */}
          <article className="lg:col-span-7 rounded-3xl bg-card border border-border p-8 lg:p-10 shadow-soft">
            <div className="grid sm:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-start gap-3">
                  <div className="h-12 w-12 rounded-lg bg-[oklch(0.965_0.018_18)] text-primary flex items-center justify-center shrink-0">
                    <BookOpen className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl lg:text-2xl font-extrabold text-navy leading-tight">
                    3+ Years of Enterprise Experience
                  </h3>
                </div>
                <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
                  A decade of delivering mission-critical solutions across
                  banking, healthcare, retail, logistics, and technology sectors
                  worldwide. Our experience means we anticipate challenges
                  before they arise and apply proven patterns rather than
                  reinventing the wheel on your budget.
                </p>
              </div>
              <div className="rounded-3xl overflow-hidden aspect-[4/3] bg-navy">
                <Image
                  src="/assets/why-skyscrapers.jpg"
                  alt="Glass corporate skyscrapers representing enterprise experience"
                  loading="lazy"
                  width={800}
                  height={640}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </article>

          {/* Certified Experts card (red) */}
          <article className="lg:col-span-5 rounded-3xl bg-primary text-primary-foreground p-8 lg:p-10 shadow-soft relative overflow-hidden">
            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" aria-hidden />
            <div className="h-14 w-14 rounded-xl bg-white/20 flex items-center justify-center">
              <BadgeCheck className="h-7 w-7" />
            </div>
            <h3 className="mt-8 text-2xl lg:text-3xl font-extrabold leading-tight">
              200+ Certified Experts
            </h3>
            <p className="mt-4 text-sm text-white/90 leading-relaxed">
              Our team holds 500+ active certifications including AWS Solutions
              Architect, Google Cloud Professional, CISSP, PMP, Scrum Master,
              and Google Analytics.
            </p>
            <div className="mt-8 rounded-2xl bg-white/15 border border-white/25 p-4 backdrop-blur-sm">
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/80">
                Focus Areas
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {["Cloud Arch", "CyberSec", "Agile"].map((t) => (
                  <span
                    key={t}
                    className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/20 border border-white/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Row 2: Countries Served + Projects Delivered */}
      <section className="bg-surface pb-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-6">
          {/* Countries Served */}
          <article className="lg:col-span-5 rounded-3xl bg-card border border-border p-8 lg:p-10 shadow-soft overflow-hidden">
                <div className="rounded-3xl overflow-hidden bg-navy aspect-video">
              <Image
                src="/assets/why-world-map.jpg"
                alt="Glowing world map showing global delivery footprint"
                loading="lazy"
                width={704}
                height={512}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="mt-8 flex items-center gap-3">
              <Globe2 className="h-6 w-6 text-primary shrink-0" />
              <h3 className="text-xl font-extrabold text-navy">
                50+ Countries Served
              </h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Our global delivery model combines nearshore development centers
              with regional account managers. 24/7 follow-the-sun support means
              a critical issue raised at midnight is answered in minutes.
            </p>
          </article>

          {/* Projects Delivered */}
          <article className="lg:col-span-7 rounded-3xl bg-card border border-border p-8 lg:p-10 shadow-soft">
            <div className="grid sm:grid-cols-5 gap-8 items-start">
              <div className="sm:col-span-3">
                <p className="text-6xl lg:text-7xl font-extrabold text-primary leading-none">
                  500+
                </p>
                <h3 className="mt-4 text-2xl font-extrabold text-navy">
                  Projects Successfully Delivered
                </h3>
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  Our delivery track record spans seed-stage startups raising
                  Series A to Fortune 500 enterprises managing digital
                  transformation programs worth hundreds of millions. References
                  available across every service line and industry vertical
                  upon request.
                </p>
                <Link href="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary/80 transition-colors"
                >
                  View Case Studies <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="sm:col-span-2 flex sm:flex-col sm:justify-end gap-3">
                <div className="h-24 w-24 rounded-2xl bg-muted border border-border shadow-soft flex flex-col items-center justify-center gap-1">
                  <Briefcase className="h-6 w-6 text-muted-foreground" />
                  <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground text-center">
                    Banking
                  </span>
                </div>
                <div className="h-24 w-24 rounded-2xl bg-muted border border-border shadow-soft flex items-center justify-center">
                  <User className="h-8 w-8 text-muted-foreground" />
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Row 3: Security-First + Agile */}
      <section className="bg-surface pb-16 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8 grid lg:grid-cols-12 gap-6">
          {/* Security-First Culture */}
          <article className="lg:col-span-6 relative rounded-3xl bg-card border border-border p-8 lg:p-10 shadow-soft">
            <span className="absolute top-0 left-8 right-8 h-1.5 rounded-b-full bg-primary" aria-hidden />
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-2xl font-extrabold text-navy">
                  Security-First Culture
                </h3>
                <p className="mt-2 text-xs font-bold tracking-widest text-primary uppercase">
                  ISO 27001 &amp; SOC 2 TYPE II
                </p>
              </div>
              <ShieldCheck className="h-8 w-8 text-primary shrink-0" />
            </div>
            <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
              Enterprise-grade information security is embedded in our
              operations. Data handling agreements, background-checked staff,
              encrypted communications, and rigorous access controls mean your
              intellectual property is protected throughout.
            </p>
            <ul className="mt-7 space-y-3">
              {["Background-checked staff", "Encrypted communications"].map(
                (i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-navy">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 shrink-0" />
                    {i}
                  </li>
                ),
              )}
            </ul>
          </article>

          {/* Agile, Fast, Transparent */}
          <article className="lg:col-span-6 rounded-3xl bg-card border border-border p-8 lg:p-10 shadow-soft">
            <div className="flex items-center gap-3">
              <Zap className="h-6 w-6 text-primary fill-primary shrink-0" />
              <h3 className="text-2xl font-extrabold text-navy">
                Agile, Fast, and Transparent
              </h3>
            </div>
            <div className="mt-6 grid sm:grid-cols-5 gap-6 items-start">
              <p className="sm:col-span-3 text-sm text-muted-foreground leading-relaxed">
                Two-week sprints, weekly stakeholder demos, real-time Jira
                dashboards, and proactive risk communication ensure you are
                never surprised.
              </p>
              <div className="sm:col-span-2 space-y-3">
                <div className="rounded-2xl bg-accent border border-border px-4 py-4">
                  <p className="text-lg font-extrabold text-primary leading-none">
                    2 Weeks
                  </p>
                  <p className="mt-2 text-[11px] font-semibold text-muted-foreground">
                    Avg. Time-to-Prototype
                  </p>
                </div>
                <div className="rounded-2xl bg-surface border border-border px-4 py-4">
                  <p className="text-lg font-extrabold text-primary leading-none">
                    8-12 Weeks
                  </p>
                  <p className="mt-2 text-[11px] font-semibold text-muted-foreground">
                    Mean-Time-to-Production
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface pb-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="rounded-3xl bg-primary p-12 lg:p-20 text-primary-foreground shadow-soft text-center relative overflow-hidden">
            <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white/5 blur-3xl" aria-hidden />
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" aria-hidden />
            <div className="relative z-10">
              <h3 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Ready to start your transformation?
              </h3>
              <p className="mt-6 text-base lg:text-lg text-white/90 max-w-2xl mx-auto">
                Partner with a consultancy that understands the stakes of
                enterprise technology.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <LinkButton to="/contact" variant="white" size="lg">
                  Book a Consultation
                </LinkButton>
                <Link href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-full border border-white/60 text-white hover:bg-white/10 hover:border-white/80 transition-all"
                >
                  Download Capabilities
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
