import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="UI / UX"
      title="Precision-Engineered"
      redPart="User Experiences."
      description="We transform complex architectural requirements into seamless, high-performance interfaces that bridge the gap between human intuition and technical excellence."
      stats={[
        { value: "400+", label: "Screens Delivered" },
        { value: "WCAG 2.1", label: "Accessibility Standard" },
        { value: "30%", label: "Lower Bounce Rate" },
      ]}
      heroImage="/assets/uiux.jpg"
      capabilitiesEyebrow="Capabilities"
      capabilitiesTitle="Beyond "
      capabilitiesRed="Aesthetics"
      capabilitiesDescription='Strategic design through human-centered expertise.'
      features={[
        { icon: "Eye", title: "Discovery & Research", description: "Stakeholder workshops, user interviews and competitive landscape audits." },
        { icon: "Palette", title: "Visual & Brand Systems", description: "Token-based design systems that scale across platforms with engineering parity." },
        { icon: "MousePointerClick", title: "Interaction Design", description: "Micro-interactions and motion specs that guide users through complex flows." },
        { icon: "Layers", title: "Prototyping", description: "Interactive Figma prototypes ready for usability testing in days, not weeks." },
        { icon: "Gauge", title: "Performance", description: "Design optimized for Core Web Vitals from the very first wireframe." },
        { icon: "BarChart3", title: "Analytics & A/B", description: "GA4, Hotjar and Mixpanel-driven decisions baked into every release." },
        { icon: "Accessibility", title: "Accessibility", description: "WCAG 2.1 AA, ARIA labels and full keyboard navigation." },
        { icon: "Shield", title: "Security", description: "Privacy-by-design and secure UX patterns for sensitive flows." },
      ]}
      cols={4}
    />
  );
}
