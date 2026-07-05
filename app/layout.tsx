import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import { company } from "@/lib/content";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jakarta",
  display: "swap",
});

const siteUrl = company.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${company.name} | Premium Renovations in ${company.region}`,
    template: `%s | ${company.name}`,
  },
  description:
    "Premium kitchen and bathroom renovations across Hertfordshire and North London. From design consultation to final installation — beautiful kitchens, bathrooms and ensuites, fitted properly. Request a free quote.",
  keywords: [
    "kitchen renovation Hertfordshire",
    "bathroom renovation North London",
    "kitchen fitters St Albans",
    "bathroom fitters Watford",
    "luxury kitchen design",
    "ensuite renovation",
    "kitchen and bathroom installation",
    "shaker kitchen renovation",
    "walk-in shower installation",
  ],
  authors: [{ name: company.name }],
  creator: company.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteUrl,
    siteName: company.name,
    title: `${company.name} | Premium Renovations in ${company.region}`,
    description:
      "Beautiful kitchens and bathrooms, designed and fitted properly. Premium renovations across Hertfordshire and North London.",
  },
  twitter: {
    card: "summary_large_image",
    title: company.shortName,
    description:
      "Premium kitchen and bathroom renovations across Hertfordshire and North London.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
