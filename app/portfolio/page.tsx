
import { Layout } from '@/components/layout/Layout';

export default function PortfolioComponent() {
  const caseStudies = [
    {
      id: 1,
      title: 'E-Commerce Platform Transformation',
      category: 'Software Projects',
      client: 'Premium Fashion Brand',
      results: ['250% Increase in Sales', '85% Faster Load Times', '40% Reduction in Cart Abandonment'],
      image: '🛍️',
      description: 'Complete redesign and optimization of e-commerce platform',
    },
    {
      id: 2,
      title: 'Restaurant Automation System',
      category: 'Restaurant Automation',
      client: 'Multi-Location Restaurant Chain',
      results: ['50% Faster Order Processing', '30% Reduction in Errors', '60% Improved Customer Satisfaction'],
      image: '🍔',
      description: 'FoodZo POS integration with kitchen management',
    },
    {
      id: 3,
      title: 'AI-Powered CRM Implementation',
      category: 'AI Solutions',
      client: 'SaaS Enterprise',
      results: ['45% Increase in Conversion', '3x Faster Sales Cycle', '80% Automation Rate'],
      image: '🤖',
      description: 'Custom AI chatbots and predictive analytics',
    },
    {
      id: 4,
      title: 'Cloud Migration & DevOps',
      category: 'Cloud Computing',
      client: 'FinTech Startup',
      results: ['99.99% Uptime', '70% Cost Reduction', '10x Faster Deployments'],
      image: '☁️',
      description: 'AWS infrastructure and CI/CD pipeline setup',
    },
    {
      id: 5,
      title: 'Website Redesign & Performance',
      category: 'Website Projects',
      client: 'B2B Tech Firm',
      results: ['120% Traffic Growth', '92 Lighthouse Score', '45% Lead Increase'],
      image: '🌐',
      description: 'Modern, responsive website with SEO optimization',
    },
    {
      id: 6,
      title: 'Mobile App Development',
      category: 'Mobile Applications',
      client: 'Healthcare Provider',
      results: ['50K+ Downloads', '4.8 Star Rating', '$2M Revenue Generated'],
      image: '📱',
      description: 'Native iOS and Android healthcare application',
    },
  ];

  const beforeAfter = [
    { metric: 'Page Load Time', before: '4.2s', after: '0.8s', improvement: '81%' },
    { metric: 'Conversion Rate', before: '2.1%', after: '4.8%', improvement: '129%' },
    { metric: 'User Retention', before: '35%', after: '78%', improvement: '123%' },
    { metric: 'Support Tickets', before: '450/month', after: '85/month', improvement: '81%' },
  ];

  return (
    <Layout>
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Our Portfolio & <span className="text-primary">Case Studies</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-foreground/70">
              Proven results across industries. See how we've transformed businesses with innovative technology solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-foreground">Featured Case Studies</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study) => (
              <div key={study.id} className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4 text-4xl">{study.image}</div>
                <div className="mb-2 text-sm font-semibold text-primary">{study.category}</div>
                <h3 className="mb-2 text-xl font-bold text-foreground">{study.title}</h3>
                <p className="mb-4 text-sm text-foreground/60">{study.client}</p>
                <p className="mb-6 text-sm text-foreground/70">{study.description}</p>
                <div className="space-y-2 border-t border-border pt-4">
                  {study.results.map((result, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-foreground">
                      <span className="text-primary font-semibold">✓</span>
                      {result}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-foreground">Client Results Overview</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {beforeAfter.map((item, idx) => (
              <div key={idx} className="rounded-lg border border-border bg-background p-6">
                <p className="mb-4 font-semibold text-foreground">{item.metric}</p>
                <div className="space-y-2">
                  <div>
                    <p className="text-xs text-foreground/60">Before</p>
                    <p className="text-lg font-bold text-foreground/70">{item.before}</p>
                  </div>
                  <div>
                    <p className="text-xs text-foreground/60">After</p>
                    <p className="text-lg font-bold text-primary">{item.after}</p>
                  </div>
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-semibold text-primary">+{item.improvement} Improvement</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Categories */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-foreground">Portfolio Categories</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="mb-2 text-2xl font-bold text-primary">Software Projects</h3>
              <p className="text-foreground/60">Enterprise software solutions and custom applications</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="mb-2 text-2xl font-bold text-primary">Website Projects</h3>
              <p className="text-foreground/60">Modern websites with SEO optimization and performance</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="mb-2 text-2xl font-bold text-primary">POS Implementations</h3>
              <p className="text-foreground/60">FoodZo and retail point-of-sale system deployments</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="mb-2 text-2xl font-bold text-primary">AI Solutions</h3>
              <p className="text-foreground/60">Machine learning models and AI-powered applications</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="mb-2 text-2xl font-bold text-primary">Restaurant Automation</h3>
              <p className="text-foreground/60">Kitchen management and ordering system integrations</p>
            </div>
            <div className="rounded-lg border border-border bg-card p-8 text-center hover:shadow-lg transition-shadow">
              <h3 className="mb-2 text-2xl font-bold text-primary">Before vs After</h3>
              <p className="text-foreground/60">Transformation case studies and success stories</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground">Ready to See Your Project in Our Portfolio?</h2>
          <p className="mb-8 text-lg text-foreground/70">
            Let&apos;s discuss how we can transform your business with proven solutions.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground shadow-lg hover:-translate-y-1 transition-all"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </main>
    </Layout>
  );
}
