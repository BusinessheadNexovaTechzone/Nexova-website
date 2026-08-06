"use client";

import Link from "next/link";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { SVGProps } from "react";

type FooterIcon = LucideIcon | React.ComponentType<SVGProps<SVGSVGElement>>;

function ThreadsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M7.5 12.5c1.8-4 5.6-5 7.5-4 1.9 1 2.5 3.4 1.5 6-1 2.6-3.8 4.6-6.5 4.5-2.7-.1-4.8-2.3-4.5-5 .2-1.7 1.6-3.4 3.5-3.5 2.5-.2 4.5 1.6 4.5 3.5 0 1.9-1.8 3.5-3.5 3.5-1.7 0-3.5-1.4-3.5-3.5" />
    </svg>
  );
}

const cols: {
  title: string;
  items: Array<{
    label: string;
    to?: string;
    href?: string;
    icon?: FooterIcon;
  }>;
}[] = [
  {
    title: "SERVICES",
    items: [
      { label: "IT Infrastructure & Cloud", to: "/services/cloud-infrastructure" },
      { label: "IT Staffing & Workforce", to: "/services/contract-it-staffing" },
      { label: "Software Development", to: "/services/custom-software" },
      { label: "Digital Services", to: "/services/website-development" },
      { label: "AI & Automation ", to: "/services/ai-assistants" },
       { label: "Cybersecurity", to: "/services/security-audits" },
     
     
     
      { label: "BPO Services", to: "/services/bpo-services" },
      {
        label: "Medical Coding & Billing",
        to: "/services/medical-coding-billing-services",
      },
    ],
  },
  {
    title: "CONNECT",
    items: [
      {
        label: "LinkedIn",
        href: "https://www.linkedin.com/company/nexovatechzone/",
        icon: Linkedin,
      },
      {
        label: "Threads",
        href: "https://www.threads.com/@nexova_techzone",
        icon: ThreadsIcon,
      },
      {
        label: "Facebook",
        href: "https://www.facebook.com/people/Nexova-TechZone/61590544350805/",
        icon: Facebook,
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/nexova_techzone/",
        icon: Instagram,
      },
      {
        label: "YouTube",
        href: "https://www.youtube.com/@Nexovatechzone",
        icon: Youtube,
      },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-card/60 backdrop-blur-lg">
      <div className="mx-auto max-w-8xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <img
              src="/assets/logo.png"
              alt="Nexova Tech Zone"
              className="h-10 w-auto"
            />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Empowering the world's most ambitious executives with high-impact
              software solutions and strategic technical oversight.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-sm font-extrabold tracking-[0.18em] text-muted-foreground mb-4">
                {c.title}
              </h4>
              <ul className="mt-5 space-y-3">
                {c.items.map((it) => {
                  const Icon = it.icon;
                  // Detect social icons and render brand logos instead of Lucide icons
                  const isSocial =
                    Icon === Linkedin ||
                    Icon === Facebook ||
                    Icon === Instagram ||
                    Icon === Youtube ||
                    Icon === ThreadsIcon;

                  const socialFile = Icon === Linkedin
                    ? "linkedin.svg"
                    : Icon === Facebook
                    ? "facebook.svg"
                    : Icon === Instagram
                    ? "instagram.svg"
                    : Icon === Youtube
                    ? "youtube.svg"
                    : Icon === ThreadsIcon
                    ? "threads.svg"
                    : null;

                  return (
                    <li key={it.label}>
                      {it.href ? (
                        // External link (CONNECT column)
                        <a
                          href={it.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-3 group"
                        >
                          {isSocial && socialFile ? (
                            <span className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-border p-2 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-2xl group-hover:border-primary ease-out">
                              <img
                                src={`/assets/social/${socialFile}`}
                                alt={it.label}
                                className="h-6 w-6 transition-transform duration-500 group-hover:scale-110"
                              />
                            </span>
                          ) : Icon ? (
                            <Icon className="h-4 w-4 text-primary" />
                          ) : null}

                          <span className="text-sm font-medium text-foreground/85 transition-transform duration-300 group-hover:translate-x-1">
                            {it.label}
                          </span>
                        </a>
                      ) : (
                        // Internal link
                        <Link
                          href={it.to!}
                          className="inline-flex items-center gap-3 group"
                        >
                          {isSocial && socialFile ? (
                            <span className="flex items-center justify-center h-12 w-12 rounded-xl bg-white/5 border border-border p-2 shadow-sm transition-all duration-500 group-hover:-translate-y-2 group-hover:scale-110 group-hover:shadow-2xl group-hover:border-primary ease-out">
                              <img
                                src={`/assets/social/${socialFile}`}
                                alt={it.label}
                                className="h-6 w-6 transition-transform duration-500 group-hover:scale-110"
                              />
                            </span>
                          ) : Icon ? (
                            <Icon className="h-4 w-4 text-primary" />
                          ) : null}

                          <span className="text-sm font-medium text-foreground/85 transition-transform duration-300 group-hover:translate-x-1">
                            {it.label}
                          </span>
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          <div className="space-y-4 sm:flex sm:items-start sm:justify-between sm:gap-6">
            <div>
              <div className="mt-3 space-y-3 text-sm leading-relaxed text-foreground/85">
                <p className="font-semibold">Contact Details</p>
                <div className="rounded-xl p-3 bg-card/80 border border-border transition-all duration-500 hover:shadow-2xl hover:border-primary flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <span>+91 7810001706</span>
                </div>
                <div className="rounded-xl p-3 bg-card/80 border border-border transition-all duration-500 hover:shadow-2xl hover:border-primary flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <span>businesshead@nexovatechzone.com</span>
                </div>
                <div className="rounded-xl p-3 bg-card/80 border border-border transition-all duration-500 hover:shadow-2xl hover:border-primary flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <div className="space-y-1">
                    <p>NexovaTechzone, Head Office</p>
                    <p>No1/2 Dharmambal Palaniappan Complex</p>
                    <p>First Floor, Mount Poonamallee Rd</p>
                    <p>Near A2B Restaurant, Ramapuram, Nandambakkam</p>
                    <p>Chennai, Tamil Nadu - 600089.</p>
                  </div>
                </div>
              </div>
            </div>
            <p>
              © {new Date().getFullYear()} NEXOVA TECH ZONE. ALL RIGHTS
              RESERVED.
            </p>
            <div className="flex gap-6 pt-3 sm:pt-0">
              <Link
                href="/privacy"
                className="hover:text-foreground transition-colors transform-gpu duration-300 hover:translate-x-1"
              >
                PRIVACY
              </Link>
              {/* <a href="#" className="hover:text-foreground">TERMS</a> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}