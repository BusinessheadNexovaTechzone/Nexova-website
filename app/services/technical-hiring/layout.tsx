import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/services/technical-hiring");

export default function ServicesTechnicalHiringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
