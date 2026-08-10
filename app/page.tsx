
"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeading, EyebrowChip } from "@/components/ui/section-shell";
import { Reveal } from "@/components/ui/reveal";
import { ServiceCard } from "@/components/ui/service-card";
import { services, techStack } from "@/lib/services";
import { TechStackStrip } from "@/components/ui/cta-banner";
import { ClientMarquee } from "@/components/ui/client-marquee";
import Marquee from "react-fast-marquee";
import { ArrowRight, Activity, Users, Zap, Award, Shield, CheckCircle2, Star, Smartphone, Database, Monitor, Server, Compass, Layers, Code2, Rocket, ShieldCheck, UtensilsCrossed, HeartPulse, GraduationCap, ShoppingBag, Factory, Building2, Landmark, Truck, Store, BriefcaseBusiness } from "lucide-react";

const stats = [
  { value: "99.8%", label: "Client Retention", icon: Activity, count: 99.8, suffix: "%", precision: 1 },
  { value: "12", label: "Countries Served", icon: Users, count: 12, suffix: "", precision: 0 },
  { value: "40%", label: "Avg. Time-to-Ship", icon: Zap, count: 40, suffix: "%", precision: 0 },
  { value: "250+", label: "Experts on Deck", icon: Award, count: 250, suffix: "+", precision: 0 },
];

const architecture = [
  {
    title: "Frontend",
    icon: Monitor,
    items: ["React", "JavaScript", "TypeScript", ],
  },
  {
    title: "Backend",
    icon: Server,
    items: [".NET", "Node.js", "Python"],
  },
  {
    title: "Database",
    icon: Database,
    items: ["MongoDB", "MySQL", "PostgreSQL", ],
  },
  {
    title: "Mobile App",
    icon: Smartphone,
    items: ["Flutter", "React Native",],
  },
];

const commitments = [
  { icon: Zap, title: "Agile Strategic Cycles", desc: "Two-week sprints aligned to business OKRs that ship measurable outcomes." },
  { icon: Shield, title: "Governance & Security", desc: "Military-grade protection and adherence to global standards by default." },
  { icon: Users, title: "Direct Technical Support", desc: "Senior engineers embedded with your team, no proxies or hand-offs." },
];

const solutions = [
  { title: "Custom Software", to: "/services/custom-software", desc: "Engineered enterprise systems tailored to your scale.", icon: "🛠️" },
  { title: "Web Applications", to: "/services/customized-software", desc: "High-performance platforms that drive global usage.", icon: "🌐" },
  { title: "Mobile Ecosystems", to: "/services/mobile-app-development", desc: "Native iOS, Android & cross-platform delight.", icon: "📱" },
  { title: "IT Management", to: "/services/networking-solutions", desc: "End-to-end strategy for your technology operations.", icon: "🛰️" },
];

const processSteps = [
  { title: "Discover", description: "We understand your business goals, challenges, and technology requirements.", icon: Compass },
  { title: "Plan", description: "Our experts create customized IT strategies that align with your objectives.", icon: Layers },
  { title: "Develop", description: "We build secure, scalable, and innovative technology solutions.", icon: Code2 },
  { title: "Deploy", description: "Our team ensures smooth implementation with rigorous testing and quality assurance.", icon: Rocket },
  { title: "Support", description: "We provide continuous monitoring, maintenance, and optimization to keep your business running efficiently.", icon: ShieldCheck },
];

