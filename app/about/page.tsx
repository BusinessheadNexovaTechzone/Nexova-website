
import Link from "next/link";
import { ArrowRight, Globe } from "lucide-react";
import { Layout } from "@/components/layout/Layout";
import { getIcon } from "@/lib/icon-mapper";

export default function AboutPage() {
  const teamMembers = [
    { name: "Rajesh Kumar", role: "Founder & CEO", image: "👨‍💼" },
    { name: "Priya Singh", role: "CTO", image: "👩‍💼" },
    { name: "Amit Patel", role: "VP Sales", image: "👨‍💼" },
    { name: "Neha Sharma", role: "VP Product", image: "👩‍💼" },
    { name: "Vikram Iyer", role: "VP Engineering", image: "👨‍💼" },
    { name: "Sarah Chen", role: "Chief Innovation Officer", image: "👩‍💼" },
  ];

  const values = [
    { icon: "Lightbulb", title: "Innovation", description: "Pushing boundaries with cutting-edge technology" },
    { icon: "Users", title: "Collaboration", description: "Working together to achieve excellence" },
    { icon: "Target", title: "Excellence", description: "Delivering quality in everything we do" },
    { icon: "Award", title: "Integrity", description: "Building trust through honest practices" },
    { icon: "Globe", title: "Global Mindset", description: "Thinking worldwide, acting locally" },
    { icon: "Lightbulb", title: "Growth", description: "Continuous learning and improvement" },
  ];

  const offices = [
    { city: "Chennai", country: "India", description: "Head Office" },
    { city: "New York", country: "USA", description: "North America Hub" },
    { city: "Dubai", country: "UAE", description: "Middle East Hub" },
    { city: "Remote", country: "Global", description: "Distributed Team" },
  ];

  return (
    <Layout>
      {/* HERO SECTION */}
      <section className="pt-12 pb-6 md:pt-20">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl text-navy font-bold">
            About <span className="text-gradient-red italic">Nexova</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming businesses through innovative technology solutions since 2009
          </p>
        </div>
      </section>

      {/* COMPANY OVERVIEW */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "400+", label: "Team Members" },
              { number: "2000+", label: "Projects Delivered" },
              { number: "98%", label: "Success Rate" },
            ].map((stat, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 text-center border border-border">
                <div className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION, VISION, VALUES */}
      <section className="pb-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">Our Purpose</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-navy mb-4">Mission</h3>
              <p className="text-foreground">
                To empower businesses globally with innovative, scalable, and sustainable technology solutions that drive growth and transformation.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-navy mb-4">Vision</h3>
              <p className="text-foreground">
                To be the most trusted technology partner for enterprises seeking digital excellence and competitive advantage in their industries.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="text-xl font-bold text-navy mb-4">Goals</h3>
              <p className="text-foreground">
                Create lasting impact through innovation, foster a culture of excellence, and expand our global presence while maintaining our core values.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => {
              const Icon = getIcon(value.icon);
              return (
                <div key={i} className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-colors">
                  <Icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-navy mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP TEAM */}
      {/* <section className="pb-20 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, i) => (
              <div key={i} className="bg-card rounded-2xl p-8 border border-border text-center">
                <div className="text-5xl mb-4">{member.image}</div>
                <h3 className="text-lg font-bold text-navy">{member.name}</h3>
                <p className="text-sm text-primary mt-1">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* GLOBAL PRESENCE */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center mb-12">Global Presence</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {offices.map((office, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 border border-border text-center">
                <Globe className="w-6 h-6 text-primary mx-auto mb-3" />
                <h3 className="text-lg font-bold text-navy">{office.city}</h3>
                <p className="text-sm text-muted-foreground">{office.country}</p>
                <p className="text-xs text-primary mt-2">{office.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-surface p-12 border border-border">
            <h2 className="text-3xl font-bold text-navy mb-4">Ready to Partner With Us?</h2>
            <p className="text-muted-foreground mb-8">
              Let&apos;s discuss how Nexova can help transform your business.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-full px-8 py-3 font-medium hover:opacity-90 transition-opacity">
              Get in Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
