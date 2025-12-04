import { Link } from 'react-router-dom'
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Heart
} from 'lucide-react'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      {/* Newsletter Section */}
      <div className="footer-newsletter">
        <div className="container">
          <div className="newsletter-content">
            <div className="newsletter-text">
              <h3>Start Your Learning Journey Today</h3>
              <p>Join learners who have transformed their futures with Zeducators</p>
            </div>
            <Link to="/contact" className="btn btn-primary">
              Enroll Now <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Brand Column */}
            <div className="footer-brand">
              <p className="footer-tagline">
                Where Future Achievers Begin Their Journey. Empowering students through
                quality instruction, innovative teaching, and personalized learning in STEM+M.
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/profile.php?id=61579873028872" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link">
                  <Facebook size={20} />
                </a>
                <a href="https://x.com/Zed_Zeducators" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-link">
                  <Twitter size={20} />
                </a>
                <a href="https://www.instagram.com/zeducators.official/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link">
                  <Instagram size={20} />
                </a>
                <a href="https://www.linkedin.com/company/zeducators/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.youtube.com/@zeducators.official" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-link">
                  <Youtube size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/courses">Courses</Link></li>
                <li><Link to="/solutions">Solutions</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Courses */}
            <div className="footer-links">
              <h4>Our Courses</h4>
              <ul>
                <li><Link to="/courses?category=academic">Academic Coaching</Link></li>
                <li><Link to="/courses?category=competitive">JEE & NEET Prep</Link></li>
                <li><Link to="/courses?category=it">IT & Coding</Link></li>
                <li><Link to="/courses?category=language">Language Learning</Link></li>
                <li><Link to="/courses?category=management">Management Skills</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <Phone size={18} />
                  <div>
                    <a href="tel:+919966002827">+91 9966002827</a>
                  </div>
                </li>
                <li>
                  <Phone size={18} />
                  <div>
                    <a href="tel:+919876543210">+91 9876543210</a>
                  </div>
                </li>
                <li>
                  <Mail size={18} />
                  <div>
                    <a href="mailto:info@zeducators.org">info@zeducators.org</a>
                  </div>
                </li>
                <li>
                  <Mail size={18} />
                  <div>
                    <a href="mailto:contact@zeducators.org">contact@zeducators.org</a>
                  </div>
                </li>
                <li>
                  <MapPin size={18} />
                  <div>
                    <a
                      href="https://www.google.com/maps/place/Zeducators/@17.3642427,78.4901757,17z/data=!3m1!4b1!4m6!3m5!1s0x3bcb996cc9f4b0f3:0x8e45ab6af87c6628!8m2!3d17.3642427!4d78.4901757!16s%2Fg%2F11v0q8q8q8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Hno 17-8-659/16, Chanchal Guda</span>
                      <span>Hyderabad 500024</span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>
              Zeducators © {currentYear} . Made with <i className="fas fa-heart heart-icon" style={{ fontSize: '14px' }}></i> for learners everywhere.
            </p>
            <div className="footer-legal">
              <Link to="/privacy">Privacy Policy</Link>
              <span>•</span>
              <Link to="/terms">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

