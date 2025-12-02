import { Link } from 'react-router-dom'
import {
  FileText,
  Scale,
  AlertCircle,
  Users,
  CreditCard,
  Shield,
  Mail,
  Phone,
  MapPin,
  ArrowRight
} from 'lucide-react'
import './Terms.css'

export default function Terms() {
  return (
    <div className="terms-page">
      <HeroSection />
      <ContentSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="terms-hero section-dark">
      <div className="terms-hero-bg">
        <div className="hero-gradient-orb orb-1"></div>
      </div>
      <div className="container">
        <div className="terms-hero-content">
          <span className="badge animate-fade-in-up">Terms of Service</span>
          <h1 className="animate-fade-in-up stagger-1">Terms of <span className="text-gradient">Service</span></h1>
          <p className="animate-fade-in-up stagger-2">
            Please read these terms carefully before using our services. By accessing
            or using Zeducators, you agree to be bound by these terms.
          </p>
        </div>
      </div>
      <div className="terms-hero-wave">
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
      icon: Scale,
      title: 'Acceptance of Terms',
      content: [
        {
          text: 'By accessing and using the Zeducators platform, website, or any of our services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.'
        },
        {
          text: 'These terms apply to all users, including students, parents, guardians, and any other individuals who access or use our platform.'
        }
      ]
    },
    {
      icon: Users,
      title: 'User Accounts and Registration',
      content: [
        {
          subtitle: 'Account Creation',
          text: 'To access certain features of our platform, you may be required to create an account. You agree to provide accurate, current, and complete information during registration and to update such information to keep it accurate, current, and complete.'
        },
        {
          subtitle: 'Account Security',
          text: 'You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.'
        },
        {
          subtitle: 'Age Requirements',
          text: 'Users under the age of 18 must have parental or guardian consent to create an account and use our services. Parents or guardians are responsible for their child\'s use of the platform.'
        }
      ]
    },
    {
      icon: Shield,
      title: 'Use of Services',
      content: [
        {
          subtitle: 'Permitted Use',
          text: 'You may use our services for lawful educational purposes only. You agree not to use the platform in any way that violates applicable laws or regulations.'
        },
        {
          list: [
            'You may not share your account credentials with others',
            'You may not attempt to gain unauthorized access to any part of the platform',
            'You may not use automated systems to access the platform without permission',
            'You may not copy, reproduce, or distribute course materials without authorization',
            'You may not interfere with or disrupt the platform or servers',
            'You may not use the platform to transmit harmful code or malicious software'
          ]
        }
      ]
    },
    {
      icon: CreditCard,
      title: 'Payment Terms',
      content: [
        {
          subtitle: 'Fees and Payments',
          text: 'Course fees and other charges are displayed on our platform. All fees are in Indian Rupees (INR) unless otherwise stated. Payment must be made in full before access to paid courses is granted.'
        },
        {
          subtitle: 'Refund Policy',
          text: 'Refund requests must be submitted within 7 days of course enrollment. Refunds are subject to our refund policy and may be prorated based on course completion. Contact us for specific refund inquiries.'
        },
        {
          subtitle: 'Payment Processing',
          text: 'We use secure third-party payment processors. By making a payment, you agree to the terms and conditions of the payment processor. We are not responsible for any issues arising from payment processing.'
        }
      ]
    },
    {
      icon: AlertCircle,
      title: 'Intellectual Property',
      content: [
        {
          text: 'All content on the Zeducators platform, including but not limited to course materials, videos, text, graphics, logos, and software, is the property of Zeducators or its content providers and is protected by copyright and other intellectual property laws.'
        },
        {
          text: 'You are granted a limited, non-exclusive, non-transferable license to access and use the course materials for your personal educational purposes only. You may not:'
        },
        {
          list: [
            'Reproduce, distribute, or publicly display course materials',
            'Modify or create derivative works from our content',
            'Remove any copyright or proprietary notices',
            'Use our content for commercial purposes',
            'Share your account or course access with others'
          ]
        }
      ]
    },
    {
      icon: Shield,
      title: 'Limitation of Liability',
      content: [
        {
          text: 'Zeducators provides educational services "as is" and "as available." We do not guarantee that our services will be uninterrupted, error-free, or completely secure.'
        },
        {
          text: 'To the maximum extent permitted by law, Zeducators shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or other intangible losses resulting from your use of our services.'
        },
        {
          text: 'Our total liability for any claims arising from your use of our services shall not exceed the amount you paid to us in the 12 months preceding the claim.'
        }
      ]
    }
  ]

  return (
    <section className="terms-content section">
      <div className="container">
        <div className="terms-layout">
          <aside className="terms-sidebar">
            <nav className="terms-nav">
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

          <main className="terms-main">
            {sections.map((section, index) => (
              <div key={index} id={`section-${index}`} className="terms-section">
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
                        <ul className="terms-list">
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
            <div id="contact-section" className="terms-section contact-section">
              <div className="section-header-row">
                <div className="section-icon">
                  <Mail size={24} />
                </div>
                <h2>Contact Information</h2>
              </div>
              <div className="section-content">
                <p>
                  If you have any questions about these Terms of Service,
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
            <div className="terms-notice">
              <h4>Terms Updates</h4>
              <p>
                We reserve the right to modify these Terms of Service at any time.
                We will notify users of any material changes by posting the updated
                terms on this page and updating the "Effective Date" at the top.
                Your continued use of our services after such changes constitutes
                acceptance of the updated terms.
              </p>
            </div>

            {/* CTA */}
            <div className="terms-cta">
              <p>Have questions about our terms?</p>
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

