/**
 * [INPUT]: 依赖 next 的 NextConfig 类型。
 * [OUTPUT]: 对外提供媒体静态缓存配置。
 * [POS]: 根配置层的部署策略入口，服务 public/media 资源。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: __dirname,
  },
  async headers() {
    return [
      {
        source: "/media/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
