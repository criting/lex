"use client";

import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { people } from "@/content/provider";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

export function CounselRoster() {
  const reduce = useReducedMotion();
  const featured = people.slice(0, 4);

  return (
    <section className="border-y border-rule bg-stone-raised/50">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
        <Reveal>
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="docket-number m-0 mb-3">02 · People</p>
              <h2 className="max-w-xl text-3xl text-ink md:text-5xl">Counsel roster</h2>
              <p className="mt-4 max-w-lg text-muted">
                Named partners stay on the file. Demo profiles are fictional — replace before launch.
              </p>
            </div>
            <Link href="/people/" className="text-seal no-underline hover:text-seal-hover">
              Meet the counsel →
            </Link>
          </div>
        </Reveal>

        <RevealStagger className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {featured.map((person) => (
            <RevealItem key={person.slug}>
              <Link href={`/people/${person.slug}/`} className="group block no-underline">
                <motion.div
                  whileHover={reduce ? undefined : { y: -4 }}
                  transition={{ type: "spring", stiffness: 320, damping: 24 }}
                >
                  <PlaceholderFrame
                    label={`${person.name} · portrait placeholder`}
                    tone={person.tone}
                    aspect="portrait"
                  />
                  <p className="mt-4 mb-1 text-display text-2xl text-ink group-hover:text-seal">
                    {person.name}
                  </p>
                  <p className="m-0 text-sm text-muted">{person.role}</p>
                </motion.div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
