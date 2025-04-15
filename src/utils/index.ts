import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...classNames: string[]): string {
  return twMerge(clsx(classNames));
}