import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://brainrepairfoundation.org";

const routes = [
  "",
  "/levi",
  "/laurel",
  "/research",
  "/how-we-work",
  "/collaborate",
  "/fund",
  "/updates",
  "/rapid-review-board",
  "/for-families",
  "/outputs",
  "/about",
  "/contact",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
