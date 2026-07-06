
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Section, SectionHeading, EyebrowChip } from "@/components/ui/section-shell";
import { ServiceCard } from "@/components/ui/service-card";
import { services, techStack } from "@/lib/services";
import { TechStackStrip } from "@/components/ui/cta-banner";
import { ArrowRight, Activity, Users, Zap, Award, Shield, CheckCircle2, Star, Smartphone, Database, Monitor, Server } from "lucide-react";

const stats = [
  { value: "99.8%", label: "Client Retention", icon: Activity },
  { value: "12", label: "Countries Served", icon: Users },
  { value: "40%", label: "Avg. Time-to-Ship", icon: Zap },
  { value: "250+", label: "Experts on Deck", icon: Award },
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

export default function HomePage() {
  return (
    <Layout>
      {/* HERO */}
      <section className="bg-hero-soft pt-8 pb-0 md:pt-16 md:pb-0">
        <div className="mx-auto grid max-w-8xl items-center gap-8 px-4 sm:px-6 md:gap-10 lg:grid-cols-2 lg:px-8">
          <div className="anim-fade-up">
            <div className="mb-4 inline-block">
              <EyebrowChip>Strategic Intelligence Active</EyebrowChip>
            </div>
            <h1 className="text-4xl font-extrabold leading-tight text-navy sm:text-5xl md:text-6xl lg:text-7xl md:leading-tight lg:leading-[1.1] lg:mt-8">
             Building Intelligent Software for Growing <span className="text-gradient-red">Business</span><br />
             
            </h1>
           <p className="mt-6 max-w-lg text-base font-normal font-sans leading-relaxed text-muted-foreground md:mt-8 md:text-lg md:leading-relaxed">
              Custom software, AI assistants, IT staffing, ERP systems, POS solutions, websites and business automation built to help companies scale faster, reduce manual work and grow efficiently.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 md:gap-3">
              <Link href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-red)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-12px_oklch(0.55_0.22_25_/_0.5)]">
                Book Free Consultation <ArrowRight className="h-4 w-4 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-125" />
              </Link>
              <Link href="/services" className="group inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary hover:bg-primary/5 hover:shadow-[0_8px_24px_-6px_oklch(0.2_0.04_265_/_0.1)]">
                Explore Solutions
              </Link>
            </div>
          </div>
          <div className="anim-fade-up">
            <div className="group overflow-hidden rounded-3xl shadow-[var(--shadow-card)] transition-all duration-500 hover:shadow-[0_25px_70px_-15px_oklch(0.2_0.04_265_/_0.25)]">
              <img src="/assets/web-illustration.jpg" alt="Hero" width={1024} height={768} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-8xl grid-cols-2 gap-4 px-2 sm:px-4 md:gap-5 md:grid-cols-4 lg:px-8">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="group card-hover flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-4 md:p-5 shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent text-primary transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                  <Icon className="h-5 w-5 transition-transform" />
                </div>
                <div>
                  <div className="text-lg md:text-xl font-extrabold text-navy transition-colors duration-300 group-hover:text-primary">{s.value}</div>
                  <div className="text-xs font-semibold text-muted-foreground">{s.label}</div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* About Nexova Section */}
      <Section className="pt-0">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-navy mb-6">
            Empowering Businesses Through AI, Software & <span className="text-gradient-red">Workforce Solutions</span>
          </h2>
          <p className="text-base md:text-lg leading-relaxed text-foreground mb-8">
            At Nexova TechZone, we help businesses scale smarter through custom software, AI automation, IT staffing, restaurant technology and digital transformation solutions. From ERP systems and POS software to intelligent chatbots, workforce solutions, websites and enterprise applications - we create scalable systems that simplify operations, improve productivity and accelerate business growth. We don't just build technology - we solve business problems.
          </p>
        </div>
      </Section>

      {/* Why Choose Nexova Section */}
      <Section className="pt-0">
        <SectionHeading eyebrow="Why Businesses Choose Us" title="Why Choose " redPart="Nexova" />
        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary mb-4">
              <Zap className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Custom Business Solutions</h3>
            <p className="text-foreground">Software, staffing and automation solutions tailored to your business workflow and goals.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary mb-4">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Affordable & Scalable</h3>
            <p className="text-foreground">Solutions designed for startups, SMEs, restaurants and enterprises without overspending.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Dedicated Support</h3>
            <p className="text-foreground">Reliable technical and implementation support to ensure smooth operations.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary mb-4">
              <Activity className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">AI-Powered Innovation</h3>
            <p className="text-foreground">Reduce repetitive work using AI assistants, chatbots, workflow automation and smart reporting systems.</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300 md:col-span-2">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary mb-4">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">Industry Expertise</h3>
            <p className="text-foreground">Specialized technology solutions for restaurants, retail, healthcare, logistics, startups and enterprises.</p>
          </div>
        </div>
      </Section>

      {/* Service ecosystem - New Sections */}
      <Section>
        <SectionHeading eyebrow="Core Capabilities" title="What We " redPart="Do" description="Complete solutions to help your business scale faster and operate smarter." />
        
        {/* Custom Software Development */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3 text-center">Custom Software Development</h3>
          <p className="text-foreground mb-6 text-center">Build secure, scalable and high-performance software tailored to your business operations. We develop ERP systems, CRM platforms, enterprise applications, automation software, billing systems and cloud-based business solutions.</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {["ERP Development", "CRM Software", "Enterprise Applications", "Business Automation", "SaaS Platforms", "POS Development", "Cloud Solutions", "Maintenance & Support"].map((service) => (
              <div key={service} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all">
                <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span className="text-sm font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Website & Web Application Development */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3 text-center">Website & Web Application Development</h3>
          <p className="text-foreground mb-6 text-center">We design fast, modern, SEO-friendly websites and web applications that improve brand visibility, customer engagement and lead generation.</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {["Business Websites", "Corporate Websites", "Landing Pages", "Custom Web Applications", "E-Commerce Websites", "UI/UX Design", "SEO Optimization", "Performance Optimization"].map((service) => (
              <div key={service} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all">
                <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span className="text-sm font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* IT Staffing & Workforce Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3 text-center">IT Staffing & Workforce Solutions</h3>
          <p className="text-foreground mb-6 text-center">Hire skilled professionals faster with Nexova's IT staffing solutions. We provide contract staffing, technical resources and workforce support to help companies scale efficiently.</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {["Contract Staffing", "Remote Developers", "Technical Hiring", "Workforce Outsourcing", "Dedicated Teams", "Resource Augmentation", "Staff Augmentation", "Technical Recruitment"].map((service) => (
              <div key={service} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all">
                <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span className="text-sm font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* AI & Business Automation */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3 text-center">AI & Business Automation</h3>
          <p className="text-foreground mb-6">Transform business operations with AI-powered solutions. We build intelligent chatbots, AI assistants, workflow automation, document intelligence (RAG) and customer engagement systems.</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {["AI Chatbots", "WhatsApp Business Bots", "AI Sales Assistants", "Document Intelligence (RAG)", "Smart Reporting Systems", "Business Automation", "Customer Support AI", "Process Automation"].map((service) => (
              <div key={service} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all">
                <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span className="text-sm font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Restaurant Automation Solutions */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-navy mb-3 text-center">Restaurant Automation Solutions</h3>
          <p className="text-foreground mb-6 text-center">Digitize restaurant operations with intelligent billing, KOT systems, menu management, POS software, order automation and chatbot-powered customer engagement.</p>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {["Restaurant POS", "Order Management", "FoodZo", "FoodZo Lite", "Kitchen Order Ticket (KOT)", "QR Menu Management", "Billing Software", "Restaurant Chatbots"].map((service) => (
              <div key={service} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all">
                <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
                <span className="text-sm font-medium text-foreground">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Commitment */}
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
          {["Restaurants & Cafés", "Retail Stores", "Healthcare", "Logistics & Transport", "Staffing Agencies", "Education", "Startups", "Enterprises", "Real Estate", "Manufacturing", "Banking & Finance", "E-Commerce"].map((industry) => (
            <div key={industry} className="flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-[var(--shadow-soft)] transition-all">
              <span className="h-2 w-2 rounded-full bg-primary shrink-0"></span>
              <span className="font-medium text-foreground">{industry}</span>
            </div>
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

      {/* Trust Section */}
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
      </Section>

      {/* Clients */}
      <Section className="pt-0">
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl font-extrabold leading-tight text-navy md:text-4xl md:leading-tight text-center">Our Client</h2>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5 items-center justify-center">
          <div className="flex items-center justify-center p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <img src="/assets/Clusterzap.jpeg" alt="Clusterzap.ai" className="h-12 md:h-14 object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <img src="/assets/Leather Working Group.jpeg" alt="Leather Working Group" className="h-12 md:h-14 object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <img src="/assets/Triveni.jpeg" alt="Triveni" className="h-12 md:h-14 object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <img src="/assets/Escon.jpeg" alt="Escon" className="h-12 md:h-14 object-contain" />
          </div>
          <div className="flex items-center justify-center p-6 rounded-2xl bg-card border border-border shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-card)] transition-all duration-300">
            <img src="/assets/Thaagam Foundation.jpeg" alt="Thaagam Foundation" className="h-12 md:h-14 object-contain" />
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section className="pt-0">
        <SectionHeading title="Board-Level " redPart="Impact" description="Insights from clients, technology leaders and architects." />
        <div className="grid gap-5 md:gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="group rounded-2xl border border-border bg-card p-6 md:p-7 shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-card)] hover:border-primary/50">
              <div className="flex gap-1 text-primary transition-transform duration-300 group-hover:scale-110">
                {Array.from({ length: t.stars }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-5 text-sm leading-relaxed text-foreground/85 transition-colors duration-300 group-hover:text-foreground">{'"' + t.quote + '"'}</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent font-bold text-sm text-primary transition-transform duration-300 group-hover:scale-110 shrink-0">{t.name[0]}</div>
                <div>
                  <div className="text-sm font-bold text-navy transition-colors duration-300 group-hover:text-primary">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
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
