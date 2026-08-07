"use client";

import Link from "next/link";

/**
 * A lightweight client component that wraps a link and scrolls to the top
 * on click. Extracted so the parent About component can be a Server Component.
 */
export default function ScrollToTopLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className={className}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      {children}
    </Link>
  );
}
