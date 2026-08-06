import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { ClientMarquee } from "@/components/ui/client-marquee";
import { ArrowRight, Star } from "lucide-react";
import Marquee from "react-fast-marquee";

const testimonials = [
  {
    name: "V N Sharma",
    role: "Chairman, Triveni",
    quote: "Working with Nexova was a game-changer for our business. Their tailored solutions and dedicated support propelled us to new heights.",
    stars: 5,
  },
  {
    name: "Praveen Jain.",
    role: "Co-Founder, Clusterzap",
    quote: "I can’t thank Nexova enough for their expertise. Their strategic guidance revolutionized our operations and led to significant growth.",
    stars: 5,
  },
  {
    name: "Aravind Swaminathan.",
    role: "Sales Manager, Vector Industries",
    quote: "Choosing Nexova was one of the best decisions we made. Their team’s knowledge and passion for our success were evident every step of the way.",
    stars: 5,
  },
  {
    name: "Veera Leathers.",
    role: "Exporters",
    quote: "From the first interaction, Nexova impressed us with their professionalism and clarity. Their passion for helping us succeed made all the difference.",
    stars: 5,
  },
];

const highlights = [
  { value: "5/5", label: "Average client sentiment" },
  { value: "24/7", label: "Responsive partnership" },
  { value: "100%", label: "Project ownership" },
];

export default function TestimonialsPage() {
  return (
    <Layout>
      <Section className="pt-10 md:pt-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-extrabold leading-tight text-navy sm:text-5xl md:text-6xl">
            Client <span className="text-gradient-red">Testimonials</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Trusted by founders, operators, and technology leaders who needed dependable delivery, sharp execution, and measurable growth.
          </p>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]">
              <div className="text-3xl font-extrabold text-primary">{item.value}</div>
              <div className="mt-2 text-sm text-muted-foreground">{item.label}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="mb-8 md:mb-10">
          <h2 className="text-center text-3xl font-extrabold leading-tight text-navy md:text-4xl md:leading-tight">
            Trusted by Leading Brands
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground md:text-base">
            Partnerships built on trust, execution, and long-term impact across industries.
          </p>
        </div>
        <ClientMarquee />
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Board-Level "
          redPart="Impact"
          description="Insights from clients, technology leaders, and architects who trusted us with their most ambitious work."
        />

        <div className="overflow-hidden rounded-3xl border border-border bg-card p-3 shadow-[var(--shadow-soft)] md:p-4">
          <Marquee pauseOnHover gradient={false} speed={38} className="py-2">
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={`${t.name}-${index}`}
                className="mx-3 min-h-[220px] w-[320px] rounded-2xl border border-border/60 bg-background/90 p-6 shadow-[var(--shadow-soft)] sm:mx-4"
              >
                <div className="flex gap-1 text-primary">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-sm leading-relaxed text-foreground/85">
                  “{t.quote}”
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent font-bold text-sm text-primary">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </Section>

      <Section className="pt-0">
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-navy">Ready to create your own success story?</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Let’s discuss your goals and build a tailored solution that delivers measurable impact.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
