import { PageIntro } from "@/components/layout/page-intro";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms",
  description: "LEX demo terms — replace before production.",
  path: "/terms/",
});

export default function TermsPage() {
  return (
    <>
      <PageIntro eyebrow="Terms" title="Demo terms of use.">
        Template terms only. Not a retainer, not legal advice, not an attorney–client relationship.
      </PageIntro>
      <section className="prose-lex mx-auto max-w-[900px] px-5 pb-24 md:px-8">
        <p>
          Content on this demo site is fictional. Viewing pages or submitting the demo form does not
          create a solicitor–client relationship.
        </p>
        <p>
          Buyers must replace these terms with jurisdiction-appropriate language before offering
          legal services through a production deployment.
        </p>
      </section>
    </>
  );
}
