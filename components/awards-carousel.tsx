"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const awards = [
  {
    id: 1,
    title: "IBLJ Sports & Gaming Law Firm of the Year 2025",
    image: "/images/awards/iblj-2025-sports-gaming.png",
    year: "2025",
    category: "Sports & Gaming",
  },
  {
    id: 2,
    title: "Benchmark Litigation Asia-Pacific Awards 2022",
    image: "/images/awards/benchmark-litigation-2022.png",
    year: "2022",
    category: "Litigation",
  },
  {
    id: 3,
    title: "IBLJ Sports & Gaming Law Firm of the Year 2022",
    image: "/images/awards/iblj-2022-sports-gaming.png",
    year: "2022",
    category: "Sports & Gaming",
  },
  {
    id: 4,
    title: "Acquisition International Legal Awards 2018",
    image: "/images/awards/acquisition-international-2018.png",
    year: "2018",
    category: "Legal Excellence",
  },
  {
    id: 5,
    title: "Intercontinental Finance Magazine Awards 2018",
    image: "/images/awards/intercontinental-2018.png",
    year: "2018",
    category: "Finance",
  },
  {
    id: 6,
    title: "Lawyers Worldwide Awards 2018",
    image: "/images/awards/lawyers-worldwide-2018.png",
    year: "2018",
    category: "Legal Services",
  },
  {
    id: 7,
    title: "Deal Maker Awards 2018",
    image: "/images/awards/dealmaker-2018.png",
    year: "2018",
    category: "Deal Making",
  },
  {
    id: 8,
    title: "Finance Monthly Law Awards 2018",
    image: "/images/awards/finance-monthly-2018.png",
    year: "2018",
    category: "Finance Law",
  },
  {
    id: 9,
    title: "Lawyers Global Awards 2018",
    image: "/images/awards/lawyers-global-2018.png",
    year: "2018",
    category: "Global Recognition",
  },
  {
    id: 10,
    title: "Corporate INTL Legal Awards 2017",
    image: "/images/awards/corporate-intl-2017.png",
    year: "2017",
    category: "Corporate Law",
  },
  {
    id: 11,
    title: "Leadership Excellence Awards 2017",
    image: "/images/awards/leadership-excellence-2017.png",
    year: "2017",
    category: "Leadership",
  },
  {
    id: 12,
    title: "Lawyer Issue Awards 2017",
    image: "/images/awards/lawyer-issue-2017.png",
    year: "2017",
    category: "Legal Innovation",
  },
]

export default function AwardsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerSlide, setItemsPerSlide] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerSlide(1) // Mobile: 1 item
      } else if (window.innerWidth < 1024) {
        setItemsPerSlide(2) // Tablet: 2 items
      } else {
        setItemsPerSlide(3) // Desktop: 3 items
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const totalSlides = Math.ceil(awards.length / itemsPerSlide)

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
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [totalSlides])

  const getCurrentSlideItems = () => {
    const startIndex = currentIndex * itemsPerSlide
    return awards.slice(startIndex, startIndex + itemsPerSlide)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl   font-bold text-[#0C2340] mb-4">
            Our Awards & Recognition
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Celebrating excellence in legal services with prestigious awards and recognition from industry leaders
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
                  <div
                    className={`grid gap-6 ${
                      itemsPerSlide === 1
                        ? "grid-cols-1"
                        : itemsPerSlide === 2
                          ? "grid-cols-2"
                          : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                    }`}
                  >
                    {awards.slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide).map((award) => (
                      <Card
                        key={award.id}
                        className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 bg-white border-0 shadow-lg"
                      >
                        <CardContent className="p-6">
                          <div className="relative mb-4 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 p-4">
                            <Image
                              src={award.image || "/placeholder.svg"}
                              alt={award.title}
                              width={300}
                              height={200}
                              className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute top-2 right-2 bg-[#D4AF37] text-[#0C2340] px-3 py-1 rounded-full text-sm font-semibold">
                              {award.year}
                            </div>
                          </div>
                          <div className="space-y-2">
                            <h3 className="font-semibold text-[#0C2340] text-lg leading-tight group-hover:text-[#D4AF37] transition-colors duration-300">
                              {award.title}
                            </h3>
                            <p className="text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full inline-block">
                              {award.category}
                            </p>
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
            aria-label="Previous awards"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm border-2 border-[#D4AF37]/30 hover:bg-[#D4AF37] hover:text-white transition-all duration-300 shadow-lg z-10"
            onClick={nextSlide}
            aria-label="Next awards"
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
      </div>
    </section>
  )
}
