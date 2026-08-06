"use client";

import { cn } from "@/lib/utils";
import { Reveal } from "@/components/ui/reveal";

export function Section({
  children,
  className,
  id,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  containerClassName?: string;
}) {
  return (
    <section id={id} className={cn("py-10 md:py-14 lg:py-20", className)}>
      <div className={cn("mx-auto max-w-8xl px-4 sm:px-6 lg:px-8", containerClassName)}>
        <Reveal>{children}</Reveal>
      </div>
    </section>
  );
}

export function EyebrowChip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-[12px] font-bold uppercase tracking-[0.15em] text-primary transition-all duration-300 hover:shadow-[0_4px_16px_-2px_oklch(0.2_0.04_265_/_0.1)] hover:scale-105">
      <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  redPart,
  description,
  centered = true,
  titleClassName,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  redPart?: string;
  description?: string;
  centered?: boolean;
  titleClassName?: string;
}) {
  return (
    <Reveal direction="up" amount={0.18} delay={0.05}>
      <div className={cn("mb-8 md:mb-10", centered ? "text-center" : "")}> 
        {eyebrow && (
          <div className={cn("mb-4 md:mb-5", centered ? "flex justify-center" : "")}> 
            <EyebrowChip>{eyebrow}</EyebrowChip>
          </div>
        )}
        <h2 className={cn("text-2xl font-extrabold leading-tight text-navy sm:text-3xl md:text-4xl lg:text-5xl md:leading-tight lg:leading-[1.2]", titleClassName)}>
          {title} {redPart && <span className="text-gradient-red">{redPart}</span>}
        </h2>
        {description && (
          <p
            className={cn(
              "mt-6 text-base leading-relaxed text-muted-foreground md:mt-8 md:text-lg md:leading-relaxed lg:text-lg",
              centered && "mx-auto max-w-3xl"
            )}
          >
            {description}
          </p>
        )}
      </div>
    </Reveal>
  );
}
