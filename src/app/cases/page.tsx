'use client'

import Link from 'next/link'

export default function CasesPage() {
  return (
    <main style={{ paddingTop: '80px' }}>
      {/* Hero Section */}
      <section style={{
        padding: '100px 0',
        background: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{
            fontSize: '3rem',
            fontWeight: '700',
            marginBottom: '1.5rem'
          }}>
            성공 사례
          </h1>
          <p style={{
            fontSize: '1.3rem',
            opacity: 0.95,
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            고객사와 함께 만들어온<br />
            성공적인 프로젝트 결과를 확인하세요
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section style={{ padding: '100px 0', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: '3rem'
          }}>
            {[
              {
                company: 'A전자',
                industry: '제조업',
                project: '디지털 전환 프로젝트',
                duration: '12개월',
                result: '매출 40% 증가',
                color: '#3498db',
                challenges: [
                  '레거시 시스템 의존도 높음',
                  '디지털 역량 부족',
                  '변화 관리 필요'
                ],
                solutions: [
                  '단계적 디지털 전환 로드맵 수립',
                  '임직원 교육 프로그램 운영',
                  '스마트 팩토리 시스템 도입'
                ],
                outcomes: [
                  '생산성 35% 향상',
                  '품질 불량률 50% 감소',
                  '매출 40% 증가'
                ]
              },
              {
                company: 'B금융',
                industry: '금융업',
                project: '프로세스 혁신 컨설팅',
                duration: '8개월',
                result: '비용 30% 절감',
                color: '#27ae60',
                challenges: [
                  '복잡한 업무 프로세스',
                  '높은 운영 비용',
                  '낮은 고객 만족도'
                ],
                solutions: [
                  '업무 프로세스 재설계',
                  'RPA 자동화 도입',
                  '고객 경험 개선'
                ],
                outcomes: [
                  '업무 처리 시간 45% 단축',
                  '운영 비용 30% 절감',
                  '고객 만족도 25% 향상'
                ]
              },
              {
                company: 'C유통',
                industry: '유통업',
                project: '옴니채널 전략 수립',
                duration: '10개월',
                result: '고객만족도 95%',
                color: '#e74c3c',
                challenges: [
                  '온오프라인 채널 단절',
                  '재고 관리 비효율',
                  '고객 데이터 분산'
                ],
                solutions: [
                  '옴니채널 플랫폼 구축',
                  '통합 재고 관리 시스템',
                  'CRM 시스템 고도화'
                ],
                outcomes: [
                  '온라인 매출 60% 증가',
                  '재고 회전율 40% 개선',
                  '고객 만족도 95% 달성'
                ]
              },
              {
                company: 'D물류',
                industry: '물류업',
                project: '공급망 최적화',
                duration: '9개월',
                result: '배송시간 50% 단축',
                color: '#f39c12',
                challenges: [
                  '배송 지연 빈발',
                  '높은 물류 비용',
                  '재고 과다 보유'
                ],
                solutions: [
                  'AI 기반 수요 예측',
                  '배송 경로 최적화',
                  '스마트 창고 관리 시스템'
                ],
                outcomes: [
                  '배송 시간 50% 단축',
                  '물류 비용 25% 절감',
                  '재고 회전율 35% 개선'
                ]
              },
              {
                company: 'E제약',
                industry: '제약업',
                project: 'R&D 혁신 컨설팅',
                duration: '15개월',
                result: '신약 개발 기간 30% 단축',
                color: '#9b59b6',
                challenges: [
                  '긴 신약 개발 기간',
                  '높은 실패율',
                  'R&D 비용 증가'
                ],
                solutions: [
                  'AI 기반 신약 후보 발굴',
                  '임상시험 최적화',
                  'R&D 프로세스 개선'
                ],
                outcomes: [
                  '개발 기간 30% 단축',
                  '성공률 20% 향상',
                  'R&D 비용 15% 절감'
                ]
              },
              {
                company: 'F건설',
                industry: '건설업',
                project: '프로젝트 관리 시스템 구축',
                duration: '7개월',
                result: '프로젝트 일정 준수율 90%',
                color: '#34495e',
                challenges: [
                  '프로젝트 지연 빈발',
                  '비용 초과 문제',
                  '의사소통 비효율'
                ],
                solutions: [
                  '통합 프로젝트 관리 시스템',
                  '실시간 진도 모니터링',
                  '협업 플랫폼 구축'
                ],
                outcomes: [
                  '일정 준수율 90% 달성',
                  '비용 초과 50% 감소',
                  '생산성 40% 향상'
                ]
              }
            ].map((caseStudy, idx) => (
              <div key={idx} style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                transition: 'all 0.3s ease'
              }}>
                {/* Header */}
                <div style={{
                  background: caseStudy.color,
                  padding: '2.5rem',
                  color: 'white'
                }}>
                  <div style={{
                    fontSize: '0.85rem',
                    opacity: 0.9,
                    marginBottom: '0.5rem'
                  }}>
                    {caseStudy.industry}
                  </div>
                  <h3 style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    marginBottom: '0.5rem'
                  }}>
                    {caseStudy.company}
                  </h3>
                  <p style={{
                    fontSize: '1.1rem',
                    opacity: 0.95,
                    marginBottom: '1rem'
                  }}>
                    {caseStudy.project}
                  </p>
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <div>
                      <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>프로젝트 기간</div>
                      <div style={{ fontSize: '1rem', fontWeight: '600' }}>{caseStudy.duration}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.85rem', opacity: 0.8 }}>핵심 성과</div>
                      <div style={{ fontSize: '1.2rem', fontWeight: '700' }}>{caseStudy.result}</div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '2rem' }}>
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '1rem'
                    }}>
                      과제
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      {caseStudy.challenges.map((challenge, cIdx) => (
                        <li key={cIdx} style={{
                          display: 'flex',
                          gap: '0.5rem',
                          color: '#5d6d7e',
                          fontSize: '0.95rem'
                        }}>
                          <span style={{ color: '#e74c3c' }}>•</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '1rem'
                    }}>
                      솔루션
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      {caseStudy.solutions.map((solution, sIdx) => (
                        <li key={sIdx} style={{
                          display: 'flex',
                          gap: '0.5rem',
                          color: '#5d6d7e',
                          fontSize: '0.95rem'
                        }}>
                          <span style={{ color: '#3498db' }}>→</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 style={{
                      fontSize: '1rem',
                      fontWeight: '600',
                      color: '#2c3e50',
                      marginBottom: '1rem'
                    }}>
                      성과
                    </h4>
                    <ul style={{
                      listStyle: 'none',
                      padding: 0,
                      margin: 0,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.5rem'
                    }}>
                      {caseStudy.outcomes.map((outcome, oIdx) => (
                        <li key={oIdx} style={{
                          display: 'flex',
                          gap: '0.5rem',
                          color: '#27ae60',
                          fontSize: '0.95rem',
                          fontWeight: '500'
                        }}>
                          <span>✓</span>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 0',
        background: 'white',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#2c3e50',
            marginBottom: '1.5rem'
          }}>
            다음 성공 사례의 주인공이 되어보세요
          </h2>
          <p style={{
            fontSize: '1.2rem',
            color: '#7f8c8d',
            marginBottom: '3rem'
          }}>
            전문 컨설턴트와 함께<br />
            귀사의 성공 스토리를 만들어가세요
          </p>
          <Link href="/contact" style={{
            background: '#27ae60',
            color: 'white',
            padding: '18px 40px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            display: 'inline-block',
            transition: 'all 0.3s ease'
          }}>
            프로젝트 상담 신청
          </Link>
        </div>
      </section>
    </main>
  )
}
