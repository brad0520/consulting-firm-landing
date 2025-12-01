'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 메뉴 열릴 때 body 스크롤 방지
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const isActive = (path: string) => pathname === path

  const navItems = [
    { href: '/', label: '홈' },
    { href: '/services', label: '서비스' },
    { href: '/solutions', label: '솔루션' },
    { href: '/cases', label: '성공사례' },
    { href: '/about', label: '회사소개' },
  ]

  return (
    <>
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
            <span>ProConsult</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="desktop-nav" style={{ display: 'none' }}>
            <ul style={{
              display: 'flex',
              listStyle: 'none',
              gap: '2.5rem',
              margin: 0,
              padding: 0,
              alignItems: 'center'
            }}>
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} style={{
                    color: isActive(item.href) ? '#3498db' : '#2c3e50',
                    textDecoration: 'none',
                    fontSize: '1rem',
                    fontWeight: '500',
                    transition: 'color 0.3s ease',
                    position: 'relative',
                    padding: '8px 0'
                  }}>
                    {item.label}
                  </Link>
                </li>
              ))}
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

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hamburger-btn"
            style={{
              display: 'none',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              width: '44px',
              height: '44px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              padding: '10px',
              gap: '5px'
            }}
            aria-label={isMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              backgroundColor: '#2c3e50',
              borderRadius: '1px',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(45deg) translateY(5px)' : 'none'
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              backgroundColor: '#2c3e50',
              borderRadius: '1px',
              transition: 'all 0.3s ease',
              opacity: isMenuOpen ? 0 : 1
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              backgroundColor: '#2c3e50',
              borderRadius: '1px',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(-45deg) translateY(-5px)' : 'none'
            }} />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className="mobile-menu"
        style={{
          position: 'fixed',
          top: '80px',
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#fff',
          zIndex: 999,
          opacity: isMenuOpen ? 1 : 0,
          visibility: isMenuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease, visibility 0.3s ease',
          padding: '1.5rem',
          overflowY: 'auto'
        }}
      >
        <nav>
          <ul style={{
            listStyle: 'none',
            margin: 0,
            padding: 0
          }}>
            {navItems.map((item, index) => (
              <li key={item.href} style={{
                borderBottom: '1px solid #e8e8e8',
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                transition: `opacity 0.3s ease ${index * 0.05}s, transform 0.3s ease ${index * 0.05}s`
              }}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  style={{
                    color: isActive(item.href) ? '#3498db' : '#2c3e50',
                    textDecoration: 'none',
                    fontSize: '1.25rem',
                    fontWeight: '500',
                    display: 'block',
                    padding: '1.25rem 0',
                    transition: 'color 0.3s ease'
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile CTA Button */}
        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          style={{
            display: 'block',
            marginTop: '2rem',
            background: '#3498db',
            color: 'white',
            padding: '16px 25px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '1.1rem',
            textAlign: 'center',
            opacity: isMenuOpen ? 1 : 0,
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.3s ease 0.25s, transform 0.3s ease 0.25s, background 0.3s ease'
          }}
        >
          무료 상담 신청
        </Link>

        {/* Contact Info */}
        <div style={{
          marginTop: '2rem',
          paddingTop: '1.5rem',
          borderTop: '1px solid #e8e8e8'
        }}>
          <p style={{ color: '#7f8c8d', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
            전문 컨설턴트와 상담하세요
          </p>
          <a
            href="tel:1588-1234"
            style={{
              color: '#2c3e50',
              textDecoration: 'none',
              fontSize: '1.25rem',
              fontWeight: '700'
            }}
          >
            1588-1234
          </a>
        </div>
      </div>

      <style jsx global>{`
        @media (min-width: 769px) {
          .desktop-nav {
            display: block !important;
          }
          .hamburger-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
        @media (max-width: 768px) {
          .hamburger-btn {
            display: flex !important;
          }
        }
      `}</style>
    </>
  )
}
