// Tipando Breakpoints com um objeto literal
export const Breakpoints: Record<'sm' | 'md' | 'lg' | 'xl', number> = {
    sm: 600,
    md: 960,
    lg: 1200,
    xl: 1440,
  };
  

  export const breakAt = (size: keyof typeof Breakpoints): string => {
    const breakpointValue = Breakpoints[size];  
    return `@media (min-width: ${breakpointValue}px)`;
  };
  