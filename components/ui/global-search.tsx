"use client";

import { useState, useCallback, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, X } from "lucide-react";

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "service" | "page" | "blog";
  url: string;
}

const searchData: SearchResult[] = [
  // Services
  { id: "1", title: "Custom Software Development", description: "Bespoke software solutions tailored to your business", type: "service", url: "/services/custom-software" },
  { id: "2", title: "Web Development", description: "Fast, SEO-optimized websites and web applications", type: "service", url: "/services/website-development" },
  { id: "3", title: "Mobile App Development", description: "Native iOS and Android applications", type: "service", url: "/services/mobile-app-development" },
  { id: "4", title: "Cloud Computing", description: "Scalable cloud infrastructure and services", type: "service", url: "/services/cloud-computing" },
  { id: "5", title: "AI & Machine Learning", description: "Intelligent systems and automated solutions", type: "service", url: "/services/ai-machine-learning" },
  { id: "6", title: "Cybersecurity", description: "Advanced security solutions and threat protection", type: "service", url: "/services/cybersecurity" },
  { id: "7", title: "UI/UX Design", description: "User-centered design for digital experiences", type: "service", url: "/services/ui-ux-design" },
  { id: "8", title: "Digital Marketing", description: "Strategic marketing campaigns and growth", type: "service", url: "/services/digital-marketing" },
  // Pages
  { id: "p1", title: "Home", description: "Welcome to Nexova TechZone", type: "page", url: "/" },
  { id: "p2", title: "Services", description: "Explore our comprehensive service offerings", type: "page", url: "/services" },
  { id: "p3", title: "About Us", description: "Learn about our company and team", type: "page", url: "/about" },
  { id: "p4", title: "Products", description: "Our innovative product solutions", type: "page", url: "/products" },
];

export function GlobalSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  // Filter results based on query
  const filteredResults = useCallback(() => {
    if (!query.trim()) return [];
    
    const lowerQuery = query.toLowerCase();
    return searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(lowerQuery) ||
        item.description.toLowerCase().includes(lowerQuery)
    );
  }, [query]);

  useEffect(() => {
    setResults(filteredResults());
    setSelectedIndex(0);
  }, [query, filteredResults]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
        break;
      case "Enter":
        e.preventDefault();
        if (results[selectedIndex]) {
          handleSelect(results[selectedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setQuery("");
        break;
    }
  };

  const handleSelect = (result: SearchResult) => {
    router.push(result.url);
    setIsOpen(false);
    setQuery("");
  };

  return (
    <div className="relative w-full max-w-md">
      {/* Search Input */}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search services, pages..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          className="w-full rounded-lg border border-border bg-card px-4 py-2 pl-10 text-sm text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none"
        />
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        {query && (
          <button
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Results Dropdown */}
      {isOpen && (query.trim() || results.length > 0) && (
        <div
          ref={resultsRef}
          className="absolute top-full left-0 right-0 z-50 mt-2 max-h-96 overflow-y-auto rounded-lg border border-border bg-card shadow-lg"
        >
          {results.length === 0 ? (
            <div className="px-4 py-6 text-center text-sm text-muted-foreground">
              {query.trim() ? "No results found" : "Start typing to search"}
            </div>
          ) : (
            <div className="divide-y divide-border">
              {results.map((result, index) => (
                <button
                  key={result.id}
                  onClick={() => handleSelect(result)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full px-4 py-3 text-left transition-colors ${
                    index === selectedIndex
                      ? "bg-primary/10 text-foreground"
                      : "hover:bg-muted text-foreground/85"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <p className="font-medium">{result.title}</p>
                      <p className="text-xs text-muted-foreground">{result.description}</p>
                    </div>
                    <span className="ml-2 whitespace-nowrap rounded bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
                      {result.type}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
