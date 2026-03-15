import { useState, useEffect } from 'react'

const navLinks = [
  { label: 'Kreu', href: '#hero' },
  { label: 'Shërbimet', href: '#sherbimet' },
  { label: 'Teknologjia', href: '#teknologjia' },
  { label: 'Kapaciteti', href: '#kapaciteti' },
  { label: 'Pse Ne', href: '#pse-ne' },
  { label: 'Kontakt', href: '#kontakt' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-ink/97 backdrop-blur-md shadow-xl shadow-black/30 py-3' : 'bg-transparent py-5'
      }`}
      style={{ backgroundColor: scrolled ? 'rgba(10,14,26,0.97)' : 'transparent' }}
    >
      <div className="flex items-center justify-between px-6 mx-auto max-w-7xl">
        {/* Logo */}
        <a href="#hero" aria-label="LavaFast Kreu" className="flex items-center">
          <img
            src="/images/logo.png"
            alt="LavaFast Logo"
            className="object-contain w-auto h-10 brightness-0 invert"
          />
        </a>

        {/* Desktop Nav */}
        <nav className="items-center hidden lg:flex gap-7" aria-label="Navigimi kryesor">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-condensed font-semibold tracking-wide text-white/70 hover:text-white transition-colors duration-200 uppercase relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-500 after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="items-center hidden gap-4 lg:flex">
          <a
            href="tel:+355 69 824 2023"
            className="font-mono text-xs text-blue-400 transition-colors hover:text-blue-300"
          >
            +355 69 824 2023
          </a>
          <a
            href="#kontakt"
            className="bg-blue-600 hover:bg-blue-500 text-white text-sm font-condensed font-bold uppercase tracking-wider px-6 py-2.5 transition-all duration-200 hover:-translate-y-0.5 shadow-lg shadow-blue-900/40"
          >
            Na Kontaktoni
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Hap menunë"
          aria-expanded={menuOpen}
        >
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <nav className="flex flex-col gap-4 px-6 py-6 border-t border-white/10" style={{ backgroundColor: 'rgba(10,14,26,0.98)' }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-2 font-bold tracking-wider uppercase transition-colors border-b font-condensed text-white/80 hover:text-blue-400 border-white/10 last:border-0"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#kontakt"
            className="py-3 mt-2 font-bold tracking-wider text-center text-white uppercase transition-colors bg-blue-600 font-condensed hover:bg-blue-500"
            onClick={() => setMenuOpen(false)}
          >
            Na Kontaktoni
          </a>
        </nav>
      </div>
    </header>
  )
}
