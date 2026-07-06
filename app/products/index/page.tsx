
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { ArrowRight } from "lucide-react";


const products = [
  {
    title: "FoodZo",
    description: "Complete restaurant management software including billing, KOT, menu management, reports and operations.",
    slug: "foodzo",
  },
  {
    title: "FoodZo Lite",
    description: "Affordable billing & POS software for restaurants, supermarkets and retail businesses.",
    slug: "foodzo-lite",
  },
  {
    title: "Nexova AI Assistant",
    description: "Business-trained AI chatbot for sales, automation, customer support and business intelligence.",
    slug: "ai-assistant",
  },
  {
    title: "Restaurant Automation Bot",
    description: "Smart chatbot system for restaurant order management and customer interaction.",
    slug: "automation-bot",
  },
];

export default function ProductsIndex() {
  return (
    <Layout>
      <Section>
        <SectionHeading
          eyebrow="Product Suite"
          title="Our Products & "
          redPart="Platforms"
          description="Powerful solutions built for business growth and operational excellence."
        />
        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          {products.map((product) => (
            <Link
              key={product.slug}
             	href={`/products/${product.slug}`}
              className="group rounded-2xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all"
            >
              <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-foreground mb-4">{product.description}</p>
              <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </Layout>
  );
}
