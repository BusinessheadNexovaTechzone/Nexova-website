import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/services/testing-qa");

export default function ServicesTestingQaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
