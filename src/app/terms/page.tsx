/**
 * [INPUT]: 依赖 StaticPage 组件与静态页文案真值。
 * [OUTPUT]: 对外提供 terms 页面。
 * [POS]: app/terms 的路由入口，声明独立资料站的使用边界。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import type { Metadata } from "next";
import { StaticPage } from "@/components/static-page";
import { staticPages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  const page = staticPages.terms;

  return (
    <StaticPage eyebrow={page.eyebrow} title={page.title}>
      {page.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </StaticPage>
  );
}
