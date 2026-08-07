import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/ui/service-hero";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/ui/cta-banner";

export default function cybersecurityservicesPage() {
  return (
    <Layout>
      <ServiceHero
        eyebrow="Cyber Security"
        title="Cyber Security Services for"
        redPart="Modern Businesses"
        description="Cyber attacks can lead to financial loss, data breaches, and damage to your business reputation. Our proactive cyber security services help organizations of all sizes safeguard their IT infrastructure against evolving threats."
        stats={[
          { value: "300+", label: "Audits Completed" },
          { value: "1500+", label: "Security Reviews" },
          { value: "98%", label: "Risk Reduction" },
        ]}
        visual={
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src="/assets/images-11.jpeg"
              alt="Cyber security services"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        }
      />

      <Section>
        <SectionHeading
          
          title="Our Cyber Security"
          redPart="Services"
          description="Regular security audits help identify weaknesses in your IT infrastructure before attackers can exploit them. Our comprehensive security assessments evaluate your networks, servers, applications, cloud environments, and security policies to ensure compliance with industry standards."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Our Security Audit Includes</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Infrastructure Security Assessment</li>
              <li>Network Configuration Review</li>
              <li>Security Policy Evaluation</li>
              <li>Cloud Security Assessment</li>
              <li>Compliance Readiness</li>
              <li>Risk Analysis & Reporting</li>
              <li>Security Improvement Recommendations</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Identify hidden security risks</li>
              <li>Improve regulatory compliance</li>
              <li>Reduce cyber attack exposure</li>
              <li>Strengthen overall security posture</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Vulnerability"
          redPart="Testing"
          description="Our vulnerability testing service identifies security flaws across your systems, websites, web applications, and networks before hackers do. We perform thorough scans and manual assessments to uncover vulnerabilities that could compromise your business."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">What We Test</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Web Applications</li>
              <li>Business Websites</li>
              <li>Internal Networks</li>
              <li>External Networks</li>
              <li>Servers</li>
              <li>APIs</li>
              <li>Cloud Infrastructure</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Early detection of vulnerabilities</li>
              <li>Reduced security risks</li>
              <li>Improved application security</li>
              <li>Actionable remediation reports</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Endpoint"
          redPart="Security"
          description="Every connected device represents a potential entry point for cyber threats. Our endpoint security solutions protect laptops, desktops, servers, and mobile devices against malware, ransomware, phishing, and unauthorized access."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Endpoint Protection Features</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Advanced Antivirus & Anti-Malware</li>
              <li>Ransomware Protection</li>
              <li>Device Monitoring</li>
              <li>Threat Detection & Response</li>
              <li>Application Control</li>
              <li>Patch Management</li>
              <li>USB & Device Control</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Secure remote workforce</li>
              <li>Prevent malware infections</li>
              <li>Protect business devices</li>
              <li>Real-time threat monitoring</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Data"
          redPart="Protection"
          description="Your business data is one of your most valuable assets. We implement advanced data protection strategies that ensure confidentiality, integrity, and availability while helping organizations meet privacy and compliance requirements."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Our Data Protection Services</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Data Encryption</li>
              <li>Secure Data Backup</li>
              <li>Disaster Recovery Planning</li>
              <li>Data Loss Prevention (DLP)</li>
              <li>Access Control Management</li>
              <li>Secure Cloud Storage</li>
              <li>Backup Monitoring</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Prevent unauthorized data access</li>
              <li>Protect sensitive customer information</li>
              <li>Ensure business continuity</li>
              <li>Minimize data loss risks</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
  <h4 className="text-xl font-semibold text-navy">
    How does data protection help my business?
  </h4>

  <p className="mx-auto mt-4 max-w-3xl leading-relaxed text-foreground/90">
    Data protection safeguards sensitive information through encryption, secure backups, access controls, and disaster recovery planning, helping ensure business continuity and regulatory compliance.
  </p>
</div>
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title="Protect Your Business with Proactive Security"
          description="Secure your infrastructure, protect your data, and reduce cyber risk with Nexova TechZone’s expert security audits, vulnerability testing, endpoint protection, and data protection services. Contact us today for a consultation."
          primary={{ label: "Request a Security Audit", to: "/contact" }}
          secondary={{ label: "Talk to Security", to: "/contact" }}
        />
      </Section>
    </Layout>
  );
}
