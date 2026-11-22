import { insights } from "@/content/data/insights";
import { people } from "@/content/data/people";
import { practiceAreas } from "@/content/data/practice-areas";
import { about, contact, navigation, site } from "@/content/data/site";
import type { Insight, Person, PracticeArea, PracticeSlug } from "@/content/types";

/**
 * ContentProvider — typed local content boundary.
 * Swap this module for a CMS/Nextly adapter later without rewriting UI.
 */
export const ContentProvider = {
  site,
  navigation,
  contact,
  about,
  practiceAreas,
  people,
  insights,

  getPractice(slug: string): PracticeArea | undefined {
    return practiceAreas.find((p) => p.slug === slug);
  },

  getPerson(slug: string): Person | undefined {
    return people.find((p) => p.slug === slug);
  },

  getInsight(slug: string): Insight | undefined {
    return insights.find((i) => i.slug === slug);
  },

  insightsByPractice(slug: PracticeSlug): Insight[] {
    return insights.filter((i) => i.practice === slug);
  },

  peopleByPractice(slug: PracticeSlug): Person[] {
    return people.filter((p) => p.focus.includes(slug));
  },
};

export { site, navigation, contact, about, practiceAreas, people, insights };
