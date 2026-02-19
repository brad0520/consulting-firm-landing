import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '솔루션',
  description: '제조, 금융, 유통, 헬스케어, IT 등 각 산업의 특성을 이해하고 최적화된 전략 컨설팅 솔루션을 제공합니다.',
}

const industrySolutions = [
  {
    title: '제조업',
    subtitle: '스마트 팩토리 & 공급망 최적화',
    desc: 'IoT, AI 기반 생산 최적화와 공급망 디지털화로 제조 경쟁력을 강화합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
    solutions: [
      '생산 프로세스 AI 최적화',
      '품질 예측 시스템 구축',
      '스마트 공급망 관리(SCM)',
      '설비 예지 보전 시스템',
    ],
    color: 'border-teal-500',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-600',
  },
  {
    title: '금융업',
    subtitle: '디지털 금융 혁신 & 리스크 관리',
    desc: 'AI 기반 리스크 분석과 프로세스 자동화로 금융 서비스 혁신을 주도합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0 0 12 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75Z" />
      </svg>
    ),
    solutions: [
      '디지털 뱅킹 전략 수립',
      'AI 기반 리스크 관리',
      '고객 경험(CX) 혁신',
      '규제 준수 자동화(RegTech)',
    ],
    color: 'border-navy-500',
    bgColor: 'bg-navy-50',
    textColor: 'text-navy-600',
  },
  {
    title: '유통/리테일',
    subtitle: '옴니채널 전략 & 고객 인사이트',
    desc: '고객 데이터 통합과 옴니채널 전략으로 리테일 경쟁력을 강화합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
      </svg>
    ),
    solutions: [
      '옴니채널 플랫폼 설계',
      'CDP(고객 데이터 플랫폼) 구축',
      'AI 기반 재고 최적화',
      '개인화 마케팅 전략',
    ],
    color: 'border-teal-500',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-600',
  },
  {
    title: '헬스케어/바이오',
    subtitle: 'R&D 혁신 & 디지털 헬스',
    desc: 'AI 기반 연구 혁신과 환자 중심 디지털 서비스로 헬스케어 미래를 선도합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
      </svg>
    ),
    solutions: [
      'AI 기반 신약 후보 발굴',
      '임상시험 설계 최적화',
      '병원 운영 효율화',
      '디지털 헬스케어 전략',
    ],
    color: 'border-navy-500',
    bgColor: 'bg-navy-50',
    textColor: 'text-navy-600',
  },
  {
    title: 'IT/테크',
    subtitle: '기술 전략 & 플랫폼 혁신',
    desc: '클라우드 전환, AI 도입, 플랫폼 전략 수립으로 기술 기업의 성장을 가속화합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    solutions: [
      '클라우드 네이티브 전환',
      'AI/MLOps 체계 구축',
      'DevOps 성숙도 향상',
      '플랫폼 비즈니스 전략',
    ],
    color: 'border-teal-500',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-600',
  },
]

const differentiators = [
  {
    title: '산업 전문성',
    desc: '15개 이상 산업의 도메인 전문가가 프로젝트에 직접 참여하여 깊이 있는 인사이트를 제공합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
      </svg>
    ),
  },
  {
    title: '데이터 기반 방법론',
    desc: '520개 이상의 프로젝트에서 검증된 자체 분석 프레임워크와 데이터 기반 의사결정 체계를 적용합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
  },
  {
    title: '성과 보장형 파트너십',
    desc: '단순 자문이 아닌 현장 실행까지 함께하며, 정량적 성과 달성을 목표로 프로젝트를 관리합니다.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
]

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero Section - Light */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-white relative overflow-hidden">
        <div className="absolute -top-20 right-0 w-80 h-80 bg-navy-50 rounded-full opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-4">
              Industry Solutions
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              산업별 맞춤 솔루션
            </h1>
            <p className="text-lg md:text-xl text-navy-500 leading-relaxed">
              각 산업의 특성과 과제를 깊이 이해하고,
              데이터 기반의 최적화된 전략 솔루션을 제공합니다
            </p>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 md:py-28 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-6">
          {industrySolutions.map((solution, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-2xl border-l-4 ${solution.color} border border-gray-100 p-8 md:p-10 hover:shadow-lg transition-all duration-300`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Header */}
                <div className="lg:col-span-5">
                  <div className={`inline-flex w-12 h-12 ${solution.bgColor} ${solution.textColor} rounded-xl items-center justify-center mb-4`}>
                    {solution.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-navy-900 mb-1">
                    {solution.title}
                  </h3>
                  <p className="text-sm font-semibold text-teal-600 mb-4">{solution.subtitle}</p>
                  <p className="text-navy-500 leading-relaxed">
                    {solution.desc}
                  </p>
                </div>

                {/* Solutions List */}
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {solution.solutions.map((item, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-3 p-4 bg-gray-50/80 rounded-xl border border-gray-100"
                      >
                        <div className={`flex-shrink-0 w-8 h-8 ${solution.bgColor} ${solution.textColor} rounded-lg flex items-center justify-center font-bold text-xs`}>
                          {sIdx + 1}
                        </div>
                        <span className="text-sm text-navy-700 font-medium">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why StrategyOne */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-3">
              Why StrategyOne
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              스트래티지원을 선택하는 이유
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {differentiators.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all duration-300">
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-navy-900 mb-3">{item.title}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{item.desc}</p>
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
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                귀사의 산업에 맞는<br />솔루션을 찾고 계신가요?
              </h2>
              <p className="text-lg text-navy-300 mb-10">
                전문 컨설턴트가 맞춤형 전략을 제안해드립니다
              </p>
              <Link
                href="/contact"
                className="inline-block bg-teal-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors min-h-[44px]"
              >
                상담 신청하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
