import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "스트래티지원 - 데이터 기반 전략 컨설팅",
    template: `%s | 스트래티지원`,
  },
  description: "데이터 기반 전략 수립과 실행 중심 컨설팅으로 기업의 지속 가능한 성장을 설계합니다. 경영 전략, 디지털 전환, 조직 혁신 전문.",
  keywords: ["전략 컨설팅", "경영 컨설팅", "디지털 전환", "조직 혁신", "데이터 분석", "성과 관리", "기업 성장"],
  authors: [{ name: "스트래티지원" }],
  creator: "스트래티지원",
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: "스트래티지원",
    title: "스트래티지원 - 데이터 기반 전략 컨설팅",
    description: "데이터 기반 전략 수립과 실행 중심 컨설팅으로 기업의 지속 가능한 성장을 설계합니다.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "스트래티지원",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "스트래티지원 - 데이터 기반 전략 컨설팅",
    description: "데이터 기반 전략 수립과 실행 중심 컨설팅으로 기업의 지속 가능한 성장을 설계합니다.",
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased bg-cream text-ink overflow-x-hidden">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
