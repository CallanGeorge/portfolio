import Link from 'next/link'

export default function Footer() {
  const footerLinks = [
    { name: 'ABOUT', href: '/about' },
    { name: 'SHOP', href: '#shop' },
    { name: 'WORK', href: '/work' },
    { name: 'JOURNAL', href: '#blog' },
    { name: 'SERVICES', href: '#services' },
  ]

  return (
    <footer className="bg-[#242424] text-white py-6">
      <div className="w-full max-w-[95vw] 2xl:max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        
        {/* Mobile Layout - Stacked and Centered */}
        <div className="block md:hidden text-center space-y-4">
          
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-4">
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-sm font-medium hover:text-[#779179] transition-colors duration-200"
                style={{ fontFamily: 'Space Mono, monospace' }}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Copyright with bullet */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <p className="text-white text-xs" style={{ fontFamily: 'Space Mono, monospace' }}>
              2025 CALLAN GEORGE. ALL RIGHTS RESERVED
            </p>
          </div>

          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center">
              <div 
                className="text-white font-bold text-center"
                style={{ fontFamily: 'var(--font-family-space-mono)' }}
              >
                <div className="text-[#779179] text-lg">Callan</div>
                <div className="text-xs">CREATIVE DEPT</div>
              </div>
            </Link>
          </div>

          {/* Location */}
          <div>
            <p className="text-white text-xs" style={{ fontFamily: 'Space Mono, monospace' }}>
              MADE WITH LOVE ❤️ IN EDINBURGH
            </p>
          </div>

        </div>

        {/* Desktop Layout - Two Rows */}
        <div className="hidden md:block">
          
          {/* Top Row - Navigation and Logo */}
          <div className="flex items-center justify-between mb-4">
            
            {/* Left - Navigation Links */}
            <div className="flex gap-6 md:gap-8">
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white text-sm font-medium hover:text-[#779179] transition-colors duration-200"
                  style={{ fontFamily: 'Space Mono, monospace' }}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Right - Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div 
                  className="text-white font-bold text-right"
                  style={{ fontFamily: 'var(--font-family-space-mono)' }}
                >
                  <div className="text-[#779179] text-lg">Callan</div>
                  <div className="text-xs">CREATIVE DEPT</div>
                </div>
              </Link>
            </div>

          </div>

          {/* Bottom Row - Copyright and Location */}
          <div className="flex items-center justify-between text-xs">
            
            {/* Left - Copyright */}
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              <p className="text-white" style={{ fontFamily: 'Space Mono, monospace' }}>
                2025 CALLAN GEORGE. ALL RIGHTS RESERVED
              </p>
            </div>

            {/* Center - Location */}
            <div>
              <p className="text-white text-center" style={{ fontFamily: 'Space Mono, monospace' }}>
                MADE WITH LOVE ❤️ IN EDINBURGH
              </p>
            </div>

            {/* Right - Empty for balance */}
            <div className="w-16"></div>

          </div>

        </div>
        
      </div>
    </footer>
  )
} 