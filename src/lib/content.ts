/**
 * [INPUT]: 依赖 site.ts 的站点更新时间。
 * [OUTPUT]: 对外提供首页文案、FAQ、资源链接、媒体清单与静态页文案。
 * [POS]: src/lib 的内容真值源，集中承载所有用户可见文本。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import { siteConfig } from "./site";

export const officialLinks = [
  {
    label: "Official project page",
    href: "https://nvlabs.github.io/Sana/WM/",
  },
  {
    label: "Official paper",
    href: "https://arxiv.org/abs/2605.15178",
  },
  {
    label: "Official code repository",
    href: "https://github.com/NVlabs/Sana",
  },
];

export const heroStats = [
  { value: "2.6B", label: "parameters" },
  { value: "720p", label: "minute-scale video" },
  { value: "6-DoF", label: "camera control" },
  { value: "34s", label: "distilled 60s clip on RTX 5090" },
];

export const whyNowItems = [
  {
    title: "A new kind of search result",
    body: "People are not only asking what the model is. They want to know whether the long-video claim is real, where the examples are, and what to read next.",
  },
  {
    title: "Minute-scale output is the headline",
    body: "SANA-WM targets a full minute of controllable video, which is materially different from the short clips most users associate with video generation.",
  },
  {
    title: "The hardware claim is unusually concrete",
    body: "The paper reports single-GPU generation and a distilled variant that denoises a 60-second 720p clip in about 34 seconds on one RTX 5090.",
  },
];

export const capabilityItems = [
  {
    title: "Long-horizon worlds",
    body: "Generate minute-scale scenes that stay coherent across a longer camera path.",
  },
  {
    title: "Precise camera motion",
    body: "Follow 6-DoF trajectories instead of only producing unconstrained cinematic motion.",
  },
  {
    title: "Higher-throughput evaluation",
    body: "The paper reports comparable visual quality to industrial baselines with 36x higher throughput on its benchmark.",
  },
  {
    title: "Open research footing",
    body: "The project page, paper, and code repository are already public, making the model easier to inspect than a closed demo.",
  },
];

export const exampleVideos = [
  {
    title: "Lantern forest",
    src: "/media/videos/061cbf83.mp4",
    poster: "/media/posters/061cbf83.jpg",
  },
  {
    title: "Snowy shrine",
    src: "/media/videos/7e2846e9.mp4",
    poster: "/media/posters/7e2846e9.jpg",
  },
  {
    title: "Desert canyon",
    src: "/media/videos/1bb7f82e.mp4",
    poster: "/media/posters/1bb7f82e.jpg",
  },
  {
    title: "Rain-soaked city",
    src: "/media/videos/b326d018.mp4",
    poster: "/media/posters/b326d018.jpg",
  },
];

export const workflowSteps = [
  {
    title: "Start with a still image",
    body: "The model takes an initial frame as the visual anchor for the world.",
  },
  {
    title: "Add a camera path",
    body: "A 6-DoF trajectory tells the model where the virtual camera should move.",
  },
  {
    title: "Roll out the world",
    body: "Hybrid linear attention keeps the long sequence tractable while preserving scene continuity.",
  },
  {
    title: "Refine the result",
    body: "A second-stage long-video refiner improves texture, motion, and later-frame quality.",
  },
];

export const availabilityItems = [
  {
    title: "Paper",
    body: "Read the full method, benchmark, and hardware details in the official paper.",
    href: "https://arxiv.org/abs/2605.15178",
  },
  {
    title: "Project page",
    body: "See the official hero reel, galleries, figures, and citation information.",
    href: "https://nvlabs.github.io/Sana/WM/",
  },
  {
    title: "Code",
    body: "Track the official SANA repository for implementation details and future updates.",
    href: "https://github.com/NVlabs/Sana",
  },
];

export const faqs = [
  {
    question: "What is SANA-WM?",
    answer:
      "SANA-WM is an open-source world model from NVIDIA Research built for minute-scale, camera-controlled video generation.",
  },
  {
    question: "Can SANA-WM generate one-minute videos?",
    answer:
      "Yes. The paper describes native one-minute generation at 720p resolution.",
  },
  {
    question: "What makes SANA-WM different from ordinary video generators?",
    answer:
      "Its focus is not only visual quality. It is designed around long-horizon consistency and precise 6-DoF camera control over a minute-scale rollout.",
  },
  {
    question: "Does SANA-WM support camera control?",
    answer:
      "Yes. The model uses dual-branch camera control to follow metric 6-DoF trajectories.",
  },
  {
    question: "Can SANA-WM run on a single GPU?",
    answer:
      "The paper reports that each 60-second clip can be generated on a single GPU, and that a distilled variant denoises a 60-second 720p clip in about 34 seconds on one RTX 5090.",
  },
  {
    question: "Is SANA-WM open source?",
    answer:
      "The paper describes SANA-WM as open source, and the broader SANA codebase is public on GitHub. For the latest release state, use the official project links on this page.",
  },
  {
    question: "Are the model weights available now?",
    answer:
      "Availability can change quickly for new research releases. Check the official project page and repository for the current model-release status.",
  },
  {
    question: "Where should I start if I want the official details?",
    answer:
      "Open the official project page for demos, the arXiv paper for the method, and the NVlabs/Sana repository for code updates.",
  },
];

export const staticPages = {
  about: {
    eyebrow: "About",
    title: "An independent guide to SANA-WM",
    body: [
      "This site exists to help people understand SANA-WM quickly when they first encounter the term in search, news, or research discussion.",
      "It is not the official NVIDIA Research project page. We summarize verified public information, point visitors to the official sources, and keep the page focused on practical search questions.",
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Corrections and source requests",
    body: [
      `For site corrections, attribution requests, or factual updates, email ${siteConfig.email}.`,
      "For project-specific questions, issue reports, or release updates, use the official SANA project channels linked from the homepage.",
    ],
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Privacy policy",
    body: [
      "This site is an informational landing page. It does not require account creation, payments, or user uploads.",
      "If analytics are enabled, they are used to understand aggregate page usage such as visits and outbound-link clicks. No attempt is made to build personal profiles from this site.",
      "Third-party links lead to external websites with their own privacy practices.",
    ],
  },
  terms: {
    eyebrow: "Terms",
    title: "Terms of use",
    body: [
      "This website is provided for informational purposes only and may change as public information about SANA-WM evolves.",
      "All official model claims, papers, code, and media remain the property of their respective owners. This site links back to the original sources and does not claim affiliation with NVIDIA Research.",
      "By using this site, you agree not to misrepresent it as the official project page or reuse its content in a misleading way.",
    ],
  },
};
