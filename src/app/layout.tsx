import type { Metadata } from "next";
import { Rajdhani, Inter } from "next/font/google";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { ScrollAnimations } from "@/components/ScrollAnimations";
import { SITE_NAME, SITE_URL } from "@/data/site";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  variable: "--font-rajdhani",
  weight: ["600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Betpro – Live Sports Odds & Casino ID | Powered by Rollwin",
    template: "%s | Betpro",
  },
  description:
    "Betpro delivers live cricket, football, and tennis markets plus casino tables with instant IDs and Rollwin-backed settlements. 18+ only.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "32x32" },
      { url: "/favicon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-48.png", type: "image/png", sizes: "48x48" },
      { url: "/icon-512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: "Betpro – Live Sports Odds & Casino ID",
    description:
      "Clean live markets, instant Betpro IDs, and fast support — powered by Rollwin.",
    images: [{ url: "/logo-betpro.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${rajdhani.variable} ${inter.variable}`}>
      <body>
        {children}
        <WhatsAppFloat />
        <ScrollAnimations />
      </body>
    </html>
  );
}
