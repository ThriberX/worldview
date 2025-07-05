import HeroSection from "@/components/sections/hero-section"
import Navbar from "@/components/layout/navbar"
import ServicesSection from "@/components/sections/services-section"
import TopDestinationsSection from "@/components/sections/TopDestinations"
import CarRentalShowcase from "@/components/sections/CarRentalShowcase"
import ExperienceSection from "@/components/sections/ExperienceSection"
import Footer from "@/components/layout/footer"

export default function LandingPage() {
    return (
      <main>
        <Navbar/>
        <HeroSection/>
        <ServicesSection/>
        <TopDestinationsSection />
        <CarRentalShowcase />
        <ExperienceSection />
        <Footer />
      </main>
    )
}