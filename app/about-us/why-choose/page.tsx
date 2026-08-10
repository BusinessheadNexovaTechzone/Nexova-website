
import { Layout } from "@/components/layout/Layout";
import { Shield, Zap, Users, Award, TrendingUp, Globe } from "lucide-react";


export default function WhyChoosePage() {
  const reasons = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "15+ years of industry experience with a track record of successful projects and satisfied clients globally.",
    },
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "We leverage the latest technologies including AI, ML, cloud, and emerging solutions to drive innovation.",
    },
    {
      icon: Users,
      title: "Dedicated Team",
      description: "Our skilled professionals are committed to understanding your business and delivering tailored solutions.",
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "ISO 27001 certified with enterprise-grade security practices and full compliance with industry standards.",
    },
    {
      icon: TrendingUp,
      title: "Results-Driven Approach",
      description: "We focus on measurable outcomes and ROI, ensuring your investment delivers tangible business value.",
    },
    {
      icon: Globe,
      title: "Global Support",
      description: "24/7 support across multiple time zones with local expertise and global resources.",
    },
  ];

  return (
    <Layout>
      <section className="pt-12 pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Why Choose <span className="text-gradient-red">Nexova</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Reasons why leading organizations partner with us
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {reasons.map((reason, idx) => {
              const Icon = reason.icon;
              return (
                <div key={idx} className="bg-muted/40 rounded-lg p-6 hover:bg-muted/60 transition-colors">
                  <Icon className="h-10 w-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-navy mb-3">{reason.title}</h3>
                  <p className="text-foreground/70">{reason.description}</p>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Our Competitive Advantages</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  metric: "500+",
                  label: "Successful Projects",
                },
                {
                  metric: "200+",
                  label: "Team Members",
                },
                {
                  metric: "98%",
                  label: "Client Satisfaction",
                },
              ].map((advantage, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">{advantage.metric}</div>
                  <p className="text-foreground/80">{advantage.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">What Sets Us Apart</h2>
            <div className="space-y-4">
              {[
                "Deep industry expertise across finance, healthcare, e-commerce, manufacturing, and more",
                "Custom solutions tailored to your specific business needs and challenges",
                "Agile and flexible engagement models that adapt to your requirements",
                "Transparent communication and regular progress reporting",
                "End-to-end support from strategy to implementation and beyond",
                "Investment in R&D to stay ahead of technology trends",
                "Strong focus on code quality, security, and performance optimization",
                "Proactive approach to risk management and quality assurance",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <p className="text-foreground/80">{item}</p>
                </div>
              ))}
            </div>
          </div>
{/* 
          <div className="bg-navy text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Partner with Us?</h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-red)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_oklch(0.55_0.22_25_/_0.35)]">
              Book a Consultation
            </button>
          </div> */}

          <div className="mb-16">
            <img src="/images/why-choose.jpg" alt="Why Choose Nexova" className="rounded-lg w-full h-full object-cover" />
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">Ready to Transform Your Business?</h2>
            <p className="text-foreground/80 mb-6">
              Join hundreds of companies that have chosen Nexova for their digital transformation journey.
            </p>
            {/* <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-lg font-medium transition-colors">
              Get Started Today
            </button> */}
          </div>
        </div>
      </section>
    </Layout>
  );
}
