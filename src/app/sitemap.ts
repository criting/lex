import type { MetadataRoute } from "next";
import { insights, people, practiceAreas, site } from "@/content/provider";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const staticRoutes = ["", "/practice-areas/", "/people/", "/insights/", "/about/", "/contact/", "/privacy/", "/terms/"];

  return [
    ...staticRoutes.map((path) => ({
      url: `${base}${path || "/"}`,
      lastModified: new Date("2026-11-22"),
    })),
    ...practiceAreas.map((p) => ({
      url: `${base}/practice-areas/${p.slug}/`,
      lastModified: new Date("2026-11-22"),
    })),
    ...people.map((p) => ({
      url: `${base}/people/${p.slug}/`,
      lastModified: new Date("2026-11-22"),
    })),
    ...insights.map((i) => ({
      url: `${base}/insights/${i.slug}/`,
      lastModified: new Date(i.date),
    })),
  ];
}
