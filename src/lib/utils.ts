import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

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
