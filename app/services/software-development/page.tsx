import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/ui/service-hero";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/ui/cta-banner";

export default function CustomSoftwarePage() {
  return (
    <Layout>
      <ServiceHero
        eyebrow="Software Development"
        title="Leading Software Development Company for"
        redPart="Innovative Digital Solutions"
        description="Transform your ideas into powerful digital solutions with Nexova TechZone, a trusted Software Development Company delivering innovative, scalable, and secure software for businesses of every size. From startups to large enterprises, our experienced developers create future-ready software tailored to your unique business goals."
        stats={[
          { value: "100+", label: "Products Delivered" },
          { value: "50+", label: "Industry Verticals" },
          { value: "99%", label: "Delivery Success" },
        ]}
        visual={
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src="/assets/hero-monitor.jpg"
              alt="Custom software development"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        }
      />

      <Section>
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-black tracking-tight leading-none text-navy sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Our <span className="text-gradient-red">Software Solutions</span>
          </h1>
        </div>
        <SectionHeading
          title={
            <>
              Custom Software <span className="text-gradient-red">Development</span>
            </>
          }
          description="We deliver innovative and scalable software development solutions tailored to your unique business requirements. Every business faces different operational challenges, and off-the-shelf software often fails to meet specific needs."
          titleClassName="text-3xl font-extrabold tracking-tight leading-tight text-navy sm:text-4xl md:text-5xl lg:text-5xl"
        />
        <p className="mx-auto mb-10 max-w-3xl text-center text-foreground/80">
          Our custom software development services are designed to create secure, high-performance applications that align perfectly with your business processes and long-term goals. From requirement analysis and UI/UX design to deployment and ongoing support, we build software that improves productivity, reduces operational costs, and accelerates digital transformation.
        </p>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">What We Deliver</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Business Management Software</li>
              <li>Workflow Automation Systems</li>
              <li>Custom Business Applications</li>
              <li>API Development & Integration</li>
              <li>Cloud-Based Solutions</li>
              <li>Software Modernization</li>
              <li>Maintenance & Technical Support</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Why Choose Custom Software?</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Built for your business processes</li>
              <li>Scalable architecture for growth</li>
              <li>Secure implementation from day one</li>
              <li>Flexible integration with existing systems</li>
              <li>Long-term support and optimization</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              Web Application <span className="text-gradient-red">Development</span>
            </>
          }
          description="Modern, secure, and scalable software development solutions. We build responsive web applications that work seamlessly across desktops, tablets, and mobile devices while maintaining the highest standards of security, speed, and scalability."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Our Expertise</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Business Portals</li>
              <li>Customer Portals</li>
              <li>Admin Dashboards</li>
              <li>E-commerce Platforms</li>
              <li>Progressive Web Apps (PWA)</li>
              <li>REST API Integration</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Why Web Applications?</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Accessible across devices</li>
              <li>Fast, secure delivery</li>
              <li>Reliable enterprise performance</li>
              <li>Built for scale and integration</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              Mobile App <span className="text-gradient-red">Development</span>
            </>
          }
          description="Native and cross-platform mobile application development. Our team builds intuitive Android, iOS, Flutter, and React Native applications that combine exceptional design with seamless functionality."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Services Include</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Android App Development</li>
              <li>iOS App Development</li>
              <li>Flutter Development</li>
              <li>React Native Development</li>
              <li>UI/UX Design</li>
              <li>App Testing & Deployment</li>
              <li>Maintenance & Upgrades</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Why Mobile Apps?</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              Reach your customers anytime, anywhere with powerful mobile applications developed by an experienced software development company.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              Enterprise Application <span className="text-gradient-red">Development</span>
            </>
          }
          description="Enterprise software solutions that improve productivity. We build enterprise applications that streamline business operations, improve collaboration, and automate complex workflows."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Enterprise Solutions</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>HR Management Systems</li>
              <li>Inventory Management</li>
              <li>Project Management Systems</li>
              <li>Document Management</li>
              <li>Workflow Automation</li>
              <li>Reporting & Analytics</li>
              <li>System Integration</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Why Enterprise Apps?</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Improved collaboration</li>
              <li>Process automation</li>
              <li>Scalable information access</li>
              <li>Actionable business insights</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              SaaS Product <span className="text-gradient-red">Development</span>
            </>
          }
          description="Build secure cloud-based SaaS products. We design and develop scalable SaaS platforms with multi-tenant architecture, secure cloud infrastructure, subscription management, and seamless third-party integrations."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Features</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Multi-Tenant Architecture</li>
              <li>Subscription Management</li>
              <li>User Authentication</li>
              <li>Cloud Infrastructure</li>
              <li>Third-Party Integrations</li>
              <li>Analytics Dashboard</li>
              <li>Continuous Product Enhancement</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Why SaaS?</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              Launch innovative cloud-based products that scale with your customers and evolve with market demand.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              CRM & ERP <span className="text-gradient-red">Software</span>
            </>
          }
          description="Simplify business operations with smart business software. We provide customized CRM and ERP software solutions that integrate customers, employees, inventory, finance, and operations into one powerful platform."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Solutions</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Customer Relationship Management</li>
              <li>Sales Automation</li>
              <li>Finance & Accounting</li>
              <li>Inventory Management</li>
              <li>Procurement</li>
              <li>HR & Payroll</li>
              <li>Business Intelligence Reports</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Business Benefits</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              Our intelligent software improves productivity, enhances decision-making, and automates day-to-day operations while adapting to your unique workflows.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              POS Software <span className="text-gradient-red">Development</span>
            </>
          }
          description="Smart point of sale solutions for modern businesses. We develop intelligent POS software that simplifies billing, inventory management, customer tracking, and business reporting for retail stores, supermarkets, restaurants, pharmacies, and other industries."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Key Features</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Fast Billing</li>
              <li>Inventory Tracking</li>
              <li>Barcode Integration</li>
              <li>Customer Loyalty Programs</li>
              <li>Multi-Branch Management</li>
              <li>Sales Reports</li>
              <li>Role-Based Access</li>
              <li>Cloud Synchronization</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Why POS Software?</h3>
            <p className="mt-5 text-foreground/90 leading-relaxed">
              Our POS solutions provide real-time insights, multi-branch management, cloud synchronization, and secure business operations.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              Why Businesses <span className="text-gradient-red">Trust Us</span>
            </>
          }
          description="Experienced software developers, customized business solutions, agile methodology, scalable & secure applications, transparent communication, on-time delivery, and continuous support."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Experienced Software Developers",
            "Customized Business Solutions",
            "Agile Development Methodology",
            "Scalable & Secure Applications",
            "Transparent Communication",
            "On-Time Project Delivery",
            "Continuous Support & Maintenance",
          ].map((reason) => (
            <div key={reason} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-foreground/90">✔ {reason}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              Let's Build Your Next <span className="text-gradient-red">Software Solution</span>
            </>
          }
          description="Whether you're looking for a reliable Software Development Company to build a custom business application, enterprise software, mobile app, SaaS platform, CRM, ERP, or POS solution, Nexova TechZone has the expertise to bring your vision to life."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <p className="mx-auto mb-10 max-w-3xl text-center text-foreground/80">
          Our end-to-end software development services help businesses innovate, improve operational efficiency, and stay ahead in today's competitive digital landscape.
        </p>
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title="Start Your Custom Software Journey"
          description="Contact Nexova TechZone today to discuss your project and discover how our custom software solutions can accelerate your business growth."
          primary={{ label: "Schedule a Consultation", to: "/contact" }}
          secondary={{ label: "Talk to a Developer", to: "/contact" }}
        />
      </Section>
    </Layout>
  );
}
