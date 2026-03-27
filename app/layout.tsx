import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import LenisSetup from "./Components/LenisSetup/LenisSetup";
import Navbar from "./Components/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });


export const metadata: Metadata = {
  title: "Reham Shibl",
  description: "Portfolio of Reham Shibl",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Navbar />
        <LenisSetup>
          {children}
        </LenisSetup>
      </body>

      <Script
        async type="module"
        src="https://cdn.jsdelivr.net/npm/@finsweet/attributes@2/attributes.js"
        fs-scrolldisable
      ></Script>
    </html>
  );
}

