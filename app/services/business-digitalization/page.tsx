import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Digital Transformation"
      title="Complete Business "
      redPart="Digitalization"
      description="End-to-end business digitalization transforming processes, culture, and operations for modern enterprises."
      stats={[
        { value: "180+", label: "Transformations Completed" },
        { value: "60%", label: "Avg. Productivity Gain" },
        { value: "$100M+", label: "Value Created" },
      ]}
      heroImage="/assets/business-digitalization.jpg"
      capabilitiesEyebrow="Transformation Excellence"
      capabilitiesTitle="Business-Wide "
      capabilitiesRed="Digital Journey"
      capabilitiesDescription="We guide organizations through complete digital transformation covering processes, technology, people, and culture."
      features={[
        { icon: "Sparkles", title: "Process Digitization", description: "Automation of manual processes reducing cost and errors." },
        { icon: "Users", title: "Change Management", description: "Organizational change, training, and adoption support." },
        { icon: "BarChart3", title: "Analytics & Insights", description: "Data-driven decision making with business intelligence tools." },
        { icon: "ShoppingCart", title: "E-Commerce Solutions", description: "Digital sales channels and customer engagement platforms." },
        { icon: "Database", title: "Data Integration", description: "Unified data platforms and integration across systems." },
        { icon: "Cloud", title: "Cloud Infrastructure", description: "Modern cloud-based infrastructure and applications." },
        { icon: "Lock", title: "Security & Compliance", description: "Digital security and regulatory compliance measures." },
        { icon: "TrendingUp", title: "Business Growth", description: "Enabling new business models and revenue streams." },
      ]}
    />
  );
}
