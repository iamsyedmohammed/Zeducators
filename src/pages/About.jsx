import { Link } from 'react-router-dom'
import {
  Users,
  Lightbulb,
  Heart,
  Rocket,
  Target,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight,
  Quote,
  Zap,
  Globe,
  Handshake,
  TrendingUp,
  CheckCircle2,
  GraduationCap
} from 'lucide-react'
import './About.css'

export default function About() {
  return (
    <div className="about">
      <HeroSection />
      <WhoWeAreSection />
      <VisionMissionSection />
      <FounderSection />
      <TimelineSection />
      <ValuesSection />
      <ApproachSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="about-hero section-dark">
      <div className="about-hero-bg">
        <div className="hero-gradient-orb orb-1"></div>
        <div className="hero-gradient-orb orb-2"></div>
      </div>
      <div className="container">
        <div className="about-hero-content">
          <span className="badge animate-fade-in-up">About Zeducators</span>
          <h1 className="animate-fade-in-up stagger-1">
            Join Our Community of Learners and Start Your Journey Towards <span className="text-gradient">Success</span>
          </h1>
          <p className="animate-fade-in-up stagger-2">
            We're on a mission to transform education and empower every student 
            with the skills and knowledge they need to succeed in the modern world.
          </p>
        </div>
      </div>
      <div className="about-hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

function WhoWeAreSection() {
  return (
    <section className="who-section section">
      <div className="container">
        <div className="who-grid">
          <div className="who-image">
            <div className="image-main">
              <div className="image-overlay">
                <GraduationCap size={64} />
              </div>
            </div>
          </div>
          <div className="who-content">
            <span className="badge">Who We Are</span>
            <h2>Empowering Students Through <span className="text-gradient">Quality Education</span></h2>
            <p className="lead">
              Zeducators is a dynamic educational initiative committed to empowering students 
              through quality instruction, innovative teaching methods, and personalized learning 
              experiences in <strong>STEM+M</strong> (Science, Technology, Engineering, Mathematics + Management) 
              and language skills.
            </p>
            <p>
              We believe every learner is unique. That's why we focus on interactive classrooms, 
              curated resources, and regular assessments to ensure concept clarity and exam readiness. 
              Our approach combines the best of traditional teaching excellence with modern educational 
              technology.
            </p>
            <div className="who-features">
              <div className="who-feature">
                <BookOpen size={20} />
                <span>Interactive Classrooms</span>
              </div>
              <div className="who-feature">
                <Target size={20} />
                <span>Curated Resources</span>
              </div>
              <div className="who-feature">
                <Award size={20} />
                <span>Regular Assessments</span>
              </div>
              <div className="who-feature">
                <Users size={20} />
                <span>Expert Mentoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function VisionMissionSection() {
  return (
    <section className="vision-mission section section-alt">
      <div className="container">
        <div className="vm-grid">
          <div className="vm-card vision-card">
            <div className="vm-icon">
              <Sparkles size={32} />
            </div>
            <h3>Our Vision</h3>
            <p>
              To empower every learner with quality education, innovative technology, 
              and personalized guidance for a successful future. We envision a world 
              where quality education knows no boundaries.
            </p>
          </div>
          <div className="vm-card mission-card">
            <div className="vm-icon">
              <Target size={32} />
            </div>
            <h3>Our Mission</h3>
            <p>
              To deliver high-quality, affordable, and accessible education through 
              expert faculty, modern teaching tools, and personalized mentoring. 
              We're committed to nurturing future leaders and innovators.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="founder section">
      <div className="container">
        <div className="founder-content">
          <div className="founder-quote-wrapper">
            <Quote size={48} className="quote-icon" />
            <blockquote className="founder-quote">
              "Education is not just about knowledge, it's about relevance, reach, and results. 
              At Zeducators, we believe that learning should be human-centric, inclusive, and future-proof."
            </blockquote>
            <div className="founder-info">
              <div className="founder-avatar">F</div>
              <div>
                <h4>Founder's Message</h4>
                <span>Zeducators Leadership Team</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineSection() {
  const timeline = [
    {
      year: '2019',
      title: 'The Spark',
      description: 'We questioned why quality education was still a privilege. The idea of democratizing education was born.',
      icon: Lightbulb
    },
    {
      year: '2020',
      title: 'Zeducators is Born',
      description: 'Launched our platform to reimagine learning, making it inclusive and digital-first for all students.',
      icon: Rocket
    },
    {
      year: '2021',
      title: 'First Impact',
      description: 'Reached 5,000+ learners across urban and rural India, proving that geography is no barrier to learning.',
      icon: Users
    },
    {
      year: '2023',
      title: 'Scaling with Technology',
      description: 'Introduced AI-driven learning tools and formed institutional collaborations to amplify our reach.',
      icon: Zap
    }
  ]

  return (
    <section className="timeline section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="badge">Our Journey</span>
          <h2>The <span className="text-gradient">Zeducators</span> Story</h2>
          <p>From a simple question to transforming millions of lives through education</p>
        </div>
        <div className="timeline-wrapper">
          <div className="timeline-line"></div>
          <div className="timeline-items">
            {timeline.map((item, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
                <div className="timeline-dot"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ValuesSection() {
  const values = [
    {
      icon: Globe,
      title: 'Inclusivity',
      description: 'Education for everyone, regardless of background or location. We break barriers to make learning accessible.',
      color: 'blue'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly evolving our teaching methods and technology to provide the best learning experience.',
      color: 'coral'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Honest, transparent, and ethical in everything we do. Trust is the foundation of education.',
      color: 'green'
    },
    {
      icon: TrendingUp,
      title: 'Impact',
      description: 'Measured by the success of our students. Every decision we make is driven by student outcomes.',
      color: 'amber'
    }
  ]

  return (
    <section className="values section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Our Core Values</span>
          <h2>What <span className="text-gradient">Drives Us</span></h2>
          <p>The principles that guide every decision we make at Zeducators</p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className={`value-card card ${value.color}`}>
              <div className={`value-icon ${value.color}`}>
                <value.icon size={28} />
              </div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ApproachSection() {
  const approaches = [
    {
      icon: Users,
      title: 'Learner-Centric Design',
      description: 'Every course, feature, and interaction is designed with the student at the center.'
    },
    {
      icon: BookOpen,
      title: 'Blended Learning',
      description: 'Combining the best of online and offline modes for flexible, effective learning.'
    },
    {
      icon: Target,
      title: 'Outcome-Based Paths',
      description: 'Structured learning journeys designed to achieve specific academic and career goals.'
    },
    {
      icon: Handshake,
      title: 'Strategic Partnerships',
      description: 'Collaborating with institutions and industry to provide real-world relevance.'
    }
  ]

  return (
    <section className="approach section section-alt">
      <div className="container">
        <div className="approach-header">
          <span className="badge">Our Approach</span>
          <h2>How We <span className="text-gradient">Transform Learning</span></h2>
          <p>
            Our methodology is built on understanding how students learn best and 
            creating experiences that make education engaging, effective, and enjoyable.
          </p>
        </div>
        <div className="approach-grid">
          {approaches.map((item, index) => (
            <div key={index} className="approach-item">
              <div className="approach-icon">
                <item.icon size={24} />
              </div>
              <div className="approach-text">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
              <CheckCircle2 size={20} className="approach-check" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="about-cta section-dark">
      <div className="container">
        <div className="cta-content">
          <h2>Ready to Begin Your <span className="text-gradient">Learning Journey?</span></h2>
          <p>Join thousands of students who are already transforming their futures with Zeducators.</p>
          <div className="cta-actions">
            <Link to="/courses" className="btn btn-primary">
              Explore Courses <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

