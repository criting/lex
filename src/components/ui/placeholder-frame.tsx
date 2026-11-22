import { cn } from "@/lib/cn";

export function PlaceholderFrame({
  label,
  className,
  tone = "#1a4d5c",
  aspect = "landscape",
}: {
  label: string;
  className?: string;
  tone?: string;
  aspect?: "hero" | "landscape" | "portrait" | "square" | "wide";
}) {
  const aspectClass =
    aspect === "hero"
      ? "aspect-[16/10] md:aspect-[21/9]"
      : aspect === "portrait"
        ? "aspect-[3/4]"
        : aspect === "square"
          ? "aspect-square"
          : aspect === "wide"
            ? "aspect-[21/9]"
            : "aspect-[16/10]";

  return (
    <div
      className={cn(
        "relative overflow-hidden border border-rule",
        aspectClass,
        className,
      )}
      style={{
        background: `linear-gradient(145deg, ${tone}22, #0e141914 45%, ${tone}33),
          linear-gradient(25deg, #f1eee7, #d5d0c6)`,
      }}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.35), transparent 40%), radial-gradient(circle at 80% 70%, rgba(14,20,25,0.18), transparent 45%)",
        }}
      />
      <div className="absolute bottom-0 left-0 right-0 border-t border-rule/70 bg-stone-raised/80 px-4 py-3 backdrop-blur-sm">
        <p className="text-mono m-0">{label}</p>
      </div>
    </div>
  );
}
