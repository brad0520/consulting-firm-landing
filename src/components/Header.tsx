'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { techCorpConfig } from '@/lib/config'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(0, 0, 0, 0.1)'
      }}>
        <nav style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '60px'
        }}>
          {/* Logo */}
          <Link
            href="/"
            style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#1d1d1f',
              textDecoration: 'none'
            }}
          >
            {techCorpConfig.brand.name}
          </Link>

          {/* Desktop Navigation Links */}
          <div
            className="desktop-nav"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2rem'
            }}
          >
            {techCorpConfig.navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  color: '#6e6e73',
                  textDecoration: 'none',
                  fontSize: '0.9rem',
                  fontWeight: '400',
                  transition: 'color 0.3s ease'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#007AFF'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#6e6e73'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={toggleMenu}
            className="mobile-menu-button"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              padding: '8px',
              cursor: 'pointer',
              zIndex: 60
            }}
            aria-label="Toggle menu"
          >
            <div style={{ width: '24px', height: '18px', position: 'relative' }}>
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  height: '2px',
                  width: '100%',
                  backgroundColor: '#007AFF',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  top: isMenuOpen ? '8px' : '0',
                  transform: isMenuOpen ? 'rotate(45deg)' : 'rotate(0)',
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  top: '8px',
                  height: '2px',
                  width: '100%',
                  backgroundColor: '#007AFF',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  opacity: isMenuOpen ? 0 : 1,
                }}
              />
              <span
                style={{
                  position: 'absolute',
                  left: 0,
                  height: '2px',
                  width: '100%',
                  backgroundColor: '#007AFF',
                  borderRadius: '2px',
                  transition: 'all 0.3s ease',
                  bottom: isMenuOpen ? '8px' : '0',
                  transform: isMenuOpen ? 'rotate(-45deg)' : 'rotate(0)',
                }}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '60px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(40px)',
            zIndex: 40,
            animation: 'fadeIn 0.3s ease',
            overflowY: 'auto'
          }}
          onClick={toggleMenu}
        >
          <div style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '2rem 1.5rem'
          }}>
            {techCorpConfig.navigation.main.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.stopPropagation()
                  setIsMenuOpen(false)
                }}
                style={{
                  display: 'block',
                  padding: '1rem 0',
                  color: '#1d1d1f',
                  textDecoration: 'none',
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  borderBottom: index < techCorpConfig.navigation.main.length - 1 ? '1px solid rgba(0, 0, 0, 0.1)' : 'none',
                  transition: 'color 0.3s ease',
                  animation: `slideIn 0.3s ease ${index * 0.05}s both`
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.color = '#007AFF'
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.color = '#1d1d1f'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <style jsx global>{`
        /* Hide desktop nav on mobile */
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-button {
            display: block !important;
          }
        }

        /* Show desktop nav on larger screens */
        @media (min-width: 769px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-button {
            display: none !important;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  )
}
