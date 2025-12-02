import { Link } from 'react-router-dom'
import { GraduationCap, Target, Code, Languages, Briefcase, ArrowRight } from 'lucide-react'

export default function CategoriesSection() {
    const categories = [
        {
            icon: GraduationCap,
            title: 'Academic Coaching',
            description: 'All Boards Courses, Classes for Grades 1 to 12',
            courses: ['CBSE', 'ICSE', 'State Boards', 'All Subjects'],
            color: 'blue'
        },
        {
            icon: Target,
            title: 'Competitive Exams',
            description: 'Preparation for entrance examinations',
            courses: ['JEE', 'NEET', 'EAMCET', 'CUET'],
            color: 'coral'
        },
        {
            icon: Code,
            title: 'IT & Computer',
            description: 'Technical skills for the digital age',
            courses: ['Python', 'Web Dev', 'Coding', 'Data Science'],
            color: 'green'
        },
        {
            icon: Languages,
            title: 'Language Learning',
            description: 'Master communication skills',
            courses: ['Spoken English', 'Grammar', 'Public Speaking'],
            color: 'purple'
        },
        {
            icon: Briefcase,
            title: 'Management Skills',
            description: 'Business and professional development',
            courses: ['Business Basics', 'Entrepreneurship', 'Soft Skills'],
            color: 'amber'
        }
    ]

    return (
        <section className="categories section section-alt">
            <div className="container">
                <div className="section-header">
                    <span className="badge badge-accent">Course Categories</span>
                    <h2>Explore Our <span className="text-gradient">Learning Paths</span></h2>
                    <p>From academic excellence to career readiness, we have courses tailored for every goal</p>
                </div>
                <div className="categories-grid">
                    {categories.map((category, index) => (
                        <div key={index} className={`category-card`}>
                            <div className={`category-icon ${category.color}`}>
                                <category.icon size={32} />
                            </div>
                            <div className="category-content">
                                <h3>{category.title}</h3>
                                <p>{category.description}</p>
                                <div className="category-tags">
                                    {category.courses.map((course, i) => (
                                        <span key={i} className="tag">{course}</span>
                                    ))}
                                </div>
                            </div>
                            <Link to="/courses" className="category-link">
                                <ArrowRight size={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
