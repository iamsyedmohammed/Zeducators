import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import './NotFound.css'
import SEO from '../components/SEO'

export default function NotFound() {
    return (
        <div className="not-found-page">
            <SEO title="Page Not Found" description="The page you are looking for does not exist." />
            <div className="container">
                <div className="not-found-content">
                    <h1 className="error-code">404</h1>
                    <h2>Page Not Found</h2>
                    <p>Oops! The page you are looking for seems to have wandered off.</p>
                    <div className="not-found-actions">
                        <button onClick={() => window.history.back()} className="btn btn-outline">
                            <ArrowLeft size={20} /> Go Back
                        </button>
                        <Link to="/" className="btn btn-primary">
                            <Home size={20} /> Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
