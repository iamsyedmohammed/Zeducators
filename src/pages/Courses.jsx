import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  GraduationCap,
  Calculator,
  FlaskConical,
  Atom,
  BookOpen,
  Code,
  Languages,
  Briefcase,
  Target,
  Users,
  Monitor,
  UserCheck,
  Shield,
  MessageCircle,
  ArrowRight,
  Filter,
  Search,
  Clock,
  Star,
  ChevronRight
} from 'lucide-react'
import './Courses.css'

export default function Courses() {
  return (
    <div className="courses-page">
      <HeroSection />
      <CoursesSection />
      <WhyChooseSection />
      <CTASection />
    </div>
  )
}

function HeroSection() {
  return (
    <section className="courses-hero section-dark">
      <div className="courses-hero-bg">
        <div className="hero-gradient-orb orb-1"></div>
        <div className="hero-gradient-orb orb-2"></div>
      </div>
      <div className="container">
        <div className="courses-hero-content">
          <span className="badge animate-fade-in-up">Our Courses</span>
          <h1 className="animate-fade-in-up stagger-1">
            Explore Our <span className="text-gradient">Courses</span>
          </h1>
          <p className="animate-fade-in-up stagger-2">
            Academic, competitive, and skill-based courses designed to build
            strong foundations and future-ready learners.
          </p>
        </div>
      </div>
      <div className="courses-hero-wave">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,60 C360,120 720,0 1080,60 C1260,90 1380,75 1440,60 L1440,120 L0,120 Z" fill="#c9c9bf" />
        </svg>
      </div>
    </section>
  )
}

