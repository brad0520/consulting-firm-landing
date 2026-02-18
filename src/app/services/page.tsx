import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '서비스',
  description: '경영 전략, 프로세스 혁신, 성과 관리, 조직 개발, 디지털 전환, 재무 컨설팅 등 ProConsult의 전문 컨설팅 서비스를 확인하세요.',
}

const services = [
  {
    title: '경영 전략 컨설팅',
    desc: '기업의 비전과 목표를 달성하기 위한 전략적 로드맵을 수립합니다.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80',
    features: [
      '비즈니스 전략 수립',
      '시장 분석 및 경쟁사 분석',
      '성장 전략 개발',
      '사업 포트폴리오 최적화',
    ],
  },
  {
    title: '프로세스 혁신',
    desc: '업무 프로세스를 분석하고 최적화하여 효율성을 극대화합니다.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    features: [
      '업무 프로세스 진단',
      '프로세스 리엔지니어링',
      '자동화 솔루션 도입',
      '효율성 개선 컨설팅',
    ],
  },
  {
    title: '성과 관리 시스템',
    desc: 'KPI 설정부터 성과 측정까지 체계적인 관리 시스템을 구축합니다.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    features: [
      'KPI 설계 및 구축',
      '성과 측정 체계 수립',
      '대시보드 개발',
      '성과 평가 시스템 구축',
    ],
  },
  {
    title: '조직 개발',
    desc: '조직 구조 설계와 인재 육성으로 경쟁력을 강화합니다.',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80',
    features: [
      '조직 구조 설계',
      '인재 육성 프로그램',
      '리더십 개발',
      '조직 문화 혁신',
    ],
  },
  {
    title: '디지털 전환',
    desc: '최신 기술을 활용한 디지털 혁신 전략을 제시합니다.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
    features: [
      '디지털 전략 수립',
      'IT 인프라 구축',
      '데이터 분석 시스템',
      'AI/ML 솔루션 도입',
    ],
  },
  {
    title: '재무 컨설팅',
    desc: '재무 구조 분석과 최적화로 건전한 경영을 지원합니다.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    features: [
      '재무 구조 분석',
      '비용 최적화',
      '예산 관리 시스템',
      '투자 전략 수립',
    ],
  },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-28 md:py-36">
        <Image
          src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1920&q=80"
          alt="전문 컨설팅 서비스"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            전문 컨설팅 서비스
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            다양한 산업 분야에서의 경험을 바탕으로
            최적화된 솔루션을 제공합니다
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="space-y-20 md:space-y-28">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
                  idx % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
                }`}
              >
                <div className="relative h-72 md:h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <div className="border-t border-gray-100 pt-6">
                    <h4 className="text-sm font-semibold text-slate-900 uppercase tracking-wider mb-4">
                      주요 서비스
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, fIdx) => (
                        <li
                          key={fIdx}
                          className="flex items-center gap-3 text-gray-600"
                        >
                          <span className="flex-shrink-0 w-5 h-5 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold">
                            &#10003;
                          </span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 font-semibold tracking-widest uppercase mb-3">
              Our Process
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              프로젝트 진행 프로세스
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: '01', title: '진단 & 분석', desc: '현황 파악과 핵심 과제를 도출합니다' },
              { step: '02', title: '전략 수립', desc: '맞춤형 솔루션과 로드맵을 설계합니다' },
              { step: '03', title: '실행 & 지원', desc: '전문 컨설턴트가 함께 실행합니다' },
              { step: '04', title: '성과 측정', desc: '결과를 분석하고 개선점을 도출합니다' },
            ].map((process, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-gray-100 text-center hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                <div className="text-4xl font-bold text-blue-600/20 mb-4">{process.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{process.title}</h3>
                <p className="text-gray-500">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            프로젝트 상담이 필요하신가요?
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            전문 컨설턴트가 귀사에 최적화된
            솔루션을 제안해드립니다
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-slate-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[44px]"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </main>
  )
}
