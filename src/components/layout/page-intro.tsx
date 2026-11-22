import { Reveal } from "@/components/motion/reveal";
import type { ReactNode } from "react";

export function PageIntro({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <section className="mx-auto max-w-[1400px] px-5 pb-10 pt-14 md:px-8 md:pt-20">
      <Reveal>
        <p className="docket-number m-0 mb-5">{eyebrow}</p>
        <h1 className="max-w-4xl text-4xl text-ink md:text-6xl">{title}</h1>
        {children ? <div className="mt-6 max-w-2xl text-lg text-muted">{children}</div> : null}
      </Reveal>
    </section>
  );
}
