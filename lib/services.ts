export type Service = {
  slug: string;
  title: string;
  short: string;
  icon: string;
  to: string;
};

export const services: Service[] = [
  { slug: "software-dev", title: "Software Dev", short: "SOLID, scalable engineering.", icon: "Code2", to: "/services/software-development" },
  { slug: "software-engineering", title: "Custom Software", short: "Bespoke enterprise systems.", icon: "Settings2", to: "/services/custom-software" },
  { slug: "web-dev", title: "Web Dev", short: "Fast, SEO-optimized websites.", icon: "Globe", to: "/services/website-development" },
  { slug: "web-apps", title: "Web Apps", short: "High-performance web platforms.", icon: "Code2", to: "/services/customized-software" },
  { slug: "mobile-apps", title: "Mobile Apps", short: "Native iOS, Android & cross-platform.", icon: "Smartphone", to: "/services/mobile-app-development" },
  { slug: "ai-ml", title: "AI & ML", short: "Models, agents and intelligent automation.", icon: "Brain", to: "/services/ai-machine-learning" },
  { slug: "networking", title: "Networking", short: "SD-WAN, Wi-Fi 6E, low-latency fabric.", icon: "Network", to: "/services/networking-solutions" },
  { slug: "cloud", title: "Cloud Computing", short: "AWS, Azure, GCP cloud architecture.", icon: "Cloud", to: "/services/cloud-computing" },
  { slug: "cybersecurity", title: "Cybersecurity", short: "24/7 SOC, threat detection & response.", icon: "Shield", to: "/services/cybersecurity" },
  { slug: "ui-ux", title: "UI / UX", short: "Precision-engineered experiences.", icon: "Palette", to: "/services/ui-ux-design" },
  { slug: "digital-marketing", title: "Digital Marketing", short: "Performance & growth campaigns.", icon: "Megaphone", to: "/services/digital-marketing" },
  { slug: "data-science", title: "Data Science", short: "Analytics, ETL, BI dashboards.", icon: "Database", to: "/services/data-science" },
  // { slug: "ux-ui-2", title: " Studio", short: "Design systems & prototypes.", icon: "Palette", to: "/services/ui-ux-design" },
  { slug: "testing-qa", title: "Testing & QA", short: "Automated testing & QA.", icon: "FlaskConical", to: "/services/testing-qa" },
  { slug: "devops", title: "DevOps", short: "CI/CD, IaC & observability.", icon: "GitBranch", to: "/services/devops" },
];

export const techStack = [
  "SIEM", "SOC", "Firewall", "IDS/IPS", "VPN", "MFA", "SOAR", "EDR",
];

export const megaMenuServices = [
  {
    title: "AI & Automation",
    items: [
      { label: "AI Assistants", to: "/services/ai-assistants" },
      { label: "RAG Document Intelligence", to: "/services/rag-document-intelligence" },
      { label: "AI Chatbots for Businesses", to: "/services/ai-chatbots" },
      { label: "AI Sales Intelligence", to: "/services/ai-sales-intelligence" },
      { label: "Workflow Automation", to: "/services/devops" },
      { label: "Supervised Learning Models", to: "/services/supervised-learning" },
      { label: "Business Intelligence AI", to: "/services/data-science" },
      { label: "Custom AI Solutions", to: "/services/custom-ai-solutions" },
    ],
  },
  {
    title: "Software Development",
    items: [
      { label: "Custom Software Development", to: "/services/custom-software" },
      { label: "Web Application Development", to: "/services/customized-software" },
      { label: "Mobile App Development", to: "/services/mobile-app-development" },
      { label: "Enterprise Applications", to: "/services/enterprise-applications" },
      { label: "SaaS Product Development", to: "/services/saas-product-development" },
      { label: "CRM & ERP Solutions", to: "/services/crm-erp-solutions" },
      { label: "POS Software Development", to: "/services/pos-software-development" },
    ],
  },
  {
    title: "IT Infrastructure & Cloud",
    items: [
      { label: "Cloud Infrastructure", to: "/services/cloud-infrastructure" },
      { label: "Cloud Migration", to: "/services/cloud-migration" },
      { label: "Server Management", to: "/services/server-management" },
      { label: "Managed IT Services", to: "/services/managed-it-services" },
      { label: "IT Consulting", to: "/services/it-consulting" },
      { label: "Business Digitalization", to: "/services/business-digitalization" },
      { label: "IT Support & AMC", to: "/services/it-support-amc" },
    ],
  },
  {
    title: "Digital Services",
    items: [
      { label: "Website Development", to: "/services/website-development" },
      { label: "UI/UX Design", to: "/services/ui-ux-design" },
      { label: "Branding & Identity", to: "/services/branding-identity" },
      { label: "SEO Services", to: "/services/seo-services" },
      { label: "Performance Marketing", to: "/services/performance-marketing" },
      { label: "Social Media Management", to: "/services/social-media-management" },
    ],
  },
  {
    title: "IT Staffing & Workforce",
    items: [
      { label: "Contract IT Staffing", to: "/services/contract-it-staffing" },
      { label: "Remote Developers", to: "/services/remote-developers" },
      { label: "Dedicated Developers", to: "/services/dedicated-developers" },
      { label: "Resource Augmentation", to: "/services/resource-augmentation" },
      { label: "Technical Hiring", to: "/services/technical-hiring" },
      { label: "Workforce Outsourcing", to: "/services/workforce-outsourcing" },
    ],
  },
  {
    title: "Cybersecurity",
    items: [
      { label: "Security Audits", to: "/services/security-audits" },
      { label: "Vulnerability Testing", to: "/services/vulnerability-testing" },
      { label: "Endpoint Security", to: "/services/endpoint-security" },
      { label: "Data Protection", to: "/services/data-protection" },
    ],
  },
];

export const megaMenuAbout = [
  {
    title: "Company",
    items: [
      { label: "About Nexova TechZone", to: "/about/about-nexova" },
      { label: "Our Mission, Vision & Goals", to: "/about/mission-vision" },
      { label: "Why Choose Nexova", to: "/about/why-choose" },
      // { label: "Leadership Team", to: "/about/leadership" },
      { label: "Our Process", to: "/about/process" },
      { label: "Work Culture", to: "/about/culture" },
      { label: "Strategic Partnerships", to: "/about/partnerships" },
    ],
  },
  {
    title: "Trust & Growth",
    items: [
      { label: "Client Success Stories", to: "/about/success-stories" },
      { label: "Technology Stack", to: "/about/tech-stack" },
      { label: "Innovation & Research", to: "/about/innovation" },
      { label: "Global Presence", to: "/about/global-presence" },
    ],
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/product" },
  { label: "Industries", to: "/industries" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Resources", to: "/resources" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];
