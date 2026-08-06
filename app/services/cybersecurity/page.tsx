import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Strategic Intelligence Active"
      title="Cyber"
      redPart="security"
      description="In an increasingly hyper-connected world, the digital perimeter has vanished. Nexova provides proactive 24/7 security operations to illuminate hidden vulnerabilities before they can be exploited."
      stats={[
        { value: "99.9%", label: "Uptime SLA" },
        { value: "<15 Min", label: "Incident Response" },
        { value: "ISO 27001", label: "Certified SOC" },
      ]}
      heroImage="/assets/hero-monitor.jpg"
      capabilitiesEyebrow="Capabilities & Intelligence"
      capabilitiesTitle="Holistic protection"
      capabilitiesRed="for the modern enterprise"
      features={[
        { icon: "Shield", title: "Threat Detection & Response", description: "AI-powered SIEM and behaviour analytics with 15-minute triaging for critical alerts.", tags: ["SIEM", "Behavior Analytics", "Triaging"] },
        { icon: "Search", title: "Penetration Testing", description: "Real-world attack simulation to expose hidden flaws across your architecture.", highlight: true },
        { icon: "Lock", title: "Zero-Trust Architecture", description: "Never trust, always verify — micro-segmentation that secures internal perimeters." },
        { icon: "FileCheck", title: "Audits & Compliance", description: "Navigate the complex landscape of global regulations with expert-led audits.", tags: ["GDPR", "SOC 2", "HIPAA"] },
        { icon: "Activity", title: "Incident Response & Recovery", description: "When a crisis hits, our forensics experts provide rapid breach containment and post-incident strategy." },
        { icon: "Users", title: "Awareness Training", description: "Phishing simulations and workshops that provide measurable ROI for leadership teams." },
        { icon: "Zap", title: "Vulnerability Management", description: "Continuous automated scanning of cloud assets with a real-time risk score dashboard." },
        { icon: "Cloud", title: "Cloud Security (CSPM)", description: "Automated monitoring of AWS, Azure and GCP against CIS benchmarks." },
      ]}
      cols={4}
    />
  );
}
