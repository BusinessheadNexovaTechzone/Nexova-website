import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/ui/service-hero";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/ui/cta-banner";

export default function ContractITStaffingPage() {
  return (
    <Layout>
      <ServiceHero
        eyebrow="IT Staffing & Workforce"
        title="IT Staffing Services for"
        redPart="Growing Businesses"
        description="Partner with Nexova TechZone to hire the right IT talent when you need it most. Our workforce solutions provide skilled professionals for contract, remote, dedicated, and outsourced roles so your business can scale quickly and efficiently."
        stats={[
          { value: "1000+", label: "IT Professionals" },
          { value: "85%", label: "Repeat Clients" },
          { value: "24/7", label: "Hiring Support" },
        ]}
        visual={
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src="/assets/contract-staffing.png"
              alt="IT staffing services"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        }
      />

      <Section>
        <SectionHeading
          title="Contract IT"
          redPart="Staffing"
          description="Hire experienced IT professionals for short-term projects, seasonal workloads, or specialized assignments without the commitment of permanent hiring."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Quick deployment of skilled professionals</li>
              <li>Flexible hiring duration</li>
              <li>Reduced recruitment costs</li>
              <li>Access to specialized technical expertise</li>
              <li>Ideal for project-based requirements</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Contract Staffing Value</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              Contract IT staffing gives you the flexibility to add immediate technical capacity without the overhead of permanent recruitment, helping teams move faster and deliver critical projects on time.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Remote"
          redPart="Developers"
          description="Expand your development capabilities by hiring highly skilled remote software developers who seamlessly integrate with your existing team."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Technologies</h3>
            <ul className="mt-5 grid gap-3 text-foreground/90 sm:grid-cols-2 list-disc list-inside marker:text-primary">
              {[
                "Java",
                "Python",
                ".NET",
                "PHP",
                "React",
                "Angular",
                "Vue.js",
                "Node.js",
                "Flutter",
                "React Native",
                "Android",
                "iOS",
                "AWS",
                "Azure",
                "DevOps",
              ].map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Why Choose Remote Developers?</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              Our remote developers are experienced across multiple stacks and collaborate effectively across time zones to deliver quality software faster.
            </p>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Global talent pool</li>
              <li>Cost-effective hiring</li>
              <li>Flexible engagement models</li>
              <li>Time-zone collaboration</li>
              <li>Faster project delivery</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Dedicated"
          redPart="Developers"
          description="Need developers who work exclusively on your project?"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Dedicated Development Teams</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              Our dedicated developers become an extension of your internal team, working full-time according to your project requirements, communication processes, and business objectives.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Ideal For</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Long-term software projects</li>
              <li>SaaS product development</li>
              <li>Startup MVP development</li>
              <li>Enterprise applications</li>
              <li>Product maintenance</li>
              <li>Digital transformation initiatives</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Resource"
          redPart="Augmentation"
          description="Scale your existing team with experienced technology professionals whenever your project demands additional expertise."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Advantages</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Rapid team scaling</li>
              <li>Access to niche technology skills</li>
              <li>Flexible engagement</li>
              <li>Improved project timelines</li>
              <li>Reduced operational overhead</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Fast Team Expansion</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              Whether you need one developer or an entire project team, we provide the right professionals at the right time.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Technical"
          redPart="Hiring"
          description="Finding highly qualified technical talent requires industry expertise and an extensive talent network."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">We Recruit</h3>
            <ul className="mt-5 grid gap-3 text-foreground/90 sm:grid-cols-2 list-disc list-inside marker:text-primary">
              {[
                "Software Developers",
                "Full Stack Developers",
                "Frontend Developers",
                "Backend Developers",
                "Mobile App Developers",
                "Cloud Engineers",
                "DevOps Engineers",
                "QA Engineers",
                "Data Engineers",
                "Data Scientists",
                "AI & Machine Learning Engineers",
                "Cybersecurity Professionals",
                "Project Managers",
                "Business Analysts",
                "UI/UX Designers",
              ].map((role) => (
                <li key={role}>{role}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Hiring Process</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              Our hiring process includes technical screening, skill assessments, interview coordination, and candidate verification to ensure you receive top-quality talent.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Workforce"
          redPart="Outsourcing"
          description="Reduce operational complexity by outsourcing your IT workforce solutions to an experienced staffing partner who manages talent sourcing, onboarding, and project support."
        />
    <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
  <div className="mx-auto max-w-xl text-center">
    <h3 className="text-2xl font-semibold text-primary">
      Outsourcing Benefits
    </h3>

    <ul className="mt-5 inline-block text-left space-y-3 list-disc list-inside marker:text-primary text-foreground/90">
      <li>Lower hiring costs</li>
      <li>Faster recruitment</li>
      <li>Improved workforce flexibility</li>
      <li>Better compliance</li>
      <li>Reduced HR workload</li>
      <li>Scalable staffing solutions</li>
    </ul>
  </div>
</div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Workforce"
          redPart="Management"
          description="We manage recruitment, onboarding, workforce administration, and ongoing support, allowing your business to focus on growth and innovation."
        />
        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
  <div className="mx-auto max-w-2xl text-center">
    <h3 className="text-2xl font-semibold text-primary">
      Operational Support
    </h3>

    <p className="mt-5 leading-relaxed text-foreground/90">
      Our team handles the full workforce lifecycle so your business can stay focused on strategic growth and innovation.
    </p>
  </div>
</div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Industries We"
          redPart="Serve"
          description="We provide IT staffing services across multiple industries, including technology, healthcare, finance, retail, logistics, education, and more."
        />
        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
          <ul className="grid gap-3 text-foreground/90 sm:grid-cols-2 lg:grid-cols-3 list-disc list-inside">
            {[
              "Information Technology",
              "Healthcare",
              "Banking & Financial Services",
              "FinTech",
              "E-commerce",
              "Retail",
              "Manufacturing",
              "Logistics",
              "Education",
              "Telecommunications",
              "Media & Entertainment",
              "Government",
              "Startups",
              "SaaS Companies",
            ].map((industry) => (
              <li key={industry}>{industry}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Our Hiring"
          redPart="Process"
          description="We follow a structured hiring process that ensures the best fit for your technical and business requirements."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Requirement Analysis",
            "Talent Sourcing",
            "Technical Evaluation",
            "Client Interview",
            "Onboarding",
            "Ongoing Support",
          ].map((step, index) => (
      <div
        key={step}
        className="rounded-2xl border border-border bg-card px-6 py-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
      >
        <h3 className="text-lg font-semibold text-navy">
          {index + 1}. {step}
        </h3>
      </div>
    ))}
  </div>
</Section>

      <Section className="pt-0">
        <SectionHeading 
          title="Why Businesses Trust Our"
          redPart="IT Staffing Services"
          description="Our clients choose us for faster hiring cycles, high-quality candidates, flexible engagement models, and scalable workforce solutions."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Faster hiring cycles",
            "Higher-quality candidates",
            "Reduced recruitment risk",
            "Flexible engagement models",
            "Proven technical expertise",
            "Scalable workforce solutions",
            "Reliable delivery",
            "Long-term hiring partnerships",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-foreground/90">✔ {item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title="Ready to Build Your Dream Tech Team?"
          description="Partner with Nexova TechZone for reliable, scalable, and cost-effective IT staffing and workforce solutions. Whether you need contract professionals, dedicated developers, remote teams, or complete workforce outsourcing, we're here to help you hire the right talent and achieve your business goals."
          primary={{ label: "Discuss Your Staffing Needs", to: "/contact" }}
          secondary={{ label: "Talk to Our Recruiters", to: "/contact" }}
        />
      </Section>
    </Layout>
  );
}
