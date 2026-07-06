
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { CheckCircle2, ArrowRight, Smartphone, Clock, TrendingUp } from "lucide-react";


const features = [
  "Order Placement & Management",
  "Table Reservation System",
  "Real-time Order Tracking",
  "Customer Communication",
  "Multi-Language Support",
  "Integration with POS",
];

const keyBenefits = [
  {
    icon: Smartphone,
    title: "Mobile-First Ordering",
    description: "Customers can easily place and track orders from their smartphones",
  },
  {
    icon: Clock,
    title: "Faster Service",
    description: "Reduce order processing time and improve kitchen efficiency",
  },
  {
    icon: TrendingUp,
    title: "Increased Revenue",
    description: "Drive more orders and improve customer satisfaction with automation",
  },
];

const useCases = [
  "Order Taking",
  "Table Reservations",
  "Order Status Updates",
  "Customer Feedback",
  "Promotional Offers",
  "Loyalty Program",
];

export default function AutomationBotPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Restaurant Solution</p>
            <h1 className="mt-3 text-4xl text-navy md:text-6xl">
              Restaurant <span className="text-gradient-red">Automation Bot</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Smart chatbot system for restaurant order management and customer interaction. Streamline operations, improve customer experience and increase order volume with intelligent automation.
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
            <Image src="/assets/dev-portrait.jpg" alt="Restaurant Automation Bot" width={1024} height={768} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="pt-0">
        <SectionHeading title="Transform Your " redPart="Restaurant Operations" description="Smart automation for better customer experience and operations." />
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
        <SectionHeading title="Automation Use " redPart="Cases" description="Handle all customer interactions intelligently." />
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
        <SectionHeading title="Core Features " redPart="Included" description="Everything needed for restaurant automation." />
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
          {[
            {
              title: "Order Management",
              description: "Customers can browse menu, place orders, and track status in real-time through the chatbot.",
            },
            {
              title: "Table Reservations",
              description: "Automated table booking system with availability checks and confirmation messages.",
            },
            {
              title: "Real-time Notifications",
              description: "Keep customers updated about their order status with automated notifications.",
            },
            {
              title: "Menu Intelligence",
              description: "AI understands your menu and provides personalized recommendations based on preferences.",
            },
            {
              title: "Customer Data",
              description: "Collect and maintain customer preferences for better personalization and follow-ups.",
            },
            {
              title: "POS Integration",
              description: "Seamlessly integrate with your existing POS system for real-time order synchronization.",
            },
          ].map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-bold text-navy mb-3">{feature.title}</h3>
              <p className="text-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Integration Options */}
      <Section className="pt-0">
        <SectionHeading title="Connect With " redPart="Your Systems" description="Seamless integration with your existing restaurant technology." />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            "WhatsApp Business",
            "Website Chat",
            "Facebook Messenger",
            "Telegram",
            "Google Business",
            "Instagram DM",
            "FoodZo POS",
            "Custom API",
          ].map((integration) => (
            <div key={integration} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all">
              <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
              <span className="font-medium text-foreground text-sm">{integration}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Success Metrics */}
      <Section className="pt-0">
        <SectionHeading title="Expected " redPart="Results" description="Measurable improvements in restaurant operations." />
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              metric: "35%",
              description: "Faster order processing with automation",
            },
            {
              metric: "25%",
              description: "Increase in order volume",
            },
            {
              metric: "80%",
              description: "Reduction in missed orders",
            },
            {
              metric: "90%",
              description: "Customer satisfaction improvement",
            },
          ].map((stat) => (
            <div key={stat.metric} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] text-center">
              <div className="text-4xl font-bold text-primary mb-3">{stat.metric}</div>
              <p className="text-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Pricing Section */}
      <Section className="pt-0">
        <SectionHeading title="Simple " redPart="Pricing" description="Transparent pricing with no hidden charges." />
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              plan: "Starter",
              price: "$299",
              period: "/month",
              description: "Perfect for single outlet restaurants",
              features: [
                "Up to 500 orders/month",
                "WhatsApp integration",
                "Basic analytics",
                "Email support",
              ],
            },
            {
              plan: "Business",
              price: "$599",
              period: "/month",
              description: "For growing restaurant chains",
              features: [
                "Up to 2000 orders/month",
                "Multi-channel integration",
                "Advanced analytics",
                "Priority support",
              ],
              highlighted: true,
            },
            {
              plan: "Enterprise",
              price: "Custom",
              period: "",
              description: "For large restaurant groups",
              features: [
                "Unlimited orders",
                "Full customization",
                "Dedicated account manager",
                "24/7 premium support",
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
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">Ready to Automate Your Restaurant?</h3>
          <p className="text-foreground mb-6 max-w-2xl mx-auto">
            See how Restaurant Automation Bot can improve your operations, increase orders and enhance customer satisfaction.
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
