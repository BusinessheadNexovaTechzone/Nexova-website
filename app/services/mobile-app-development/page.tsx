import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="05 Mobile App Development"
      title="Beautiful, high-performance apps for"
      redPart="iOS and Android"
      description="Crafting seamless digital experiences that live in your pocket. We merge high-end aesthetics with industrial-grade reliability."
      stats={[
        { value: "200+", label: "Apps Delivered" },
        { value: "4.7★", label: "Avg. Rating" },
        { value: "2-Week", label: "Agile Sprints" },
      ]}
      heroImage="/assets/mobile-app-development.png"
      capabilitiesEyebrow="Human-Centered Engineering"
      capabilitiesTitle="Mobile is the "
      capabilitiesRed="primary channel"
      capabilitiesDescription="Our mobile studio combines product thinking, human-centered design and engineering excellence to build apps users love."
      features={[
        { icon: "Apple", title: "Native iOS Development", description: "Build fully native iOS apps with Swift and SwiftUI, leveraging Core ML, ARKit, HealthKit and StoreKit 2.", tags: ["Swift", "SwiftUI", "Core ML"] },
        { icon: "Smartphone", title: "Native Android", description: "Modern Android apps built with Kotlin and Jetpack Compose deliver Material You experiences with adaptive layouts.", highlight: true, tags: ["Kotlin", "Compose"] },
        { icon: "Layers", title: "UI/UX Mobile Design", description: "Human-centered design starts with contextual research, wireframes and interactive Figma prototypes.", tags: ["Figma", "Usability"] },
        { icon: "Layers", title: "Cross-Platform Development", description: "Sharing 90%+ of code across iOS and Android — React Native and Flutter without sacrificing native feel.", tags: ["React Native", "Flutter"] },
        { icon: "TrendingUp", title: "Optimization (ASO)", description: "Optimize titles, descriptions and assets for maximum visibility on App Store and Google Play." },
        { icon: "Server", title: "Backend & API", description: "RESTful and GraphQL APIs, real-time WebSockets and push notifications via FCM/APNs." },
        { icon: "Shield", title: "App Security", description: "Certificate pinning, biometric authentication and OWASP compliance reviews protect user data." },
        { icon: "Wrench", title: "Maintenance", description: "Firebase Crashlytics monitoring and data-driven prioritization based on user behaviour." },
      ]}
      cols={4}
    />
  );
}
