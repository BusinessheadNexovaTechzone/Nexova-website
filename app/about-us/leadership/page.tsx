
import { Layout } from "@/components/layout/Layout";


export default function LeadershipPage() {
  const leaders = [
    {
      name: "Rajesh Kumar",
      title: "Founder & CEO",
      bio: "With 20+ years of experience in technology leadership, Rajesh founded Nexova with a vision to deliver innovative solutions. He leads strategic growth and client relationships.",
      image: "👨‍💼",
    },
    {
      name: "Priya Singh",
      title: "Chief Technology Officer",
      bio: "Priya brings 18 years of software architecture and innovation expertise. She drives our technical excellence and R&D initiatives.",
      image: "👩‍💼",
    },
    {
      name: "Amit Patel",
      title: "VP Sales & Business Development",
      bio: "Amit's 15 years of sales leadership have expanded our global presence. He ensures every client receives exceptional value and support.",
      image: "👨‍💼",
    },
    {
      name: "Neha Sharma",
      title: "VP Product Management",
      bio: "Neha drives product strategy and innovation. With 12 years in product management, she shapes our solutions for market needs.",
      image: "👩‍💼",
    },
    {
      name: "Vikram Iyer",
      title: "VP Engineering",
      bio: "Vikram oversees our engineering excellence and team development. His 16 years of engineering experience ensures quality delivery.",
      image: "👨‍💼",
    },
    {
      name: "Sarah Chen",
      title: "Chief Innovation Officer",
      bio: "Sarah leads our innovation initiatives and emerging technology adoption. She ensures we're at the forefront of technological advancement.",
      image: "👩‍💼",
    },
  ];

  return (
    <Layout>
      <section className="pt-12 pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Leadership <span className="text-gradient-red">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Meet the visionary leaders driving Nexova's success
            </p>
          </div>

          <div className="mb-16">
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Our leadership team brings together decades of combined experience in technology, business development, and innovation. United by a shared vision of transforming businesses through technology, they guide Nexova's strategic direction and ensure excellence in everything we do.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {leaders.map((leader, idx) => (
              <div key={idx} className="bg-muted/40 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="text-6xl mb-4">{leader.image}</div>
                <h3 className="text-2xl font-bold text-navy mb-1">{leader.name}</h3>
                <p className="text-primary font-semibold mb-4">{leader.title}</p>
                <p className="text-foreground/70">{leader.bio}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-12">
            <h2 className="text-3xl font-bold text-navy mb-8">Leadership Philosophy</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Client-Centric Approach",
                  description:
                    "We prioritize understanding our clients' challenges and delivering solutions that create measurable business value.",
                },
                {
                  title: "Innovation First",
                  description:
                    "We encourage a culture of continuous innovation and experimentation to stay ahead of industry trends.",
                },
                {
                  title: "Team Empowerment",
                  description:
                    "We believe in empowering our team members to take ownership, learn, and grow professionally.",
                },
                {
                  title: "Transparency & Trust",
                  description:
                    "We maintain open communication and build relationships based on honesty and mutual respect.",
                },
              ].map((philosophy, idx) => (
                <div key={idx}>
                  <h3 className="font-bold text-navy mb-2 text-lg">{philosophy.title}</h3>
                  <p className="text-foreground/70">{philosophy.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <img src="/images/leadership-team.jpg" alt="Leadership Team" className="rounded-lg w-full h-96 object-cover mb-8" />
            <p className="text-center text-muted-foreground">
              Our leadership team brings decades of combined experience in technology, business, and innovation.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
