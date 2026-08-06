import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/about/tech-stack");

export default function AboutTechStackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
