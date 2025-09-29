'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Newsroom() {
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
            뉴스룸
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6e6e73',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            InnovateCorp의 최신 소식과 혁신 이야기를 만나보세요.
          </p>
        </div>
      </section>

      {/* Featured News Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr',
            gap: '3rem',
            marginBottom: '4rem'
          }}>
            {/* Featured Article */}
            <div style={{
              backgroundColor: '#fbfbfd',
              borderRadius: '20px',
              overflow: 'hidden',
              cursor: 'pointer',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }} onMouseOver={(e) => {
              e.currentTarget.style.transform = 'translateY(-8px)'
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)'
            }} onMouseOut={(e) => {
              e.currentTarget.style.transform = 'translateY(0)'
              e.currentTarget.style.boxShadow = 'none'
            }}>
              <div style={{
                height: '300px',
                background: 'linear-gradient(135deg, #007AFF 0%, #0051D5 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontSize: '3rem',
                fontWeight: '600'
              }}>
                🚀
              </div>
              <div style={{ padding: '2rem' }}>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#007AFF',
                  fontWeight: '500',
                  marginBottom: '0.5rem'
                }}>
                  주요 발표
                </div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>
                  InnovateCorp, 차세대 AI 플랫폼 'NOVA' 공개
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#515154',
                  lineHeight: '1.6',
                  marginBottom: '1rem'
                }}>
                  혁신적인 인공지능 기술을 바탕으로 한 새로운 플랫폼 'NOVA'가 공개되었습니다.
                  이 플랫폼은 기업과 개인 사용자 모두에게 더욱 직관적이고 효율적인 AI 경험을 제공합니다.
                </p>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#6e6e73'
                }}>
                  2024년 12월 20일
                </div>
              </div>
            </div>

            {/* Side Articles */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem'
            }}>
              {[
                {
                  category: '지속가능성',
                  title: '2024년 탄소 중립 목표 달성',
                  date: '2024년 12월 15일',
                  color: '#30D158'
                },
                {
                  category: '파트너십',
                  title: '글로벌 AI 연구소와 협력 체결',
                  date: '2024년 12월 10일',
                  color: '#FF9500'
                },
                {
                  category: '수상',
                  title: '혁신 기업상 3년 연속 수상',
                  date: '2024년 12월 5일',
                  color: '#FF3B30'
                }
              ].map((article, index) => (
                <div key={index} style={{
                  backgroundColor: '#fbfbfd',
                  borderRadius: '16px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                }} onMouseOver={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.08)'
                }} onMouseOut={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  <div style={{
                    fontSize: '0.75rem',
                    color: article.color,
                    fontWeight: '600',
                    marginBottom: '0.5rem',
                    textTransform: 'uppercase'
                  }}>
                    {article.category}
                  </div>
                  <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '600',
                    color: '#1d1d1f',
                    marginBottom: '0.5rem',
                    lineHeight: '1.4'
                  }}>
                    {article.title}
                  </h4>
                  <div style={{
                    fontSize: '0.8rem',
                    color: '#6e6e73'
                  }}>
                    {article.date}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Categories Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#fbfbfd'
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
            카테고리별 뉴스
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: '💡',
                title: '제품 & 기술',
                description: '최신 제품 출시와 기술 혁신 소식',
                articles: ['AI 플랫폼 NOVA 출시', '차세대 클라우드 서비스', '보안 기술 업데이트'],
                color: 'linear-gradient(135deg, #007AFF 0%, #0051D5 100%)'
              },
              {
                icon: '🌱',
                title: '지속가능성',
                description: '환경 보호와 사회적 책임 활동',
                articles: ['탄소 중립 달성', '재활용 프로그램 확대', '친환경 제조 공정'],
                color: 'linear-gradient(135deg, #30D158 0%, #00AF7A 100%)'
              },
              {
                icon: '🤝',
                title: '파트너십',
                description: '글로벌 협력과 전략적 제휴',
                articles: ['AI 연구소 협력', '스타트업 투자', '대학 연구 지원'],
                color: 'linear-gradient(135deg, #FF9500 0%, #FF6B00 100%)'
              },
              {
                icon: '🏆',
                title: '수상 & 인정',
                description: '업계 인정과 수상 소식',
                articles: ['혁신 기업상 수상', 'CEO 리더십 상', '브랜드 가치 1위'],
                color: 'linear-gradient(135deg, #FF3B30 0%, #D70015 100%)'
              }
            ].map((category, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                borderRadius: '20px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)'
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  background: category.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {category.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '1rem'
                }}>
                  {category.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#515154',
                  lineHeight: '1.6',
                  marginBottom: '1.5rem'
                }}>
                  {category.description}
                </p>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {category.articles.map((article, articleIndex) => (
                    <li key={articleIndex} style={{
                      fontSize: '0.9rem',
                      color: '#6e6e73',
                      marginBottom: '0.5rem',
                      paddingLeft: '1rem',
                      position: 'relative'
                    }}>
                      <span style={{
                        position: 'absolute',
                        left: 0,
                        top: '0.5rem',
                        width: '4px',
                        height: '4px',
                        backgroundColor: '#007AFF',
                        borderRadius: '50%'
                      }}></span>
                      {article}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent News Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#ffffff'
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
            최근 소식
          </h2>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            {[
              {
                date: '2024년 12월 20일',
                category: '제품 출시',
                title: 'InnovateCorp, 차세대 AI 플랫폼 "NOVA" 공식 출시',
                summary: '혁신적인 머신러닝 알고리즘과 직관적인 사용자 인터페이스를 결합한 새로운 AI 플랫폼이 출시되었습니다.',
                readTime: '5분'
              },
              {
                date: '2024년 12월 18일',
                category: '기업 소식',
                title: '2024년 4분기 실적 발표, 전년 대비 30% 성장',
                summary: '지속적인 연구개발 투자와 글로벌 시장 확장의 결과로 매출과 수익이 크게 증가했습니다.',
                readTime: '3분'
              },
              {
                date: '2024년 12월 15일',
                category: '지속가능성',
                title: '탄소 중립 목표 2년 앞당겨 달성',
                summary: '적극적인 친환경 정책과 재생 에너지 도입으로 당초 계획보다 2년 빠른 탄소 중립을 실현했습니다.',
                readTime: '4분'
              },
              {
                date: '2024년 12월 12일',
                category: '인사',
                title: '새로운 글로벌 마케팅 디렉터 영입',
                summary: '20년간 글로벌 기업에서 마케팅을 이끌어온 전문가가 새로운 마케팅 전략을 주도하게 됩니다.',
                readTime: '2분'
              },
              {
                date: '2024년 12월 10일',
                category: '파트너십',
                title: '세계 최대 AI 연구소와 5년간 공동 연구 계약 체결',
                summary: '차세대 인공지능 기술 개발을 위한 대규모 공동 연구 프로젝트가 시작됩니다.',
                readTime: '6분'
              }
            ].map((news, index) => (
              <article key={index} style={{
                backgroundColor: '#fbfbfd',
                borderRadius: '16px',
                padding: '2rem',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                borderLeft: '4px solid #007AFF'
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.08)'
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <time style={{
                    fontSize: '0.875rem',
                    color: '#6e6e73',
                    fontWeight: '500'
                  }}>
                    {news.date}
                  </time>
                  <span style={{
                    fontSize: '0.75rem',
                    color: '#007AFF',
                    backgroundColor: 'rgba(0, 122, 255, 0.1)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '12px',
                    fontWeight: '500',
                    textTransform: 'uppercase'
                  }}>
                    {news.category}
                  </span>
                  <span style={{
                    fontSize: '0.875rem',
                    color: '#6e6e73'
                  }}>
                    읽기 시간: {news.readTime}
                  </span>
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '1rem',
                  lineHeight: '1.3'
                }}>
                  {news.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#515154',
                  lineHeight: '1.6'
                }}>
                  {news.summary}
                </p>
              </article>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '3rem'
          }}>
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
              더 많은 뉴스 보기
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#1d1d1f',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: 'white'
          }}>
            뉴스레터 구독
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            InnovateCorp의 최신 소식과 혁신 이야기를 가장 먼저 받아보세요.
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <input
              type="email"
              placeholder="이메일 주소를 입력하세요"
              style={{
                padding: '12px 16px',
                borderRadius: '25px',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'white',
                fontSize: '1rem',
                minWidth: '300px',
                outline: 'none',
                backdropFilter: 'blur(10px)'
              }}
            />
            <button style={{
              backgroundColor: '#007AFF',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              padding: '12px 24px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              whiteSpace: 'nowrap'
            }} onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = '#0077ED'
            }} onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = '#007AFF'
            }}>
              구독하기
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}