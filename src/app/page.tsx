'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    title: '경영 전략',
    desc: '기업의 비전과 목표를 달성하기 위한 전략적 로드맵을 수립합니다',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
  },
  {
    title: '프로세스 혁신',
    desc: '업무 프로세스를 분석하고 최적화하여 효율성을 극대화합니다',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
  },
  {
    title: '성과 관리',
    desc: 'KPI 설정부터 성과 측정까지 체계적인 관리 시스템을 구축합니다',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
  {
    title: '조직 개발',
    desc: '조직 구조 설계와 인재 육성으로 경쟁력을 강화합니다',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
  },
  {
    title: '디지털 전환',
    desc: '최신 기술을 활용한 디지털 혁신 전략을 제시합니다',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
  },
  {
    title: '재무 컨설팅',
    desc: '재무 구조 분석과 최적화로 건전한 경영을 지원합니다',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80',
  },
]

const caseStudies = [
  {
    company: 'A전자',
    category: '제조업',
    result: '매출 40% 증가',
    desc: '디지털 전환 프로젝트를 통해 생산성 향상 및 매출 대폭 증가',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80',
  },
  {
    company: 'B금융',
    category: '금융업',
    result: '비용 30% 절감',
    desc: '프로세스 혁신으로 업무 효율성 개선 및 비용 절감 달성',
    image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80',
  },
  {
    company: 'C유통',
    category: '유통업',
    result: '고객만족도 95%',
    desc: '고객 경험 개선 프로젝트로 고객 만족도 크게 향상',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80',
  },
]

const testimonials = [
  {
    text: 'ProConsult의 컨설팅은 우리 회사의 전환점이 되었습니다. 명확한 전략과 실행력이 인상적이었습니다.',
    author: '김대표',
    company: 'A전자 CEO',
  },
  {
    text: '체계적인 접근과 깊이 있는 분석으로 실질적인 성과를 만들어냈습니다. 신뢰할 수 있는 파트너입니다.',
    author: '이상무',
    company: 'B금융 상무',
  },
  {
    text: '팀의 전문성과 열정이 프로젝트 성공의 핵심이었습니다. 다음 프로젝트도 함께하고 싶습니다.',
    author: '박부장',
    company: 'C유통 부장',
  },
]

export default function ConsultingHomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <Image
          src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920&q=80"
          alt="현대적인 오피스 공간"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-slate-900/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 w-full">
          <div className="max-w-3xl">
            <p className="text-blue-400 font-semibold text-sm md:text-base tracking-widest uppercase mb-4">
              Business Innovation Partner
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              비즈니스 혁신의<br />
              <span className="text-blue-400">전문 파트너</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
              15년간 축적된 전문성과 검증된 방법론으로
              귀사의 성장을 가속화합니다.
              전략 수립부터 실행까지, 모든 과정에서
              최고의 솔루션을 제공합니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors text-center min-h-[44px]"
              >
                무료 상담 신청
              </Link>
              <Link
                href="/services"
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors text-center min-h-[44px]"
              >
                서비스 보기
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { number: '500+', label: '완료 프로젝트' },
              { number: '98%', label: '고객 만족도' },
              { number: '15년', label: '업계 경력' },
              { number: '120+', label: '전문 컨설턴트' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-4 md:p-6 text-center"
              >
                <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 font-semibold tracking-widest uppercase mb-3">
              Our Services
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              전문 컨설팅 서비스
            </h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              다양한 산업 분야에서의 경험을 바탕으로
              최적화된 솔루션을 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-blue-600 font-semibold tracking-widest uppercase mb-3">
              Success Stories
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              성공 사례
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((caseItem, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="relative h-56">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.company}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <p className="text-xs font-medium text-blue-300 mb-1">{caseItem.category}</p>
                    <h3 className="text-2xl font-bold mb-1">{caseItem.company}</h3>
                    <p className="text-green-400 font-semibold text-lg">{caseItem.result}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 leading-relaxed">{caseItem.desc}</p>
                  <Link href="/cases" className="inline-block mt-4 text-blue-600 font-semibold text-sm hover:text-blue-800 transition-colors">
                    자세히 보기 &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-6 text-center">
          <div className="mb-12">
            <p className="text-sm text-blue-600 font-semibold tracking-widest uppercase mb-3">
              Client Reviews
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              고객 추천사
            </h2>
          </div>

          <div className="relative min-h-[280px]">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`p-8 md:p-12 bg-gray-50 rounded-2xl transition-opacity duration-500 ${
                  activeTestimonial === idx
                    ? 'opacity-100 relative'
                    : 'opacity-0 absolute inset-0'
                }`}
              >
                <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-8 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <div>
                  <p className="text-lg font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  activeTestimonial === idx ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`추천사 ${idx + 1}`}
              >
                <span className={`block w-3 h-3 rounded-full ${
                  activeTestimonial === idx ? 'bg-blue-600' : 'bg-gray-300'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-slate-800 to-blue-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            지금 바로 시작하세요
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10">
            무료 상담을 통해 귀사에 최적화된
            솔루션을 확인해보세요
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
