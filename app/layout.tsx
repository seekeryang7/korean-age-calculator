import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { LanguageProvider } from "./components/LanguageContext";
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
  title: "Korean Age Calculator — Find Your Korean Age",
  description:
    "Calculate your Korean age instantly. Learn the difference between Korean age and international age, and understand Korea's 2023 age reform.",
  keywords: [
    "Korean age",
    "Korean age calculator",
    "한국 나이",
    "age in Korea",
    "international age",
    "만 나이",
    "Korean age system",
  ],
  openGraph: {
    title: "Korean Age Calculator — Find Your Korean Age",
    description:
      "Calculate your Korean age instantly. Learn the difference between Korean age and international age.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Korean Age Calculator",
    description:
      "Calculate your Korean age instantly and learn how the Korean age system works.",
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
      <body className="min-h-full flex flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
