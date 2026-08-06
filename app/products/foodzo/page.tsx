
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { CheckCircle2, ArrowRight, Clock, BarChart3, Zap } from "lucide-react";


const features = [
  "Complete Billing & POS System",
  "Kitchen Order Ticket (KOT) System",
  "Menu Management & Customization",
  "Real-time Reporting & Analytics",
  "Inventory Tracking",
  "Multi-outlet Management",
];

const keyBenefits = [
  {
    icon: Clock,
    title: "Faster Service",
    description: "Reduce order processing time with integrated KOT and billing system",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Decisions",
    description: "Real-time analytics and reports to optimize restaurant operations",
  },
  {
    icon: Zap,
    title: "Increased Efficiency",
    description: "Streamline operations and reduce manual errors with automation",
  },
];

const useCases = [
  "Full-Service Restaurants",
  "QSR & Fast Casual",
  "Cafés & Bakeries",
  "Cloud Kitchens",
  "Multi-outlet Chains",
  "Hotel F&B Operations",
];

export default function FoodZoPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Complete Solution</p>
            <h1 className="mt-3 text-4xl text-navy md:text-6xl">
              FoodZo: Complete <span className="text-gradient-red">Restaurant Management</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Complete restaurant management software including billing, KOT, menu management, reports and operations. Designed for restaurants that want to scale operations efficiently.
            </p>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-foreground/85">
                  <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                  {f}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-red)] hover:-translate-y-0.5 transition-all">
                Request Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground hover:border-primary hover:bg-primary/5 transition-all">
                Learn More
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img src="/assets/foodzo.jpg" alt="FoodZo restaurant management software" width={1024} height={768} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="pt-0">
        <SectionHeading title="Why Restaurants " redPart="Choose FoodZo" description="Proven solutions for improving restaurant operations and profitability." />
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {keyBenefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                <p className="text-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Use Cases */}
      <Section className="pt-0">
        <SectionHeading title="Perfect For " redPart="All Restaurant Types" description="Whether you run a small café or a multi-outlet chain, FoodZo scales with your business." />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all">
              <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
              <span className="font-medium text-foreground">{useCase}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Core Modules */}
      <Section className="pt-0">
        <SectionHeading title="Core Modules " redPart="Included" description="Everything you need to run a modern restaurant." />
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
          {[
            {
              title: "POS & Billing",
              description: "Fast, intuitive billing system with support for multiple payment methods and discounts.",
            },
            {
              title: "Kitchen Order Ticket (KOT)",
              description: "Real-time kitchen display system that syncs with billing for seamless order management.",
            },
            {
              title: "Menu Management",
              description: "Easily create, update and organize menu items with pricing, categories and descriptions.",
            },
            {
              title: "Reports & Analytics",
              description: "Comprehensive sales reports, inventory tracking and business intelligence dashboards.",
            },
            {
              title: "Multi-outlet Support",
              description: "Manage multiple restaurant locations from a single dashboard with centralized reporting.",
            },
            {
              title: "Inventory Management",
              description: "Track stock levels, manage suppliers and optimize inventory costs.",
            },
          ].map((module) => (
            <div key={module.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-bold text-navy mb-3">{module.title}</h3>
              <p className="text-foreground">{module.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pt-0">
        <div className="rounded-2xl border border-border bg-gradient-to-b from-accent/50 to-transparent p-8 md:p-10 shadow-[var(--shadow-soft)] text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">Ready to Transform Your Restaurant?</h3>
          <p className="text-foreground mb-6 max-w-2xl mx-auto">
            Join hundreds of restaurants using FoodZo to streamline operations and increase profitability.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-red)] hover:-translate-y-0.5 transition-all">
              Request Free Demo <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground hover:border-primary hover:bg-primary/5 transition-all">
              Back to Home
            </Link>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
