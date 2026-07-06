import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Strategic Intelligence Active"
      title="Customer Software"
      redPart="Development"
      description="Architecting digital ecosystems that scale with your ambition. We blend precision logic with intuitive design to build the future of your enterprise."
      heroImage="/assets/hero-monitor.jpg"
      capabilitiesEyebrow="Service Process"
      capabilitiesTitle="Methodical "
      capabilitiesRed="Delivery"
      capabilitiesDescription="Our methodical approach ensures every project is delivered with surgical precision and tactical foresight."
      features={[
        { icon: "Code2", title: "01. Listening to Your Needs", description: "Detailed analysis of your business requirements and technical challenges." },
        { icon: "Layers", title: "02. Tailored Solutions", description: "Designing bespoke architectures that solve specific operational bottlenecks." },
        { icon: "GitBranch", title: "03. Tactical Alignment", description: "Synchronising development cycles with your strategic business milestones.", highlight: true },
        { icon: "Boxes", title: "04. Measurable Results", description: "Deployment of performance-driven software with clear KPIs and ROI." },
        { icon: "Wifi", title: "Scalable Backbone", description: "Network infrastructure that grows with your operational footprint." },
        { icon: "Shield", title: "Fortified Security", description: "Security-first architecture with hardened controls baked in from day one." },
      ]}
    />
  );
}
