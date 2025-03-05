'use client'

import { ReactNode } from "react";
import { ThemeProvider as StyledThemeProvider} from "styled-components";
import { Theme ,theme} from "@/styles/theme";

const ThemeProvider = ({children}:{children:ReactNode}) => {
    return (
        <StyledThemeProvider theme={theme as Theme}>{children}</StyledThemeProvider>
    );
}

export default ThemeProvider;