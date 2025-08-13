import Link from "next/link"
import { ServiceCard } from "@/components/service-card"

export default function OurServices() {
  const services = [
    {
      title: "Anti-Trust / Competition",
      description:
        "Expert guidance on competition law, cartel investigations, and regulatory compliance with deep understanding of India's antitrust landscape.",
      icon: "scale",
      slug: "anti-trust-competition",
    },
    {
      title: "Business & Corporate Laws",
      description:
        "Comprehensive corporate legal support for M&A, compliance, and business growth across diverse industry sectors.",
      icon: "building",
      slug: "business-corporate-laws",
    },
    {
      title: "Claims & Disputes",
      description:
        "Strategic litigation and dispute resolution across all judicial forums with solution-driven approach for optimal outcomes.",
      icon: "gavel",
      slug: "claims-disputes",
    },
    {
      title: "Gaming & Sports Laws",
      description:
        "Specialized legal services for gaming industry and sports organizations with forward-looking regulatory compliance strategies.",
      icon: "trophy",
      slug: "gaming-sports-laws",
    },
    {
      title: "Cyber Law & Cyber Security",
      description:
        "Data protection, cybersecurity compliance, and digital legal solutions for modern technology challenges and regulations.",
      icon: "shield",
      slug: "cyber-law-security",
    },
    {
      title: "Telecom & Broadcasting",
      description:
        "Regulatory approvals, compliance frameworks, and strategic advisory for telecom, broadcasting, and internet sectors.",
      icon: "radio",
      slug: "telecom-broadcasting",
    },
    {
      title: "Real Estate",
      description:
        "End-to-end real estate legal services from RERA compliance to complex transactions and property lifecycle management.",
      icon: "home",
      slug: "real-estate",
    },
    {
      title: "Environment Laws",
      description:
        "Environmental compliance, protection laws, and regulatory guidance for sustainable business operations and green initiatives.",
      icon: "leaf",
      slug: "environment-laws",
    },
    {
      title: "Media & Technology",
      description:
        "Broadcasting regulations, cyber laws, digital copyright, and technology convergence legal solutions for modern media landscape.",
      icon: "tv",
      slug: "media-technology",
    },
    {
      title: "Intellectual Property",
      description:
        "Comprehensive IP services across patents, trademarks, copyrights, and designs with strategic business-focused approach for innovation protection.",
      icon: "copyright",
      slug: "intellectual-property",
    },
    {
      title: "Financial & Advisory",
      description:
        "Investment banking, valuations, financial structuring, and strategic advisory services through our dedicated FAAA division with expert guidance.",
      icon: "landmark",
      slug: "financial-advisory",
    },
  ]

  return (
    <div className="bg-legal-pattern min-h-screen rounded-3xl mx-4 my-8">
      <div className="container mx-auto py-12 px-4 md:px-6">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-6 md:mb-8 text-[#0C2340]">
          Our Services
        </h1>

        <p className="text-base md:text-lg text-center max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
          Gaggar & Partners offers a comprehensive range of legal services tailored to meet the diverse needs of our
          clients. Our team of experienced professionals is dedicated to providing strategic and innovative solutions
          across various practice areas.
        </p>

        {/* First 8 services in 4x2 grid for better desktop alignment */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
          {services.slice(0, 8).map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 block"
            >
              <ServiceCard title={service.title} description={service.description} icon={service.icon} />
            </Link>
          ))}
        </div>

        {/* Bottom row: Media & Technology, Intellectual Property, and Financial & Advisory in a centered 3-column layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
          {services.slice(8, 11).map((service, index) => (
            <Link
              key={index}
              href={`/services/${service.slug}`}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1 block"
            >
              <ServiceCard title={service.title} description={service.description} icon={service.icon} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
