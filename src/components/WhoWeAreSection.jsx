import { Link } from 'react-router-dom'
import { CheckCircle2, ArrowRight } from 'lucide-react'

export default function WhoWeAreSection() {
    return (
        <section className="who-we-are section section-alt">
            <div className="container">
                <div className="who-we-are-layout">
                    <div className="who-visual">
                        <div className="visual-card main-visual">
                            <div className="visual-overlay">
                                <h3>Empowering Learners Since 2019</h3>
                            </div>
                        </div>
                    </div>
                    <div className="who-content">
                        <span className="badge">Who We Are</span>
                        <h2>Blending Expert Coaching with <span className="text-gradient">Modern Tools</span></h2>
                        <p className="lead">
                            At Zeducators, we believe that quality education should be accessible to everyone.
                            Our platform combines experienced faculty, cutting-edge technology, and personalized
                            learning paths to create transformative educational experiences.
                        </p>
                        <div className="who-highlights">
                            <div className="highlight-item">
                                <CheckCircle2 size={20} className="icon-check" />
                                <span>Online Courses for Classes 8–12</span>
                            </div>
                            <div className="highlight-item">
                                <CheckCircle2 size={20} className="icon-check" />
                                <span>Personal Skills Development</span>
                            </div>
                            <div className="highlight-item">
                                <CheckCircle2 size={20} className="icon-check" />
                                <span>Industry-Recognized Certifications</span>
                            </div>
                            <div className="highlight-item">
                                <CheckCircle2 size={20} className="icon-check" />
                                <span>Communication & Logic Training</span>
                            </div>
                        </div>
                        <Link to="/about" className="btn btn-primary">
                            Our Story <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
