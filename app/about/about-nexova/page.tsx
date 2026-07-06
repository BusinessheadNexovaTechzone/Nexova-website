
import { Layout } from "@/components/layout/Layout";
import { ArrowRight, Award, Users, Zap } from "lucide-react";


export default function AboutNexovaPage() {
  return (
    <Layout>
      <section className="pt-12 pb-20 md:pt-20 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              About <span className="text-gradient-red">Nexova TechZone</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Leading digital transformation through innovation and expertise
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Story</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Nexova TechZone was founded with a vision to transform businesses through cutting-edge technology and innovative solutions. Since our inception, we've been committed to delivering excellence and driving digital transformation across industries.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Our journey has been marked by continuous innovation, strategic partnerships, and a deep commitment to our clients' success. We believe in creating technology solutions that not only meet today's challenges but anticipate tomorrow's opportunities.
              </p>
            </div>

            <div className="bg-surface rounded-lg p-8 border border-border">
              <h3 className="text-xl font-bold text-navy mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                {[
                  "Founded in 2009 with a mission to innovate",
                  "Serving 500+ clients globally",
                  "Team of 200+ skilled professionals",
                  "Offices in 4 major countries",
                  "Certified and award-winning team",
                  "ISO 9001:2015 and ISO 27001 certified",
                ].map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ArrowRight className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-muted/40 rounded-lg p-8 mb-16">
            <h2 className="text-2xl font-bold text-navy mb-6">Our Expertise</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Enterprise Solutions",
                  description: "Building scalable, secure enterprise applications that drive growth",
                },
                {
                  title: "Cloud Infrastructure",
                  description: "Designing and implementing robust cloud architectures",
                },
                {
                  title: "Digital Innovation",
                  description: "Leveraging AI, ML, and emerging technologies for transformation",
                },
              ].map((expertise, idx) => (
                <div key={idx}>
                  <h3 className="font-semibold text-navy mb-2">{expertise.title}</h3>
                  <p className="text-foreground/70">{expertise.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-6">Why Nexova?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Proven track record of 15+ years in technology",
                "Deep industry expertise across multiple sectors",
                "Client-centric approach with dedicated support",
                "Cutting-edge technology and best practices",
                "Flexible engagement models tailored to your needs",
                "Continuous innovation and R&D investment",
              ].map((reason, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <p className="text-foreground/80">{reason}</p>
                </div>
              ))}
            </div>
            <div>
              <img src="/images/about-company.jpg" alt="Nexova Team" className="rounded-lg w-full h-full object-cover p-4" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
