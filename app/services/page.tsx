import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '서비스',
  description: '경영 전략, 디지털 전환, 조직 혁신, 데이터 분석, 성과 관리, 재무 컨설팅 등 스트래티지원의 전문 컨설팅 서비스를 확인하세요.',
}

const services = [
  {
    num: '01',
    title: '경영 전략 컨설팅',
    desc: '데이터 기반의 시장 분석과 경쟁 전략 수립으로 기업의 지속 가능한 성장을 설계합니다.',
    features: ['비즈니스 모델 혁신', '시장 진입 전략 수립', '경쟁사 분석 및 포지셔닝', '사업 포트폴리오 최적화'],
  },
  {
    num: '02',
    title: '디지털 전환 (DX)',
    desc: 'AI, 클라우드, 빅데이터 등 최신 기술을 활용하여 비즈니스 프로세스를 근본적으로 혁신합니다.',
    features: ['디지털 전략 로드맵 수립', 'AI/ML 솔루션 도입', '클라우드 마이그레이션', '데이터 인프라 구축'],
  },
  {
    num: '03',
    title: '조직 혁신',
    desc: '조직 구조 재설계와 변화관리 전략으로 실행력 있는 고성과 조직을 만듭니다.',
    features: ['조직 구조 설계 및 재편', '리더십 역량 개발', '변화관리 프로그램', '인재 채용/육성 전략'],
  },
  {
    num: '04',
    title: '데이터 분석 & 인사이트',
    desc: '정교한 데이터 분석과 시각화를 통해 의사결정의 정확도와 속도를 높입니다.',
    features: ['데이터 전략 수립', '예측 분석 모델링', '대시보드 구축', '데이터 거버넌스 체계'],
  },
  {
    num: '05',
    title: '성과 관리 시스템',
    desc: 'OKR/KPI 체계 구축과 실시간 성과 모니터링으로 지속적인 성과 개선을 실현합니다.',
    features: ['OKR/KPI 프레임워크 설계', '성과 측정 체계 구축', '실시간 모니터링 대시보드', '인센티브 시스템 설계'],
  },
  {
    num: '06',
    title: '재무 전략 컨설팅',
    desc: '재무 구조 최적화와 투자 전략 수립으로 기업 가치를 극대화합니다.',
    features: ['재무 구조 분석 및 최적화', 'M&A 자문 및 실사', '비용 절감 전략', '투자 의사결정 지원'],
  },
]

const process = [
  { step: '01', title: '진단 & 분석', desc: '데이터 기반 현황 진단과 핵심 과제를 도출합니다' },
  { step: '02', title: '전략 설계', desc: '맞춤형 솔루션과 실행 로드맵을 수립합니다' },
  { step: '03', title: '실행 & 지원', desc: '현장에서 전문 컨설턴트가 함께 실행합니다' },
  { step: '04', title: '성과 측정', desc: '정량적 지표로 성과를 측정하고 개선합니다' },
]

export default function ServicesPage() {
  return (
    <main>
      {/* Hero — Editorial */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <p className="text-wine text-sm tracking-[0.3em] uppercase mb-6">
            Our Services
          </p>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-ink leading-[1.05] mb-8">
            전문 컨설팅 서비스
          </h1>
          <hr className="editorial-rule mb-8" />
          <p className="text-ink-muted text-lg sm:text-xl max-w-2xl leading-relaxed">
            각 분야 최고 전문가들의 깊이 있는 분석과
            맞춤형 솔루션으로 실질적인 비즈니스 성과를 만들어냅니다.
          </p>
        </div>
      </section>

      {/* Services — Editorial numbered list (expanded) */}
      <section className="py-20 sm:py-28 bg-cream-dark">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          {services.map((service) => (
            <div
              key={service.num}
              className="py-12 sm:py-16 border-t border-ink/10 first:border-t-0"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
                <div className="lg:col-span-1">
                  <span className="number-accent text-3xl font-editorial">
                    {service.num}
                  </span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="font-editorial text-2xl sm:text-3xl mb-4">
                    {service.title}
                  </h3>
                  <p className="text-ink-muted leading-relaxed">
                    {service.desc}
                  </p>
                </div>
                <div className="lg:col-span-7">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div
                        key={feature}
                        className="flex items-baseline gap-3"
                      >
                        <span className="text-wine text-xs">&#9642;</span>
                        <span className="text-sm text-ink">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process — Editorial 4-step */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="mb-16">
            <p className="text-wine text-sm tracking-[0.3em] uppercase mb-3">
              How We Work
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl">
              프로젝트 진행 프로세스
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
            {process.map((item) => (
              <div key={item.step} className="bg-cream p-8 sm:p-10">
                <span className="font-editorial text-4xl text-ink/10 block mb-6">
                  {item.step}
                </span>
                <h3 className="font-editorial text-xl mb-3">{item.title}</h3>
                <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Editorial minimal */}
      <section className="py-24 sm:py-32 bg-ink text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="font-editorial text-3xl sm:text-5xl text-white mb-6">
            프로젝트 상담이<br />
            필요하신가요?
          </h2>
          <hr className="editorial-rule mx-auto mb-6 border-white/20" />
          <p className="text-white/40 mb-10 max-w-lg mx-auto">
            전문 컨설턴트가 귀사에 최적화된 솔루션을 제안해드립니다.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-wine hover:bg-wine-dark text-white px-10 py-4 text-sm font-medium transition-colors"
          >
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </main>
  )
}
