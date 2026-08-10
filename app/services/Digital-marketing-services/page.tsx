import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/ui/service-hero";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/ui/cta-banner";
import { motion } from "framer-motion";
import ProcessGridClient from "@/components/ui/process-grid-client";
import { HeartPulse, GraduationCap, Building2, Factory, ShoppingBag, Landmark, UtensilsCrossed, Hammer, Monitor, Truck, Rocket, BriefcaseBusiness } from "lucide-react";

const industries = [
  { title: "Healthcare", icon: HeartPulse },
  { title: "Education", icon: GraduationCap },
  { title: "Real Estate", icon: Building2 },
  { title: "Manufacturing", icon: Factory },
  { title: "Retail", icon: ShoppingBag },
  { title: "Finance", icon: Landmark },
  { title: "Hospitality", icon: UtensilsCrossed },
  { title: "Construction", icon: Hammer },
  { title: "Technology", icon: Monitor },
  { title: "Logistics", icon: Truck },
  { title: "Startups", icon: Rocket },
  { title: "Professional Services", icon: BriefcaseBusiness },
];

// Client-only process grid: renders the six process cards with motion.
// ProcessGridClient is now provided as a separate client component.

export default function DigitalmarketingservicesPage() {
  return (
    <Layout>
      <ServiceHero
        eyebrow="Digital Marketing"
        title="Digital Marketing Services for"
        redPart="Business Growth"
        description="Grow your business with Nexova TechZone, a trusted digital marketing services offering SEO, social media marketing, performance marketing, PPC, content marketing, and lead generation services."
        stats={[
          { value: "200+", label: "Campaigns Delivered" },
          { value: "120%", label: "Avg. Growth" },
          { value: "30%", label: "Lead Increase" },
        ]}
        visual={
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src="/assets/images-15.jpeg"
              alt="Digital marketing services"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        }
      />

      <div className="mb-10 text-center">
        <h1 className="text-3xl font-black tracking-tight leading-none text-navy sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
          <span className="text-navy">Website</span>{" "}
          <span className="text-gradient-red">Development</span>
        </h1>
      </div>

      <Section>
        <SectionHeading
          // eyebrow="Website Development"
          title={
            <>
              Your Website <span className="text-gradient-red">is your Digital Storefront</span>
            </>
          }
          description="We create responsive, fast-loading, SEO-friendly websites that provide exceptional user experiences and convert visitors into customers."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Our Website Development Services Include</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Custom Business Websites</li>
              <li>Corporate Websites</li>
              <li>E-commerce Development</li>
              <li>Landing Pages</li>
              <li>WordPress Development</li>
              <li>Website Redesign</li>
              <li>Website Maintenance & Support</li>
              <li>Mobile Responsive Design</li>
              <li>CMS Development</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Why Choose Our Website Development?</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Modern UI Design</li>
              <li>Fast Loading Speed</li>
              <li>Mobile-Friendly Layout</li>
              <li>SEO Optimized Structure</li>
              <li>Secure & Scalable Solutions</li>
              <li>Easy Content Management</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              UI/UX <span className="text-gradient-red">Design</span>
            </>
          }
          description="Deliver memorable digital experiences with intuitive and visually appealing interfaces. Our UI/UX experts design user-centric experiences that improve customer engagement and increase conversions."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Our UI/UX Services</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Website UI Design</li>
              <li>Mobile App UI Design</li>
              <li>Dashboard Design</li>
              <li>Wireframing</li>
              <li>Prototyping</li>
              <li>User Journey Mapping</li>
              <li>User Experience Research</li>
              <li>Design System Creation</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Better User Experience</li>
              <li>Higher Engagement</li>
              <li>Improved Conversion Rates</li>
              <li>Consistent Brand Experience</li>
              <li>Modern & Interactive Designs</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              Branding & <span className="text-gradient-red">Identity</span>
            </>
          }
          description="Build a memorable brand that customers recognize and trust. We create unique visual identities that reflect your business values and leave lasting impressions."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Branding Services</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Logo Design</li>
              <li>Brand Identity Design</li>
              <li>Brand Strategy</li>
              <li>Brand Guidelines</li>
              <li>Business Card Design</li>
              <li>Brochure Design</li>
              <li>Social Media Branding</li>
              <li>Corporate Identity</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Our Branding Process</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Brand Discovery</li>
              <li>Market Research</li>
              <li>Visual Identity Creation</li>
              <li>Brand Guidelines</li>
              <li>Brand Launch Support</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              SEO <span className="text-gradient-red">Services</span>
            </>
          }
          description="Increase your website's visibility on Google and attract high-quality organic traffic with our data-driven SEO strategies."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Our SEO Services</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>SEO Audit</li>
              <li>Keyword Research</li>
              <li>On-Page SEO</li>
              <li>Technical SEO</li>
              <li>Local SEO</li>
              <li>Content Optimization</li>
              <li>Link Building</li>
              <li>Competitor Analysis</li>
              <li>SEO Reporting</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Higher Google Rankings</li>
              <li>More Organic Traffic</li>
              <li>Better User Experience</li>
              <li>Increased Website Authority</li>
              <li>Higher Lead Generation</li>
              <li>Long-Term Business Growth</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              Performance <span className="text-gradient-red">Marketing</span>
            </>
          }
          description="Generate measurable results through our performance marketing solutions, using targeted digital advertising campaigns that maximize your return on investment."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Our Performance Marketing Services</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Google Ads</li>
              <li>Meta (Facebook & Instagram) Ads</li>
              <li>LinkedIn Advertising</li>
              <li>YouTube Ads</li>
              <li>Display Advertising</li>
              <li>Remarketing Campaigns</li>
              <li>Conversion Optimization</li>
              <li>Campaign Analytics</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Why Performance Marketing?</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Immediate Traffic</li>
              <li>Qualified Leads</li>
              <li>Higher ROI</li>
              <li>Real-Time Reporting</li>
              <li>Scalable Campaigns</li>
              <li>Data-Driven Decisions</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              Social Media <span className="text-gradient-red">Management</span>
            </>
          }
          description="Strengthen your online presence and connect with your audience through our social media marketing services. We create creative, engaging, and consistent social media campaigns that increase brand awareness, drive customer engagement, and help your business achieve sustainable growth."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Our Social Media Services</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Social Media Strategy</li>
              <li>Content Planning</li>
              <li>Graphic Design</li>
              <li>Video Content</li>
              <li>Caption Writing</li>
              <li>Community Management</li>
              <li>Monthly Content Calendar</li>
              <li>Paid Social Campaigns</li>
              <li>Performance Reports</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Platforms We Manage</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>X (Twitter)</li>
              <li>YouTube</li>
              <li>Pinterest</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              Why Choose <span className="text-gradient-red">Nexova TechZone?</span>
            </>
          }
          description="Experienced Digital Experts, customized business solutions, affordable pricing, transparent communication, SEO-driven approach, creative designs, timely delivery, dedicated support, and result-oriented marketing."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Experienced Digital Experts",
            "Customized Business Solutions",
            "Affordable Pricing",
            "Transparent Communication",
            "SEO-Driven Approach",
            "Creative & Innovative Designs",
            "Timely Project Delivery",
            "Dedicated Customer Support",
            "Result-Oriented Marketing",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-foreground/90">✔ {item}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              Industries We <span className="text-gradient-red">Serve</span>
            </>
          }
          description="We provide digital solutions for businesses across multiple industries."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ title, icon: Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/80 p-5 shadow-[0_24px_80px_-38px_rgba(15,23,42,0.16)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-primary/40 hover:bg-gradient-to-br hover:from-primary/10 hover:via-white/70 hover:to-slate-100/40"
            >
              <div className="relative z-10 flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-[0_18px_60px_-30px_rgba(59,130,246,0.35)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-12">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-medium text-foreground">{title}</span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title={
            <>
              Our Digital Marketing <span className="text-gradient-red">Service Process</span>
            </>
          }
          description="We follow a repeatable process that delivers measurable outcomes and continuous growth."
          titleClassName="text-2xl font-extrabold tracking-tight leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="mt-8">
          <ProcessGridClient
            steps={[
              "Consultation – We understand your business goals and challenges.",
              "Strategy – We create a customized digital roadmap.",
              "Design & Development – Our experts build engaging digital experiences.",
              "Testing & Optimization – We ensure quality, performance, and usability.",
              "Launch – We successfully deploy your digital solution.",
              "Growth & Support – Continuous optimization to maximize your results.",
            ]}
          />
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title="Ready to Grow Your Business Online?"
          description="Whether you need a professional website, better Google rankings, stronger branding, or high-performing digital marketing campaigns, Nexova TechZone is your trusted digital partner. Let's build your digital success together. Contact us today for a free consultation."
          primary={{ label: "Get a Free Consultation", to: "/contact" }}
          secondary={{ label: "Start a Project", to: "/contact" }}
        />
      </Section>
    </Layout>
  );
}
