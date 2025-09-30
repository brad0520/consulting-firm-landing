'use client'

import { useState } from 'react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
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
      message: ''
    })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1.5rem'
          }}>
            무료 상담 신청
          </h1>
          <p style={{
            fontSize: '1.3rem',
            opacity: 0.95,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            전문 컨설턴트가 귀사의 과제를 분석하고<br />
            최적의 솔루션을 제안해드립니다
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'start'
          }}>
            {/* Contact Form */}
            <div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '1.5rem'
              }}>
                상담 신청서
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#7f8c8d',
                marginBottom: '2rem'
              }}>
                아래 양식을 작성해주시면 영업일 기준 1~2일 내에 연락드립니다.
              </p>

              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem'
              }}>
                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '0.5rem'
                  }}>
                    이름 *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '1rem',
                      border: '1px solid #e8e8e8',
                      borderRadius: '8px',
                      outline: 'none',
                      transition: 'all 0.3s ease'
                    }}
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '0.5rem'
                  }}>
                    회사명 *
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '1rem',
                      border: '1px solid #e8e8e8',
                      borderRadius: '8px',
                      outline: 'none'
                    }}
                    placeholder="(주)회사명"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '0.5rem'
                  }}>
                    이메일 *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '1rem',
                      border: '1px solid #e8e8e8',
                      borderRadius: '8px',
                      outline: 'none'
                    }}
                    placeholder="example@company.com"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '0.5rem'
                  }}>
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '1rem',
                      border: '1px solid #e8e8e8',
                      borderRadius: '8px',
                      outline: 'none'
                    }}
                    placeholder="010-1234-5678"
                  />
                </div>

                <div>
                  <label style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '0.5rem'
                  }}>
                    관심 서비스 *
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '1rem',
                      border: '1px solid #e8e8e8',
                      borderRadius: '8px',
                      outline: 'none',
                      cursor: 'pointer'
                    }}
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
                  <label style={{
                    display: 'block',
                    fontSize: '0.95rem',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '0.5rem'
                  }}>
                    문의 내용
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    style={{
                      width: '100%',
                      padding: '14px',
                      fontSize: '1rem',
                      border: '1px solid #e8e8e8',
                      borderRadius: '8px',
                      outline: 'none',
                      resize: 'vertical'
                    }}
                    placeholder="프로젝트에 대해 간단히 설명해주세요."
                  />
                </div>

                <button
                  type="submit"
                  style={{
                    background: '#3498db',
                    color: 'white',
                    padding: '16px 32px',
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    border: 'none',
                    borderRadius: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#2980b9'
                    e.currentTarget.style.transform = 'translateY(-2px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#3498db'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  상담 신청하기
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 style={{
                fontSize: '2rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '1.5rem'
              }}>
                연락처 정보
              </h2>

              <div style={{
                background: '#f8f9fa',
                padding: '2.5rem',
                borderRadius: '16px',
                marginBottom: '2rem'
              }}>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem'
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>📞</span>
                      <div>
                        <div style={{
                          fontSize: '0.9rem',
                          color: '#7f8c8d',
                          marginBottom: '0.25rem'
                        }}>
                          전화
                        </div>
                        <div style={{
                          fontSize: '1.2rem',
                          fontWeight: '600',
                          color: '#2c3e50'
                        }}>
                          02-1234-5678
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>📧</span>
                      <div>
                        <div style={{
                          fontSize: '0.9rem',
                          color: '#7f8c8d',
                          marginBottom: '0.25rem'
                        }}>
                          이메일
                        </div>
                        <div style={{
                          fontSize: '1.2rem',
                          fontWeight: '600',
                          color: '#2c3e50'
                        }}>
                          info@proconsult.co.kr
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>📍</span>
                      <div>
                        <div style={{
                          fontSize: '0.9rem',
                          color: '#7f8c8d',
                          marginBottom: '0.25rem'
                        }}>
                          주소
                        </div>
                        <div style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: '#2c3e50',
                          lineHeight: '1.6'
                        }}>
                          서울시 강남구 테헤란로 123<br />
                          ProConsult 빌딩 10층
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      marginBottom: '0.5rem'
                    }}>
                      <span style={{ fontSize: '1.5rem' }}>🕐</span>
                      <div>
                        <div style={{
                          fontSize: '0.9rem',
                          color: '#7f8c8d',
                          marginBottom: '0.25rem'
                        }}>
                          운영 시간
                        </div>
                        <div style={{
                          fontSize: '1.1rem',
                          fontWeight: '600',
                          color: '#2c3e50',
                          lineHeight: '1.6'
                        }}>
                          평일 09:00 - 18:00<br />
                          <span style={{ fontSize: '0.95rem', color: '#7f8c8d' }}>
                            (주말 및 공휴일 휴무)
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                padding: '2.5rem',
                borderRadius: '16px',
                color: 'white'
              }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  marginBottom: '1.5rem'
                }}>
                  자주 묻는 질문
                </h3>
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.5rem'
                }}>
                  <div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem'
                    }}>
                      Q. 상담은 무료인가요?
                    </div>
                    <div style={{
                      fontSize: '0.95rem',
                      opacity: 0.9
                    }}>
                      A. 네, 초기 상담은 무료로 진행됩니다.
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem'
                    }}>
                      Q. 프로젝트 기간은 얼마나 걸리나요?
                    </div>
                    <div style={{
                      fontSize: '0.95rem',
                      opacity: 0.9
                    }}>
                      A. 프로젝트 규모에 따라 3개월~12개월 정도 소요됩니다.
                    </div>
                  </div>
                  <div>
                    <div style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      marginBottom: '0.5rem'
                    }}>
                      Q. 어떤 산업 분야를 다루나요?
                    </div>
                    <div style={{
                      fontSize: '0.95rem',
                      opacity: 0.9
                    }}>
                      A. 제조, 금융, 유통, IT, 헬스케어 등 다양한 산업 분야의 경험이 있습니다.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
