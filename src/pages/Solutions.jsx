import { Link } from 'react-router-dom'
import {
  Building2,
  FlaskConical,
  Cpu,
  Brain,
  Bot,
  Cog,
  BarChart3,
  Users,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle2,
  Rocket,
  GraduationCap,
  Globe,
  Award
} from 'lucide-react'
import './Solutions.css'

export default function Solutions() {
  return (
    <div className="solutions-page">
      <HeroSection />
      <StatsSection />
      <SolutionsSection />
      <TechnologiesSection />
      <ProcessSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="solutions-hero section-dark">
      <div className="solutions-hero-bg">
        <div className="hero-gradient-orb orb-1"></div>
        <div className="hero-gradient-orb orb-2"></div>
        <div className="hero-grid-pattern"></div>
      </div>
      <div className="container">
        <div className="solutions-hero-content">
          <span className="badge animate-fade-in-up">Our Solutions</span>
          <h1 className="animate-fade-in-up stagger-1">
            Smart <span className="text-gradient">Solutions</span>
          </h1>
          <p className="animate-fade-in-up stagger-2">
            Beyond standard courses, we offer tailored solutions for corporates,
            institutions, and research organizations to drive innovation and excellence.
          </p>
        </div>
      </div>
      <div className="solutions-hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}

function StatsSection() {
  return (
    <section className="stats-section section-alt">
      <div className="container">
        <div className="hero-stats animate-fade-in-up">
          <div className="hero-stat">
            <span className="stat-number">50+</span>
            <span className="stat-text">Corporate Partners</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">100+</span>
            <span className="stat-text">Projects Delivered</span>
          </div>
          <div className="hero-stat">
            <span className="stat-number">25+</span>
            <span className="stat-text">Tech Solutions</span>
          </div>
        </div>
      </div>
    </section>
  )
}

function SolutionsSection() {
  const solutions = [
    {
      icon: Building2,
      title: 'Corporate Training',
      description: 'Customized programs tailored to industry requirements and staff skill development. We help organizations build capable teams through structured learning interventions.',
      features: [
        'Custom Curriculum Design',
        'On-site & Remote Training',
        'Leadership Development',
        'Technical Upskilling',
        'Soft Skills Programs',
        'Assessment & Certification'
      ],
      color: 'blue',
      image: 'corporate'
    },
    {
      icon: FlaskConical,
      title: 'Project & Research Solutions',
      description: 'Support for academic and industrial research projects in collaboration with universities and corporate partners. From ideation to execution, we guide research initiatives.',
      features: [
        'Academic Research Support',
        'Industry Collaboration',
        'Data Analysis & Insights',
        'Publication Assistance',
        'Grant Writing Support',
        'Prototype Development'
      ],
      color: 'green',
      image: 'research'
    },
    {
      icon: Cpu,
      title: 'Technology Solutions',
      description: 'Edu-tech, AI, ML, ERP, Robotics, and business automation solutions for the future-ready education ecosystem. We build technology that transforms learning.',
      features: [
        'Learning Management Systems',
        'AI-Powered Tutoring',
        'Virtual Labs & Simulations',
        'Analytics Dashboards',
        'Mobile Learning Apps',
        'Integration Services'
      ],
      color: 'coral',
      image: 'tech'
    }
  ]

  return (
    <section className="solutions-main section">
      <div className="container">
        <div className="section-header">
          <span className="badge">What We Offer</span>
          <h2>Comprehensive <span className="text-gradient">Solutions</span></h2>
          <p>Tailored solutions that go beyond traditional education</p>
        </div>
        <div className="solutions-list">
          {solutions.map((solution, index) => (
            <div key={index} className={`solution-item ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className={`solution-visual ${solution.color}`}>
                <div className="visual-content">
                  <solution.icon size={64} />
                  <div className="visual-decoration"></div>
                </div>
              </div>
              <div className="solution-content">
                <div className={`solution-icon ${solution.color}`}>
                  <solution.icon size={28} />
                </div>
                <h3>{solution.title}</h3>
                <p className="solution-description">{solution.description}</p>
                <div className="solution-features">
                  {solution.features.map((feature, i) => (
                    <div key={i} className="solution-feature">
                      <CheckCircle2 size={18} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-primary">
                  Get Started <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechnologiesSection() {
  const technologies = [
    { icon: Brain, name: 'Edu-Tech', description: 'Modern educational technology solutions' },
    { icon: Bot, name: 'AI & ML', description: 'Artificial Intelligence & Machine Learning' },
    { icon: Cog, name: 'ERP Systems', description: 'Enterprise Resource Planning' },
    { icon: Cpu, name: 'Robotics', description: 'Robotics education & automation' },
    { icon: BarChart3, name: 'Analytics', description: 'Data-driven insights & reporting' },
    { icon: Globe, name: 'Web Solutions', description: 'Custom web applications' }
  ]

  return (
    <section className="technologies section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="badge badge-accent">Technologies</span>
          <h2>Powered by <span className="text-gradient">Innovation</span></h2>
          <p>Cutting-edge technologies that drive our solutions</p>
        </div>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card card">
              <div className="tech-icon">
                <tech.icon size={32} />
              </div>
              <h4>{tech.name}</h4>
              <p>{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProcessSection() {
  const steps = [
    {
      number: '01',
      title: 'Discovery',
      description: 'We understand your unique challenges, goals, and requirements through detailed consultations.',
      icon: Target
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'Our experts design a customized solution blueprint aligned with your objectives.',
      icon: Lightbulb
    },
    {
      number: '03',
      title: 'Development',
      description: 'We build and implement the solution with regular checkpoints and iterations.',
      icon: Cog
    },
    {
      number: '04',
      title: 'Delivery',
      description: 'Seamless deployment with training, support, and continuous improvement.',
      icon: Rocket
    }
  ]

  return (
    <section className="process section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Our Process</span>
          <h2>How We <span className="text-gradient">Work</span></h2>
          <p>A proven approach to delivering impactful solutions</p>
        </div>
        <div className="process-timeline">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{step.number}</div>
              <div className="step-content">
                <div className="step-icon">
                  <step.icon size={24} />
                </div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
              {index < steps.length - 1 && <div className="step-connector"></div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="solutions-cta section-dark">
      <div className="container">
        <div className="cta-grid">
          <div className="cta-content">
            <h2>Ready to Transform Your <span className="text-gradient">Organization?</span></h2>
            <p>
              Let's discuss how our solutions can help you achieve your goals.
              Schedule a free consultation with our experts today.
            </p>
            <div className="cta-features">
              <div className="cta-feature">
                <CheckCircle2 size={20} />
                <span>Free Consultation</span>
              </div>
              <div className="cta-feature">
                <CheckCircle2 size={20} />
                <span>Custom Solutions</span>
              </div>
              <div className="cta-feature">
                <CheckCircle2 size={20} />
                <span>Expert Support</span>
              </div>
            </div>
          </div>
          <div className="cta-actions-box">
            <h3>Get in Touch</h3>
            <p>Our team is ready to help you succeed</p>
            <Link to="/contact" className="btn btn-primary btn-lg">
              Contact Us <ArrowRight size={18} />
            </Link>
            <a href="tel:+919966002827" className="cta-phone">
              Or call: +91 9966002827
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

