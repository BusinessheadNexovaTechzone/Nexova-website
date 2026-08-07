"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Layout } from "@/components/layout/Layout";
import { Search, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section-shell";

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: "service" | "page" | "blog";
  url: string;
  keywords?: string[];
}

const searchData: SearchResult[] = [
  // Services
  { id: "1", title: "Custom Software Development", description: "Bespoke software solutions tailored to your business", type: "service", url: "/services/custom-software", keywords: ["custom", "software", "development"] },
  { id: "2", title: "Web Development", description: "Fast, SEO-optimized websites and web applications", type: "service", url: "/services/website-development", keywords: ["web", "website", "development", "seo"] },
  { id: "3", title: "Mobile App Development", description: "Native iOS and Android applications", type: "service", url: "/services/mobile-app-development", keywords: ["mobile", "app", "ios", "android"] },
  { id: "4", title: "Cloud Computing", description: "Scalable cloud infrastructure and services", type: "service", url: "/services/cloud-computing", keywords: ["cloud", "infrastructure", "aws", "azure"] },
  { id: "5", title: "AI & Machine Learning", description: "Intelligent systems and automated solutions", type: "service", url: "/services/ai-machine-learning", keywords: ["ai", "machine learning", "automation", "intelligent"] },
  { id: "6", title: "Cybersecurity", description: "Advanced security solutions and threat protection", type: "service", url: "/services/cybersecurity", keywords: ["security", "cybersecurity", "protection", "threat"] },
  { id: "7", title: "UI/UX Design", description: "User-centered design for digital experiences", type: "service", url: "/services/ui-ux-design", keywords: ["design", "ui", "ux", "user experience"] },
  { id: "8", title: "Digital Marketing", description: "Strategic marketing campaigns and growth", type: "service", url: "/services/digital-marketing", keywords: ["marketing", "digital", "seo", "growth"] },
  { id: "9", title: "Enterprise Applications", description: "Mission-critical applications for large-scale operations", type: "service", url: "/services/enterprise-applications", keywords: ["enterprise", "application", "business"] },
  { id: "10", title: "SaaS Product Development", description: "From MVP to scaling with recurring revenue models", type: "service", url: "/services/saas-product-development", keywords: ["saas", "product", "development", "startup"] },
  // Pages
  { id: "p1", title: "Home", description: "Welcome to Nexova TechZone", type: "page", url: "/", keywords: ["home"] },
  { id: "p2", title: "Services", description: "Explore our comprehensive service offerings", type: "page", url: "/services", keywords: ["services", "offerings"] },
  { id: "p3", title: "About Us", description: "Learn about our company and team", type: "page", url: "/about", keywords: ["about", "company", "team"] },
  { id: "p4", title: "Products", description: "Our innovative product solutions", type: "page", url: "/products", keywords: ["products", "solutions"] },
];

export default function SearchPage() {
  const [query, setQuery] = useState<string>(() => {
    // Get search query from URL params if available
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("q") || "";
    }
    return "";
  });

  const results = useMemo(() => {
    if (!query.trim()) return searchData;

    const lowerQuery = query.toLowerCase();
    return searchData
      .filter((item) => {
        const titleMatch = item.title.toLowerCase().includes(lowerQuery);
        const descMatch = item.description.toLowerCase().includes(lowerQuery);
        const keywordMatch = item.keywords?.some((kw) =>
          kw.toLowerCase().includes(lowerQuery)
        );

        return titleMatch || descMatch || keywordMatch;
      })
      .sort((a, b) => {
        // Prioritize title matches
        const aTitle = a.title.toLowerCase().includes(lowerQuery);
        const bTitle = b.title.toLowerCase().includes(lowerQuery);

        if (aTitle && !bTitle) return -1;
        if (!aTitle && bTitle) return 1;
        return 0;
      });
  }, [query]);

  const resultsByType = useMemo(() => {
    return {
      services: results.filter((r) => r.type === "service"),
      pages: results.filter((r) => r.type === "page"),
    };
  }, [results]);

  const highlightQuery = (text: string) => {
    if (!query.trim()) return text;

    const parts = text.split(new RegExp(`(${query})`, "gi"));
    return parts.map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-yellow-200 font-semibold text-foreground">
          {part}
        </mark>
      ) : (
        part
      )
    );
  };

  return (
    <Layout>
      <Section className="py-16">
        <div className="mx-auto max-w-2xl">
          {/* Search Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground">Search</h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Find services, pages, and resources
            </p>
          </div>

          {/* Search Input */}
          <div className="mb-8 relative">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full rounded-lg border border-border bg-card px-4 py-4 pl-12 text-base text-foreground placeholder-muted-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
              autoFocus
            />
          </div>

          {/* Results */}
          {query.trim() && results.length === 0 ? (
            <div className="text-center py-12">
              <Search className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
              <h2 className="text-xl font-semibold text-foreground">No results found</h2>
              <p className="mt-2 text-muted-foreground">
                Try adjusting your search terms
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Services Results */}
              {resultsByType.services.length > 0 && (
                <div>
                  <h2 className="mb-4 text-lg font-semibold text-foreground">
                    Services ({resultsByType.services.length})
                  </h2>
                  <div className="space-y-3">
                    {resultsByType.services.map((result) => (
                      <Link
                        key={result.id}
                        href={result.url}
                        className="group block rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {highlightQuery(result.title)}
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {highlightQuery(result.description)}
                            </p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Pages Results */}
              {resultsByType.pages.length > 0 && (
                <div>
                  <h2 className="mb-4 text-lg font-semibold text-foreground">
                    Pages ({resultsByType.pages.length})
                  </h2>
                  <div className="space-y-3">
                    {resultsByType.pages.map((result) => (
                      <Link
                        key={result.id}
                        href={result.url}
                        className="group block rounded-lg border border-border bg-card p-4 transition-all hover:border-primary/50 hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                              {highlightQuery(result.title)}
                            </h3>
                            <p className="mt-1 text-sm text-muted-foreground">
                              {highlightQuery(result.description)}
                            </p>
                          </div>
                          <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </Section>
    </Layout>
  );
}
