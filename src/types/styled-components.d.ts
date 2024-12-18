import theme from "@/styles/theme";
import "styled-components";

type ThemeProps = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends ThemeProps {}
}
