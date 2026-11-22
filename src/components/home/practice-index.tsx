import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { practiceAreas } from "@/content/provider";
import Link from "next/link";

export function PracticeIndex() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="docket-number m-0 mb-3">01 · Practice</p>
            <h2 className="max-w-xl text-3xl text-ink md:text-5xl">
              A statute index, not a service grid.
            </h2>
          </div>
          <Link href="/practice-areas/" className="text-seal no-underline hover:text-seal-hover">
            View all practice areas →
          </Link>
        </div>
      </Reveal>

      <RevealStagger className="divide-y divide-rule border-y border-rule">
        {practiceAreas.map((area) => (
          <RevealItem key={area.slug}>
            <Link
              href={`/practice-areas/${area.slug}/`}
              className="group grid gap-4 py-7 no-underline transition-colors md:grid-cols-[5rem_1fr_1.2fr_auto] md:items-baseline"
            >
              <span className="docket-number m-0 text-brass">{area.number}</span>
              <span className="text-display text-2xl text-ink transition-colors group-hover:text-seal md:text-3xl">
                {area.title}
              </span>
              <span className="text-muted md:max-w-md">{area.summary}</span>
              <span className="text-mono self-center text-seal opacity-0 transition-opacity group-hover:opacity-100 md:justify-self-end">
                Open
              </span>
            </Link>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
