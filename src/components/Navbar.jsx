import { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Order Online', to: '/order' },
  { label: 'Contact', to: '/contact' },
]

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-smoke-900/98 backdrop-blur-md shadow-lg border-b border-coal-800' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group" onClick={closeMenu}>
              <img src={logo} alt="BBQ Nights" className="w-12 h-12 group-hover:scale-110 transition-transform" />
              <div>
                <span className="font-display text-xl font-bold text-white block leading-tight">BBQ Nights</span>
                <span className="font-accent text-ember-500 text-xs tracking-widest uppercase">Real Smoke. Real Flavor.</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `font-accent text-sm tracking-wider uppercase transition-all duration-200 relative pb-0.5 ${
                      isActive
                        ? 'text-ember-400 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-ember-500'
                        : 'text-coal-300 hover:text-ember-400'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/order')}
                className="hidden sm:flex items-center gap-2 bg-ember-600 hover:bg-ember-500 text-white font-accent text-sm font-semibold tracking-wider uppercase px-5 py-2.5 rounded-sm transition-all duration-200 hover:shadow-ember"
              >
                Order Now
              </button>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 text-coal-200 hover:text-white transition-colors"
                aria-label="Toggle menu"
              >
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                <span className={`block w-6 h-0.5 bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-smoke-900/95 backdrop-blur-md lg:hidden flex flex-col pt-24 pb-8 px-6 max-h-screen overflow-y-auto">

          <nav className="flex flex-col gap-2">
            {navLinks.map((link, i) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenu}
                style={{ animationDelay: `${i * 70}ms` }}
                className={({ isActive }) =>
                  `font-display text-3xl font-bold py-3 border-b border-coal-800 transition-colors animate-slide-up opacity-0 [animation-fill-mode:forwards] ${
                    isActive ? 'text-ember-400' : 'text-coal-100 hover:text-ember-400'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="mt-8">
            <button
              onClick={() => { navigate('/order'); closeMenu() }}
              className="w-full bg-ember-600 hover:bg-ember-500 text-white font-accent text-base font-semibold tracking-wider uppercase px-6 py-4 rounded-sm transition-all"
            >
              🔥 Order Now
            </button>
          </div>
          <div className="mt-auto text-center">
            <p className="text-coal-600 text-sm font-body">Open Daily: 12PM – 12AM</p>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar
