import { MetadataRoute } from "next";
import { APP_DOMAIN_NAME } from "@/app.conf";

/**
 * Refs:
 * [robots.txt](https://www.robotstxt.org/robotstxt.html)
 * [create-robots-txt](https://developers.google.com/search/docs/crawling-indexing/robots/create-robots-txt?hl=vi#useful-robots.txt-rules)
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "Google",
        allow: "/"
      },
      {
        userAgent: "*",
        allow: "/"
      }
    ],
    sitemap: [`${APP_DOMAIN_NAME}/sitemap.xml`]
  };
}
