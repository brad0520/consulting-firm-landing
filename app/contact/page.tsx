'use client'

import { useState } from 'react'
import { siteConfig } from '@/lib/config'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('상담 신청이 접수되었습니다. 영업일 기준 1~2일 내에 연락드리겠습니다.')
    setFormData({ name: '', company: '', email: '', phone: '', service: '', budget: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <main>
      {/* Hero — Editorial */}
      <section className="py-24 sm:py-32">
        <div className="max-w-5xl mx-auto px-4 md:px-6">
          <p className="text-wine text-sm tracking-[0.3em] uppercase mb-6">
            Contact Us
          </p>
          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl text-ink leading-[1.05] mb-8">
            전략 상담 신청
          </h1>
          <hr className="editorial-rule mb-8" />
          <p className="text-ink-muted text-lg sm:text-xl max-w-2xl leading-relaxed">
            전문 컨설턴트가 귀사의 과제를 분석하고
            데이터 기반의 최적 솔루션을 제안해드립니다.
          </p>
        </div>
      </section>

      {/* Form + Info — Editorial */}
      <section className="py-16 sm:py-24 bg-cream-dark">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Form */}
            <div className="lg:col-span-7">
              <h2 className="font-editorial text-2xl mb-2">상담 신청서</h2>
              <p className="text-ink-faint text-sm mb-10">
                아래 양식을 작성해주시면 영업일 기준 1~2일 내에 연락드립니다.
              </p>

              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs text-ink-faint uppercase tracking-[0.2em] mb-3">
                      이름 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="홍길동"
                      className="w-full bg-transparent border-b border-ink/20 pb-3 text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-ink-faint/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-ink-faint uppercase tracking-[0.2em] mb-3">
                      회사명 *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      placeholder="(주)회사명"
                      className="w-full bg-transparent border-b border-ink/20 pb-3 text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-ink-faint/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs text-ink-faint uppercase tracking-[0.2em] mb-3">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="example@company.com"
                      className="w-full bg-transparent border-b border-ink/20 pb-3 text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-ink-faint/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-ink-faint uppercase tracking-[0.2em] mb-3">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="010-1234-5678"
                      className="w-full bg-transparent border-b border-ink/20 pb-3 text-ink focus:outline-none focus:border-ink transition-colors placeholder:text-ink-faint/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs text-ink-faint uppercase tracking-[0.2em] mb-3">
                      관심 서비스 *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-transparent border-b border-ink/20 pb-3 text-ink focus:outline-none focus:border-ink transition-colors cursor-pointer"
                    >
                      <option value="">선택해주세요</option>
                      <option value="strategy">경영 전략</option>
                      <option value="digital">디지털 전환(DX)</option>
                      <option value="organization">조직 혁신</option>
                      <option value="data">데이터 분석</option>
                      <option value="performance">성과 관리</option>
                      <option value="finance">재무 전략</option>
                      <option value="other">기타</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-ink-faint uppercase tracking-[0.2em] mb-3">
                      예상 예산
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-transparent border-b border-ink/20 pb-3 text-ink focus:outline-none focus:border-ink transition-colors cursor-pointer"
                    >
                      <option value="">선택해주세요</option>
                      <option value="under50">5천만원 미만</option>
                      <option value="50to100">5천만원 ~ 1억원</option>
                      <option value="100to300">1억원 ~ 3억원</option>
                      <option value="300to500">3억원 ~ 5억원</option>
                      <option value="over500">5억원 이상</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-ink-faint uppercase tracking-[0.2em] mb-3">
                    프로젝트 설명
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="프로젝트에 대해 간단히 설명해주세요."
                    className="w-full bg-transparent border-b border-ink/20 pb-3 text-ink focus:outline-none focus:border-ink transition-colors resize-none placeholder:text-ink-faint/50"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-ink text-white px-10 py-4 text-sm font-medium hover:bg-ink-light transition-colors min-h-[44px]"
                >
                  상담 신청하기
                </button>
              </form>
            </div>

            {/* Info sidebar */}
            <div className="lg:col-span-5 space-y-12">
              <div>
                <h3 className="text-xs text-ink-faint uppercase tracking-[0.2em] mb-6">
                  연락처 정보
                </h3>
                <div className="space-y-6">
                  {[
                    { label: '전화', value: siteConfig.company.phone },
                    { label: '이메일', value: siteConfig.company.email },
                    { label: '주소', value: siteConfig.company.address },
                    { label: '운영 시간', value: '평일 09:00 - 18:00\n(주말 및 공휴일 휴무)' },
                  ].map((item) => (
                    <div key={item.label} className="border-b border-ink/10 pb-4">
                      <p className="text-xs text-ink-faint mb-1">{item.label}</p>
                      <p className="text-ink font-medium whitespace-pre-line text-sm">
                        {item.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ — Dark block */}
              <div className="bg-ink p-8 sm:p-10">
                <h3 className="font-editorial text-lg text-white mb-8">자주 묻는 질문</h3>
                <div className="space-y-6">
                  {[
                    { q: '초기 상담은 무료인가요?', a: '네, 최초 전략 상담은 무료로 진행됩니다. 과제 진단과 프로젝트 범위를 함께 논의합니다.' },
                    { q: '프로젝트 기간은 보통 얼마나 걸리나요?', a: '규모에 따라 3개월~14개월 정도 소요됩니다. 진단 단계에서 정확한 일정을 안내드립니다.' },
                    { q: '어떤 산업 분야를 다루나요?', a: '제조, 금융, 유통, IT, 헬스케어 등 15개 이상 산업에서 전문 경험을 보유하고 있습니다.' },
                  ].map((faq) => (
                    <div key={faq.q} className="border-t border-white/10 pt-4 first:border-t-0 first:pt-0">
                      <p className="text-white text-sm font-medium mb-2">Q. {faq.q}</p>
                      <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
