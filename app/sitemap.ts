import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://analytixtech.io";

  const routes = [
    "",
    "/about",
    "/design",
    "/development",
    "/marketing",
    "/odoo-erp",
    "/ai-automation",
    "/aramco-compliance",
    "/blog",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date("2026-04-21"),
    changeFrequency: "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
