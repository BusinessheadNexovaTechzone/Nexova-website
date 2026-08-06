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
        description="Partner with Nexova Tech Zone to hire the right IT talent when you need it most. Our workforce solutions provide skilled professionals for contract, remote, dedicated, and outsourced roles so your business can scale quickly and efficiently."
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
          eyebrow="Contract IT Staffing"
          title="Hire experienced IT professionals for short-term projects, seasonal workloads, or specialized assignments without the commitment of permanent hiring."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside">
              <li>Quick deployment of skilled professionals</li>
              <li>Flexible hiring duration</li>
              <li>Reduced recruitment costs</li>
              <li>Access to specialized technical expertise</li>
              <li>Ideal for project-based requirements</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Contract Staffing Value</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              Contract IT staffing gives you the flexibility to add immediate technical capacity without the overhead of permanent recruitment, helping teams move faster and deliver critical projects on time.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Remote Developers"
          title="Expand your development capabilities by hiring highly skilled remote software developers who seamlessly integrate with your existing team."
        />
        <p className="mx-auto mb-8 max-w-3xl text-center text-foreground/80">
          Our remote developers are experienced across multiple stacks and collaborate effectively across time zones to deliver quality software faster.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Technologies</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside">
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
            <h3 className="text-2xl font-semibold text-navy">Why Choose Remote Developers?</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside">
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
          eyebrow="Dedicated Developers"
          title="Need developers who work exclusively on your project?"
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Dedicated Development Teams</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              Our dedicated developers become an extension of your internal team, working full-time according to your project requirements, communication processes, and business objectives.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Ideal For</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside">
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
          eyebrow="Resource Augmentation"
          title="Scale your existing team with experienced technology professionals whenever your project demands additional expertise."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Advantages</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside">
              <li>Rapid team scaling</li>
              <li>Access to niche technology skills</li>
              <li>Flexible engagement</li>
              <li>Improved project timelines</li>
              <li>Reduced operational overhead</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Fast Team Expansion</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              Whether you need one developer or an entire project team, we provide the right professionals at the right time.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Technical Hiring"
          title="Finding highly qualified technical talent requires industry expertise and an extensive talent network."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">We Recruit</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside">
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
            <h3 className="text-2xl font-semibold text-navy">Hiring Process</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              Our hiring process includes technical screening, skill assessments, interview coordination, and candidate verification to ensure you receive top-quality talent.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Workforce Outsourcing"
          title="Reduce operational complexity by outsourcing your IT workforce solutions to experienced staffing professionals."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Outsourcing Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside">
              <li>Lower hiring costs</li>
              <li>Faster recruitment</li>
              <li>Improved workforce flexibility</li>
              <li>Better compliance</li>
              <li>Reduced HR workload</li>
              <li>Scalable staffing solutions</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-navy">Workforce Management</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              We manage recruitment, onboarding, workforce administration, and ongoing support, allowing your business to focus on growth and innovation.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Industries We Serve"
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
          title="Our Hiring Process"
          description="We follow a structured hiring process that ensures the best fit for your technical and business requirements."
        />
        <div className="space-y-4 text-foreground/90">
          {[
            "Requirement Analysis – We understand your technical requirements, project scope, team size, budget, and timelines.",
            "Talent Sourcing – Our recruiters identify qualified candidates from our extensive talent network.",
            "Technical Evaluation – Candidates undergo technical screening, skill validation, and interview assessments.",
            "Client Interview – You interview shortlisted candidates and select the professionals that best fit your team.",
            "Onboarding – Selected professionals are quickly onboarded and integrated into your project.",
            "Ongoing Support – We provide continuous support throughout the engagement to ensure smooth collaboration and project success.",
          ].map((step, index) => (
            <div key={step} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="font-semibold text-navy">{index + 1}. {step}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Why Businesses Trust Our IT Staffing Services"
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
          description="Partner with Nexova Tech Zone for reliable, scalable, and cost-effective IT staffing and workforce solutions. Whether you need contract professionals, dedicated developers, remote teams, or complete workforce outsourcing, we're here to help you hire the right talent and achieve your business goals."
          primary={{ label: "Discuss Your Staffing Needs", to: "/contact" }}
          secondary={{ label: "Talk to Our Recruiters", to: "/contact" }}
        />
      </Section>
    </Layout>
  );
}
