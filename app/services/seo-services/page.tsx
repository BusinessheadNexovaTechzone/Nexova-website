import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Search Optimization"
      title="Complete SEO "
      redPart="Services"
      description="Data-driven SEO strategy delivering organic traffic growth and sustainable search engine rankings."
      stats={[
        { value: "300+", label: "Active Campaigns" },
        { value: "350%", label: "Avg Traffic Growth" },
        { value: "$50M+", label: "Client Revenue from SEO" },
      ]}
      heroImage="/assets/seo-services.png"
      capabilitiesEyebrow="SEO Excellence"
      capabilitiesTitle="Full-Spectrum "
      capabilitiesRed="SEO Strategy"
      capabilitiesDescription="We deliver comprehensive SEO services from technical optimization to content strategy ensuring sustained organic growth."
      features={[
        { icon: "Search", title: "Keyword Research", description: "Data-driven keyword analysis and opportunity identification." },
        { icon: "FileText", title: "Content Strategy", description: "SEO-optimized content creation and publishing calendar." },
        { icon: "Zap", title: "Technical SEO", description: "Site speed, indexing, sitemap, and crawlability optimization." },
        { icon: "Link", title: "Link Building", description: "High-quality backlink acquisition and authority building." },
        { icon: "BarChart3", title: "SEO Analytics", description: "Ranking tracking, traffic analysis, and performance reporting." },
        { icon: "Lock", title: "Local SEO", description: "Google My Business optimization and local ranking improvement." },
        { icon: "Smartphone", title: "Mobile SEO", description: "Mobile-first indexing and core web vitals optimization." },
        { icon: "TrendingUp", title: "Conversion Optimization", description: "Optimizing traffic for conversions and ROI." },
      ]}
    />
  );
}