const processCardMotion = [
  {
    hidden: { opacity: 0, y: 30, scale: 0.94 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.72, ease: "easeOut", type: "spring", stiffness: 96, damping: 18 } },
  },
  {
    hidden: { opacity: 0, rotateX: 14, y: 28, scale: 0.96 },
    visible: { opacity: 1, rotateX: 0, y: 0, scale: 1, transition: { duration: 0.72, ease: "easeOut", type: "spring", stiffness: 88, damping: 16 } },
  },
  {
    hidden: { opacity: 0, x: -32, y: 16 },
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.72, ease: "easeOut", type: "spring", stiffness: 96, damping: 18 } },
  },
  {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.72, ease: "easeOut", type: "spring", stiffness: 94, damping: 16 } },
  },
  {
    hidden: { opacity: 0, rotate: 10, y: 22 },
    visible: { opacity: 1, rotate: 0, y: 0, transition: { duration: 0.72, ease: "easeOut", type: "spring", stiffness: 92, damping: 18 } },
  },
];

const processIconMotion = [
  { animate: { y: [0, -4, 0] }, transition: { repeat: Infinity, duration: 3.2, ease: "easeOut" } },
  { animate: { rotate: [0, 6, -6, 0] }, transition: { repeat: Infinity, duration: 4, ease: "easeOut" } },
  { animate: { y: [0, -6, 0] }, transition: { repeat: Infinity, duration: 2.8, ease: "easeOut" } },
  { animate: { scale: [1, 1.05, 1], opacity: [0.92, 1, 0.92] }, transition: { repeat: Infinity, duration: 3.4, ease: "easeOut" } },
  { animate: { rotate: [0, 5, -5, 0], y: [0, -3, 0] }, transition: { repeat: Infinity, duration: 3.6, ease: "easeOut" } },
];

const industries = [
  { title: "Restaurants & Cafés", icon: UtensilsCrossed },
  { title: "Healthcare", icon: HeartPulse },
  { title: "Education", icon: GraduationCap },
  { title: "Retail Stores", icon: ShoppingBag },
  { title: "Manufacturing", icon: Factory },
  { title: "Real Estate", icon: Building2 },
  { title: "Banking & Finance", icon: Landmark },
  { title: "Logistics & Transport", icon: Truck },
  { title: "Startups", icon: Rocket },
  { title: "Enterprises", icon: BriefcaseBusiness },
  { title: "E-Commerce", icon: Store },
  { title: "Staffing Agencies", icon: Users },
];

const testimonials = [
  { name: "V N Sharma", role: "Chairman, Triveni", quote: "Working with Nexova was a game-changer for our business. Their tailored solutions and dedicated support propelled us to new heights.", stars: 5 },
  { name: "Praveen Jain.", role: "Co-Founder, Clusterzap", quote: "I can’t thank Nexova enough for their expertise. Their strategic guidance revolutionized our operations and led to significant growth.", stars: 5 },
  { name: "Aravind Swaminathan.", role: "Sales Manager, Vector Industries", quote: "Choosing Nexova was one of the best decisions we made. Their team’s knowledge and passion for our success were evident every step of the way..", stars: 5 },
  { name: "Veera Leathers.", role: "Exporters", quote: "From the first interaction, Nexova impressed us with their professionalism and clarity. Their passion for helping us succeed made all the difference..", stars: 5 },
    
];

const faqs = [
  { q: "What is your standard delivery timeline for enterprise builds?", a: "Typical engagements run 8–16 weeks with two-week iteration cycles, with measurable releases every sprint." },
  { q: "How do you handle post-launch maintenance and security?", a: "We provide tiered SLAs that cover monitoring, security patching, and performance optimization 24/7." },
  { q: "Can our internal team collaborate on the codebase?", a: "Absolutely. We work in shared repositories with full code reviews, documentation and pair programming." },
  { q: "Which technology stacks do you specialize in?", a: "Modern TypeScript, React, Node.js, Python, Go, with strong cloud-native expertise on AWS, Azure and GCP." },
  { q: "Is there a discovery phase before commitment?", a: "Yes — we start every engagement with a paid 1–2 week discovery to align scope, risks and architecture." },
];

