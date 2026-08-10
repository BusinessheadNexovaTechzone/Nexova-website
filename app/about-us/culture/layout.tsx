import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/about-us/culture");

export default function AboutCultureLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