function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Courses', icon: BookOpen },
    { id: 'academic', label: 'Academic', icon: GraduationCap },
    { id: 'competitive', label: 'Competitive', icon: Target },
    { id: 'it', label: 'IT & Coding', icon: Code },
    { id: 'language', label: 'Languages', icon: Languages },
    { id: 'management', label: 'Management', icon: Briefcase }
  ]

  const courses = [
    // Academic Coaching
    {
      id: 1,
      category: 'academic',
      title: 'Tuition All Subjects',
      subtitle: '11th – 12th Grade',
      grade: '11th – 12th Grade',
      description: 'Comprehensive coaching for all subjects with focus on board exam preparation and conceptual clarity.',
      icon: GraduationCap,
      duration: '10 months',
      rating: 4.9,
      students: '2000+',
      color: 'blue',
      features: ['CBSE/ICSE/State Boards', 'Regular Tests', 'Doubt Sessions'],
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80'
    },
    {
      id: 2,
      category: 'academic',
      title: 'Tuition All Subjects',
      subtitle: '8th – 10th Grade',
      grade: '8th – 10th Grade',
      description: 'Strong foundation building with focus on concepts, problem-solving, and exam techniques.',
      icon: BookOpen,
      duration: '10 months',
      rating: 4.8,
      students: '3500+',
      color: 'green',
      features: ['All Boards', 'Weekly Assessments', 'Parent Connect'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
    },
    {
      id: 3,
      category: 'academic',
      title: 'Tuition All Subjects',
      subtitle: '1st – 7th Grade',
      grade: '1st – 7th Grade',
      description: 'Fun and engaging learning with activity-based teaching to develop curiosity and basic concepts.',
      icon: Star,
      duration: '10 months',
      rating: 4.9,
      students: '1800+',
      color: 'amber',
      features: ['Interactive Classes', 'Creative Learning', 'Progress Reports'],
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80'
    },
    {
      id: 4,
      category: 'academic',
      title: 'Mathematics',
      subtitle: '1st – 7th Grade',
      grade: '1st – 7th Grade',
      description: 'Building strong mathematical foundations through visual learning and practical problem-solving.',
      icon: Calculator,
      duration: 'Flexible',
      rating: 4.8,
      students: '1200+',
      color: 'coral',
      features: ['Mental Math', 'Vedic Mathematics', 'Fun Activities'],
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80'
    },
    {
      id: 5,
      category: 'academic',
      title: 'Mathematics',
      subtitle: '8th – 10th Grade',
      grade: '8th – 10th Grade',
      description: 'Comprehensive math coaching with focus on algebra, geometry, and board exam patterns.',
      icon: Calculator,
      duration: 'Flexible',
      rating: 4.9,
      students: '2500+',
      color: 'coral',
      features: ['Chapter-wise Tests', 'Formula Sheets', 'Practice Problems'],
      image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=800&q=80'
    },
    {
      id: 6,
      category: 'academic',
      title: 'Mathematics',
      subtitle: '11th – 12th Grade',
      grade: '11th – 12th Grade',
      description: 'Advanced mathematics covering calculus, statistics, and competitive exam preparation.',
      icon: Calculator,
      duration: 'Flexible',
      rating: 4.7,
      students: '1500+',
      color: 'coral',
      features: ['IIT Foundation', 'Board + Competitive', 'Previous Papers'],
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80'
    },
    {
      id: 7,
      category: 'academic',
      title: 'Science',
      subtitle: '1st – 7th Grade',
      grade: '1st – 7th Grade',
      description: 'Exploring the wonders of science through experiments, demonstrations, and curiosity-driven learning.',
      icon: FlaskConical,
      duration: 'Flexible',
      rating: 4.8,
      students: '1000+',
      color: 'green',
      features: ['Lab Experiments', 'Science Projects', 'Visual Learning'],
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80'
    },
    {
      id: 8,
      category: 'academic',
      title: 'Science',
      subtitle: '8th – 10th Grade',
      grade: '8th – 10th Grade',
      description: 'In-depth coverage of Physics, Chemistry, and Biology with practical applications.',
      icon: FlaskConical,
      duration: 'Flexible',
      rating: 4.9,
      students: '2800+',
      color: 'green',
      features: ['PCB Combined', 'Practical Sessions', 'NCERT Based'],
      image: 'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=800&q=80'
    },
    {
      id: 9,
      category: 'academic',
      title: 'Biology',
      subtitle: '11th & 12th Grade',
      grade: '11th & 12th Grade',
      description: 'Comprehensive biology coaching for board exams and NEET foundation.',
      icon: Atom,
      duration: 'Flexible',
      rating: 4.8,
      students: '900+',
      color: 'purple',
      features: ['NEET Oriented', 'Diagrams & Charts', 'NCERT Focus'],
      image: 'https://images.unsplash.com/photo-1532629345422-7515f3d16ba6?w=800&q=80'
    },
    {
      id: 10,
      category: 'academic',
      title: 'Chemistry',
      subtitle: '11th – 12th Grade',
      grade: '11th – 12th Grade',
      description: 'Master organic, inorganic, and physical chemistry with conceptual understanding.',
      icon: FlaskConical,
      duration: 'Flexible',
      rating: 4.7,
      students: '800+',
      color: 'blue',
      features: ['Organic Chemistry', 'Numericals', 'Reaction Mechanisms'],
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=800&q=80'
    },
    // Competitive Exams
    {
      id: 11,
      category: 'competitive',
      title: 'JEE Main & Advanced',
      subtitle: 'Engineering Entrance',
      grade: 'Engineering Entrance',
      description: 'Complete preparation for JEE with expert faculty, test series, and personalized guidance.',
      icon: Target,
      duration: '2 Years',
      rating: 4.9,
      students: '1500+',
      color: 'coral',
      features: ['Full Syllabus', 'Mock Tests', 'Rank Predictor'],
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80'
    },
    {
      id: 12,
      category: 'competitive',
      title: 'NEET Preparation',
      subtitle: 'Medical Entrance',
      grade: 'Medical Entrance',
      description: 'Focused NEET coaching with Biology emphasis and comprehensive PCB coverage.',
      icon: Target,
      duration: '2 Years',
      rating: 4.9,
      students: '1200+',
      color: 'green',
      features: ['NCERT Master', 'Test Series', 'Expert Faculty'],
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80'
    },
    {
      id: 13,
      category: 'competitive',
      title: 'EAMCET Coaching',
      subtitle: 'State Engineering/Medical',
      grade: 'State Engineering/Medical',
      description: 'Tailored preparation for EAMCET with focus on state-specific patterns.',
      icon: Target,
      duration: '1 Year',
      rating: 4.8,
      students: '800+',
      color: 'blue',
      features: ['State Syllabus', 'Previous Papers', 'Success Formula'],
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80'
    },
    {
      id: 14,
      category: 'competitive',
      title: 'CUET Preparation',
      subtitle: 'Central University Entrance',
      grade: 'Central University Entrance',
      description: 'Complete CUET coaching for arts, commerce, and science streams.',
      icon: Target,
      duration: '6 Months',
      rating: 4.7,
      students: '600+',
      color: 'amber',
      features: ['All Streams', 'General Test', 'Domain Subjects'],
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80'
    },
    // IT & Coding
    {
      id: 15,
      category: 'it',
      title: 'Python Programming',
      subtitle: 'Beginner to Advanced',
      grade: 'Beginner to Advanced',
      description: 'Learn Python from scratch with hands-on projects and real-world applications.',
      icon: Code,
      duration: '4 Months',
      rating: 4.9,
      students: '2000+',
      color: 'blue',
      features: ['Live Projects', 'Certificate', 'Placement Support'],
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4a18d5d?w=800&q=80'
    },
    {
      id: 16,
      category: 'it',
      title: 'Web Development',
      subtitle: 'Full Stack',
      grade: 'Full Stack',
      description: 'Master HTML, CSS, JavaScript, React, and backend technologies.',
      icon: Code,
      duration: '6 Months',
      rating: 4.8,
      students: '1500+',
      color: 'coral',
      features: ['Frontend + Backend', 'Portfolio Projects', 'Industry Ready'],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
    },
    {
      id: 17,
      category: 'it',
      title: 'Coding for Kids',
      subtitle: 'Age 8-14',
      grade: 'Age 8-14',
      description: 'Fun introduction to programming with Scratch, Python basics, and logic building.',
      icon: Code,
      duration: '3 Months',
      rating: 4.9,
      students: '800+',
      color: 'green',
      features: ['Game Development', 'Creative Coding', 'Problem Solving'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80'
    },
    // Language Learning
    {
      id: 18,
      category: 'language',
      title: 'Spoken English',
      subtitle: 'Fluency Program',
      grade: 'Fluency Program',
      description: 'Develop confidence in spoken English with regular practice and conversation sessions.',
      icon: Languages,
      duration: '3 Months',
      rating: 4.8,
      students: '3000+',
      color: 'purple',
      features: ['Daily Practice', 'Accent Training', 'Group Discussions'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80'
    },
    {
      id: 19,
      category: 'language',
      title: 'Grammar Mastery',
      subtitle: 'Foundation to Advanced',
      grade: 'Foundation to Advanced',
      description: 'Strong grammar foundation with focus on writing skills and error correction.',
      icon: Languages,
      duration: '2 Months',
      rating: 4.7,
      students: '1500+',
      color: 'blue',
      features: ['Writing Skills', 'Error Analysis', 'Practice Exercises'],
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&q=80'
    },
    {
      id: 20,
      category: 'language',
      title: 'Communication Skills',
      subtitle: 'Professional Development',
      grade: 'Professional Development',
      description: 'Enhance presentation, public speaking, and professional communication abilities.',
      icon: MessageCircle,
      duration: '2 Months',
      rating: 4.8,
      students: '1000+',
      color: 'coral',
      features: ['Public Speaking', 'Presentations', 'Interview Prep'],
      image: 'https://images.unsplash.com/photo-1543269664-7eef42226a21?w=800&q=80'
    },
    // Management
    {
      id: 21,
      category: 'management',
      title: 'Business Basics',
      subtitle: 'Foundation Course',
      grade: 'Foundation Course',
      description: 'Introduction to business concepts, finance basics, and entrepreneurial thinking.',
      icon: Briefcase,
      duration: '2 Months',
      rating: 4.6,
      students: '500+',
      color: 'amber',
      features: ['Case Studies', 'Business Plans', 'Financial Literacy'],
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    },
    {
      id: 22,
      category: 'management',
      title: 'Entrepreneurship',
      subtitle: 'Startup Ready',
      grade: 'Startup Ready',
      description: 'Learn to build, launch, and grow your own business idea with practical guidance.',
      icon: Briefcase,
      duration: '3 Months',
      rating: 4.7,
      students: '400+',
      color: 'green',
      features: ['Ideation', 'MVP Building', 'Pitch Deck'],
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80'
    },
    {
      id: 23,
      category: 'management',
      title: 'Soft Skills',
      subtitle: 'Career Ready',
      grade: 'Career Ready',
      description: 'Develop leadership, teamwork, time management, and professional etiquette.',
      icon: Users,
      duration: '1 Month',
      rating: 4.8,
      students: '700+',
      color: 'purple',
      features: ['Leadership', 'Team Building', 'Time Management'],
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
    }
  ]

  const filteredCourses = activeCategory === 'all'
    ? courses
    : courses.filter(course => course.category === activeCategory)

  return (
    <section className="courses-listing section">
      <div className="container">
        {/* Filter Tabs */}
        <div className="courses-filter">
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              <cat.icon size={18} />
              <span>{cat.label}</span>
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="courses-grid">
          {filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <div className="course-image-container">
                <div className="course-image">
                  <img src={course.image} alt={`${course.title} - ${course.subtitle}`} />
                  <div className="course-image-overlay"></div>
                </div>
                <div className="course-badge-top">
                  <span className="category-badge">
                    {categories.find(cat => cat.id === course.category)?.label || course.category}
                  </span>
                </div>
              </div>
              <div className="course-content">
                <div className="course-header">
                  <h3>{course.title}</h3>
                  <p className="course-grade">{course.grade || course.subtitle}</p>
                </div>
                <button className="course-read-more">
                  <span>Read more</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseSection() {
  const reasons = [
    {
      icon: Users,
      title: 'Small Batch Sizes',
      description: 'Limited students per batch ensures personalized attention and better learning outcomes.'
    },
    {
      icon: UserCheck,
      title: 'Personalized Mentoring',
      description: 'One-on-one guidance to address individual learning needs and career goals.'
    },
    {
      icon: Monitor,
      title: 'Smart Classrooms',
      description: 'Modern infrastructure with digital tools for interactive and engaging sessions.'
    },
    {
      icon: GraduationCap,
      title: 'Experienced Faculty',
      description: 'Learn from educators with proven track records and industry expertise.'
    },
    {
      icon: Shield,
      title: 'Safety & Hygiene',
      description: 'Clean, secure, and well-maintained learning environment for all students.'
    },
    {
      icon: MessageCircle,
      title: 'Parent-Teacher Interaction',
      description: 'Regular updates and meetings to keep parents informed about progress.'
    }
  ]

  return (
    <section className="why-choose section section-alt">
      <div className="container">
        <div className="section-header">
          <span className="badge">Why Choose Us</span>
          <h2>The Zeducators <span className="text-gradient">Advantage</span></h2>
          <p>What makes our courses stand out from the rest</p>
        </div>
        <div className="reasons-grid">
          {reasons.map((reason, index) => (
            <div key={index} className="reason-card">
              <div className="reason-icon">
                <reason.icon size={24} />
              </div>
              <div className="reason-content">
                <h4>{reason.title}</h4>
                <p>{reason.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTASection() {
  return (
    <section className="courses-cta">
      <div className="container">
        <div className="cta-box">
          <h2>Ready to Start Learning?</h2>
          <p>Get a free demo class and experience the Zeducators difference.</p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn btn-primary-inverse">
              Book Free Demo <ArrowRight size={18} />
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

