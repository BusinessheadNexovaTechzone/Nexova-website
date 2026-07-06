import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Cloud Transformation"
      title="Seamless Cloud "
      redPart="Migration"
      description="Zero-downtime migration of applications and data from on-premises to cloud platforms."
      stats={[
        { value: "120+", label: "Successful Migrations" },
        { value: "Zero", label: "Downtime Achieved" },
        { value: "50%", label: "Cost Savings" },
      ]}
      heroImage="/assets/cloud-migration.png"
      capabilitiesEyebrow="Migration Excellence"
      capabilitiesTitle="Lift, Shift & "
      capabilitiesRed="Modernize"
      capabilitiesDescription="We manage every aspect of cloud migration from assessment through optimization, ensuring smooth transition with minimal risk."
      features={[
        { icon: "CheckCircle2", title: "Assessment & Planning", description: "Comprehensive infrastructure audit and migration roadmap." },
        { icon: "Zap", title: "Lift & Shift", description: "Quick migration of existing applications with minimal changes." },
        { icon: "Sparkles", title: "Re-platforming", description: "Optimize applications for cloud-native benefits." },
        { icon: "RefreshCw", title: "Re-architecting", description: "Complete modernization using microservices and containers." },
        { icon: "Database", title: "Data Migration", description: "Secure migration of databases with zero data loss." },
        { icon: "Lock", title: "Security During Migration", description: "Encryption and compliance maintained throughout transition." },
        { icon: "Users", title: "Training & Support", description: "Team training and post-migration support for smooth adoption." },
        { icon: "BarChart3", title: "Optimization", description: "Right-sizing and cost optimization after migration." },
      ]}
    />
  );
}
