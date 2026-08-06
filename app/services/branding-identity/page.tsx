import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Brand Strategy"
      title="Complete Branding "
      redPart="& Identity"
      description="Strategic brand development and visual identity design that communicates your value and builds recognition."
      stats={[
        { value: "250+", label: "Brands Developed" },
        { value: "95%", label: "Client Satisfaction" },
        { value: "3-6 weeks", label: "Typical Timeline" },
      ]}
      heroImage="/assets/branding-identity.png"
      capabilitiesEyebrow="Brand Excellence"
      capabilitiesTitle="Strategic Brand "
      capabilitiesRed="Design"
      capabilitiesDescription="We create comprehensive brand identities that resonate with audiences and differentiate you from competitors."
      features={[
        { icon: "Palette", title: "Brand Strategy", description: "Research-backed positioning, messaging, and brand personality." },
        { icon: "Sparkles", title: "Logo Design", description: "Memorable, timeless logos that represent your brand essence." },
        { icon: "Zap", title: "Visual Identity", description: "Color palettes, typography, and design system development." },
        { icon: "FileText", title: "Brand Guidelines", description: "Comprehensive brand books ensuring consistency." },
        { icon: "BarChart3", title: "Brand Audit", description: "Analysis of current brand perception and positioning." },
        { icon: "Users", title: "Brand Messaging", description: "Taglines, brand voice, and communication guidelines." },
        { icon: "ShoppingCart", title: "Packaging Design", description: "Product packaging that stands out on shelves." },
        { icon: "TrendingUp", title: "Brand Launch", description: "Strategic go-to-market for your new or refreshed brand." },
      ]}
    />
  );
}
