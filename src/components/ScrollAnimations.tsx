"use client";

import { useEffect } from "react";

const REVEAL_SELECTOR = [
  ".section-head",
  ".match-board",
  ".game-tile",
  ".about-copy",
  ".about-panel",
  ".why-card",
  ".bet-big .container",
  ".blog-card",
  ".faq-item",
  ".page-hero",
  ".article-featured",
  ".article-layout > *",
  ".site-footer .footer-grid > *",
].join(", ");

function stampDelay(el: Element) {
  const parent = el.parentElement;
  if (!parent) return;

  const siblings = Array.from(parent.children).filter((child) =>
    child.classList.contains("reveal"),
  );
  const index = siblings.indexOf(el as HTMLElement);
  if (index < 0) return;

  (el as HTMLElement).style.setProperty(
    "--reveal-delay",
    `${Math.min(index, 8) * 70}ms`,
  );
}

export function ScrollAnimations() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observed = new WeakSet<Element>();

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.14,
        rootMargin: "0px 0px -6% 0px",
      },
    );

    const bindTargets = () => {
      document.querySelectorAll(REVEAL_SELECTOR).forEach((el) => {
        if (observed.has(el)) return;
        observed.add(el);
        el.classList.add("reveal");
        stampDelay(el);

        const rect = el.getBoundingClientRect();
        const inView =
          rect.top < window.innerHeight * 0.92 && rect.bottom > 40;

        if (inView) {
          el.classList.add("is-revealed");
        } else {
          observer.observe(el);
        }
      });

      document.documentElement.classList.add("has-scroll-anim");
    };

    bindTargets();

    const mutations = new MutationObserver(() => bindTargets());
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
      document.documentElement.classList.remove("has-scroll-anim");
    };
  }, []);

  return null;
}
