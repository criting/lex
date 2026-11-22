import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-[900px] flex-col justify-center px-5 py-24 md:px-8">
      <p className="docket-number m-0 mb-4">404</p>
      <h1 className="text-4xl text-ink md:text-6xl">File not found.</h1>
      <p className="mt-5 max-w-lg text-lg text-muted">
        That route is not on the docket. Return home or open a consultation.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href="/">Home</ButtonLink>
        <ButtonLink href="/contact/" variant="ghost">
          Contact
        </ButtonLink>
      </div>
    </section>
  );
}
