import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="IT Operations"
      title="Complete Managed "
      redPart="IT Services"
      description="End-to-end IT management covering infrastructure, support, and security for your entire organization."
      stats={[
        { value: "300+", label: "Enterprise Clients" },
        { value: "50K+", label: "Users Supported" },
        { value: "15+ years", label: "Industry Experience" },
      ]}
      heroImage="/assets/managed-it-services.png"
      capabilitiesEyebrow="IT Excellence"
      capabilitiesTitle="Comprehensive Managed "
      capabilitiesRed="IT Solutions"
      capabilitiesDescription="We provide full-spectrum IT management allowing your business to run smoothly while we handle all technical operations."
      features={[
        { icon: "Network", title: "Network Management", description: "Design, deployment, and optimization of enterprise networks." },
        { icon: "Users", title: "User Support", description: "Help desk, ticketing, and 24/7 technical support." },
        { icon: "Lock", title: "Security Management", description: "Threat detection, incident response, and vulnerability management." },
        { icon: "Database", title: "Data Management", description: "Backup, disaster recovery, and business continuity." },
        { icon: "Cloud", title: "Cloud Services", description: "Cloud infrastructure, migration, and optimization." },
        { icon: "Zap", title: "System Administration", description: "Server, database, and application administration." },
        { icon: "BarChart3", title: "IT Planning", description: "Strategic IT planning and technology roadmaps." },
        { icon: "Clock", title: "Proactive Support", description: "Monitoring and maintenance preventing issues before they occur." },
      ]}
    />
  );
}
