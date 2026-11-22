import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ReactNode } from "react";

export function ButtonLink({
  href,
  children,
  variant = "seal",
  className,
}: {
  href: string;
  children: ReactNode;
  variant?: "seal" | "ghost";
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn("btn", variant === "seal" ? "btn-seal" : "btn-ghost", className)}
    >
      {children}
    </Link>
  );
}
