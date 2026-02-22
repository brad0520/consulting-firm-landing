import Link from 'next/link'

const metrics = [
  { value: '520+', label: '완료 프로젝트' },
  { value: '97%', label: '고객 재계약율' },
  { value: '18년', label: '업계 경력' },
  { value: '₩2.3조', label: '고객 매출 기여' },
]

const expertise = [
  { num: '01', title: '경영 전략', desc: '시장 분석과 데이터 기반 의사결정으로 지속 가능한 성장 전략을 수립합니다.' },
  { num: '02', title: '디지털 전환', desc: 'AI, 클라우드, 데이터 분석 등 최신 기술을 활용한 비즈니스 혁신을 주도합니다.' },
  { num: '03', title: '조직 혁신', desc: '조직 구조 재설계와 변화관리를 통해 실행력 있는 조직을 만듭니다.' },
  { num: '04', title: '성과 관리', desc: 'OKR/KPI 체계 구축과 데이터 기반 성과 측정으로 실질적 결과를 달성합니다.' },
]

const cases = [
  { company: '글로벌 제조사 A', category: '디지털 전환', metric: '+42%', metricLabel: '생산성 향상', desc: 'AI 기반 스마트 팩토리 전환으로 생산 효율성 극대화' },
  { company: '국내 금융사 B', category: '프로세스 혁신', metric: '-35%', metricLabel: '운영비 절감', desc: 'RPA 도입과 업무 자동화를 통한 비용 구조 개선' },
  { company: '유통 대기업 C', category: '옴니채널 전략', metric: '+58%', metricLabel: '온라인 매출', desc: '고객 데이터 통합과 옴니채널 플랫폼 구축' },
]

const testimonials = [
  { text: '스트래티지원의 데이터 기반 접근 방식이 우리 회사의 의사결정 체계를 완전히 바꿔놓았습니다.', author: '김현수', role: 'CTO, 글로벌 제조사 A' },
  { text: '단순한 자문이 아닌, 실행까지 함께하는 진정한 파트너입니다. 조직 생산성이 눈에 띄게 개선되었습니다.', author: '이정민', role: 'COO, 국내 금융사 B' },
]

export default function HomePage() {
  return (
    <main>
      {/* Hero — Editorial, type-driven, no images */}
      <section className="py-24 sm:py-32 lg:py-40">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <p className="text-wine text-sm tracking-[0.3em] uppercase mb-6">
            Data-Driven Strategy Consulting
          </p>
          <h1 className="font-editorial text-5xl sm:text-6xl lg:text-8xl text-ink leading-[1.05] mb-8">
            전략은 데이터에서<br />
            시작됩니다
          </h1>
          <hr className="editorial-rule mb-8" />
          <p className="text-ink-muted text-lg sm:text-xl max-w-2xl leading-relaxed mb-12">
            스트래티지원은 데이터 기반 전략 수립과 실행 중심 컨설팅으로
            기업의 지속 가능한 성장을 설계합니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="bg-ink text-white px-8 py-4 text-sm font-medium hover:bg-ink-light transition-colors text-center"
            >
              전략 상담 시작하기
            </Link>
            <Link
              href="/cases"
              className="border border-ink/20 text-ink px-8 py-4 text-sm font-medium hover:bg-ink hover:text-white transition-all text-center"
            >
              성공사례 보기
            </Link>
          </div>
        </div>
      </section>

      {/* Metric strip — full-width dark band */}
      <section className="bg-ink py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {metrics.map((m) => (
              <div key={m.label} className="text-center">
                <div className="font-editorial text-4xl sm:text-5xl text-white mb-2">
                  {m.value}
                </div>
                <div className="text-white/40 text-sm tracking-wider">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise — editorial numbered list */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="mb-16">
            <p className="text-wine text-sm tracking-[0.3em] uppercase mb-3">
              Our Expertise
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl">
              전략에서 실행까지
            </h2>
          </div>

          <div className="space-y-0">
            {expertise.map((item) => (
              <div
                key={item.num}
                className="group grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 py-10 border-t border-ink/10 hover:bg-cream-dark/50 transition-colors px-2 sm:px-4"
              >
                <div className="sm:col-span-1">
                  <span className="number-accent text-2xl font-editorial">
                    {item.num}
                  </span>
                </div>
                <div className="sm:col-span-3">
                  <h3 className="font-editorial text-2xl">{item.title}</h3>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-ink-muted leading-relaxed">{item.desc}</p>
                </div>
                <div className="sm:col-span-2 flex sm:justify-end items-start">
                  <Link
                    href="/services"
                    className="text-sm text-wine hover:text-wine-dark transition-colors"
                  >
                    자세히 →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pullquote */}
      <section className="py-20 sm:py-28 bg-cream-dark">
        <div className="max-w-4xl mx-auto px-4 md:px-6 text-center">
          <p className="pullquote text-2xl sm:text-3xl lg:text-4xl text-ink/80">
            &ldquo;우리는 데이터가 말하는 진실에서 출발하여,
            <br className="hidden sm:block" />
            실행 가능한 전략으로 변환합니다.&rdquo;
          </p>
          <hr className="editorial-rule mx-auto mt-8 mb-4" />
          <p className="text-ink-faint text-sm">스트래티지원 방법론</p>
        </div>
      </section>

      {/* Case studies — editorial cards */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-16 gap-4">
            <div>
              <p className="text-wine text-sm tracking-[0.3em] uppercase mb-3">
                Case Studies
              </p>
              <h2 className="font-editorial text-3xl sm:text-5xl">
                검증된 성과
              </h2>
            </div>
            <Link
              href="/cases"
              className="text-sm text-ink-muted hover:text-wine transition-colors"
            >
              전체 사례 보기 →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10">
            {cases.map((c) => (
              <div key={c.company} className="bg-cream p-8 sm:p-10">
                <span className="text-xs text-wine tracking-[0.2em] uppercase">
                  {c.category}
                </span>
                <div className="mt-6 mb-4">
                  <span className="font-editorial text-5xl sm:text-6xl text-ink">
                    {c.metric}
                  </span>
                  <p className="text-sm text-ink-faint mt-1">{c.metricLabel}</p>
                </div>
                <h3 className="text-lg font-medium mb-2">{c.company}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — editorial pullquotes */}
      <section className="py-20 sm:py-28 bg-ink">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <p className="text-wine-light text-sm tracking-[0.3em] uppercase mb-12 text-center">
            Client Voices
          </p>
          <div className="space-y-16">
            {testimonials.map((t) => (
              <div key={t.author} className="text-center">
                <p className="pullquote text-xl sm:text-2xl text-white/80 mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
                <hr className="editorial-rule mx-auto mb-4 border-white/20" />
                <p className="text-white/60 text-sm">
                  {t.author} — {t.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — minimal editorial */}
      <section className="py-24 sm:py-32 text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="font-editorial text-3xl sm:text-5xl mb-6">
            지속 가능한 성장,
            <br />
            지금 시작하세요
          </h2>
          <hr className="editorial-rule mx-auto mb-6" />
          <p className="text-ink-muted mb-10 max-w-lg mx-auto">
            데이터 기반 전략 컨설팅으로 귀사의 비즈니스를 한 단계 도약시켜 드립니다.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-wine hover:bg-wine-dark text-white px-10 py-4 text-sm font-medium transition-colors"
          >
            무료 전략 상담
          </Link>
        </div>
      </section>
    </main>
  )
}
