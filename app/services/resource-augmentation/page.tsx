import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Team Expansion"
      title="Resource "
      redPart="Augmentation"
      description="Expand your team quickly with specialized resources to handle overflow work and accelerate project delivery."
      stats={[
        { value: "400+", label: "Augmented Resources" },
        { value: "95%", label: "Retention Rate" },
        { value: "1-2 weeks", label: "Onboarding Time" },
      ]}
      heroImage="/assets/resource-augmentation.png"
      capabilitiesEyebrow="Team Scaling"
      capabilitiesTitle="Strategic Resource "
      capabilitiesRed="Augmentation"
      capabilitiesDescription="We supplement your in-house team with experienced professionals to fill skill gaps and accelerate project timelines."
      features={[
        { icon: "Users", title: "Quick Scaling", description: "Rapidly expand your team for seasonal or project demands." },
        { icon: "Zap", title: "Skilled Professionals", description: "Pre-vetted specialists in your required technologies." },
        { icon: "Code2", title: "Various Roles", description: "Developers, QA, DevOps, architects, and managers." },
        { icon: "Clock", title: "Flexible Duration", description: "Short-term or long-term engagement based on needs." },
        { icon: "Sparkles", title: "Cultural Fit", description: "Professionals who integrate seamlessly with your team." },
        { icon: "Users", title: "Management Support", description: "HR and administrative support included." },
        { icon: "BarChart3", title: "Performance Tracking", description: "Regular evaluations and performance metrics." },
        { icon: "TrendingUp", title: "Knowledge Transfer", description: "Documentation and training during engagement." },
      ]}
    />
  );
}
