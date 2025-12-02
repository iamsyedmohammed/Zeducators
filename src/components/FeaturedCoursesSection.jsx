import { Link } from 'react-router-dom'
import { GraduationCap, BookOpen, Star, Calculator, FlaskConical, Atom, ArrowRight } from 'lucide-react'

export default function FeaturedCoursesSection() {
    const featuredCourses = [
        {
            title: 'Tuition all Subjects',
            subtitle: '11th – 12th Grade',
            category: 'Academic Coaching',
            grade: '11th – 12th Grade',
            icon: GraduationCap,
            color: 'blue',
            image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80'
        },
        {
            title: 'Tuition all Subjects',
            subtitle: '8th – 10th Grade',
            category: 'Academic Coaching',
            grade: '8th – 10th Grade',
            icon: BookOpen,
            color: 'green',
            image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
        },
        {
            title: 'Tuition all Subjects',
            subtitle: '1st – 7th Grade',
            category: 'Academic Coaching',
            grade: '1st – 7th Grade',
            icon: Star,
            color: 'amber',
            image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80'
        },
        {
            title: 'Math',
            subtitle: '1st – 7th Grade',
            category: 'Academic Coaching',
            grade: '1st – 7th Grade',
            icon: Calculator,
            color: 'coral',
            image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80'
        },
        {
            title: 'Math',
            subtitle: '8th – 10th Grade',
            category: 'Academic Coaching',
            grade: '8th – 10th Grade',
            icon: Calculator,
            color: 'coral',
            image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=800&q=80'
        },
        {
            title: 'Math',
            subtitle: '11th – 12th Grade',
            category: 'Academic Coaching',
            grade: '11th – 12th Grade',
            icon: Calculator,
            color: 'coral',
            image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
        },
        {
            title: 'Science',
            subtitle: '1st – 7th Grade',
            category: 'Academic Coaching',
            grade: '1st – 7th Grade',
            icon: FlaskConical,
            color: 'green',
            image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80'
        },
        {
            title: 'Science',
            subtitle: '8th to 10th Grade',
            category: 'Academic Coaching',
            grade: '8th to 10th Grade',
            icon: FlaskConical,
            color: 'green',
            image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&q=80'
        },
        {
            title: 'Biology',
            subtitle: '11th & 12th Grade',
            category: 'Academic Coaching',
            grade: '11th & 12th Grade',
            icon: Atom,
            color: 'purple',
            image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16ba6?w=800&q=80'
        },
        {
            title: 'Chemistry',
            subtitle: '11th – 12th Grade',
            category: 'Academic Coaching',
            grade: '11th – 12th Grade',
            icon: FlaskConical,
            color: 'blue',
            image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80'
        },
        {
            title: '11th – 12th Grade',
            subtitle: 'All Subjects',
            category: 'Academic Coaching',
            grade: '11th – 12th Grade',
            icon: GraduationCap,
            color: 'blue',
            image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80'
        }
    ]

    return (
        <section className="featured-courses section">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Featured Courses</span>
                    <h2>Featured <span className="text-gradient">Courses</span></h2>
                    <p>Explore our most popular academic coaching courses designed to build strong foundations</p>
                </div>
                <div className="featured-courses-grid">
                    {featuredCourses.map((course, index) => (
                        <div key={index} className="featured-course-card">
                            <div className="course-image-container">
                                <div className="course-image">
                                    <img src={course.image} alt={`${course.title} - ${course.subtitle}`} />
                                    <div className="course-image-overlay"></div>
                                </div>
                                <div className="course-badge-top">
                                    <span className="category-badge">{course.category}</span>
                                </div>
                            </div>
                            <div className="course-content">
                                <div className="course-header">
                                    <h3>{course.title}</h3>
                                    <p className="course-grade">{course.grade}</p>
                                </div>
                                <button className="course-read-more">
                                    <span>Read more</span>
                                    <ArrowRight size={20} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="featured-courses-cta">
                    <Link to="/courses" className="btn-primary btn-large">
                        View All Courses
                        <ArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </section>
    )
}
