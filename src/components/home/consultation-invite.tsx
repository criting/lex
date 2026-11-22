import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { contact } from "@/content/provider";

export function ConsultationInvite() {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-24 md:px-8">
      <Reveal>
        <div className="chamber-panel border border-rule px-6 py-12 md:px-12 md:py-16">
          <p className="docket-number m-0 mb-4">04 · Consultation</p>
          <h2 className="max-w-3xl text-3xl text-ink md:text-5xl">
            Tell us the matter. We reply with scope.
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-muted">{contact.note}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="/contact/">Open consultation form</ButtonLink>
            <ButtonLink href={`mailto:${contact.email}`} variant="ghost">
              {contact.email}
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
