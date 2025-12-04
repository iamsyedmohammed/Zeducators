import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
    ArrowRight,
    CheckCircle2,
    Star,
    Search,
    MapPin,
    Clock,
    Calendar,
    Users,
    BookOpen,
    Monitor,
    GraduationCap,
    Target
} from 'lucide-react'
import { courses } from '../data/courses'
import './CourseDetails.css'

import SEO from '../components/SEO'

export default function CourseDetails() {
    const { courseSlug } = useParams()
    const [activeTab, setActiveTab] = useState('description')
    const [course, setCourse] = useState(null)
    const [relatedCourses, setRelatedCourses] = useState([])

    useEffect(() => {
        // Find course by Slug
        const foundCourse = courses.find(c => c.slug === courseSlug) || courses[0]
        setCourse(foundCourse)

        // Get related courses (same category, excluding current)
        const related = courses
            .filter(c => c.category === foundCourse.category && c.id !== foundCourse.id)
            .slice(0, 4)
        setRelatedCourses(related)

        // Scroll to top when course changes
        window.scrollTo(0, 0)
    }, [courseSlug])

    if (!course) return <div>Loading...</div>

    const courseSchema = {
        "@context": "https://schema.org",
        "@type": "Course",
        "name": course.title,
        "description": course.description,
        "provider": {
            "@type": "Organization",
            "name": "Zeducators",
            "sameAs": "https://zeducators.org"
        }
    }

    return (
        <div className="course-details-page">
            <SEO
                title={`${course.title} (${course.grade})`}
                description={course.description}
                canonical={`/courses/${course.slug}`}
                image={course.image}
                schema={courseSchema}
            />
            <div className="container">
                {/* Breadcrumbs */}
                <div className="breadcrumbs">
                    <Link to="/">Home</Link>
                    <span className="separator">/</span>
                    <Link to="/courses">Courses</Link>
                    <span className="separator">/</span>
                    <span className="current">{course.title}</span>
                </div>

                {/* Product Section */}
                <div className="product-section">
                    <div className="product-image-col">
                        <div className="product-image-wrapper">
                            <img src={course.image} alt={course.title} />
                            <div className="image-overlay-text">
                                <h2>{course.title}</h2>
                                <p>({course.grade})</p>
                            </div>
                        </div>
                    </div>

                    <div className="product-info-col">


                        <h1>{course.title} ({course.grade})</h1>

                        <div className="program-highlights-box">
                            <h3><BookOpen className="inline-icon" size={20} /> Program Highlights:</h3>

                            <div className="highlights-list">
                                {course.highlights ? (
                                    course.highlights.map((highlight, index) => {
                                        const [label, value] = highlight.split(': ')
                                        return (
                                            <div key={index} className="highlight-item">
                                                <strong>{label}:</strong> {value}
                                            </div>
                                        )
                                    })
                                ) : (
                                    // Fallback if no specific highlights
                                    <>
                                        <div className="highlight-item"><strong>Grade:</strong> {course.grade}</div>
                                        <div className="highlight-item"><strong>Duration:</strong> {course.duration}</div>
                                        <div className="highlight-item"><strong>Mode:</strong> Offline/Online</div>
                                        <div className="highlight-item"><strong>Rating:</strong> {course.rating}/5</div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="enroll-action">
                            <a href="tel:+919966002827" className="btn btn-primary btn-lg">
                                Enroll Now <ArrowRight size={20} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="course-content-wrapper">
                    <div className="content-main">
                        {/* About Course */}
                        <section className="content-block">
                            <h2 className="section-title">
                                <GraduationCap className="icon" size={24} />
                                About This Course
                            </h2>
                            <div className="description-text">
                                {course.fullDescription ? (
                                    course.fullDescription.split('\n\n').map((paragraph, idx) => (
                                        <p key={idx}>{paragraph}</p>
                                    ))
                                ) : (
                                    <p>{course.description}</p>
                                )}
                            </div>
                        </section>

                        {/* Key Features Grid */}
                        {course.features && course.features.length > 0 && (
                            <section className="content-block">
                                <h2 className="section-title">
                                    <Star className="icon" size={24} />
                                    Key Features
                                </h2>
                                <div className="features-grid">
                                    {course.features.map((feature, index) => (
                                        <div key={index} className="feature-card">
                                            <div className="check-icon">
                                                <CheckCircle2 size={20} />
                                            </div>
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </section>
                        )}

                        {/* Why Choose Us (Generic) */}
                        <section className="content-block why-choose-block">
                            <h2 className="section-title">
                                <Users className="icon" size={24} />
                                Why Choose Zeducators?
                            </h2>
                            <div className="benefits-grid">
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <Users size={24} />
                                    </div>
                                    <div className="benefit-text">
                                        <h4>Expert Faculty</h4>
                                        <p>Learn from educators with proven track records.</p>
                                    </div>
                                </div>
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <Target size={24} />
                                    </div>
                                    <div className="benefit-text">
                                        <h4>Exam Focus</h4>
                                        <p>Integrated preparation for boards and competitive exams.</p>
                                    </div>
                                </div>
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <Monitor size={24} />
                                    </div>
                                    <div className="benefit-text">
                                        <h4>Smart Learning</h4>
                                        <p>Modern infrastructure and digital tools.</p>
                                    </div>
                                </div>
                                <div className="benefit-item">
                                    <div className="benefit-icon">
                                        <Clock size={24} />
                                    </div>
                                    <div className="benefit-text">
                                        <h4>Personalized</h4>
                                        <p>Small batches ensuring individual attention.</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar / Additional Info (Optional - for layout balance) */}
                    {/* Currently keeping it single column for simplicity as per request, but structured for future sidebar */}
                </div>

                {/* Related Courses */}
                <div className="related-products-section">
                    <div className="section-header-center">
                        <h2>Explore Related Courses</h2>
                        <div className="header-underline"></div>
                    </div>
                    <div className="related-grid">
                        {relatedCourses.map(related => (
                            <Link to={`/courses/${related.slug}`} key={related.id} className="related-card-new">
                                <div className="related-image-new">
                                    <img src={related.image} alt={related.title} />
                                    <span className="related-badge">{related.category}</span>
                                </div>
                                <div className="related-content-new">
                                    <h4>{related.title}</h4>
                                    <p className="related-grade">{related.grade}</p>
                                    <div className="related-footer">
                                        <span className="read-more-link">
                                            View Details <ArrowRight size={16} />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <section className="course-cta-section">
                <div className="container">
                    <div className="cta-banner">
                        <h2>Ready to Start Learning?</h2>
                        <p>Get a free demo class and experience the Zeducators difference.</p>
                        <div className="cta-action-buttons">
                            <Link to="/contact" className="btn btn-white">
                                Book Free Demo <ArrowRight size={18} />
                            </Link>
                            <a href="tel:+919966002827" className="btn btn-outline-white">
                                Call +91 9966002827
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
