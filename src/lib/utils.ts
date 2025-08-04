import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function* range(start: number, end: number, step: number = 1) {
  for (let i = start; step > 0 ? i <= end : i >= end; i += step) {
    yield i;
  }
}
