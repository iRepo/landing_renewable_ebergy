import Hero from "../components/Hero"
import Services from "../components/Services"
import Testimonials from "../components/Testimonials"
import CTA from "../components/CTA"
import CaseStudies from "@/components/CaseStudies"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Services />
      <CaseStudies />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}
