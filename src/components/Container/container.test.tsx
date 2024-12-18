import { render } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Container from ".";
import theme from "@/styles/theme";

describe("Container", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Container>Test content</Container>
      </ThemeProvider>
    );
    expect(getByText("Test content")).toBeInTheDocument();
  });
});

describe("Container", () => {
  it("should have the correct padding styles based on the theme", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Container>Test content</Container>
      </ThemeProvider>
    );
    expect(container.firstChild).toHaveStyle(
      `padding: 0 ${theme.spacings.small}`
    );
  });
});

describe("Container", () => {
  it("should render children correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <Container>Test content</Container>
      </ThemeProvider>
    );
    expect(getByText("Test content")).toBeInTheDocument();
  });

  it("should have the correct padding styles based on the theme", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Container>Test content</Container>
      </ThemeProvider>
    );
    expect(container.firstChild).toHaveStyle(`padding: 0 2rem`); 
  });
});
