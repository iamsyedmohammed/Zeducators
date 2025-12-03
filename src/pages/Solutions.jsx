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
  Globe,
  Zap,
  Layers
} from 'lucide-react'
import './Solutions.css'

import SEO from '../components/SEO'

export default function Solutions() {
  return (
    <div className="solutions-page">
      <SEO
        title="Solutions"
        description="Educational solutions for institutions and corporations, including training, research support, and EdTech integration. Partner with Zeducators."
        canonical="/solutions"
      />
      <HeroSection />
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
        {/* Background elements handled by CSS */}
      </div>
      <div className="container">
        <div className="solutions-hero-content">
          <span className="badge animate-fade-in-up">Our Solutions</span>
          <h1 className="animate-fade-in-up stagger-1">
            Innovating for a <span className="text-gradient">Smarter Future</span>
          </h1>
          <p className="animate-fade-in-up stagger-2">
            We provide cutting-edge educational and technological solutions tailored for
            institutions, corporations, and research organizations.
          </p>
        </div>
      </div>
      <div className="solutions-hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="#c9c9bf" />
        </svg>
      </div>
    </section>
  )
}

function SolutionsSection() {
  const solutions = [
    {
      icon: Building2,
      title: 'Corporate Training',
      description: 'Empower your workforce with customized training programs designed to bridge skill gaps and drive organizational growth.',
      features: [
        'Leadership Development',
        'Technical Upskilling',
        'Soft Skills Workshops',
        'Team Building Activities'
      ],
      color: 'olive'
    },
    {
      icon: FlaskConical,
      title: 'Research Support',
      description: 'End-to-end guidance for academic and industrial research projects, fostering innovation and scientific discovery.',
      features: [
        'Grant Writing Assistance',
        'Data Analysis Services',
        'Publication Support',
        'Prototype Development'
      ],
      color: 'golden'
    },
    {
      icon: Cpu,
      title: 'EdTech Solutions',
      description: 'Transforming traditional classrooms with state-of-the-art technology, including AI, robotics, and smart learning systems.',
      features: [
        'LMS Implementation',
        'Virtual Labs',
        'AI-Powered Tutoring',
        'Smart Classroom Setup'
      ],
      color: 'brown'
    }
  ]

  return (
    <section className="solutions-main section">
      <div className="container">
        <div className="section-header">
          <span className="badge">What We Offer</span>
          <h2>Comprehensive <span className="text-gradient">Solutions</span></h2>
          <p>Tailored services to meet the diverse needs of the modern education ecosystem.</p>
        </div>
        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className={`solution-icon-box ${solution.color}`}>
                <solution.icon size={32} />
              </div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
              <ul className="solution-features-list">
                {solution.features.map((feature, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-link">
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function TechnologiesSection() {
  const technologies = [
    { icon: Brain, name: 'AI & ML', description: 'Intelligent systems for personalized learning.' },
    { icon: Bot, name: 'Robotics', description: 'Hands-on automation and engineering education.' },
    { icon: Layers, name: 'IoT', description: 'Connected campuses and smart infrastructure.' },
    { icon: BarChart3, name: 'Data Analytics', description: 'Actionable insights for performance improvement.' },
    { icon: Globe, name: 'Cloud Computing', description: 'Scalable and accessible learning platforms.' },
    { icon: Zap, name: 'AR / VR', description: 'Immersive experiences for deeper engagement.' }
  ]

  return (
    <section className="technologies section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="badge">Our Tech Stack</span>
          <h2>Powered by <span className="text-gradient">Innovation</span></h2>
          <p>Leveraging the latest technologies to deliver impactful solutions.</p>
        </div>
        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-icon">
                <tech.icon size={28} />
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
      title: 'Consultation',
      description: 'We listen to your needs and understand your specific challenges.',
      icon: Users
    },
    {
      number: '02',
      title: 'Strategy',
      description: 'We design a tailored roadmap to achieve your objectives.',
      icon: Target
    },
    {
      number: '03',
      title: 'Implementation',
      description: 'We execute the plan with precision and regular updates.',
      icon: Cog
    },
    {
      number: '04',
      title: 'Support',
      description: 'We provide ongoing maintenance and optimization.',
      icon: Rocket
    }
  ]

  return (
    <section className="process section">
      <div className="container">
        <div className="section-header">
          <span className="badge">Our Process</span>
          <h2>From Concept to <span className="text-gradient">Reality</span></h2>
          <p>A proven workflow that ensures success at every stage.</p>
        </div>
        <div className="process-steps">
          {steps.map((step, index) => (
            <div key={index} className="process-step-card">
              <div className="step-header">
                <span className="step-number">{step.number}</span>
                <div className="step-icon-wrapper">
                  <step.icon size={24} />
                </div>
              </div>
              <h4>{step.title}</h4>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="solutions-cta">
      <div className="container">
        <div className="cta-box">
          <h2>Ready to Transform Your Organization?</h2>
          <p>Let's collaborate to build a brighter, smarter future together.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary-inverse">
              Get in Touch <ArrowRight size={18} />
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

