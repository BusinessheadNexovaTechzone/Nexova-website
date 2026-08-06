
import { Layout } from "@/components/layout/Layout";
import { Handshake, Globe, Award, Zap } from "lucide-react";


export default function PartnershipsPage() {
  return (
    <Layout>
      <section className="pt-12 pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Strategic <span className="text-gradient-red">Partnerships</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Collaborating with industry leaders to deliver comprehensive solutions
            </p>
          </div>

          <div className="bg-muted/40 rounded-lg p-12 mb-16">
            <Handshake className="h-12 w-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold text-navy mb-4">Our Partnership Philosophy</h2>
            <p className="text-foreground/80 leading-relaxed">
              We believe in the power of strategic partnerships to deliver better solutions for our clients. By collaborating with industry leaders and technology innovators, we expand our capabilities and provide comprehensive services that address complex business challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8">
              <Globe className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy mb-4">Technology Partners</h3>
              <p className="text-foreground/80 mb-6">
                We partner with leading technology providers to ensure access to cutting-edge platforms and tools.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• AWS Premier Consulting Partner</li>
                <li>• Microsoft Gold Partner</li>
                <li>• Salesforce Implementation Partner</li>
                <li>• Google Cloud Partner</li>
                <li>• Adobe Solution Partner</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg p-8">
              <Award className="h-10 w-10 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-navy mb-4">Industry Leaders</h3>
              <p className="text-foreground/80 mb-6">
                Collaborations with industry experts and market leaders to deliver best-in-class solutions.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Enterprise Software Vendors</li>
                <li>• Security & Compliance Experts</li>
                <li>• Digital Transformation Consultants</li>
                <li>• Industry-specific Solution Providers</li>
                <li>• Research & Innovation Centers</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">Key Partnerships</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Cloud Infrastructure Partners",
                  description:
                    "Strategic partnerships with AWS, Microsoft Azure, and Google Cloud enable us to provide enterprise-grade cloud solutions with optimized architecture and cost management.",
                },
                {
                  title: "Software & Platform Partners",
                  description:
                    "Partnerships with Salesforce, SAP, Oracle, and other enterprise platforms allow us to deliver integrated solutions for complex business processes.",
                },
                {
                  title: "Security & Compliance Partners",
                  description:
                    "Collaborations with leading security firms ensure our solutions meet the highest standards for data protection, compliance, and risk management.",
                },
                {
                  title: "Industry-Specific Partners",
                  description:
                    "Specialized partnerships across healthcare, finance, retail, and manufacturing enable us to deliver tailored solutions for specific industry challenges.",
                },
                {
                  title: "Innovation & Research Partners",
                  description:
                    "Collaborations with research institutions and innovation labs keep us at the forefront of emerging technologies like AI, blockchain, and IoT.",
                },
              ].map((partnership, idx) => (
                <div key={idx} className="border-l-4 border-primary pl-6 py-4 bg-muted/30 rounded-r-lg px-6">
                  <h3 className="font-bold text-navy mb-2">{partnership.title}</h3>
                  <p className="text-foreground/70">{partnership.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-muted/40 rounded-lg">
              <Zap className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">30+</h3>
              <p className="text-sm text-foreground/70">Technology Partnerships</p>
            </div>
            <div className="text-center p-8 bg-muted/40 rounded-lg">
              <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">15</h3>
              <p className="text-sm text-foreground/70">Global Integration Partners</p>
            </div>
            <div className="text-center p-8 bg-muted/40 rounded-lg">
              <Award className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-navy mb-2">20</h3>
              <p className="text-sm text-foreground/70">Industry Certifications</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12">
            <h2 className="text-2xl font-bold text-navy mb-6">Partnership Opportunities</h2>
            <p className="text-foreground/80 mb-8">
              We're always looking for strategic partnerships that align with our vision and values. If you're interested in collaborating with Nexova, let's discuss how we can create mutual value.
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-red)]">
              Become a Partner
            </button>
          </div>

          <div className="mt-16">
            <img src="/images/partnerships.jpg" alt="Strategic Partnerships" className="rounded-lg w-full h-full object-contain" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
