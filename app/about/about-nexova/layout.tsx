import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/about/about-nexova");

export default function AboutAboutNexovaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
