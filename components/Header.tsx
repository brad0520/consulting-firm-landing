'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  return (
    <header style={{
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(232, 232, 232, 1)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      boxShadow: isScrolled ? '0 2px 10px rgba(0, 0, 0, 0.05)' : 'none',
      transition: 'all 0.3s ease'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '80px'
      }}>
        <Link href="/" style={{
          fontSize: '1.8rem',
          fontWeight: '700',
          color: '#2c3e50',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <span>🎯</span>
          <span>ProConsult</span>
        </Link>

        <nav>
          <ul style={{
            display: 'flex',
            listStyle: 'none',
            gap: '2.5rem',
            margin: 0,
            padding: 0,
            alignItems: 'center'
          }}>
            <li>
              <Link href="/" style={{
                color: isActive('/') ? '#3498db' : '#2c3e50',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                position: 'relative',
                padding: '8px 0'
              }}>
                홈
              </Link>
            </li>
            <li>
              <Link href="/services" style={{
                color: isActive('/services') ? '#3498db' : '#2c3e50',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                padding: '8px 0'
              }}>
                서비스
              </Link>
            </li>
            <li>
              <Link href="/solutions" style={{
                color: isActive('/solutions') ? '#3498db' : '#2c3e50',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                padding: '8px 0'
              }}>
                솔루션
              </Link>
            </li>
            <li>
              <Link href="/cases" style={{
                color: isActive('/cases') ? '#3498db' : '#2c3e50',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                padding: '8px 0'
              }}>
                성공사례
              </Link>
            </li>
            <li>
              <Link href="/about" style={{
                color: isActive('/about') ? '#3498db' : '#2c3e50',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '500',
                transition: 'color 0.3s ease',
                padding: '8px 0'
              }}>
                회사소개
              </Link>
            </li>
            <li>
              <Link href="/contact" style={{
                background: '#3498db',
                color: 'white',
                padding: '12px 25px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontWeight: '600',
                fontSize: '0.95rem',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#2980b9'
                e.currentTarget.style.transform = 'translateY(-1px)'
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(52, 152, 219, 0.3)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#3498db'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
              }}>
                무료 상담
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}