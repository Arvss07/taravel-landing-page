import { Poppins } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  metadataBase: new URL("https://www.taravel.app"),
  title: {
    default: "Tara-Vel - Smart Public Transportation App for Cagayan Valley",
    template: "%s | Tara-Vel",
  },
  description:
    "Tara-Vel is a smart public transportation companion app for Cagayan Valley. Download now for hassle-free commuting with real-time bus tracking, route planning, and transportation updates. Available on Android.",
  keywords: [
    "Tara-Vel",
    "public transportation",
    "Cagayan Valley",
    "bus tracking",
    "transportation app",
    "commute app",
    "Philippines transport",
    "bus route planner",
    "real-time bus tracking",
    "mobile app",
  ],
  authors: [{ name: "Tara-Vel Team" }],
  creator: "Tara-Vel",
  publisher: "Tara-Vel",
  alternates: {
    canonical: "https://www.taravel.app",
  },
  openGraph: {
    url: "https://www.taravel.app",
    siteName: "Tara-Vel",
    title: "Tara-Vel - Smart Public Transportation App for Cagayan Valley",
    description:
      "Your smart public transportation companion for Cagayan Valley. Download now for hassle-free commuting with real-time bus tracking and route planning.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/taravel-og.jpg",
        width: 1200,
        height: 630,
        alt: "Tara-Vel — Smart Public Transportation Companion App",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tara-Vel - Smart Public Transportation App for Cagayan Valley",
    description:
      "Your smart public transportation companion. Download now for hassle-free commuting with real-time bus tracking and route planning.",
    images: ["/taravel-og.jpg"],
    creator: "@taravel",
    site: "@taravel",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "S3iwNgyadkROHJ65td2nNEE5BTAb6wEx34ijC9V5EmA",
  },
  category: "Transportation",
  classification: "Mobile Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="taravel">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={poppins.variable} suppressHydrationWarning={true}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
