/**
 * [INPUT]: 依赖浏览器 video 元素与 gtag 事件。
 * [OUTPUT]: 对外提供 TrackedVideo 组件。
 * [POS]: components 的媒体交互边界，为首页案例视频补充分析事件。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
"use client";

type TrackedVideoProps = {
  label: string;
  src: string;
  poster: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  controls?: boolean;
  muted?: boolean;
  preload?: "none" | "metadata" | "auto";
};

export function TrackedVideo({
  label,
  src,
  poster,
  className,
  autoPlay = false,
  loop = false,
  controls = true,
  muted = true,
  preload = "metadata",
}: TrackedVideoProps) {
  return (
    <video
      className={className}
      src={src}
      poster={poster}
      autoPlay={autoPlay}
      loop={loop}
      controls={controls}
      muted={muted}
      playsInline
      preload={preload}
      onPlay={() =>
        window.gtag?.("event", "video_play", {
          event_label: label,
        })
      }
    />
  );
}
