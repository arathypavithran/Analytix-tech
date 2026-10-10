import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ProgressBar from "@/components/ProgressBar";
import CursorGlow from "@/components/CursorGlow";
import BackToTop from "@/components/BackToTop";
import { SITE_CONFIG } from "@/lib/content";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.tagline} | ${SITE_CONFIG.name}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "AI ERP",
    "AI Integrated ERP",
    "AI Integrated Odoo",
    "Odoo ERP Dubai",
    "Odoo ERP Riyadh",
    "AI Process Automation",
    "Cyber Security",
    "AI Marketing",
    "Business Automation",
    "Enterprise AI Solutions",
    "Digital Transformation",
    "Saudi Arabia",
    "Middle East",
    "Aramco SCCC Compliance",
  ],
  authors: [{ name: "Analytix BSS Technology LLC" }],
  creator: "Analytix BSS",
  publisher: "Analytix BSS",
  metadataBase: new URL("https://analytixtech.io"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://analytixtech.io",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} Digital Backbone`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} — ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    images: ["/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="antialiased min-h-screen text-[#F5F8FF] bg-[#03060D] selection:bg-[#1677FF]/40 selection:text-white">
        <SmoothScroll>
          <ProgressBar />
          <CursorGlow />
          <Navbar />
          <main className="relative z-10 flex min-h-screen flex-col pt-24 sm:pt-28">
            {children}
          </main>
          <Footer />
          <BackToTop />
        </SmoothScroll>
      </body>
    </html>
  );
}
