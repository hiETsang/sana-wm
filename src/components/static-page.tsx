/**
 * [INPUT]: 依赖 ReactNode 与站点壳层组件。
 * [OUTPUT]: 对外提供 StaticPage 组件。
 * [POS]: components 的静态内容版式，统一 about/privacy/terms/contact 页面。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "./site-shell";

type StaticPageProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
};

export function StaticPage({ eyebrow, title, children }: StaticPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="static-page">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <div className="static-copy">{children}</div>
      </main>
      <SiteFooter />
    </>
  );
}
