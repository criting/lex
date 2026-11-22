import { site } from "@/content/provider";

export function DemoBanner() {
  return (
    <div className="border-b border-rule bg-stone-deep/70 px-5 py-2 text-center text-sm text-ink-soft md:px-8">
      <span className="text-mono mr-2 inline-block align-middle text-[0.65rem] text-brass">
        Demo
      </span>
      {site.demoNotice}
    </div>
  );
}
