/**
 * [INPUT]: 依赖 next/font/google、站点配置、Analytics 组件与全局样式。
 * [OUTPUT]: 对外提供根布局与站点级 Metadata。
 * [POS]: app 模块的顶层壳层，承载字体、metadataBase 与 WebSite 结构化数据。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import { Analytics } from "@/components/analytics";
import { siteConfig } from "@/lib/site";
import "./globals.css";

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Newsreader({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "SANA-WM | Independent Guide to the Minute-Scale World Model",
    template: "%s | SANA-WM",
  },
  description: siteConfig.description,
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "SANA-WM | Independent Guide to the Minute-Scale World Model",
    description: siteConfig.description,
    images: [
      {
        url: "/media/posters/hero-reel.jpg",
        width: 1280,
        height: 704,
        alt: "SANA-WM example video frame",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SANA-WM | Independent Guide to the Minute-Scale World Model",
    description: siteConfig.description,
    images: ["/media/posters/hero-reel.jpg"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${bodyFont.variable} ${displayFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
