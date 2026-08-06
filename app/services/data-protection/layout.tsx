import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/services/data-protection");

export default function ServicesDataProtectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
