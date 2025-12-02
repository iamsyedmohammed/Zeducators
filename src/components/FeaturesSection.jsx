import { Link } from 'react-router-dom'
import { UserCheck, Monitor, Target, Shield, Users, Clock, ArrowRight } from 'lucide-react'

export default function FeaturesSection() {
    const features = [
        {
            icon: UserCheck,
            title: 'Experienced Faculty',
            description: 'Learn from industry experts with years of teaching experience'
        },
        {
            icon: Monitor,
            title: 'Smart Classrooms',
            description: 'Modern learning environment with latest technology'
        },
        {
            icon: Target,
            title: 'Regular Assessments',
            description: 'Track progress with frequent tests and detailed feedback'
        },
        {
            icon: Shield,
            title: 'Safe Environment',
            description: 'Secure and supportive learning atmosphere for all'
        },
        {
            icon: Users,
            title: 'Small Batches',
            description: 'Personal attention with limited students per batch'
        },
        {
            icon: Clock,
            title: 'Flexible Learning',
            description: 'Both online and offline modes available'
        }
    ]

    return (
        <section className="features section">
            <div className="container">
                <div className="features-layout">
                    <div className="features-content">
                        <span className="badge">Why Choose Us</span>
                        <h2>A Learning Experience <span className="text-gradient">Like No Other</span></h2>
                        <p>
                            We combine traditional teaching excellence with modern methodologies
                            to create an environment where every student can thrive.
                        </p>
                        <Link to="/about" className="btn btn-primary">
                            Learn More About Us <ArrowRight size={18} />
                        </Link>
                    </div>
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                <div className="feature-icon">
                                    <feature.icon size={24} />
                                </div>
                                <div className="feature-text">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
