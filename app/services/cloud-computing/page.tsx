import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Cloud Computing"
      title="Cloud-native architecture for the"
      redPart="modern enterprise"
      description="Multi-cloud strategy, migration and optimization across AWS, Azure and GCP — engineered for resilience and cost-efficiency."
      stats={[{ value: "99.99%", label: "SLA" }, { value: "40%", label: "Cost Reduction" }, { value: "Multi-Cloud", label: "Ready" }]}
      heroImage="/assets/laptop-glow.jpg"
      capabilitiesTitle="Cloud "
      capabilitiesRed="Pillars"
      features={[
        { icon: "Cloud", title: "Cloud Migration", description: "Lift-and-shift, replatform or refactor — pick the strategy that fits your roadmap." },
        { icon: "Server", title: "Kubernetes & Containers", description: "Production EKS/AKS/GKE clusters with autoscaling and observability.", highlight: true },
        { icon: "GitBranch", title: "CI/CD Pipelines", description: "GitOps, Terraform and automated deployments for sub-hour cycles." },
        { icon: "Shield", title: "Cloud Security", description: "CSPM, IAM hardening and zero-trust network policies." },
        { icon: "Database", title: "Managed Data", description: "Aurora, BigQuery, Snowflake — selected and tuned for your workloads." },
        { icon: "Layers", title: "Serverless", description: "Lambda, Cloud Run and Edge Functions for event-driven architectures." },
      ]}
    />
  );
}
