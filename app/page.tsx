'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const expertise = [
  {
    number: '01',
    title: '경영 전략',
    desc: '시장 분석과 데이터 기반 의사결정으로 지속 가능한 성장 전략을 수립합니다',
    accent: 'bg-teal-500',
  },
  {
    number: '02',
    title: '디지털 전환',
    desc: 'AI, 클라우드, 데이터 분석 등 최신 기술을 활용한 비즈니스 혁신을 주도합니다',
    accent: 'bg-navy-700',
  },
  {
    number: '03',
    title: '조직 혁신',
    desc: '조직 구조 재설계와 변화관리를 통해 실행력 있는 조직을 만듭니다',
    accent: 'bg-teal-600',
  },
  {
    number: '04',
    title: '성과 관리',
    desc: 'OKR/KPI 체계 구축과 데이터 기반 성과 측정으로 실질적 결과를 달성합니다',
    accent: 'bg-navy-800',
  },
]

const caseHighlights = [
  {
    company: '글로벌 제조사 A',
    category: '디지털 전환',
    metric: '+42%',
    metricLabel: '생산성 향상',
    desc: 'AI 기반 스마트 팩토리 전환으로 생산 효율성 극대화',
  },
  {
    company: '국내 금융사 B',
    category: '프로세스 혁신',
    metric: '-35%',
    metricLabel: '운영비 절감',
    desc: 'RPA 도입과 업무 자동화를 통한 비용 구조 개선',
  },
  {
    company: '유통 대기업 C',
    category: '옴니채널 전략',
    metric: '+58%',
    metricLabel: '온라인 매출',
    desc: '고객 데이터 통합과 옴니채널 플랫폼 구축',
  },
]

const testimonials = [
  {
    text: '스트래티지원의 데이터 기반 접근 방식이 우리 회사의 의사결정 체계를 완전히 바꿔놓았습니다. 단순한 자문이 아닌, 실행까지 함께하는 진정한 파트너입니다.',
    author: '김현수',
    role: 'CTO',
    company: '글로벌 제조사 A',
  },
  {
    text: '복잡한 조직 문제를 명쾌하게 진단하고, 실현 가능한 솔루션을 제시해주셨습니다. 프로젝트 이후 팀 생산성이 눈에 띄게 개선되었습니다.',
    author: '이정민',
    role: 'COO',
    company: '국내 금융사 B',
  },
  {
    text: '전략 수립부터 실행까지 체계적인 프로세스와 전문성에 깊은 신뢰를 갖게 되었습니다. 다음 프로젝트도 반드시 함께하고 싶습니다.',
    author: '박서연',
    role: 'VP of Strategy',
    company: '유통 대기업 C',
  },
]

