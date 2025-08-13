import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Home, Building, Users, FileText } from "lucide-react"

export default function RealEstate() {
  const keyServices = [
    {
      icon: <Home className="w-6 h-6" />,
      title: "Strategic Acquisitions & Dispositions",
      description: "Comprehensive expertise across strategic acquisitions, dispositions, leasing, financing, and development with meticulous attention to property transactions",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Due Diligence & Transaction Documentation",
      description: "Rigorous due diligence processes and precise drafting and negotiation of transaction documents for all property development needs",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Real Estate Asset Transactions",
      description: "Specialized advisory on real estate asset transactions including mergers and acquisitions and project finance with comprehensive business focus",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Regulatory Compliance & RERA Advisory",
      description: "Essential advisory on regulatory compliance, including RERA adherence and licensing, ensuring full compliance with real estate regulations",
    },
  ]

  return (
    <div className="bg-legal-pattern min-h-screen rounded-3xl mx-4 my-8">
      <div className="container mx-auto py-12 px-4 md:px-6">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            asChild
            variant="outline"
            className="border-[#0C2340] text-[#0C2340] hover:bg-[#0C2340] hover:text-white"
          >
            <Link href="/our-services" className="flex items-center">
              <ArrowLeft size={16} className="mr-2" />
              Back to Services
            </Link>
          </Button>
        </div>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 rounded-full bg-[#0C2340] flex items-center justify-center mx-auto mb-6">
            <Home size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl   font-bold mb-6 text-[#0C2340]">Real Estate & Property Law Advisory</h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Meticulous Advisory for Property Transactions and Development
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Our team provides comprehensive Real Estate & Property Law Advisory, meticulously catering to the diverse needs of businesses and individuals in property transactions and development. We deliver specialized legal solutions that address the full spectrum of real estate challenges.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We offer expertise across all aspects of real estate law, including strategic acquisitions, dispositions, leasing, financing, and development. Our comprehensive approach ensures seamless execution of complex property transactions with meticulous attention to detail.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our services encompass rigorous due diligence, precise drafting and negotiation of transaction documents, and essential advisory on regulatory compliance, including RERA adherence and licensing. We provide strategic counsel that balances legal requirements with commercial objectives.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                With particular emphasis on real estate asset transactions such as mergers and acquisitions and project finance, we deliver comprehensive legal support that addresses both transactional complexity and regulatory compliance requirements.
              </p>

              <p className="text-lg leading-relaxed">
                From residential developments to commercial complexes, from individual property acquisitions to large-scale real estate funds, we provide tailored legal solutions that ensure successful property transactions and development projects while maintaining full regulatory compliance.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Our Comprehensive Real Estate Legal Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {keyServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-lg bg-[#0C2340]/10 flex items-center justify-center mr-4 flex-shrink-0">
                      <div className="text-[#CBA135]">{service.icon}</div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2 text-[#0C2340]">{service.title}</h3>
                      <p className="text-gray-700">{service.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Property Types & Specializations */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Property Types & Real Estate Specializations
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="grid md:grid-cols-4 gap-4 text-center">
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-xs font-medium">Residential Development</span>
                  <span className="px-3 py-1 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-xs font-medium">Commercial Properties</span>
                  <span className="px-3 py-1 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-xs font-medium">Industrial Real Estate</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-xs font-medium">Retail Properties</span>
                  <span className="px-3 py-1 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-xs font-medium">Hospitality Projects</span>
                  <span className="px-3 py-1 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-xs font-medium">Mixed-Use Development</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-xs font-medium">Real Estate Funds</span>
                  <span className="px-3 py-1 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-xs font-medium">REITs Advisory</span>
                  <span className="px-3 py-1 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-xs font-medium">Joint Ventures</span>
                </div>
                <div className="flex flex-wrap gap-2 justify-center">
                  <span className="px-3 py-1 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-xs font-medium">Property Finance</span>
                  <span className="px-3 py-1 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-xs font-medium">Asset Management</span>
                  <span className="px-3 py-1 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-xs font-medium">RERA Compliance</span>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Framework */}
          <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-6 text-[#0C2340] text-center">
                Comprehensive Real Estate Legal Framework
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Transaction Advisory</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Strategic acquisitions and dispositions</li>
                    <li>• Due diligence and title investigations</li>
                    <li>• Transaction document drafting and negotiation</li>
                    <li>• Property development structuring</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Regulatory & Compliance</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• RERA compliance and registration</li>
                    <li>• Environmental clearances</li>
                    <li>• Municipal approvals and licensing</li>
                    <li>• Real estate regulatory advisory</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Asset & Finance Transactions</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Real estate M&A transactions</li>
                    <li>• Project finance structuring</li>
                    <li>• Real estate fund advisory</li>
                    <li>• Leasing and property management</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-4 text-[#0C2340]">
                Ready for Comprehensive Property Legal Solutions?
              </h3>
              <p className="text-gray-700 mb-6">
                Experience meticulous real estate advisory that covers all aspects of property transactions, development, and regulatory compliance.
              </p>
              <Button asChild className="bg-[#0C2340] hover:bg-[#0C2340]/90">
                <Link href="/contact-us">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
