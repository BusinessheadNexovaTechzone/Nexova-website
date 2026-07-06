import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Cloud Architecture"
      title="Scalable Cloud "
      redPart="Infrastructure"
      description="Enterprise-grade cloud infrastructure on AWS, Azure, or GCP designed for reliability and cost optimization."
      stats={[
        { value: "200+", label: "Cloud Deployments" },
        { value: "40%", label: "Cost Reduction" },
        { value: "99.99%", label: "Availability" },
      ]}
      heroImage="/assets/cloud-infrastructure.png"
      capabilitiesEyebrow="Cloud Excellence"
      capabilitiesTitle="Infrastructure as "
      capabilitiesRed="Code"
      capabilitiesDescription="We design, deploy, and manage cloud infrastructure using IaC principles for consistency, scalability, and cost efficiency."
      features={[
        { icon: "Cloud", title: "Multi-Cloud Architecture", description: "AWS, Azure, and GCP expertise for platform independence." },
        { icon: "Layers", title: "Kubernetes & Containers", description: "Container orchestration with Kubernetes for production workloads." },
        { icon: "Network", title: "Network Architecture", description: "VPCs, subnets, load balancing, and CDN optimization." },
        { icon: "Database", title: "Database Services", description: "Managed databases, caching layers, and data replication." },
        { icon: "Zap", title: "Auto-Scaling", description: "Dynamic scaling based on demand for cost optimization." },
        { icon: "Lock", title: "Security & Compliance", description: "Encryption, VPNs, firewalls, and compliance automation." },
        { icon: "BarChart3", title: "Cost Optimization", description: "Reserved instances, spot pricing, and resource monitoring." },
        { icon: "Clock", title: "24/7 Monitoring", description: "Proactive monitoring, alerting, and incident response." },
      ]}
    />
  );
}
