import { MetadataRoute } from "next";
import { APP_ROUTE } from "@/app.const";
import { APP_DOMAIN_NAME } from "@/app.conf";

const ENDPOINTS = [
  APP_ROUTE.HOME,
];

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapRoute: MetadataRoute.Sitemap = [];

  ENDPOINTS.map((r) => {
    sitemapRoute.push({
      url: `https://${APP_DOMAIN_NAME}${r}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1
    });
  });

  return sitemapRoute;
}
