import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="AI & Machine Learning"
      title="Intelligent systems that"
      redPart="learn and adapt"
      description="From foundation model fine-tuning to autonomous agent orchestration — we deliver AI that drives measurable business value."
      stats={[{ value: "120+", label: "Models in Prod" }, { value: "24/7", label: "MLOps" }, { value: "<100ms", label: "Inference" }]}
      heroImage="/assets/ai-globe.jpg"
      capabilitiesTitle="AI "
      capabilitiesRed="Capabilities"
      features={[
        { icon: "Brain", title: "Custom Model Training", description: "Fine-tuned LLMs and computer vision models on your proprietary data." },
        { icon: "Bot", title: "Autonomous Agents", description: "Multi-step agent systems with tool-use and memory.", highlight: true },
        { icon: "MessageSquare", title: "Conversational AI", description: "Production chatbots with retrieval-augmented generation." },
        { icon: "Eye", title: "Computer Vision", description: "Object detection, OCR and visual quality control." },
        { icon: "Sparkles", title: "Generative AI", description: "Content generation pipelines with safety and brand controls." },
        { icon: "BarChart3", title: "Predictive Analytics", description: "Forecasting and anomaly detection for operations and revenue." },
      ]}
    />
  );
}
