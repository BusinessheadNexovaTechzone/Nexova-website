import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/services/ai-chatbots");

export default function ServicesAiChatbotsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
