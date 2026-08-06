import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Shared horizontal page container — the single source of truth for
 * max-width + padding used across every page/section so alignment stays
 * consistent site-wide. Import this everywhere instead of hardcoding
 * max-w/px classes.
 */
export const PAGE_X =
  "w-full max-w-[1440px] mx-auto px-6 sm:px-10 md:px-16 lg:px-16 xl:px-20 2xl:px-36";

export function scrollToHash(hash: string) {
  if (typeof window === "undefined") {
    return;
  }

  const targetId = hash.startsWith("#") ? hash.slice(1) : hash;
  const element = document.getElementById(targetId);

  if (!element) {
    return;
  }

  const headerOffset = 112;
  const elementTop = element.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: Math.max(elementTop - headerOffset, 0),
    behavior: "smooth",
  });
}
