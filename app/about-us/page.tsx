
import Image from "next/image";
import Link from "next/link";
import { Eye, Flag } from "lucide-react";
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
              About <span className="text-gradient-red">Nexova TechZone</span>
            </h1>
            <h2 className="mt-4 text-2xl font-semibold text-navy md:text-3xl">
              Your Trusted IT Services Company Driving Digital Innovation
            </h2>
            <div className="mx-auto mt-5 max-w-3xl space-y-4 text-base leading-relaxed text-foreground/80 lg:mx-0">
              <p>
                Nexova TechZone is a trusted IT Services Company committed to helping businesses embrace digital transformation through innovative technology and strategic expertise. We deliver comprehensive IT Services and Consulting that enable organizations to improve operational efficiency, accelerate growth, and stay competitive in today&apos;s rapidly evolving digital landscape.
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
              alt="About Us visual for Nexova TechZone"
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

      <section className="py-10 md:py-12 bg-accent/5">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            Who <span className="text-gradient-red">We Are</span>
          </h2>
          <div className="mt-6 space-y-5 text-foreground text-base leading-relaxed">
            <p>
              At Nexova TechZone, we believe technology should simplify business, not complicate it. Our experienced consultants, developers, engineers, and digital specialists work together to deliver innovative, secure, and scalable solutions tailored to every client's business objectives.
            </p>
            <p>
              By combining industry knowledge with the latest technologies, we help organizations streamline operations, improve customer experiences, and accelerate digital transformation with confidence.
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 sm:px-8 lg:grid-cols-[0.95fr_0.9fr] lg:px-10 items-stretch">
          <div className="flex min-h-[440px] flex-col justify-center lg:min-h-[520px]">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-black">
                Introducing <span className="text-gradient-red">Nexova TechZone</span>
              </h2>
              <h3 className="text-2xl font-semibold text-black/90">
                Innovative IT Solutions. Trusted Technology Partner.
              </h3>
              <div className="space-y-5 text-foreground text-base leading-relaxed">
                <p>
                  At Nexova TechZone, we deliver innovative IT Services and Consulting that help businesses transform, grow, and stay ahead in a digital-first world. As a trusted IT Services Company, we provide secure, scalable, and future-ready IT Solutions tailored to your business needs.
                </p>
                <p>
                  Backed by ISO 9001:2015 and ISO 27001 certifications, we are committed to quality, security, and excellence in every solution we deliver. From software development and AI automation to cloud infrastructure, IT staffing, digital marketing, and cyber security, we empower businesses with technology that drives lasting success.
                </p>
                <p>
                  Partner with Nexova TechZone and build the future with confidence.
                </p>
              </div>
            </div>
          </div>

          <div className="flex min-h-[440px] items-center justify-center lg:min-h-[520px]">
            <div className="relative h-full w-full max-w-xl overflow-hidden rounded-3xl border border-border bg-white shadow-[var(--shadow-soft)]">
              <Image
                src="/images/iso-cert.png"
                alt="ISO Certificate"
                width={960}
                height={960}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-12 bg-surface">
        <div className="mx-auto max-w-8xl px-6 sm:px-8 lg:px-10">
          <h2 className="text-3xl md:text-4xl font-bold text-black text-center">
            Your Success is <span className="text-gradient-red">Our Priority</span>
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] border border-border bg-slate-950 p-10 text-white shadow-[var(--shadow-soft)]">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">
                  <Flag className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/60">Mission</p>
                  <h3 className="mt-2 text-2xl font-semibold">Our Mission</h3>
                </div>
              </div>
              <p className="text-base leading-relaxed text-white/80">
                To empower businesses through innovative IT Services and Consulting by delivering reliable, scalable, and future-ready IT Solutions that drive sustainable growth and long-term success.
              </p>
            </div>
            <div className="rounded-[2rem] border border-border bg-primary p-10 text-white shadow-[var(--shadow-soft)]">
              <div className="mb-6 flex items-center gap-4">
                <span className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white/10">
                  <Eye className="h-7 w-7" />
                </span>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-white/70">Vision</p>
                  <h3 className="mt-2 text-2xl font-semibold">Our Vision</h3>
                </div>
              </div>
              <p className="text-base leading-relaxed text-white/90">
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
