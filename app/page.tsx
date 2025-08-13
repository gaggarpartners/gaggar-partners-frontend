import HeroSection from "@/components/hero-section"
import WelcomeSection from "@/components/welcome-section"
import ServicesPreview from "@/components/services-preview"
import KeyMembersPreview from "@/components/key-members-preview"
import CourtLinksSection from "@/components/court-links-section"
import NewsSnippets from "@/components/news-snippets"
import AwardsCarousel from "@/components/awards-carousel"
import TestimonialsCarousel from "@/components/testimonials-carousel"
import ContactPreview from "@/components/contact-preview"
import Chatbot from "@/components/chatbot"

export default function Home() {
  return (
    <div className="flex flex-col -mt-20 md:-mt-24 lg:-mt-28">
      <HeroSection />
      <WelcomeSection />
      <ServicesPreview />
      <KeyMembersPreview />
      <CourtLinksSection />
      {/* <NewsSnippets /> */}
      <AwardsCarousel />
      {/* <TestimonialsCarousel /> */}
      <ContactPreview />
      <Chatbot />
    </div>
  )
}
