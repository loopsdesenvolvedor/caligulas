import { Metadata } from "next";
import { Poppins } from "next/font/google";

import StyledComponentsRegistry from "@/lib/registry";
import ThemeProvider from "@/Providers/ThemeProvider";
import GlobalStyle from "@/styles/GlobalStyle";

import ProviderStore from "../Providers/ProvidersStore";

import Header from "@/components/Header";

const poppins = Poppins({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  weight: ["300", "400", "600", "800"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.variable}`}>
        <ProviderStore>
          <StyledComponentsRegistry>
            <ThemeProvider>
              <GlobalStyle />
              <Header />
              {children}
            </ThemeProvider>
          </StyledComponentsRegistry>
        </ProviderStore>
      </body>
    </html>
  );
}
