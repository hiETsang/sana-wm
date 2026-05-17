/**
 * [INPUT]: 依赖 StaticPage 组件与静态页文案真值。
 * [OUTPUT]: 对外提供 privacy 页面。
 * [POS]: app/privacy 的路由入口，声明最小化数据处理策略。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import type { Metadata } from "next";
import { StaticPage } from "@/components/static-page";
import { staticPages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  const page = staticPages.privacy;

  return (
    <StaticPage eyebrow={page.eyebrow} title={page.title}>
      {page.body.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
    </StaticPage>
  );
}
