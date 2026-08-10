
import { Layout } from "@/components/layout/Layout";
import { Star, TrendingUp, Users } from "lucide-react";


export default function SuccessStoriesPage() {
  const stories = [
    {
      company: "TechCorp Finance",
      industry: "Financial Services",
      challenge: "Legacy system causing operational inefficiencies and customer dissatisfaction",
      solution: "Cloud migration and AI-powered automation",
      result: "40% operational cost reduction, 95% customer satisfaction",
      icon: TrendingUp,
    },
    {
      company: "RetailGlobal Inc",
      industry: "E-commerce",
      challenge: "Scaling platform to handle 10x traffic growth",
      solution: "Microservices architecture and cloud infrastructure",
      result: "Handled 500% traffic spike, zero downtime",
      icon: Users,
    },
    {
      company: "HealthFirst Systems",
      industry: "Healthcare",
      challenge: "Patient data security and HIPAA compliance",
      solution: "Enterprise security framework and compliance automation",
      result: "100% HIPAA compliant, zero security breaches",
      icon: Star,
    },
    {
      company: "ManufacturePro Ltd",
      industry: "Manufacturing",
      challenge: "Lack of real-time visibility into operations",
      solution: "IoT integration and analytics platform",
      result: "30% productivity increase, predictive maintenance",
      icon: TrendingUp,
    },
    {
      company: "LogisticHub Express",
      industry: "Logistics",
      challenge: "Complex supply chain management",
      solution: "AI-driven supply chain optimization",
      result: "25% delivery time reduction, 20% cost savings",
      icon: Users,
    },
    {
      company: "InsureNow Digital",
      industry: "Insurance",
      challenge: "Manual processes causing delays",
      solution: "RPA and digital transformation",
      result: "75% process automation, 5-day claim processing",
      icon: Star,
    },
  ];

  return (
    <Layout>
      <section className="pt-12 pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Client Success <span className="text-gradient-red">Stories</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-world examples of how we've transformed businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {stories.map((story, idx) => {
              const Icon = story.icon;
              return (
                <div key={idx} className="bg-muted/40 rounded-lg p-8 hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <Icon className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-navy">{story.company}</h3>
                      <p className="text-sm text-primary font-semibold">{story.industry}</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-semibold text-foreground/70 mb-1">Challenge:</p>
                      <p className="text-sm text-foreground/60">{story.challenge}</p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-foreground/70 mb-1">Solution:</p>
                      <p className="text-sm text-foreground/60">{story.solution}</p>
                    </div>

                    <div className="bg-primary/10 rounded p-4 mt-4">
                      <p className="text-sm font-semibold text-primary mb-1">Result:</p>
                      <p className="text-sm text-foreground/80 font-semibold">{story.result}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 mb-16">
            <h2 className="text-3xl font-bold text-navy mb-8 text-center">Impact by the Numbers</h2>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              {[
                { number: "500+", label: "Projects Delivered" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "$500M+", label: "Total Client Value Created" },
                { number: "15+", label: "Years of Excellence" },
              ].map((stat, idx) => (
                <div key={idx}>
                  <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-foreground/80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">What Our Clients Say</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  quote:
                    "Nexova transformed our business with their innovative solutions and expert team. Highly recommended!",
                  
                    author: "V N Sharma",
                    designation: "Chairman, Triveni",                
                },
                {
                  quote:
                    "Their commitment to quality and client satisfaction is unmatched. Best investment we've made.",
                  author: "Praveen Jain",
                    designation: "Co-Founder, Clusterzap", 
                },
                {
                  quote:
                    "The team's expertise and proactive approach helped us achieve our digital transformation goals ahead of schedule.",
                  author: "Aravind Swaminathan",
                    designation: "Sales Manager, Vector Industries",
                },
                {
                  quote:
                    "Exceptional support and continuous innovation. They truly are partners in our success.",
                  author: "Veera",
                    designation: "Exporters, Veera Leathers",
                },
              ].map((testimonial, idx) => (
                <div key={idx} className="bg-muted rounded-lg p-8">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-foreground/80 mb-4 italic">"{testimonial.quote}"</p>
                  <p className="font-semibold text-navy text-sm">{testimonial.author}</p>
                  <p className="text-foreground/70 text-xs">{testimonial.designation}</p>
                </div>
              ))}
            </div>
          </div>

          {/* <div className="bg-navy text-white rounded-lg p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-white/80 mb-8">
              Let's discuss how Nexova can help transform your business with innovative solutions.
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-red)]">
              Schedule a Consultation
            </button>
          </div> */}

          <div className="mt-16">
            <img src="/images/success-stories.jpg" alt="Client Success Stories" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
