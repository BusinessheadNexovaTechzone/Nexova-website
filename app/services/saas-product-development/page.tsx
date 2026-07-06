import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Product Engineering"
      title="Building SaaS Products "
      redPart="From Concept to Scale"
      description="Complete SaaS product development from MVP to millions of users with recurring revenue models."
      stats={[
        { value: "45+", label: "SaaS Products Launched" },
        { value: "$500M+", label: "ARR Generated" },
        { value: "2.5M", label: "Active Users" },
      ]}
      heroImage="/assets/saas-product.jpg"
      capabilitiesEyebrow="Product Excellence"
      capabilitiesTitle="Full-Stack SaaS "
      capabilitiesRed="Development"
      capabilitiesDescription="We specialize in building SaaS products that achieve market fit, retain users, and generate sustainable recurring revenue."
      features={[
        { icon: "Sparkles", title: "MVP Development", description: "Rapid prototyping and MVP launches to validate product-market fit quickly." },
        { icon: "CreditCard", title: "Billing & Payments", description: "Stripe, Paddle, or Chargebee integration with advanced subscription management." },
        { icon: "Users", title: "Multi-Tenancy", description: "Secure, scalable multi-tenant architecture for enterprise SaaS platforms." },
        { icon: "Zap", title: "Performance Optimization", description: "Optimized for freemium conversion, reducing churn and maximizing LTV." },
        { icon: "BarChart3", title: "Analytics & Metrics", description: "Built-in product analytics, cohort analysis, and retention tracking." },
        { icon: "Settings2", title: "Feature Flags & A/B Testing", description: "Progressive rollouts and data-driven feature decisions." },
        { icon: "Clock", title: "24/7 Operations", description: "Production support, monitoring, and incident response." },
        { icon: "TrendingUp", title: "Growth Engineering", description: "Viral loops, referral programs, and network effects implementation." },
      ]}
    />
  );
}
