import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/services/security-audits");

export default function ServicesSecurityAuditsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
