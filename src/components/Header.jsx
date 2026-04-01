import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/science', label: 'Science' },
  { to: '/pipeline', label: 'Pipeline' },
  { to: '/team', label: 'Team' },
  { to: '/zelarion', label: 'Zelarion' },
  { to: '/contact', label: 'Contact' },
  { href: 'https://careers.itb-med.com/', label: 'Careers', external: true },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [location])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const mobileNav = mobileOpen
    ? createPortal(
        <div className="fixed inset-0 z-[60] lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          {/* Sidebar */}
          <nav
            className="absolute right-0 top-0 bottom-0 w-72 bg-dark-elevated shadow-2xl animate-slide-in-right border-l border-navy-800/50"
            aria-label="Mobile navigation"
          >
            {/* Close button */}
            <div className="flex justify-end p-5">
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-navy-300"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col px-8 gap-6">
              {navLinks.map((link) =>
                link.external ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-navy-200 hover:text-accent-400 transition-colors"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.to}
                    to={link.to}
                    className={`text-lg font-medium transition-colors ${
                      location.pathname === link.to
                        ? 'text-accent-400'
                        : 'text-navy-200 hover:text-accent-400'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </div>
          </nav>
        </div>,
        document.body
      )
    : null

  return (
    <>
      <header
        className={`sticky top-0 z-50 backdrop-blur-sm border-b transition-all duration-300 ${
          scrolled ? 'bg-dark-bg/90 border-navy-800/50 shadow-lg shadow-black/20' : 'bg-transparent border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-18">
          <Link to="/" className="flex items-center gap-3" aria-label="ITB-MED Home">
            <img src="/logo.png" alt="ITB-MED logo" className="h-9 brightness-[10] saturate-0 invert-0" style={{filter: 'brightness(0) invert(1)'}} />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-navy-300 hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    location.pathname === link.to
                      ? 'text-accent-400'
                      : 'text-navy-300 hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden p-2 -mr-2 text-navy-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile nav rendered via portal to avoid sticky parent issues */}
      {mobileNav}
    </>
  )
}
