import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-noto-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ProConsult - 전문 컨설팅 파트너",
    template: `%s | ProConsult`,
  },
  description: "15년간의 풍부한 경험과 검증된 방법론으로 고객의 비즈니스 성장을 이끌어내는 전문 컨설팅 파트너입니다.",
  keywords: ["컨설팅", "경영 전략", "프로세스 혁신", "성과 관리", "조직 개발", "디지털 전환", "재무 컨설팅"],
  authors: [{ name: "ProConsult" }],
  creator: "ProConsult",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "ProConsult",
    title: "ProConsult - 전문 컨설팅 파트너",
    description: "15년간의 풍부한 경험과 검증된 방법론으로 고객의 비즈니스 성장을 이끌어내는 전문 컨설팅 파트너입니다.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ProConsult",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ProConsult - 전문 컨설팅 파트너",
    description: "15년간의 풍부한 경험과 검증된 방법론으로 고객의 비즈니스 성장을 이끌어내는 전문 컨설팅 파트너입니다.",
    images: ["/og-image.jpg"],
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
    <html lang="ko" className={notoSansKR.variable}>
      <body className="font-sans overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
