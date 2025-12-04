
import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { Menu, X, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight, Search } from 'lucide-react'
import { courses } from '../data/courses'
import './Header.css'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [suggestions, setSuggestions] = useState([])
  const searchRef = useRef(null)
  const navigate = useNavigate()

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
      if (e.key === 'Escape') {
        if (isSearchOpen) {
          setIsSearchOpen(false)
          setSuggestions([])
        } else if (isOpen) {
          setIsOpen(false)
        }
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isOpen, isSearchOpen])

  // Click outside to close search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false)
        setSuggestions([])
      }
    }

    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isSearchOpen])

  const handleSearchSubmit = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/courses?search=${encodeURIComponent(searchQuery)}`)
      setIsSearchOpen(false)
      setSuggestions([])
      setIsOpen(false)
    }
  }

  const handleSearchChange = (e) => {
    const query = e.target.value
    setSearchQuery(query)

    if (query.trim().length > 0) {
      const filtered = courses.filter(course =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.grade.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5) // Limit to 5 suggestions
      setSuggestions(filtered)
    } else {
      setSuggestions([])
    }
  }

  const handleSuggestionClick = (slug) => {
    navigate(`/courses/${slug}`)
    setIsSearchOpen(false)
    setSuggestions([])
    setSearchQuery('')
    setIsOpen(false)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    if (!isSearchOpen) {
      // Focus input after a short delay to allow transition
      setTimeout(() => {
        const input = document.querySelector('.header-search-input')
        if (input) input.focus()
      }, 100)
    }
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
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
            <a href="tel:+919876543210" className="contact-item">
              <Phone size={16} />
              <span>+91 9876543210</span>
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
            <a href="https://www.facebook.com/profile.php?id=61579873028872" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={16} /></a>
            <a href="https://www.instagram.com/zeducators.official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={16} /></a>
            <a href="https://x.com/Zed_Zeducators" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={16} /></a>
            <a href="https://www.linkedin.com/company/zeducators/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={16} /></a>
            <a href="https://www.youtube.com/@zeducators.official" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={16} /></a>
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
              <a href="tel:+919876543210" className="mobile-contact-item">
                <Phone size={18} />
                <span>+91 9876543210</span>
              </a>
              <a href="mailto:info@zeducators.org" className="mobile-contact-item">
                <Mail size={18} />
                <span>info@zeducators.org</span>
              </a>
            </div>
            <div className="mobile-social">
              <a href="https://www.facebook.com/profile.php?id=61579873028872" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
              <a href="https://www.instagram.com/zeducators.official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
              <a href="https://x.com/Zed_Zeducators" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20} /></a>
              <a href="https://www.linkedin.com/company/zeducators/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
              <a href="https://www.youtube.com/@zeducators.official" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
            </div>
          </div>
        </nav>

        <div className="header-actions">
          <div className="search-wrapper" ref={searchRef}>
            <div className="search-container static-search">
              <form onSubmit={handleSearchSubmit} className="header-search-form">
                <input
                  type="text"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="header-search-input"
                  onFocus={() => setIsSearchOpen(true)}
                />
                <button type="submit" className="header-search-submit" aria-label="Search">
                  <Search size={18} />
                </button>
              </form>
              {isSearchOpen && suggestions.length > 0 && (
                <div className="search-suggestions">
                  {suggestions.map(course => (
                    <div
                      key={course.id}
                      className="suggestion-item"
                      onClick={() => handleSuggestionClick(course.slug)}
                    >
                      <div className="suggestion-title">{course.title}</div>
                      <div className="suggestion-grade">{course.grade}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

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

