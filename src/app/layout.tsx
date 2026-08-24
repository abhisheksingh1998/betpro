import type { Metadata } from "next";
import { Rajdhani, Inter } from "next/font/google";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
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
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: "/favicon.png",
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
      </body>
    </html>
  );
}
