import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Business Systems"
      title="CRM & ERP "
      redPart="Solutions"
      description="Transform business operations with integrated CRM and ERP systems that connect sales, finance, and operations."
      stats={[
        { value: "80+", label: "Implementations" },
        { value: "40%", label: "Avg. Efficiency Gain" },
        { value: "6-8 weeks", label: "Typical Deployment" },
      ]}
      heroImage="/assets/crm-erp.png"
      capabilitiesEyebrow="Business Transformation"
      capabilitiesTitle="Integrated CRM & "
      capabilitiesRed="ERP Platforms"
      capabilitiesDescription="We implement, customize, and integrate leading CRM and ERP platforms to streamline your entire business operation."
      features={[
        { icon: "Users", title: "CRM Implementation", description: "Salesforce, Hubspot, or Microsoft Dynamics CRM setup and customization." },
        { icon: "Database", title: "ERP Solutions", description: "SAP, Oracle, NetSuite, or Odoo deployment for unified operations." },
        { icon: "Settings2", title: "System Integration", description: "API-first integration connecting CRM, ERP, and legacy systems." },
        { icon: "BarChart3", title: "Custom Reporting", description: "Advanced dashboards and KPI tracking across the entire business." },
        { icon: "Zap", title: "Workflow Automation", description: "Business process automation reducing manual work by 70%+." },
        { icon: "Lock", title: "Data Migration", description: "Secure migration from legacy systems with zero data loss." },
        { icon: "Users", title: "Training & Change Management", description: "Comprehensive user training and adoption support." },
        { icon: "Clock", title: "Ongoing Support", description: "24/7 support, updates, and continuous optimization." },
      ]}
    />
  );
}
