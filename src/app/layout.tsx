import type { Metadata } from "next";
import { ReactNode } from "react";
import "./globals.css";
import { techCorpConfig } from "@/lib/config";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollHandler from "@/components/ScrollHandler";

export const metadata: Metadata = {
  title: {
    default: techCorpConfig.brand.name,
    template: `%s | ${techCorpConfig.brand.name}`,
  },
  description: techCorpConfig.brand.description,
  keywords: ["기술", "기업", "혁신", "IT", "소프트웨어", "디지털", "회사소개"],
  authors: [{ name: techCorpConfig.company.name }],
  creator: techCorpConfig.company.name,
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: techCorpConfig.brand.name,
    title: techCorpConfig.brand.name,
    description: techCorpConfig.brand.description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        margin: 0,
        padding: 0,
        lineHeight: 1.6,
        color: '#1d1d1f'
      }}>
        <ScrollHandler />
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column'
        }}>
          <Header />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}