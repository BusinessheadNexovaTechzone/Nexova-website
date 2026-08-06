"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { megaMenuServices } from "@/lib/services";

interface MobileServiceMenuProps {
  onClose: () => void;
}

export function MobileServiceMenu({ onClose }: MobileServiceMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const pathname = usePathname();
  const isActive = pathname === "/services" || pathname.startsWith("/services/");

  return (
    <div className="space-y-2">
      <div className={`rounded-md px-4 py-3 text-sm font-medium bg-muted ${isActive ? "text-primary" : "text-foreground/80"}`}>
        Services
      </div>
      {megaMenuServices.map((category) => (
        <div key={category.title}>
          <button
            onClick={() => setExpandedCategory(expandedCategory === category.title ? null : category.title)}
            className="w-full flex items-center justify-between px-6 py-2 text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300"
          >
            {category.title}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${expandedCategory === category.title ? "rotate-180" : ""}`}
            />
          </button>
          {expandedCategory === category.title && (
            <div className="space-y-1.5 bg-muted/50 px-6 py-3">
              {category.items.map((item) => (
                <Link
                  key={item.to}
                 	href={item.to}
                  onClick={onClose}
                  className="block text-xs text-foreground/60 hover:text-primary transition-colors duration-200 py-2 pl-2 border-l border-border/40 hover:border-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
