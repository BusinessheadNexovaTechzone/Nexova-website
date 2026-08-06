import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/products/automation-bot");

export default function ProductsAutomationBotLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
