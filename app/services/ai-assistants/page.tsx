import { ServicePage } from "@/components/templates/ServicePage";

export default function AIAssistantsPage() {
  return (
    <ServicePage
      eyebrow="Intelligent Assistants"
      title="AI "  redPart="Assistants"
     
      description="Conversational AI that understands context, learns from interactions, and provides intelligent support 24/7."
      stats={[
        { value: "95%", label: "User Satisfaction" },
        { value: "<2s", label: "Response Time" },
        { value: "40+", label: "Languages" },
      ]}
      heroImage="/assets/ai-globe.jpg"
      capabilitiesTitle="AI Assistant "
      capabilitiesRed="Capabilities"
      capabilitiesDescription="Build intelligent conversational agents that understand user intent, maintain context, and provide personalized responses."
      features={[
        { icon: "MessageSquare", title: "Natural Language Understanding", description: "Advanced NLP models that understand intent, sentiment, and context across conversations." },
        { icon: "Brain", title: "Contextual Learning", description: "Assistants that learn from conversation history and adapt responses to user preferences.", highlight: true },
        { icon: "Zap", title: "Real-time Response", description: "Sub-second response times with streaming capabilities for seamless interactions." },
        { icon: "Globe", title: "Multi-language Support", description: "Support for 40+ languages with natural localization and cultural adaptation." },
        { icon: "Shield", title: "Enterprise Security", description: "End-to-end encryption, data isolation, and compliance with GDPR, HIPAA standards." },
        { icon: "Sparkles", title: "Customization", description: "Fine-tune assistants with your brand voice, knowledge base, and business logic." },
      ]}
    />
  );
}
