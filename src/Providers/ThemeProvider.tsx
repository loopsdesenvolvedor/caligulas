"use client";

import { ReactNode } from "react";
import { ThemeProvider as StyledProvider } from "styled-components";

import theme from "@/styles/theme";

type ThemeProviderType = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderType) => {
  return <StyledProvider theme={theme}>{children}</StyledProvider>;
};

export default ThemeProvider;
