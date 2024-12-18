type BreakpointsSizesType = {
  sm: number;
  md: number;
  lg: number;
  xl: number;
};

export const BreakpointsSizes: BreakpointsSizesType = {
  sm: 560,
  md: 768,
  lg: 1024,
  xl: 1440,
};

export const breakAt = (size: keyof BreakpointsSizesType): any => {
  return `@media(min-width: ${BreakpointsSizes[size]}px)`;
};
