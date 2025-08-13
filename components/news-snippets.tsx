"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const publications = [
  {
    id: 1,
    title: "Car Consumers Rights",
    description:
      "Understanding consumer protection laws in the automotive sector and legal remedies available to buyers.",
    image: "/images/media/car-consumers-rights.png",
    category: "Consumer Rights",
    date: "2024",
    link: "#",
  },
  {
    id: 2,
    title: "Mera Ghar Mera Haq",
    description: "Comprehensive guide to homebuyer rights and legal protections under RERA and consumer laws.",
    image: "/images/media/mera-ghar-mera-haq.png",
    category: "Real Estate",
    date: "2024",
    link: "#",
  },
  {
    id: 3,
    title: "Behaal Homebuyer",
    description: "Legal analysis of homebuyer distress and available legal remedies in real estate disputes.",
    image: "/images/media/behaal-homebuyer.png",
    category: "Real Estate",
    date: "2023",
    link: "#",
  },
  {
    id: 4,
    title: "RERA Special Edition",
    description: "In-depth coverage of Real Estate Regulatory Authority provisions and their practical implications.",
    image: "/images/media/rera-special.png",
    category: "Regulatory",
    date: "2023",
    link: "#",
  },
  {
    id: 5,
    title: "Gambling Legal Framework",
    description: "Comprehensive analysis of gaming and gambling laws in India and regulatory compliance requirements.",
    image: "/images/media/gambling-legal.png",
    category: "Gaming Law",
    date: "2023",
    link: "#",
  },
]

export default function NewsSnippets() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(2)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1) // Mobile: 1 item
      } else {
        setItemsPerSlide(2) // Tablet and Desktop: 2 items
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = Math.ceil(publications.length / itemsPerSlide)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [totalSlides])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-[#0C2340] mb-4">
            Publications & Media
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay informed with our latest publications, legal insights, and media coverage on contemporary legal issues
          </p>
        </div>

        <div className="relative">
          {/* Carousel Container */}
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-6 ${itemsPerSlide === 1 ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`}>
                    {publications
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((publication) => (
                        <Card
                          key={publication.id}
                          className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg overflow-hidden"
                        >
                          <div className="relative">
                            <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50">
                              <Image
                                src={publication.image || "/placeholder.svg"}
                                alt={publication.title}
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                              />
                              <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#0C2340] px-3 py-1 rounded-full text-sm font-semibold">
                                {publication.category}
                              </div>
                              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                                {publication.date}
                              </div>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <div className="space-y-4">
                              <h3 className="font-bold text-[#0C2340] text-xl leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                                {publication.title}
                              </h3>
                              <p className="text-gray-600 text-sm leading-relaxed">{publication.description}</p>
                              <Link
                                href={publication.link}
                                className="inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#0C2340] font-medium text-sm transition-colors duration-300 group/link"
                              >
                                Read More
                                <ExternalLink className="h-4 w-4 group-hover/link:translate-x-1 transition-transform duration-300" />
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-lg z-10"
            onClick={prevSlide}
            aria-label="Previous publications"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-lg z-10"
            onClick={nextSlide}
            aria-label="Next publications"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-[#D4AF37] scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button
            asChild
            className="bg-[#0C2340] hover:bg-[#0C2340]/90 text-white px-8 py-3 text-lg font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <Link href="/publications">View All Publications</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
