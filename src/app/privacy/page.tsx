import { PageIntro } from "@/components/layout/page-intro";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy",
  description: "LEX demo privacy notice — replace before production.",
  path: "/privacy/",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrow="Privacy" title="Demo privacy notice.">
        Placeholder policy for the LEX template. Replace with counsel-approved text before launch.
      </PageIntro>
      <section className="prose-lex mx-auto max-w-[900px] px-5 pb-24 md:px-8">
        <p>
          This demonstration site stores no client matter data. The consultation form runs in demo
          mode unless you configure an endpoint in content.
        </p>
        <p>
          Analytics, cookies, and processors should be declared here by the buyer. Do not ship this
          notice unchanged on a live practice website.
        </p>
      </section>
    </>
  );
}
