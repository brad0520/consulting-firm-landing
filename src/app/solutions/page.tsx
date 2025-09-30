'use client'

import Link from 'next/link'

export default function SolutionsPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #2c3e50 0%, #34495e 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1.5rem'
          }}>
            산업별 맞춤 솔루션
          </h1>
          <p style={{
            fontSize: '1.3rem',
            opacity: 0.95,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            각 산업의 특성을 이해하고<br />
            최적화된 컨설팅 솔루션을 제공합니다
          </p>
        </div>
      </section>

      {/* Industry Solutions */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {[
              {
                icon: '🏭',
                title: '제조업 솔루션',
                desc: '스마트 팩토리 구축부터 공급망 최적화까지',
                color: '#3498db',
                solutions: [
                  '생산 프로세스 최적화',
                  '품질 관리 시스템 구축',
                  '공급망 관리(SCM)',
                  '스마트 팩토리 전환'
                ]
              },
              {
                icon: '🏦',
                title: '금융업 솔루션',
                desc: '디지털 금융 혁신과 리스크 관리',
                color: '#27ae60',
                solutions: [
                  '디지털 뱅킹 전략',
                  '리스크 관리 체계',
                  '고객 경험 혁신',
                  'RegTech 솔루션'
                ]
              },
              {
                icon: '🛒',
                title: '유통/리테일 솔루션',
                desc: '옴니채널 전략과 고객 경험 혁신',
                color: '#e74c3c',
                solutions: [
                  '옴니채널 전략 수립',
                  '고객 데이터 분석',
                  '재고 최적화',
                  'e-커머스 전환'
                ]
              },
              {
                icon: '🏥',
                title: '헬스케어 솔루션',
                desc: '의료 서비스 혁신과 운영 효율화',
                color: '#9b59b6',
                solutions: [
                  '병원 운영 최적화',
                  '환자 경험 개선',
                  '의료 데이터 관리',
                  '디지털 헬스케어'
                ]
              },
              {
                icon: '📱',
                title: 'IT/기술 솔루션',
                desc: '디지털 혁신과 기술 전략 수립',
                color: '#f39c12',
                solutions: [
                  '기술 전략 수립',
                  '클라우드 전환',
                  'DevOps 구축',
                  'AI/ML 도입 전략'
                ]
              }
            ].map((solution, idx) => (
              <div key={idx} style={{
                display: 'grid',
                gridTemplateColumns: idx % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                gap: '4rem',
                alignItems: 'center'
              }}>
                <div style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                  <div style={{
                    background: solution.color,
                    borderRadius: '20px',
                    padding: '4rem 3rem',
                    color: 'white',
                    textAlign: 'center',
                    minHeight: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                  }}>
                    <div style={{ fontSize: '5rem', marginBottom: '1.5rem' }}>{solution.icon}</div>
                    <h3 style={{
                      fontSize: '2rem',
                      fontWeight: '700',
                      marginBottom: '1rem'
                    }}>
                      {solution.title}
                    </h3>
                    <p style={{ fontSize: '1.1rem', opacity: 0.95 }}>
                      {solution.desc}
                    </p>
                  </div>
                </div>
                <div style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                  <h3 style={{
                    fontSize: '1.5rem',
                    fontWeight: '600',
                    color: '#2c3e50',
                    marginBottom: '2rem'
                  }}>
                    주요 솔루션
                  </h3>
                  <ul style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem'
                  }}>
                    {solution.solutions.map((item, sIdx) => (
                      <li key={sIdx} style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '1rem',
                        padding: '1.5rem',
                        background: '#f8f9fa',
                        borderRadius: '12px',
                        border: '1px solid #e8e8e8',
                        transition: 'all 0.3s ease'
                      }}>
                        <div style={{
                          background: solution.color,
                          color: 'white',
                          width: '40px',
                          height: '40px',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontWeight: '700',
                          flexShrink: 0
                        }}>
                          {sIdx + 1}
                        </div>
                        <span style={{
                          fontSize: '1.1rem',
                          color: '#2c3e50',
                          fontWeight: '500'
                        }}>
                          {item}
                        </span>
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
            귀사의 산업에 맞는 솔루션을 찾고 계신가요?
          </h2>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '3rem',
            opacity: 0.95
          }}>
            전문 컨설턴트가 맞춤형 솔루션을 제안해드립니다
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
            상담 신청하기
          </Link>
        </div>
      </section>
    </main>
  )
}
