import { Reveal } from "@/components/motion/reveal";
import { ContentProvider, insights, practiceAreas } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = ContentProvider.getInsight(slug);
  if (!item) return {};
  return pageMetadata({
    title: item.title,
    description: item.excerpt,
    path: `/insights/${item.slug}/`,
  });
}

export default async function InsightPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = ContentProvider.getInsight(slug);
  if (!item) notFound();

  const author = ContentProvider.getPerson(item.author);
  const practice = practiceAreas.find((p) => p.slug === item.practice);

  return (
    <article>
      <header className="mx-auto max-w-[900px] px-5 pb-10 pt-14 md:px-8 md:pt-20">
        <Reveal>
          <p className="docket-number m-0 mb-4">{item.citation ?? "Memorandum"}</p>
          <h1 className="text-4xl text-ink md:text-5xl">{item.title}</h1>
          <p className="mt-6 text-lg text-muted">{item.excerpt}</p>
          <p className="mt-6 text-sm text-meta">
            {item.date} · {item.readingTime}
            {author ? (
              <>
                {" · "}
                <Link href={`/people/${author.slug}/`} className="text-seal no-underline">
                  {author.name}
                </Link>
              </>
            ) : null}
            {practice ? (
              <>
                {" · "}
                <Link
                  href={`/practice-areas/${practice.slug}/`}
                  className="text-seal no-underline"
                >
                  {practice.title}
                </Link>
              </>
            ) : null}
          </p>
        </Reveal>
      </header>

      <section className="mx-auto max-w-[900px] px-5 pb-20 md:px-8">
        <Reveal>
          <div className="prose-lex border-t border-rule pt-10">
            {item.body.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <p className="mt-10 text-sm text-meta">
            Fictional demo insight for template preview — not legal advice.
          </p>
          <Link href="/insights/" className="mt-8 inline-block text-seal no-underline hover:text-seal-hover">
            ← Insights index
          </Link>
        </Reveal>
      </section>
    </article>
  );
}
