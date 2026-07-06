
import Link from "next/link";
import Image from "next/image";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { CheckCircle2, ArrowRight, Brain, MessageSquare, Zap } from "lucide-react";


const features = [
  "Intelligent Chatbot",
  "Sales & Lead Generation",
  "Customer Support Automation",
  "Business Intelligence",
  "Document Intelligence (RAG)",
  "Multi-Channel Integration",
];

const keyBenefits = [
  {
    icon: Brain,
    title: "AI-Powered Intelligence",
    description: "Business-trained AI that understands your operations and provides smart recommendations",
  },
  {
    icon: MessageSquare,
    title: "24/7 Customer Engagement",
    description: "Respond to customer inquiries instantly, even outside business hours",
  },
  {
    icon: Zap,
    title: "Reduce Manual Work",
    description: "Automate repetitive tasks and free up your team to focus on high-value activities",
  },
];

const useCases = [
  "Lead Generation & Qualification",
  "Customer Support",
  "Sales Assistance",
  "Order Management",
  "FAQ Automation",
  "Business Reporting",
];

export default function AIAssistantPage() {
  return (
    <Layout>
      {/* Hero Section */}
      <Section>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">AI-Powered Solution</p>
            <h1 className="mt-3 text-4xl text-navy md:text-6xl">
              Nexova AI <span className="text-gradient-red">Assistant</span>
            </h1>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg">
              Business-trained AI chatbot for sales, automation, customer support and business intelligence. Reduce manual work and improve customer engagement with intelligent automation.
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
                Schedule Demo <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground hover:border-primary hover:bg-primary/5 transition-all">
                Learn More
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <Image src="/assets/ai-globe.jpg" alt="Nexova AI Assistant" width={1024} height={768} className="h-full w-full object-cover" loading="lazy" />
          </div>
        </div>
      </Section>

      {/* Key Benefits */}
      <Section className="pt-0">
        <SectionHeading title="Why Use AI " redPart="Assistant" description="Transform your business operations with intelligent automation." />
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
        <SectionHeading title="Perfect For " redPart="Multiple Use Cases" description="Deploy AI Assistant across your entire business operation." />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {useCases.map((useCase) => (
            <div key={useCase} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all">
              <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
              <span className="font-medium text-foreground">{useCase}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Core Capabilities */}
      <Section className="pt-0">
        <SectionHeading title="Core AI " redPart="Capabilities" description="Powerful features to drive business growth." />
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2">
          {[
            {
              title: "Intelligent Chatbot",
              description: "Natural language understanding chatbot that can handle customer inquiries, provide support and guide sales conversations.",
            },
            {
              title: "Sales Automation",
              description: "AI-powered sales assistant that qualifies leads, answers customer questions and accelerates the sales cycle.",
            },
            {
              title: "Customer Support",
              description: "24/7 automated support that handles FAQs, troubleshooting and escalates complex issues to human agents.",
            },
            {
              title: "Document Intelligence (RAG)",
              description: "Extract and analyze information from your business documents to provide data-driven insights and recommendations.",
            },
            {
              title: "Smart Reporting",
              description: "AI-generated business reports and analytics that help you understand trends and make data-driven decisions.",
            },
            {
              title: "WhatsApp Integration",
              description: "Deploy AI assistant directly on WhatsApp Business for seamless customer communication.",
            },
          ].map((capability) => (
            <div key={capability.title} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-bold text-navy mb-3">{capability.title}</h3>
              <p className="text-foreground">{capability.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Integration Channels */}
      <Section className="pt-0">
        <SectionHeading title="Multiple " redPart="Channels" description="Deploy AI Assistant wherever your customers are." />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[
            "Website Chatbot",
            "WhatsApp Business",
            "Facebook Messenger",
            "Telegram Bot",
            "Email Integration",
            "SMS Automation",
            "API Integration",
            "Custom Channels",
          ].map((channel) => (
            <div key={channel} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all">
              <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
              <span className="font-medium text-foreground text-sm">{channel}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* ROI Section */}
      <Section className="pt-0">
        <SectionHeading title="Measure Your " redPart="AI ROI" description="See tangible results from AI automation." />
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              metric: "60%",
              description: "Reduction in customer support response time",
            },
            {
              metric: "40%",
              description: "More leads qualified automatically",
            },
            {
              metric: "50%",
              description: "Less manual work for your team",
            },
            {
              metric: "3x",
              description: "Faster customer engagement",
            },
          ].map((stat) => (
            <div key={stat.metric} className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] text-center">
              <div className="text-4xl font-bold text-primary mb-3">{stat.metric}</div>
              <p className="text-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="pt-0">
        <div className="rounded-2xl border border-border bg-gradient-to-b from-accent/50 to-transparent p-8 md:p-10 shadow-[var(--shadow-soft)] text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-4">Ready to Deploy AI for Your Business?</h3>
          <p className="text-foreground mb-6 max-w-2xl mx-auto">
            Transform customer engagement and reduce manual work with Nexova AI Assistant. Get started with a free consultation and personalized demo.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-red)] hover:-translate-y-0.5 transition-all">
              Schedule Free Demo <ArrowRight className="h-4 w-4" />
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
