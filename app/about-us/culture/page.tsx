
import { Layout } from "@/components/layout/Layout";
import { Users, Lightbulb, Target, Zap } from "lucide-react";


export default function CulturePage() {
  return (
    <Layout>
      <section className="pt-12 pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Work <span className="text-gradient-red">Culture</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Creating an environment where innovation thrives and talent flourishes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8">
              <Users className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-navy mb-4">Collaborative Teams</h3>
              <p className="text-foreground/80 leading-relaxed">
                We foster a collaborative environment where diverse perspectives are valued and teamwork drives success. Our teams work seamlessly across departments and geographies.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg p-8">
              <Lightbulb className="h-12 w-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-navy mb-4">Innovation First</h3>
              <p className="text-foreground/80 leading-relaxed">
                We encourage experimentation, learning from failures, and continuous improvement. Innovation is embedded in our DNA.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg p-8">
              <Target className="h-12 w-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-navy mb-4">Growth Mindset</h3>
              <p className="text-foreground/80 leading-relaxed">
                We invest in professional development, mentoring, and career advancement. Your growth is our priority.
              </p>
            </div>

            <div className="bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 rounded-lg p-8">
              <Zap className="h-12 w-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold text-navy mb-4">Work-Life Balance</h3>
              <p className="text-foreground/80 leading-relaxed">
                We value well-being and maintain healthy work-life balance through flexible policies and supportive environment.
              </p>
            </div>
          </div>

          <div className="bg-muted/40 rounded-lg p-12 mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">Our Culture Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Integrity", description: "We conduct business with honesty and ethical principles in all interactions." },
                { title: "Excellence", description: "We strive for excellence in everything we do, setting high standards." },
                { title: "Inclusivity", description: "We celebrate diversity and create an inclusive environment for all." },
                { title: "Accountability", description: "We take ownership of our work and decisions, delivering on commitments." },
                { title: "Continuous Learning", description: "We invest in learning and stay updated with industry trends." },
                { title: "Social Responsibility", description: "We contribute positively to society and environmental sustainability." },
              ].map((value, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-navy mb-2">{value.title}</h3>
                  <p className="text-foreground/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">Employee Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Competitive salary and performance bonuses",
                "Comprehensive health and wellness benefits",
                "Remote and flexible work options",
                "Professional development budget",
                "Annual learning conferences and training",
                "Mentoring and coaching programs",
                "Team building and social events",
                "Career advancement opportunities",
                "Maternity and paternity benefits",
                "Retirement planning support",
                "Employee recognition programs",
                "Innovation time for passion projects",
              ].map((benefit, idx) => (
                <div key={idx} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                  <p className="text-foreground/80">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-navy text-white rounded-lg p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Team</h2>
            <p className="text-white/80 mb-8">
              Be part of a culture where your ideas matter, growth is encouraged, and impact is recognized.
            </p>
            <a
              href="/careers"
              className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-red)]"
            >
              Explore Careers
            </a>
          </div>

          <div className="mt-16">
            <img src="/images/work-culture.jpg" alt="Work Culture" className="rounded-lg w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
