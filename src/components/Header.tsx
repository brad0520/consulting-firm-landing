'use client'

import React from 'react'
import Link from 'next/link'
import { techCorpConfig } from '@/lib/config'

export default function Header() {
  return (
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

        {/* Navigation Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem'
        }}>
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
      </nav>
    </header>
  )
}