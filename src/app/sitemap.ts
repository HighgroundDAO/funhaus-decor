import type { MetadataRoute } from "next";
import { getContentSlugs } from "@/lib/mdx";

const BASE_URL = "https://funhaus-decor.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const contentPages = getContentSlugs().map((slug) => ({
    url: `${BASE_URL}/${slug.join("/")}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const staticPages = [
    "", "about", "contact", "privacy", "terms", "disclosure",
  ].map((path) => ({
    url: `${BASE_URL}/${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1.0 : 0.3,
  }));

  return [...staticPages, ...contentPages];
}
