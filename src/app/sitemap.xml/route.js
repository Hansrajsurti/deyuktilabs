import { siteUrl, serviceRoutes, insightRoutes } from "@/lib/site";

export const dynamic = "force-static";

const routes = [
  "/",
  "/services",
  ...serviceRoutes,
  ...insightRoutes,
  "/how-we-work",
  "/how-we-work/partner-framework",
  "/talent-opportunities",
  "/insights",
  "/career-lab",
  "/about",
  "/contact",
];

export function GET() {
  const lastModified = new Date().toISOString();
  const entries = routes.map((route) => {
    const priority = route === "/" ? "1.0" : route === "/services" ? "0.9" : "0.7";
    const changeFrequency = route === "/" ? "weekly" : "monthly";
    return `<url><loc>${siteUrl}${route}</loc><lastmod>${lastModified}</lastmod><changefreq>${changeFrequency}</changefreq><priority>${priority}</priority></url>`;
  });
  const body = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${entries.join("")}</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}