import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/ui/service-hero";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { FeatureGrid, type Feature } from "@/components/ui/feature-grid";
import { CtaBanner, TechStackStrip } from "@/components/ui/cta-banner";
import { techStack } from "@/lib/services";

export type ServicePageProps = {
  eyebrow: string;
  title: string;
  redPart: string;
  description: string;
  stats?: { value: string; label: string }[];
  heroImage?: string;
  capabilitiesEyebrow?: string;
  capabilitiesTitle: string;
  capabilitiesRed?: string;
  capabilitiesDescription?: string;
  features: Feature[];
  cols?: 2 | 3 | 4;
  ctaTitle?: string;
  ctaDescription?: string;
};

export function ServicePage(props: ServicePageProps) {
  const visual = props.heroImage ? (
    <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
      <img
        src={props.heroImage}
        alt={props.title}
        loading="lazy"
        width={1024}
        height={768}
        className="h-full w-full object-cover"
      />
    </div>
  ) : undefined;

  return (
    <Layout>
      <ServiceHero
        eyebrow={props.eyebrow}
        title={props.title}
        redPart={props.redPart}
        description={props.description}
        stats={props.stats}
        visual={visual}
      />

      <Section className="pt-4 md:pt-8">
        <SectionHeading
          eyebrow={props.capabilitiesEyebrow ?? "Capabilities"}
          title={props.capabilitiesTitle}
          redPart={props.capabilitiesRed}
          description={props.capabilitiesDescription}
        />
        <FeatureGrid features={props.features} cols={props.cols ?? 3} />
      </Section>

      <Section className="pt-0">
        <TechStackStrip items={techStack} />
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title={props.ctaTitle}
          description={props.ctaDescription}
        />
      </Section>
    </Layout>
  );
}
