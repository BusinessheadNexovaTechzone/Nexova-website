import { ServicePage } from "@/components/templates/ServicePage";

export default function ServicePageComponent() {
  return (
    <ServicePage
      eyebrow="Retail Solutions"
      title="Custom POS "
      redPart="Software Systems"
      description="Intelligent point-of-sale systems that streamline retail operations, inventory, and customer relationships."
      stats={[
        { value: "250+", label: "Retail Chains" },
        { value: "10K+", label: "Active Terminals" },
        { value: "$2B+", label: "Transactions Processed" },
      ]}
      heroImage="/assets/pos-system.png"
      capabilitiesEyebrow="Retail Innovation"
      capabilitiesTitle="Next-Gen POS "
      capabilitiesRed="Technology"
      capabilitiesDescription="Modern POS systems built for omnichannel retail with cloud sync, offline mode, and real-time inventory."
      features={[
        { icon: "ShoppingCart", title: "Sales Management", description: "Fast checkout, promotions, discounts, and loyalty program integration." },
        { icon: "Database", title: "Inventory Sync", description: "Real-time inventory tracking across multiple locations." },
        { icon: "Users", title: "Customer Management", description: "Loyalty programs, customer history, and personalized promotions." },
        { icon: "BarChart3", title: "Advanced Analytics", description: "Sales reports, trend analysis, and predictive inventory management." },
        { icon: "Smartphone", title: "Mobile POS", description: "iPad and Android-based POS for flexibility and mobility." },
        { icon: "Zap", title: "Offline Mode", description: "Works seamlessly online and offline with automatic sync." },
        { icon: "Lock", title: "Payment Integration", description: "Card readers, digital wallets, and multiple payment gateways." },
        { icon: "Users", title: "Staff Management", description: "Employee logins, role-based access, and performance tracking." },
      ]}
    />
  );
}
