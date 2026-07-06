import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
};

const base =
  "inline-flex items-center justify-center font-semibold rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<string, string> = {
  primary:
    "bg-gradient-crimson text-primary-foreground shadow-crimson hover:scale-[1.02]",
  outline:
    "border border-navy/20 text-navy bg-card hover:border-primary hover:text-primary",
  ghost: "text-navy hover:bg-muted",
  white: "bg-card text-navy hover:bg-card/90 shadow-soft",
};

const sizes: Record<string, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2",
};

export function Button({ className = "", variant = "primary", size = "md", ...props }: ButtonProps) {
  return <button className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}

export function LinkButton({
  to,
  children,
  variant = "primary",
  size = "md",
  className = "",
  withArrow = false,
}: {
  to: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  className?: string;
  withArrow?: boolean;
}) {
  return (
    <Link
     	href={to as never}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {withArrow && <ArrowRight className="h-4 w-4" />}
    </Link>
  );
}
