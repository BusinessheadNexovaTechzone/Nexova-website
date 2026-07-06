import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Testing & QA"
      title="Quality engineering"
      redPart="at every layer"
      description="From unit and integration to load and chaos testing — we build the safety nets that let you ship without fear."
      heroImage="/assets/qa-dashboard.png"
      capabilitiesTitle="QA "
      capabilitiesRed="Capabilities"
      features={[
        { icon: "FlaskConical", title: "Automated Testing", description: "Playwright, Cypress and Vitest suites with CI integration.", highlight: true },
        { icon: "Bug", title: "Manual & Exploratory", description: "Senior QA engineers exploring critical user journeys." },
        { icon: "Gauge", title: "Performance Testing", description: "k6 and JMeter load tests with SLA validation." },
        { icon: "Shield", title: "Security Testing", description: "OWASP-aligned testing and penetration assessments." },
        { icon: "Workflow", title: "API Testing", description: "Contract, integration and resilience testing for APIs." },
        { icon: "Eye", title: "Accessibility QA", description: "WCAG 2.1 AA audits with assistive technology validation." },
      ]}
    />
  );
}
