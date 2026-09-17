"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HEADING_SELECTOR = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "[data-site-heading='true']",
].join(",");

const SKIP_SELECTOR = [
  ".ProseMirror",
  "[contenteditable='true']",
  "[data-heading-style='off']",
  "script",
  "style",
  "svg",
].join(",");

// Matches ANY Tailwind color family at a dark shade (700-950), plus the
// project's named dark tokens (navy/navy-deep/navy-light/mainBlue/primary) —
// not an enumerated color list, so it keeps working for palettes/utilities
// we haven't seen yet. Arbitrary hex backgrounds (e.g. bg-[#4A1D6E], used
// heavily in gradients) are handled separately by real luminance math,
// since a name-based regex can't judge how dark an arbitrary hex is.
const DARK_CLASS_PATTERN =
  /\b(?:bg|from|via|to)-(?:black|mainBlue|primary|navy(?:-(?:deep|light))?|[a-z]+-(?:7|8|9)\d{2})\b/i;

const ARBITRARY_HEX_PATTERN = /(?:bg|from|via|to)-\[#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})\]/g;

const LIGHT_TEXT_CLASS_PATTERN =
  /\btext-(white(?:\/\d+)?|slate-(50|[0-2]00)|gray-(50|[0-2]00)|zinc-(50|[0-2]00)|neutral-(50|[0-2]00)|stone-(50|[0-2]00))\b|text-\[(?:#fff|#ffffff|rgba?\(255)/i;

function parseCssColor(value) {
  if (!value || value === "transparent") return null;

  const match = value.match(/rgba?\(([^)]+)\)/i);
  if (!match) return null;

  const parts = match[1]
    .replace(/\//g, " ")
    .split(/[\s,]+/)
    .filter(Boolean)
    .map(Number);

  if (parts.length < 3 || parts.some((part) => Number.isNaN(part))) {
    return null;
  }

  return {
    r: parts[0],
    g: parts[1],
    b: parts[2],
    a: parts.length > 3 ? parts[3] : 1,
  };
}

function channelToLinear(channel) {
  const value = channel / 255;
  return value <= 0.03928
    ? value / 12.92
    : Math.pow((value + 0.055) / 1.055, 2.4);
}

function luminance(color) {
  return (
    0.2126 * channelToLinear(color.r) +
    0.7152 * channelToLinear(color.g) +
    0.0722 * channelToLinear(color.b)
  );
}

function classNameOf(element) {
  return typeof element.className === "string" ? element.className : "";
}

function hexToRgb(hex) {
  const normalized =
    hex.length === 3
      ? hex.split("").map((c) => c + c).join("")
      : hex;
  const num = parseInt(normalized, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255, a: 1 };
}

function hasDarkArbitraryHex(element) {
  const className = classNameOf(element);
  const matches = className.matchAll(ARBITRARY_HEX_PATTERN);

  for (const match of matches) {
    if (luminance(hexToRgb(match[1])) < 0.42) return true;
  }

  return false;
}

function hasDarkClassHint(element) {
  return (
    DARK_CLASS_PATTERN.test(classNameOf(element)) ||
    hasDarkArbitraryHex(element)
  );
}

function hasLightTextHint(element) {
  return LIGHT_TEXT_CLASS_PATTERN.test(classNameOf(element));
}

// `bg-clip-text text-transparent bg-gradient-to-r from-X to-Y` is a common
// gradient-TEXT trick: the gradient/from/to classes color the glyphs, not
// a real background. Treating them as a "dark background" hint (as we do
// for every other element in the ancestor walk) produces false positives —
// e.g. `from-primary` reads as a dark bg and forces white-on-white
// invisible text. So this one heading is excluded from that check on
// itself; its ancestors are still checked normally.
function isTextGradientTrick(element) {
  const className = classNameOf(element);
  return (
    /\bbg-clip-text\b/.test(className) && /\btext-transparent\b/.test(className)
  );
}

function shouldUseWhiteText(heading) {
  if (hasLightTextHint(heading)) {
    return true;
  }

  const headingColor = parseCssColor(window.getComputedStyle(heading).color);

  if (headingColor && headingColor.a > 0.4 && luminance(headingColor) > 0.72) {
    return true;
  }

  let element = isTextGradientTrick(heading) ? heading.parentElement : heading;

  while (element && element !== document.documentElement) {
    if (hasDarkClassHint(element)) {
      return true;
    }

    const styles = window.getComputedStyle(element);
    const background = parseCssColor(styles.backgroundColor);

    if (background && background.a > 0.2) {
      return luminance(background) < 0.42;
    }

    if (
      styles.backgroundImage &&
      styles.backgroundImage !== "none" &&
      hasDarkClassHint(element)
    ) {
      return true;
    }

    element = element.parentElement;
  }

  return false;
}

function wordWrapTextNode(textNode, startIndex) {
  const fragment = document.createDocumentFragment();
  const parts = textNode.nodeValue.split(/(\s+)/);
  let wordIndex = startIndex;

  parts.forEach((part) => {
    if (!part) return;

    if (/^\s+$/.test(part)) {
      fragment.appendChild(document.createTextNode(part));
      return;
    }

    const word = document.createElement("span");
    word.className = "site-heading-word";
    word.style.setProperty("--site-heading-word-index", wordIndex);
    word.textContent = part;
    fragment.appendChild(word);
    wordIndex += 1;
  });

  textNode.replaceWith(fragment);
  return wordIndex;
}

function wrapHeadingWords(heading) {
  if (heading.dataset.wordPullUp === "true") return;
  if (heading.dataset.siteHeadingAnimated === "true") return;
  if (heading.querySelector(".site-heading-word")) {
    heading.dataset.siteHeadingAnimated = "true";
    return;
  }

  const walker = document.createTreeWalker(heading, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;

      if (!node.nodeValue.trim() || !parent || parent.closest(SKIP_SELECTOR)) {
        return NodeFilter.FILTER_REJECT;
      }

      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes = [];
  let node = walker.nextNode();

  while (node) {
    textNodes.push(node);
    node = walker.nextNode();
  }

  let wordIndex = 0;

  textNodes.forEach((textNode) => {
    wordIndex = wordWrapTextNode(textNode, wordIndex);
  });

  if (wordIndex > 0) {
    heading.dataset.siteHeadingAnimated = "true";
  }
}

function styleHeading(heading) {
  if (!(heading instanceof HTMLElement)) return;
  if (heading.closest(SKIP_SELECTOR) || heading.dataset.headingStyle === "off") {
    return;
  }

  const useWhiteText = shouldUseWhiteText(heading);

  heading.classList.add("site-heading-theme");
  heading.style.setProperty(
    "--site-heading-color",
    useWhiteText ? "#ffffff" : "#000000"
  );

  wrapHeadingWords(heading);
}

export default function HeadingStyleManager() {
  const pathname = usePathname();

  useEffect(() => {
    const headings = new Set();
    let observer;

    const observeHeading = (heading) => {
      styleHeading(heading);
      headings.add(heading);

      if (
        observer &&
        heading.dataset.wordPullUp !== "true" &&
        heading.dataset.siteHeadingAnimated === "true"
      ) {
        observer.observe(heading);
      } else {
        heading.classList.add("site-heading-in-view");
      }
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("site-heading-in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );

    const enhanceHeadings = () => {
      document.querySelectorAll(HEADING_SELECTOR).forEach(observeHeading);
    };

    // Deferred even for the initial pass: touching headings synchronously
    // inside this effect can race React's own commit for lazy/Suspense
    // subtrees that resolve just after mount, producing a spurious
    // "hydration mismatch" warning on the next render.
    const initialId = setTimeout(enhanceHeadings, 120);

    // Debounce (rather than a single rAF) so we don't touch headings while
    // React is still mid-commit for a lazy/Suspense-loaded subtree — racing
    // that produces a spurious "hydration mismatch" warning as React's next
    // reconciliation pass finds DOM we already mutated out from under it.
    let debounceId = null;
    const scheduleEnhance = () => {
      if (debounceId) clearTimeout(debounceId);
      debounceId = setTimeout(enhanceHeadings, 120);
    };

    const mutationObserver = new MutationObserver(scheduleEnhance);

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      clearTimeout(initialId);
      if (debounceId) clearTimeout(debounceId);
      observer.disconnect();
      mutationObserver.disconnect();
      headings.clear();
    };
  }, [pathname]);

  return null;
}
