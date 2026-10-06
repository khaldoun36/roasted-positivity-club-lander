import { extendTailwindMerge } from "tailwind-merge";

// Teach tailwind-merge the custom theme values from global.css:
// - display sizes, so `text-display-lg` conflicts with `text-md`, not `text-red-500`
// - the `gutter` spacing, so `p-gutter` conflicts with `p-0`, `px-2`, etc.
const twMerge = extendTailwindMerge({
  extend: {
    theme: {
      spacing: ["gutter"],
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
