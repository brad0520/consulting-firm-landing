'use client'

import { useState } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-cream/95 backdrop-blur-md border-b border-ink/5">
      <nav className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <Link href="/" className="font-editorial text-xl text-ink">
          {siteConfig.brand.nameEn}
        </Link>

        <div className="hidden lg:flex items-center gap-10">
          {siteConfig.navigation.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-ink-muted hover:text-ink transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-ink text-white px-5 py-2.5 text-sm font-medium hover:bg-ink-light transition-colors"
          >
            상담 문의
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 min-h-[44px] min-w-[44px] flex items-center justify-center"
          aria-label="메뉴 열기"
        >
          <div className="w-6 h-[18px] relative">
            <span
              className={`absolute left-0 h-px w-full bg-ink transition-all duration-300 ${
                isMenuOpen ? 'top-2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-2 h-px w-full bg-ink transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 h-px w-full bg-ink transition-all duration-300 ${
                isMenuOpen ? 'bottom-2 -rotate-45' : 'bottom-0'
              }`}
            />
          </div>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="fixed inset-0 top-16 bg-cream z-40 lg:hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-6 pt-8">
            {siteConfig.navigation.main.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-4 text-lg font-editorial text-ink border-b border-ink/10"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-8 block w-full bg-ink text-white text-center py-4 text-sm font-medium"
            >
              상담 문의
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
