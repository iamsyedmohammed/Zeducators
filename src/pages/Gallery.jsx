import React from 'react'
import './Gallery.css'

import SEO from '../components/SEO'

export default function Gallery() {
    const images = [
        { id: 1, src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Students learning' },
        { id: 2, src: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Classroom discussion' },
        { id: 3, src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Library study' },
        { id: 4, src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Online learning' },
        { id: 5, src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Group project' },
        { id: 6, src: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', alt: 'Student collaboration' },
    ]

    return (
        <div className="gallery-page">
            <SEO
                title="Gallery"
                description="View photos of our classrooms, events, and student life at Zeducators."
                canonical="/gallery"
            />
            <div className="container">
                <div className="section-header text-center">
                    <h2>Our Gallery</h2>
                    <p>Glimpses of life at Zeducators</p>
                </div>
                <div className="gallery-grid">
                    {images.map((image) => (
                        <div key={image.id} className="gallery-item">
                            <img src={image.src} alt={image.alt} loading="lazy" />
                            <div className="gallery-overlay">
                                <span>{image.alt}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
