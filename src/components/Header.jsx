
import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight } from 'lucide-react'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/solutions', label: 'Solutions' },
    { path: '/gallery', label: 'Gallery' },
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''} ${isOpen ? 'menu-open' : ''} `}>
      <div className="top-bar">
        <div className="container top-bar-container">
          <div className="top-bar-contact">
            <a href="tel:+919966002827" className="contact-item">
              <Phone size={16} />
              <span>+91 9966002827</span>
            </a>
            <a href="mailto:contact@zeducators.org " className="contact-item">
              <Mail size={16} />
              <span>contact@zeducators.org </span>
            </a>
            <a href="mailto:info@zeducators.org " className="contact-item">
              <Mail size={16} />
              <span>info@zeducators.org </span>
            </a>
          </div>
          <div className="top-bar-social">
            <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={16} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={16} /></a>
          </div>
        </div>
      </div>
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src="/images/image.png" alt="Zeducators - Learn Differently" className="logo-img" />
        </Link>

        <nav className={`nav ${isOpen ? 'nav-open' : ''} `}>
          <ul className="nav-list">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-menu-footer">
            <div className="mobile-contact">
              <a href="tel:+919966002827" className="mobile-contact-item">
                <Phone size={18} />
                <span>+91 9966002827</span>
              </a>
              <a href="mailto:info@zeducators.org" className="mobile-contact-item">
                <Mail size={18} />
                <span>info@zeducators.org</span>
              </a>
            </div>
            <div className="mobile-social">
              <a href="#" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>
        </nav>

        <div className="header-actions">
          <a href="/contact" className="btn btn-primary header-phone">
            <span>Contact Us</span>
            <ArrowRight size={18} />
          </a>
          <button
            className="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

