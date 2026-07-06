import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Infrastructure Support"
      title="Managed Server "
      redPart="Management"
      description="Professional server management including monitoring, maintenance, and optimization for peak performance."
      stats={[
        { value: "500+", label: "Servers Managed" },
        { value: "99.95%", label: "Uptime SLA" },
        { value: "15 mins", label: "Avg Response Time" },
      ]}
      heroImage="/assets/server-management.png"
      capabilitiesEyebrow="Server Excellence"
      capabilitiesTitle="24/7 Managed "
      capabilitiesRed="Server Services"
      capabilitiesDescription="We handle all aspects of server management from provisioning to optimization, allowing you to focus on your business."
      features={[
        { icon: "Clock", title: "24/7 Monitoring", description: "Continuous monitoring with instant alerts and response." },
        { icon: "Zap", title: "Performance Tuning", description: "Optimization for speed, memory, and resource efficiency." },
        { icon: "Shield", title: "Security Management", description: "Patches, updates, and vulnerability management." },
        { icon: "Database", title: "Database Management", description: "Backups, optimization, and replication management." },
        { icon: "Sparkles", title: "Proactive Maintenance", description: "Scheduled maintenance preventing downtime and issues." },
        { icon: "Lock", title: "Security Hardening", description: "Firewall rules, access controls, and intrusion detection." },
        { icon: "BarChart3", title: "Capacity Planning", description: "Growth forecasting and resource scaling recommendations." },
        { icon: "Users", title: "Expert Support", description: "Direct access to server administration experts." },
      ]}
    />
  );
}
