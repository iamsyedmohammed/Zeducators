import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, ArrowRight, MessageSquare } from 'lucide-react'
import toast from 'react-hot-toast'
import { courses } from '../data/courses'
import './Contact.css'

import SEO from '../components/SEO'
import SuccessModal from '../components/SuccessModal'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    course: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us",
    "description": "Contact Zeducators",
    "mainEntity": {
      "@type": "Organization",
      "name": "Zeducators",
      "telephone": "+91-9966002827",
      "email": "info@zeducators.org",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hno 17-8-659/16, Chanchal Guda",
        "addressLocality": "Hyderabad",
        "postalCode": "500024",
        "addressCountry": "IN"
      }
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'mobile') {
      // Only allow numbers
      if (!/^\d*$/.test(value)) return
      // Max length 10
      if (value.length > 10) return
    }

    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (isSubmitting) return; // Prevent double submission

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setShowSuccessModal(true)
        setFormData({ name: '', mobile: '', email: '', course: '', message: '' })
      } else {
        toast.error(data.message || 'Failed to send message. Please try again.')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      toast.error('Something went wrong. Please try again later.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactDetails = [
    {
      icon: Phone,
      label: 'Phone Number',
      value: '+91 9966002827',
      link: 'tel:+919966002827'
    },
    {
      icon: Phone,
      label: 'Phone Number',
      value: '+91 9876543210',
      link: 'tel:+919876543210'
    },
    {
      icon: Mail,
      label: 'Email Address',
      value: 'info@zeducators.org',
      link: 'mailto:info@zeducators.org'
    },
    {
      icon: Mail,
      label: 'Email Address',
      value: 'contact@zeducators.org',
      link: 'mailto:contact@zeducators.org'
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
      <SEO
        title="Contact Us"
        description="Get in touch with Zeducators. Call us at +91 9966002827, email info@zeducators.org, or visit our center in Hyderabad."
        canonical="/contact"
        schema={contactSchema}
      />

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        title="Thank You!"
        message="We have received your query. Our team will get back to you shortly."
      />

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

              <form onSubmit={handleSubmit} className="modern-form">
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
                    disabled={isSubmitting}
                  />
                </div>

                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="mobile">Mobile Number</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="9876543210"
                      required
                      disabled={isSubmitting}
                      pattern="[0-9]{10}"
                      maxLength="10"
                    />
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
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="course">Interested Course</label>
                  <select
                    id="course"
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={!formData.course ? 'placeholder-shown' : ''}
                  >
                    <option value="">Select a course</option>
                    {courses.map(course => (
                      <option key={course.id} value={`${course.title} (${course.grade})`}>
                        {course.title} ({course.grade})
                      </option>
                    ))}
                  </select>
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
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                </button>
              </form>
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
