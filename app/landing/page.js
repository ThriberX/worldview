import HeroSection from "@/components/sections/hero-section"
import Navbar from "@/components/layout/navbar"
import ServicesSection from "@/components/sections/services-section"

export default function LandingPage() {
    return (
      <main>
        <Navbar/>
        <HeroSection/>
        <ServicesSection/>
      </main>
    )
}