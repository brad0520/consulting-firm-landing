'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Leadership() {
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
            리더십
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6e6e73',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            비전과 혁신을 통해 InnovateCorp의 미래를 이끌어가는 경영진을 소개합니다.
          </p>
        </div>
      </section>

      {/* Leadership Team Section */}
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
            gap: '4rem'
          }}>
            {[
              {
                name: '김준호',
                role: '최고경영자 (CEO)',
                image: '👨‍💼',
                bio: '15년 간의 기술 업계 경험을 바탕으로 InnovateCorp의 비전을 현실로 만들어가고 있습니다. 지속 가능한 혁신과 인간 중심의 기술 개발을 통해 더 나은 세상을 만드는 것이 그의 사명입니다.',
                achievements: [
                  '전 삼성전자 모바일 사업부 부사장',
                  'MIT 경영학 석사',
                  '2023 아시아 CEO 어워드 수상',
                  '포브스 선정 아시아 영향력 있는 CEO 50인'
                ]
              },
              {
                name: '이소영',
                role: '최고기술책임자 (CTO)',
                image: '👩‍💼',
                bio: 'AI와 머신러닝 분야의 세계적인 전문가로, 차세대 기술 플랫폼 개발을 주도하고 있습니다. 기술과 인간의 조화로운 공존을 위한 혁신적인 솔루션을 개발하는 데 전념하고 있습니다.',
                achievements: [
                  '전 구글 AI 연구소 선임 연구원',
                  'Stanford 컴퓨터과학 박사',
                  'Nature AI 논문 20편 이상 발표',
                  '2022 여성 기술 리더상 수상'
                ]
              },
              {
                name: '박민수',
                role: '최고마케팅책임자 (CMO)',
                image: '👨‍💻',
                bio: '브랜드 전략과 고객 경험 혁신을 통해 InnovateCorp의 글로벌 위상을 높이고 있습니다. 데이터 기반의 마케팅과 고객 중심의 브랜드 스토리텔링으로 시장에서의 독보적인 위치를 구축하고 있습니다.',
                achievements: [
                  '전 글로벌 테크기업 아시아태평양 마케팅 디렉터',
                  'Wharton 마케팅 MBA',
                  'Cannes Lions 광고제 그랑프리 수상',
                  '마케팅 인사이트 전문서 3권 저술'
                ]
              },
              {
                name: '정미경',
                role: '최고재무책임자 (CFO)',
                image: '👩‍⚖️',
                bio: '전략적 재무 계획과 투자 포트폴리오 관리를 통해 회사의 안정적인 성장과 장기적인 가치 창출을 담당하고 있습니다. ESG 경영과 지속 가능한 투자에 대한 깊은 이해를 바탕으로 미래 지향적인 재무 전략을 수립합니다.',
                achievements: [
                  '전 골드만삭스 아시아 투자은행 부문 MD',
                  'Harvard Business School MBA',
                  'CFA 자격 보유',
                  '아시아 CFO 어워드 2023 수상'
                ]
              }
            ].map((leader, index) => (
              <div key={index} style={{
                display: 'grid',
                gridTemplateColumns: index % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
              }}>
                <div style={{
                  order: index % 2 === 0 ? 1 : 2
                }}>
                  <div style={{
                    backgroundColor: '#f8f9fa',
                    borderRadius: '20px',
                    padding: '3rem',
                    textAlign: 'center',
                    minHeight: '400px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <div style={{
                      width: '120px',
                      height: '120px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #007AFF 0%, #0051D5 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '3rem',
                      color: 'white',
                      marginBottom: '1.5rem'
                    }}>
                      {leader.image}
                    </div>
                    <h3 style={{
                      fontSize: '1.8rem',
                      fontWeight: '600',
                      color: '#1d1d1f',
                      marginBottom: '0.5rem'
                    }}>
                      {leader.name}
                    </h3>
                    <p style={{
                      fontSize: '1.1rem',
                      color: '#007AFF',
                      fontWeight: '500'
                    }}>
                      {leader.role}
                    </p>
                  </div>
                </div>

                <div style={{
                  order: index % 2 === 0 ? 2 : 1
                }}>
                  <div style={{
                    maxWidth: '500px',
                    margin: index % 2 === 0 ? '0 0 0 auto' : '0 auto 0 0'
                  }}>
                    <h4 style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: '#1d1d1f',
                      marginBottom: '1.5rem'
                    }}>
                      {leader.name}
                    </h4>
                    <p style={{
                      fontSize: '1.1rem',
                      lineHeight: '1.7',
                      color: '#515154',
                      marginBottom: '2rem'
                    }}>
                      {leader.bio}
                    </p>

                    <div>
                      <h5 style={{
                        fontSize: '1.1rem',
                        fontWeight: '600',
                        color: '#1d1d1f',
                        marginBottom: '1rem'
                      }}>
                        주요 경력 및 성과
                      </h5>
                      <ul style={{
                        listStyle: 'none',
                        padding: 0,
                        margin: 0
                      }}>
                        {leader.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} style={{
                            fontSize: '1rem',
                            color: '#6e6e73',
                            marginBottom: '0.8rem',
                            paddingLeft: '1.5rem',
                            position: 'relative'
                          }}>
                            <span style={{
                              position: 'absolute',
                              left: 0,
                              top: '0.5rem',
                              width: '6px',
                              height: '6px',
                              backgroundColor: '#007AFF',
                              borderRadius: '50%'
                            }}></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#fbfbfd'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            color: '#1d1d1f',
            marginBottom: '1.5rem'
          }}>
            리더십 철학
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#6e6e73',
            lineHeight: '1.6',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            우리는 협업과 혁신, 그리고 지속 가능한 성장을 통해 모든 구성원이
            잠재력을 발휘할 수 있는 환경을 만들어갑니다.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: '🎯',
                title: '비전 중심 리더십',
                description: '명확한 비전과 목표를 제시하여 팀이 한 방향으로 나아갈 수 있도록 이끕니다.'
              },
              {
                icon: '🤝',
                title: '협력적 의사결정',
                description: '다양한 관점을 존중하고 집단 지성을 활용한 의사결정을 추구합니다.'
              },
              {
                icon: '🌱',
                title: '지속적 학습',
                description: '변화하는 환경에 적응하고 지속적으로 학습하며 성장하는 문화를 조성합니다.'
              }
            ].map((philosophy, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'transform 0.2s ease'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem'
                }}>
                  {philosophy.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '1rem'
                }}>
                  {philosophy.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#515154',
                  lineHeight: '1.6'
                }}>
                  {philosophy.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}