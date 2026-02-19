'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center group-hover:bg-teal-600 transition-colors">
            <span className="text-white font-bold text-sm">S1</span>
          </div>
          <span className="text-lg font-bold text-navy-900">
            {siteConfig.brand.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {siteConfig.navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-navy-600 hover:text-teal-600 transition-colors font-medium"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-navy-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-navy-800 transition-colors"
          >
            상담 문의
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center z-[60]"
          aria-label="메뉴 열기"
        >
          <div className="w-6 h-[18px] relative">
            <span
              className={`absolute left-0 h-0.5 w-full bg-navy-900 rounded-sm transition-all duration-300 ${
                isMenuOpen ? 'top-2 rotate-45' : 'top-0 rotate-0'
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-0.5 w-full bg-navy-900 rounded-sm transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-0.5 w-full bg-navy-900 rounded-sm transition-all duration-300 ${
                isMenuOpen ? 'bottom-2 -rotate-45' : 'bottom-0 rotate-0'
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-16 bg-white z-40 transition-all duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8">
          {siteConfig.navigation.main.map((item, index) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={(e) => {
                e.stopPropagation()
                setIsMenuOpen(false)
              }}
              className={`block py-4 text-xl font-semibold text-navy-900 hover:text-teal-600 transition-colors ${
                index < siteConfig.navigation.main.length - 1
                  ? 'border-b border-gray-100'
                  : ''
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={(e) => {
              e.stopPropagation()
              setIsMenuOpen(false)
            }}
            className="mt-8 block w-full bg-navy-900 text-white text-center py-4 rounded-xl text-lg font-semibold hover:bg-navy-800 transition-colors"
          >
            상담 문의
          </Link>
        </div>
      </div>
    </header>
  )
}
