import { useState } from 'react'
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ArrowRight
} from 'lucide-react'
import './Contact.css'

export default function Contact() {
  return (
    <div className="contact-page">
      <HeroSection />
      <ContactSection />
      <MapSection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="contact-hero section-dark">
      <div className="contact-hero-bg">
        <div className="hero-gradient-orb orb-1"></div>
        <div className="hero-gradient-orb orb-2"></div>
      </div>
      <div className="container">
        <div className="contact-hero-content">
          <span className="badge animate-fade-in-up">Contact Us</span>
          <h1 className="animate-fade-in-up stagger-1">
            Let's Start a <span className="text-gradient">Conversation</span>
          </h1>
          <p className="animate-fade-in-up stagger-2">
            Have questions about our courses or solutions? We're here to help.
            Reach out and let's discuss how we can support your learning journey.
          </p>
        </div>
      </div>
      <div className="contact-hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({ name: '', mobile: '', email: '', message: '' })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone Number',
      primary: '+91 9966002827',
      secondary: '',
      link: 'tel:+919966002827',
      color: 'blue'
    },
    {
      icon: Mail,
      title: 'Email Address',
      primary: 'info@zeducators.org',
      secondary: '',
      link: 'mailto:info@zeducators.org',
      color: 'coral'
    },
    {
      icon: Mail,
      title: 'Email Address',
      primary: 'contact@zeducators.org',
      secondary: '',
      link: 'mailto:contact@zeducators.org',
      color: 'coral'
    },
    {
      icon: MapPin,
      title: 'Location',
      primary: 'Hno 17-8-659/16',
      secondary: 'Chanchal Guda, Hyderabad 500024',
      link: 'https://maps.google.com',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      primary: 'Mon - Sat: 9AM - 7PM',
      secondary: 'Sunday: Closed',
      color: 'amber'
    }
  ]

  return (
    <section className="contact-main section">
      <div className="container">
        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <h2>Get in <span className="text-gradient">Touch</span></h2>
            <p className="contact-intro">
              We'd love to hear from you. Whether you're curious about courses,
              pricing, or anything else—our team is ready to answer all your questions.
            </p>

            <div className="info-cards">
              {contactInfo.map((info, index) => (
                <div key={index} className="info-card">
                  <div className={`info-icon ${info.color}`}>
                    <info.icon size={24} />
                  </div>
                  <div className="info-content">
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="info-primary">{info.primary}</a>
                    ) : (
                      <span className="info-primary">{info.primary}</span>
                    )}
                    {info.secondary && <span className="info-secondary">{info.secondary}</span>}
                  </div>
                </div>
              ))}
            </div>

            <div className="whatsapp-cta">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" fill="currentColor" />
              </svg>
              <div>
                <h4>Chat with us on WhatsApp</h4>
                <p>Quick responses, anytime!</p>
              </div>
              <a
                href="https://wa.me/919966002827"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Chat Now <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <div className="contact-form-card">
              <h3>Send us a Message</h3>
              <p>Fill in the form below and we'll get back to you shortly.</p>

              {isSubmitted ? (
                <div className="form-success">
                  <CheckCircle2 size={48} />
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. We'll get back to you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="mobile">Mobile Number *</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Enter your mobile number"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows="4"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-submit">
                    <Send size={18} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MapSection() {
  return (
    <section className="map-section">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.989407655388!2d78.49017567489392!3d17.364242703471973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb996cc9f4b0f3%3A0x8e45ab6af87c6628!2sZeducators!5e0!3m2!1sen!2sin!4v1764422108349!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Zeducators Location"
        ></iframe>
      </div>
    </section>
  )
}

