import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "next-themes";
import type { Metadata } from "next";

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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Farhan Amanullah Iryadi",
  alternateName: [
    "Iryadifarhan",
    "iryadifarhan",
    "Iryadi",
    "iryadi",
    "Farhan Iryadi",
  ],
  url: siteUrl,
  sameAs: [
    "https://github.com/iryadifarhan",
    "https://www.linkedin.com/in/iryadifarhan",
  ],
  jobTitle: "Software Engineer",
};

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
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
