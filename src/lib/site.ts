/**
 * [INPUT]: 不依赖业务模块，仅使用站点级常量。
 * [OUTPUT]: 对外提供 siteConfig、navigation、footerLinks。
 * [POS]: src/lib 的站点配置真值源，被路由与壳层组件共同消费。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */

export const siteConfig = {
  name: "SANA-WM",
  url: "https://sana-wm.com",
  description:
    "Independent guide to SANA-WM, NVIDIA Research's minute-scale world model for 720p camera-controlled video generation.",
  email: "hello@sana-wm.com",
  googleAnalyticsId: "G-JK1CZ3NGVF",
  updatedAt: "May 17, 2026",
};

export const navigation = [
  { label: "Overview", href: "/#overview" },
  { label: "Examples", href: "/#examples" },
  { label: "How it works", href: "/#how-it-works" },
  { label: "FAQ", href: "/#faq" },
];

export const footerLinks = [
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy", href: "/privacy" },
  { label: "Terms", href: "/terms" },
];
