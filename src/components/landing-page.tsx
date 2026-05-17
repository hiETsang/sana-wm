/**
 * [INPUT]: 依赖 content.ts 的首页数据、站点壳层组件、TrackedLink 与 TrackedVideo。
 * [OUTPUT]: 对外提供 LandingPage 组件。
 * [POS]: components 的首页组合器，承载首屏与所有 SEO 内容区块。
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */
import {
  availabilityItems,
  capabilityItems,
  exampleVideos,
  faqs,
  heroStats,
  officialLinks,
  whyNowItems,
  workflowSteps,
} from "@/lib/content";
import { siteConfig } from "@/lib/site";
import Image from "next/image";
import { SiteFooter, SiteHeader } from "./site-shell";
import { TrackedLink } from "./tracked-link";
import { TrackedVideo } from "./tracked-video";

export function LandingPage() {
  return (
    <>
      <section className="hero" aria-label="SANA-WM overview">
        <TrackedVideo
          label="hero-reel"
          src="/media/videos/hero-reel.mp4"
          poster="/media/posters/hero-reel.jpg"
          className="hero-video"
          autoPlay
          loop
          controls={false}
          preload="auto"
        />
        <div className="hero-overlay" />
        <SiteHeader />
        <div className="hero-copy">
          <p className="eyebrow">Independent guide</p>
          <h1>SANA-WM</h1>
          <p className="hero-title">
            Minute-scale world modeling with camera-controlled 720p video.
          </p>
          <p className="hero-lede">
            A fast answer to what SANA-WM is, what it can do, and where to find
            the official demos, paper, and code.
          </p>
          <div className="hero-actions">
            <TrackedLink
              href="#examples"
              eventName="cta_click"
              eventLabel="watch_examples"
            >
              Watch examples
            </TrackedLink>
            <TrackedLink
              href="https://arxiv.org/abs/2605.15178"
              target="_blank"
              rel="noreferrer"
              eventName="cta_click"
              eventLabel="read_official_paper"
            >
              Read official paper
            </TrackedLink>
          </div>
        </div>
        <div className="hero-stats" aria-label="Verified headline facts">
          {heroStats.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      <main>
        <section className="editorial-grid" id="overview">
          <div>
            <p className="eyebrow">What is SANA-WM?</p>
            <h2>
              A world model built for longer, controllable video instead of
              short visual tricks.
            </h2>
          </div>
          <div className="body-copy">
            <p>
              SANA-WM is an open-source world model from NVIDIA Research that
              turns one image plus a camera trajectory into minute-scale video.
              Its core promise is not just longer generation, but longer
              generation that still respects spatial structure and camera
              motion.
            </p>
            <p>
              If you searched the term because it suddenly appeared in research
              news, the useful answer is simple: this is a model aimed at
              minute-long 720p worlds with precise camera control, not another
              ordinary short-form video generator.
            </p>
          </div>
        </section>

        <section className="stack-section">
          <p className="eyebrow">Why people are searching for it now</p>
          <div className="triptych">
            {whyNowItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stack-section capabilities">
          <p className="eyebrow">What it can do</p>
          <div className="capability-grid">
            {capabilityItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="stack-section examples" id="examples">
          <div className="section-heading">
            <p className="eyebrow">Official examples</p>
            <h2>See the model before reading the paper.</h2>
          </div>
          <div className="video-grid">
            {exampleVideos.map((video) => (
              <figure key={video.title}>
                <TrackedVideo
                  label={video.title}
                  src={video.src}
                  poster={video.poster}
                />
                <figcaption>{video.title}</figcaption>
              </figure>
            ))}
          </div>
          <p className="source-note">
            Media on this page is adapted from the official SANA-WM project
            gallery and re-hosted here for faster browsing.
          </p>
        </section>

        <section className="stack-section process" id="how-it-works">
          <div className="section-heading">
            <p className="eyebrow">How it works</p>
            <h2>One image, one camera path, then a long controlled rollout.</h2>
          </div>
          <ol>
            {workflowSteps.map((step) => (
              <li key={step.title}>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="stack-section figure-section">
          <div className="section-heading">
            <p className="eyebrow">Efficiency</p>
            <h2>Why the hardware claim attracted attention.</h2>
          </div>
          <figure>
            <Image
              src="/media/figures/efficiency-latency-gpu.png"
              alt="Official SANA-WM efficiency chart comparing latency and GPU memory scaling."
              width={1280}
              height={704}
              loading="lazy"
            />
            <figcaption>
              Official efficiency figure from the SANA-WM project page.
            </figcaption>
          </figure>
        </section>

        <section className="stack-section resources">
          <div className="section-heading">
            <p className="eyebrow">Hardware and official resources</p>
            <h2>Use the official sources for the latest release state.</h2>
          </div>
          <div className="resource-grid">
            {availabilityItems.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
                <TrackedLink
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  eventName="outbound_click"
                  eventLabel={item.title}
                >
                  Open source
                </TrackedLink>
              </article>
            ))}
          </div>
        </section>

        <section className="stack-section faq" id="faq">
          <div className="section-heading">
            <p className="eyebrow">FAQ</p>
            <h2>Answers to the first questions people usually ask.</h2>
          </div>
          <div>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="stack-section source-panel">
          <div>
            <p className="eyebrow">Sources and attribution</p>
            <h2>Independent guide, official sources.</h2>
          </div>
          <div>
            <p>
              This site is not affiliated with NVIDIA Research. It summarizes
              public information and points visitors back to the original
              project materials.
            </p>
            <ul>
              {officialLinks.map((item) => (
                <li key={item.href}>
                  <TrackedLink
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    eventName="outbound_click"
                    eventLabel={item.label}
                  >
                    {item.label}
                  </TrackedLink>
                </li>
              ))}
            </ul>
            <p>Last updated: {siteConfig.updatedAt}</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
