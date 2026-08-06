
import { Layout } from "@/components/layout/Layout";
import { Target, Eye, Lightbulb } from "lucide-react";


export default function MissionVisionPage() {
  return (
    <Layout>
      <section className="pt-12 pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Mission, Vision & <span className="text-gradient-red">Goals</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Guiding our journey and driving strategic excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-8">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h2 className="text-2xl font-bold text-navy mb-4">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed">
                To empower businesses through innovative technology solutions that drive growth, streamline operations, and create lasting value in the digital era.
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-lg p-8">
              <Eye className="h-12 w-12 text-blue-500 mb-4" />
              <h2 className="text-2xl font-bold text-navy mb-4">Our Vision</h2>
              <p className="text-foreground/80 leading-relaxed">
                To be the trusted technology partner for businesses worldwide, recognized for delivering transformative solutions that set industry standards for innovation and excellence.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-lg p-8">
              <Lightbulb className="h-12 w-12 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold text-navy mb-4">Our Values</h2>
              <p className="text-foreground/80 leading-relaxed">
                Innovation, integrity, excellence, and customer focus drive everything we do. We're committed to creating sustainable growth and positive impact.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-navy mb-8">Strategic Goals</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Accelerate Digital Transformation",
                  description:
                    "Help organizations modernize their technology infrastructure and adopt cloud-native solutions for enhanced agility and scalability.",
                },
                {
                  title: "Drive Innovation Through AI & ML",
                  description:
                    "Lead the industry in developing intelligent solutions that automate processes, enhance decision-making, and unlock new business opportunities.",
                },
                {
                  title: "Build Long-Term Partnerships",
                  description:
                    "Establish deep, trusted relationships with clients by consistently delivering value, transparency, and exceptional service quality.",
                },
                {
                  title: "Expand Global Presence",
                  description:
                    "Strengthen our footprint in key markets while maintaining our commitment to local expertise and personalized customer support.",
                },
                {
                  title: "Invest in Talent Development",
                  description:
                    "Nurture a culture of continuous learning and innovation where our team can grow professionally and contribute meaningfully to projects.",
                },
                {
                  title: "Promote Sustainable Practices",
                  description:
                    "Implement environmentally responsible practices and contribute to creating a positive societal impact through technology.",
                },
              ].map((goal, idx) => (
                <div
                  key={idx}
                  className="border-l-4 border-primary pl-6 py-4 hover:bg-muted/40 transition-colors rounded-r-lg pr-6"
                >
                  <h3 className="font-bold text-navy mb-2 text-lg">{goal.title}</h3>
                  <p className="text-foreground/70">{goal.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <img src="/images/mission-vision.jpg" alt="Mission and Vision" className="rounded-lg w-full h-full object-cover mb-8" />
          </div>

          <div className="bg-muted/40 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Our Commitment</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              At Nexova TechZone, we're committed to being more than just a technology vendor. We're your strategic partner in navigating the digital landscape and achieving your business objectives.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Every project, every client interaction, and every innovation reflects our dedication to excellence and our belief in the transformative power of technology. We measure our success by the success of our clients.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
