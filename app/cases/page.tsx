import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '성공사례',
  description: '스트래티지원이 고객사와 함께 만들어온 데이터 기반 전략 컨설팅 성공 사례를 확인하세요.',
}

const caseStudies = [
  {
    company: '글로벌 제조사 A',
    industry: '제조업',
    project: '스마트 팩토리 전환',
    duration: '12개월',
    metric: '+42%',
    metricLabel: '생산성 향상',
    challenges: ['레거시 시스템 의존도 높음', '생산 데이터 활용 미흡', '현장 디지털 역량 부족'],
    solutions: ['단계적 디지털 전환 로드맵 수립', 'IoT 센서 기반 실시간 모니터링 도입', 'AI 기반 품질 예측 시스템 구축'],
    outcomes: ['생산성 42% 향상', '품질 불량률 55% 감소', '설비 가동률 20% 개선'],
  },
  {
    company: '국내 금융사 B',
    industry: '금융업',
    project: '업무 프로세스 자동화',
    duration: '8개월',
    metric: '-35%',
    metricLabel: '운영비 절감',
    challenges: ['복잡한 수작업 프로세스', '높은 운영 비용 구조', '느린 고객 응대 시간'],
    solutions: ['RPA 자동화 도입 (47개 프로세스)', '업무 프로세스 재설계', 'AI 챗봇 기반 고객 응대'],
    outcomes: ['운영 비용 35% 절감', '업무 처리 시간 50% 단축', '고객 만족도 28% 향상'],
  },
  {
    company: '유통 대기업 C',
    industry: '유통업',
    project: '옴니채널 전략 수립',
    duration: '10개월',
    metric: '+58%',
    metricLabel: '온라인 매출',
    challenges: ['온/오프라인 채널 데이터 단절', '고객 이탈률 증가 추세', '재고 관리 비효율'],
    solutions: ['CDP(고객 데이터 플랫폼) 구축', '옴니채널 통합 플랫폼 설계', '예측 기반 재고 최적화'],
    outcomes: ['온라인 매출 58% 증가', '고객 재구매율 32% 향상', '재고 회전율 40% 개선'],
  },
  {
    company: '물류 전문기업 D',
    industry: '물류업',
    project: '공급망 최적화',
    duration: '9개월',
    metric: '-48%',
    metricLabel: '배송시간 단축',
    challenges: ['배송 지연 빈발', '높은 라스트마일 비용', '수요 예측 부정확'],
    solutions: ['AI 기반 수요 예측 모델 구축', '배송 경로 실시간 최적화', '스마트 창고 관리 시스템 도입'],
    outcomes: ['배송 시간 48% 단축', '물류 비용 28% 절감', '수요 예측 정확도 89%'],
  },
  {
    company: '바이오 기업 E',
    industry: '제약/바이오',
    project: 'R&D 프로세스 혁신',
    duration: '14개월',
    metric: '-32%',
    metricLabel: '개발기간 단축',
    challenges: ['긴 신약 개발 기간', '데이터 사일로 문제', 'R&D 비용 부담 증가'],
    solutions: ['AI 기반 후보물질 스크리닝', '통합 연구 데이터 플랫폼 구축', '임상시험 설계 최적화'],
    outcomes: ['개발 기간 32% 단축', '후보물질 성공률 25% 향상', 'R&D 비용 18% 절감'],
  },
  {
    company: '건설 그룹 F',
    industry: '건설업',
    project: '프로젝트 관리 체계 구축',
    duration: '7개월',
    metric: '92%',
    metricLabel: '일정 준수율',
    challenges: ['프로젝트 지연 및 비용 초과', '현장 간 정보 단절', '리스크 관리 부재'],
    solutions: ['통합 프로젝트 관리 시스템(PMIS)', '실시간 진도 모니터링 대시보드', '리스크 조기경보 체계 구축'],
    outcomes: ['일정 준수율 92% 달성', '비용 초과 55% 감소', '현장 생산성 38% 향상'],
  },
]

export default function CasesPage() {
  return (
    <main>
      {/* Hero — Editorial */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <p className="text-wine text-sm tracking-[0.3em] uppercase mb-6">
            Case Studies
          </p>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-ink leading-[1.05] mb-8">
            검증된 성공 사례
          </h1>
          <hr className="editorial-rule mb-8" />
          <p className="text-ink-muted text-lg sm:text-xl max-w-2xl leading-relaxed">
            데이터 기반 전략 컨설팅으로 만들어낸
            실질적인 비즈니스 성과를 확인하세요.
          </p>
        </div>
      </section>

      {/* Summary stat strip */}
      <section className="bg-ink py-14">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { value: '520+', label: '완료 프로젝트' },
              { value: '97%', label: '고객 만족도' },
              { value: '평균 35%', label: '성과 개선율' },
              { value: '15+', label: '산업 분야' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-editorial text-4xl sm:text-5xl text-white mb-2">
                  {stat.value}
                </div>
                <div className="text-white/40 text-sm tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case studies — Editorial detail cards */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6 space-y-0">
          {caseStudies.map((cs) => (
            <div
              key={cs.company}
              className="py-12 sm:py-16 border-t border-ink/10 first:border-t-0"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
                <div>
                  <span className="text-xs text-wine tracking-[0.2em] uppercase">
                    {cs.industry}
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl mt-2">{cs.company}</h3>
                  <p className="text-ink-faint text-sm mt-1">{cs.project} — {cs.duration}</p>
                </div>
                <div className="text-left sm:text-right">
                  <span className="font-editorial text-5xl sm:text-6xl text-ink">
                    {cs.metric}
                  </span>
                  <p className="text-sm text-wine font-medium mt-1">{cs.metricLabel}</p>
                </div>
              </div>

              {/* Content — 3 columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <h4 className="text-xs text-ink-faint uppercase tracking-[0.2em] mb-4">
                    과제
                  </h4>
                  <ul className="space-y-3">
                    {cs.challenges.map((c) => (
                      <li key={c} className="text-sm text-ink-muted leading-relaxed pl-4 border-l-2 border-ink/10">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs text-ink-faint uppercase tracking-[0.2em] mb-4">
                    솔루션
                  </h4>
                  <ul className="space-y-3">
                    {cs.solutions.map((s) => (
                      <li key={s} className="text-sm text-ink-muted leading-relaxed pl-4 border-l-2 border-wine/30">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs text-ink-faint uppercase tracking-[0.2em] mb-4">
                    성과
                  </h4>
                  <ul className="space-y-3">
                    {cs.outcomes.map((o) => (
                      <li key={o} className="text-sm text-ink font-medium leading-relaxed pl-4 border-l-2 border-wine">
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — Editorial minimal */}
      <section className="py-24 sm:py-32 bg-cream-dark text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="font-editorial text-3xl sm:text-5xl mb-6">
            다음 성공 사례의<br />주인공이 되어보세요
          </h2>
          <hr className="editorial-rule mx-auto mb-6" />
          <p className="text-ink-muted mb-10 max-w-lg mx-auto">
            데이터 기반 전략으로 귀사의 성공 스토리를 만들어가세요.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-ink hover:bg-ink-light text-white px-10 py-4 text-sm font-medium transition-colors"
          >
            프로젝트 상담 신청
          </Link>
        </div>
      </section>
    </main>
  )
}
