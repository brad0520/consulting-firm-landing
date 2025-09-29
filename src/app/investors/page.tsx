'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Investors() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      opacity: isVisible ? 1 : 0,
      transition: 'opacity 0.8s ease-in-out'
    }}>
      {/* Hero Section */}
      <section style={{
        padding: '120px 0 80px',
        background: 'linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%)',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            fontWeight: '600',
            lineHeight: '1.1',
            marginBottom: '1.5rem',
            color: '#1d1d1f',
            letterSpacing: '-0.03em'
          }}>
            투자자 정보
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6e6e73',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            InnovateCorp의 재무 성과와 미래 비전을 투자자 여러분과 공유합니다.
          </p>
        </div>
      </section>

      {/* Key Metrics Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: '#1d1d1f',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            주요 재무 지표
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '4rem'
          }}>
            {[
              {
                label: '2024년 매출',
                value: '₩2.8조',
                growth: '+32%',
                period: 'YoY'
              },
              {
                label: '순이익',
                value: '₩6,800억',
                growth: '+28%',
                period: 'YoY'
              },
              {
                label: '영업이익률',
                value: '24.3%',
                growth: '+2.1%p',
                period: 'YoY'
              },
              {
                label: '현금 및 현금성 자산',
                value: '₩1.2조',
                growth: '+15%',
                period: 'YoY'
              }
            ].map((metric, index) => (
              <div key={index} style={{
                backgroundColor: '#fbfbfd',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                cursor: 'pointer'
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                <div style={{
                  fontSize: '0.9rem',
                  color: '#6e6e73',
                  marginBottom: '0.5rem',
                  fontWeight: '500'
                }}>
                  {metric.label}
                </div>
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#1d1d1f',
                  marginBottom: '0.5rem'
                }}>
                  {metric.value}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#30D158',
                  fontWeight: '600'
                }}>
                  {metric.growth} {metric.period}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Reports Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#fbfbfd'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: '#1d1d1f',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            재무 보고서
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {[
              {
                title: '2024년 4분기 실적 발표',
                type: '분기 보고서',
                date: '2024년 12월 15일',
                size: '2.1 MB',
                format: 'PDF'
              },
              {
                title: '2024년 연간 보고서 (10-K)',
                type: '연간 보고서',
                date: '2024년 11월 30일',
                size: '8.7 MB',
                format: 'PDF'
              },
              {
                title: '2024년 3분기 실적 발표',
                type: '분기 보고서',
                date: '2024년 9월 15일',
                size: '1.9 MB',
                format: 'PDF'
              },
              {
                title: '2024년 주주총회 자료',
                type: '주주총회',
                date: '2024년 8월 20일',
                size: '4.2 MB',
                format: 'PDF'
              },
              {
                title: '2024년 2분기 실적 발표',
                type: '분기 보고서',
                date: '2024년 6월 15일',
                size: '2.0 MB',
                format: 'PDF'
              }
            ].map((report, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                cursor: 'pointer',
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.08)'
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: '1.2rem',
                    fontWeight: '600',
                    color: '#1d1d1f',
                    marginBottom: '0.5rem'
                  }}>
                    {report.title}
                  </h3>
                  <div style={{
                    display: 'flex',
                    gap: '1rem',
                    fontSize: '0.9rem',
                    color: '#6e6e73'
                  }}>
                    <span>{report.type}</span>
                    <span>•</span>
                    <span>{report.date}</span>
                    <span>•</span>
                    <span>{report.size}</span>
                  </div>
                </div>
                <button style={{
                  backgroundColor: '#007AFF',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '8px 16px',
                  fontSize: '0.9rem',
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }} onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#0077ED'
                }} onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#007AFF'
                }}>
                  다운로드
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stock Information Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: '#1d1d1f',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            주식 정보
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '3rem',
            alignItems: 'start'
          }}>
            <div style={{
              backgroundColor: '#fbfbfd',
              borderRadius: '20px',
              padding: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1d1d1f',
                marginBottom: '2rem'
              }}>
                현재 주가 정보
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  paddingBottom: '1rem',
                  borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
                }}>
                  <span style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    color: '#1d1d1f'
                  }}>
                    ₩485,000
                  </span>
                  <span style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#30D158'
                  }}>
                    +12,500 (+2.65%)
                  </span>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '1rem',
                  fontSize: '0.9rem'
                }}>
                  <div>
                    <div style={{ color: '#6e6e73', marginBottom: '0.25rem' }}>오늘 고가</div>
                    <div style={{ color: '#1d1d1f', fontWeight: '600' }}>₩490,000</div>
                  </div>
                  <div>
                    <div style={{ color: '#6e6e73', marginBottom: '0.25rem' }}>오늘 저가</div>
                    <div style={{ color: '#1d1d1f', fontWeight: '600' }}>₩480,000</div>
                  </div>
                  <div>
                    <div style={{ color: '#6e6e73', marginBottom: '0.25rem' }}>52주 고가</div>
                    <div style={{ color: '#1d1d1f', fontWeight: '600' }}>₩520,000</div>
                  </div>
                  <div>
                    <div style={{ color: '#6e6e73', marginBottom: '0.25rem' }}>52주 저가</div>
                    <div style={{ color: '#1d1d1f', fontWeight: '600' }}>₩320,000</div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{
              backgroundColor: '#fbfbfd',
              borderRadius: '20px',
              padding: '2rem'
            }}>
              <h3 style={{
                fontSize: '1.5rem',
                fontWeight: '600',
                color: '#1d1d1f',
                marginBottom: '2rem'
              }}>
                주식 기본 정보
              </h3>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                {[
                  { label: '종목 코드', value: 'INNV' },
                  { label: '시가총액', value: '₩121조' },
                  { label: '발행주식수', value: '2.5억주' },
                  { label: 'PER', value: '28.5' },
                  { label: 'PBR', value: '4.2' },
                  { label: '배당수익률', value: '1.8%' }
                ].map((item, index) => (
                  <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    fontSize: '0.95rem'
                  }}>
                    <span style={{ color: '#6e6e73' }}>{item.label}</span>
                    <span style={{ color: '#1d1d1f', fontWeight: '600' }}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Events Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#fbfbfd'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: '#1d1d1f',
            marginBottom: '3rem',
            textAlign: 'center'
          }}>
            투자자 일정
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {[
              {
                date: '2025년 1월 15일',
                time: '오후 2시',
                title: '2024년 실적 발표 및 IR 설명회',
                type: '실적 발표',
                location: '온라인 라이브',
                status: 'upcoming'
              },
              {
                date: '2025년 3월 20일',
                time: '오전 10시',
                title: '정기 주주총회',
                type: '주주총회',
                location: '서울 본사',
                status: 'upcoming'
              },
              {
                date: '2025년 4월 15일',
                time: '오후 2시',
                title: '1분기 실적 발표',
                type: '실적 발표',
                location: '온라인 라이브',
                status: 'upcoming'
              },
              {
                date: '2024년 12월 15일',
                time: '오후 2시',
                title: '4분기 실적 발표',
                type: '실적 발표',
                location: '온라인 라이브',
                status: 'completed'
              }
            ].map((event, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                padding: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: '1.5rem',
                transition: 'transform 0.2s ease',
                opacity: event.status === 'completed' ? 0.7 : 1,
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }} onMouseOver={(e) => {
                if (event.status === 'upcoming') {
                  e.currentTarget.style.transform = 'translateY(-2px)'
                }
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                <div style={{
                  backgroundColor: event.status === 'upcoming' ? '#007AFF' : '#6e6e73',
                  color: 'white',
                  borderRadius: '8px',
                  padding: '0.75rem',
                  textAlign: 'center',
                  minWidth: '80px'
                }}>
                  <div style={{
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    {event.date.split('년 ')[1].split('월')[0]}월
                  </div>
                  <div style={{
                    fontSize: '1.5rem',
                    fontWeight: '700'
                  }}>
                    {event.date.split('일')[0].slice(-2)}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '0.5rem'
                  }}>
                    <h3 style={{
                      fontSize: '1.2rem',
                      fontWeight: '600',
                      color: '#1d1d1f',
                      margin: 0
                    }}>
                      {event.title}
                    </h3>
                    <span style={{
                      fontSize: '0.8rem',
                      color: event.status === 'upcoming' ? '#007AFF' : '#6e6e73',
                      backgroundColor: event.status === 'upcoming' ? 'rgba(0, 122, 255, 0.1)' : 'rgba(110, 110, 115, 0.1)',
                      padding: '0.25rem 0.5rem',
                      borderRadius: '8px',
                      fontWeight: '500'
                    }}>
                      {event.type}
                    </span>
                  </div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#6e6e73'
                  }}>
                    {event.time} • {event.location}
                  </div>
                </div>
                {event.status === 'upcoming' && (
                  <button style={{
                    backgroundColor: '#007AFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 16px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                  }} onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#0077ED'
                  }} onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#007AFF'
                  }}>
                    일정 등록
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact IR Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#1d1d1f',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: 'white'
          }}>
            투자자 문의
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '3rem',
            lineHeight: '1.6'
          }}>
            투자 관련 문의사항이 있으시면 언제든지 연락해 주시기 바랍니다.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>📧</div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                이메일
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                ir@innovatecorp.com
              </p>
            </div>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>📞</div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                전화
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                +82-2-1234-5678
              </p>
            </div>

            <div style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '16px',
              padding: '2rem',
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{
                fontSize: '2rem',
                marginBottom: '1rem'
              }}>📍</div>
              <h3 style={{
                fontSize: '1.2rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: 'white'
              }}>
                주소
              </h3>
              <p style={{
                fontSize: '1rem',
                color: 'rgba(255, 255, 255, 0.8)'
              }}>
                서울특별시 강남구<br/>테헤란로 123
              </p>
            </div>
          </div>

          <button style={{
            backgroundColor: '#007AFF',
            color: 'white',
            border: 'none',
            borderRadius: '25px',
            padding: '12px 24px',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
          }} onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#0077ED'
            e.currentTarget.style.transform = 'translateY(-2px)'
          }} onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#007AFF'
            e.currentTarget.style.transform = 'translateY(0)'
          }}>
            투자자 관계 팀에 문의하기
          </button>
        </div>
      </section>
    </div>
  )
}