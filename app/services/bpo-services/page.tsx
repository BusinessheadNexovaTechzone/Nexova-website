import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/ui/service-hero";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/ui/cta-banner";

export default function BpoServicesPage() {
  return (
    <Layout>
      <ServiceHero
        eyebrow="Business Process Outsourcing"
        title="Scalable BPO Services That Drive Business Growth"
        redPart="Streamline operations with expert outsourcing"
        description="Our Business Process Outsourcing Services help startups, SMEs, and enterprises reduce operational costs, improve productivity, and deliver exceptional customer experiences."
        stats={[
          { value: "24/7", label: "Operational Support" },
          { value: "99%", label: "Process Accuracy" },
          { value: "50+", label: "Industry Verticals" },
        ]}
        visual={
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src="/assets/workforce-outsourcing.png"
              alt="Business process outsourcing services"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        }
      />

      <Section className="pt-0">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)]">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">Scalable, secure, and results-driven BPO</p>
          <p className="text-base font-semibold text-foreground/90">
            Our Business Process Outsourcing solutions become an extension of your business, delivering efficiency, scalability, and measurable results.
          </p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
            >
              Get a Free BPO Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Talk to a BPO Specialist
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Why Business Process Outsourcing"
          redPart="Matters"
          description="Managing business operations internally requires continuous investments in hiring, infrastructure, training, and technology. As organizations grow, maintaining operational efficiency becomes increasingly challenging."
        />
        <p className="mx-auto max-w-3xl text-center text-foreground/80">
          Our Business Process Outsourcing Services combine experienced professionals, modern technology, and proven workflows to deliver reliable BPO Services that reduce operational costs, improve service quality, and increase overall productivity.
        </p>
      </Section>

      <Section id="our-services">
        <SectionHeading title="Our BPO" redPart="Services" />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Customer Support Services</h3>
            <p className="mt-4 text-foreground/90">
              Deliver exceptional customer experiences through professional BPO solutions.
            </p>
            <ul className="mt-6 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Voice Support</li>
              <li>Email Support</li>
              <li>Live Chat Support</li>
              <li>Help Desk Services</li>
              <li>Customer Complaint Resolution</li>
              <li>Customer Retention</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Back Office Support</h3>
            <p className="mt-4 text-foreground/90">
              Improve operational efficiency with reliable support for core business processes.
            </p>
            <ul className="mt-6 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Data Entry</li>
              <li>Data Processing</li>
              <li>Document Management</li>
              <li>Order Processing</li>
              <li>Invoice Processing</li>
              <li>Database Management</li>
              <li>CRM Updates</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Technical Support Services</h3>
            <p className="mt-4 text-foreground/90">
              Our BPO Services provide dedicated technical support teams to deliver fast, reliable, and professional customer assistance.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Finance & Accounting Support</h3>
            <p className="mt-4 text-foreground/90">
              Reduce administrative workload through secure and efficient financial operations support.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">HR Process Outsourcing</h3>
            <p className="mt-4 text-foreground/90">
              Enhance workforce management with scalable solutions for recruitment, onboarding, payroll support, and HR administration.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          // eyebrow="Data Services"
          title="Data Management"
          redPart="Services"
          description="Our BPO Services include accurate data processing, verification, migration, cleansing, and CRM management to improve business efficiency."
        />
        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
          <ul className="space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
            <li>Data processing and verification</li>
            <li>Data migration and cleansing</li>
            <li>CRM management and updates</li>
            <li>Secure document handling</li>
            <li>Business intelligence support</li>
          </ul>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Why Choose Our BPO"
          redPart="Services?"
          description="Our Business Process Outsourcing Services are designed for businesses that need dependable operational support without compromising quality or security."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Experienced professionals delivering industry-specific BPO Services",
            "Scalable Business Process Outsourcing solutions tailored to your business",
            "Cost-effective operations with measurable ROI",
            "Faster turnaround times and improved customer satisfaction",
            "Secure and compliant data management",
            "Flexible engagement models for businesses of all sizes",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-foreground/90">✔ {item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Transform Your Business with Reliable Business Process Outsourcing"
          redPart="Services"
          description="Partner with Nexova TechZone for scalable BPO Services and customized Business Process Outsourcing solutions that reduce costs, improve operational efficiency, and accelerate business growth."
        />
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title="Build an Efficient, Scalable BPO Engine"
          description="Let our skilled BPO teams handle your non-core operations so your business can focus on innovation, customer growth, and long-term success."
          primary={{ label: "Request a Free BPO Consultation", to: "/contact" }}
          secondary={{ label: "Talk to a BPO Specialist", to: "/contact" }}
        />
      </Section>
    </Layout>
  );
}
