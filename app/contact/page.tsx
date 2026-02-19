'use client'

import { useState } from 'react'

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
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
      budget: '',
      message: '',
    })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <main>
      {/* Hero Section - Light */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full -translate-y-1/2 translate-x-1/3 opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
          <div className="max-w-3xl">
            <p className="text-sm text-teal-600 font-semibold tracking-widest uppercase mb-4">
              Contact Us
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 leading-tight">
              전략 상담 신청
            </h1>
            <p className="text-lg md:text-xl text-navy-500 leading-relaxed">
              전문 컨설턴트가 귀사의 과제를 분석하고
              데이터 기반의 최적 솔루션을 제안해드립니다
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 md:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-10">
                <h2 className="text-2xl font-bold text-navy-900 mb-2">
                  상담 신청서
                </h2>
                <p className="text-navy-400 mb-8">
                  아래 양식을 작성해주시면 영업일 기준 1~2일 내에 연락드립니다.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">
                        이름 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-gray-50/50"
                        placeholder="홍길동"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">
                        회사명 *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-gray-50/50"
                        placeholder="(주)회사명"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">
                        이메일 *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-gray-50/50"
                        placeholder="example@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">
                        연락처 *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-gray-50/50"
                        placeholder="010-1234-5678"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy-800 mb-2">
                        관심 서비스 *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-gray-50/50 cursor-pointer"
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
                      <label className="block text-sm font-semibold text-navy-800 mb-2">
                        예상 예산
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-gray-50/50 cursor-pointer"
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
                    <label className="block text-sm font-semibold text-navy-800 mb-2">
                      프로젝트 설명
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 text-base border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all resize-vertical bg-gray-50/50"
                      placeholder="프로젝트에 대해 간단히 설명해주세요. (현재 과제, 기대 성과, 일정 등)"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-navy-900 text-white py-4 px-8 text-lg font-semibold rounded-xl hover:bg-navy-800 active:bg-navy-700 transition-colors min-h-[44px]"
                  >
                    상담 신청하기
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Details */}
              <div className="bg-white rounded-2xl border border-gray-100 p-8">
                <h3 className="text-lg font-bold text-navy-900 mb-6">연락처 정보</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                      ),
                      label: '전화',
                      value: '02-555-0100',
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                      ),
                      label: '이메일',
                      value: 'hello@strategyone.co.kr',
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      ),
                      label: '주소',
                      value: '서울시 강남구 테헤란로 152\n강남파이낸스센터 28층',
                    },
                    {
                      icon: (
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      ),
                      label: '운영 시간',
                      value: '평일 09:00 - 18:00\n(주말 및 공휴일 휴무)',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-teal-50 text-teal-600 rounded-xl flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-xs text-navy-400 mb-0.5">{item.label}</p>
                        <p className="text-navy-800 font-semibold whitespace-pre-line text-sm leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-navy-900 rounded-2xl p-8 text-white">
                <h3 className="text-lg font-bold mb-6">자주 묻는 질문</h3>
                <div className="space-y-5">
                  {[
                    {
                      q: '초기 상담은 무료인가요?',
                      a: '네, 최초 전략 상담은 무료로 진행됩니다. 과제 진단과 프로젝트 범위를 함께 논의합니다.',
                    },
                    {
                      q: '프로젝트 기간은 보통 얼마나 걸리나요?',
                      a: '규모에 따라 3개월~14개월 정도 소요됩니다. 진단 단계에서 정확한 일정을 안내드립니다.',
                    },
                    {
                      q: '어떤 산업 분야를 다루나요?',
                      a: '제조, 금융, 유통, IT, 헬스케어 등 15개 이상 산업에서 전문 경험을 보유하고 있습니다.',
                    },
                  ].map((faq, idx) => (
                    <div key={idx}>
                      <p className="font-semibold text-sm mb-1">Q. {faq.q}</p>
                      <p className="text-navy-400 text-sm leading-relaxed">A. {faq.a}</p>
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
