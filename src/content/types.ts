export type PracticeSlug =
  | "corporate"
  | "venture"
  | "disputes"
  | "privacy"
  | "employment"
  | "real-estate";

export interface PracticeArea {
  slug: PracticeSlug;
  number: string;
  title: string;
  summary: string;
  overview: string[];
  matters: string[];
  relatedPeople: string[];
  relatedInsights: string[];
  tone: string;
  demo: true;
}

export interface Person {
  slug: string;
  name: string;
  role: string;
  focus: string[];
  bio: string[];
  admissions: string[];
  languages: string[];
  email: string;
  tone: string;
  demo: true;
}

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  body: string[];
  practice: PracticeSlug;
  author: string;
  date: string;
  readingTime: string;
  citation?: string;
  demo: true;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface ContactConfig {
  email: string;
  phone: string;
  location: string;
  note: string;
  matterTypes: string[];
  urgency: string[];
  /** Set to a form endpoint URL to enable real submissions */
  endpoint?: string;
}

export interface AboutContent {
  statement: string[];
  approach: { title: string; body: string }[];
  chambers: string;
}

export interface SiteSettings {
  name: string;
  wordmark: string;
  tagline: string;
  description: string;
  url: string;
  ogImage: string;
  socials: { label: string; href: string }[];
  copyright: string;
  demoNotice: string;
}
