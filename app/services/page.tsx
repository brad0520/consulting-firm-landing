import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '서비스',
  description: '경영 전략, 디지털 전환, 조직 혁신, 데이터 분석, 성과 관리, 재무 컨설팅 등 스트래티지원의 전문 컨설팅 서비스를 확인하세요.',
}

const services = [
  {
    number: '01',
    title: '경영 전략 컨설팅',
    desc: '데이터 기반의 시장 분석과 경쟁 전략 수립으로 기업의 지속 가능한 성장을 설계합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
      </svg>
    ),
    features: [
      '비즈니스 모델 혁신',
      '시장 진입 전략 수립',
      '경쟁사 분석 및 포지셔닝',
      '사업 포트폴리오 최적화',
    ],
  },
  {
    number: '02',
    title: '디지털 전환 (DX)',
    desc: 'AI, 클라우드, 빅데이터 등 최신 기술을 활용하여 비즈니스 프로세스를 근본적으로 혁신합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    features: [
      '디지털 전략 로드맵 수립',
      'AI/ML 솔루션 도입',
      '클라우드 마이그레이션',
      '데이터 인프라 구축',
    ],
  },
  {
    number: '03',
    title: '조직 혁신',
    desc: '조직 구조 재설계와 변화관리 전략으로 실행력 있는 고성과 조직을 만듭니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
      </svg>
    ),
    features: [
      '조직 구조 설계 및 재편',
      '리더십 역량 개발',
      '변화관리 프로그램',
      '인재 채용/육성 전략',
    ],
  },
  {
    number: '04',
    title: '데이터 분석 & 인사이트',
    desc: '정교한 데이터 분석과 시각화를 통해 의사결정의 정확도와 속도를 높입니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
    features: [
      '데이터 전략 수립',
      '예측 분석 모델링',
      '대시보드 구축',
      '데이터 거버넌스 체계',
    ],
  },
  {
    number: '05',
    title: '성과 관리 시스템',
    desc: 'OKR/KPI 체계 구축과 실시간 성과 모니터링으로 지속적인 성과 개선을 실현합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    features: [
      'OKR/KPI 프레임워크 설계',
      '성과 측정 체계 구축',
      '실시간 모니터링 대시보드',
      '인센티브 시스템 설계',
    ],
  },
  {
    number: '06',
    title: '재무 전략 컨설팅',
    desc: '재무 구조 최적화와 투자 전략 수립으로 기업 가치를 극대화합니다.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    features: [
      '재무 구조 분석 및 최적화',
      'M&A 자문 및 실사',
      '비용 절감 전략',
      '투자 의사결정 지원',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section - Light */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-50 rounded-full -translate-y-1/2 -translate-x-1/3 opacity-60" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-navy-50 rounded-full translate-y-1/2 translate-x-1/3 opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-4">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              전문 컨설팅 서비스
            </h1>
            <p className="text-lg md:text-xl text-navy-500 leading-relaxed">
              각 분야 최고 전문가들의 깊이 있는 분석과
              맞춤형 솔루션으로 실질적인 비즈니스 성과를 만들어냅니다
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 md:py-28 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="space-y-6">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Number & Icon */}
                  <div className="lg:col-span-1 flex lg:flex-col items-center lg:items-start gap-4 lg:gap-3">
                    <span className="text-3xl font-bold text-navy-100">{service.number}</span>
                    <div className="w-12 h-12 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-5">
                    <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-navy-500 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="lg:col-span-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-3 p-3 bg-gray-50/80 rounded-xl"
                        >
                          <span className="flex-shrink-0 w-5 h-5 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center text-xs">
                            &#10003;
                          </span>
                          <span className="text-sm text-navy-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-3">
              How We Work
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              프로젝트 진행 프로세스
            </h2>
            <p className="text-lg text-navy-400 max-w-2xl mx-auto">
              체계적인 4단계 프로세스로 진단부터 성과 달성까지 함께합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: '진단 & 분석', desc: '데이터 기반 현황 진단과 핵심 과제를 도출합니다', color: 'bg-teal-500' },
              { step: '02', title: '전략 설계', desc: '맞춤형 솔루션과 실행 로드맵을 수립합니다', color: 'bg-navy-700' },
              { step: '03', title: '실행 & 지원', desc: '현장에서 전문 컨설턴트가 함께 실행합니다', color: 'bg-teal-600' },
              { step: '04', title: '성과 측정', desc: '정량적 지표로 성과를 측정하고 개선합니다', color: 'bg-navy-800' },
            ].map((process, idx) => (
              <div key={idx} className="relative bg-white p-8 rounded-2xl border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all duration-300">
                <div className={`w-10 h-10 ${process.color} rounded-xl flex items-center justify-center text-white font-bold text-sm mb-5`}>
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{process.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{process.desc}</p>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-6 text-navy-200">
                    <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                )}
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
                프로젝트 상담이 필요하신가요?
              </h2>
              <p className="text-lg text-navy-300 mb-10">
                전문 컨설턴트가 귀사에 최적화된 솔루션을 제안해드립니다
              </p>
              <Link
                href="/contact"
                className="inline-block bg-teal-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors min-h-[44px]"
              >
                무료 상담 신청하기
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
