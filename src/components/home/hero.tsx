"use client";

import { MaskedLines } from "@/components/motion/masked-lines";
import { ButtonLink } from "@/components/ui/button-link";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { site } from "@/content/provider";
import { easeOutExpo } from "@/lib/motion";
import { motion, useReducedMotion } from "motion/react";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden">
      <div className="chamber-panel absolute inset-0 -z-10" />
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-16 pt-16 md:grid-cols-[1.05fr_0.95fr] md:items-end md:px-8 md:pb-24 md:pt-24">
        <div>
          <motion.p
            className="docket-number m-0 mb-6"
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOutExpo }}
          >
            Boutique counsel · Docket 00
          </motion.p>
          <MaskedLines
            className="text-[clamp(3.4rem,9vw,7.5rem)] text-ink"
            lines={[site.wordmark]}
          />
          <motion.p
            className="mt-6 max-w-xl text-lg text-ink-soft md:text-xl"
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.75, ease: easeOutExpo }}
          >
            Precise matters for founders, operators, and private clients — chamber authority
            without theatre.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.7, ease: easeOutExpo }}
          >
            <ButtonLink href="/contact/">Request consultation</ButtonLink>
            <ButtonLink href="/practice-areas/" variant="ghost">
              Practice areas
            </ButtonLink>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 1.1, ease: easeOutExpo }}
        >
          <PlaceholderFrame
            label="Chamber visual — cool stone light · replace with photography"
            tone="#1a4d5c"
            aspect="hero"
            className="min-h-[280px] shadow-[0_30px_80px_rgba(14,20,25,0.12)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
