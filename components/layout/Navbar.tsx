"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { navLinks } from "@/lib/services";
import { GlobalSearch } from "@/components/ui/global-search";
import { MegaMenu } from "./MegaMenu";
import { MobileServiceMenu } from "./MobileServiceMenu";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const getLinkClass = (to: string) => {
    const isActive = to === "/"
      ? pathname === "/"
      : pathname === to || pathname.startsWith(to + "/");

    return `text-base font-medium px-2 py-2 rounded-md transition-colors duration-300 ${
      isActive ? "text-primary" : "text-foreground/75 hover:text-primary"
    }`;
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-8xl items-center justify-between px-4 sm:px-6 lg:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/assets/logo.png" alt="Nexova Tech Zone" className="h-9 w-auto md:h-10" />
        </Link>
        <nav className="hidden items-center gap-8  md:flex flex-1 ml-12">
          {navLinks.map((l) => 
            l.label === "Services" ? (
              <MegaMenu key={l.to} />
            ) : (
              <Link
                key={l.to}
                href={l.to}
                className={getLinkClass(l.to)}
              >
                {l.label}
              </Link>
            )
          )}
        </nav>
        {/* <div className="hidden md:flex md:max-w-xs">
          <GlobalSearch />
        </div> */}
        <div className="hidden md:block shrink-0">
          <Link
           	href="/contact"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-semibold text-primary-foreground shadow-[var(--shadow-red)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_oklch(0.55_0.22_25_/_0.35)]"
          >
            Book Free Consultation
          </Link>
        </div>
        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-md transition-colors duration-300 hover:bg-muted md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="border-t border-border bg-background px-4 py-6 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((l) =>
              l.label === "Services" ? (
                <MobileServiceMenu key={l.to} onClose={() => setOpen(false)} />
              ) : (
                <Link
                  key={l.to}
                 	href={l.to}
                  onClick={() => setOpen(false)}
                  className={`rounded-md px-4 py-4 text-base font-medium transition-colors duration-300 ${pathname === l.to || pathname.startsWith(l.to + "/") ? "text-primary" : "text-foreground/80 hover:text-primary hover:bg-muted"}`}
                >
                  {l.label}
                </Link>
              )
            )}
            <Link
             	href="/contact"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-red)]"
            >
              Book Free Consultation
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
