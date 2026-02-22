import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '회사소개',
  description: '스트래티지원은 2008년 설립 이후 데이터 기반 전략 컨설팅으로 520개 이상의 프로젝트를 성공적으로 수행해왔습니다.',
}

const milestones = [
  { year: '2008', event: '스트래티지원 설립', detail: '데이터 기반 전략 컨설팅 전문 기업으로 출발' },
  { year: '2012', event: '100번째 프로젝트 완료', detail: '제조, 금융, 유통 등 10개 산업 분야 진출' },
  { year: '2015', event: '디지털 전환 부문 신설', detail: 'AI, 클라우드 기반 DX 컨설팅 본격화' },
  { year: '2018', event: '아시아 컨설팅 어워드 수상', detail: '대한민국 데이터 전략 컨설팅 부문 대상' },
  { year: '2021', event: 'AI 연구소 설립', detail: '머신러닝 기반 전략 분석 기술 자체 개발' },
  { year: '2024', event: '520+ 프로젝트 돌파', detail: '97% 고객 재계약율 달성' },
]

const team = [
  { name: '김태현', position: '대표이사 & 수석 전략가', specialty: '경영 전략, M&A 자문', experience: '22년', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80' },
  { name: '이수진', position: 'CFO & 파트너', specialty: '재무 전략, 기업가치 분석', experience: '19년', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80' },
  { name: '박준혁', position: 'CDO & 디지털 총괄', specialty: 'DX 전략, AI/데이터', experience: '16년', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80' },
  { name: '최유나', position: '조직 혁신 파트너', specialty: '조직 설계, 변화관리', experience: '14년', image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80' },
]

const values = [
  { num: '01', title: '데이터 중심', desc: '감이 아닌 데이터와 분석에 기반한 전략을 수립합니다.' },
  { num: '02', title: '실행력', desc: '전략 수립에서 현장 실행까지 함께하는 파트너십을 제공합니다.' },
  { num: '03', title: '혁신', desc: '최신 기술과 방법론을 지속적으로 연구하고 적용합니다.' },
  { num: '04', title: '성과 중심', desc: '정량적 성과 지표를 기준으로 프로젝트를 관리합니다.' },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero — Editorial */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <p className="text-wine text-sm tracking-[0.3em] uppercase mb-6">
            About Us
          </p>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-ink leading-[1.05] mb-8">
            데이터와 전략으로<br />
            기업의 미래를 설계합니다
          </h1>
          <hr className="editorial-rule mb-8" />
          <p className="text-ink-muted text-lg sm:text-xl max-w-2xl leading-relaxed">
            스트래티지원은 2008년 설립 이후 데이터 기반 전략 컨설팅으로
            대한민국 주요 기업들의 성장을 함께 만들어온 전문 파트너입니다.
          </p>
        </div>
      </section>

      {/* Story — Two columns */}
      <section className="py-20 sm:py-28 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <p className="text-wine text-sm tracking-[0.3em] uppercase mb-3">
                Our Story
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl mb-8">
                18년간 축적된<br />전략 컨설팅 노하우
              </h2>
              <div className="space-y-6 text-ink-muted leading-relaxed">
                <p>
                  스트래티지원은 &ldquo;데이터가 전략의 출발점&rdquo;이라는 철학 아래,
                  기업의 복잡한 과제를 체계적으로 분석하고 실행 가능한 솔루션을
                  제시하는 데 집중해왔습니다.
                </p>
                <p>
                  520개 이상의 프로젝트와 97%의 고객 재계약율은 우리의
                  접근 방식과 실행력이 검증되었음을 보여줍니다.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-12">
                {[
                  { value: '520+', label: '완료 프로젝트' },
                  { value: '130+', label: '전문 컨설턴트' },
                  { value: '97%', label: '재계약율' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-editorial text-3xl sm:text-4xl text-ink">{stat.value}</div>
                    <div className="text-ink-faint text-sm mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-80 lg:h-auto min-h-[400px]">
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

      {/* Values — Editorial numbered list */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <div className="mb-16">
            <p className="text-wine text-sm tracking-[0.3em] uppercase mb-3">
              Core Values
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl">
              우리의 핵심 가치
            </h2>
          </div>

          <div className="space-y-0">
            {values.map((item) => (
              <div
                key={item.num}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 py-10 border-t border-ink/10 px-2 sm:px-4"
              >
                <div className="sm:col-span-1">
                  <span className="number-accent text-2xl font-editorial">
                    {item.num}
                  </span>
                </div>
                <div className="sm:col-span-3">
                  <h3 className="font-editorial text-2xl">{item.title}</h3>
                </div>
                <div className="sm:col-span-8">
                  <p className="text-ink-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline — Editorial milestones */}
      <section className="py-20 sm:py-28 bg-ink">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <p className="text-wine-light text-sm tracking-[0.3em] uppercase mb-3">
            Milestones
          </p>
          <h2 className="font-editorial text-3xl sm:text-5xl text-white mb-16">
            성장의 발자취
          </h2>

          <div className="space-y-0">
            {milestones.map((item) => (
              <div
                key={item.year}
                className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-8 py-8 border-t border-white/10 px-2 sm:px-4"
              >
                <div className="sm:col-span-2">
                  <span className="font-editorial text-3xl text-wine-light">
                    {item.year}
                  </span>
                </div>
                <div className="sm:col-span-4">
                  <h3 className="text-lg font-medium text-white">{item.event}</h3>
                </div>
                <div className="sm:col-span-6">
                  <p className="text-white/40 leading-relaxed">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team — Editorial portraits */}
      <section className="py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-5xl mb-16">
            <p className="text-wine text-sm tracking-[0.3em] uppercase mb-3">
              Leadership Team
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl">
              리더십 팀
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink/10">
            {team.map((member) => (
              <div key={member.name} className="bg-cream">
                <div className="relative h-72 sm:h-80">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <h3 className="font-editorial text-xl mb-1">{member.name}</h3>
                  <p className="text-wine text-sm font-medium mb-3">{member.position}</p>
                  <p className="text-ink-faint text-sm">{member.specialty}</p>
                  <p className="text-ink-faint text-xs mt-1">{member.experience} 경력</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — Editorial minimal */}
      <section className="py-24 sm:py-32 bg-cream-dark text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="font-editorial text-3xl sm:text-5xl mb-6">
            스트래티지원과 함께<br />
            새로운 도약을 시작하세요
          </h2>
          <hr className="editorial-rule mx-auto mb-6" />
          <p className="text-ink-muted mb-10 max-w-lg mx-auto">
            전문 컨설턴트가 귀사의 성장을 위한 최적의 전략을 제안해드립니다.
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
