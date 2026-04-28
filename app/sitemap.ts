import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://brainrepairfoundation.org";

const routes = [
  "",
  "/approach",
  "/work",
  "/research",
  "/people",
  "/levi",
  "/about",
  "/contact",
  "/lab/request-access",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: path === "" ? "monthly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
