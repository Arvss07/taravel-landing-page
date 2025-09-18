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
    default: "Taravel",
    template: "%s | Taravel",
  },
  description:
    "The official landing page for Tara-Vel - a public transportation companion app for Cagayan Valley commuters.",
  alternates: {
    canonical: "https://www.taravel.app",
  },
  openGraph: {
    url: "https://www.taravel.app",
    siteName: "Taravel",
    title: "Taravel",
    description:
      "The official landing page for Tara-Vel - a public transportation companion app for Cagayan Valley commuters.",
    type: "website",
    images: [
      {
        url: "/taravel-og.jpg",
        width: 1200,
        height: 630,
        alt: "Taravel — public transportation companion app",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "S3iwNgyadkROHJ65td2nNEE5BTAb6wEx34ijC9V5EmA",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="taravel">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body className={poppins.variable} suppressHydrationWarning={true}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
