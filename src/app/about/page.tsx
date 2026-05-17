/**
 * [INPUT]: 依赖 StaticPage 组件与静态页文案真值。
 * [OUTPUT]: 对外提供 about 页面。
 * [POS]: app/about 的路由入口，解释站点身份边界。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import type { Metadata } from "next";
import { StaticPage } from "@/components/static-page";
import { staticPages } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  const page = staticPages.about;

  return (
    <StaticPage eyebrow={page.eyebrow} title={page.title}>
      {page.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </StaticPage>
  );
}
