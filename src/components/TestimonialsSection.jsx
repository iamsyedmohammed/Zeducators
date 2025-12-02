import { Star } from 'lucide-react'

export default function TestimonialsSection() {
    const testimonials = [
        {
            name: 'Anjali Verma',
            role: 'Class 10 Student',
            avatar: 'A',
            quote: 'Zeducators made learning fun and interactive. My grades improved significantly, and I feel more confident about my exams now.',
            rating: 5
        },
        {
            name: 'Rohit Mehta',
            role: 'NEET Aspirant',
            avatar: 'R',
            quote: 'The faculty here is exceptional. Their guidance helped me crack NEET with a great score. The practice tests were incredibly helpful.',
            rating: 5
        },
        {
            name: 'Priya Sharma',
            role: 'Parent (Class 9)',
            avatar: 'P',
            quote: 'As a parent, I appreciate the regular updates and the safe learning environment. My child has shown remarkable improvement.',
            rating: 5
        },
        {
            name: 'Aditya Singh',
            role: 'CUET Aspirant',
            avatar: 'S',
            quote: 'The CUET preparation course was comprehensive and well-structured. The mentors were always available to clear doubts.',
            rating: 5
        },
        {
            name: 'Nidhi Patel',
            role: 'Class 11 Commerce',
            avatar: 'N',
            quote: 'I love how Zeducators combines theory with practical examples. It makes understanding complex topics so much easier.',
            rating: 5
        },
        {
            name: 'Karan Desai',
            role: 'JEE Aspirant',
            avatar: 'K',
            quote: 'The personalized attention and regular mock tests helped me improve my JEE rank significantly. The teachers are patient and explain concepts clearly.',
            rating: 5
        }
    ]

    return (
        <section className="testimonials section">
            <div className="container">
                <div className="section-header">
                    <span className="badge">Success Stories</span>
                    <h2>What Our <span className="text-gradient">Students Say</span></h2>
                    <p>Join thousands of successful learners who transformed their academic journey with us</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card card">
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="currentColor" />
                                ))}
                            </div>
                            <p className="testimonial-quote">"{testimonial.quote}"</p>
                            <div className="testimonial-author">
                                <div className="author-avatar">{testimonial.avatar}</div>
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