function AnimatedStat({ value, label, icon: Icon, count, suffix, precision }: { value: string; label: string; icon: typeof Activity; count: number; suffix?: string; precision: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-40px" }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;
    let current = 0;
    const duration = 1200;
    const steps = 30;
    const increment = count / steps;
    let stepCount = 0;

    const tick = () => {
      stepCount += 1;
      current = Math.min(count, increment * stepCount);
      setCurrentValue(Number(current.toFixed(precision)));
      if (stepCount < steps) {
        window.requestAnimationFrame(tick);
      }
    };

    tick();
  }, [count, isInView, precision]);

  const displayValue = isInView ? `${currentValue.toFixed(precision)}${suffix ?? ""}` : `0${suffix ?? ""}`;

  return (
    <div ref={ref} className="group card-hover flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-4 md:p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1">
      <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
        <Icon className="h-5 w-5 transition-transform" />
      </div>
      <div>
        <div className="text-lg md:text-xl font-extrabold text-navy transition-colors duration-300 group-hover:text-primary">
          {displayValue}
        </div>
        <div className="text-xs font-semibold text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-hero-soft pt-8 pb-0 md:pt-16 md:pb-0">
        <div className="mx-auto grid max-w-8xl items-center gap-8 px-4 sm:px-6 md:gap-10 lg:grid-cols-2 lg:px-8">
          <Reveal direction="up">
            <div>
              <div className="mb-4 inline-block">
                <EyebrowChip>Strategic Intelligence Active</EyebrowChip>
              </div>
             <h1 className="font-extrabold leading-tight text-navy lg:mt-8">
  {/* First Line */}
  <span className="flex flex-wrap items-center gap-x-5 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
    <span>Leading</span>
    <span>IT</span>
    <span>Services</span>
    <span>Company</span>
  </span>

  {/* Second Line */}
  <span className="block mt-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
    Empowering Businesses with
  </span>

  {/* Third Line */}
  <span className="block mt-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl">
    <span className="text-gradient-red">
      Innovative Technology Solutions
    </span>
  </span>
</h1>
              <p className="mt-6 max-w-lg text-base font-normal font-sans leading-relaxed text-muted-foreground md:mt-8 md:text-lg md:leading-relaxed">
                NexovaTechZone is a leading IT Services Company delivering innovative IT Solutions that help businesses accelerate digital transformation. We specialize in software development, IT staffing, AI automation, digital marketing, cloud infrastructure, and cyber security services. Our expert team combines technology, innovation, and industry expertise to provide reliable IT Services and Consulting that drive measurable business growth.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 md:gap-3">
                <Link href="/contact" className="btn-motion group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-red)] hover:-translate-y-1 hover:shadow-[0_20px_60px_-12px_oklch(0.55_0.22_25_/_0.5)]">
                  Book Free Consultation <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125" />
                </Link>
                <Link href="/services" className="btn-motion group inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:shadow-[0_8px_24px_-6px_oklch(0.2_0.04_265_/_0.1)]">
                  Explore Solutions
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal direction="up" delay={0.1}>
            <div className="group overflow-hidden rounded-3xl shadow-[var(--shadow-card)] transition-all duration-500 hover:shadow-[0_25px_70px_-15px_oklch(0.2_0.04_265_/_0.25)]">
              <img src="/assets/web-illustration.jpg" alt="Hero" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </Reveal>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-8xl grid-cols-2 gap-4 px-2 sm:px-4 md:gap-5 md:grid-cols-4 lg:px-8">
          {stats.map((s, index) => {
            const Icon = s.icon;
            return <AnimatedStat key={s.label} value={s.value} label={s.label} icon={Icon} count={s.count} suffix={s.suffix} precision={0} />;
          })}
        </div>
      </section>

      {/* About Nexova Section */}
      <Section className="py-0" containerClassName="max-w-full px-0">
        <div className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="overflow-hidden rounded-9xl border border-border bg-card shadow-[var(--shadow-card)] min-h-[280px] md:min-h-[320px] lg:min-h-[380px]">
            <img
              src="/assets/images-12.jpeg"
              alt="Network sphere technology illustration"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-navy mb-6">
              About <span className="text-gradient-red">Us</span>
            </h2>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-navy mb-6">
              Empowering Businesses with <span className="text-gradient-red">IT Solutions</span>
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
              As a trusted IT Services Company, Nexova TechZone helps startups, SMEs, and enterprises solve complex business challenges with customized IT Solutions. Our mission is to empower organizations with scalable technology, secure infrastructure, and innovative digital experiences that improve productivity and business performance.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
              From custom software development to cloud transformation, AI automation, cyber security, and digital marketing, we deliver end-to-end IT Services and Consulting designed around your unique business objectives.
            </p>
            <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
              Whether you're modernizing legacy systems, expanding your workforce, or embracing digital transformation, our team is committed to delivering solutions that create long-term value.
            </p>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          eyebrow="What We Do"
          title={
            <>
              <span className="text-navy">Comprehensive IT Solutions for </span>
              <span className="text-gradient-red">Every Business Need</span>
            </>
          }
          titleClassName="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            
            <Link href="/services/IT-Infrastructure-services" className="group rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/80 hover:shadow-[var(--shadow-card)]">
            <span className="text-1xl font-bold text-navy transition-colors group-hover:text-primary">IT Infrastructure & Cloud Services</span>
          </Link>
           <Link href="/services/IT-staffing-services" className="group rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/80 hover:shadow-[var(--shadow-card)]">
            <span className="text-1xl font-bold text-navy transition-colors group-hover:text-primary">IT Staffing & Workforce Solutions</span>
          </Link>
          <Link href="/services/software-development" className="group rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/80 hover:shadow-[var(--shadow-card)]">
            <span className="text-1xl font-bold text-navy transition-colors group-hover:text-primary">Software Development</span>
          </Link>
         
          <Link href="/services/Digital-marketing-services" className="group rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/80 hover:shadow-[var(--shadow-card)]">
            <span className="text-1xl font-bold text-navy transition-colors group-hover:text-primary">Digital Marketing Services</span>
          </Link>
          <Link href="/services/AI-automation-services" className="group rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/80 hover:shadow-[var(--shadow-card)]">
            <span className="text-1xl font-bold text-navy transition-colors group-hover:text-primary">AI Automation Solutions</span>
          </Link>
          <Link href="/services/cyber-security-services" className="group rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/80 hover:shadow-[var(--shadow-card)]">
            <span className="text-1xl font-bold text-navy transition-colors group-hover:text-primary">Cyber Security Services</span>
          </Link>
          <div className="lg:col-span-3 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/services/business-process-outsourcing-services" className="group min-w-[18rem] rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/80 hover:shadow-[var(--shadow-card)]">
              <span className="text-1xl font-bold text-navy transition-colors group-hover:text-primary">BPO Services</span>
            </Link>
            <Link href="/services/medical-coding-billing-services" className="group min-w-[18rem] rounded-3xl border border-border bg-card p-8 text-center shadow-[var(--shadow-soft)] transition-all hover:-translate-y-1 hover:border-primary/80 hover:shadow-[var(--shadow-card)]">
              <span className="text-1xl font-bold text-navy transition-colors group-hover:text-primary">Medical Coding & Billing</span>
            </Link>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading eyebrow="Why Choose Nexova TechZone?" title="Your Trusted IT Services" redPart="Company" />
        <p className="mx-auto mb-8 max-w-3xl text-center text-foreground/80">
          Choosing the right technology partner is critical to your business success. At Nexova TechZone, we combine technical expertise, innovation, and customer-focused strategies to deliver exceptional IT Services and Consulting that help businesses stay competitive.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Experienced IT Consultants",
            "Customized IT Solutions",
            "End-to-End Technology Services",
            "Agile Development Methodology",
            "AI-Driven Innovation",
            "Enterprise-Grade Security",
            "Transparent Communication",
            "Dedicated Technical Support",
            "Cost-Effective Technology Solutions",
          ].map((item) => (
            <div key={item} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-semibold text-foreground">✔ {item}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* <Section className="pt-0">
        <SectionHeading
          eyebrow="Industries We Serve"
          title="Our IT Solutions help businesses across diverse industries"
          redPart="transform their operations and accelerate digital innovation."
        />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {["Healthcare", "Education", "Manufacturing", "Retail & E-commerce", "Logistics", "Finance", "Real Estate", "Hospitality",].map((industry) => (
            <div key={industry} className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
              <p className="text-sm font-medium text-foreground">{industry}</p>
            </div>
          ))}
        </div>
      </Section> */}

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Our Process"
          title="Delivering IT Services with a Proven"
          redPart="Approach"
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                variants={processCardMotion[index]}
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 110, damping: 18 }}
                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/70 p-7 shadow-[0_30px_100px_-50px_rgba(15,23,42,0.32)] backdrop-blur-3xl transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-primary/30"
              >
                <div className="absolute inset-x-0 -top-10 h-44 bg-gradient-to-b from-primary/15 via-transparent to-transparent opacity-80 blur-3xl" />
                <div className="relative z-10 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={processIconMotion[index].animate}
                      transition={processIconMotion[index].transition}
                      className="flex h-14 w-14 items-center justify-center rounded-3xl border border-white/20 bg-primary/10 text-primary shadow-[0_20px_80px_-50px_rgba(59,130,246,0.35)] transition-all duration-500"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">Step {index + 1}</p>
                      <h3 className="mt-2 text-xl font-semibold text-navy">{step.title}</h3>
                    </div>
                  </div>
                  <span className="rounded-full border border-white/20 bg-white/20 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-primary shadow-[0_12px_40px_-28px_rgba(59,130,246,0.45)]">
                    0{index + 1}
                  </span>
                </div>
                <p className="mt-6 text-sm leading-7 text-foreground/80">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Section>

      <Section className="pt-0">
        <div className="overflow-hidden rounded-3xl border border-border bg-card p-10 shadow-[var(--shadow-soft)]">
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-navy md:text-4xl">Looking for a Reliable IT Services Company?</h2>
              <p className="mt-4 max-w-2xl text-foreground/80 leading-relaxed">
                Partner with Nexova TechZone for innovative IT Services and Consulting that help your business grow with confidence. From software development and AI automation to cloud infrastructure, IT staffing, digital marketing, and cyber security, we deliver complete IT Solutions tailored to your business needs.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90">
                Talk to Our Experts
              </Link>
            </div>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <TechStackStrip items={techStack} />
      </Section>
      <Section className="pt-0">
        <div className="grid gap-10 md:gap-12 lg:grid-cols-2 lg:items-start">
          <div className="group overflow-hidden rounded-3xl shadow-[var(--shadow-card)] transition-all duration-500 hover:shadow-[0_25px_70px_-15px_oklch(0.2_0.04_265_/_0.25)]">
            <img src="/assets/laptop-glow.jpg" alt="Operational excellence" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
          </div>
          <div>
            <SectionHeading centered={false} title="Our Commitment to" redPart="Operational Excellence" description="We thrive on transparency and agility. For every audit, metric, and process is laid bare so trust is built in right at every iteration." />
            <div className="space-y-5 md:space-y-4">
              {commitments.map((c) => {
                const Icon = c.icon;
                return (
                  <div key={c.title} className="group flex gap-4 rounded-2xl border border-border bg-card p-5 md:p-4 shadow-[var(--shadow-soft)] transition-all duration-300 hover:border-primary/50 hover:shadow-[var(--shadow-card)]">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent text-primary transition-all duration-300 group-hover:scale-125 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5 transition-transform" />
                    </div>
                    <div>
                      <h4 className="text-sm md:text-base font-bold text-navy transition-colors duration-300 group-hover:text-primary">{c.title}</h4>
                      <p className="mt-1 text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground">{c.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* Industries We Serve */}
      <Section className="pt-0">
        <SectionHeading eyebrow="Markets We Serve" title="Industries " redPart="We Serve" description="Specialized technology solutions for diverse business sectors." />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {industries.map(({ title, icon: Icon }, index) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.05, duration: 0.65, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/80 p-5 shadow-[0_24px_80px_-38px_rgba(15,23,42,0.16)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl hover:border-primary/40 hover:bg-gradient-to-br hover:from-primary/10 hover:via-white/70 hover:to-slate-100/40"
            >
              <div className="relative z-10 flex items-center gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-primary/10 text-primary shadow-[0_18px_60px_-30px_rgba(59,130,246,0.35)] transition-all duration-500 group-hover:scale-105 group-hover:rotate-12">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="font-medium text-foreground">{title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Our Products & Platforms */}
      <Section className="pt-0">
        <SectionHeading eyebrow="Product Suite" title="Our Products & " redPart="Platforms" description="Powerful solutions built for business growth and operational excellence." />
        <div className="grid gap-8 md:gap-10 md:grid-cols-2">
          <Link href="/products/foodzo" className="group rounded-2xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all">
            <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">FoodZo</h3>
            <p className="text-foreground mb-4">Complete restaurant management software including billing, KOT, menu management, reports and operations.</p>
            <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
              Learn More <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
          <Link href="/products/foodzo-lite" className="group rounded-2xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all">
            <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">FoodZo Lite</h3>
            <p className="text-foreground mb-4">Affordable billing & POS software for restaurants, supermarkets and retail businesses.</p>
            <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
              Learn More <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
          <Link href="/products/ai-assistant" className="group rounded-2xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all">
            <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">Nexova AI Assistant</h3>
            <p className="text-foreground mb-4">Business-trained AI chatbot for sales, automation, customer support and business intelligence.</p>
            <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
              Learn More <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
          <Link href="/products/automation-bot" className="group rounded-2xl border border-border bg-card p-8 md:p-10 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all">
            <h3 className="text-2xl font-bold text-navy mb-3 group-hover:text-primary transition-colors">Restaurant Automation Bot</h3>
            <p className="text-foreground mb-4">Smart chatbot system for restaurant order management and customer interaction.</p>
            <div className="flex items-center gap-2 text-sm font-medium text-primary group-hover:gap-3 transition-all">
              Learn More <ArrowRight className="h-4 w-4" />
            </div>
          </Link>
        </div>
      </Section>

      {/* Trust Section
      <Section className="pt-0">
        <SectionHeading eyebrow="Why Trust Us" title="Trusted Technology Partner for " redPart="Growing Businesses" />
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {[
            { title: "Multi-Industry Expertise", desc: "Proven solutions across restaurants, retail, healthcare, logistics and more." },
            { title: "AI & Automation Focused", desc: "Building intelligent systems that reduce manual work and improve efficiency." },
            { title: "End-to-End Digital Solutions", desc: "From software to staffing to implementation - complete technology partnerships." },
            { title: "Dedicated Technical Support", desc: "Your success is our priority with reliable, hands-on support." },
            { title: "Custom Software Specialists", desc: "Tailored solutions built for your unique business needs." },
            { title: "Restaurant & Retail Technology", desc: "Deep expertise in F&B and retail operations and automation." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all">
              <h3 className="font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section> */}

      {/* Clients */}
      <Section className="pt-0">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl font-extrabold leading-tight text-navy md:text-4xl md:leading-tight text-center">Our Client</h2>
        </div>
        <div className="overflow-hidden rounded-3xl bg-card p-4 shadow-[var(--shadow-soft)]">
          <ClientMarquee />
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="pt-0">
        <SectionHeading title="Board-Level " redPart="Impact" description="Insights from clients, technology leaders and architects." />
        <div className="overflow-hidden rounded-3xl bg-card p-4 shadow-[var(--shadow-soft)]">
          <Marquee gradient={false} speed={40} pauseOnHover className="testimonial-marquee">
            {testimonials.map((t) => (
              <motion.div
                key={t.name}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 140, damping: 20 }}
                className="group mx-2 min-w-[320px] rounded-3xl border border-white/10 bg-white/60 p-6 shadow-[0_24px_80px_-34px_rgba(15,23,42,0.34)] backdrop-blur-xl transition-all duration-500 ease-out hover:border-primary/30 hover:shadow-2xl"
              >
                <div className="flex gap-2 text-primary transition-transform duration-500 group-hover:scale-110">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 max-w-[30rem] text-base leading-7 text-foreground/90 break-words">{'"' + t.quote + '"'}</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold shadow-[0_14px_30px_-16px_rgba(59,130,246,0.35)] transition-all duration-500 group-hover:scale-105">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-navy">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </Marquee>
        </div>
        {/* <div className="mt-8 flex justify-center">
          <Link href="/testimonials" className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-red)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_oklch(0.55_0.22_25_/_0.35)]">
            View all testimonials
          </Link>
        </div> */}
      </Section>

      {/* Foodzo */}
      <Section className="pt-0">
        <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-card)]">
          <div className="grid gap-0 lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-10 flex flex-col justify-center">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">Case Study</p>
              <h3 className="mt-4 text-3xl font-extrabold leading-tight text-navy md:text-4xl md:leading-tight">Our Flagship<br /><span className="text-gradient-red">Foodzo</span></h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base md:leading-relaxed">
                A complete F&B SaaS ecosystem built for scale. We architected operations, ordering, and rider logistics into a single high-availability platform.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-4 max-w-md">
                <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Real-time orders</div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Multi-tenant ops</div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Rider analytics</div>
                <div className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary shrink-0" /> Click & collect</div>
              </div>
              <Link href="/product" className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-red)] transition-all duration-300 hover:-translate-y-0.5 w-fit">
                Explore Ecosystem <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="bg-accent/40 hidden lg:block">
              <img src="/assets/foodzo.jpg" alt="Foodzo flagship product" width={1024} height={768} className="h-full w-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="pt-0">
        <SectionHeading title="Strategic " redPart="FAQ" />
        <div className="mx-auto max-w-4xl divide-y divide-border rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
          {faqs.map((f, i) => (
            <details key={i} className="group border-b last:border-b-0 border-border">
              <summary className="flex cursor-pointer list-none items-start md:items-center justify-between gap-4 px-6 md:px-8 py-6 text-sm md:text-base font-semibold text-navy transition-colors duration-300 group-open:text-primary">
                {f.q}
                <span className="text-primary transition-transform group-open:rotate-45 text-xl md:text-2xl leading-none shrink-0">+</span>
              </summary>
              <p className="px-6 md:px-8 pb-6 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* Contact CTA */}
      <Section className="pt-0">
        <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-[oklch(0.5_0.22_18)] p-8 md:p-12 lg:p-16 text-primary-foreground shadow-[var(--shadow-red)]">
          <div className="grid items-center gap-10 md:gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h3 className="text-3xl font-extrabold leading-tight md:text-4xl lg:text-5xl md:leading-tight">Let's Design<br />Your Next<br />Impact.</h3>
              <p className="mt-6 max-w-sm text-sm md:text-base leading-relaxed opacity-90">Brief us on your vision and we'll respond within 24 hours with a tactical engagement plan.</p>
            </div>
            <Link href="/contact" className="inline-flex w-full md:w-auto items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-bold text-primary transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_oklch(0.2_0.04_265_/_0.25)]">
              INITIATE STRATEGY CALL
            </Link>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <TechStackStrip items={techStack} />
      </Section>
    </Layout>
  );
}
