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
    GraduationCap
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

                {/* Tabs Section */}
                <div className="course-tabs">
                    <div className="tabs-header">
                        <button
                            className={`tab-btn ${activeTab === 'description' ? 'active' : ''}`}
                            onClick={() => setActiveTab('description')}
                        >
                            Description
                        </button>
                    </div>

                    <div className="tab-content">
                        {activeTab === 'description' && (
                            <div className="description-content">
                                <h2><GraduationCap className="inline-icon" size={28} /> Class 11–12 All Subjects In-Class Tuition Program | Zeducators</h2>

                                <p>{course.fullDescription || course.description}</p>

                                <p>Whether you're preparing for board exams or competitive entrance tests, our comprehensive curriculum, doubt-clearing sessions, and personalized guidance ensure your academic success across <strong>Physics, Chemistry, Math, Biology, English, Accountancy, Economics</strong>, and more.</p>

                                <h3><GraduationCap className="inline-icon" size={24} /> Class 11–12 All Subjects In-Class Tuition Program | Zeducators</h3>
                                <p>Excel in senior secondary academics with Zeducators' expert-led <strong>all subjects tuition for Classes 11 and 12</strong>. Designed for science and commerce streams, this <strong>offline, in-class program</strong> offers <strong>36+ hours of focused learning every month</strong>, delivered by experienced subject teachers in evening batches.</p>

                                <div className="content-highlights">
                                    <h3><BookOpen className="inline-icon" size={24} /> Program Highlights:</h3>
                                    <ul>
                                        <li><strong>Grade:</strong> {course.grade}</li>
                                        <li><strong>Streams Covered:</strong> Science & Commerce</li>
                                        <li><strong>Subjects:</strong> Physics, Chemistry, Math, Biology, English, Accountancy, Economics, BST</li>
                                        <li><strong>Mode:</strong> Offline (In-class)</li>
                                        <li><strong>Batch Timing:</strong> Evening</li>
                                        <li><strong>Monthly Hours:</strong> 36+ hours</li>
                                        <li><strong>Location:</strong> Zeducators Learning Center</li>
                                    </ul>
                                </div>

                                <div className="why-choose-box">
                                    <h3><CheckCircle2 className="inline-icon green" size={24} /> Why Choose Zeducators?</h3>
                                    <ul>
                                        <li>Expert faculty for each stream-specific subject</li>
                                        <li>Board + competitive exam integration</li>
                                        <li>Small batches for personalized attention</li>
                                        <li>Weekly tests & progress tracking</li>
                                        <li>Real-time doubt solving and revision support</li>
                                    </ul>
                                    <p><strong>Zeducators empowers Class 11 & 12 students with structured, quality education across all subjects — helping them achieve academic and competitive excellence.</strong></p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Related Courses */}
                <div className="related-products">
                    <h2>Related Courses</h2>
                    <div className="related-grid">
                        {relatedCourses.map(related => (
                            <div key={related.id} className="related-card">
                                <div className="related-image">
                                    <img src={related.image} alt={related.title} />
                                    <div className="related-overlay">
                                        <div className="related-badges">
                                            <div className="badge-icon"><GraduationCap size={16} /></div>
                                        </div>
                                        <div className="related-title-overlay">
                                            <h3>{related.title}</h3>
                                            <p>({related.grade})</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="related-content">
                                    <span className="related-category">{related.category}</span>
                                    <h4>{related.title} ({related.grade})</h4>
                                    <Link to={`/courses/${related.slug}`} className="btn-read-more">
                                        Read more
                                    </Link>
                                </div>
                            </div>
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
