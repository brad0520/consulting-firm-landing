'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('상담 신청이 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      service: '',
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
      {/* Hero Section */}
      <section className="relative py-28 md:py-36">
        <Image
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1920&q=80"
          alt="문의하기"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 to-slate-900/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            무료 상담 신청
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            전문 컨설턴트가 귀사의 과제를 분석하고
            최적의 솔루션을 제안해드립니다
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                상담 신청서
              </h2>
              <p className="text-gray-500 mb-8">
                아래 양식을 작성해주시면 영업일 기준 1~2일 내에 연락드립니다.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      이름 *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="홍길동"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      회사명 *
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="(주)회사명"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      이메일 *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="example@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      연락처 *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="010-1234-5678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    관심 서비스 *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all bg-white cursor-pointer"
                  >
                    <option value="">선택해주세요</option>
                    <option value="strategy">경영 전략</option>
                    <option value="process">프로세스 혁신</option>
                    <option value="performance">성과 관리</option>
                    <option value="organization">조직 개발</option>
                    <option value="digital">디지털 전환</option>
                    <option value="finance">재무 컨설팅</option>
                    <option value="other">기타</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    문의 내용
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 text-base border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-vertical"
                    placeholder="프로젝트에 대해 간단히 설명해주세요."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-4 px-8 text-lg font-semibold rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors min-h-[44px]"
                >
                  상담 신청하기
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8">
                연락처 정보
              </h2>

              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <div className="space-y-8">
                  {[
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                        </svg>
                      ),
                      label: '전화',
                      value: '02-1234-5678',
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                      ),
                      label: '이메일',
                      value: 'contact@proconsult.co.kr',
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                      ),
                      label: '주소',
                      value: '서울시 강남구 테헤란로 123\n컨설팅타워 15층',
                    },
                    {
                      icon: (
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                      ),
                      label: '운영 시간',
                      value: '평일 09:00 - 18:00\n(주말 및 공휴일 휴무)',
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                        <p className="text-slate-900 font-semibold whitespace-pre-line leading-relaxed">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-gradient-to-br from-slate-800 to-blue-900 rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">자주 묻는 질문</h3>
                <div className="space-y-6">
                  {[
                    {
                      q: '상담은 무료인가요?',
                      a: '네, 초기 상담은 무료로 진행됩니다.',
                    },
                    {
                      q: '프로젝트 기간은 얼마나 걸리나요?',
                      a: '프로젝트 규모에 따라 3개월~12개월 정도 소요됩니다.',
                    },
                    {
                      q: '어떤 산업 분야를 다루나요?',
                      a: '제조, 금융, 유통, IT, 헬스케어 등 다양한 산업 분야의 경험이 있습니다.',
                    },
                  ].map((faq, idx) => (
                    <div key={idx}>
                      <p className="font-semibold mb-1">Q. {faq.q}</p>
                      <p className="text-gray-300 text-sm">A. {faq.a}</p>
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
