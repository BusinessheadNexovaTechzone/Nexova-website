import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="06 Website Development"
      title="07 Website"
      redPart="Development"
      description="Fast, SEO-optimized and conversion-focused websites engineered for modern performance."
      stats={[
        { value: "300+", label: "Websites Launched" },
        { value: "<2s", label: "Load Time" },
        { value: "60%", label: "Avg. Traffic Increase" },
      ]}
      heroImage="/assets/hero-monitor.jpg"
      capabilitiesEyebrow="Capabilities"
      capabilitiesTitle="Full-Spectrum "
      capabilitiesRed="Development"
      capabilitiesDescription="We don't just build pages; we architect journeys that guide your users from initial curiosity to final conversion."
      features={[
        { icon: "Building2", title: "Corporate & Business Websites", description: "Professional, brand-aligned websites utilising frameworks like StoryBrand and AIDA to drive engagement.", tags: ["SEO Landing Pages", "Clear CTAs"] },
        { icon: "ShoppingCart", title: "E-Commerce Platforms", description: "Scalable headless solutions, Shopify Plus and WooCommerce platforms designed for conversion.", tags: ["One-page Checkout", "Abandoned Cart Recovery"] },
        { icon: "FileText", title: "CMS Development", description: "Custom WordPress themes (Gutenberg-first) or Headless CMS (Sanity, Contentful) paired with Next.js." },
        { icon: "Smartphone", title: "Progressive Web Apps (PWA)", description: "Service workers, background sync and push notifications for app-like experiences scoring 90+ on Lighthouse." },
        { icon: "Gauge", title: "Performance", description: "Core Web Vitals, WebP/AVIF and Edge CDN caching for sub-2s loads." },
        { icon: "BarChart3", title: "SEO & Analytics", description: "GA4 tracking, JSON-LD and Hotjar integration." },
        { icon: "Accessibility", title: "Accessibility", description: "WCAG 2.1 AA, ARIA labels and full keyboard navigation." },
        { icon: "Shield", title: "Security", description: "SSL, 4hr response SLA and daily automated backups." },
      ]}
      cols={4}
    />
  );
}
