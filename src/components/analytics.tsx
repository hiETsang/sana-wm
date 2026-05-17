/**
 * [INPUT]: 依赖 next/script 与 NEXT_PUBLIC_GA_ID 环境变量。
 * [OUTPUT]: 对外提供 Analytics 组件。
 * [POS]: components 的可选分析脚本入口，被根布局消费。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import Script from "next/script";

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export function Analytics() {
  if (!gaId) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaId}');
        `}
      </Script>
    </>
  );
}
