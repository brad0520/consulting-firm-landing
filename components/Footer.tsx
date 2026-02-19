import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-300">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S1</span>
              </div>
              <h3 className="text-lg font-bold text-white">
                {siteConfig.brand.name}
              </h3>
            </div>
            <p className="text-navy-400 leading-relaxed text-sm">
              {siteConfig.brand.description}
            </p>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              서비스
            </h4>
            <ul className="space-y-3">
              {[
                { name: '경영 전략', href: '/services' },
                { name: '디지털 전환', href: '/services' },
                { name: '조직 혁신', href: '/services' },
                { name: '데이터 분석', href: '/services' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-400 hover:text-teal-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              회사 정보
            </h4>
            <ul className="space-y-3">
              {[
                { name: '회사소개', href: '/about' },
                { name: '성공사례', href: '/cases' },
                { name: '솔루션', href: '/solutions' },
                { name: '문의하기', href: '/contact' },
              ].map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-400 hover:text-teal-400 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              연락처
            </h4>
            <div className="space-y-3 text-sm text-navy-400">
              <p>{siteConfig.company.phone}</p>
              <p>{siteConfig.company.email}</p>
              <p className="leading-relaxed">{siteConfig.company.address}</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-navy-800 pt-8 text-center">
          <p className="text-sm text-navy-500">
            &copy; {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
