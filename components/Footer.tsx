import Link from 'next/link'
import { siteConfig } from '@/lib/config'

export default function Footer() {
  return (
    <footer className="bg-ink text-white/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 lg:col-span-1">
            <h3 className="font-editorial text-xl text-white mb-4">
              {siteConfig.brand.nameEn}
            </h3>
            <p className="text-sm leading-relaxed">
              {siteConfig.brand.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs text-white/60 uppercase tracking-[0.2em] mb-4">
              서비스
            </h4>
            <ul className="space-y-3 text-sm">
              {['경영 전략', '디지털 전환', '조직 혁신', '데이터 분석'].map((s) => (
                <li key={s}>
                  <Link href="/services" className="hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-white/60 uppercase tracking-[0.2em] mb-4">
              회사 정보
            </h4>
            <ul className="space-y-3 text-sm">
              {siteConfig.navigation.main.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs text-white/60 uppercase tracking-[0.2em] mb-4">
              연락처
            </h4>
            <div className="space-y-3 text-sm">
              <p>{siteConfig.company.phone}</p>
              <p>{siteConfig.company.email}</p>
              <p className="leading-relaxed">{siteConfig.company.address}</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} {siteConfig.company.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
