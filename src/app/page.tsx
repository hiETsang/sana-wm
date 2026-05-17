/**
 * [INPUT]: 依赖 LandingPage 组件、FAQ 内容与站点配置。
 * [OUTPUT]: 对外提供首页路由与首页级 Metadata。
 * [POS]: app 模块的首页入口，绑定 WebPage 与 FAQPage 结构化数据。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import type { Metadata } from "next";
import { LandingPage } from "@/components/landing-page";
import { faqs } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "SANA-WM | Independent Guide to the Minute-Scale World Model",
  },
  description:
    "What SANA-WM is, what it can do, official examples, hardware facts, and links to the official paper, project page, and code.",
  alternates: {
    canonical: siteConfig.url,
  },
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "SANA-WM",
  url: siteConfig.url,
  description: metadata.description,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <LandingPage />
    </>
  );
}
