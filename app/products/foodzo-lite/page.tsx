
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { CheckCircle2, ArrowRight, DollarSign, Lightbulb, Users } from "lucide-react";


const features = [
  "Fast & Simple Billing",
  "Mobile-Friendly Interface",
  "Multiple Payment Methods",
  "Sales Reports",
  "Multi-User Access",
  "Cloud-Based Backup",
];

const keyBenefits = [
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Low-cost solution perfect for small businesses, startups and growing restaurants",
  },
  {
    icon: Lightbulb,
    title: "Easy to Use",
    description: "Intuitive interface requires minimal training for your staff",
  },
  {
    icon: Users,
    title: "Multi-User Support",
    description: "Multiple staff members can access the system simultaneously with different roles",
  },
];

const useCases = [
  "Small Restaurants",
  "Supermarkets & Retail",
  "Quick Service Restaurants",
  "Cafés & Bakeries",
  "Food Courts",
  "Cloud Kitchens",
];

export default function FoodZoLitePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Affordable Solution</p>
            <h1 className="mt-3 text-4xl text-navy md:text-6xl">
              FoodZo Lite: <span className="text-gradient-red">Affordable POS</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Affordable billing & POS software for restaurants, supermarkets and retail businesses. Perfect for small businesses that need powerful features without the premium price tag.
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
                Start Free Trial <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground hover:border-primary hover:bg-primary/5 transition-all">
                Watch Demo
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <Image src="/assets/analytics-dashboard.jpg" alt="FoodZo Lite POS software" width={1024} height={768} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="pt-0">
        <SectionHeading title="Why Choose " redPart="FoodZo Lite" description="Powerful, affordable POS software designed for small and medium businesses." />
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
        <SectionHeading title="Perfect For " redPart="Small Businesses" description="FoodZo Lite is designed specifically for businesses just starting out or looking for an affordable solution." />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all">
              <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
              <span className="font-medium text-foreground">{useCase}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Core Features */}
      <Section className="pt-0">
        <SectionHeading title="Essential Features " redPart="Included" description="Everything you need for efficient operations." />
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
          {[
            {
              title: "Fast Billing System",
              description: "Quick and easy billing with support for cash, card and online payments.",
            },
            {
              title: "Sales Tracking",
              description: "Daily sales reports and basic analytics to track your business performance.",
            },
            {
              title: "Multiple Users",
              description: "Add multiple staff members with different access levels and permissions.",
            },
            {
              title: "Cloud Backup",
              description: "Automatic cloud backup ensures your data is always safe and accessible.",
            },
            {
              title: "Mobile Ready",
              description: "Access from any device - desktop, tablet or mobile with responsive interface.",
            },
            {
              title: "Simple Interface",
              description: "Easy to learn and use interface that requires minimal training.",
            },
          ].map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing & Plans */}
      <Section className="pt-0">
        <SectionHeading title="Affordable " redPart="Pricing" description="Pay only for what you use with flexible pricing plans." />
        <div className="grid gap-6 md:gap-8 sm:grid-cols-3">
          {[
            {
              plan: "Starter",
              price: "$9",
              period: "/month",
              description: "Perfect for small single-location businesses",
              features: [
                "Up to 2 users",
                "Basic billing features",
                "Daily sales reports",
                "Email support",
              ],
            },
            {
              plan: "Business",
              price: "$19",
              period: "/month",
              description: "For growing businesses with more users",
              features: [
                "Up to 5 users",
                "Advanced reporting",
                "Inventory basics",
                "Priority support",
              ],
              highlighted: true,
            },
            {
              plan: "Enterprise",
              price: "Custom",
              period: "",
              description: "For multi-location or custom needs",
              features: [
                "Unlimited users",
                "Custom features",
                "Advanced analytics",
                "Dedicated support",
              ],
            },
          ].map((plan) => (
            <div
              key={plan.plan}
              className={`rounded-2xl border p-8 shadow-[var(--shadow-soft)] ${
                plan.highlighted
                  ? "border-primary bg-gradient-to-b from-accent/30 to-transparent"
                  : "border-border bg-card"
              }`}
            >
              <h3 className="text-2xl font-bold text-navy mb-2">{plan.plan}</h3>
              <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-3xl font-bold text-navy">{plan.price}</span>
                <span className="text-muted-foreground text-sm">{plan.period}</span>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact"
                className="w-full inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-red)] hover:-translate-y-0.5 transition-all"
              >
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pt-0">
        <div className="rounded-2xl border border-border bg-gradient-to-b from-accent/50 to-transparent p-8 md:p-10 shadow-[var(--shadow-soft)] text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">Ready to Upgrade Your Billing System?</h3>
          <p className="text-foreground mb-6 max-w-2xl mx-auto">
            Get started with FoodZo Lite today and see the difference a modern POS system can make for your business.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-red)] hover:-translate-y-0.5 transition-all">
              Start Free Trial <ArrowRight className="h-4 w-4" />
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
