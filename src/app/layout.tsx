import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";

const poppinsSans = localFont({
  src: "./fonts/PoppinsLatin.woff2",
  variable: "--font-poppins-latin",
  weight: "300 900",
});

export const metadata: Metadata = {
  title: "O melhor do sexo caseiro amador brasileiro | Caligula's",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${poppinsSans.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
