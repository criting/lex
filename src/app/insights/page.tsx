import { PageIntro } from "@/components/layout/page-intro";
import { RevealItem, RevealStagger } from "@/components/motion/reveal";
import { ContentProvider, insights } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Insights",
  description: "LEX insights — memorandum-style notes for the boutique counsel template.",
  path: "/insights/",
});

export default function InsightsPage() {
  return (
    <>
      <PageIntro eyebrow="Insights" title="Memoranda for operators and boards.">
        Long titles, citations, and practice tags — an index, not a blog card wall. Demo content only.
      </PageIntro>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-8">
        <RevealStagger className="divide-y divide-rule border-y border-rule">
          {insights.map((item) => {
            const author = ContentProvider.getPerson(item.author);
            return (
              <RevealItem key={item.slug}>
                <Link
                  href={`/insights/${item.slug}/`}
                  className="grid gap-4 py-9 no-underline md:grid-cols-[9rem_minmax(0,1fr)_8rem]"
                >
                  <div>
                    <p className="text-mono m-0 text-brass">{item.citation ?? "Mem."}</p>
                    <p className="mt-2 m-0 text-sm text-meta">{item.date}</p>
                  </div>
                  <div>
                    <h2 className="m-0 text-2xl text-ink md:text-3xl">{item.title}</h2>
                    <p className="mt-3 max-w-2xl text-muted">{item.excerpt}</p>
                    <p className="mt-3 text-sm text-meta">
                      {author?.name ?? "Counsel"} · {item.practice}
                    </p>
                  </div>
                  <p className="text-mono m-0 md:justify-self-end">{item.readingTime}</p>
                </Link>
              </RevealItem>
            );
          })}
        </RevealStagger>
      </section>
    </>
  );
}
