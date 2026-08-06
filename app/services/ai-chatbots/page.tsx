import { ServicePage } from "@/components/templates/ServicePage";

export default function AIChatbotsPage() {
  return (
    <ServicePage
      eyebrow="Conversational Commerce"
      title="AI "
      redPart="Chatbots"
      description="Customer service bots that handle inquiries, complaints, and transactions with human-like understanding."
      stats={[
        { value: "70%", label: "Query Resolution" },
        { value: "24/7", label: "Availability" },
        { value: "5x", label: "Cost Reduction" },
      ]}
      heroImage="/assets/phone-glow.jpg"
      capabilitiesTitle="Chatbot "
      capabilitiesRed="Features"
      capabilitiesDescription="Deploy intelligent chatbots across WhatsApp, Slack, Teams, web, and mobile platforms for seamless customer support."
      features={[
        { icon: "MessageSquare", title: "Multi-channel Deployment", description: "Web, WhatsApp, Slack, Teams, Facebook, Instagram, and custom channels in one platform." },
        { icon: "Zap", title: "Instant Response", description: "Handle customer inquiries in real-time with fallback to human agents when needed." },
        { icon: "TrendingUp", title: "Conversation Analytics", description: "Track sentiment, satisfaction, resolution rates, and identify improvement areas." },
        { icon: "Users", title: "Human Handoff", description: "Seamlessly escalate complex issues to human agents with full context." },
        { icon: "ShoppingCart", title: "Transactional Flows", description: "Handle orders, refunds, bookings, and payments directly in the chat." },
        { icon: "Award", title: "Continuous Learning", description: "Chatbots learn from each interaction to improve accuracy and reduce escalations." },
      ]}
    />
  );
}
