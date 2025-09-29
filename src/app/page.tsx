'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CorporateLanding() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const handleButtonClick = (buttonText: string) => {
    if (buttonText.includes('채용')) {
      alert('채용 페이지로 이동합니다. 여러분의 지원을 기다리고 있습니다!')
    } else if (buttonText.includes('투어')) {
      alert('회사 투어 신청이 접수되었습니다. 곧 연락드리겠습니다!')
    }
  }

  useEffect(() => {
    // 스크롤 시 요소 나타나는 효과
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active')
        }
      })
    }, observerOptions)

    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
      observer.observe(el)
    })


    // 통계 카운터 애니메이션
    const animateCounter = (element: HTMLElement, target: number, suffix = '') => {
      let current = 0
      const increment = target / 100
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          current = target
          clearInterval(timer)
        }

        let displayValue: string
        if (target >= 1000000) {
          displayValue = (current / 1000000).toFixed(1) + 'M'
        } else if (target >= 1000) {
          displayValue = (current / 1000).toFixed(0) + 'K'
        } else {
          displayValue = Math.floor(current).toString()
        }

        element.textContent = displayValue + suffix
      }, 20)
    }

    // 통계 섹션이 보일 때 카운터 시작
    const statsObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const statNumbers = entry.target.querySelectorAll('.stat-number')

          // 각 통계 숫자에 애니메이션 적용
          if (statNumbers[0]) animateCounter(statNumbers[0] as HTMLElement, 15, '년')
          if (statNumbers[1]) animateCounter(statNumbers[1] as HTMLElement, 2000000, '+')
          if (statNumbers[2]) animateCounter(statNumbers[2] as HTMLElement, 100, '%')

          statsObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    const heroStats = document.querySelector('.hero-stats')
    if (heroStats) {
      statsObserver.observe(heroStats)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#ffffff',
      color: '#1d1d1f',
      fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
      overflowX: 'hidden',
      margin: 0,
      padding: 0
    }}>
      {/* 글로벌 스타일 */}
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          margin: 0;
          padding: 0;
          font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #1d1d1f;
          background-color: #ffffff;
          overflow-x: hidden;
        }

        .fade-in {
          opacity: 0;
          transform: translateY(40px);
          transition: all 0.8s ease;
        }

        .fade-in.active {
          opacity: 1;
          transform: translateY(0);
        }

        .slide-in-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease;
        }

        .slide-in-left.active {
          opacity: 1;
          transform: translateX(0);
        }

        .slide-in-right {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease;
        }

        .slide-in-right.active {
          opacity: 1;
          transform: translateX(0);
        }
      `}</style>


      {/* Hero Section */}
      <section id="home" style={{
        background: 'linear-gradient(135deg, #f5f5f7 0%, #fafafa 100%)',
        padding: '120px 0 100px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          content: '',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: `radial-gradient(circle at 70% 30%, rgba(0, 175, 122, 0.03) 0%, transparent 50%),
                      radial-gradient(circle at 30% 70%, rgba(255, 149, 0, 0.03) 0%, transparent 50%)`
        }}></div>

        <div style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h1 className="fade-in" style={{
            fontSize: '4rem',
            fontWeight: '700',
            marginBottom: '1.5rem',
            color: '#1d1d1f',
            lineHeight: '1.08'
          }}>
            더 나은 세상을<br/>만들어가는 기업
          </h1>
          <p className="fade-in" style={{
            fontSize: '1.75rem',
            fontWeight: '400',
            color: '#86868b',
            marginBottom: '3rem',
            lineHeight: '1.3'
          }}>
            혁신적인 기술과 인간 중심의 가치로<br/>
            지속 가능한 미래를 설계합니다
          </p>

          <div className="hero-stats" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '3rem',
            marginTop: '4rem',
            maxWidth: '800px',
            marginLeft: 'auto',
            marginRight: 'auto'
          }}>
            <div className="fade-in" style={{ textAlign: 'center' }}>
              <span className="stat-number" style={{
                fontSize: '3.5rem',
                fontWeight: '700',
                color: '#00af7a',
                marginBottom: '0.5rem',
                display: 'block'
              }}>15년</span>
              <div style={{
                fontSize: '1.1rem',
                color: '#86868b',
                fontWeight: '400'
              }}>혁신의 역사</div>
            </div>
            <div className="fade-in" style={{ textAlign: 'center' }}>
              <span className="stat-number" style={{
                fontSize: '3.5rem',
                fontWeight: '700',
                color: '#00af7a',
                marginBottom: '0.5rem',
                display: 'block'
              }}>2M+</span>
              <div style={{
                fontSize: '1.1rem',
                color: '#86868b',
                fontWeight: '400'
              }}>고객의 신뢰</div>
            </div>
            <div className="fade-in" style={{ textAlign: 'center' }}>
              <span className="stat-number" style={{
                fontSize: '3.5rem',
                fontWeight: '700',
                color: '#00af7a',
                marginBottom: '0.5rem',
                display: 'block'
              }}>100%</span>
              <div style={{
                fontSize: '1.1rem',
                color: '#86868b',
                fontWeight: '400'
              }}>친환경 에너지</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" style={{
        padding: '120px 0',
        background: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '6rem',
            alignItems: 'center'
          }}>
            <div className="slide-in-left">
              <h2 style={{
                fontSize: '3rem',
                fontWeight: '700',
                marginBottom: '2rem',
                color: '#1d1d1f',
                lineHeight: '1.1'
              }}>
                우리의 미션
              </h2>
              <p style={{
                fontSize: '1.25rem',
                color: '#86868b',
                lineHeight: '1.5',
                marginBottom: '2rem'
              }}>
                기술이 사람을 위해 존재한다는 믿음으로,
                모든 개인이 더 나은 삶을 살 수 있도록
                돕는 혁신적인 솔루션을 만듭니다.
              </p>
              <p style={{
                fontSize: '1.25rem',
                color: '#86868b',
                lineHeight: '1.5',
                marginBottom: '2rem'
              }}>
                지속 가능하고 포용적인 미래를 위해
                우리의 모든 제품과 서비스는
                환경과 사회에 긍정적인 영향을 미치도록 설계됩니다.
              </p>
            </div>
            <div className="slide-in-right" style={{
              background: 'linear-gradient(135deg, #00af7a 0%, #30d158 100%)',
              borderRadius: '20px',
              height: '400px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '2rem',
              fontWeight: '600',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{
                content: '',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><circle cx="100" cy="100" r="50" fill="rgba(255,255,255,0.1)"/><circle cx="300" cy="150" r="30" fill="rgba(255,255,255,0.08)"/><circle cx="200" cy="300" r="40" fill="rgba(255,255,255,0.06)"/></svg>')`
              }}></div>
              미래 비전
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" style={{
        padding: '120px 0',
        background: '#f5f5f7'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h2 className="fade-in" style={{
            textAlign: 'center',
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '4rem',
            color: '#1d1d1f'
          }}>
            핵심 가치
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem'
          }}>
            {[
              {
                icon: '🔥',
                title: '혁신',
                description: '끊임없는 도전과 창의적 사고로 불가능을 가능하게 만들어 나갑니다. 기존의 틀을 깨고 새로운 가능성을 열어갑니다.',
                color: 'linear-gradient(135deg, #ff9500 0%, #ff6b00 100%)'
              },
              {
                icon: '🌱',
                title: '지속가능성',
                description: '환경을 보호하고 지속 가능한 미래를 만들기 위해 모든 사업 활동에서 친환경적 선택을 우선시합니다.',
                color: 'linear-gradient(135deg, #30d158 0%, #00af7a 100%)'
              },
              {
                icon: '🤝',
                title: '포용성',
                description: '다양성을 존중하고 모든 사람이 동등한 기회를 가질 수 있는 포용적인 환경을 조성하고 유지합니다.',
                color: 'linear-gradient(135deg, #007aff 0%, #0051d5 100%)'
              },
              {
                icon: '⭐',
                title: '품질',
                description: '타협하지 않는 품질 기준으로 고객의 기대를 뛰어넘는 제품과 서비스를 제공합니다.',
                color: 'linear-gradient(135deg, #ff3b30 0%, #d70015 100%)'
              }
            ].map((value, index) => (
              <div key={index} className="fade-in" style={{
                background: '#ffffff',
                borderRadius: '20px',
                padding: '3rem 2.5rem',
                textAlign: 'center',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)'
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  margin: '0 auto 2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  background: value.color,
                  color: 'white'
                }}>
                  {value.icon}
                </div>
                <h3 style={{
                  fontSize: '1.75rem',
                  fontWeight: '600',
                  marginBottom: '1.5rem',
                  color: '#1d1d1f'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: '#86868b',
                  lineHeight: '1.6',
                  fontSize: '1.1rem'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" style={{
        padding: '120px 0',
        background: '#ffffff'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h2 className="fade-in" style={{
            textAlign: 'center',
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '4rem',
            color: '#1d1d1f'
          }}>
            리더십 팀
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '3rem',
            marginTop: '4rem'
          }}>
            {[
              {
                emoji: '👨‍💼',
                name: '김준호',
                role: '최고경영자 (CEO)',
                bio: '15년 간의 기술 업계 경험을 바탕으로 혁신적인 제품 개발과 지속 가능한 성장을 이끌고 있습니다.'
              },
              {
                emoji: '👩‍💼',
                name: '이소영',
                role: '최고기술책임자 (CTO)',
                bio: 'AI와 머신러닝 분야의 전문가로, 차세대 기술 개발과 디지털 트랜스포메이션을 주도하고 있습니다.'
              },
              {
                emoji: '👨‍💻',
                name: '박민수',
                role: '최고마케팅책임자 (CMO)',
                bio: '브랜드 전략과 고객 경험 혁신을 통해 시장에서의 독보적인 위치를 구축하고 있습니다.'
              },
              {
                emoji: '👩‍⚖️',
                name: '정미경',
                role: '최고재무책임자 (CFO)',
                bio: '금융 전략과 투자 계획을 통해 회사의 안정적인 성장과 장기적인 가치 창출을 담당하고 있습니다.'
              }
            ].map((member, index) => (
              <div key={index} className="fade-in" style={{
                textAlign: 'center',
                background: '#fbfbfd',
                borderRadius: '20px',
                padding: '3rem 2rem',
                transition: 'all 0.3s ease',
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)'
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.08)'
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  margin: '0 auto 1.5rem',
                  background: 'linear-gradient(135deg, #86868b, #d1d1d6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '2.5rem',
                  color: 'white'
                }}>
                  {member.emoji}
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: '#1d1d1f'
                }}>
                  {member.name}
                </div>
                <div style={{
                  fontSize: '1rem',
                  color: '#0071e3',
                  marginBottom: '1rem',
                  fontWeight: '500'
                }}>
                  {member.role}
                </div>
                <p style={{
                  color: '#86868b',
                  lineHeight: '1.5',
                  fontSize: '0.95rem'
                }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" style={{
        padding: '120px 0',
        background: 'linear-gradient(135deg, #1d1d1f 0%, #2c2c2e 100%)',
        color: 'white'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h2 className="fade-in" style={{
            textAlign: 'center',
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '4rem',
            color: 'white'
          }}>
            사회적 영향
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem',
            marginTop: '4rem'
          }}>
            {[
              {
                number: '100%',
                title: '재생 에너지',
                description: '모든 사업장에서 100% 재생 가능 에너지를 사용하여 탄소 중립을 실현하고 있습니다.'
              },
              {
                number: '50만',
                title: '교육 수혜자',
                description: '디지털 교육 프로그램을 통해 50만 명 이상의 학생들에게 기술 교육 기회를 제공했습니다.'
              },
              {
                number: '95%',
                title: '재활용률',
                description: '제품 생산 과정에서 발생하는 폐기물의 95%를 재활용하여 순환 경제에 기여하고 있습니다.'
              }
            ].map((impact, index) => (
              <div key={index} className="fade-in" style={{
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                padding: '3rem 2.5rem',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.3s ease'
              }} onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)'
                e.currentTarget.style.transform = 'translateY(-5px)'
              }} onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  color: '#30d158',
                  marginBottom: '1rem'
                }}>
                  {impact.number}
                </div>
                <div style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: 'white'
                }}>
                  {impact.title}
                </div>
                <p style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  lineHeight: '1.6'
                }}>
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{
        padding: '120px 0',
        background: '#f5f5f7',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '0 20px'
        }}>
          <h2 className="fade-in" style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '2rem',
            color: '#1d1d1f'
          }}>
            함께 성장할 인재를 찾습니다
          </h2>
          <p className="fade-in" style={{
            fontSize: '1.25rem',
            color: '#86868b',
            marginBottom: '3rem',
            lineHeight: '1.4'
          }}>
            혁신적인 환경에서 자신의 잠재력을 발휘하고<br/>
            세상을 변화시키는 일에 참여하세요
          </p>
          <div className="fade-in" style={{
            display: 'flex',
            gap: '1.5rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button onClick={() => handleButtonClick('채용 정보 보기')} style={{
              background: '#0071e3',
              color: 'white',
              padding: '14px 28px',
              border: 'none',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'inline-block'
            }} onMouseOver={(e) => {
              e.currentTarget.style.background = '#0077ed'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }} onMouseOut={(e) => {
              e.currentTarget.style.background = '#0071e3'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              채용 정보 보기
            </button>
            <button onClick={() => handleButtonClick('회사 투어 신청')} style={{
              color: '#0071e3',
              border: '2px solid #0071e3',
              background: 'transparent',
              padding: '12px 26px',
              borderRadius: '25px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'inline-block'
            }} onMouseOver={(e) => {
              e.currentTarget.style.background = '#0071e3'
              e.currentTarget.style.color = 'white'
            }} onMouseOut={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#0071e3'
            }}>
              회사 투어 신청
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}