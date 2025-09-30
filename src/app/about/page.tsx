'use client'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #34495e 0%, #2c3e50 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1.5rem'
          }}>
            ProConsult 소개
          </h1>
          <p style={{
            fontSize: '1.3rem',
            opacity: 0.95,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            15년간의 풍부한 경험과 검증된 방법론으로<br />
            고객의 비즈니스 성장을 이끌어내는 전문 파트너
          </p>
        </div>
      </section>

      {/* Company Info */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '4rem',
            alignItems: 'center'
          }}>
            <div>
              <h2 style={{
                fontSize: '2.5rem',
                fontWeight: '700',
                color: '#2c3e50',
                marginBottom: '1.5rem'
              }}>
                비즈니스 혁신의<br />
                믿을 수 있는 파트너
              </h2>
              <p style={{
                fontSize: '1.1rem',
                color: '#5d6d7e',
                lineHeight: '1.8',
                marginBottom: '2rem'
              }}>
                ProConsult는 2010년 설립 이후 다양한 산업 분야에서 500개 이상의 
                프로젝트를 성공적으로 수행해왔습니다. 우리는 단순한 컨설팅을 
                넘어서 고객사의 실질적인 성과 창출에 집중합니다.
              </p>
              <p style={{
                fontSize: '1.1rem',
                color: '#5d6d7e',
                lineHeight: '1.8'
              }}>
                축적된 경험과 전문성을 바탕으로 전략 수립부터 실행, 성과 측정까지 
                전 과정에서 고객사와 함께합니다. 우리의 목표는 고객의 성공이며, 
                이를 위해 최선을 다하고 있습니다.
              </p>
            </div>
            <div style={{
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              borderRadius: '20px',
              padding: '4rem',
              color: 'white',
              textAlign: 'center',
              minHeight: '400px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>🎯</div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: '600', marginBottom: '1rem' }}>
                Our Mission
              </h3>
              <p style={{ fontSize: '1.2rem', opacity: 0.95 }}>
                데이터와 전문성을 바탕으로<br />
                고객의 비즈니스 가치를<br />
                극대화합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section style={{ padding: '100px 0', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              핵심 가치
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#7f8c8d' }}>
              ProConsult가 지향하는 가치
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem'
          }}>
            {[
              {
                icon: '🎯',
                title: '전문성',
                desc: '15년간 축적된 업계 최고의 전문 지식과 경험'
              },
              {
                icon: '🤝',
                title: '신뢰',
                desc: '고객과의 약속을 최우선으로 하는 책임감'
              },
              {
                icon: '💡',
                title: '혁신',
                desc: '끊임없는 연구와 혁신으로 최적의 솔루션 제공'
              },
              {
                icon: '🌟',
                title: '성과',
                desc: '실질적인 성과 창출에 집중하는 결과 중심'
              }
            ].map((value, idx) => (
              <div key={idx} style={{
                background: 'white',
                padding: '3rem 2rem',
                borderRadius: '16px',
                textAlign: 'center',
                border: '1px solid #e8e8e8',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>{value.icon}</div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  color: '#2c3e50',
                  marginBottom: '1rem'
                }}>
                  {value.title}
                </h3>
                <p style={{
                  color: '#7f8c8d',
                  lineHeight: '1.6'
                }}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{
              fontSize: '2.5rem',
              fontWeight: '700',
              color: '#2c3e50',
              marginBottom: '1rem'
            }}>
              전문가 팀
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#7f8c8d' }}>
              각 분야 최고의 전문가들이 함께합니다
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2.5rem'
          }}>
            {[
              {
                name: '김철수',
                position: 'CEO & 대표 컨설턴트',
                specialty: '경영 전략, 조직 개발',
                experience: '20년 경력'
              },
              {
                name: '이영희',
                position: 'CFO',
                specialty: '재무 컨설팅, 리스크 관리',
                experience: '18년 경력'
              },
              {
                name: '박민수',
                position: '디지털 전환 총괄',
                specialty: 'IT 전략, 디지털 혁신',
                experience: '15년 경력'
              },
              {
                name: '정수진',
                position: '산업 전략 이사',
                specialty: '제조/유통 컨설팅',
                experience: '12년 경력'
              }
            ].map((member, idx) => (
              <div key={idx} style={{
                background: 'white',
                padding: '2.5rem',
                borderRadius: '16px',
                border: '1px solid #e8e8e8',
                textAlign: 'center',
                transition: 'all 0.3s ease'
              }}>
                <div style={{
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '3rem',
                  color: 'white'
                }}>
                  👤
                </div>
                <h3 style={{
                  fontSize: '1.3rem',
                  fontWeight: '700',
                  color: '#2c3e50',
                  marginBottom: '0.5rem'
                }}>
                  {member.name}
                </h3>
                <p style={{
                  fontSize: '1rem',
                  color: '#3498db',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {member.position}
                </p>
                <p style={{
                  fontSize: '0.95rem',
                  color: '#7f8c8d',
                  marginBottom: '0.5rem'
                }}>
                  {member.specialty}
                </p>
                <p style={{
                  fontSize: '0.9rem',
                  color: '#95a5a6',
                  fontWeight: '500'
                }}>
                  {member.experience}
                </p>
              </div>
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
            ProConsult와 함께<br />
            새로운 도약을 시작하세요
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '3rem',
            opacity: 0.95
          }}>
            전문 컨설턴트가 귀사의 성장을 위한<br />
            최적의 솔루션을 제안해드립니다
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
            무료 상담 신청
          </Link>
        </div>
      </section>
    </main>
  )
}
