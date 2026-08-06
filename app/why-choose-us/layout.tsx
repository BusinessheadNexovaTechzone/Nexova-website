import type { Metadata } from "next";
import { createCanonicalMetadata } from "@/lib/seo";

export const metadata: Metadata = createCanonicalMetadata("/why-choose-us");

export default function WhyChooseUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
