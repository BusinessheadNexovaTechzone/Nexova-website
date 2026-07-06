import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="06 Software Development"
      title="Robust, scalable software"
      redPart="engineered for success"
      description="We build high-performance digital foundations using SOLID principles and modern architecture to ensure your long-term technological advantage."
      stats={[
        { value: "500+", label: "Projects Delivered" },
        { value: "98%", label: "Client Satisfaction" },
        { value: "SOLID", label: "Clean Code Principles" },
      ]}
      heroImage="/assets/dev-dual-monitors.jpg"
      capabilitiesEyebrow="Key Features"
      capabilitiesTitle="Maintainable, scalable "
      capabilitiesRed="software"
      capabilitiesDescription="Our development philosophy centres on longevity. Every line is subject to rigorous code reviews and automated testing to eliminate technical debt before it starts."
      features={[
        { icon: "Code2", title: "Custom Software Engineering", description: "End-to-end development focused on Domain-Driven Design (DDD)." },
        { icon: "Boxes", title: "Microservices Architecture", description: "Transitioning monoliths to independently deployable services using RabbitMQ and Kafka.", highlight: true },
        { icon: "Plug", title: "API Development", description: "Modern connectivity via RESTful APIs, GraphQL and gRPC for high-throughput data exchange." },
        { icon: "Building2", title: "Enterprise Solutions", description: "Robust CRM, ERP, HRMS and WMS development designed to integrate with your existing infrastructure." },
        { icon: "RefreshCw", title: "Legacy Modernization", description: "Strangler Fig patterns to migrate from aging Java monoliths to efficient cloud-native architectures." },
        { icon: "GaugeCircle", title: "Code Quality & Performance", description: "Utilising SonarQube for static analysis and Datadog/New Relic for real-time performance engineering." },
        { icon: "TrendingUp", title: "Optimization (ASO)", description: "Optimize titles, descriptions and assets for maximum visibility." },
        { icon: "Server", title: "Backend & API", description: "RESTful and GraphQL APIs, real-time WebSockets and push notification services." },
        { icon: "ShieldCheck", title: "App Security", description: "Certificate pinning, biometric authentication and OWASP compliance reviews protect user data." },
        { icon: "Wrench", title: "Maintenance", description: "Crashlytics monitoring and data-driven prioritization based on user behaviour." },
      ]}
      cols={3}
    />
  );
}
