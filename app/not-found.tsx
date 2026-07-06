import Link from "next/link";
import { Layout } from "@/components/layout/Layout";

export default function NotFoundPage() {
  return (
    <Layout>
      <section className="mx-auto flex min-h-[calc(100vh-8rem)] max-w-6xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary/90">Page not found</p>
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-navy sm:text-6xl">404</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-foreground/80 sm:text-xl">
          The page you are looking for does not exist, has been moved, or is temporarily unavailable.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-8px_oklch(0.55_0.22_25_/_0.35)]"
          >
            Back to Home
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-full border border-border bg-card px-7 py-3 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5"
          >
            Explore Services
          </Link>
        </div>
      </section>
    </Layout>
  );
}
