import { PageIntro } from "@/components/layout/page-intro";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { practiceAreas } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "Practice areas",
  description: "LEX practice areas — corporate, venture, disputes, privacy, employment, real estate.",
  path: "/practice-areas/",
});

export default function PracticeAreasPage() {
  return (
    <>
      <PageIntro eyebrow="Practice areas" title="Where we open files.">
        Six chambers of work. Each area is numbered like a statute index — not a marketing grid.
      </PageIntro>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-8">
        <RevealStagger className="divide-y divide-rule border-y border-rule">
          {practiceAreas.map((area) => (
            <RevealItem key={area.slug}>
              <Link
                href={`/practice-areas/${area.slug}/`}
                className="group grid gap-5 py-10 no-underline md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,1.1fr)]"
              >
                <span className="docket-number m-0 pt-2">{area.number}</span>
                <div>
                  <h2 className="m-0 text-3xl text-ink transition-colors group-hover:text-seal md:text-4xl">
                    {area.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-muted">{area.summary}</p>
                </div>
                <ul className="m-0 list-none space-y-2 p-0 text-ink-soft">
                  {area.matters.map((matter) => (
                    <li key={matter} className="border-l border-rule pl-3">
                      {matter}
                    </li>
                  ))}
                </ul>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
        <Reveal className="mt-10">
          <p className="text-sm text-meta">All practice narratives are fictional demo content.</p>
        </Reveal>
      </section>
    </>
  );
}
