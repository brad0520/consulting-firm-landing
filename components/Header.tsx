'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  return (
    <header style={{
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      padding: '1rem 0',
      width: '100%',
      boxSizing: 'border-box'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        boxSizing: 'border-box'
      }}>
        <Link href="/" style={{
          fontSize: '1.25rem',
          fontWeight: '600',
          color: '#1d1d1f',
          textDecoration: 'none'
        }}>
          InnovateCorp
        </Link>

        <nav>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '2.5rem',
            margin: 0,
            padding: 0
          }}>
            <li>
              <Link href="/about" style={{
                color: isActive('/about') ? '#007AFF' : '#1d1d1f',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: isActive('/about') ? '500' : '400',
                transition: 'color 0.3s ease'
              }}>
                회사소개
              </Link>
            </li>
            <li>
              <Link href="/leadership" style={{
                color: isActive('/leadership') ? '#007AFF' : '#1d1d1f',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: isActive('/leadership') ? '500' : '400',
                transition: 'color 0.3s ease'
              }}>
                리더십
              </Link>
            </li>
            <li>
              <Link href="/values" style={{
                color: isActive('/values') ? '#007AFF' : '#1d1d1f',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: isActive('/values') ? '500' : '400',
                transition: 'color 0.3s ease'
              }}>
                가치관
              </Link>
            </li>
            <li>
              <Link href="/newsroom" style={{
                color: isActive('/newsroom') ? '#007AFF' : '#1d1d1f',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: isActive('/newsroom') ? '500' : '400',
                transition: 'color 0.3s ease'
              }}>
                뉴스룸
              </Link>
            </li>
            <li>
              <Link href="/careers" style={{
                color: isActive('/careers') ? '#007AFF' : '#1d1d1f',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: isActive('/careers') ? '500' : '400',
                transition: 'color 0.3s ease'
              }}>
                채용
              </Link>
            </li>
            <li>
              <Link href="/investors" style={{
                color: isActive('/investors') ? '#007AFF' : '#1d1d1f',
                textDecoration: 'none',
                fontSize: '0.875rem',
                fontWeight: isActive('/investors') ? '500' : '400',
                transition: 'color 0.3s ease'
              }}>
                투자자정보
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}