import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { ContentProvider, people, practiceAreas } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return people.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = ContentProvider.getPerson(slug);
  if (!person) return {};
  return pageMetadata({
    title: person.name,
    description: person.role,
    path: `/people/${person.slug}/`,
  });
}

export default async function PersonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = ContentProvider.getPerson(slug);
  if (!person) notFound();

  const focus = practiceAreas.filter((p) => person.focus.includes(p.slug));

  return (
    <article>
      <section className="mx-auto grid max-w-[1400px] gap-10 px-5 pb-16 pt-14 md:grid-cols-[0.85fr_1.15fr] md:px-8 md:pt-20">
        <Reveal>
          <PlaceholderFrame
            label={`${person.name} · editorial portrait placeholder`}
            tone={person.tone}
            aspect="portrait"
          />
        </Reveal>
        <Reveal delay={0.08}>
          <p className="docket-number m-0 mb-4">Counsel</p>
          <h1 className="text-4xl text-ink md:text-6xl">{person.name}</h1>
          <p className="mt-3 text-lg text-muted">{person.role}</p>
          <div className="prose-lex mt-8">
            {person.bio.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <dl className="mt-10 grid gap-6 border-t border-rule pt-8 sm:grid-cols-2">
            <div>
              <dt className="text-mono m-0">Admissions</dt>
              <dd className="m-0 mt-2 text-ink-soft">{person.admissions.join(" · ")}</dd>
            </div>
            <div>
              <dt className="text-mono m-0">Languages</dt>
              <dd className="m-0 mt-2 text-ink-soft">{person.languages.join(" · ")}</dd>
            </div>
          </dl>
          <div className="mt-8">
            <ButtonLink href={`mailto:${person.email}`}>Email {person.name.split(" ")[0]}</ButtonLink>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-rule bg-stone-raised/40">
        <div className="mx-auto max-w-[1400px] px-5 py-14 md:px-8">
          <p className="docket-number m-0 mb-6">Focus</p>
          <ul className="m-0 flex list-none flex-wrap gap-3 p-0">
            {focus.map((area) => (
              <li key={area.slug}>
                <Link
                  href={`/practice-areas/${area.slug}/`}
                  className="border border-rule px-4 py-2 text-sm text-ink no-underline hover:border-seal hover:text-seal"
                >
                  {area.number} · {area.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Link href="/people/" className="text-seal no-underline hover:text-seal-hover">
              ← All counsel
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
