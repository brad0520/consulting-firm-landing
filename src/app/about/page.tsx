import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '회사소개',
  description: 'ProConsult는 2010년 설립 이후 다양한 산업 분야에서 500개 이상의 프로젝트를 성공적으로 수행해왔습니다.',
}

const values = [
  {
    title: '전문성',
    desc: '15년간 축적된 업계 최고의 전문 지식과 경험',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342" />
      </svg>
    ),
  },
  {
    title: '신뢰',
    desc: '고객과의 약속을 최우선으로 하는 책임감',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: '혁신',
    desc: '끊임없는 연구와 혁신으로 최적의 솔루션 제공',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.383a14.406 14.406 0 0 1-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 1 0-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    title: '성과',
    desc: '실질적인 성과 창출에 집중하는 결과 중심',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
  },
]

const team = [
  {
    name: '김철수',
    position: 'CEO & 대표 컨설턴트',
    specialty: '경영 전략, 조직 개발',
    experience: '20년 경력',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
  },
  {
    name: '이영희',
    position: 'CFO',
    specialty: '재무 컨설팅, 리스크 관리',
    experience: '18년 경력',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80',
  },
  {
    name: '박민수',
    position: '디지털 전환 총괄',
    specialty: 'IT 전략, 디지털 혁신',
    experience: '15년 경력',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    name: '정수진',
    position: '산업 전략 이사',
    specialty: '제조/유통 컨설팅',
    experience: '12년 경력',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-28 md:py-36">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80"
          alt="ProConsult 팀 미팅"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ProConsult 소개
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            15년간의 풍부한 경험과 검증된 방법론으로
            고객의 비즈니스 성장을 이끌어내는 전문 파트너
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm text-blue-600 font-semibold tracking-widest uppercase mb-3">
                About Us
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                비즈니스 혁신의<br />
                믿을 수 있는 파트너
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                ProConsult는 2010년 설립 이후 다양한 산업 분야에서 500개 이상의
                프로젝트를 성공적으로 수행해왔습니다. 우리는 단순한 컨설팅을
                넘어서 고객사의 실질적인 성과 창출에 집중합니다.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                축적된 경험과 전문성을 바탕으로 전략 수립부터 실행, 성과 측정까지
                전 과정에서 고객사와 함께합니다. 우리의 목표는 고객의 성공이며,
                이를 위해 최선을 다하고 있습니다.
              </p>
            </div>
            <div className="relative h-80 md:h-[450px] rounded-2xl overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="ProConsult 팀워크"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 font-semibold tracking-widest uppercase mb-3">
              Core Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              핵심 가치
            </h2>
            <p className="text-lg text-gray-500">
              ProConsult가 지향하는 가치
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl text-center border border-gray-100 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mx-auto mb-5">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
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
            <p className="text-sm text-blue-600 font-semibold tracking-widest uppercase mb-3">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              전문가 팀
            </h2>
            <p className="text-lg text-gray-500">
              각 분야 최고의 전문가들이 함께합니다
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-slate-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-semibold text-sm mb-3">
                    {member.position}
                  </p>
                  <p className="text-sm text-gray-500 mb-1">{member.specialty}</p>
                  <p className="text-xs text-gray-400 font-medium">{member.experience}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ProConsult와 함께<br />
            새로운 도약을 시작하세요
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            전문 컨설턴트가 귀사의 성장을 위한
            최적의 솔루션을 제안해드립니다
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-slate-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[44px]"
          >
            무료 상담 신청
          </Link>
        </div>
      </section>
    </main>
  )
}
