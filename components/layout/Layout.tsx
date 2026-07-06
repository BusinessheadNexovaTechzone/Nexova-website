"use client";

import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-hero-soft">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
