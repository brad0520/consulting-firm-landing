'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function ConsultingHomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        padding: '140px 0 100px',
        position: 'relative',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <Image
          src="/images/hero.jpg"
          alt="Hero Background"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(248,249,250,0.92) 0%, rgba(255,255,255,0.88) 100%)'
        }}></div>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', position: 'relative', zIndex: 2 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h1 style={{
                fontSize: '3.2rem',
                fontWeight: '700',
                marginBottom: '1.5rem',
                color: '#2c3e50',
                lineHeight: '1.2'
              }}>
                비즈니스 혁신의<br />
                파트너
              </h1>
              <p style={{
                fontSize: '1.3rem',
                color: '#7f8c8d',
                marginBottom: '2rem',
                fontWeight: '300'
              }}>
                ProConsult와 함께하세요
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#5d6d7e',
                lineHeight: '1.7',
                marginBottom: '3rem'
              }}>
                15년간 축적된 전문성과 검증된 방법론으로 
                귀사의 성장을 가속화합니다. 
                전략 수립부터 실행까지, 모든 과정에서 
                최고의 솔루션을 제공합니다.
              </p>

              {/* Stats */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2rem',
                marginBottom: '3rem'
              }}>
                {[
                  { number: '500+', label: '프로젝트' },
                  { number: '98%', label: '고객 만족도' },
                  { number: '15년', label: '업계 경력' }
                ].map((stat, idx) => (
                  <div key={idx} style={{
                    textAlign: 'center',
                    padding: '1.5rem',
                    background: 'white',
                    borderRadius: '12px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease'
                  }}>
                    <div style={{
                      fontSize: '2.2rem',
                      fontWeight: '700',
                      color: '#3498db',
                      marginBottom: '0.5rem'
                    }}>
                      {stat.number}
                    </div>
                    <div style={{ fontSize: '0.9rem', color: '#7f8c8d' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/contact" style={{
                  background: '#3498db',
                  color: 'white',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  display: 'inline-block',
                  transition: 'all 0.3s ease'
                }}>
                  무료 상담 신청
                </Link>
                <Link href="/services" style={{
                  background: 'white',
                  color: '#3498db',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  textDecoration: 'none',
                  fontWeight: '600',
                  fontSize: '1.1rem',
                  display: 'inline-block',
                  border: '2px solid #3498db',
                  transition: 'all 0.3s ease'
                }}>
                  서비스 보기
                </Link>
              </div>
            </div>

            {/* Hero Visual */}
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              padding: '3rem',
              color: 'white',
              position: 'relative',
              minHeight: '500px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📊</div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem' }}>
                  데이터 기반 컨설팅
                </h3>
                <p style={{ fontSize: '1.1rem', opacity: 0.9 }}>
                  전략적 인사이트로<br />
                  비즈니스 가치를 창출합니다
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{
        padding: '100px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              fontSize: '0.9rem',
              color: '#3498db',
              fontWeight: '600',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Our Services
            </div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              전문 컨설팅 서비스
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#7f8c8d', maxWidth: '600px', margin: '0 auto' }}>
              다양한 산업 분야에서의 경험을 바탕으로<br />
              최적화된 솔루션을 제공합니다
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              { icon: '📈', title: '경영 전략', desc: '기업의 비전과 목표를 달성하기 위한 전략적 로드맵을 수립합니다' },
              { icon: '⚙️', title: '프로세스 혁신', desc: '업무 프로세스를 분석하고 최적화하여 효율성을 극대화합니다' },
              { icon: '🎯', title: '성과 관리', desc: 'KPI 설정부터 성과 측정까지 체계적인 관리 시스템을 구축합니다' },
              { icon: '👥', title: '조직 개발', desc: '조직 구조 설계와 인재 육성으로 경쟁력을 강화합니다' },
              { icon: '💻', title: '디지털 전환', desc: '최신 기술을 활용한 디지털 혁신 전략을 제시합니다' },
              { icon: '💰', title: '재무 컨설팅', desc: '재무 구조 분석과 최적화로 건전한 경영을 지원합니다' }
            ].map((service, idx) => (
              <div key={idx} style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '16px',
                border: '1px solid #e8e8e8',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.1)'
                e.currentTarget.style.borderColor = '#3498db'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = '#e8e8e8'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#2c3e50',
                  marginBottom: '1rem'
                }}>
                  {service.title}
                </h3>
                <p style={{ color: '#7f8c8d', lineHeight: '1.6' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section style={{
        padding: '100px 0',
        background: '#f8f9fa'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div style={{
              fontSize: '0.9rem',
              color: '#3498db',
              fontWeight: '600',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Success Stories
            </div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              성공 사례
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                company: 'A전자',
                category: '제조업',
                result: '매출 40% 증가',
                desc: '디지털 전환 프로젝트를 통해 생산성 향상 및 매출 대폭 증가'
              },
              {
                company: 'B금융',
                category: '금융업',
                result: '비용 30% 절감',
                desc: '프로세스 혁신으로 업무 효율성 개선 및 비용 절감 달성'
              },
              {
                company: 'C유통',
                category: '유통업',
                result: '고객만족도 95%',
                desc: '고객 경험 개선 프로젝트로 고객 만족도 크게 향상'
              }
            ].map((caseItem, idx) => (
              <div key={idx} style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  padding: '3rem 2rem',
                  color: 'white'
                }}>
                  <div style={{
                    fontSize: '0.85rem',
                    opacity: 0.9,
                    marginBottom: '0.5rem'
                  }}>
                    {caseItem.category}
                  </div>
                  <h3 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '1rem' }}>
                    {caseItem.company}
                  </h3>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#a8e6cf'
                  }}>
                    {caseItem.result}
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <p style={{ color: '#5d6d7e', lineHeight: '1.6' }}>
                    {caseItem.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section style={{
        padding: '100px 0',
        background: 'white'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{
              fontSize: '0.9rem',
              color: '#3498db',
              fontWeight: '600',
              marginBottom: '0.5rem',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}>
              Client Reviews
            </div>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#2c3e50'
            }}>
              고객 추천사
            </h2>
          </div>

          {/* Testimonial Carousel */}
          <div style={{ position: 'relative' }}>
            {[
              {
                text: 'ProConsult의 컨설팅은 우리 회사의 전환점이 되었습니다. 명확한 전략과 실행력이 인상적이었습니다.',
                author: '김대표',
                company: 'A전자 CEO'
              },
              {
                text: '체계적인 접근과 깊이 있는 분석으로 실질적인 성과를 만들어냈습니다. 신뢰할 수 있는 파트너입니다.',
                author: '이상무',
                company: 'B금융 상무'
              },
              {
                text: '팀의 전문성과 열정이 프로젝트 성공의 핵심이었습니다. 다음 프로젝트도 함께하고 싶습니다.',
                author: '박부장',
                company: 'C유통 부장'
              }
            ].map((testimonial, idx) => (
              <div
                key={idx}
                style={{
                  display: activeTestimonial === idx ? 'block' : 'none',
                  padding: '3rem',
                  background: '#f8f9fa',
                  borderRadius: '16px',
                  minHeight: '250px'
                }}
              >
                <p style={{
                  fontSize: '1.3rem',
                  color: '#2c3e50',
                  lineHeight: '1.8',
                  marginBottom: '2rem',
                  fontStyle: 'italic'
                }}>
                  "{testimonial.text}"
                </p>
                <div>
                  <div style={{ fontSize: '1.1rem', fontWeight: '600', color: '#2c3e50' }}>
                    {testimonial.author}
                  </div>
                  <div style={{ fontSize: '0.95rem', color: '#7f8c8d' }}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }}>
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx)}
                style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  border: 'none',
                  background: activeTestimonial === idx ? '#3498db' : '#d5d5d5',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            marginBottom: '1.5rem'
          }}>
            지금 바로 시작하세요
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '3rem',
            opacity: 0.95
          }}>
            무료 상담을 통해 귀사에 최적화된<br />
            솔루션을 확인해보세요
          </p>
          <Link href="/contact" style={{
            background: 'white',
            color: '#667eea',
            padding: '18px 40px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }}>
            무료 상담 신청하기
          </Link>
        </div>
      </section>
    </main>
  )
}
