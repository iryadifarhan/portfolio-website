import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";
import Script from "next/script";

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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://iryadifarhan.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "iryadifarhan | Farhan Amanullah Iryadi",
  description:
    "Portfolio Website of Farhan Amanullah Iryadi (iryadifarhan).",
  verification: {
    google: "CrKIBZtjEiixsj3eu6ox6PaGc-oKQ9Kx0Mk_IfSA1M8",
  },
  keywords: [
    "iryadifarhan",
    "iryadi",
    "Farhan Iryadi",
    "Farhan Amanullah Iryadi",
    "portfolio",
    "web developer",
    "software engineer",
    "binus"
  ],
  authors: [{ name: "Farhan Amanullah Iryadi" }],
  creator: "Farhan Amanullah Iryadi",
  applicationName: "Farhan Amanullah Iryadi Portfolio Website",
  alternates: { canonical: "/" },
  openGraph: {
    title: "iryadifarhan | Farhan Amanullah Iryadi",
    description:
      "Portfolio Website of Farhan Amanullah Iryadi (iryadifarhan).",
    url: "/",
    siteName: "Farhan Amanullah Iryadi",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "iryadifarhan | Farhan Amanullah Iryadi",
    description:
      "Portfolio Website of Farhan Amanullah Iryadi (iryadifarhan).",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
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
        <Script
          id="ld-json-person"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Farhan Amanullah Iryadi",
              alternateName: [
                "Iryadifarhan",
                "Iryadi",
                "Farhan Iryadi",
              ],
              url: siteUrl,
            }),
          }}
        />
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
