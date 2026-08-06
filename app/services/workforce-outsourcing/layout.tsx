import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/services/workforce-outsourcing");

export default function ServicesWorkforceOutsourcingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
