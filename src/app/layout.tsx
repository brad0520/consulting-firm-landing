import type { Metadata } from "next";
import "./globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: {
    default: "ProConsult - 전문 컨설팅 파트너",
    template: `%s | ProConsult`,
  },
  description: "15년간의 풍부한 경험과 검증된 방법론으로 고객의 비즈니스 성장을 이끌어내는 전문 컨설팅 파트너입니다.",
  keywords: ["컨설팅", "경영 전략", "프로세스 혁신", "성과 관리", "조직 개발", "디지털 전환"],
  authors: [{ name: "ProConsult" }],
  creator: "ProConsult",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "ProConsult",
    title: "ProConsult - 전문 컨설팅 파트너",
    description: "15년간의 풍부한 경험과 검증된 방법론으로 고객의 비즈니스 성장을 이끌어내는 전문 컨설팅 파트너입니다.",
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
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{
        fontFamily: "'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        margin: 0,
        padding: 0,
        lineHeight: 1.6,
        color: '#2c3e50',
        background: '#ffffff',
        overflowX: 'hidden'
      }}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}