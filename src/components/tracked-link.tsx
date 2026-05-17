/**
 * [INPUT]: 依赖 React 的 AnchorHTMLAttributes 与浏览器侧 gtag。
 * [OUTPUT]: 对外提供 TrackedLink 组件。
 * [POS]: components 的轻量事件边界，统一记录 CTA 与外链点击。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type TrackedLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  eventName: string;
  eventLabel: string;
  children: ReactNode;
};

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function TrackedLink({
  eventName,
  eventLabel,
  onClick,
  children,
  ...props
}: TrackedLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    window.gtag?.("event", eventName, {
      event_label: eventLabel,
    });
    onClick?.(event);
  }

  return (
    <a {...props} onClick={handleClick}>
      {children}
    </a>
  );
}
