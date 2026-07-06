import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="IT Support"
      title="Professional IT Support "
      redPart="& AMC"
      description="Comprehensive IT support and Annual Maintenance Contracts ensuring smooth operations and minimal downtime."
      stats={[
        { value: "1000+", label: "Active AMC Contracts" },
        { value: "15 mins", label: "Avg Response Time" },
        { value: "98%", label: "Issue Resolution Rate" },
      ]}
      heroImage="/assets/it-support.png"
      capabilitiesEyebrow="Support Excellence"
      capabilitiesTitle="24/7 IT Support "
      capabilitiesRed="& Maintenance"
      capabilitiesDescription="We provide comprehensive IT support with annual maintenance contracts covering all aspects of your IT infrastructure."
      features={[
        { icon: "Clock", title: "24/7/365 Support", description: "Round-the-clock support for all your IT needs." },
        { icon: "Users", title: "Help Desk Services", description: "Expert support for software, hardware, and network issues." },
        { icon: "Zap", title: "Preventive Maintenance", description: "Regular maintenance preventing issues and downtime." },
        { icon: "Lock", title: "Software Updates", description: "Regular patching and security update management." },
        { icon: "BarChart3", title: "Performance Monitoring", description: "Continuous monitoring and optimization." },
        { icon: "Database", title: "Backup Services", description: "Regular backup and disaster recovery planning." },
        { icon: "Smartphone", title: "Hardware Support", description: "Desktop, laptop, and peripheral support." },
        { icon: "TrendingUp", title: "Proactive Support", description: "Identifying and resolving issues before they impact users." },
      ]}
    />
  );
}
