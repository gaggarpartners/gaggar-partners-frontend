import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServicesPreview() {
  const services = [
    {
      title: "Anti-Trust / Competition",
      description: "Expert guidance on competition law, cartel investigations, and regulatory compliance.",
      icon: "scale",
      slug: "anti-trust-competition",
    },
    {
      title: "Business & Corporate Laws",
      description: "Comprehensive corporate legal support for M&A, compliance, and business growth.",
      icon: "building",
      slug: "business-corporate-laws",
    },
    {
      title: "Claims & Disputes",
      description: "Strategic litigation and dispute resolution across all judicial forums.",
      icon: "gavel",
      slug: "claims-disputes",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-legal-pattern-subtle rounded-3xl mx-4 my-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl   font-bold mb-6 text-[#0C2340]">Our Services</h2>
          <p className="text-lg text-gray-700">
            We offer a comprehensive range of legal services tailored to meet the diverse needs of our clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {services.map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="group p-6 rounded-lg border bg-white border-gray-200 hover:border-[#CBA135]/30 hover:shadow-lg hover:-translate-y-2 flex flex-col items-center text-center transition-all duration-300 transform hover:scale-105"
            >
              <div className="w-12 h-12 rounded-lg bg-[#0C2340]/5 group-hover:bg-[#CBA135]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300">
                {service.icon === "scale" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#CBA135"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-scale group-hover:animate-pulse"
                  >
                    <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                    <path d="M7 21h10" />
                    <path d="M12 3v18" />
                    <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                  </svg>
                )}
                {service.icon === "building" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#CBA135"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-building group-hover:animate-pulse"
                  >
                    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
                    <path d="M9 22v-4h6v4" />
                    <path d="M8 6h.01" />
                    <path d="M16 6h.01" />
                    <path d="M12 6h.01" />
                    <path d="M12 10h.01" />
                    <path d="M12 14h.01" />
                    <path d="M16 10h.01" />
                    <path d="M16 14h.01" />
                    <path d="M8 10h.01" />
                    <path d="M8 14h.01" />
                  </svg>
                )}
                {service.icon === "gavel" && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#CBA135"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-gavel group-hover:animate-pulse"
                  >
                    <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10" />
                    <path d="m16 16 6-6" />
                    <path d="m8 8 6-6" />
                    <path d="m9 7 8 8" />
                    <path d="m21 11-8-8" />
                  </svg>
                )}
              </div>
              <h3 className="text-lg   font-medium mb-3 text-center group-hover:text-[#CBA135] transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 text-center leading-relaxed group-hover:text-gray-800 transition-colors">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="text-center -mt-2">
          <Button
            asChild
            className="bg-[#0C2340] hover:bg-[#0C2340]/90 hover:scale-105 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
          >
            <Link href="/our-services" className="flex items-center">
              View All Services
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
