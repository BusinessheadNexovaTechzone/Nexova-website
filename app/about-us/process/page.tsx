
import { Layout } from "@/components/layout/Layout";
import { CheckCircle, ArrowRight } from "lucide-react";


export default function ProcessPage() {
  const phases = [
    {
      number: "1",
      title: "Discovery & Analysis",
      description: "We deeply understand your business, challenges, and goals through comprehensive analysis and stakeholder engagement.",
      points: ["Business Analysis", "Requirements Gathering", "Market Research", "Competitor Analysis"],
    },
    {
      number: "2",
      title: "Strategy & Planning",
      description: "Develop a detailed roadmap and strategy aligned with your objectives, budget, and timeline.",
      points: ["Solution Design", "Resource Planning", "Risk Assessment", "Timeline Definition"],
    },
    {
      number: "3",
      title: "Design & Architecture",
      description: "Create comprehensive designs and technical architecture that meet your requirements and industry best practices.",
      points: ["UI/UX Design", "System Architecture", "Database Design", "Security Framework"],
    },
    {
      number: "4",
      title: "Development & Build",
      description: "Execute development using agile methodologies with continuous integration and quality assurance.",
      points: ["Agile Development", "Code Reviews", "Unit Testing", "Documentation"],
    },
    {
      number: "5",
      title: "Testing & Quality",
      description: "Rigorous testing across all levels to ensure quality, performance, and security standards.",
      points: ["Functional Testing", "Performance Testing", "Security Testing", "User Acceptance Testing"],
    },
    {
      number: "6",
      title: "Deployment & Launch",
      description: "Seamless deployment with minimal downtime and full support for a successful go-live.",
      points: ["Deployment Planning", "Data Migration", "Training", "Go-Live Support"],
    },
    {
      number: "7",
      title: "Support & Optimization",
      description: "Ongoing support, monitoring, and optimization to ensure continued success and performance.",
      points: ["24/7 Support", "Performance Monitoring", "Bug Fixes", "Enhancement Planning"],
    },
  ];

  return (
    <Layout>
      <section className="pt-12 pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Our <span className="text-gradient-red">Process</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Proven methodology for delivering exceptional results
            </p>
          </div>

          <div className="mb-16 bg-muted/40 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-navy mb-4">Our Development Approach</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              We follow a structured yet flexible process that combines best practices from Agile, Lean, and DevOps methodologies. Our approach ensures transparency, quality, and alignment with your business objectives at every stage.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {["Client-Centric", "Agile & Iterative", "Quality-Focused", "Transparent", "Data-Driven", "Scalable"].map(
                (item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground/80">{item}</span>
                  </div>
                )
              )}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">Project Phases</h2>
            <div className="space-y-6">
              {phases.map((phase, idx) => (
                <div key={idx} className="border-l-4 border-primary pl-8 py-6 relative">
                  <div className="absolute -left-6 top-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                    {phase.number}
                  </div>

                  <h3 className="text-xl font-bold text-navy mb-2">{phase.title}</h3>
                  <p className="text-foreground/70 mb-4">{phase.description}</p>

                  <div className="grid md:grid-cols-2 gap-2">
                    {phase.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-sm text-foreground/60">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {point}
                      </div>
                    ))}
                  </div>

                  {idx < phases.length - 1 && (
                    <ArrowRight className="h-6 w-6 text-primary absolute -left-3 -bottom-8 rotate-90" />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Agile Methodology</h3>
              <p className="text-foreground/80 mb-4">
                We use Agile sprint-based development with regular releases, allowing for flexibility and rapid iteration based on feedback.
              </p>
              <ul className="space-y-2">
                {["2-week sprints", "Daily standups", "Sprint reviews", "Continuous integration", "Regular demos"].map(
                  (item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                      <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  )
                )}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg p-8">
              <h3 className="text-xl font-bold text-navy mb-4">Quality Assurance</h3>
              <p className="text-foreground/80 mb-4">
                Multiple layers of testing and quality checks throughout the development lifecycle to ensure excellence.
              </p>
              <ul className="space-y-2">
                {["Automated testing", "Code reviews", "Security audits", "Performance testing", "UAT support"].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                    <CheckCircle className="h-4 w-4 text-blue-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-16">
            <img src="/images/our-process.jpg" alt="Our Process" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
