/* <!-- SEO META (for your CMS, not visible on page) -->
<!-- Title: Medical Coding & Billing Services | Certified RCM Experts -->
<!-- Meta Description: Reduce denials, speed up reimbursements, and cut admin costs with certified medical coding and billing services built for US healthcare providers. Get a free audit. -->
<!-- URL: /medical-coding-and-billing-services --> */

import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/ui/service-hero";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/ui/cta-banner";

export default function MedicalCodingBillingServicesPage() {
  return (
    <Layout>
      <ServiceHero
        eyebrow="Medical Coding & Billing"
        title="Medical Coding & Billing Services That Get You Paid Faster"
        redPart="Certified RCM Experts"
        description="End-to-end medical coding and medical billing services for practices, clinics, and hospitals—powered by certified coders, HIPAA-compliant workflows, and revenue cycle specialists who understand your specialty inside and out."
        stats={[
          { value: "96–99%", label: "Clean Claim Rate" },
          { value: "30+", label: "Specialties Served" },
          { value: "AAPC/AHIMA", label: "Certified Coders" },
        ]}
        visual={
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src="/assets/workforce-outsourcing.png"
              alt="Medical coding and billing services"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        }
      />

      <Section className="pt-0">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)]">
          <p className="text-sm uppercase tracking-[0.24em] text-primary">Certified AAPC / AHIMA Coders • HIPAA & HITECH Compliant</p>
          <p className="text-base font-semibold text-foreground/90">96–99% Clean Claim Rate Benchmark • 30+ Medical Specialties Served</p>
          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
            >
              Get a Free Billing & Coding Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
            >
              Talk to a Revenue Cycle Specialist
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Why Medical Coding & Billing Matters"
          description="Every unbilled charge, denied claim, or medical coding error is revenue your practice has already earned but hasn't collected. Rising denial rates, evolving payer regulations, and staffing shortages have made medical billing increasingly difficult to manage in-house."
        />
        <p className="mx-auto max-w-3xl text-center text-foreground/80">
          Our Medical Coding & Billing Services combine certified medical coding, professional medical billing, and complete Revenue Cycle Management (RCM) to ensure every claim is accurately coded, submitted on time, tracked efficiently, and reimbursed faster.
        </p>
      </Section>

      <Section id="our-services">
        <SectionHeading title="Our Medical Coding & Billing Services" />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Medical Coding</h3>
            <p className="mt-4 text-foreground/90">
              Accurate medical coding using ICD-10-CM, CPT, and HCPCS performed by AAPC/AHIMA-certified coders matched to your specialty.
            </p>
            <ul className="mt-6 space-y-3 text-foreground/90 list-disc list-inside">
              <li>Chart review</li>
              <li>Diagnosis coding</li>
              <li>Procedure coding</li>
              <li>Modifier assignment</li>
              <li>Coding compliance audits</li>
              <li>Specialty-specific coding for Cardiology, Orthopedics, Dermatology, Behavioral Health, and more</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Medical Billing</h3>
            <p className="mt-4 text-foreground/90">
              Comprehensive medical billing services covering the complete claims lifecycle.
            </p>
            <ul className="mt-6 space-y-3 text-foreground/90 list-disc list-inside">
              <li>Charge entry</li>
              <li>Claim scrubbing</li>
              <li>Electronic & paper claim submission</li>
              <li>Payment posting</li>
              <li>Insurance reconciliation</li>
              <li>Patient billing statements</li>
              <li>Secondary & tertiary claim processing</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Revenue Cycle Management (RCM)</h3>
            <p className="mt-4 text-foreground/90">
              Our Revenue Cycle Management integrates medical coding and medical billing into one streamlined workflow.
            </p>
            <ul className="mt-6 space-y-3 text-foreground/90 list-disc list-inside">
              <li>Eligibility verification</li>
              <li>Benefits verification</li>
              <li>Prior authorization</li>
              <li>Claims tracking</li>
              <li>Collection reporting</li>
              <li>AR reporting</li>
              <li>Clean claim analytics</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Denial Management & Appeals</h3>
            <p className="mt-4 text-foreground/90">
              Every denied medical billing claim represents recoverable revenue.
            </p>
            <ul className="mt-6 space-y-3 text-foreground/90 list-disc list-inside">
              <li>Root-cause analysis</li>
              <li>Corrected claims</li>
              <li>Appeals management</li>
              <li>Denial trend reporting</li>
              <li>Preventive coding improvements</li>
            </ul>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Accounts Receivable (AR) Follow-Up</h3>
            <p className="mt-4 text-foreground/90">
              Accelerate collections with dedicated medical billing follow-up.
            </p>
            <ul className="mt-6 space-y-3 text-foreground/90 list-disc list-inside">
              <li>30/60/90+ AR recovery</li>
              <li>Insurance follow-up</li>
              <li>Patient balance support</li>
              <li>Write-off review</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Optional Support"
          title="Credentialing & Payer Enrollment"
          description="Optional support to keep your practice credentialed, enrolled, and able to bill the right payers with minimal friction."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "CAQH Profile Setup",
            "Medicare Enrollment",
            "Medicaid Enrollment",
            "Commercial Payer Enrollment",
            "Recredentialing",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-foreground/90">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Why Outsource Medical Coding & Medical Billing?"
          description="Managing medical coding and medical billing internally requires continuous training, certified staff, and constant adaptation to payer updates. By outsourcing to us, you receive a full-service RCM team that delivers accuracy, speed, and transparency."
          centered={false}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Lower operating costs",
            "Certified coding professionals",
            "Faster reimbursements",
            "Reduced claim denials",
            "Transparent reporting",
            "Scalable billing support",
            "Specialty-specific expertise",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-foreground/90">✔ {item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="How Our Process Works" centered={false} />
        <div className="grid gap-8 lg:grid-cols-5">
          {[
            { title: "Free Practice Audit", description: "We review your existing medical billing performance, coding accuracy, and denial trends." },
            { title: "Onboarding & Integration", description: "Our team integrates seamlessly with your existing EHR and practice management software." },
            { title: "Medical Coding & Claims Submission", description: "Certified experts complete medical coding reviews and submit clean claims within 24–48 hours." },
            { title: "Payment Posting & Denial Recovery", description: "We manage payments, process denials, and submit appeals promptly." },
            { title: "Reporting & Performance Reviews", description: "Receive monthly dashboards covering collections, denial rate, days in AR, coding accuracy, and billing performance." },
          ].map((step) => (
            <div key={step.title} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h4 className="text-lg font-semibold text-navy">{step.title}</h4>
              <p className="mt-3 text-foreground/90">{step.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Medical Specialties We Serve"
          description="Our team supports providers across a wide range of specialties with deep coding and billing experience."
          centered={false}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            "Primary Care",
            "Cardiology",
            "Orthopedics",
            "Dermatology",
            "Behavioral Health",
            "Mental Health",
            "Physical Therapy",
            "OB/GYN",
            "Radiology",
            "Urgent Care",
            "Pediatrics",
            "Chiropractic",
            "Podiatry",
            "Gastroenterology",
            "Ambulatory Surgery Centers",
            "DME",
          ].map((specialty) => (
            <div key={specialty} className="rounded-3xl border border-border bg-card p-4 text-foreground/90 shadow-[var(--shadow-soft)]">
              {specialty}
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Built on Compliance"
          description="Our medical coding and medical billing services are designed with compliance at the core."
          centered={false}
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "HIPAA & HITECH Compliant",
            "Certified CPC & CCS Coders",
            "Regular Medical Coding Audits",
            "Secure Data Encryption",
            "Role-Based Access Controls",
            "Business Associate Agreement (BAA)",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-foreground/90">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Pricing"
          description="Our Medical Coding & Billing Services operate on a percentage-of-collections model—you only pay when you get paid. Typical industry pricing ranges between 4%–9% of monthly collections, depending on specialty, claim volume, coding complexity, and scope of services."
          centered={false}
        />
        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
          <p className="text-foreground/90">
            Request a custom quote to see how our certified medical coding and billing team can improve your collections, reduce denials, and accelerate revenue flow.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-start">
            <Link
              href="/contact"
              className="inline-flex rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5"
            >
              Request a Custom Quote
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Why Choose Our Medical Coding & Billing Services?"
          description="We deliver specialty-matched expertise, faster reimbursements, and transparent performance reporting for US healthcare providers."
          centered={false}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {[
            "Specialty-matched medical coding experts",
            "Dedicated medical billing professionals",
            "Lower denial rates",
            "Faster reimbursements",
            "Transparent reporting dashboards",
            "Month-to-month flexibility",
            "Built exclusively for US healthcare providers",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-foreground/90">✔ {item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading title="Frequently Asked Questions" centered={false} />
        <div className="grid gap-6">
          {[
            {
              question: "What's the difference between Medical Coding and Medical Billing?",
              answer:
                "Medical coding converts clinical documentation into standardized ICD-10, CPT, and HCPCS codes. Medical billing uses those codes to prepare, submit, and manage insurance claims through payment and follow-up. Our Medical Coding & Billing Services cover both processes seamlessly.",
            },
            {
              question: "Will outsourcing Medical Billing disrupt our workflow?",
              answer:
                "No. Our medical billing team integrates directly with your EHR and practice management system without changing your existing workflow.",
            },
            {
              question: "How do you ensure Medical Coding accuracy?",
              answer:
                "Every medical coding assignment is completed by certified CPC/CCS professionals and reviewed through a strict quality assurance process before claim submission.",
            },
            {
              question: "What happens if a Medical Billing claim is denied?",
              answer:
                "Our medical billing specialists investigate the denial, correct coding issues if needed, resubmit claims, file appeals, and provide reporting to prevent recurring denials.",
            },
            {
              question: "Is patient information secure?",
              answer:
                "Yes. Our medical coding and medical billing services follow HIPAA and HITECH standards, use encrypted systems, role-based access controls, and include a signed Business Associate Agreement (BAA).",
            },
          ].map((faq) => (
            <div key={faq.question} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-lg font-semibold text-navy">{faq.question}</h3>
              <p className="mt-3 text-foreground/90">{faq.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title="Stop Leaving Revenue on the Table"
          description="Partner with our Medical Coding & Billing Services experts to improve collections, reduce denials, and accelerate reimbursements."
          primary={{ label: "Get Your Free Billing & Coding Audit", to: "/contact" }}
          secondary={{ label: "Schedule a Call", to: "/contact" }}
        />
      </Section>
    </Layout>
  );
}
