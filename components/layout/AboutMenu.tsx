"use client";

import Link from "next/link";
import { ChevronDown, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { megaMenuAbout } from "@/lib/services";

export function AboutMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open]);

  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-sm font-medium transition-colors duration-300 ${
          open || pathname === "/about" || pathname.startsWith("/about/")
            ? "text-primary"
            : "text-foreground/75 hover:text-primary"
        }`}
      >
        About Us
        <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="fixed left-1/2 top-20 z-50 w-[min(900px,calc(100vw-2rem))] -translate-x-1/2 overflow-hidden rounded-lg border border-border/60 bg-background shadow-2xl">
          <div className="flex items-center justify-between p-4 border-b border-border/40">
            <h2 className="text-lg font-semibold text-foreground">About Us</h2>
            <button
              onClick={() => setOpen(false)}
              className="p-1 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>
          </div>

          <div className="max-h-[calc(100vh-10rem)] overflow-y-auto p-8">
            <div className="grid grid-cols-2 gap-8">
              {megaMenuAbout.map((category) => (
                <div key={category.title}>
                  <h3 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border/40">
                    {category.title}
                  </h3>
                  <ul className="space-y-2.5">
                    {category.items.map((item) => (
                      <li key={item.to}>
                        <Link
                         	href={item.to}
                          className="text-sm text-foreground/70 hover:text-primary transition-colors duration-200 block py-1"
                          onClick={() => setOpen(false)}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
