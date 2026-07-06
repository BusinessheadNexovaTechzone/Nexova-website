import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Security Assessment"
      title="Comprehensive Security "
      redPart="Audits"
      description="Independent security audits identifying vulnerabilities and compliance gaps across your infrastructure and applications."
      stats={[
        { value: "300+", label: "Audits Completed" },
        { value: "1500+", label: "Vulnerabilities Found" },
        { value: "98%", label: "Remediation Success" },
      ]}
      heroImage="/assets/security-audits.png"
      capabilitiesEyebrow="Audit Excellence"
      capabilitiesTitle="Thorough Security "
      capabilitiesRed="Evaluation"
      capabilitiesDescription="We conduct comprehensive security audits assessing your entire security posture and providing actionable recommendations."
      features={[
        { icon: "CheckCircle2", title: "Infrastructure Audit", description: "Comprehensive assessment of network and server security." },
        { icon: "Lock", title: "Application Security", description: "Code review and vulnerability scanning of applications." },
        { icon: "Database", title: "Database Security", description: "Evaluation of data protection and access controls." },
        { icon: "Zap", title: "Compliance Assessment", description: "Evaluation against SOC2, ISO27001, HIPAA, GDPR." },
        { icon: "Shield", title: "Risk Assessment", description: "Identification and quantification of security risks." },
        { icon: "Users", title: "Access Control Review", description: "Evaluation of user permissions and authentication." },
        { icon: "FileText", title: "Detailed Reporting", description: "Comprehensive reports with prioritized recommendations." },
        { icon: "TrendingUp", title: "Remediation Roadmap", description: "Action plan for addressing identified vulnerabilities." },
      ]}
    />
  );
}
