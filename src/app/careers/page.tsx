'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Careers() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('전체')

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const categories = ['전체', '엔지니어링', '디자인', '제품', '마케팅', '영업', '운영']

  const jobs = [
    {
      title: 'Senior Software Engineer',
      department: '엔지니어링',
      location: '서울, 대한민국',
      type: '정규직',
      level: '시니어',
      description: '차세대 AI 플랫폼 개발을 위한 백엔드 시스템 설계 및 구현'
    },
    {
      title: 'Product Designer',
      department: '디자인',
      location: '서울, 대한민국',
      type: '정규직',
      level: '중급',
      description: '사용자 중심의 혁신적인 제품 디자인 및 사용자 경험 설계'
    },
    {
      title: 'Frontend Developer',
      department: '엔지니어링',
      location: '서울, 대한민국',
      type: '정규직',
      level: '중급',
      description: 'React 기반 웹 애플리케이션 개발 및 사용자 인터페이스 구현'
    },
    {
      title: 'Product Manager',
      department: '제품',
      location: '서울, 대한민국',
      type: '정규직',
      level: '시니어',
      description: 'AI 제품 전략 수립 및 제품 로드맵 관리'
    },
    {
      title: 'Marketing Specialist',
      department: '마케팅',
      location: '서울, 대한민국',
      type: '정규직',
      level: '주니어',
      description: '디지털 마케팅 캠페인 기획 및 실행'
    },
    {
      title: 'DevOps Engineer',
      department: '엔지니어링',
      location: '서울, 대한민국',
      type: '정규직',
      level: '중급',
      description: 'CI/CD 파이프라인 구축 및 클라우드 인프라 관리'
    },
    {
      title: 'UX Researcher',
      department: '디자인',
      location: '서울, 대한민국',
      type: '정규직',
      level: '중급',
      description: '사용자 리서치 및 데이터 기반 UX 개선 방안 도출'
    },
    {
      title: 'Data Scientist',
      department: '엔지니어링',
      location: '서울, 대한민국',
      type: '정규직',
      level: '시니어',
      description: '머신러닝 모델 개발 및 데이터 분석'
    }
  ]

  const filteredJobs = selectedCategory === '전체'
    ? jobs
    : jobs.filter(job => job.department === selectedCategory)

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
            채용
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#6e6e73',
            lineHeight: '1.6',
            maxWidth: '600px',
            margin: '0 auto 2rem'
          }}>
            함께 세상을 변화시킬 인재를 찾습니다. InnovateCorp에서 당신의 꿈을 현실로 만들어보세요.
          </p>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '2rem',
            flexWrap: 'wrap'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#007AFF',
                marginBottom: '0.5rem'
              }}>500+</div>
              <div style={{
                fontSize: '1rem',
                color: '#6e6e73'
              }}>동료들</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#007AFF',
                marginBottom: '0.5rem'
              }}>25+</div>
              <div style={{
                fontSize: '1rem',
                color: '#6e6e73'
              }}>국가</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#007AFF',
                marginBottom: '0.5rem'
              }}>100%</div>
              <div style={{
                fontSize: '1rem',
                color: '#6e6e73'
              }}>원격근무</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
            복리후생
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: '💰',
                title: '경쟁력 있는 연봉',
                description: '업계 최고 수준의 연봉과 성과급, 스톡옵션을 제공합니다.',
                color: '#30D158'
              },
              {
                icon: '🏠',
                title: '유연근무제',
                description: '재택근무, 하이브리드 근무 등 다양한 근무 형태를 지원합니다.',
                color: '#007AFF'
              },
              {
                icon: '🎓',
                title: '교육 지원',
                description: '직무 역량 강화를 위한 교육비, 컨퍼런스 참가비를 지원합니다.',
                color: '#FF9500'
              },
              {
                icon: '🏥',
                title: '건강 관리',
                description: '종합건강검진, 의료비 지원, 헬스장 이용권을 제공합니다.',
                color: '#FF3B30'
              },
              {
                icon: '✈️',
                title: '휴가 지원',
                description: '연차 휴가 외 리프레시 휴가, 여행비 지원을 제공합니다.',
                color: '#5856D6'
              },
              {
                icon: '👶',
                title: '육아 지원',
                description: '출산휴가, 육아휴직, 보육비 지원 등 다양한 지원을 제공합니다.',
                color: '#AF52DE'
              }
            ].map((benefit, index) => (
              <div key={index} style={{
                backgroundColor: '#fbfbfd',
                borderRadius: '20px',
                padding: '2rem',
                textAlign: 'center',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.1)'
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  borderRadius: '50%',
                  backgroundColor: benefit.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  margin: '0 auto 1.5rem'
                }}>
                  {benefit.icon}
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '1rem'
                }}>
                  {benefit.title}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#515154',
                  lineHeight: '1.6'
                }}>
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Categories Filter */}
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
            marginBottom: '2rem',
            textAlign: 'center'
          }}>
            채용 공고
          </h2>

          {/* Category Filter */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3rem',
            flexWrap: 'wrap'
          }}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                style={{
                  padding: '8px 16px',
                  borderRadius: '20px',
                  border: selectedCategory === category ? '2px solid #007AFF' : '2px solid transparent',
                  backgroundColor: selectedCategory === category ? 'rgba(0, 122, 255, 0.1)' : '#ffffff',
                  color: selectedCategory === category ? '#007AFF' : '#515154',
                  fontSize: '0.9rem',
                  fontWeight: selectedCategory === category ? '600' : '400',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = '#f8f9fa'
                  }
                }}
                onMouseOut={(e) => {
                  if (selectedCategory !== category) {
                    e.currentTarget.style.backgroundColor = '#ffffff'
                  }
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem'
          }}>
            {filteredJobs.map((job, index) => (
              <div key={index} style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '2rem',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                cursor: 'pointer',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                border: '1px solid rgba(0, 0, 0, 0.04)'
              }} onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)'
              }} onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)'
              }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '1rem'
                }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{
                      fontSize: '1.5rem',
                      fontWeight: '600',
                      color: '#1d1d1f',
                      marginBottom: '0.5rem'
                    }}>
                      {job.title}
                    </h3>
                    <div style={{
                      display: 'flex',
                      gap: '1rem',
                      marginBottom: '1rem',
                      flexWrap: 'wrap'
                    }}>
                      <span style={{
                        fontSize: '0.875rem',
                        color: '#007AFF',
                        backgroundColor: 'rgba(0, 122, 255, 0.1)',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '12px',
                        fontWeight: '500'
                      }}>
                        {job.department}
                      </span>
                      <span style={{
                        fontSize: '0.875rem',
                        color: '#6e6e73'
                      }}>
                        📍 {job.location}
                      </span>
                      <span style={{
                        fontSize: '0.875rem',
                        color: '#6e6e73'
                      }}>
                        💼 {job.type}
                      </span>
                      <span style={{
                        fontSize: '0.875rem',
                        color: '#6e6e73'
                      }}>
                        📊 {job.level}
                      </span>
                    </div>
                    <p style={{
                      fontSize: '1rem',
                      color: '#515154',
                      lineHeight: '1.6',
                      marginBottom: 0
                    }}>
                      {job.description}
                    </p>
                  </div>
                  <button style={{
                    backgroundColor: '#007AFF',
                    color: 'white',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '8px 16px',
                    fontSize: '0.9rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    whiteSpace: 'nowrap',
                    marginLeft: '1rem'
                  }} onMouseOver={(e) => {
                    e.currentTarget.style.backgroundColor = '#0077ED'
                  }} onMouseOut={(e) => {
                    e.currentTarget.style.backgroundColor = '#007AFF'
                  }}>
                    지원하기
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div style={{
              textAlign: 'center',
              padding: '3rem 0',
              color: '#6e6e73'
            }}>
              해당 카테고리에 현재 채용 공고가 없습니다.
            </div>
          )}
        </div>
      </section>

      {/* Culture Section */}
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
            우리의 문화
          </h2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center',
            marginBottom: '4rem'
          }}>
            <div>
              <h3 style={{
                fontSize: '2rem',
                fontWeight: '600',
                color: '#1d1d1f',
                marginBottom: '1.5rem'
              }}>
                혁신적인 환경
              </h3>
              <p style={{
                fontSize: '1.1rem',
                color: '#515154',
                lineHeight: '1.7',
                marginBottom: '1.5rem'
              }}>
                우리는 실험을 장려하고 실패를 통해 배우는 문화를 만들어갑니다.
                모든 구성원이 자유롭게 아이디어를 제안하고 실현할 수 있는 환경을 제공합니다.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#515154',
                lineHeight: '1.7'
              }}>
                개인의 성장이 곧 회사의 성장이라는 믿음으로,
                지속적인 학습과 발전을 지원합니다.
              </p>
            </div>
            <div style={{
              backgroundColor: '#f8f9fa',
              borderRadius: '20px',
              padding: '3rem',
              textAlign: 'center'
            }}>
              <div style={{
                fontSize: '4rem',
                marginBottom: '1rem'
              }}>🚀</div>
              <h4 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                color: '#1d1d1f',
                marginBottom: '1rem'
              }}>
                성장과 도전
              </h4>
              <p style={{
                fontSize: '1rem',
                color: '#6e6e73',
                lineHeight: '1.6'
              }}>
                끊임없는 도전을 통해<br/>
                함께 성장해나갑니다
              </p>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: '🤝',
                title: '협업',
                description: '다양한 배경의 동료들과 함께 문제를 해결합니다'
              },
              {
                icon: '🎯',
                title: '목표 지향',
                description: '명확한 목표를 설정하고 달성해 나갑니다'
              },
              {
                icon: '💡',
                title: '창의성',
                description: '새로운 아이디어를 자유롭게 제안하고 실현합니다'
              },
              {
                icon: '🌱',
                title: '성장',
                description: '개인과 팀의 지속적인 성장을 추구합니다'
              }
            ].map((value, index) => (
              <div key={index} style={{
                textAlign: 'center',
                padding: '1.5rem'
              }}>
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem'
                }}>
                  {value.icon}
                </div>
                <h4 style={{
                  fontSize: '1.2rem',
                  fontWeight: '600',
                  color: '#1d1d1f',
                  marginBottom: '1rem'
                }}>
                  {value.title}
                </h4>
                <p style={{
                  fontSize: '1rem',
                  color: '#6e6e73',
                  lineHeight: '1.6'
                }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
            함께 미래를 만들어갈 준비가 되셨나요?
          </h2>
          <p style={{
            fontSize: '1.1rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '2rem',
            lineHeight: '1.6'
          }}>
            InnovateCorp에서 당신의 잠재력을 발휘하고<br/>
            세상을 변화시키는 일에 참여하세요
          </p>
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
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
              채용 공고 보기
            </button>
            <button style={{
              color: 'white',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              backgroundColor: 'transparent',
              borderRadius: '25px',
              padding: '10px 22px',
              fontSize: '1rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }} onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'
            }} onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)'
            }}>
              회사 문화 알아보기
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}