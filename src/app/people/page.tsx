import { PageIntro } from "@/components/layout/page-intro";
import { RevealItem, RevealStagger } from "@/components/motion/reveal";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { people } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";

export const metadata = pageMetadata({
  title: "People",
  description: "LEX counsel roster — fictional demo profiles for the boutique law template.",
  path: "/people/",
});

export default function PeoplePage() {
  return (
    <>
      <PageIntro eyebrow="People" title="Counsel who stay on the file.">
        A roster, not a team-grid of cards. Every profile below is fictional demo content.
      </PageIntro>

      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-8">
        <RevealStagger className="grid gap-10 md:grid-cols-2">
          {people.map((person) => (
            <RevealItem key={person.slug}>
              <Link href={`/people/${person.slug}/`} className="group grid gap-6 no-underline md:grid-cols-[0.9fr_1.1fr]">
                <PlaceholderFrame
                  label={`${person.name} · portrait`}
                  tone={person.tone}
                  aspect="portrait"
                />
                <div className="flex flex-col justify-end pb-2">
                  <p className="text-mono m-0 mb-3 text-brass">Counsel</p>
                  <h2 className="m-0 text-3xl text-ink transition-colors group-hover:text-seal md:text-4xl">
                    {person.name}
                  </h2>
                  <p className="mt-2 text-muted">{person.role}</p>
                  <p className="mt-4 text-ink-soft line-clamp-3">{person.bio[0]}</p>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealStagger>
      </section>
    </>
  );
}
