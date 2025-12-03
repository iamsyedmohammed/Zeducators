import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react'
import './Contact.css'

export default function Contact() {
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
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    setFormData({ name: '', mobile: '', email: '', message: '' })
  }

  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone Number',
      value: '+91 9966002827',
      link: 'tel:+919966002827'
    },
    {
      icon: Mail,
      label: 'Email Address',
      value: 'info@zeducators.org',
      link: 'mailto:info@zeducators.org'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Hno 17-8-659/16, Chanchal Guda, Hyderabad 500024',
      link: 'https://maps.google.com'
    },
    {
      icon: Clock,
      label: 'Working Hours',
      value: 'Mon - Sat: 9AM - 7PM',
      link: null
    }
  ]

  return (
    <div className="contact-page">
      {/* Hero Section */}


      {/* Main Content Area */}
      <section className="contact-content">
        <div className="container">
          <div className="section-header text-center" style={{ marginBottom: '3rem', marginTop: '2rem' }}>
            <h2>Contact Us</h2>
            <p>Have questions? We'd love to hear from you. Reach out to us and let's start a conversation.</p>
          </div>
          <div className="contact-card-wrapper">

            {/* Left Side: Contact Info */}
            <div className="contact-info-panel">
              <h3>Get in Touch</h3>
              <p className="info-intro">
                Whether you're a student, parent, or educator, we're here to answer your queries.
              </p>

              <div className="info-list">
                {contactDetails.map((item, index) => (
                  <div key={index} className="info-item">
                    <div className="info-icon-box">
                      <item.icon size={20} />
                    </div>
                    <div className="info-text">
                      <span className="label">{item.label}</span>
                      {item.link ? (
                        <a href={item.link} className="value-link">{item.value}</a>
                      ) : (
                        <span className="value-text">{item.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>


            </div>

            {/* Right Side: Form */}
            <div className="contact-form-panel">
              <div className="form-header">
                <h3>Send a Message</h3>
                <p>Fill out the form below and we'll get back to you shortly.</p>
              </div>

              {isSubmitted ? (
                <div className="submission-success">
                  <CheckCircle2 size={64} />
                  <h4>Thank You!</h4>
                  <p>Your message has been sent successfully.</p>
                  <button onClick={() => setIsSubmitted(false)} className="btn-reset">Send Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="modern-form">
                  <div className="form-row">
                    <div className="input-group">
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="mobile">Mobile Number</label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        required
                      />
                    </div>
                  </div>

                  <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>

                  <div className="input-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows="5"
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submit-btn">
                    Send Message <Send size={18} />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-full-width">
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
      </section>
    </div>
  )
}
