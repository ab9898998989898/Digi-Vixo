import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SmoothScroller from "@/components/layout/SmoothScroller";
import JsonLd from "@/components/seo/JsonLd";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Digivixo | Professional IT & Digital Business Solutions",
  description: "Digivixo provides professional website development, custom web applications, automation, and AI-driven solutions for growing businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SmoothScroller>
          <JsonLd />
          <Header />
          <main className="min-h-screen pt-20">
            {children}
          </main>
          <Footer />
        </SmoothScroller>
      </body>
    </html>
  );
}
