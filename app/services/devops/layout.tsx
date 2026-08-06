import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/services/devops");

export default function ServicesDevopsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
