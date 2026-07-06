import { ServicePage } from "@/components/templates/ServicePage";

export default function CustomAISolutionsPage() {
  return (
    <ServicePage
      eyebrow="Enterprise AI"
      title="Custom AI "
      redPart="Solutions"
      description="Bespoke AI solutions built from the ground up for your unique business challenges and workflows."
      stats={[
        { value: "6-month", label: "Typical Deployment" },
        { value: "10x", label: "ROI Average" },
        { value: "50+", label: "Solutions Delivered" },
      ]}
      heroImage="/assets/hero-monitor.jpg"
      capabilitiesTitle="Custom AI "
      capabilitiesRed="Services"
      capabilitiesDescription="End-to-end AI solution development from problem definition, data collection, to production deployment and optimization."
      features={[
        { icon: "Sparkles", title: "Custom Model Development", description: "Design and train models specific to your domain, data, and business objectives." },
        { icon: "Database", title: "Data Engineering", description: "Collect, clean, label, and prepare training data with best practices for quality." },
        { icon: "Workflow", title: "End-to-end Pipelines", description: "Build complete ML pipelines from ingestion through inference and monitoring." },
        { icon: "Shield", title: "Compliance & Security", description: "SOC2, HIPAA-compliant solutions with data privacy and model governance." },
        { icon: "Users", title: "Team Enablement", description: "Train your team on model usage, interpretation, and continuous improvement." },
        { icon: "TrendingUp", title: "Performance Optimization", description: "Fine-tune accuracy, latency, and cost in production environments." },
      ]}
    />
  );
}
