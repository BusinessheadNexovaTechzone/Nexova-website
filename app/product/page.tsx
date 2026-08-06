
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Section } from "@/components/ui/section-shell";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Real-Time Order Management",
    description: "Track and manage customer orders instantly with a live dashboard for seamless operations.",
  },
  {
    title: "Multi-Tenant Management",
    description: "Operate multiple brands, outlets, or franchises from a centralized platform.",
  },
  {
    title: "Smart Rider Dispatch & Analytics",
    description: "Optimize delivery operations with intelligent rider allocation and performance insights.",
  },
  {
    title: "Click & Collect",
    description: "Enable customers to place orders online and conveniently pick them up at their preferred location.",
  },
  {
    title: "Loyalty & Promotions",
    description: "Increase customer retention with rewards programs, coupons, and personalized promotional campaigns.",
  },
  {
    title: "POS & Kitchen Display Integration",
    description: "Synchronize orders with POS systems and kitchen displays to ensure faster preparation and accurate order fulfillment.",
  },
];

export default function ProductPage() {
  return (
    <Layout>
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Flagship Product</p>
            <h1 className="mt-3 text-4xl font-extrabold text-navy md:text-6xl">Meet <span className="text-gradient-red">Foodzo</span></h1>
            <h3 className="mt-4 text-xl font-semibold text-foreground/90 md:text-2xl">The Complete Food & Beverage SaaS Platform</h3>
            <p className="mt-6 max-w-2xl text-base leading-8 text-foreground/85">
              Foodzo is Nexova Tech Zone's flagship Food & Beverage SaaS solution, designed to simplify and streamline restaurant operations. Built for scalability and performance, Foodzo empowers restaurants, cloud kitchens, cafés, and multi-location food businesses with an all-in-one platform to manage orders, operations, deliveries, and customer engagement.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-8 text-foreground/85">
              From online ordering to rider management and POS integration, Foodzo helps businesses automate workflows, improve efficiency, and deliver exceptional customer experiences—all from a single, cloud-based platform.
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img src="/assets/foodzo.jpg" alt="Foodzo product" width={1024} height={768} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      <Section className="pt-10">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-bold text-navy">Key Features</h2>
            <div className="mt-6 space-y-4">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="text-lg font-semibold text-navy">{feature.title}</h3>
                      <p className="mt-2 text-foreground/80">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 rounded-3xl border border-border bg-slate-50 p-8 shadow-[var(--shadow-soft)]">
            <div>
              <h2 className="text-3xl font-bold text-navy">Why Choose Foodzo?</h2>
              <p className="mt-5 text-base leading-8 text-foreground/85">
                Built with modern cloud technology, Foodzo is a secure, scalable, and feature-rich SaaS platform that helps food businesses automate operations, reduce manual effort, and accelerate growth. Whether you're managing a single restaurant or a large franchise network, Foodzo provides the tools you need to scale with confidence.
              </p>
            </div>
            <div>
              <p className="text-base leading-8 text-foreground/85">
                Transform your food business with Foodzo—an intelligent SaaS platform built for the future of F&B operations.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
