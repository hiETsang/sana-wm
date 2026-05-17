/**
 * [INPUT]: 依赖 StaticPage 组件与静态页文案真值。
 * [OUTPUT]: 对外提供 contact 页面。
 * [POS]: app/contact 的路由入口，承接纠错与来源请求。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import type { Metadata } from "next";
import { StaticPage } from "@/components/static-page";
import { staticPages } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  const page = staticPages.contact;

  return (
    <StaticPage eyebrow={page.eyebrow} title={page.title}>
      {page.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      <a className="text-link" href={`mailto:${siteConfig.email}`}>
        {siteConfig.email}
      </a>
    </StaticPage>
  );
}
