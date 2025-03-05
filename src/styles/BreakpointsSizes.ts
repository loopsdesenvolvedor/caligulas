
export const breakpoints = {
  sm: "768px",
  md: "920px",
  lg: "1200px",
  xl: "1440px",

} as const; 

type Breakpoints = keyof typeof breakpoints; 

export const breakAt = (size: Breakpoints): string => {
  return `@media (min-width: ${breakpoints[size]})`; 
};
