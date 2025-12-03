import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import {
  GraduationCap,
  Calculator,
  FlaskConical,
  Atom,
  BookOpen,
  Code,
  Languages,
  Briefcase,
  Target,
  Users,
  Monitor,
  UserCheck,
  Shield,
  MessageCircle,
  ArrowRight,
  Filter,
  Search,
  Clock,
  Star,
  ChevronRight
} from 'lucide-react'
import './Courses.css'

import { courses } from '../data/courses'

import SEO from '../components/SEO'

export default function Courses() {
  return (
    <div className="courses-page">
      <SEO
        title="Our Courses"
        description="Explore our wide range of courses including Academic Coaching, Competitive Exams (JEE/NEET), IT Skills, and Languages. Find the perfect path for your future."
        canonical="/courses"
      />
      <HeroSection />
      <CoursesSection />
      <WhyChooseSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="courses-hero section-dark">
      <div className="courses-hero-bg">
        <div className="hero-gradient-orb orb-1"></div>
        <div className="hero-gradient-orb orb-2"></div>
      </div>
      <div className="container">
        <div className="courses-hero-content">
          <span className="badge animate-fade-in-up">Our Courses</span>
          <h1 className="animate-fade-in-up stagger-1">
            Explore Our <span className="text-gradient">Courses</span>
          </h1>
          <p className="animate-fade-in-up stagger-2">
            Academic, competitive, and skill-based courses designed to build
            strong foundations and future-ready learners.
          </p>
        </div>
      </div>
      <div className="courses-hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="#c9c9bf" />
        </svg>
      </div>
    </section>
  )
}

function CoursesSection() {
  const [searchParams, setSearchParams] = useSearchParams()
  const activeCategory = searchParams.get('category') || 'all'

  const categories = [
    { id: 'all', label: 'All Courses', icon: BookOpen },
    { id: 'academic', label: 'Academic', icon: GraduationCap },
    { id: 'competitive', label: 'Competitive', icon: Target },
    { id: 'it', label: 'IT & Coding', icon: Code },
    { id: 'language', label: 'Languages', icon: Languages },
    { id: 'management', label: 'Management', icon: Briefcase }
  ]

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(course => course.category === activeCategory)

  return (
    <section className="courses-listing section">
      <div className="container">
        {/* Filter Tabs */}
        <div className="courses-filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSearchParams(cat.id === 'all' ? {} : { category: cat.id })}
            >
              <cat.icon size={18} />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image-container">
                <div className="course-image">
                  <img src={course.image} alt={`${course.title} - ${course.subtitle}`} />
                  <div className="course-image-overlay"></div>
                </div>
                <div className="course-badge-top">
                  <span className="category-badge">
                    {categories.find(cat => cat.id === course.category)?.label || course.category}
                  </span>
                </div>
              </div>
              <div className="course-content">
                <div className="course-header">
                  <h3>{course.title}</h3>
                  <p className="course-grade">{course.grade || course.subtitle}</p>
                </div>
                <Link to={`/courses/${course.slug}`} className="course-read-more">
                  <span>Read more</span>
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseSection() {
  const reasons = [
    {
      icon: Users,
      title: 'Small Batch Sizes',
      description: 'Limited students per batch ensures personalized attention and better learning outcomes.'
    },
    {
      icon: UserCheck,
      title: 'Personalized Mentoring',
      description: 'One-on-one guidance to address individual learning needs and career goals.'
    },
    {
      icon: Monitor,
      title: 'Smart Classrooms',
      description: 'Modern infrastructure with digital tools for interactive and engaging sessions.'
    },
    {
      icon: GraduationCap,
      title: 'Experienced Faculty',
      description: 'Learn from educators with proven track records and industry expertise.'
    },
    {
      icon: Shield,
      title: 'Safety & Hygiene',
      description: 'Clean, secure, and well-maintained learning environment for all students.'
    },
    {
      icon: MessageCircle,
      title: 'Parent-Teacher Interaction',
      description: 'Regular updates and meetings to keep parents informed about progress.'
    }
  ]

  return (
    <section className="why-choose section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="badge">Why Choose Us</span>
          <h2>The Zeducators <span className="text-gradient">Advantage</span></h2>
          <p>What makes our courses stand out from the rest</p>
        </div>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">
                <reason.icon size={24} />
              </div>
              <div className="reason-content">
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="courses-cta">
      <div className="container">
        <div className="cta-box">
          <h2>Ready to Start Learning?</h2>
          <p>Get a free demo class and experience the Zeducators difference.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary-inverse">
              Book Free Demo <ArrowRight size={18} />
            </Link>
            <a href="tel:+919966002827" className="btn btn-outline-inverse">
              Call +91 9966002827
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

