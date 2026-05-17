/**
 * [INPUT]: 依赖 site.ts 的站点 URL。
 * [OUTPUT]: 对外提供 robots.txt 配置。
 * [POS]: app 模块的爬虫策略出口，与 sitemap.ts 成对存在。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
