import { Layout } from "@/components/layout/Layout";
import { ServiceHero } from "@/components/ui/service-hero";
import { Section, SectionHeading } from "@/components/ui/section-shell";
import { CtaBanner } from "@/components/ui/cta-banner";

export default function AIAssistantsPage() {
  return (
    <Layout>
      <ServiceHero
        eyebrow="AI Automation"
        title="Transform Your Business with"
        redPart="AI Automation Services"
        description="We help businesses leverage AI Automation Services to streamline operations, improve customer engagement, and accelerate growth. Whether you're looking to automate repetitive tasks, build intelligent AI assistants, or create custom AI-powered applications, our experts deliver scalable solutions tailored to your business needs."
        stats={[
          { value: "24/7", label: "AI Assistance" },
          { value: "100+", label: "Automations" },
          { value: "10x", label: "Productivity Gains" },
        ]}
        visual={
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
            <img
              src="/assets/ai-globe.jpg"
              alt="AI automation services"
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        }
      />

      <Section>
        <SectionHeading
          
          title="Our AI Automation"
          redPart="Services"
          description="Empower your business with AI-powered virtual assistants that provide instant support, automate daily tasks, answer customer queries, schedule appointments, and assist employees 24/7. Our AI assistants integrate seamlessly with your website, CRM, ERP, WhatsApp, Slack, Microsoft Teams, and other business platforms."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Features</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>24/7 customer assistance</li>
              <li>Natural language conversations</li>
              <li>Appointment scheduling</li>
              <li>Employee support assistant</li>
              <li>CRM integration</li>
              <li>Multi-platform deployment</li>
              <li>Knowledge-based responses</li>
              <li>Personalized user interactions</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Reduce support costs</li>
              <li>Improve customer satisfaction</li>
              <li>Increase productivity</li>
              <li>Faster response times</li>
              <li>Better user experience</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="RAG Document"
          redPart="Intelligence"
          description="Turn your documents into intelligent knowledge. Our Retrieval-Augmented Generation (RAG) solutions allow businesses to securely search, analyze, and retrieve information from thousands of documents using AI."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Supported Documents</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>PDFs</li>
              <li>Word Documents</li>
              <li>Excel Files</li>
              <li>Company Policies</li>
              <li>Product Manuals</li>
              <li>Contracts</li>
              <li>Research Papers</li>
              <li>Knowledge Bases</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Features</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>AI-powered document search</li>
              <li>Semantic search</li>
              <li>Instant document summarization</li>
              <li>Secure internal knowledge access</li>
              <li>Enterprise-grade security</li>
              <li>Multi-document intelligence</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
          <h3 className="text-2xl font-semibold text-primary">Benefits</h3>
          <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
            <li>Save hours of manual work</li>
            <li>Improve employee efficiency</li>
            <li>Faster knowledge retrieval</li>
            <li>Accurate AI-generated answers</li>
          </ul>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="AI Chatbot Development"
          redPart="for Businesses"
          description="Smart chatbots that convert visitors into customers. We build intelligent AI chatbots capable of answering customer questions, qualifying leads, booking appointments, providing product recommendations, and delivering personalized support."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Capabilities</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Customer support</li>
              <li>Lead generation</li>
              <li>FAQ automation</li>
              <li>Order tracking</li>
              <li>Appointment booking</li>
              <li>Product recommendations</li>
              <li>Multi-language support</li>
              <li>Human handoff</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>24/7 customer service</li>
              <li>Higher lead conversion</li>
              <li>Reduced support workload</li>
              <li>Improved customer engagement</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="AI Sales"
          redPart="Intelligence"
          description="AI that helps your sales team sell smarter. Our AI-powered sales intelligence solutions analyze customer behavior, identify high-value leads, predict buying intent, and provide actionable insights that improve sales performance."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Features</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Lead scoring</li>
              <li>Sales forecasting</li>
              <li>Customer behavior analysis</li>
              <li>Opportunity prediction</li>
              <li>Automated follow-ups</li>
              <li>Email intelligence</li>
              <li>CRM insights</li>
              <li>Performance dashboards</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Increase conversions</li>
              <li>Prioritize qualified leads</li>
              <li>Improve sales productivity</li>
              <li>Better revenue forecasting</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Workflow"
          redPart="Automation"
          description="Automate repetitive business processes. Reduce manual work and improve operational efficiency through intelligent workflow automation."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Automation Solutions</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>HR workflows</li>
              <li>Invoice processing</li>
              <li>Approval workflows</li>
              <li>Email automation</li>
              <li>CRM automation</li>
              <li>ERP integration</li>
              <li>Employee onboarding</li>
              <li>Data synchronization</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Save time</li>
              <li>Reduce operational costs</li>
              <li>Eliminate human errors</li>
              <li>Increase productivity</li>
              <li>Faster business operations</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Supervised Learning"
          redPart="Models"
          description="Custom machine learning models for business intelligence. We develop supervised learning models that learn from historical data to predict future outcomes, classify information, and support intelligent decision-making."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Applications</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Fraud detection</li>
              <li>Customer churn prediction</li>
              <li>Sales prediction</li>
              <li>Demand forecasting</li>
              <li>Sentiment analysis</li>
              <li>Product recommendations</li>
              <li>Risk analysis</li>
              <li>Image classification</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Industries</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Finance</li>
              <li>Healthcare</li>
              <li>Retail</li>
              <li>Manufacturing</li>
              <li>Education</li>
              <li>Logistics</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Business Intelligence"
          redPart="AI"
          description="Make smarter decisions with AI-powered analytics. Transform raw business data into meaningful insights with AI-driven business intelligence solutions."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Features</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Real-time dashboards</li>
              <li>Predictive analytics</li>
              <li>KPI monitoring</li>
              <li>Interactive reports</li>
              <li>Trend analysis</li>
              <li>Automated reporting</li>
              <li>Data visualization</li>
              <li>Executive insights</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Benefits</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Better business decisions</li>
              <li>Improved forecasting</li>
              <li>Increased operational visibility</li>
              <li>Data-driven growth</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Custom AI"
          redPart="Solutions"
          description="Tailored AI solutions built for your business. We design and develop custom AI applications based on your business processes, goals, and industry requirements."
        />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">We Build</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Custom AI applications</li>
              <li>AI SaaS platforms</li>
              <li>AI integrations</li>
              <li>AI APIs</li>
              <li>Internal AI tools</li>
              <li>AI workflow systems</li>
              <li>Generative AI solutions</li>
              <li>Enterprise AI platforms</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
            <h3 className="text-2xl font-semibold text-primary">Why Choose Custom AI?</h3>
            <ul className="mt-5 space-y-3 text-foreground/90 list-disc list-inside marker:text-primary">
              <li>Built specifically for your business</li>
              <li>Scalable architecture</li>
              <li>Secure implementation</li>
              <li>Easy integration</li>
              <li>Future-ready technology</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section className="pt-0">
        <SectionHeading
          title="Industries We"
          redPart="Serve"
          description="We provide AI Automation solutions for a wide range of industries, including healthcare, education, real estate, retail & e-commerce, manufacturing, logistics, finance & banking, hospitality, information technology, and professional services."
        />
        <div className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
          <ul className="grid gap-3 text-foreground/90 sm:grid-cols-2 lg:grid-cols-3 list-disc list-inside">
            <li>Healthcare</li>
            <li>Education</li>
            <li>Real Estate</li>
            <li>Retail & E-commerce</li>
            <li>Manufacturing</li>
            <li>Logistics</li>
            <li>Finance & Banking</li>
            <li>Hospitality</li>
            <li>Information Technology</li>
            <li>Professional Services</li>
          </ul>
        </div>
      </Section>

      <Section className="pt-0">
        <CtaBanner
          title="Ready to Transform Your Business with AI?"
          description="Unlock the power of AI Automation Services to streamline operations, enhance customer experiences, and accelerate business growth. Contact Nexova TechZone today for a free consultation and discover how our AI-driven solutions can help your business work smarter, faster, and more efficiently."
          primary={{ label: "Request a Consultation", to: "/contact" }}
          secondary={{ label: "Talk to an Expert", to: "/contact" }}
        />
      </Section>
    </Layout>
  );
}
