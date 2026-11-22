import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import {
  ContentProvider,
  insights,
  people,
  practiceAreas,
} from "@/content/provider";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return practiceAreas.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = ContentProvider.getPractice(slug);
  if (!area) return {};
  return pageMetadata({
    title: area.title,
    description: area.summary,
    path: `/practice-areas/${area.slug}/`,
  });
}

export default async function PracticeAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = ContentProvider.getPractice(slug);
  if (!area) notFound();

  const counsel = people.filter((p) => area.relatedPeople.includes(p.slug));
  const related = insights.filter((i) => area.relatedInsights.includes(i.slug));
  const index = practiceAreas.findIndex((p) => p.slug === area.slug);
  const prev = practiceAreas[(index - 1 + practiceAreas.length) % practiceAreas.length];
  const next = practiceAreas[(index + 1) % practiceAreas.length];

  return (
    <article>
      <section className="mx-auto max-w-[1400px] px-5 pb-10 pt-14 md:px-8 md:pt-20">
        <Reveal>
          <p className="docket-number m-0 mb-4">Practice · {area.number}</p>
          <h1 className="max-w-4xl text-4xl text-ink md:text-6xl">{area.title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">{area.summary}</p>
        </Reveal>
      </section>

      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-16 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <Reveal>
          <div className="prose-lex">
            {area.overview.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <ul className="mt-8 list-none space-y-3 border-t border-rule p-0 pt-8">
            {area.matters.map((matter) => (
              <li key={matter} className="flex gap-3 text-ink-soft">
                <span className="text-brass">▸</span>
                {matter}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={0.1}>
          <PlaceholderFrame
            label={`${area.title} · chamber still`}
            tone={area.tone}
            aspect="landscape"
          />
        </Reveal>
      </section>

      <section className="border-y border-rule bg-stone-raised/40">
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 py-16 md:grid-cols-2 md:px-8">
          <div>
            <p className="docket-number m-0 mb-4">Counsel</p>
            <ul className="m-0 list-none space-y-4 p-0">
              {counsel.map((person) => (
                <li key={person.slug}>
                  <Link
                    href={`/people/${person.slug}/`}
                    className="text-display text-2xl text-ink no-underline hover:text-seal"
                  >
                    {person.name}
                  </Link>
                  <p className="m-0 text-sm text-muted">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="docket-number m-0 mb-4">Related insights</p>
            <ul className="m-0 list-none space-y-4 p-0">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/insights/${item.slug}/`}
                    className="text-ink no-underline hover:text-seal"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-between gap-4 px-5 py-12 md:px-8">
        <Link href={`/practice-areas/${prev.slug}/`} className="text-muted no-underline hover:text-seal">
          ← {prev.title}
        </Link>
        <ButtonLink href="/contact/">Discuss this practice</ButtonLink>
        <Link href={`/practice-areas/${next.slug}/`} className="text-muted no-underline hover:text-seal">
          {next.title} →
        </Link>
      </section>
    </article>
  );
}
