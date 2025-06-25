import HeroSection from "@/components/sections/hero-section"
import Navbar from "@/components/layout/navbar"
import ServicesSection from "@/components/sections/services-section"
import TopDestinationsSection from "@/components/sections/TopDestinations"
import CarRentalShowcase from "@/components/sections/CarRentalShowcase"

export default function LandingPage() {
    return (
      <main>
        <Navbar/>
        <HeroSection/>
        <ServicesSection/>
        <TopDestinationsSection />
        <CarRentalShowcase />
      </main>
    )
}