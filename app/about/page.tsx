import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '회사소개',
  description: '스트래티지원은 2008년 설립 이후 데이터 기반 전략 컨설팅으로 520개 이상의 프로젝트를 성공적으로 수행해왔습니다.',
}

const values = [
  {
    title: '데이터 중심',
    desc: '감이 아닌 데이터와 분석에 기반한 전략을 수립합니다',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
      </svg>
    ),
  },
  {
    title: '실행력',
    desc: '전략 수립에서 현장 실행까지 함께하는 파트너십',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
      </svg>
    ),
  },
  {
    title: '혁신',
    desc: '최신 기술과 방법론을 지속적으로 연구하고 적용합니다',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: '성과 중심',
    desc: '정량적 성과 지표를 기준으로 프로젝트를 관리합니다',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
      </svg>
    ),
  },
]

const team = [
  {
    name: '김태현',
    position: '대표이사 & 수석 전략가',
    specialty: '경영 전략, M&A 자문',
    experience: '22년 경력',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80',
  },
  {
    name: '이수진',
    position: 'CFO & 파트너',
    specialty: '재무 전략, 기업가치 분석',
    experience: '19년 경력',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
  {
    name: '박준혁',
    position: 'CDO & 디지털 총괄',
    specialty: 'DX 전략, AI/데이터',
    experience: '16년 경력',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: '최유나',
    position: '조직 혁신 파트너',
    specialty: '조직 설계, 변화관리',
    experience: '14년 경력',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
]

const milestones = [
  { year: '2008', event: '스트래티지원 설립' },
  { year: '2012', event: '100번째 프로젝트 완료' },
  { year: '2015', event: '디지털 전환 부문 신설' },
  { year: '2018', event: '아시아 컨설팅 어워드 수상' },
  { year: '2021', event: 'AI 연구소 설립' },
  { year: '2024', event: '520+ 프로젝트 돌파' },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section - Light */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-50" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-navy-50 rounded-full translate-y-1/2 -translate-x-1/3" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-4">
              About Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              데이터와 전략으로<br />
              기업의 미래를 설계합니다
            </h1>
            <p className="text-lg md:text-xl text-navy-500 leading-relaxed">
              스트래티지원은 2008년 설립 이후 데이터 기반 전략 컨설팅으로
              대한민국 주요 기업들의 성장을 함께 만들어온 전문 파트너입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 md:py-28 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-3">
                Our Story
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6">
                18년간 축적된<br />전략 컨설팅 노하우
              </h2>
              <p className="text-lg text-navy-600 leading-relaxed mb-6">
                스트래티지원은 &ldquo;데이터가 전략의 출발점&rdquo;이라는 철학 아래,
                기업의 복잡한 과제를 체계적으로 분석하고 실행 가능한 솔루션을
                제시하는 데 집중해왔습니다.
              </p>
              <p className="text-lg text-navy-500 leading-relaxed mb-8">
                520개 이상의 프로젝트와 97%의 고객 재계약율은 우리의
                접근 방식과 실행력이 검증되었음을 보여줍니다.
                제조, 금융, 유통, IT 등 다양한 산업에서 깊이 있는
                전문성을 보유하고 있습니다.
              </p>
              {/* Key metrics */}
              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: '520+', label: '완료 프로젝트' },
                  { value: '130+', label: '전문 컨설턴트' },
                  { value: '97%', label: '재계약율' },
                ].map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-navy-900">{stat.value}</div>
                    <div className="text-sm text-navy-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 md:h-[480px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                alt="스트래티지원 오피스"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-3">
              Milestones
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              성장의 발자취
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {milestones.map((item, idx) => (
              <div key={idx} className="text-center p-6 rounded-2xl bg-gray-50/80 border border-gray-100 hover:border-teal-200 hover:bg-teal-50/30 transition-all duration-300">
                <div className="text-2xl font-bold text-teal-600 mb-2">{item.year}</div>
                <p className="text-sm text-navy-600 font-medium">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-navy-50/30">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-3">
              Core Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              우리의 핵심 가치
            </h2>
            <p className="text-lg text-navy-400">
              스트래티지원의 모든 프로젝트는 4가지 핵심 가치 위에서 진행됩니다
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl text-center border border-gray-100 hover:border-teal-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-navy-500 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-3">
              Leadership Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              리더십 팀
            </h2>
            <p className="text-lg text-navy-400">
              각 분야 최고의 전문가들이 프로젝트를 이끕니다
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-teal-200 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-72 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-navy-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-teal-600 font-semibold text-sm mb-3">
                    {member.position}
                  </p>
                  <p className="text-sm text-navy-400 mb-1">{member.specialty}</p>
                  <p className="text-xs text-navy-300 font-medium">{member.experience}</p>
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
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                스트래티지원과 함께<br />
                새로운 도약을 시작하세요
              </h2>
              <p className="text-lg text-navy-300 mb-10">
                전문 컨설턴트가 귀사의 성장을 위한
                최적의 전략을 제안해드립니다
              </p>
              <Link
                href="/contact"
                className="inline-block bg-teal-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors min-h-[44px]"
              >
                무료 전략 상담
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
