import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '솔루션',
  description: '제조, 금융, 유통, 헬스케어, IT 등 각 산업의 특성을 이해하고 최적화된 컨설팅 솔루션을 제공합니다.',
}

const industrySolutions = [
  {
    title: '제조업 솔루션',
    desc: '스마트 팩토리 구축부터 공급망 최적화까지',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    solutions: [
      '생산 프로세스 최적화',
      '품질 관리 시스템 구축',
      '공급망 관리(SCM)',
      '스마트 팩토리 전환',
    ],
  },
  {
    title: '금융업 솔루션',
    desc: '디지털 금융 혁신과 리스크 관리',
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80',
    solutions: [
      '디지털 뱅킹 전략',
      '리스크 관리 체계',
      '고객 경험 혁신',
      'RegTech 솔루션',
    ],
  },
  {
    title: '유통/리테일 솔루션',
    desc: '옴니채널 전략과 고객 경험 혁신',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
    solutions: [
      '옴니채널 전략 수립',
      '고객 데이터 분석',
      '재고 최적화',
      'e-커머스 전환',
    ],
  },
  {
    title: '헬스케어 솔루션',
    desc: '의료 서비스 혁신과 운영 효율화',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
    solutions: [
      '병원 운영 최적화',
      '환자 경험 개선',
      '의료 데이터 관리',
      '디지털 헬스케어',
    ],
  },
  {
    title: 'IT/기술 솔루션',
    desc: '디지털 혁신과 기술 전략 수립',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
    solutions: [
      '기술 전략 수립',
      '클라우드 전환',
      'DevOps 구축',
      'AI/ML 도입 전략',
    ],
  },
]

export default function SolutionsPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-28 md:py-36">
        <Image
          src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1920&q=80"
          alt="산업별 솔루션"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            산업별 맞춤 솔루션
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            각 산업의 특성을 이해하고
            최적화된 컨설팅 솔루션을 제공합니다
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-20 md:space-y-28">
          {industrySolutions.map((solution, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
                <Image
                  src={solution.image}
                  alt={solution.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  {solution.title}
                </h3>
                <p className="text-lg text-gray-500 mb-8">{solution.desc}</p>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                    주요 솔루션
                  </h4>
                  <ul className="space-y-4">
                    {solution.solutions.map((item, sIdx) => (
                      <li
                        key={sIdx}
                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:bg-gray-100 transition-colors"
                      >
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm">
                          {sIdx + 1}
                        </div>
                        <span className="text-slate-700 font-medium">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why ProConsult */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 font-semibold tracking-widest uppercase mb-3">
              Why ProConsult
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              ProConsult를 선택하는 이유
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: '산업별 전문성',
                desc: '각 산업의 도메인 전문가가 프로젝트에 참여하여 깊이 있는 인사이트를 제공합니다.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                  </svg>
                ),
              },
              {
                title: '검증된 방법론',
                desc: '15년간 500개 이상의 프로젝트에서 검증된 자체 방법론을 적용합니다.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                  </svg>
                ),
              },
              {
                title: '성과 중심 접근',
                desc: '단순 자문이 아닌, 실질적인 성과 달성까지 함께하는 파트너십을 제공합니다.',
                icon: (
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                  </svg>
                ),
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            귀사의 산업에 맞는<br />솔루션을 찾고 계신가요?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            전문 컨설턴트가 맞춤형 솔루션을 제안해드립니다
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-slate-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[44px]"
          >
            상담 신청하기
          </Link>
        </div>
      </section>
    </main>
  )
}
