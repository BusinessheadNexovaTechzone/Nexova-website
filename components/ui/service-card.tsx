"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Service } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";
import { getIcon } from "@/lib/icon-mapper";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = getIcon(service.icon);
  return (
    <Link href={service.to} className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
      <motion.div
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="h-full"
      >
        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-5 w-5" />
        </div>
        <h3 className="text-base font-bold text-navy">{service.title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{service.short}</p>
        <div className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-primary">
          Details <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </motion.div>
    </Link>
  );
}
