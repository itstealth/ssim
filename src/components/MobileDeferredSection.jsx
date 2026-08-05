"use client";

import { useEffect, useState, useRef } from "react";

/**
 * MobileDeferredSection
 * Defers execution and rendering of off-screen components on mobile (< 768px)
 * until they approach the viewport via IntersectionObserver.
 * On desktop (>= 768px), mounts immediately on page load.
 */
export default function MobileDeferredSection({
  children,
  height = "min-h-[200px]",
  rootMargin = "400px 0px"
}) {
  const [shouldRender, setShouldRender] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // If desktop screen, mount immediately
    if (window.innerWidth >= 768) {
      setShouldRender(true);
      return;
    }

    // On mobile screens, use IntersectionObserver to defer mounting until scrolled near viewport
    if (!("IntersectionObserver" in window)) {
      setShouldRender(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldRender(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [rootMargin]);

  if (shouldRender) {
    return <>{children}</>;
  }

  return <div ref={ref} className={`w-full ${height}`} />;
}
