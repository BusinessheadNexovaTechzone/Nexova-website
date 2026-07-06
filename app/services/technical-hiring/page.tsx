import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Talent Acquisition"
      title="Technical Hiring "
      redPart="Solutions"
      description="End-to-end technical recruitment finding the right talent for your team quickly and efficiently."
      stats={[
        { value: "2000+", label: "Successful Placements" },
        { value: "90%", label: "1-Year Retention" },
        { value: "3-4 weeks", label: "Avg Hiring Time" },
      ]}
      heroImage="/assets/tech-stack.png"
      capabilitiesEyebrow="Recruitment Excellence"
      capabilitiesTitle="Strategic Technical "
      capabilitiesRed="Hiring"
      capabilitiesDescription="We handle all aspects of technical hiring from sourcing through onboarding, ensuring you get the right talent for your organization."
      features={[
        { icon: "Search", title: "Talent Sourcing", description: "Proactive sourcing from active and passive candidates." },
        { icon: "Users", title: "Screening & Assessment", description: "Technical assessment and cultural fit evaluation." },
        { icon: "Code2", title: "Interview Coordination", description: "Structured interviews and technical evaluations." },
        { icon: "Sparkles", title: "Negotiation Support", description: "Offer negotiation and acceptance management." },
        { icon: "Clock", title: "Fast Turnaround", description: "Rapid recruitment without compromising quality." },
        { icon: "FileText", title: "Job Description Crafting", description: "Creating compelling job descriptions that attract top talent." },
        { icon: "BarChart3", title: "Market Insights", description: "Salary benchmarking and market rate guidance." },
        { icon: "CheckCircle2", title: "Onboarding Support", description: "Post-hire onboarding and integration support." },
      ]}
    />
  );
}
