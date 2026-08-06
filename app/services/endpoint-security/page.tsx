import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Endpoint Protection"
      title="Advanced Endpoint "
      redPart="Security"
      description="Comprehensive endpoint protection securing all devices including laptops, desktops, and mobile devices."
      stats={[
        { value: "50K+", label: "Endpoints Protected" },
        { value: "99.9%", label: "Threat Detection Rate" },
        { value: "50ms", label: "Avg Response Time" },
      ]}
      heroImage="/assets/endpoint-security.png"
      capabilitiesEyebrow="Endpoint Excellence"
      capabilitiesTitle="Zero-Trust Endpoint "
      capabilitiesRed="Security"
      capabilitiesDescription="We provide advanced endpoint protection defending against modern threats with AI-powered detection and response."
      features={[
        { icon: "Shield", title: "Threat Detection", description: "AI-powered detection of malware, ransomware, and exploits." },
        { icon: "Lock", title: "Encryption", description: "Full-disk encryption and data-at-rest protection." },
        { icon: "Zap", title: "Real-time Response", description: "Automated threat containment and isolation." },
        { icon: "Database", title: "Device Management", description: "MDM for complete endpoint visibility and control." },
        { icon: "Users", title: "User Behavior Analytics", description: "Detection of suspicious user and application behavior." },
        { icon: "FileText", title: "Application Control", description: "Whitelisting and application usage control." },
        { icon: "Clock", title: "24/7 Monitoring", description: "Continuous monitoring and threat intelligence." },
        { icon: "TrendingUp", title: "Incident Response", description: "Rapid response and forensic investigation services." },
      ]}
    />
  );
}
