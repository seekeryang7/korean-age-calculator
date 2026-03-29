import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./components/LanguageContext";
import { GA_ID } from "./lib/gtag";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Korean Age Calculator \u2014 Find Your Celebrity Korean Age Twin",
  description:
    "Calculate your Korean age and discover which K-pop stars and celebrities share your Korean age! Compare with BTS, BLACKPINK, Taylor Swift and more.",
  keywords: [
    "Korean age",
    "Korean age calculator",
    "Korean age twin",
    "celebrity Korean age",
    "K-pop age",
    "\ud55c\uad6d \ub098\uc774",
    "\ub9cc \ub098\uc774",
    "BTS age",
    "BLACKPINK age",
  ],
  openGraph: {
    title: "Who Shares Your Korean Age? | Korean Age Calculator",
    description:
      "Calculate your Korean age and find your celebrity Korean age twins! BTS, BLACKPINK, Taylor Swift and more.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Who Shares Your Korean Age?",
    description:
      "Calculate your Korean age and discover your celebrity age twins!",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8409118801070369"
          crossOrigin="anonymous"
        />
      </head>
      {GA_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}');`}
          </Script>
        </>
      )}
      <body className="min-h-full flex flex-col bg-[#0F0B1A] text-[#F0E6FF]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
