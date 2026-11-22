"use client";

import { easeOutExpo } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";

export function MaskedLines({
  lines,
  className,
  as: Tag = "h1",
}: {
  lines: string[];
  className?: string;
  as?: "h1" | "h2" | "p";
}) {
  const reduce = useReducedMotion();

  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span key={`${line}-${i}`} className="block overflow-hidden py-[0.08em]">
          <motion.span
            className="block"
            initial={reduce ? false : { y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.95, delay: 0.12 + i * 0.1, ease: easeOutExpo }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
