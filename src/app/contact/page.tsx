import { ContactForm } from "@/components/forms/contact-form";
import { PageIntro } from "@/components/layout/page-intro";
import { Reveal } from "@/components/motion/reveal";
import { contact } from "@/content/provider";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Contact",
  description: "Request a LEX consultation — demo form with local submission state.",
  path: "/contact/",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Request a consultation.">
        {contact.note}
      </PageIntro>

      <section className="mx-auto grid max-w-[1400px] gap-12 px-5 pb-24 md:grid-cols-[0.85fr_1.15fr] md:px-8">
        <Reveal>
          <div className="border border-rule bg-stone-raised/60 p-6 md:p-8">
            <p className="text-mono m-0 mb-4">Chambers</p>
            <p className="m-0 text-ink-soft">{contact.location}</p>
            <p className="mt-4 m-0">
              <a href={`mailto:${contact.email}`} className="text-seal">
                {contact.email}
              </a>
            </p>
            <p className="mt-2 m-0 text-muted">{contact.phone}</p>
            <p className="mt-8 text-sm text-meta">
              No fake calendars or payment flows in this template. Enquiry only.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}
