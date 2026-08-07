"use client";

import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiThreadsFill } from "react-icons/ri";
import type { LucideIcon } from "lucide-react";
import type { SVGProps } from "react";

type FooterIcon = LucideIcon | React.ComponentType<SVGProps<SVGSVGElement>>;

const cols: {
  title: string;
  items: Array<{
    label?: string;
    to?: string;
    href?: string;
    icon?: FooterIcon;
  }>;
}[] = [
  {
    title: "SERVICES",
    items: [
      { label: "IT Infrastructure & Cloud", to: "/services/IT-Infrastructure-services" },
      { label: "IT Staffing & Workforce", to: "/services/IT-staffing-services" },
      { label: "Software Development", to: "/services/software-development" },
      { label: "Digital Services", to: "/services/Digital-marketing-services" },
      { label: "AI & Automation ", to: "/services/AI-automation-services" },
       { label: "Cybersecurity", to: "/services/cyber-security-services" },
     
     
     
      { label: "BPO Services", to: "/services/business-process-outsourcing-services" },
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
        // label: "LinkedIn",
        href: "https://www.linkedin.com/company/nexovatechzone/",
        icon: FaLinkedinIn,
      },
      {
        // label: "Threads",
        href: "https://www.threads.com/@nexova_techzone",
        icon: RiThreadsFill,
      },
      {
        // label: "Facebook",
        href: "https://www.facebook.com/people/Nexova-TechZone/61590544350805/",
        icon: FaFacebookF,
      },
      {
        // label: "Instagram",
        href: "https://www.instagram.com/nexova_techzone/",
        icon: FaInstagram,
      },
      {
        // label: "YouTube",
        href: "https://www.youtube.com/@Nexovatechzone",
        icon: FaYoutube,
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
            <p className="mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
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

                  return (
                    <li key={it.label}>
                      {it.href ? (
                        // External link (CONNECT column)
                        <a
                          href={it.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={Icon ? "inline-flex items-center gap-3 group" : "group"}
                        >
                          {Icon && (
                            <span
                              className="
                                flex h-12 w-12 items-center justify-center
                                rounded-xl border border-border
                                bg-card shadow-sm
                                transition-all duration-500
                                group-hover:-translate-y-2
                                group-hover:scale-110
                                group-hover:border-primary
                                group-hover:shadow-xl
                              "
                            >
                              <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-6" />
                            </span>
                          )}

                          <span className="text-sm font-medium text-foreground/85 transition-transform duration-300 group-hover:translate-x-1">
                            {it.label}
                          </span>
                        </a>
                      ) : (
                        // Internal link
                        <Link
                          href={it.to!}
                          className={Icon ? "inline-flex items-center gap-3 group" : "group"}
                        >
                          {Icon && (
                            <span
                              className="
                                flex h-12 w-12 items-center justify-center
                                rounded-xl border border-border
                                bg-card shadow-sm
                                transition-all duration-500
                                group-hover:-translate-y-2
                                group-hover:scale-110
                                group-hover:border-primary
                                group-hover:shadow-xl
                              "
                            >
                              <Icon className="h-5 w-5 text-primary transition-transform duration-300 group-hover:rotate-6" />
                            </span>
                          )}

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
              © {new Date().getFullYear()} NEXOVA TECHZONE. ALL RIGHTS
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