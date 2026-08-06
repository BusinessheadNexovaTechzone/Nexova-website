import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/services/ai-assistants");

export default function ServicesAiAssistantsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
