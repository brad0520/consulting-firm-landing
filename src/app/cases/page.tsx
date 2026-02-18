import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '성공사례',
  description: 'ProConsult가 고객사와 함께 만들어온 성공적인 프로젝트 결과를 확인하세요.',
}

const caseStudies = [
  {
    company: 'A전자',
    industry: '제조업',
    project: '디지털 전환 프로젝트',
    duration: '12개월',
    result: '매출 40% 증가',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80',
    challenges: [
      '레거시 시스템 의존도 높음',
      '디지털 역량 부족',
      '변화 관리 필요',
    ],
    solutions: [
      '단계적 디지털 전환 로드맵 수립',
      '임직원 교육 프로그램 운영',
      '스마트 팩토리 시스템 도입',
    ],
    outcomes: [
      '생산성 35% 향상',
      '품질 불량률 50% 감소',
      '매출 40% 증가',
    ],
  },
  {
    company: 'B금융',
    industry: '금융업',
    project: '프로세스 혁신 컨설팅',
    duration: '8개월',
    result: '비용 30% 절감',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80',
    challenges: [
      '복잡한 업무 프로세스',
      '높은 운영 비용',
      '낮은 고객 만족도',
    ],
    solutions: [
      '업무 프로세스 재설계',
      'RPA 자동화 도입',
      '고객 경험 개선',
    ],
    outcomes: [
      '업무 처리 시간 45% 단축',
      '운영 비용 30% 절감',
      '고객 만족도 25% 향상',
    ],
  },
  {
    company: 'C유통',
    industry: '유통업',
    project: '옴니채널 전략 수립',
    duration: '10개월',
    result: '고객만족도 95%',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80',
    challenges: [
      '온오프라인 채널 단절',
      '재고 관리 비효율',
      '고객 데이터 분산',
    ],
    solutions: [
      '옴니채널 플랫폼 구축',
      '통합 재고 관리 시스템',
      'CRM 시스템 고도화',
    ],
    outcomes: [
      '온라인 매출 60% 증가',
      '재고 회전율 40% 개선',
      '고객 만족도 95% 달성',
    ],
  },
  {
    company: 'D물류',
    industry: '물류업',
    project: '공급망 최적화',
    duration: '9개월',
    result: '배송시간 50% 단축',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
    challenges: [
      '배송 지연 빈발',
      '높은 물류 비용',
      '재고 과다 보유',
    ],
    solutions: [
      'AI 기반 수요 예측',
      '배송 경로 최적화',
      '스마트 창고 관리 시스템',
    ],
    outcomes: [
      '배송 시간 50% 단축',
      '물류 비용 25% 절감',
      '재고 회전율 35% 개선',
    ],
  },
  {
    company: 'E제약',
    industry: '제약업',
    project: 'R&D 혁신 컨설팅',
    duration: '15개월',
    result: '개발 기간 30% 단축',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    challenges: [
      '긴 신약 개발 기간',
      '높은 실패율',
      'R&D 비용 증가',
    ],
    solutions: [
      'AI 기반 신약 후보 발굴',
      '임상시험 최적화',
      'R&D 프로세스 개선',
    ],
    outcomes: [
      '개발 기간 30% 단축',
      '성공률 20% 향상',
      'R&D 비용 15% 절감',
    ],
  },
  {
    company: 'F건설',
    industry: '건설업',
    project: '프로젝트 관리 시스템 구축',
    duration: '7개월',
    result: '일정 준수율 90%',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
    challenges: [
      '프로젝트 지연 빈발',
      '비용 초과 문제',
      '의사소통 비효율',
    ],
    solutions: [
      '통합 프로젝트 관리 시스템',
      '실시간 진도 모니터링',
      '협업 플랫폼 구축',
    ],
    outcomes: [
      '일정 준수율 90% 달성',
      '비용 초과 50% 감소',
      '생산성 40% 향상',
    ],
  },
]

export default function CasesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-28 md:py-36">
        <Image
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=80"
          alt="성공사례"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            성공 사례
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            고객사와 함께 만들어온
            성공적인 프로젝트 결과를 확인하세요
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
            {caseStudies.map((caseStudy, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Image Header */}
                <div className="relative h-56 md:h-64">
                  <Image
                    src={caseStudy.image}
                    alt={caseStudy.company}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs font-medium text-blue-300 mb-1">{caseStudy.industry}</p>
                    <h3 className="text-2xl font-bold mb-1">{caseStudy.company}</h3>
                    <p className="text-gray-300 text-sm mb-2">{caseStudy.project}</p>
                    <div className="flex justify-between items-center pt-3 border-t border-white/20">
                      <div>
                        <span className="text-xs text-gray-400">프로젝트 기간</span>
                        <p className="text-sm font-semibold">{caseStudy.duration}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-gray-400">핵심 성과</span>
                        <p className="text-lg font-bold text-green-400">{caseStudy.result}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 space-y-6">
                  {/* Challenges */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                      과제
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.challenges.map((challenge, cIdx) => (
                        <li key={cIdx} className="flex gap-2 text-sm text-gray-600">
                          <span className="text-red-400 flex-shrink-0">&bull;</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Solutions */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                      솔루션
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.solutions.map((solution, sIdx) => (
                        <li key={sIdx} className="flex gap-2 text-sm text-gray-600">
                          <span className="text-blue-500 flex-shrink-0">&rarr;</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcomes */}
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                      성과
                    </h4>
                    <ul className="space-y-2">
                      {caseStudy.outcomes.map((outcome, oIdx) => (
                        <li key={oIdx} className="flex gap-2 text-sm text-green-600 font-medium">
                          <span className="flex-shrink-0">&#10003;</span>
                          <span>{outcome}</span>
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

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            다음 성공 사례의 주인공이 되어보세요
          </h2>
          <p className="text-lg text-gray-300 mb-10">
            전문 컨설턴트와 함께
            귀사의 성공 스토리를 만들어가세요
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-slate-900 px-10 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors min-h-[44px]"
          >
            프로젝트 상담 신청
          </Link>
        </div>
      </section>
    </main>
  )
}
