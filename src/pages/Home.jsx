import HeroSection from '../components/HeroSection'
import CategoriesSection from '../components/CategoriesSection'
import FeaturedCoursesSection from '../components/FeaturedCoursesSection'
import FeaturesSection from '../components/FeaturesSection'
import WhoWeAreSection from '../components/WhoWeAreSection'
import TestimonialsSection from '../components/TestimonialsSection'
import FAQSection from '../components/FAQSection'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <HeroSection />
      <CategoriesSection />
      <FeaturedCoursesSection />
      <FeaturesSection />
      <WhoWeAreSection />
      <TestimonialsSection />
      <FAQSection />
    </div>
  )
}
