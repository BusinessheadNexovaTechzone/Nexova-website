import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/about-us/why-choose");

export default function AboutWhyChooseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
