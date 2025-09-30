import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: '#2c3e50',
      color: 'white',
      padding: '4rem 0 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem'
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '1rem', color: 'white' }}>
              ProConsult
            </h3>
            <p style={{ color: '#bdc3c7', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              15년간의 풍부한 경험과 검증된 방법론으로 
              고객의 비즈니스 성장을 이끌어내는 
              전문 컨설팅 파트너입니다.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#bdc3c7' }}>
                <span>📧</span>
                <span>info@proconsult.co.kr</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#bdc3c7' }}>
                <span>📞</span>
                <span>02-1234-5678</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#bdc3c7' }}>
                <span>📍</span>
                <span>서울시 강남구 테헤란로 123</span>
              </div>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>서비스</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/services" style={{ color: '#bdc3c7', textDecoration: 'none' }}>경영 전략</Link>
              <Link href="/services" style={{ color: '#bdc3c7', textDecoration: 'none' }}>프로세스 혁신</Link>
              <Link href="/services" style={{ color: '#bdc3c7', textDecoration: 'none' }}>성과 관리</Link>
              <Link href="/services" style={{ color: '#bdc3c7', textDecoration: 'none' }}>조직 개발</Link>
              <Link href="/solutions" style={{ color: '#bdc3c7', textDecoration: 'none' }}>디지털 전환</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>회사</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/about" style={{ color: '#bdc3c7', textDecoration: 'none' }}>회사 소개</Link>
              <Link href="/about" style={{ color: '#bdc3c7', textDecoration: 'none' }}>전문가 소개</Link>
              <Link href="/cases" style={{ color: '#bdc3c7', textDecoration: 'none' }}>성공 사례</Link>
              <Link href="/about" style={{ color: '#bdc3c7', textDecoration: 'none' }}>뉴스</Link>
              <Link href="/about" style={{ color: '#bdc3c7', textDecoration: 'none' }}>채용</Link>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '1.1rem', fontWeight: '600', marginBottom: '1rem', color: 'white' }}>고객지원</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <Link href="/contact" style={{ color: '#bdc3c7', textDecoration: 'none' }}>상담 신청</Link>
              <Link href="/contact" style={{ color: '#bdc3c7', textDecoration: 'none' }}>FAQ</Link>
              <Link href="/contact" style={{ color: '#bdc3c7', textDecoration: 'none' }}>자료실</Link>
              <Link href="/contact" style={{ color: '#bdc3c7', textDecoration: 'none' }}>블로그</Link>
              <Link href="/contact" style={{ color: '#bdc3c7', textDecoration: 'none' }}>문의하기</Link>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '2rem',
          textAlign: 'center',
          color: '#95a5a6',
          fontSize: '0.9rem'
        }}>
          <p>&copy; 2024 ProConsult. All rights reserved. | 개인정보처리방침 | 이용약관 | 사업자등록번호: 123-45-67890</p>
        </div>
      </div>
    </footer>
  )
}
