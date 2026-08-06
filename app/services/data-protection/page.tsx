import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Data Security"
      title="Enterprise Data "
      redPart="Protection"
      description="Comprehensive data protection strategies securing sensitive information from unauthorized access and data breaches."
      stats={[
        { value: "200+", label: "Data Protection Programs" },
        { value: "Zero", label: "Data Breach Rate" },
        { value: "100%", label: "Compliance Achievement" },
      ]}
      heroImage="/assets/data-protection.png"
      capabilitiesEyebrow="Data Security"
      capabilitiesTitle="Zero-Trust Data "
      capabilitiesRed="Protection"
      capabilitiesDescription="We implement comprehensive data protection strategies ensuring sensitive data remains secure from internal and external threats."
      features={[
        { icon: "Lock", title: "Encryption", description: "Military-grade encryption for data at rest and in transit." },
        { icon: "Database", title: "Data Classification", description: "Automatic classification and tagging of sensitive data." },
        { icon: "Shield", title: "DLP (Data Loss Prevention)", description: "Prevention of unauthorized data exfiltration." },
        { icon: "Users", title: "Access Control", description: "Zero-trust access with multi-factor authentication." },
        { icon: "Zap", title: "Monitoring & Auditing", description: "Complete audit trails and access logging." },
        { icon: "FileText", title: "Compliance", description: "GDPR, HIPAA, PCI-DSS, SOC2 compliance automation." },
        { icon: "CheckCircle2", title: "Backup & Recovery", description: "Continuous backup and disaster recovery capability." },
        { icon: "TrendingUp", title: "Incident Response", description: "Rapid detection and response to data breaches." },
      ]}
    />
  );
}
