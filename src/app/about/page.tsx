'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function About() {
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
            혁신을 통해 세상을 바꿉니다
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6e6e73',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            우리는 기술의 한계를 뛰어넘어 인류의 삶을 더 나은 방향으로 이끌어가는 것을 사명으로 합니다.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#fbfbfd'
      }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '600',
                color: '#1d1d1f',
                marginBottom: '1.5rem',
                lineHeight: '1.2'
              }}>
                우리의 여정
              </h2>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#515154',
                marginBottom: '1.5rem'
              }}>
                2010년 설립 이래, InnovateCorp는 지속적인 혁신을 통해 기술 업계를 선도해왔습니다.
                우리는 단순히 제품을 만드는 것이 아니라, 사람들의 일상을 변화시키는 경험을 창조합니다.
              </p>
              <p style={{
                fontSize: '1.1rem',
                lineHeight: '1.7',
                color: '#515154'
              }}>
                전 세계 50개국에서 수백만 명의 사용자가 우리의 기술을 통해
                더 나은 삶을 살아가고 있습니다.
              </p>
            </div>
            <div style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '1.5rem'
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#007AFF',
                    marginBottom: '0.5rem'
                  }}>50+</div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#6e6e73',
                    fontWeight: '500'
                  }}>국가</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#007AFF',
                    marginBottom: '0.5rem'
                  }}>10M+</div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#6e6e73',
                    fontWeight: '500'
                  }}>사용자</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#007AFF',
                    marginBottom: '0.5rem'
                  }}>500+</div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#6e6e73',
                    fontWeight: '500'
                  }}>직원</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{
                    fontSize: '2.5rem',
                    fontWeight: '700',
                    color: '#007AFF',
                    marginBottom: '0.5rem'
                  }}>15+</div>
                  <div style={{
                    fontSize: '0.9rem',
                    color: '#6e6e73',
                    fontWeight: '500'
                  }}>년 경험</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '1rem'
            }}>
              우리의 가치
            </h2>
            <p style={{
              fontSize: '1.1rem',
              color: '#6e6e73',
              maxWidth: '600px',
              margin: '0 auto'
            }}>
              우리가 추구하는 핵심 가치들은 모든 제품과 서비스에 반영됩니다.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: '혁신',
                description: '기존의 틀을 깨고 새로운 가능성을 탐구합니다.',
                icon: '💡'
              },
              {
                title: '품질',
                description: '최고 수준의 품질을 통해 고객의 신뢰를 얻습니다.',
                icon: '⭐'
              },
              {
                title: '지속가능성',
                description: '환경과 사회를 생각하는 지속가능한 발전을 추구합니다.',
                icon: '🌱'
              }
            ].map((value, index) => (
              <div key={index} style={{
                backgroundColor: '#f8f9fa',
                borderRadius: '16px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'transform 0.2s ease',
                cursor: 'pointer'
              }}>
                <div style={{
                  fontSize: '3rem',
                  marginBottom: '1rem'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '1rem'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#515154',
                  lineHeight: '1.6'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#fbfbfd'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '1rem'
            }}>
              주요 성과
            </h2>
          </div>

          {[
            {
              year: "2010",
              title: "InnovateCorp 설립",
              description: "기술 혁신을 통한 더 나은 세상을 만들겠다는 비전으로 회사가 설립되었습니다."
            },
            {
              year: "2015",
              title: "글로벌 진출",
              description: "아시아-태평양 지역으로 사업을 확장하며 국제적인 기업으로 성장했습니다."
            },
            {
              year: "2018",
              title: "AI 플랫폼 출시",
              description: "혁신적인 AI 기반 플랫폼을 출시하여 업계의 새로운 표준을 제시했습니다."
            },
            {
              year: "2021",
              title: "지속가능성 이니셔티브",
              description: "탄소 중립 목표를 선언하고 지속가능한 기술 개발에 집중하기 시작했습니다."
            },
            {
              year: "2024",
              title: "미래를 향한 도약",
              description: "차세대 기술 개발과 글로벌 파트너십 확대를 통해 새로운 장을 열어가고 있습니다."
            }
          ].map((milestone, index) => (
            <div key={index} style={{
              display: 'flex',
              marginBottom: index === 4 ? 0 : '3rem',
              alignItems: 'flex-start'
            }}>
              <div style={{
                flexShrink: 0,
                width: '100px',
                textAlign: 'right',
                paddingRight: '2rem'
              }}>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  color: '#007AFF'
                }}>
                  {milestone.year}
                </div>
              </div>
              <div style={{
                flexShrink: 0,
                width: '1px',
                backgroundColor: '#d2d2d7',
                marginRight: '2rem',
                position: 'relative',
                minHeight: '60px'
              }}>
                <div style={{
                  position: 'absolute',
                  width: '12px',
                  height: '12px',
                  backgroundColor: '#007AFF',
                  borderRadius: '50%',
                  left: '-6px',
                  top: '8px'
                }}></div>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#1d1d1f'
                }}>
                  {milestone.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#515154',
                  lineHeight: '1.6'
                }}>
                  {milestone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}