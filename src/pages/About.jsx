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

import SEO from '../components/SEO'

export default function About() {
  return (
    <div className="about">
      <SEO
        title="About Us"
        description="Learn about Zeducators' mission to redefine education through innovation, inclusivity, and excellence. Meet our team and discover our values."
        canonical="/about"
      />
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
        {/* Background pattern or subtle elements can go here via CSS */}
      </div>
      <div className="container">
        <div className="about-hero-content">
          <span className="badge animate-fade-in-up">About Zeducators</span>
          <h1 className="animate-fade-in-up stagger-1">
            Empowering Minds, <span className="text-gradient">Shaping Futures</span>
          </h1>
          <p className="animate-fade-in-up stagger-2">
            We are a community dedicated to transforming education through innovation,
            inclusivity, and excellence. Join us in redefining how the world learns.
          </p>
        </div>
      </div>
      <div className="about-hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="#c9c9bf" />
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
          <div className="who-content">
            <span className="badge">Who We Are</span>
            <h2>Redefining Education for the <span className="text-gradient">Modern Era</span></h2>
            <p className="lead">
              Zeducators is more than just an educational platform; it's a movement.
              We are committed to bridging the gap between traditional learning and
              future-ready skills, focusing on <strong>STEM+M</strong> and holistic development.
            </p>
            <p>
              Our philosophy is simple: every student deserves access to high-quality,
              personalized education. By combining expert mentorship with cutting-edge
              technology, we create learning environments that inspire curiosity and
              foster growth.
            </p>
            <div className="who-features">
              <div className="who-feature">
                <div className="feature-icon"><BookOpen size={20} /></div>
                <span>Interactive Learning</span>
              </div>
              <div className="who-feature">
                <div className="feature-icon"><Target size={20} /></div>
                <span>Curated Pathways</span>
              </div>
              <div className="who-feature">
                <div className="feature-icon"><Award size={20} /></div>
                <span>Skill Mastery</span>
              </div>
              <div className="who-feature">
                <div className="feature-icon"><Users size={20} /></div>
                <span>Expert Mentors</span>
              </div>
            </div>
          </div>
          <div className="who-image-wrapper">
            <div className="who-image">
              <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Students learning" />
              <div className="image-overlay-content">
                <div className="stat-card">
                  <span className="stat-number">5k+</span>
                  <span className="stat-label">Students Impacted</span>
                </div>
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
    <section className="vision-mission section">
      <div className="container">
        <div className="vm-grid">
          <div className="vm-card vision">
            <div className="vm-icon-wrapper">
              <Sparkles size={32} />
            </div>
            <div className="vm-content">
              <h3>Our Vision</h3>
              <p>
                To create a world where quality education is accessible to all,
                empowering individuals to reach their full potential and contribute
                meaningfully to society.
              </p>
            </div>
          </div>
          <div className="vm-card mission">
            <div className="vm-icon-wrapper">
              <Rocket size={32} />
            </div>
            <div className="vm-content">
              <h3>Our Mission</h3>
              <p>
                To provide affordable, high-quality education through innovative
                teaching methods, expert faculty, and a supportive community that
                nurtures lifelong learners.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function FounderSection() {
  return (
    <section className="founder section section-alt">
      <div className="container">
        <div className="founder-wrapper">
          <div className="founder-quote-container">
            <Quote size={48} className="quote-icon" />
            <blockquote className="founder-quote">
              "Education is the most powerful weapon which you can use to change the world.
              At Zeducators, we strive to wield this power with responsibility, creativity,
              and compassion."
            </blockquote>
            <div className="founder-signature">
              <div className="founder-details">
                <h4>Leadership Team</h4>
                <span>Zeducators</span>
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
      title: 'Inception',
      description: 'The idea of Zeducators was conceived to address the gaps in accessible quality education.',
      icon: Lightbulb
    },
    {
      year: '2020',
      title: 'Launch',
      description: 'We launched our digital platform, reaching our first cohort of eager learners.',
      icon: Rocket
    },
    {
      year: '2021',
      title: 'Growth',
      description: 'Expanded our course offerings and grew our community to over 5,000 students.',
      icon: TrendingUp
    },
    {
      year: '2023',
      title: 'Innovation',
      description: 'Integrated AI-driven tools to personalize the learning experience for every student.',
      icon: Zap
    }
  ]

  return (
    <section className="timeline section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Our Journey</span>
          <h2>The <span className="text-gradient">Path We've Traveled</span></h2>
          <p>A timeline of our milestones and the impact we've made along the way.</p>
        </div>
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {timeline.map((item, index) => (
            <div key={index} className={`timeline-row ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content-wrapper">
                <div className="timeline-date">{item.year}</div>
                <div className="timeline-card">
                  <div className="timeline-icon-box">
                    <item.icon size={20} />
                  </div>
                  <span className="timeline-year-badge">{item.year}</span>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
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
      description: 'Breaking barriers to make education accessible to everyone, everywhere.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Embracing new technologies and methods to enhance learning outcomes.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'Upholding the highest standards of honesty and ethics in all our interactions.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Striving for the highest quality in our content, teaching, and support.'
    }
  ]

  return (
    <section className="values section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="badge">Our Values</span>
          <h2>What We <span className="text-gradient">Stand For</span></h2>
          <p>The core principles that guide our mission and culture.</p>
        </div>
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon-wrapper">
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
      title: 'Student-Centric',
      description: 'We design every aspect of our curriculum with the student\'s needs in mind.'
    },
    {
      icon: Handshake,
      title: 'Collaborative',
      description: 'We believe in the power of community and peer-to-peer learning.'
    },
    {
      icon: CheckCircle2,
      title: 'Result-Oriented',
      description: 'Our focus is on tangible outcomes and real-world skill application.'
    }
  ]

  return (
    <section className="approach section">
      <div className="container">
        <div className="approach-wrapper">
          <div className="approach-header-side">
            <span className="badge">Our Approach</span>
            <h2>Methodology for <span className="text-gradient">Success</span></h2>
            <p>
              We combine traditional pedagogical wisdom with modern technology to create
              a learning experience that is both effective and engaging.
            </p>
            <Link to="/courses" className="btn btn-primary">
              View Our Courses <ArrowRight size={18} />
            </Link>
          </div>
          <div className="approach-cards-side">
            {approaches.map((item, index) => (
              <div key={index} className="approach-card-horizontal">
                <div className="approach-icon-box">
                  <item.icon size={24} />
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="about-cta">
      <div className="container">
        <div className="cta-box">
          <h2>Ready to Start Learning?</h2>
          <p>Join Zeducators today and take the first step towards a brighter future.</p>
          <div className="cta-buttons">
            <Link to="/courses" className="btn btn-primary-inverse">
              Get Started
            </Link>
            <Link to="/contact" className="btn btn-outline-inverse">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

