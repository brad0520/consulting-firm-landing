'use client'

import React from 'react'
import Link from 'next/link'
import { techCorpConfig } from '@/lib/config'

export default function Footer() {
  return (
    <footer style={{
      backgroundColor: '#f8f9fa',
      borderTop: '1px solid rgba(0, 0, 0, 0.1)',
      padding: '3rem 0 2rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          {/* Brand Section */}
          <div>
            <h3 style={{
              fontSize: '1.2rem',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '1rem'
            }}>
              {techCorpConfig.brand.name}
            </h3>
            <p style={{
              color: '#6e6e73',
              lineHeight: 1.6,
              marginBottom: '1rem'
            }}>
              {techCorpConfig.brand.description}
            </p>
          </div>

          {/* Company Info */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '1rem'
            }}>
              회사 정보
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                { name: '소개', href: '/about' },
                { name: '가치', href: '/values' },
                { name: '리더십', href: '/leadership' },
                { name: '채용', href: '/careers' }
              ].map((item) => (
                <li key={item.name} style={{ marginBottom: '0.5rem' }}>
                  <Link
                    href={item.href}
                    style={{
                      color: '#6e6e73',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
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
                </li>
              ))}
            </ul>
          </div>

          {/* News & Investors */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '1rem'
            }}>
              소식 및 투자
            </h4>
            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0
            }}>
              {[
                { name: '뉴스룸', href: '/newsroom' },
                { name: '투자자 정보', href: '/investors' }
              ].map((item) => (
                <li key={item.name} style={{ marginBottom: '0.5rem' }}>
                  <Link
                    href={item.href}
                    style={{
                      color: '#6e6e73',
                      textDecoration: 'none',
                      fontSize: '0.9rem',
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
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{
              fontSize: '1rem',
              fontWeight: '600',
              color: '#1d1d1f',
              marginBottom: '1rem'
            }}>
              연락처
            </h4>
            <div style={{
              color: '#6e6e73',
              fontSize: '0.9rem',
              lineHeight: 1.6
            }}>
              <p style={{ marginBottom: '0.5rem' }}>
                {techCorpConfig.company.phone}
              </p>
              <p style={{ marginBottom: '0.5rem' }}>
                {techCorpConfig.company.email}
              </p>
              <p style={{ margin: 0 }}>
                {techCorpConfig.company.address}
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div style={{
          borderTop: '1px solid rgba(0, 0, 0, 0.1)',
          paddingTop: '2rem',
          textAlign: 'center'
        }}>
          <p style={{
            color: '#6e6e73',
            fontSize: '0.9rem',
            margin: 0
          }}>
            &copy; 2024 {techCorpConfig.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}