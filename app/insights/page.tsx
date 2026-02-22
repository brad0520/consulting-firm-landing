import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '인사이트',
  description: '스트래티지원의 전략 인사이트, 산업 분석, 데이터 기반 컨설팅 트렌드를 확인하세요.',
}

const featuredArticle = {
  category: '전략 인사이트',
  title: '2025년 기업 성장 전략: 데이터가 바꾸는 의사결정의 패러다임',
  excerpt: 'AI와 빅데이터가 기업 전략 수립 과정을 근본적으로 변화시키고 있습니다. 데이터 기반 의사결정이 단순한 트렌드를 넘어 생존 전략이 된 지금, 선도 기업들은 어떤 접근 방식을 취하고 있는지 분석합니다.',
  date: '2025.02.15',
  readTime: '12분',
}

const articles = [
  {
    category: '디지털 전환',
    title: 'AI 도입 성공의 3가지 조건: 기술보다 조직이 먼저',
    excerpt: 'AI 도입 실패율 70%의 원인은 기술이 아닌 조직에 있습니다. 성공적인 AI 전환을 위한 조직 문화와 거버넌스 체계를 제안합니다.',
    date: '2025.01.28',
    readTime: '8분',
  },
  {
    category: '조직 혁신',
    title: 'OKR vs KPI: 무엇이 우리 조직에 맞는가',
    excerpt: '성과 관리 체계 선택은 조직 문화와 사업 특성에 따라 달라져야 합니다. 520개 프로젝트 경험을 바탕으로 실질적인 가이드를 제시합니다.',
    date: '2025.01.10',
    readTime: '10분',
  },
  {
    category: '산업 분석',
    title: '제조업 DX 현황: 스마트 팩토리 너머의 가치 창출',
    excerpt: '스마트 팩토리는 시작에 불과합니다. 데이터 기반 제조 혁신의 다음 단계와 글로벌 선도 기업들의 사례를 분석합니다.',
    date: '2024.12.20',
    readTime: '15분',
  },
  {
    category: '재무 전략',
    title: 'ESG 경영과 기업 가치: 비용이 아닌 투자로 전환하기',
    excerpt: 'ESG 투자가 실질적인 기업 가치 향상으로 이어지는 메커니즘과 국내외 성공 사례를 데이터 기반으로 분석합니다.',
    date: '2024.12.05',
    readTime: '9분',
  },
  {
    category: '데이터 분석',
    title: '데이터 거버넌스: 컨설팅 현장에서 본 5가지 실패 패턴',
    excerpt: '많은 기업이 데이터 인프라에 투자하면서도 거버넌스 부재로 성과를 내지 못합니다. 현장 경험에서 도출한 실패 패턴과 해결 방안입니다.',
    date: '2024.11.18',
    readTime: '11분',
  },
]

const industrySolutions = [
  { title: '제조업', subtitle: '스마트 팩토리 & 공급망 최적화' },
  { title: '금융업', subtitle: '디지털 금융 혁신 & 리스크 관리' },
  { title: '유통/리테일', subtitle: '옴니채널 전략 & 고객 인사이트' },
  { title: '헬스케어/바이오', subtitle: 'R&D 혁신 & 디지털 헬스' },
  { title: 'IT/테크', subtitle: '기술 전략 & 플랫폼 혁신' },
]

export default function InsightsPage() {
  return (
    <main>
      {/* Hero — Editorial */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <p className="text-wine text-sm tracking-[0.3em] uppercase mb-6">
            Insights
          </p>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-ink leading-[1.05] mb-8">
            전략 인사이트
          </h1>
          <hr className="editorial-rule mb-8" />
          <p className="text-ink-muted text-lg sm:text-xl max-w-2xl leading-relaxed">
            데이터 기반 전략 컨설팅의 최신 트렌드와
            산업별 인사이트를 공유합니다.
          </p>
        </div>
      </section>

      {/* Featured article — Editorial fullwidth */}
      <section className="py-20 sm:py-28 bg-ink">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <span className="text-wine-light text-xs tracking-[0.2em] uppercase">
            {featuredArticle.category}
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mt-4 mb-6">
            {featuredArticle.title}
          </h2>
          <hr className="editorial-rule mb-6 border-white/20" />
          <p className="text-white/50 text-lg leading-relaxed max-w-3xl mb-8">
            {featuredArticle.excerpt}
          </p>
          <div className="flex items-center gap-4 text-white/30 text-sm">
            <span>{featuredArticle.date}</span>
            <span>&middot;</span>
            <span>읽기 시간 {featuredArticle.readTime}</span>
          </div>
        </div>
      </section>

      {/* Article list — Editorial */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="mb-16">
            <p className="text-wine text-sm tracking-[0.3em] uppercase mb-3">
              Recent Articles
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl">
              최신 아티클
            </h2>
          </div>

          <div className="space-y-0">
            {articles.map((article) => (
              <article
                key={article.title}
                className="group py-10 border-t border-ink/10 hover:bg-cream-dark/50 transition-colors px-2 sm:px-4"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8">
                  <div className="lg:col-span-2">
                    <span className="text-xs text-wine tracking-[0.2em] uppercase">
                      {article.category}
                    </span>
                    <p className="text-ink-faint text-xs mt-2">{article.date}</p>
                  </div>
                  <div className="lg:col-span-7">
                    <h3 className="font-editorial text-xl sm:text-2xl mb-3 group-hover:text-wine transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-ink-muted text-sm leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>
                  <div className="lg:col-span-3 flex lg:justify-end items-start">
                    <span className="text-sm text-ink-faint">
                      읽기 시간 {article.readTime}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Industry solutions — Quick reference */}
      <section className="py-20 sm:py-28 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="mb-16">
            <p className="text-wine text-sm tracking-[0.3em] uppercase mb-3">
              Industry Focus
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl">
              산업별 전문성
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/10">
            {industrySolutions.map((industry) => (
              <div key={industry.title} className="bg-cream-dark p-8 sm:p-10">
                <h3 className="font-editorial text-xl mb-2">{industry.title}</h3>
                <p className="text-ink-muted text-sm">{industry.subtitle}</p>
              </div>
            ))}
            <div className="bg-ink p-8 sm:p-10 flex flex-col justify-center">
              <p className="text-white/60 text-sm mb-4">15개 이상 산업 분야의 전문 경험</p>
              <Link
                href="/contact"
                className="text-wine-light text-sm hover:text-white transition-colors"
              >
                상담 문의하기 →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 sm:py-32 text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="font-editorial text-3xl sm:text-5xl mb-6">
            귀사에 맞는 전략을<br />
            함께 설계합니다
          </h2>
          <hr className="editorial-rule mx-auto mb-6" />
          <p className="text-ink-muted mb-10 max-w-lg mx-auto">
            전문 컨설턴트가 맞춤형 전략을 제안해드립니다.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-wine hover:bg-wine-dark text-white px-10 py-4 text-sm font-medium transition-colors"
          >
            상담 신청하기
          </Link>
        </div>
      </section>
    </main>
  )
}
