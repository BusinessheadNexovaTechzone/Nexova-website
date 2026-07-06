import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Outsourced Services"
      title="Complete Workforce "
      redPart="Outsourcing"
      description="Comprehensive workforce outsourcing delivering cost savings and operational efficiency while maintaining quality."
      stats={[
        { value: "5000+", label: "Outsourced Professionals" },
        { value: "30%", label: "Avg Cost Reduction" },
        { value: "50+", label: "Countries Served" },
      ]}
      heroImage="/assets/workforce-outsourcing.png"
      capabilitiesEyebrow="Outsourcing Excellence"
      capabilitiesTitle="End-to-End Workforce "
      capabilitiesRed="Outsourcing"
      capabilitiesDescription="We provide complete workforce outsourcing solutions covering development, QA, support, and administration services globally."
      features={[
        { icon: "Users", title: "Development Teams", description: "Dedicated development teams for full project delivery." },
        { icon: "Zap", title: "QA & Testing", description: "Comprehensive testing and quality assurance services." },
        { icon: "Headphones", title: "Customer Support", description: "Multilingual customer support and help desk services." },
        { icon: "Database", title: "Data Services", description: "Data entry, processing, and analytics services." },
        { icon: "Sparkles", title: "Administrative Services", description: "HR, accounting, and administrative support." },
        { icon: "Clock", title: "24/7 Coverage", description: "Round-the-clock service delivery across time zones." },
        { icon: "DollarSign", title: "Cost Optimization", description: "Significant savings without quality compromise." },
        { icon: "TrendingUp", title: "Scalability", description: "Easy scaling up or down based on business needs." },
      ]}
    />
  );
}
