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
  { slug: "bpo-services", title: "BPO Services", short: "Outsource operations, customer support, and back office workflows.", icon: "Users", to: "/services/bpo-services" },
  { slug: "medical-coding-billing-services", title: "Medical Coding & Billing", short: "Accurate healthcare claims processing and revenue recovery.", icon: "FileText", to: "/services/medical-coding-billing-services" },
  // { slug: "ux-ui-2", title: " Studio", short: "Design systems & prototypes.", icon: "Palette", to: "/services/ui-ux-design" },
  { slug: "testing-qa", title: "Testing & QA", short: "Automated testing & QA.", icon: "FlaskConical", to: "/services/testing-qa" },
  { slug: "devops", title: "DevOps", short: "CI/CD, IaC & observability.", icon: "GitBranch", to: "/services/devops" },
];

export const techStack = [
  "SIEM", "SOC", "Firewall", "IDS/IPS", "VPN", "MFA", "SOAR", "EDR",
];

export const megaMenuServices = [
  {
    items: [
      {
        label: "IT Infrastructure & Cloud",
        to: "/services/IT-Infrastructure-services",
      },
    ],
  },
  {
    items: [
      {
        label: "IT Staffing & Workforce",
        to: "/services/IT-staffing-services",
      },
    ],
  },
  {
    items: [
      {
        label: "Software Development",
        to: "/services/software-development",
      },
    ],
  },
  {
    items: [
      {
        label: "Digital Services",
        to: "/services/Digital-marketing-services",
      },
    ],
  },
  {
    items: [
      {
        label: "AI & Automation",
        to: "/services/AI-automation-services",
      },
    ],
  },
  {
    items: [
      {
        label: "Cybersecurity",
        to: "/services/cyber-security-services",
      },
    ],
  },
  {
    items: [
      {
        label: "BPO Services",
        to: "/services/business-process-outsourcing-services",
      },
    ],
  },
  {
    items: [
      {
        label: "Medical Coding & Billing",
        to: "/services/medical-coding-billing-services",
      },
    ],
  },
];

export const megaMenuAbout = [
  {
    title: "Company",
    items: [
      { label: "About Nexova TechZone", to: "/about-us/about-nexova" },
      { label: "Our Mission, Vision & Goals", to: "/about-us/mission-vision" },
      { label: "Why Choose Nexova", to: "/about-us/why-choose" },
      // { label: "Leadership Team", to: "/about-us/leadership" },
      { label: "Our Process", to: "/about-us/process" },
      { label: "Work Culture", to: "/about-us/culture" },
      { label: "Strategic Partnerships", to: "/about-us/partnerships" },
    ],
  },
  {
    title: "Trust & Growth",
    items: [
      { label: "Client Success Stories", to: "/about-us/success-stories" },
      { label: "Technology Stack", to: "/about-us/tech-stack" },
      { label: "Innovation & Research", to: "/about-us/innovation" },
      { label: "Global Presence", to: "/about-us/global-presence" },
    ],
  },
];

export const navLinks = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about-us" },
  { label: "Services", to: "/services" },
  { label: "Products", to: "/products" },
  // { label: "Industries", to: "/industries" },
  // { label: "Portfolio", to: "/portfolio" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Resources", to: "/resources" },
  { label: "Careers", to: "/careers" },
  { label: "Contact Us", to: "/contact" },
];
