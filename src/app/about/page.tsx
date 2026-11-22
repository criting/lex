import { PageIntro } from "@/components/layout/page-intro";
import { Reveal, RevealItem, RevealStagger } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { PlaceholderFrame } from "@/components/ui/placeholder-frame";
import { about } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "About",
  description: "About LEX — boutique counsel positioning for the Veltri law template.",
  path: "/about/",
});

export default function AboutPage() {
  return (
    <>
      <PageIntro eyebrow="About" title="Small counsel. Clear writing.">
        Chamber authority without ambulance-chaser clichés — and without FORMA’s creative-studio paper.
      </PageIntro>

      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-16 md:grid-cols-[1.1fr_0.9fr] md:px-8">
        <Reveal>
          <div className="prose-lex">
            {about.statement.map((para) => (
              <p key={para}>{para}</p>
            ))}
          </div>
          <p className="mt-8 text-sm text-meta">{about.chambers}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <PlaceholderFrame
            label="Chambers atmosphere — stone light · brass detail"
            tone="#8b7355"
            aspect="landscape"
          />
        </Reveal>
      </section>

      <section className="border-y border-rule bg-stone-raised/50">
        <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-8">
          <p className="docket-number m-0 mb-8">Approach</p>
          <RevealStagger className="grid gap-8 md:grid-cols-3">
            {about.approach.map((item, i) => (
              <RevealItem key={item.title}>
                <p className="docket-number m-0 mb-3">0{i + 1}</p>
                <h2 className="m-0 text-2xl text-ink">{item.title}</h2>
                <p className="mt-3 text-muted">{item.body}</p>
              </RevealItem>
            ))}
          </RevealStagger>
          <div className="mt-12">
            <ButtonLink href="/contact/">Request consultation</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
