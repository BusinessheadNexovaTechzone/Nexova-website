
import { Layout } from "@/components/layout/Layout";
import { Code2, Cloud, Database, Shield } from "lucide-react";


export default function TechStackPage() {
  const categories = [
    {
      title: "Frontend Technologies",
      icon: Code2,
      technologies: ["React", "Vue.js", "Angular", "TypeScript", "Next.js", "Tailwind CSS", "Webpack", "Jest"],
    },
    {
      title: "Backend & Server",
      icon: Cloud,
      technologies: ["Node.js", "Python", "Java", "Go", "C#", "PHP", "Express.js", "Django", "Spring Boot"],
    },
    {
      title: "Databases",
      icon: Database,
      technologies: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Elasticsearch", "Cassandra", "DynamoDB", "Firebase"],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      technologies: ["AWS", "Google Cloud", "Azure", "Docker", "Kubernetes", "CI/CD", "Terraform", "Jenkins"],
    },
    {
      title: "AI & Machine Learning",
      icon: Code2,
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "CUDA", "Apache Spark", "MLflow"],
    },
    {
      title: "Security & Infrastructure",
      icon: Shield,
      technologies: ["OAuth 2.0", "JWT", "SSL/TLS", "Vault", "SIEM", "WAF", "IDS/IPS", "API Gateway"],
    },
  ];

  return (
    <Layout>
      <section className="pt-12 pb-20 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6">
              Our <span className="text-gradient-red">Technology Stack</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Leveraging industry-leading technologies for superior solutions
            </p>
          </div>

          <div className="bg-muted/40 rounded-lg p-12 mb-16">
            <h2 className="text-2xl font-bold text-navy mb-4">Technology Excellence</h2>
            <p className="text-foreground/80 mb-6 leading-relaxed">
              We stay at the forefront of technology adoption, continuously evaluating and implementing cutting-edge tools and frameworks. Our diverse technology stack enables us to select the right tools for each project while maintaining consistency and quality.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                "Best-in-class tools for each layer",
                "Continuous technology evaluation",
                "Community-driven solutions",
                "Enterprise-grade reliability",
                "Scalability and performance",
                "Security and compliance",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-foreground/80">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {categories.map((category, idx) => {
              const Icon = category.icon;
              return (
                <div key={idx} className="bg-muted/40 rounded-lg p-8">
                  <Icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-navy mb-6">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-navy mb-8">Platform Expertise</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Enterprise Platforms",
                  items: ["SAP", "Oracle", "Salesforce", "ServiceNow", "NetSuite"],
                },
                {
                  title: "E-commerce & CMS",
                  items: ["Shopify", "WooCommerce", "WordPress", "Magento", "Contentful"],
                },
                {
                  title: "Specialized Solutions",
                  items: ["Microsoft Stack", "Adobe Experience Cloud", "Atlassian", "Jira", "Confluence"],
                },
              ].map((platform, idx) => (
                <div key={idx} className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg p-6">
                  <h4 className="font-bold text-navy mb-4">{platform.title}</h4>
                  <ul className="space-y-2">
                    {platform.items.map((item, iIdx) => (
                      <li key={iIdx} className="text-sm text-foreground/70 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-12 mb-16">
            <h2 className="text-2xl font-bold text-navy mb-6">Technology Selection Process</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Analysis",
                  description: "Evaluate project requirements and business goals",
                },
                {
                  step: "2",
                  title: "Evaluation",
                  description: "Assess available technologies and frameworks",
                },
                {
                  step: "3",
                  title: "Selection",
                  description: "Choose optimal solutions for your needs",
                },
                {
                  step: "4",
                  title: "Implementation",
                  description: "Execute with best practices and standards",
                },
              ].map((process, idx) => (
                <div key={idx} className="text-center">
                  <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-4">
                    {process.step}
                  </div>
                  <h4 className="font-bold text-navy mb-2">{process.title}</h4>
                  <p className="text-sm text-foreground/70">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
{/* 
          <div className="bg-navy text-white rounded-lg p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Custom Technology Solutions?</h2>
            <p className="text-white/80 mb-8">
              Our team can evaluate your unique needs and recommend the best technology stack for your project.
            </p>
            <button className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-red)]">
              Get Technology Consultation
            </button>
          </div> */}

          <div className="mt-16">
          <img
  src="/images/tech-stack.jpg"
  alt="Technology Stack"
  className="rounded-lg w-full h-auto"
/>
          </div>
        </div>
      </section>
    </Layout>
  );
}
