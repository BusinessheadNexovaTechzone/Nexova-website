"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { megaMenuAbout } from "@/lib/services";

interface MobileAboutMenuProps {
  onClose: () => void;
}

export function MobileAboutMenu({ onClose }: MobileAboutMenuProps) {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const pathname = usePathname();
  const isActive = pathname === "/about-us" || pathname.startsWith("/about-us/");

  return (
    <div className="space-y-2">
      <div className={`rounded-md px-4 py-3 text-sm font-medium bg-muted ${isActive ? "text-primary" : "text-foreground/80"}`}>
        About Us
      </div>
      {megaMenuAbout.map((category) => (
        <div key={category.title}>
          <button
            onClick={() =>
              setExpandedCategory(expandedCategory === category.title ? null : category.title)
            }
            className="w-full flex items-center justify-between rounded-md px-4 py-3 text-sm font-medium text-foreground/80 transition-colors duration-300 hover:text-primary hover:bg-muted"
          >
            {category.title}
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-300 ${
                expandedCategory === category.title ? "rotate-180" : ""
              }`}
            />
          </button>

          {expandedCategory === category.title && (
            <div className="bg-muted/40 rounded-md ml-4 mt-2 space-y-1 py-2 px-2">
              {category.items.map((item) => (
                <Link
                  key={item.to}
                 	href={item.to}
                  onClick={onClose}
                  className="block rounded-md px-3 py-2 text-sm text-foreground/70 hover:text-primary hover:bg-muted transition-colors"
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
