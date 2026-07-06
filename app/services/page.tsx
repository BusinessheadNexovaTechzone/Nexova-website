import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { ServiceCard } from "@/components/ui/service-card";
import { services } from "@/lib/services";


export default function ServicesPage() {
  return (
    <Layout>
      <Section>
        <SectionHeading
          eyebrow="Comprehensive Solutions"
          title="Service "
          redPart="Ecosystem"
          description="A strategic suite of capabilities engineered for maximum operational impact across your organization."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
        </div>
      </Section>
    </Layout>
  );
}
