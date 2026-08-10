
import Image from "next/image";
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

          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-xl overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-soft)]">
                <Image
                  src="/images/iso-cert.png"
                  alt="ISO Certificate"
                  width={960}
                  height={720}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">ISO Certified</p>
              <h2 className="text-4xl md:text-5xl font-bold text-navy">Introducing Nexova TechZone</h2>
              <p className="text-lg font-semibold text-foreground">Innovative IT Solutions. Trusted Technology Partner.</p>
              <div className="space-y-4 text-foreground/80 leading-relaxed">
                <p>
                  At Nexova TechZone, we deliver innovative IT Services and Consulting that help businesses transform, grow, and stay ahead in a digital-first world. As a trusted IT Services Company, we provide secure, scalable, and future-ready IT Solutions tailored to your business needs.
                </p>
                <p>
                  Backed by ISO 9001:2015 and ISO 27001 certifications, we are committed to quality, security, and excellence in every solution we deliver. From software development and AI automation to cloud infrastructure, IT staffing, digital marketing, and cybersecurity, we empower businesses with technology that drives lasting success.
                </p>
                <p>
                  Partner with Nexova TechZone and build the future with confidence.
                </p>
              </div>
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
