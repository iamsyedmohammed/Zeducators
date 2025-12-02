import { Link } from 'react-router-dom'
import { Sparkles, ArrowRight } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="hero section-dark">
            <div className="hero-bg">
                <div className="hero-gradient-orb orb-1"></div>
                <div className="hero-gradient-orb orb-2"></div>
                <div className="hero-grid-pattern"></div>
            </div>
            <div className="container hero-container">
                <div className="hero-content">
                    {/* <div className="hero-badge animate-fade-in-up">
                        <Sparkles size={16} />
                        <span>India's Trusted Learning Platform</span>
                    </div> */}
                    <h1 className="hero-title animate-fade-in-up stagger-1">
                        Where Future <span className="text-gradient">Achievers</span> Begin Their Journey
                    </h1>
                    <p className="hero-description animate-fade-in-up stagger-2">
                        Zeducators is an innovative learning platform offering expert coaching in
                        <strong> STEM+M</strong> and languages, combining modern teaching methods with
                        personalized learning to foster academic success and holistic student development.
                    </p>
                    <div className="hero-actions animate-fade-in-up stagger-3">
                        <Link to="/courses" className="btn btn-primary">
                            Explore Courses <ArrowRight size={18} />
                        </Link>
                        {/* <Link to="/about" className="btn btn-outline">
              <Play size={18} /> Watch Our Story
            </Link> */}
                    </div>
                </div>
                <div className="hero-visual animate-fade-in-up stagger-2">
                    <div className="hero-image-container">
                        <img
                            src="/hero-students.png"
                            alt="Students learning online"
                            className="hero-img"
                        />
                    </div>
                </div>
            </div>
            <div className="hero-wave">
                <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
                    <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="white" />
                </svg>
            </div>
        </section>
    )
}
