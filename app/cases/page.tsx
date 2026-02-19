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
    challenges: [
      '레거시 시스템 의존도 높음',
      '생산 데이터 활용 미흡',
      '현장 디지털 역량 부족',
    ],
    solutions: [
      '단계적 디지털 전환 로드맵 수립',
      'IoT 센서 기반 실시간 모니터링 도입',
      'AI 기반 품질 예측 시스템 구축',
    ],
    outcomes: [
      '생산성 42% 향상',
      '품질 불량률 55% 감소',
      '설비 가동률 20% 개선',
    ],
  },
  {
    company: '국내 금융사 B',
    industry: '금융업',
    project: '업무 프로세스 자동화',
    duration: '8개월',
    metric: '-35%',
    metricLabel: '운영비 절감',
    challenges: [
      '복잡한 수작업 프로세스',
      '높은 운영 비용 구조',
      '느린 고객 응대 시간',
    ],
    solutions: [
      'RPA 자동화 도입 (47개 프로세스)',
      '업무 프로세스 재설계',
      'AI 챗봇 기반 고객 응대',
    ],
    outcomes: [
      '운영 비용 35% 절감',
      '업무 처리 시간 50% 단축',
      '고객 만족도 28% 향상',
    ],
  },
  {
    company: '유통 대기업 C',
    industry: '유통업',
    project: '옴니채널 전략 수립',
    duration: '10개월',
    metric: '+58%',
    metricLabel: '온라인 매출',
    challenges: [
      '온/오프라인 채널 데이터 단절',
      '고객 이탈률 증가 추세',
      '재고 관리 비효율',
    ],
    solutions: [
      'CDP(고객 데이터 플랫폼) 구축',
      '옴니채널 통합 플랫폼 설계',
      '예측 기반 재고 최적화',
    ],
    outcomes: [
      '온라인 매출 58% 증가',
      '고객 재구매율 32% 향상',
      '재고 회전율 40% 개선',
    ],
  },
  {
    company: '물류 전문기업 D',
    industry: '물류업',
    project: '공급망 최적화',
    duration: '9개월',
    metric: '-48%',
    metricLabel: '배송시간 단축',
    challenges: [
      '배송 지연 빈발',
      '높은 라스트마일 비용',
      '수요 예측 부정확',
    ],
    solutions: [
      'AI 기반 수요 예측 모델 구축',
      '배송 경로 실시간 최적화',
      '스마트 창고 관리 시스템 도입',
    ],
    outcomes: [
      '배송 시간 48% 단축',
      '물류 비용 28% 절감',
      '수요 예측 정확도 89%',
    ],
  },
  {
    company: '바이오 기업 E',
    industry: '제약/바이오',
    project: 'R&D 프로세스 혁신',
    duration: '14개월',
    metric: '-32%',
    metricLabel: '개발기간 단축',
    challenges: [
      '긴 신약 개발 기간',
      '데이터 사일로 문제',
      'R&D 비용 부담 증가',
    ],
    solutions: [
      'AI 기반 후보물질 스크리닝',
      '통합 연구 데이터 플랫폼 구축',
      '임상시험 설계 최적화',
    ],
    outcomes: [
      '개발 기간 32% 단축',
      '후보물질 성공률 25% 향상',
      'R&D 비용 18% 절감',
    ],
  },
  {
    company: '건설 그룹 F',
    industry: '건설업',
    project: '프로젝트 관리 체계 구축',
    duration: '7개월',
    metric: '92%',
    metricLabel: '일정 준수율',
    challenges: [
      '프로젝트 지연 및 비용 초과',
      '현장 간 정보 단절',
      '리스크 관리 부재',
    ],
    solutions: [
      '통합 프로젝트 관리 시스템(PMIS)',
      '실시간 진도 모니터링 대시보드',
      '리스크 조기경보 체계 구축',
    ],
    outcomes: [
      '일정 준수율 92% 달성',
      '비용 초과 55% 감소',
      '현장 생산성 38% 향상',
    ],
  },
]

export default function CasesPage() {
  return (
    <main>
      {/* Hero Section - Light */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-10 right-10 w-64 h-64 bg-teal-50 rounded-full opacity-40" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-navy-50 rounded-full opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-4">
              Case Studies
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              검증된 성공 사례
            </h1>
            <p className="text-lg md:text-xl text-navy-500 leading-relaxed">
              데이터 기반 전략 컨설팅으로 만들어낸
              실질적인 비즈니스 성과를 확인하세요
            </p>
          </div>
        </div>
      </section>

      {/* Summary Stats */}
      <section className="py-12 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '520+', label: '완료 프로젝트' },
              { value: '97%', label: '고객 만족도' },
              { value: '평균 35%', label: '성과 개선율' },
              { value: '15+', label: '산업 분야' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-navy-900">{stat.value}</div>
                <div className="text-sm text-navy-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {caseStudies.map((caseStudy, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-teal-200 hover:shadow-lg transition-all duration-300"
              >
                {/* Header */}
                <div className="p-8 pb-6 border-b border-gray-50">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="inline-block text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-3">
                        {caseStudy.industry}
                      </span>
                      <h3 className="text-xl font-bold text-navy-900">{caseStudy.company}</h3>
                      <p className="text-sm text-navy-400 mt-1">{caseStudy.project} | {caseStudy.duration}</p>
                    </div>
                    <div className="text-right">
                      <span className="text-3xl md:text-4xl font-bold text-navy-900">{caseStudy.metric}</span>
                      <p className="text-xs text-teal-600 font-semibold mt-1">{caseStudy.metricLabel}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-5">
                  {/* Challenges */}
                  <div>
                    <h4 className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-3">
                      과제
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.challenges.map((challenge, cIdx) => (
                        <li key={cIdx} className="flex gap-2 text-sm text-navy-500">
                          <span className="text-navy-300 flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                            </svg>
                          </span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-3">
                      솔루션
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.solutions.map((solution, sIdx) => (
                        <li key={sIdx} className="flex gap-2 text-sm text-navy-500">
                          <span className="text-teal-500 flex-shrink-0 mt-0.5">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                          </span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-xs font-bold text-navy-800 uppercase tracking-wider mb-3">
                      성과
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {caseStudy.outcomes.map((outcome, oIdx) => (
                        <span
                          key={oIdx}
                          className="inline-flex items-center gap-1.5 text-sm text-teal-700 bg-teal-50 px-3 py-1.5 rounded-lg font-medium"
                        >
                          <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                다음 성공 사례의<br />주인공이 되어보세요
              </h2>
              <p className="text-lg text-navy-300 mb-10">
                데이터 기반 전략으로 귀사의 성공 스토리를 만들어가세요
              </p>
              <Link
                href="/contact"
                className="inline-block bg-teal-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors min-h-[44px]"
              >
                프로젝트 상담 신청
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
