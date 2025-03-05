import { Theme, theme } from "./theme";

type Breakpoints = (typeof theme.breakpoints)[keyof typeof theme.breakpoints];

export const breakAt = (size: Breakpoints): string => {
  return `@media (min-width: ${size})`;
};
