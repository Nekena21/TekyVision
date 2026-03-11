import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import logoImg from '../../assets/images/logo.jpg'
import './Header.css'

const navLinks = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/products', label: 'Produits' },
  { to: '/team', label: 'Équipe' },
  { to: '/publications', label: 'Publications' },
  { to: '/contact', label: 'Contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-inner">
        <Link to="/" className="brand">
          <div className="logo-wrap">
            <img src={logoImg} alt="Teky Vision" className="logo-img" />
          </div>
          <div className="brand-text">
            <span className="brand-name">Teky Vision</span>
            <span className="brand-tagline">Électronique & Robotique</span>
          </div>
        </Link>

        <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn-primary nav-cta">
            Nous contacter
          </Link>
        </nav>

        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </div>

      {menuOpen && <div className="nav-backdrop" onClick={() => setMenuOpen(false)} />}
    </header>
  )
}
