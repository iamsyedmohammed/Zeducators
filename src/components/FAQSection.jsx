import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQSection() {
    const faqs = [
        {
            question: 'What classes do you offer courses for?',
            answer: 'We offer comprehensive courses for students from Classes 1 to 12, covering all major boards including CBSE, ICSE, and State Boards. Our primary focus is on Classes 8-12 for specialized coaching.'
        },
        {
            question: 'Which competitive exams do you prepare students for?',
            answer: 'We provide expert coaching for JEE (Main & Advanced), NEET, EAMCET, CUET, and other major entrance examinations with proven track records of success.'
        },
        {
            question: 'Do you offer online and offline learning options?',
            answer: 'Yes! We provide both online and offline learning modes. You can choose live online classes, recorded lectures, or attend our physical classrooms based on your preference.'
        },
        {
            question: 'What is STEM+M?',
            answer: 'STEM+M stands for Science, Technology, Engineering, Mathematics + Management. Our curriculum integrates these disciplines to provide holistic education that prepares students for future careers.'
        },
        {
            question: 'Can I take a demo class before enrolling?',
            answer: 'Absolutely! We offer free demo classes so you can experience our teaching methodology and interact with our faculty before making a decision.'
        },
        {
            question: 'Do you provide certifications?',
            answer: 'Yes, we provide industry-recognized certifications upon successful completion of our courses, which can add value to your academic and professional profile.'
        }
    ]

    const [openIndex, setOpenIndex] = useState(null)

    return (
        <section className="faq section section-alt">
            <div className="container">
                <div className="section-header">
                    <span className="badge">FAQ</span>
                    <h2>Frequently Asked <span className="text-gradient">Questions</span></h2>
                    <p>Everything you need to know about our courses and learning platform</p>
                </div>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${openIndex === index ? 'open' : ''}`}
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <div className="faq-question">
                                <h4>{faq.question}</h4>
                                <ChevronDown size={20} className="faq-icon" />
                            </div>
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
