import { contact, navigation, site } from "@/content/provider";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule bg-stone-deep/60">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-5 py-14 md:grid-cols-[1.2fr_1fr_1fr] md:px-8">
        <div>
          <p className="text-display m-0 text-3xl text-ink">{site.wordmark}</p>
          <p className="mt-3 max-w-sm text-muted">{site.tagline}</p>
          <p className="mt-6 text-sm text-meta">{site.copyright}</p>
        </div>

        <div>
          <p className="text-mono m-0 mb-4">Navigate</p>
          <ul className="m-0 list-none space-y-2 p-0">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ink-soft no-underline hover:text-seal">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy/" className="text-ink-soft no-underline hover:text-seal">
                Privacy
              </Link>
            </li>
            <li>
              <Link href="/terms/" className="text-ink-soft no-underline hover:text-seal">
                Terms
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-mono m-0 mb-4">Chambers</p>
          <p className="m-0 text-ink-soft">{contact.location}</p>
          <p className="mt-2 m-0">
            <a href={`mailto:${contact.email}`} className="text-seal hover:text-seal-hover">
              {contact.email}
            </a>
          </p>
          <p className="mt-1 m-0 text-muted">{contact.phone}</p>
        </div>
      </div>
    </footer>
  );
}
