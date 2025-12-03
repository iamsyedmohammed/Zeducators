import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CheckCircle2,
  Users,
  BookOpen,
  Award,
  Star,
  GraduationCap,
  Calculator,
  FlaskConical,
  Atom,
  Quote,
  Monitor,
  Mic,
  Briefcase,
  ShieldCheck,
  Layout,
  ChevronDown
} from 'lucide-react'
import { useState, useEffect } from 'react'
import './Home.css'

import SEO from '../components/SEO'

export default function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Zeducators",
    "url": "https://zeducators.org",
    "logo": "https://zeducators.org/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9966002827",
      "contactType": "customer service"
    },
    "sameAs": [
      "https://www.facebook.com/profile.php?id=61579873028872",
      "https://x.com/Zed_Zeducators",
      "https://www.instagram.com/zeducators.official/",
      "https://www.linkedin.com/company/zeducators/",
      "https://www.youtube.com/@zeducators.official"
    ]
  }

  return (
    <div className="home">
      <SEO
        title="Home"
        description="Zeducators offers expert coaching in STEM+M, languages, and competitive exams. Join us for personalized learning and holistic development."
        canonical="/"
        schema={organizationSchema}
      />
      <HeroSection />
      <CategoriesSection />
      <FeaturedCoursesSection />
      <WhyChooseSection />
      <AboutPreviewSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  )
}

function Typewriter({ texts, typingSpeed = 100, deletingSpeed = 50, pauseTime = 2000 }) {
  const [displayedText, setDisplayedText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [textIndex, setTextIndex] = useState(0)

  useEffect(() => {
    const currentText = texts[textIndex]

    let timer
    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1))
      }, deletingSpeed)
    } else {
      timer = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1))
      }, typingSpeed)
    }

    if (!isDeleting && displayedText === currentText) {
      clearTimeout(timer)
      timer = setTimeout(() => setIsDeleting(true), pauseTime)
    } else if (isDeleting && displayedText === '') {
      setIsDeleting(false)
      setTextIndex((prev) => (prev + 1) % texts.length)
    }

    return () => clearTimeout(timer)
  }, [displayedText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseTime])

  return (
    <span className="typewriter">
      {displayedText}
      <span className="cursor">|</span>
    </span>
  )
}

function HeroSection() {
  return (
    <section className="home-hero">
      <div className="home-hero-bg-grid"></div>
      <div className="container">
        <div className="home-hero-grid">
          <div className="home-hero-content">
            <h1 className="animate-fade-in-up stagger-1">
              Where Future Achievers <br />
              <span className="text-highlight">
                <Typewriter
                  texts={[
                    "Achieve Excellence",
                    "Shape Their Future",
                    "Find Their Purpose",
                    "Learn For Life",
                    "Chase True Success"
                  ]}
                />



              </span>
            </h1>
            <p className="animate-fade-in-up stagger-2">
              Zeducators is an innovative learning platform offering expert coaching in STEM+M and languages,
              combining modern teaching methods with personalized learning to foster academic success and holistic student development.
            </p>
            <div className="hero-actions animate-fade-in-up stagger-3">
              <Link to="/courses" className="btn btn-primary">
                Explore Courses <ArrowRight size={18} />
              </Link>
            </div>
          </div>
          <div className="home-hero-image animate-fade-in-up stagger-2">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
              alt="Students Learning"
            />
          </div>
        </div>
      </div>
      <div className="home-hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="#fdfbf7" />
        </svg>
      </div>
    </section>
  )
}

