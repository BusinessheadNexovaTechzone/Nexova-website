import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Enterprise Solutions"
      title="Scalable "
      redPart="Enterprise Applications"
      description="Mission-critical applications built for reliability, scalability, and enterprise-grade performance."
      stats={[
        { value: "150+", label: "Enterprise Clients" },
        { value: "99.99%", label: "Uptime SLA" },
        { value: "1M+", label: "Concurrent Users" },
      ]}
      heroImage="/assets/enterprise-apps.png"
      capabilitiesEyebrow="Enterprise Grade"
      capabilitiesTitle="Production-Ready "
      capabilitiesRed="Solutions"
      capabilitiesDescription="We deliver applications that meet the most demanding enterprise requirements with robust architecture, security, and performance."
      features={[
        { icon: "Layers", title: "Microservices Architecture", description: "Scalable, independent services with loose coupling for enterprise flexibility." },
        { icon: "Database", title: "Enterprise Data Management", description: "Multi-database strategies, data warehousing, and analytics pipelines." },
        { icon: "Lock", title: "Security & Compliance", description: "SOC2, HIPAA, PCI-DSS, GDPR compliance built into every layer." },
        { icon: "Zap", title: "High Performance", description: "Sub-100ms response times, optimized for millions of transactions daily." },
        { icon: "Cloud", title: "Cloud Native", description: "Kubernetes, containerization, and auto-scaling for infinite growth." },
        { icon: "Users", title: "Team Collaboration", description: "Real-time collaboration features, role-based access, audit logging." },
        { icon: "BarChart3", title: "Advanced Analytics", description: "Real-time dashboards, predictive analytics, and business intelligence." },
        { icon: "Shield", title: "Disaster Recovery", description: "Multi-region failover, backup strategies, and business continuity planning." },
      ]}
    />
  );
}
