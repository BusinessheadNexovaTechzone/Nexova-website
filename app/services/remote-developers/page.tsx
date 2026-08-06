import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Remote Talent"
      title="Remote Developer "
      redPart="Teams"
      description="Access global top talent with remote developer placements offering flexibility, cost-effectiveness, and world-class expertise."
      stats={[
        { value: "1000+", label: "Remote Developers" },
        { value: "50+", label: "Countries Represented" },
        { value: "40%", label: "Cost Savings vs Local" },
      ]}
      heroImage="/assets/remotedevelopers.avif"
      capabilitiesEyebrow="Global Talent"
      capabilitiesTitle="Remote Developer "
      capabilitiesRed="Solutions"
      capabilitiesDescription="We connect you with vetted remote developers from around the world, providing flexibility and access to global talent pools."
      features={[
        { icon: "Globe", title: "Global Talent Pool", description: "Access developers from 50+ countries with diverse expertise." },
        { icon: "Zap", title: "Fast Onboarding", description: "Quick integration with existing teams and projects." },
        { icon: "Code2", title: "Full-Stack Developers", description: "Frontend, backend, and full-stack specialists." },
        { icon: "Sparkles", title: "Specialized Skills", description: "AI, blockchain, cloud, mobile, and emerging tech." },
        { icon: "Clock", title: "Flexible Hours", description: "Coverage across time zones for 24/7 development." },
        { icon: "Users", title: "Team Coordination", description: "Integrated communication and project management tools." },
        { icon: "BarChart3", title: "Quality Assurance", description: "Code reviews and quality standards maintained." },
        { icon: "DollarSign", title: "Cost Efficiency", description: "Significant savings without compromising quality." },
      ]}
    />
  );
}
