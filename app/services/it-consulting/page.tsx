import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Strategic Advisory"
      title="Enterprise IT "
      redPart="Consulting"
      description="Strategic IT consulting to align technology with business goals and drive digital transformation."
      stats={[
        { value: "200+", label: "Consulting Engagements" },
        { value: "$5B+", label: "Client Transformation Value" },
        { value: "25+ years", label: "Combined Expertise" },
      ]}
      heroImage="/assets/it-consulting.png"
      capabilitiesEyebrow="Strategic Guidance"
      capabilitiesTitle="IT Strategy & "
      capabilitiesRed="Consulting"
      capabilitiesDescription="We advise enterprises on technology strategy, digital transformation, and IT roadmaps to achieve competitive advantage."
      features={[
        { icon: "Target", title: "Digital Transformation", description: "Comprehensive digital strategy and transformation roadmaps." },
        { icon: "BarChart3", title: "Technology Assessment", description: "Evaluation of current IT infrastructure and recommendations." },
        { icon: "Sparkles", title: "Cloud Strategy", description: "Cloud adoption strategy and multi-cloud architecture design." },
        { icon: "Lock", title: "Security Strategy", description: "Security posture assessment and cyber risk management." },
        { icon: "Zap", title: "Innovation Planning", description: "AI, IoT, and emerging technology adoption strategies." },
        { icon: "Users", title: "Organization & Culture", description: "IT organization restructuring for digital success." },
        { icon: "Database", title: "Data Strategy", description: "Data governance, analytics, and AI enablement." },
        { icon: "TrendingUp", title: "Vendor Management", description: "Technology vendor selection and contract negotiation." },
      ]}
    />
  );
}
