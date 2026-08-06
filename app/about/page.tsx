
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

const highlights = [
  { title: "Trusted by founders and enterprises", text: "We build with clarity, speed, and a deep understanding of business goals." },
  { title: "Engineering-led delivery", text: "Our teams combine strategy, software engineering, and operational excellence." },
  { title: "Secure and scalable", text: "Every engagement is designed for reliability, growth, and long-term value." },
];

export default function AboutPage() {
  return (
    <Layout>
      <section className="relative overflow-hidden bg-surface pt-4 pb-8 md:pt-6 md:pb-8">
        <div className="mx-auto grid max-w-8xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-extrabold text-navy md:text-6xl">
              About <span className="text-gradient-red">Nexova Tech Zone</span>
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-navy md:text-3xl">
              Your Trusted IT Services Company Driving Digital Innovation
            </h2>
            <div className="mx-auto mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/80 lg:mx-0">
              <p>
                Nexova Tech Zone is a trusted IT Services Company committed to helping businesses embrace digital transformation through innovative technology and strategic expertise. We deliver comprehensive IT Services and Consulting that enable organizations to improve operational efficiency, accelerate growth, and stay competitive in today&apos;s rapidly evolving digital landscape.
              </p>
              <p>
                Since our inception, we have partnered with startups, small and medium-sized businesses, and enterprises across various industries, providing customized IT Solutions that address unique business challenges and unlock new opportunities. Our customer-first approach, technical excellence, and commitment to quality make us a reliable technology partner for businesses worldwide.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Link href="/services" className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:-translate-y-0.5">
                Explore Services
              </Link>
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:-translate-y-0.5">
                Contact Us
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
            <img
              src="/images/about-company.jpg"
              alt="About Us visual for Nexova Tech Zone"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8">
        <div className="mx-auto grid max-w-8xl gap-6 px-6 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
          <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-soft)]">
            <img src="/assets/why-world-map.jpg" alt="Global technology partnership and digital transformation" className="h-full w-full object-cover" />
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] md:p-8">
            <h2 className="text-3xl font-bold text-navy">Why teams choose Nexova</h2>
            <div className="mt-6 space-y-4">
              {highlights.map((item) => (
                <div key={item.title} className="rounded-2xl border border-border/60 bg-accent/10 p-4">
                  <h3 className="text-lg font-semibold text-navy">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/80">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <center><section className="py-8 md:py-10 bg-accent/5">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Who We Are</h2>
          <div className="mt-4 space-y-4 text-foreground px-40">
            <p >
              At Nexova Tech Zone, we believe technology should simplify business, not complicate it. Our experienced consultants, developers, engineers, and digital specialists work together to deliver innovative, secure, and scalable solutions tailored to every client's business objectives.
            </p>
            <p>
              By combining industry knowledge with the latest technologies, we help organizations streamline operations, improve customer experiences, and accelerate digital transformation with confidence.
            </p>
          </div>
        </div>
      </section></center>

      <center><section className="py-8 md:py-10">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy">Introducing Nexova Tech Zone</h2>
          <h3 className="mt-4 text-2xl font-semibold text-navy">Innovative IT Solutions. Trusted Technology Partner.</h3>
          <div className="mt-4 space-y-4 text-foreground px-40">
            <p>
              At Nexova Tech Zone, we deliver innovative IT Services and Consulting that help businesses transform, grow, and stay ahead in a digital-first world. As a trusted IT Services Company, we provide secure, scalable, and future-ready IT Solutions tailored to your business needs.
            </p>
            <p>
              Backed by ISO 9001:2015 and ISO 27001 certifications, we are committed to quality, security, and excellence in every solution we deliver. From software development and AI automation to cloud infrastructure, IT staffing, digital marketing, and cyber security, we empower businesses with technology that drives lasting success.
            </p>
            <p>
              Partner with Nexova Tech Zone and build the future with confidence.
            </p>
          </div>
        </div>
      </section></center>

      <section className="py-8 md:py-10 bg-surface">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-navy text-center">Your Success is Our Priority</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold text-navy mb-4">Our Mission</h3>
              <p className="text-foreground">
                To empower businesses through innovative IT Services and Consulting by delivering reliable, scalable, and future-ready IT Solutions that drive sustainable growth and long-term success.
              </p>
            </div>
            <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <h3 className="text-xl font-semibold text-navy mb-4">Our Vision</h3>
              <p className="text-foreground">
                To become a globally recognized IT Services Company, helping organizations transform their businesses through innovation, technology excellence, and trusted partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-border bg-card p-6 text-center shadow-[var(--shadow-soft)]">
            <h2 className="text-3xl font-bold text-navy">Ready to Transform Your Business?</h2>
            <p className="mt-3 text-foreground/80">Request a Free Consultation</p>
            <Link href="/contact" className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
              Request a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
