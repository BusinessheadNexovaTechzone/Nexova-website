import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Dedicated Teams"
      title="Dedicated Developer "
      redPart="Engagement"
      description="Dedicated developer teams exclusively focused on your projects providing long-term commitment and accountability."
      stats={[
        { value: "200+", label: "Dedicated Teams" },
        { value: "50+", label: "Tech Stacks" },
        { value: "3-5 years", label: "Avg Team Tenure" },
      ]}
      heroImage="/assets/dedicated-developers.png"
      capabilitiesEyebrow="Team Dedication"
      capabilitiesTitle="Exclusive Dedicated "
      capabilitiesRed="Developer Teams"
      capabilitiesDescription="We provide dedicated developer teams that function as extensions of your in-house team with full accountability and commitment."
      features={[
        { icon: "Users", title: "Exclusive Team", description: "Developers exclusively assigned to your projects." },
        { icon: "Zap", title: "Seamless Integration", description: "Works like an extension of your existing team." },
        { icon: "Code2", title: "Full-Stack Expertise", description: "Complete development capabilities across all technologies." },
        { icon: "Sparkles", title: "Project Ownership", description: "Developers invested in your project success." },
        { icon: "Clock", title: "Flexible Scaling", description: "Scale team up or down based on project needs." },
        { icon: "Workflow", title: "Agile Methodology", description: "Scrum, Kanban, or custom methodology support." },
        { icon: "BarChart3", title: "Transparency", description: "Regular updates, demos, and progress reports." },
        { icon: "TrendingUp", title: "Long-term Growth", description: "Continuous improvement and skill development." },
      ]}
    />
  );
}
