import type { AboutContent, ContactConfig, NavItem, SiteSettings } from "@/content/types";

export const site: SiteSettings = {
  name: "LEX",
  wordmark: "LEX",
  tagline: "Boutique counsel for precise matters",
  description:
    "LEX is a boutique law counsel template for practice areas, people, and insights — chamber authority without ambulance-chaser clichés.",
  url: "https://lex.example",
  ogImage: "/og.svg",
  socials: [
    { label: "LinkedIn", href: "https://linkedin.com/" },
    { label: "Email", href: "mailto:counsel@lex.example" },
  ],
  copyright: "© LEX demo template",
  demoNotice:
    "Sample practice areas, counsel, and insights are fictional demo content for template preview.",
};

export const navigation: NavItem[] = [
  { label: "Practice", href: "/practice-areas/" },
  { label: "People", href: "/people/" },
  { label: "Insights", href: "/insights/" },
  { label: "About", href: "/about/" },
  { label: "Contact", href: "/contact/" },
];

export const contact: ContactConfig = {
  email: "counsel@lex.example",
  phone: "+44 20 0000 0000",
  location: "Chambers — configurable city",
  note: "Describe the matter plainly. We reply with scope and next steps — not a brochure.",
  matterTypes: [
    "Corporate / M&A",
    "Venture & startups",
    "Commercial disputes",
    "Privacy & data",
    "Employment",
    "Real estate",
    "Other",
  ],
  urgency: ["Advisory (no deadline)", "Within 2 weeks", "Urgent", "Not sure"],
  endpoint: undefined,
};

export const about: AboutContent = {
  statement: [
    "LEX is built as a small counsel practice: fewer matters, clearer writing, and partners who stay on the file.",
    "We advise founders, operators, and private clients who need precision — not theatre. Our chambers language is quiet on purpose.",
  ],
  approach: [
    {
      title: "Scope before theatre",
      body: "Every engagement starts with a written scope, conflicts check, and a named partner. We decline work we cannot staff well.",
    },
    {
      title: "Drafts you can use",
      body: "Advice arrives as usable instruments — board papers, term-sheet markups, dispute maps — not padded memoranda.",
    },
    {
      title: "Calm under pressure",
      body: "When deadlines compress, we keep process visible: owners, dates, and open questions stay on one docket.",
    },
  ],
  chambers:
    "Demo chambers narrative only. Replace with your city, regulatory footing, and insurance details before launch.",
};
