import { Link } from 'react-router-dom'
import {
  Shield,
  Lock,
  Eye,
  Users,
  CreditCard,
  Smartphone,
  Baby,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react'
import './Privacy.css'

export default function Privacy() {
  return (
    <div className="privacy-page">
      <HeroSection />
      <ContentSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="privacy-hero section-dark">
      <div className="privacy-hero-bg">
        <div className="hero-gradient-orb orb-1"></div>
      </div>
      <div className="container">
        <div className="privacy-hero-content">
          <span className="badge animate-fade-in-up">Our Privacy Policy</span>
          <h1 className="animate-fade-in-up stagger-1">Privacy <span className="text-gradient">Policy</span></h1>
          <p className="animate-fade-in-up stagger-2">
            Your privacy is important to us. This policy explains how we collect,
            use, and protect your information.
          </p>
        </div>
      </div>
      <div className="privacy-hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" style={{ display: 'block' }}>
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="white" stroke="none" />
        </svg>
      </div>
    </section>
  )
}

function ContentSection() {
  const sections = [
    {
      icon: Eye,
      title: 'Information We Collect',
      content: [
        {
          subtitle: 'Personal Information',
          text: 'We collect information that you provide directly to us, including name, phone number, email address, physical address, and student details such as grade and educational background.'
        },
        {
          subtitle: 'Academic Data',
          text: 'To provide our educational services, we collect academic information including performance records, attendance data, test results, and learning progress metrics.'
        },
        {
          subtitle: 'Payment Information',
          text: 'When you make payments for our services, we collect necessary payment details. All payment information is processed securely through trusted payment gateways.'
        },
        {
          subtitle: 'Device and Usage Data',
          text: 'We automatically collect certain information about your device and how you interact with our platform, including IP address, browser type, and usage patterns to improve our services.'
        }
      ]
    },
    {
      icon: Users,
      title: 'How We Use Your Information',
      content: [
        {
          text: 'We use the information we collect for the following purposes:'
        },
        {
          list: [
            'To register students and create user accounts',
            'To deliver educational services and course content',
            'To process payments and maintain financial records',
            'To communicate updates, offers, and important announcements',
            'To improve user experience and platform functionality',
            'To personalize learning recommendations',
            'To generate progress reports and analytics',
            'To comply with legal obligations'
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: 'Data Sharing and Protection',
      content: [
        {
          subtitle: 'We Do Not Sell Your Data',
          text: 'Zeducators does not sell, trade, or rent your personal information to third parties for marketing purposes.'
        },
        {
          subtitle: 'Limited Sharing',
          text: 'We may share your information with internal staff and teachers who require access to provide educational services. We may also share data with service providers who assist in operating our platform, subject to confidentiality agreements.'
        },
        {
          subtitle: 'Data Security',
          text: 'We implement industry-standard security measures including encryption, secure servers, and access controls to protect your personal information from unauthorized access, alteration, or disclosure.'
        }
      ]
    },
    {
      icon: Baby,
      title: "Children's Privacy",
      content: [
        {
          text: 'We are committed to protecting the privacy of children. For students under the age of 18, we require parental or guardian consent for registration and data collection.'
        },
        {
          text: "Parents and guardians have the right to review their child's personal information, request corrections, and request deletion of data. Contact us at the details provided below to exercise these rights."
        }
      ]
    },
    {
      icon: CreditCard,
      title: 'Your Rights',
      content: [
        {
          text: 'You have the following rights regarding your personal data:'
        },
        {
          list: [
            'Right to access your personal information',
            'Right to correct inaccurate data',
            'Right to request deletion of your data',
            'Right to withdraw consent',
            'Right to data portability',
            'Right to object to certain processing activities'
          ]
        },
        {
          text: 'To exercise any of these rights, please contact us using the information provided below.'
        }
      ]
    },
    {
      icon: Smartphone,
      title: 'Cookies and Tracking',
      content: [
        {
          text: 'Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.'
        },
        {
          text: 'We use both session cookies (which expire when you close your browser) and persistent cookies (which remain on your device until deleted or expired).'
        }
      ]
    }
  ]

  return (
    <section className="privacy-content section">
      <div className="container">
        <div className="privacy-layout">
          <aside className="privacy-sidebar">
            <nav className="privacy-nav">
              <h4>Contents</h4>
              <ul>
                {sections.map((section, index) => (
                  <li key={index}>
                    <a href={`#section-${index}`}>{section.title}</a>
                  </li>
                ))}
                <li><a href="#contact-section">Contact Information</a></li>
              </ul>
              <div className="sidebar-date">
                <small>Effective Date: July 19, 2025</small>
              </div>
            </nav>
          </aside>

          <main className="privacy-main">
            {sections.map((section, index) => (
              <div key={index} id={`section-${index}`} className="privacy-section">
                <div className="section-header-row">
                  <div className="section-icon">
                    <section.icon size={24} />
                  </div>
                  <h2>{section.title}</h2>
                </div>
                <div className="section-content">
                  {section.content.map((item, i) => (
                    <div key={i} className="content-block">
                      {item.subtitle && <h4>{item.subtitle}</h4>}
                      {item.text && <p>{item.text}</p>}
                      {item.list && (
                        <ul className="privacy-list">
                          {item.list.map((listItem, j) => (
                            <li key={j}>{listItem}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Contact Section */}
            <div id="contact-section" className="privacy-section contact-section">
              <div className="section-header-row">
                <div className="section-icon">
                  <Mail size={24} />
                </div>
                <h2>Contact Information</h2>
              </div>
              <div className="section-content">
                <p>
                  If you have any questions about this Privacy Policy or our data practices,
                  please contact us:
                </p>
                <div className="contact-cards">
                  <div className="contact-card">
                    <Mail size={20} />
                    <div>
                      <span>Email</span>
                      <a href="mailto:info@zeducators.org">info@zeducators.org</a>
                    </div>
                  </div>
                  <div className="contact-card">
                    <Phone size={20} />
                    <div>
                      <span>Phone</span>
                      <a href="tel:+919966002827">+91 9966002827</a>
                    </div>
                  </div>
                  <div className="contact-card">
                    <MapPin size={20} />
                    <div>
                      <span>Address</span>
                      <p>Hno 17-8-659/16, Chanchal Guda, Hyderabad 500024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Updates Notice */}
            <div className="privacy-notice">
              <h4>Policy Updates</h4>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of
                any changes by posting the new Privacy Policy on this page and updating the
                "Effective Date" at the top. We encourage you to review this Privacy Policy
                periodically for any changes.
              </p>
            </div>

            {/* CTA */}
            <div className="privacy-cta">
              <p>Have questions about our privacy practices?</p>
              <Link to="/contact" className="btn btn-primary">
                Contact Us <ArrowRight size={18} />
              </Link>
            </div>
          </main>
        </div>
      </div>
    </section>
  )
}