const clientLogos = [
  'Samsung', 'Hyundai', 'LG', 'SK', 'POSCO', 'Lotte',
]

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main>
      {/* Hero Section - Light, Typography-forward with geometric shapes */}
      <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
        {/* Abstract geometric background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large circle */}
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-gray-100" />
          <div className="absolute -top-10 -right-10 w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-teal-100/60" />
          {/* Grid pattern */}
          <div className="absolute top-1/4 right-0 w-1/3 h-1/2 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, #102a43 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }}
          />
          {/* Accent shapes */}
          <div className="absolute bottom-20 left-10 w-16 h-16 md:w-24 md:h-24 bg-teal-50 rounded-2xl rotate-12" />
          <div className="absolute top-40 right-1/4 w-8 h-8 md:w-12 md:h-12 bg-navy-50 rounded-lg rotate-45" />
          <div className="absolute bottom-40 right-20 w-3 h-3 bg-teal-400 rounded-full" />
          <div className="absolute top-32 left-1/3 w-2 h-2 bg-navy-300 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Content */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span className="w-2 h-2 bg-teal-500 rounded-full" />
                Data-Driven Strategy Consulting
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-900 leading-[1.15] mb-6">
                데이터로 설계하는<br />
                <span className="text-teal-600">전략의 미래</span>
              </h1>
              <p className="text-lg md:text-xl text-navy-500 leading-relaxed mb-10 max-w-lg">
                스트래티지원은 데이터 기반 전략 수립과 실행 중심 컨설팅으로
                기업의 지속 가능한 성장을 설계합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="bg-navy-900 text-white px-8 py-4 rounded-xl font-semibold text-base hover:bg-navy-800 transition-colors text-center min-h-[44px]"
                >
                  전략 상담 시작하기
                </Link>
                <Link
                  href="/cases"
                  className="border-2 border-navy-200 text-navy-700 px-8 py-4 rounded-xl font-semibold text-base hover:border-navy-300 hover:bg-navy-50 transition-colors text-center min-h-[44px]"
                >
                  성공사례 보기
                </Link>
              </div>

              {/* Mini stats */}
              <div className="flex flex-wrap gap-8 md:gap-12">
                {[
                  { value: '520+', label: '완료 프로젝트' },
                  { value: '97%', label: '고객 재계약율' },
                  { value: '18년', label: '업계 경력' },
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-2xl md:text-3xl font-bold text-navy-900">{stat.value}</div>
                    <div className="text-sm text-navy-400 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Abstract Strategy Diagram */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Main diagram container */}
                <div className="bg-gradient-to-br from-navy-50 to-teal-50/50 rounded-3xl p-10 relative overflow-hidden">
                  {/* Decorative grid */}
                  <div className="absolute inset-0 opacity-[0.04]"
                    style={{
                      backgroundImage: 'linear-gradient(#102a43 1px, transparent 1px), linear-gradient(90deg, #102a43 1px, transparent 1px)',
                      backgroundSize: '40px 40px'
                    }}
                  />

                  {/* Strategy framework visual */}
                  <div className="relative space-y-6">
                    {/* Top row */}
                    <div className="flex gap-4">
                      <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mb-3">
                          <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5" />
                          </svg>
                        </div>
                        <p className="text-sm font-semibold text-navy-800">진단</p>
                        <p className="text-xs text-navy-400 mt-1">현황 분석</p>
                      </div>
                      <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="w-10 h-10 bg-navy-100 rounded-xl flex items-center justify-center mb-3">
                          <svg className="w-5 h-5 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />
                          </svg>
                        </div>
                        <p className="text-sm font-semibold text-navy-800">전략</p>
                        <p className="text-xs text-navy-400 mt-1">로드맵 수립</p>
                      </div>
                    </div>

                    {/* Center connector */}
                    <div className="flex justify-center">
                      <div className="w-12 h-12 bg-teal-500 rounded-2xl flex items-center justify-center shadow-lg shadow-teal-500/20">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
                        </svg>
                      </div>
                    </div>

                    {/* Bottom row */}
                    <div className="flex gap-4">
                      <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mb-3">
                          <svg className="w-5 h-5 text-teal-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                          </svg>
                        </div>
                        <p className="text-sm font-semibold text-navy-800">실행</p>
                        <p className="text-xs text-navy-400 mt-1">변화 관리</p>
                      </div>
                      <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
                        <div className="w-10 h-10 bg-navy-100 rounded-xl flex items-center justify-center mb-3">
                          <svg className="w-5 h-5 text-navy-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
                          </svg>
                        </div>
                        <p className="text-sm font-semibold text-navy-800">성과</p>
                        <p className="text-xs text-navy-400 mt-1">KPI 측정</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos - Social Proof */}
      <section className="py-12 md:py-16 border-y border-gray-100 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <p className="text-center text-sm text-navy-400 font-medium mb-8">
            대한민국 대표 기업들이 신뢰하는 전략 파트너
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientLogos.map((logo, idx) => (
              <div
                key={idx}
                className="text-navy-200 font-bold text-xl md:text-2xl tracking-wider hover:text-navy-400 transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Cards Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-2xl mb-16">
            <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-3">
              Our Expertise
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              전략에서 실행까지,<br />
              전 과정의 전문성
            </h2>
            <p className="text-lg text-navy-400">
              각 분야 최고 전문가들의 심층 분석과 맞춤형 솔루션으로
              실질적인 비즈니스 성과를 만들어냅니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {expertise.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white rounded-2xl border border-gray-100 p-8 md:p-10 hover:border-teal-200 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <span className="text-5xl font-bold text-navy-100 group-hover:text-teal-100 transition-colors">
                    {item.number}
                  </span>
                  <div className={`w-3 h-3 ${item.accent} rounded-full`} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-navy-500 leading-relaxed">
                  {item.desc}
                </p>
                <div className="mt-6">
                  <Link
                    href="/services"
                    className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors inline-flex items-center gap-1"
                  >
                    자세히 보기
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-28 bg-navy-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-4">
            <div>
              <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-3">
                Case Studies
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
                검증된 성공 사례
              </h2>
            </div>
            <Link
              href="/cases"
              className="text-sm font-semibold text-navy-600 hover:text-teal-600 transition-colors inline-flex items-center gap-1 self-start md:self-auto"
            >
              전체 사례 보기
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseHighlights.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
              >
                <span className="inline-block text-xs font-semibold text-teal-600 bg-teal-50 px-3 py-1 rounded-full mb-6">
                  {item.category}
                </span>
                <div className="mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-navy-900">{item.metric}</span>
                  <p className="text-sm text-navy-400 mt-1">{item.metricLabel}</p>
                </div>
                <h3 className="text-lg font-bold text-navy-800 mb-2">{item.company}</h3>
                <p className="text-navy-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-3">
              Our Methodology
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              체계적 4단계 프로세스
            </h2>
            <p className="text-lg text-navy-400 max-w-2xl mx-auto">
              검증된 프레임워크를 기반으로 명확한 목표 설정부터
              성과 달성까지 체계적으로 진행합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', title: '진단 & 분석', desc: '비즈니스 현황을 데이터 기반으로 정밀 진단합니다', color: 'border-teal-500' },
              { step: '02', title: '전략 설계', desc: '맞춤형 솔루션과 실행 로드맵을 수립합니다', color: 'border-navy-500' },
              { step: '03', title: '실행 & 관리', desc: '전문 컨설턴트가 현장에서 함께 실행합니다', color: 'border-teal-500' },
              { step: '04', title: '성과 측정', desc: '정량적 지표로 성과를 측정하고 개선합니다', color: 'border-navy-500' },
            ].map((process, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-2xl border-t-4 ${process.color} border-x border-b border-gray-100 hover:shadow-lg transition-all duration-300`}>
                <div className="text-3xl font-bold text-navy-100 mb-4">{process.step}</div>
                <h3 className="text-lg font-bold text-navy-900 mb-3">{process.title}</h3>
                <p className="text-sm text-navy-500 leading-relaxed">{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 bg-navy-50/50">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-3">
              Client Testimonials
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              고객이 말하는 스트래티지원
            </h2>
          </div>

          <div className="relative min-h-[260px]">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className={`bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-sm transition-opacity duration-500 ${
                  activeTestimonial === idx
                    ? 'opacity-100 relative'
                    : 'opacity-0 absolute inset-0'
                }`}
              >
                <svg className="w-8 h-8 text-teal-200 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="text-lg md:text-xl text-navy-700 leading-relaxed mb-8">
                  {testimonial.text}
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-navy-100 rounded-full flex items-center justify-center">
                    <span className="text-navy-600 font-bold text-sm">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">{testimonial.author}</p>
                    <p className="text-sm text-navy-400">{testimonial.role}, {testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                className="min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label={`추천사 ${idx + 1}`}
              >
                <span className={`block w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  activeTestimonial === idx ? 'bg-teal-500 scale-125' : 'bg-navy-200'
                }`} />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Light theme */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-teal-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                지속 가능한 성장,<br />
                지금 시작하세요
              </h2>
              <p className="text-lg text-navy-300 mb-10 max-w-xl mx-auto">
                데이터 기반 전략 컨설팅으로 귀사의 비즈니스를
                한 단계 도약시켜 드립니다
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-block bg-teal-500 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-teal-600 transition-colors min-h-[44px]"
                >
                  무료 전략 상담
                </Link>
                <Link
                  href="/services"
                  className="inline-block border-2 border-white/20 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-colors min-h-[44px]"
                >
                  서비스 둘러보기
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
