import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { insights } from "@/content/provider";
import Link from "next/link";

export function InsightsStrip() {
  const items = insights.slice(0, 3);

  return (
    <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-8 md:py-28">
      <Reveal>
        <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="docket-number m-0 mb-3">03 · Insights</p>
            <h2 className="max-w-xl text-3xl text-ink md:text-5xl">Memoranda, not posts.</h2>
          </div>
          <Link href="/insights/" className="text-seal no-underline hover:text-seal-hover">
            Insights index →
          </Link>
        </div>
      </Reveal>

      <RevealStagger className="space-y-0 divide-y divide-rule border-y border-rule">
        {items.map((item) => (
          <RevealItem key={item.slug}>
            <Link
              href={`/insights/${item.slug}/`}
              className="grid gap-3 py-8 no-underline md:grid-cols-[8rem_1fr_auto] md:items-baseline"
            >
              <span className="text-mono m-0 text-brass">{item.citation ?? item.date}</span>
              <span>
                <span className="text-display block text-2xl text-ink md:text-3xl">{item.title}</span>
                <span className="mt-2 block max-w-2xl text-muted">{item.excerpt}</span>
              </span>
              <span className="text-mono text-seal">{item.readingTime}</span>
            </Link>
          </RevealItem>
        ))}
      </RevealStagger>
    </section>
  );
}
