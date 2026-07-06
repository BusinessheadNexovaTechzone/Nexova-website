import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Social Strategy"
      title="Complete Social Media "
      redPart="Management"
      description="Strategic social media management building engaged communities and driving brand awareness across platforms."
      stats={[
        { value: "350+", label: "Active Accounts" },
        { value: "100M+", label: "Combined Followers" },
        { value: "8.5K+", label: "Posts Created Monthly" },
      ]}
      heroImage="/assets/social-media-management.png"
      capabilitiesEyebrow="Social Excellence"
      capabilitiesTitle="Full-Service Social "
      capabilitiesRed="Media Management"
      capabilitiesDescription="We handle every aspect of social media from content creation to community management and paid advertising."
      features={[
        { icon: "Sparkles", title: "Content Strategy", description: "Platform-specific content calendars and creative direction." },
        { icon: "FileText", title: "Content Creation", description: "High-quality graphics, videos, and copywriting." },
        { icon: "Users", title: "Community Management", description: "Engagement, customer service, and community building." },
        { icon: "BarChart3", title: "Analytics & Reporting", description: "Detailed metrics, insights, and performance reports." },
        { icon: "Share2", title: "Influencer Partnerships", description: "Identifying and managing influencer collaborations." },
        { icon: "Megaphone", title: "Paid Social Advertising", description: "Campaign management across Facebook, Instagram, TikTok." },
        { icon: "Zap", title: "Crisis Management", description: "Proactive monitoring and rapid response to issues." },
        { icon: "TrendingUp", title: "Growth Strategy", description: "Follower growth, engagement optimization, and audience building." },
      ]}
    />
  );
}
