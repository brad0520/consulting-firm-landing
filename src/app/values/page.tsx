'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Values() {
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
            우리의 가치관
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6e6e73',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            InnovateCorp의 모든 결정과 행동의 기준이 되는 핵심 가치들을 소개합니다.
          </p>
        </div>
      </section>

      {/* Core Values Section */}
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
            gap: '6rem'
          }}>
            {[
              {
                title: '혁신',
                subtitle: 'Innovation',
                icon: '💡',
                description: '우리는 끊임없는 도전과 창의적 사고로 불가능을 가능하게 만듭니다.',
                details: '기존의 틀을 깨고 새로운 가능성을 탐구하며, 혁신적인 아이디어와 기술을 통해 세상을 변화시킵니다. 실패를 두려워하지 않고 지속적으로 학습하며 발전해 나갑니다.',
                color: 'linear-gradient(135deg, #ff9500 0%, #ff6b00 100%)',
                bgColor: '#fff8f0'
              },
              {
                title: '지속가능성',
                subtitle: 'Sustainability',
                icon: '🌱',
                description: '환경을 보호하고 지속 가능한 미래를 만들기 위해 노력합니다.',
                details: '모든 사업 활동에서 친환경적 선택을 우선시하며, 탄소 중립 목표를 달성하기 위해 노력합니다. 순환 경제 모델을 적극 도입하여 지구와 함께 성장하는 기업이 되겠습니다.',
                color: 'linear-gradient(135deg, #30d158 0%, #00af7a 100%)',
                bgColor: '#f0fff4'
              },
              {
                title: '포용성',
                subtitle: 'Inclusivity',
                icon: '🤝',
                description: '다양성을 존중하고 모든 사람이 동등한 기회를 가지도록 합니다.',
                details: '성별, 나이, 인종, 종교, 성적 지향에 관계없이 모든 구성원이 자신의 잠재력을 발휘할 수 있는 포용적인 환경을 조성합니다. 다양한 관점과 배경이 만나 더 큰 혁신을 창조합니다.',
                color: 'linear-gradient(135deg, #007aff 0%, #0051d5 100%)',
                bgColor: '#f0f8ff'
              },
              {
                title: '품질',
                subtitle: 'Quality',
                icon: '⭐',
                description: '타협하지 않는 품질 기준으로 고객의 기대를 뛰어넘습니다.',
                details: '세심한 주의와 장인정신으로 제품과 서비스를 완성합니다. 고객의 니즈를 깊이 이해하고, 최고 수준의 품질을 통해 신뢰받는 브랜드가 되겠습니다.',
                color: 'linear-gradient(135deg, #ff3b30 0%, #d70015 100%)',
                bgColor: '#fff5f5'
              },
              {
                title: '투명성',
                subtitle: 'Transparency',
                icon: '🔍',
                description: '모든 과정에서 투명하고 정직한 소통을 추구합니다.',
                details: '고객, 파트너, 구성원과의 관계에서 투명성을 유지하며, 정직하고 윤리적인 경영을 실천합니다. 열린 소통을 통해 신뢰를 구축하고 함께 성장해 나갑니다.',
                color: 'linear-gradient(135deg, #5856d6 0%, #007aff 100%)',
                bgColor: '#f8f7ff'
              },
              {
                title: '협업',
                subtitle: 'Collaboration',
                icon: '🚀',
                description: '함께 일할 때 더 큰 성과를 만들어낼 수 있다고 믿습니다.',
                details: '개인의 역량을 넘어선 집단 지성의 힘을 믿으며, 팀워크와 상호 존중을 바탕으로 한 협업 문화를 만들어갑니다. 내부뿐만 아니라 외부 파트너와의 협력도 적극 추진합니다.',
                color: 'linear-gradient(135deg, #af52de 0%, #ff2d92 100%)',
                bgColor: '#fdf2f8'
              }
            ].map((value, index) => (
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
                    backgroundColor: value.bgColor,
                    borderRadius: '24px',
                    padding: '3rem',
                    textAlign: 'center',
                    minHeight: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'relative',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      background: value.color,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '2.5rem',
                      color: 'white',
                      marginBottom: '1.5rem',
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
                    }}>
                      {value.icon}
                    </div>
                    <h3 style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      color: '#1d1d1f',
                      marginBottom: '0.5rem'
                    }}>
                      {value.title}
                    </h3>
                    <p style={{
                      fontSize: '1rem',
                      color: '#6e6e73',
                      fontWeight: '500',
                      letterSpacing: '0.5px'
                    }}>
                      {value.subtitle}
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
                      fontSize: '1.8rem',
                      fontWeight: '600',
                      color: '#1d1d1f',
                      marginBottom: '1rem'
                    }}>
                      {value.title}
                    </h4>
                    <p style={{
                      fontSize: '1.2rem',
                      lineHeight: '1.6',
                      color: '#007AFF',
                      marginBottom: '1.5rem',
                      fontWeight: '500'
                    }}>
                      {value.description}
                    </p>
                    <p style={{
                      fontSize: '1rem',
                      lineHeight: '1.7',
                      color: '#515154'
                    }}>
                      {value.details}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Section */}
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
            가치의 실천
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#6e6e73',
            lineHeight: '1.6',
            marginBottom: '3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem'
          }}>
            우리의 가치는 단순한 구호가 아닙니다. 일상 업무와 의사결정의 모든 순간에서
            이 가치들이 살아 숨쉬도록 노력하고 있습니다.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                title: '채용과 평가',
                description: '모든 채용과 성과 평가 과정에서 기술적 역량뿐만 아니라 우리의 가치와 부합하는지를 중요하게 고려합니다.',
                icon: '👥'
              },
              {
                title: '제품 개발',
                description: '제품 기획부터 출시까지 모든 단계에서 지속가능성, 품질, 포용성을 핵심 기준으로 삼습니다.',
                icon: '🛠️'
              },
              {
                title: '파트너십',
                description: '비즈니스 파트너 선정 시에도 우리와 같은 가치를 공유하는 기업들과 협력하는 것을 우선시합니다.',
                icon: '🤝'
              }
            ].map((implementation, index) => (
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
                  {implementation.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '1rem'
                }}>
                  {implementation.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#515154',
                  lineHeight: '1.6'
                }}>
                  {implementation.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{
        padding: '80px 0',
        backgroundColor: '#1d1d1f',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '700px',
          margin: '0 auto',
          padding: '0 1.5rem'
        }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '600',
            marginBottom: '1.5rem',
            color: 'white'
          }}>
            함께 가치를 만들어가세요
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '1.6',
            marginBottom: '2rem'
          }}>
            우리와 같은 가치를 추구하며 더 나은 세상을 만들어가고 싶다면,
            InnovateCorp과 함께해보세요.
          </p>
          <Link href="/careers" style={{
            display: 'inline-block',
            backgroundColor: '#007AFF',
            color: 'white',
            padding: '14px 28px',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}>
            채용 정보 보기
          </Link>
        </div>
      </section>
    </div>
  )
}