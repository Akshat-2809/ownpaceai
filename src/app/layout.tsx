import type { Metadata, Viewport } from "next";
import { Familjen_Grotesk, Space_Mono, Young_Serif } from "next/font/google";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "@/lib/site";
import "./globals.css";

const young = Young_Serif({ subsets: ["latin"], weight: "400", variable: "--font-young" });
const familjen = Familjen_Grotesk({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-familjen" });
const space = Space_Mono({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-space", preload: false });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  themeColor: "#E7EEE9",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-IN" data-scroll-behavior="smooth" className={`${young.variable} ${familjen.variable} ${space.variable}`}>
      <body>{children}</body>
    </html>
  );
}
