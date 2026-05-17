<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes - APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# SANA-WM - 英文独立资料站
Next.js 16 + React 19 + TypeScript + Vanilla CSS + Vercel

<directory>
docs/ - 关键词研究、产品契约与上线判断 (1子目录: 当前无)
public/ - 自托管媒体与静态文件 (1子目录: media)
src/app/ - App Router 路由、SEO 入口与全局样式 (5子目录: about, contact, privacy, terms, 根路由)
src/components/ - 页面组合件与轻量交互组件 (0子目录)
src/lib/ - 站点配置与内容真值源 (0子目录)
</directory>

<config>
package.json - 脚本、依赖与项目身份
next.config.ts - 静态媒体缓存策略
README.md - 本地运行、部署与内容维护说明
</config>

架构决策
- 首页只承接 `SANA-WM` 一个主词，所有可复用文案集中在 `src/lib/content.ts`。
- 路由层保持薄，页面布局由 `src/components/` 组合，避免 SEO 文案散落。
- 媒体素材只保留精选官方片段，统一放在 `public/media/`，由 Next.js 静态托管。

开发规范
- 业务 TS/TSX 文件必须带 L3 头部契约。
- 新增文件、接口或职责变化后，先更新对应 L3，再核对 L2，最后核对本文件。
- 正式上线文案只写用户能理解的事实，不写内部 SEO 和实现话术。

变更记录
- 2026-05-17：初始化 SANA-WM V1 英文资料站与 GEB 分形文档结构。

法则: 极简·稳定·导航·版本精确
