import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge the Untitled UI display sizes from global.css,
// so e.g. `text-display-lg` conflicts with `text-md` rather than `text-red-500`.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      text: [
        "display-xs",
        "display-sm",
        "display-md",
        "display-lg",
        "display-xl",
        "display-2xl",
      ],
    },
  },
});

export const cn = (...classes: Parameters<typeof twMerge>) =>
  twMerge(...classes);
