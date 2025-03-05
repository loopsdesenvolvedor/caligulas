'use client'

export const theme = {
  colors: {
    red: "#A90015",
    yellow: "#ffc107",
    background: "#12191F",
    text: "#fff",
    textLightWhite: "rgba(255,255,255,.8",
    textLightBlack: "rgba(51,51,51,.8",
    border: "rgba(255,255,255,.05",
  },
  fonts: {
    body: "'Poppins', sans-serif",


  },
  breakpoints: {
    sm: "600px",
    md: "900px",
    lg: "1200px",
    xl: "1800px",
  },
  spacing: {
    small: "8px",
    medium: "16px",
    large: "32px",
  },
};

export type Theme = typeof theme;
