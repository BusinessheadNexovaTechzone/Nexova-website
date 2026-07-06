
import { Layout } from "@/components/layout/Layout";
import { Lightbulb, FlaskConical, TrendingUp, Zap } from "lucide-react";


export default function InnovationPage() {
  return (
    <Layout>
      <section className="pt-12 pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Innovation & <span className="text-gradient-red">Research</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Driving technological advancement through continuous research and experimentation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8">
              <Lightbulb className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy mb-4">Our Innovation Labs</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We maintain dedicated innovation labs where our team explores emerging technologies and develops cutting-edge solutions before they become mainstream.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• AI & Machine Learning Research</li>
                <li>• Blockchain & Web3 Exploration</li>
                <li>• IoT & Edge Computing</li>
                <li>• Quantum Computing Preparation</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg p-8">
              <FlaskConical className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-navy mb-4">Research Initiatives</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                We collaborate with academic institutions and research organizations to advance technology development and contribute to the industry.
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>• Industry collaboration programs</li>
                <li>• Open-source contributions</li>
                <li>• Technology white papers</li>
                <li>• Innovation workshops</li>
              </ul>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">Areas of Focus</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Artificial Intelligence",
                  description: "Exploring AI applications in automation, optimization, and decision-making across industries.",
                  focus: ["NLP", "Computer Vision", "Predictive Analytics", "Autonomous Systems"],
                },
                {
                  title: "Cloud & Infrastructure",
                  description: "Researching advanced cloud architectures, serverless computing, and edge technology.",
                  focus: ["Microservices", "Containerization", "Orchestration", "Hybrid Cloud"],
                },
                {
                  title: "Security & Privacy",
                  description: "Developing advanced security solutions and privacy-preserving technologies.",
                  focus: ["Zero Trust", "Cryptography", "Privacy Tech", "Threat Detection"],
                },
                {
                  title: "Data & Analytics",
                  description: "Advancing data processing, analytics, and insights generation capabilities.",
                  focus: ["Big Data", "Real-time Analytics", "Data Visualization", "BI"],
                },
                {
                  title: "Emerging Tech",
                  description: "Exploring blockchain, IoT, quantum computing, and other frontier technologies.",
                  focus: ["Blockchain", "IoT", "5G", "Quantum"],
                },
                {
                  title: "Developer Experience",
                  description: "Improving tools, frameworks, and methodologies for better developer productivity.",
                  focus: ["DevOps", "Automation", "CI/CD", "Developer Tools"],
                },
              ].map((area, idx) => (
                <div key={idx} className="bg-muted/40 rounded-lg p-6 hover:shadow-lg transition-shadow">
                  <h4 className="font-bold text-navy mb-3">{area.title}</h4>
                  <p className="text-sm text-foreground/70 mb-4">{area.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {area.focus.map((focus, fIdx) => (
                      <span key={fIdx} className="text-xs px-2 py-1 bg-primary/10 text-primary rounded">
                        {focus}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">Our Innovation Process</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Explore",
                  description: "Identify emerging technologies and research opportunities relevant to our clients.",
                },
                {
                  title: "Experiment",
                  description: "Conduct proof-of-concept projects and feasibility studies in our innovation labs.",
                },
                {
                  title: "Evaluate",
                  description: "Assess viability, ROI, and applicability to real-world client scenarios.",
                },
                {
                  title: "Integrate",
                  description: "Incorporate validated innovations into our service offerings and solutions.",
                },
              ].map((step, idx) => (
                <div key={idx} className="border-l-4 border-primary pl-6 py-4">
                  <h3 className="font-bold text-navy mb-2">{step.title}</h3>
                  <p className="text-foreground/70">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">Recent Innovation Highlights</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  year: "2024",
                  title: "AI-Powered Development Platform",
                  description: "Launched an AI-assisted platform that accelerates software development and improves code quality.",
                },
                {
                  year: "2024",
                  title: "Zero-Trust Security Framework",
                  description: "Developed a comprehensive zero-trust security solution for enterprise clients.",
                },
                {
                  year: "2023",
                  title: "Real-time Data Analytics",
                  description: "Created advanced real-time analytics capabilities for large-scale data processing.",
                },
                {
                  year: "2023",
                  title: "Blockchain Integration Suite",
                  description: "Released tools and frameworks for blockchain integration in enterprise applications.",
                },
              ].map((highlight, idx) => (
                <div key={idx} className="bg-muted rounded-lg p-6 border-l-4 border-primary">
                  <span className="inline-block text-sm font-bold text-primary mb-2">{highlight.year}</span>
                  <h3 className="font-bold text-navy mb-2">{highlight.title}</h3>
                  <p className="text-sm text-foreground/70">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="bg-navy text-white rounded-lg p-12 text-center">
            <Zap className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h2 className="text-2xl font-bold mb-4">Want to Innovate Together?</h2>
            <p className="text-white/80 mb-8">
              Let's explore how emerging technologies can create new opportunities for your business.
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-red)]">
              Schedule Innovation Consultation
            </button>
          </div> */}

          <div className="mt-16">
            <img src="/images/innovation-research.jpg" alt="Innovation & Research" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
