import type { Metadata } from "next";
import { Syne, Sora } from "next/font/google";
import { WhatsAppFloat } from "@/components/WhatsAppFloat";
import { SITE_NAME, SITE_URL } from "@/data/site";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["600", "700", "800"],
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700"],
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
    <html lang="en" className={`${syne.variable} ${sora.variable}`}>
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
