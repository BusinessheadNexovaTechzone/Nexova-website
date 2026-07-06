"use client";

import Link from "next/link";

const cols = [
  {
    title: "SERVICES",
    items: [
      { label: "Custom Software", to: "/services/custom-software" },
      { label: "Web Development", to: "/services/website-development" },
      { label: "Mobile Apps", to: "/services/mobile-app-development" },
      { label: "Cloud Computing", to: "/services/cloud-computing" },
      { label: "AI & Machine Learning", to: "/services/ai-machine-learning" },
      { label: "Cybersecurity", to: "/services/cybersecurity" },
    ],
  },
  {
    title: "RESOURCES",
    items: [
      { label: "Services", to: "/services" },
      { label: "About Us", to: "/about" },
      { label: "Search", to: "/search" },
      { label: "Products", to: "/products" },
    ],
  },
  {
    title: "CONNECT",
    items: [
      { label: "LinkedIn", href: "https://www.linkedin.com/company/nexovatechzone/" },
      { label: "Twitter/X", href: "https://twitter.com" },
      { label: "Facebook", href: "https://facebook.com" },
      { label: "Instagram", href: "https://www.instagram.com/foodzo_software?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
      { label: "YouTube", href: "https://youtube.com" },
      // { label: "GitHub", href: "https://github.com" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_repeat(3,1fr)]">
          <div>
            <img src="/assets/logo.png" alt="Nexova Tech Zone" className="h-10 w-auto" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Empowering the world's most ambitious executives with high-impact software solutions and strategic technical oversight.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="text-xs font-bold tracking-[0.18em] text-muted-foreground">{c.title}</h4>
              <ul className="mt-5 space-y-3">
                {c.items.map((it) => (
                  <li key={it.label}>
                    {it.href ? (
                      <a href={it.href} target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground/85 transition-colors hover:text-primary">
                        {it.label}
                      </a>
                    ) : (
                      <Link href={it.to!} className="text-sm font-medium text-foreground/85 transition-colors hover:text-primary">
                        {it.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} NEXOVA TECH ZONE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-foreground transition-colors">PRIVACY</Link>
            {/* <a href="#" className="hover:text-foreground">TERMS</a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
