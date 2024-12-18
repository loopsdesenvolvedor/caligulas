const theme = {
  grid: {
    container: "14.4rem",
    gutter: "3.2rem",
  },
  border: {
    radius: {
      small: ".2rem",
      big: ".4rem",
    },
  },
  font: {
    family: "Poppins, sans-serif",
    light: 300,
    normal: 400,
    bold: 600,
    extraBold: 800,
    sizes: {
      xsmall: "1.2rem",
      small: "1.4rem",
      medium: "1.6rem",
      large: "1.8rem",
      xlarge: "2.0rem",
      xxlarge: "2.8rem",
    },
  },
  colors: {
    primary: "#090C0F",
    secondary: "#10171D",
    yellow: "#ffc107",
    red: "#A90015",
    white: "#FFFFFF",
    white80: "rgba(255,255,255,.8)",
    white40: "rgba(255,255,255,.4)",
    white10: "rgba(255,255,255,.1)",
    white05: "rgba(255,255,255,.05)",
  },
  spacings: {
    small: "2rem",
    medium: "4rem",
  },
  layers: {
    base: 10,
    menu: 20,
    overlay: 30,
    modal: 40,
    alwaysOnTop: 50,
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
  },
} as const;

export default theme;
