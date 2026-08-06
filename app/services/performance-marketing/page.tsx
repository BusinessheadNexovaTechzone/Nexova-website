import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Growth Marketing"
      title="Performance-Driven "
      redPart="Marketing"
      description="Data-focused marketing campaigns optimized for ROI with transparent metrics and accountability."
      stats={[
        { value: "450+", label: "Campaigns Managed" },
        { value: "4.2X", label: "Avg ROI" },
        { value: "$200M+", label: "Ad Spend Managed" },
      ]}
      heroImage="/assets/performance-marketing.png"
      capabilitiesEyebrow="Performance Marketing"
      capabilitiesTitle="Results-Driven "
      capabilitiesRed="Campaign Management"
      capabilitiesDescription="We deliver measurable results through data-driven campaigns optimized for conversions, leads, and revenue growth."
      features={[
        { icon: "BarChart3", title: "PPC Advertising", description: "Google Ads, Bing, and Facebook advertising management." },
        { icon: "Sparkles", title: "Conversion Optimization", description: "Landing page design and testing for maximum conversions." },
        { icon: "Users", title: "Audience Targeting", description: "Precision audience segmentation and lookalike audiences." },
        { icon: "Zap", title: "Campaign Optimization", description: "Continuous A/B testing and performance tuning." },
        { icon: "Database", title: "Marketing Automation", description: "Email, retargeting, and lead nurturing automation." },
        { icon: "TrendingUp", title: "Growth Hacking", description: "Rapid experimentation and viral growth strategies." },
        { icon: "BarChart3", title: "Analytics & Reporting", description: "Multi-channel attribution and ROI tracking." },
        { icon: "Target", title: "Budget Optimization", description: "Maximizing ROI across all channels and campaigns." },
      ]}
    />
  );
}
