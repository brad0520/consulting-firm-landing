'use client'

import Link from 'next/link'

export default function ServicesPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1.5rem'
          }}>
            전문 컨설팅 서비스
          </h1>
          <p style={{
            fontSize: '1.3rem',
            opacity: 0.95,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            다양한 산업 분야에서의 경험을 바탕으로<br />
            최적화된 솔루션을 제공합니다
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '3rem'
          }}>
            {[
              {
                icon: '📈',
                title: '경영 전략 컨설팅',
                desc: '기업의 비전과 목표를 달성하기 위한 전략적 로드맵을 수립합니다.',
                features: [
                  '비즈니스 전략 수립',
                  '시장 분석 및 경쟁사 분석',
                  '성장 전략 개발',
                  '사업 포트폴리오 최적화'
                ]
              },
              {
                icon: '⚙️',
                title: '프로세스 혁신',
                desc: '업무 프로세스를 분석하고 최적화하여 효율성을 극대화합니다.',
                features: [
                  '업무 프로세스 진단',
                  '프로세스 리엔지니어링',
                  '자동화 솔루션 도입',
                  '효율성 개선 컨설팅'
                ]
              },
              {
                icon: '🎯',
                title: '성과 관리 시스템',
                desc: 'KPI 설정부터 성과 측정까지 체계적인 관리 시스템을 구축합니다.',
                features: [
                  'KPI 설계 및 구축',
                  '성과 측정 체계 수립',
                  '대시보드 개발',
                  '성과 평가 시스템 구축'
                ]
              },
              {
                icon: '👥',
                title: '조직 개발',
                desc: '조직 구조 설계와 인재 육성으로 경쟁력을 강화합니다.',
                features: [
                  '조직 구조 설계',
                  '인재 육성 프로그램',
                  '리더십 개발',
                  '조직 문화 혁신'
                ]
              },
              {
                icon: '💻',
                title: '디지털 전환',
                desc: '최신 기술을 활용한 디지털 혁신 전략을 제시합니다.',
                features: [
                  '디지털 전략 수립',
                  'IT 인프라 구축',
                  '데이터 분석 시스템',
                  'AI/ML 솔루션 도입'
                ]
              },
              {
                icon: '💰',
                title: '재무 컨설팅',
                desc: '재무 구조 분석과 최적화로 건전한 경영을 지원합니다.',
                features: [
                  '재무 구조 분석',
                  '비용 최적화',
                  '예산 관리 시스템',
                  '투자 전략 수립'
                ]
              }
            ].map((service, idx) => (
              <div key={idx} style={{
                background: 'white',
                padding: '3rem',
                borderRadius: '16px',
                border: '1px solid #e8e8e8',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{service.icon}</div>
                <h3 style={{
                  fontSize: '1.8rem',
                  fontWeight: '700',
                  color: '#2c3e50',
                  marginBottom: '1rem'
                }}>
                  {service.title}
                </h3>
                <p style={{
                  color: '#7f8c8d',
                  lineHeight: '1.7',
                  marginBottom: '2rem'
                }}>
                  {service.desc}
                </p>
                <div style={{
                  borderTop: '1px solid #e8e8e8',
                  paddingTop: '1.5rem'
                }}>
                  <h4 style={{
                    fontSize: '1rem',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '1rem'
                  }}>
                    주요 서비스
                  </h4>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {service.features.map((feature, fIdx) => (
                      <li key={fIdx} style={{
                        padding: '0.5rem 0',
                        color: '#5d6d7e',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem'
                      }}>
                        <span style={{ color: '#3498db' }}>✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 0',
        background: '#f8f9fa',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#2c3e50',
            marginBottom: '1.5rem'
          }}>
            프로젝트 상담이 필요하신가요?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#7f8c8d',
            marginBottom: '3rem'
          }}>
            전문 컨설턴트가 귀사에 최적화된<br />
            솔루션을 제안해드립니다
          </p>
          <Link href="/contact" style={{
            background: '#3498db',
            color: 'white',
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
