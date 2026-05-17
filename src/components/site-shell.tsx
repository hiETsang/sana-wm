/**
 * [INPUT]: 依赖 site.ts 的导航与 footer 配置，依赖 TrackedLink 记录外链。
 * [OUTPUT]: 对外提供 SiteHeader 与 SiteFooter 组件。
 * [POS]: components 的壳层模块，统一页面级导航与页脚。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import Link from "next/link";
import { footerLinks, navigation, siteConfig } from "@/lib/site";
import { officialLinks } from "@/lib/content";
import { TrackedLink } from "./tracked-link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span aria-hidden="true" />
        {siteConfig.name}
      </Link>
      <nav aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-brand">{siteConfig.name}</p>
        <p>
          Independent guide to NVIDIA Research&apos;s minute-scale world model.
        </p>
      </div>
      <div>
        <p className="footer-heading">Official sources</p>
        {officialLinks.map((item) => (
          <TrackedLink
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noreferrer"
            eventName="outbound_click"
            eventLabel={item.label}
          >
            {item.label}
          </TrackedLink>
        ))}
      </div>
      <div>
        <p className="footer-heading">Site</p>
        {footerLinks.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
