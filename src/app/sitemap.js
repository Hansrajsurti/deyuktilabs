import { siteUrl, serviceRoutes, insightRoutes } from "@/lib/site";

const routes = [
  "/",
  "/services",
  ...serviceRoutes,
  ...insightRoutes,
  "/how-we-work",
  "/how-we-work/partner-framework",
  "/talent-opportunities",
  "/insights",
  "/about",
  "/contact",
];

export default function sitemap() {
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/services" ? 0.9 : 0.7,
  }));
}