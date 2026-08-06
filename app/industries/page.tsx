
import { Layout } from '@/components/layout/Layout';

export default function IndustriesComponent() {
  const industries = [
    {
      name: 'Healthcare',
      icon: '⚕️',
      description: 'Patient management systems, telemedicine platforms, and healthcare data analytics',
      solutions: ['HIPAA-Compliant Applications', 'Patient Portals', 'Health Analytics', 'EHR Integration'],
      clients: '50+ Healthcare Providers',
    },
    {
      name: 'Finance & Banking',
      icon: '🏦',
      description: 'Secure financial platforms, payment processing, and compliance solutions',
      solutions: ['Banking Software', 'Payment Gateways', 'Fraud Detection', 'Regulatory Compliance'],
      clients: '40+ Financial Institutions',
    },
    {
      name: 'Retail & E-Commerce',
      icon: '🛍️',
      description: 'Online stores, inventory management, and customer experience platforms',
      solutions: ['E-Commerce Platforms', 'POS Systems', 'Inventory Management', 'Customer Analytics'],
      clients: '80+ Retail Brands',
    },
    {
      name: 'Food & Beverage',
      icon: '🍽️',
      description: 'Restaurant management, FoodZo POS, and kitchen automation solutions',
      solutions: ['FoodZo POS', 'Kitchen Management', 'Online Ordering', 'Delivery Integration'],
      clients: '200+ Restaurants',
    },
    {
      name: 'Manufacturing',
      icon: '🏭',
      description: 'Industrial automation, IoT solutions, and supply chain optimization',
      solutions: ['IoT Systems', 'Supply Chain Management', 'Production Planning', 'Quality Control'],
      clients: '35+ Manufacturing Plants',
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Learning management systems, student portals, and virtual classrooms',
      solutions: ['LMS Platforms', 'Student Information Systems', 'Virtual Learning', 'Assessment Tools'],
      clients: '60+ Educational Institutions',
    },
    {
      name: 'Real Estate',
      icon: '🏢',
      description: 'Property management, CRM systems, and virtual property tours',
      solutions: ['Property Management', 'CRM Systems', 'Virtual Tours', 'Document Management'],
      clients: '45+ Real Estate Firms',
    },
    {
      name: 'Logistics & Transport',
      icon: '🚚',
      description: 'Fleet management, tracking systems, and route optimization',
      solutions: ['Fleet Management', 'Real-time Tracking', 'Route Optimization', 'Driver Management'],
      clients: '30+ Logistics Companies',
    },
    {
      name: 'Media & Entertainment',
      icon: '🎬',
      description: 'Content management, streaming platforms, and digital publishing',
      solutions: ['CMS Platforms', 'Streaming Services', 'Content Distribution', 'Analytics'],
      clients: '25+ Media Companies',
    },
  ];

  const capabilities = [
    {
      title: 'Industry Expertise',
      description: 'Deep understanding of industry-specific regulations and best practices',
      items: ['Compliance Knowledge', 'Domain Expertise', 'Best Practices', 'Security Standards'],
    },
    {
      title: 'Scalable Solutions',
      description: 'Solutions built to grow with your business needs',
      items: ['Cloud Architecture', 'Microservices', 'Load Balancing', 'Performance Optimization'],
    },
    {
      title: 'Data Security',
      description: 'Enterprise-grade security and data protection',
      items: ['Encryption', 'Access Control', 'Compliance', 'Disaster Recovery'],
    },
    {
      title: 'Integration',
      description: 'Seamless integration with existing systems and tools',
      items: ['API Integration', 'Legacy Systems', 'Third-party Services', 'Data Migration'],
    },
  ];

  return (
    <Layout>
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Industry <span className="text-primary">Solutions</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-foreground/70">
              Tailored technology solutions for your industry. We serve diverse sectors with specialized expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, idx) => (
              <div
                key={idx}
                className="rounded-lg border border-border bg-card p-6 hover:shadow-lg transition-all hover:border-primary/50"
              >
                <div className="mb-4 text-5xl">{industry.icon}</div>
                <h3 className="mb-2 text-2xl font-bold text-foreground">{industry.name}</h3>
                <p className="mb-6 text-sm text-foreground/60">{industry.description}</p>
                
                <div className="mb-6 border-t border-border pt-4">
                  <p className="mb-3 text-xs font-semibold text-foreground/60 uppercase">Solutions</p>
                  <div className="space-y-2">
                    {industry.solutions.map((solution, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2">
                        <span className="mt-1 text-primary font-semibold">•</span>
                        <span className="text-sm text-foreground">{solution}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-semibold text-primary">{industry.clients}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="bg-muted/30 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-foreground">Our Capabilities</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {capabilities.map((capability, idx) => (
              <div key={idx} className="rounded-lg border border-border bg-background p-8">
                <h3 className="mb-2 text-xl font-bold text-foreground">{capability.title}</h3>
                <p className="mb-6 text-foreground/60">{capability.description}</p>
                <div className="space-y-3">
                  {capability.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-3xl font-bold text-foreground">Why Industries Choose Nexova</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 text-3xl">🎯</div>
              <h3 className="mb-2 font-bold text-foreground">Specialized Expertise</h3>
              <p className="text-sm text-foreground/60">
                Industry-specific knowledge and proven track record
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 text-3xl">📋</div>
              <h3 className="mb-2 font-bold text-foreground">Compliance Ready</h3>
              <p className="text-sm text-foreground/60">
                Built with regulatory requirements in mind
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 text-3xl">🔒</div>
              <h3 className="mb-2 font-bold text-foreground">Enterprise Security</h3>
              <p className="text-sm text-foreground/60">
                Bank-grade security and data protection
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 text-3xl">📈</div>
              <h3 className="mb-2 font-bold text-foreground">Proven ROI</h3>
              <p className="text-sm text-foreground/60">
                Solutions that deliver measurable business results
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 text-3xl">🤝</div>
              <h3 className="mb-2 font-bold text-foreground">Dedicated Support</h3>
              <p className="text-sm text-foreground/60">
                Industry experts available for your success
              </p>
            </div>
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="mb-4 text-3xl">⚡</div>
              <h3 className="mb-2 font-bold text-foreground">Fast Implementation</h3>
              <p className="text-sm text-foreground/60">
                Quick deployment with minimal disruption
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold text-foreground">Our Industry Impact</h2>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">500+</p>
              <p className="mt-2 text-foreground/60">Clients Served</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">15+</p>
              <p className="mt-2 text-foreground/60">Industries Covered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">2000+</p>
              <p className="mt-2 text-foreground/60">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-primary">98%</p>
              <p className="mt-2 text-foreground/60">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-foreground">Let&apos;s Discuss Your Industry Needs</h2>
          <p className="mb-8 text-lg text-foreground/70">
            Get a customized solution tailored to your industry requirements and business goals.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-lg font-semibold text-primary-foreground shadow-lg hover:-translate-y-1 transition-all"
          >
            Schedule Consultation
          </a>
        </div>
      </section>
    </main>
    </Layout>
  );
}