function CategoriesSection() {
  const categories = [
    {
      id: 'academic',
      icon: GraduationCap,
      title: 'Academic Coaching',
      description: 'All Boards Courses, Classes for Grades 1 to 12',
      tags: ['CBSE', 'ICSE', 'State Boards', 'All Subjects']
    },
    {
      id: 'competitive',
      icon: BookOpen,
      title: 'Competitive Exams',
      description: 'Preparation for entrance examinations',
      tags: ['JEE', 'NEET', 'EAMCET', 'CUET']
    },
    {
      id: 'it',
      icon: Monitor,
      title: 'IT & Computer',
      description: 'Technical skills for the digital age',
      tags: ['Python', 'Web Dev', 'Coding', 'Data Science']
    },
    {
      id: 'language',
      icon: Mic,
      title: 'Language Learning',
      description: 'Master communication skills',
      tags: ['Spoken English', 'Grammar', 'Public Speaking']
    },
    {
      id: 'management',
      icon: Briefcase,
      title: 'Management Skills',
      description: 'Business and professional development',
      tags: ['Business Basics', 'Entrepreneurship', 'Soft Skills']
    }
  ]

  return (
    <section className="categories section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Course Categories</span>
          <h2>
            Explore Our Courses in <span className="text-rotator">
              <span className="rotator-wrapper">
                <span className="rotating-text">Academic Coaching </span>
                <span className="rotating-text">Competitive Exams </span>
                <span className="rotating-text">IT & Computer </span>
                <span className="rotating-text">Language Learning </span>
                <span className="rotating-text">Management Skills </span>
                <span className="rotating-text">Academic Coaching </span>
              </span>
            </span>
          </h2>
          <p>From academic excellence to career readiness, we have courses tailored for every goal</p>
        </div>
        <div className="categories-grid">
          {categories.map((category, index) => (
            <div key={index} className="category-card">
              <div className="category-icon">
                <category.icon size={32} />
              </div>
              <div className="category-content">
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div className="category-tags">
                  {category.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <Link to={`/courses?category=${category.id}`} className="category-explore-btn">
                  Explore <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { courses } from '../data/courses'

function FeaturedCoursesSection() {
  // Use first 10 courses as featured
  const featuredCourses = courses.slice(0, 10)

  return (
    <section className="featured-courses section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="badge">Featured Courses</span>
          <h2>Courses that turn ambition into <span className="text-gradient">Achievement</span></h2>
          <p>Explore our most popular academic coaching courses designed to build strong foundations</p>
        </div>
        <div className="featured-grid">
          {featuredCourses.map((course, index) => (
            <div key={index} className="featured-card">
              <div className="card-image">
                <img src={course.image} alt={course.title} />
                <span className="category-tag">{course.category}</span>
              </div>
              <div className="card-content">
                <h3>{course.title}</h3>
                <p className="grade-text">{course.grade}</p>
                <Link to={`/courses/${course.slug}`} className="card-link">
                  Read more <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-xl">
          <Link to="/courses" className="btn btn-outline">
            View All Courses
          </Link>
        </div>
      </div>
    </section>
  )
}

function WhyChooseSection() {
  const features = [
    {
      icon: Users,
      title: 'Experienced Faculty',
      description: 'Learn from industry experts with years of teaching experience'
    },
    {
      icon: Monitor,
      title: 'Smart Classrooms',
      description: 'Modern learning environment with latest technology'
    },
    {
      icon: BookOpen,
      title: 'Regular Assessments',
      description: 'Track progress with frequent tests and detailed feedback'
    },
    {
      icon: ShieldCheck,
      title: 'Safe Environment',
      description: 'Secure and supportive learning atmosphere for all'
    },
    {
      icon: Users,
      title: 'Small Batches',
      description: 'Personal attention with limited students per batch'
    },
    {
      icon: Layout,
      title: 'Flexible Learning',
      description: 'Both online and offline modes available'
    }
  ]

  return (
    <section className="why-choose section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Why Choose Us</span>
          <h2>A Learning Experience <span className="text-gradient">Like No Other</span></h2>
          <p>We combine traditional teaching excellence with modern methodologies to create an environment where every student can thrive.</p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                <feature.icon size={28} />
              </div>
              <h4>{feature.title}</h4>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-xl">
          <Link to="/about" className="btn btn-primary">
            Learn More About Us <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}

function AboutPreviewSection() {
  return (
    <section className="about-preview section section-alt">
      <div className="container">
        <div className="about-layout">
          <div className="about-image">
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
              alt="Students learning"
            />
            <div className="about-image-overlay"></div>
            <div className="experience-badge">
              <span className="years">2019</span>
              <span className="text">Empowering Learners Since</span>
            </div>
          </div>
          <div className="about-content">
            <span className="badge">Who We Are</span>
            <h2>Blending Expert Coaching with <span className="text-gradient">Modern Tools</span></h2>
            <p>
              At Zeducators, we believe that quality education should be accessible to everyone.
              Our platform combines experienced faculty, cutting-edge technology, and personalized
              learning paths to create transformative educational experiences.
            </p>
            <ul className="about-features">
              <li>
                <CheckCircle2 size={20} />
                <span>Online Courses for Classes 8–12</span>
              </li>
              <li>
                <CheckCircle2 size={20} />
                <span>Personal Skills Development</span>
              </li>
              <li>
                <CheckCircle2 size={20} />
                <span>Industry-Recognized Certifications</span>
              </li>
              <li>
                <CheckCircle2 size={20} />
                <span>Communication & Logic Training</span>
              </li>
            </ul>
            <Link to="/about" className="btn btn-primary">
              Our Story <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Zeducators made learning fun and interactive. My grades improved significantly, and I feel more confident about my exams now.",
      name: "Anjali Verma",
      role: "Class 10 Student",
      initial: "A"
    },
    {
      quote: "The faculty here is exceptional. Their guidance helped me crack NEET with a great score. The practice tests were incredibly helpful.",
      name: "Rohit Mehta",
      role: "NEET Aspirant",
      initial: "R"
    },
    {
      quote: "As a parent, I appreciate the regular updates and the safe learning environment. My child has shown remarkable improvement.",
      name: "Priya Sharma",
      role: "Parent (Class 9)",
      initial: "P"
    },
    {
      quote: "The CUET preparation course was comprehensive and well-structured. The mentors were always available to clear doubts.",
      name: "Aditya Singh",
      role: "CUET Aspirant",
      initial: "S"
    },
    {
      quote: "I love how Zeducators combines theory with practical examples. It makes understanding complex topics so much easier.",
      name: "Nidhi Patel",
      role: "Class 11 Commerce",
      initial: "N"
    },
    {
      quote: "The personalized attention and regular mock tests helped me improve my JEE rank significantly. The teachers are patient and explain concepts clearly.",
      name: "Karan Desai",
      role: "JEE Aspirant",
      initial: "K"
    }
  ]

  return (
    <section className="testimonials section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Success Stories</span>
          <h2>What Our Students <span className="text-gradient">Say</span></h2>
          <p>Join thousands of successful learners who transformed their academic journey with us</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="card-header">
                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="var(--color-golden-brown)" color="var(--color-golden-brown)" />
                  ))}
                </div>
              </div>
              <p className="testimonial-text">{testimonial.quote}</p>
              <div className="testimonial-author-box">
                <div className="author-avatar">{testimonial.initial}</div>
                <div className="testimonial-author">
                  <h4>{testimonial.name}</h4>
                  <p>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const faqs = [
    {
      question: "What classes do you offer courses for?",
      answer: "We offer comprehensive courses for students from Grade 1 to Grade 12 across various boards including CBSE, ICSE, and State Boards."
    },
    {
      question: "Which competitive exams do you prepare students for?",
      answer: "We provide specialized coaching for major competitive exams including JEE (Main & Advanced), NEET, EAMCET, and CUET."
    },
    {
      question: "Do you offer online and offline learning options?",
      answer: "Yes, we offer flexible learning modes including both online live classes and offline classroom sessions to suit your preference."
    },
    {
      question: "What is STEM+M?",
      answer: "STEM+M stands for Science, Technology, Engineering, Mathematics, and Medicine/Management. It's an integrated approach to learning that connects these disciplines."
    },
    {
      question: "Can I take a demo class before enrolling?",
      answer: "Absolutely! We encourage students to take a free demo class to experience our teaching methodology before making a decision."
    },
    {
      question: "Do you provide certifications?",
      answer: "Yes, we provide industry-recognized certifications upon successful completion of our skill development and technical courses."
    }
  ]

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="faq section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="badge">FAQ</span>
          <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
          <p>Everything you need to know about our courses and learning platform</p>
        </div>
        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <h3>{faq.question}</h3>
                <span className="faq-toggle">
                  <ChevronDown size={24} />
                </span>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
