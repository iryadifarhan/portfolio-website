import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";

import Navbar from "./ui/Navbar";
import Footer from "./ui/Footer";
import PageIn from "./ui/PageIn";
import ScrollToTop from "./ui/ScrollToTop";
import AssetLoadGate from "./ui/AssetLoadGate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "farhan's website",
  description: "A Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <AssetLoadGate>
            <main className="select-none font-sans flex flex-col items-center justify-items-center min-h-screen py-5 md:p-20 md:py-7">
              <Navbar />
                <PageIn>{children}</PageIn>
              <Footer />
            </main>

            <ScrollToTop />
          </AssetLoadGate>
        </ThemeProvider>
      </body>
    </html>
  );
}
