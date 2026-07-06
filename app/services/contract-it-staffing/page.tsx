import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="IT Staffing"
      title="Contract IT "
      redPart="Staffing Solutions"
      description="Flexible contract staffing for short-term projects and specific skill requirements without long-term commitments."
      stats={[
        { value: "500+", label: "Contract Professionals" },
        { value: "95%", label: "Client Satisfaction" },
        { value: "2-3 days", label: "Avg Placement Time" },
      ]}
      heroImage="/assets/contract-staffing.png"
      capabilitiesEyebrow="Staffing Excellence"
      capabilitiesTitle="On-Demand IT "
      capabilitiesRed="Professionals"
      capabilitiesDescription="We provide highly skilled contract IT professionals for short-term projects, overflow work, and specialized skill gaps."
      features={[
        { icon: "Users", title: "Quick Placement", description: "Rapid matching of right talent for your specific needs." },
        { icon: "Zap", title: "Flexible Engagement", description: "Hourly, project-based, or duration-based contracts." },
        { icon: "Code2", title: "Software Developers", description: "Frontend, backend, and full-stack developers." },
        { icon: "Cloud", title: "Cloud Architects", description: "AWS, Azure, and GCP specialists." },
        { icon: "Lock", title: "Security Specialists", description: "Penetration testers and security engineers." },
        { icon: "Database", title: "Database Experts", description: "Database administrators and data engineers." },
        { icon: "BarChart3", title: "Project Management", description: "Technical project managers and scrum masters." },
        { icon: "CheckCircle2", title: "Quality Assurance", description: "QA engineers and automation specialists." },
      ]}
    />
  );
}
