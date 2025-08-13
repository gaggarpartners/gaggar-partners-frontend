import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building, Home, Users, FileCheck } from "lucide-react";

export default function PropertyDisputesBuilderBuyer() {
  const keyServices = [
    {
      icon: <Building className="w-6 h-6" />,
      title: "Construction Disputes",
      description: "Resolution of construction defects, delays, and quality issues",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Property Title Disputes",
      description: "Legal resolution of property ownership and title conflicts",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Builder-Buyer Relations",
      description: "Mediation and legal support for builder-buyer relationship issues",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Contract Enforcement",
      description: "Enforcement of property sale agreements and construction contracts",
    },
  ];

  const disputeTypes = [
    "Construction Defects",
    "Delayed Possession",
    "Title Disputes",
    "Property Registration",
    "RERA Complaints",
    "Contract Breaches",
    "Quality Issues",
    "Payment Disputes",
    "Possession Delays",
    "Warranty Claims",
  ];

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
            <Building size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            Property Disputes / Builder Buyer Dispute
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Expert Resolution of Real Estate and Construction Conflicts
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                In India's rapidly evolving real estate sector, property disputes and conflicts arising under the Real Estate (Regulation and Development) Act, 2016 (RERA) have become increasingly prevalent and intricate. These cases often involve significant financial investments and can be deeply distressing for individuals and entities alike, encompassing issues from delayed project deliveries and quality concerns to non-compliance with contractual obligations by developers.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Recognizing the profound impact these challenges have on our clients, our firm is dedicated to providing robust and strategic legal representation in this specialized area. Our litigation practice boasts a deep understanding of the complex legal landscape governing real estate in India, with particular expertise in RERA regulations, consumer protection laws, and various civil statutes pertinent to property matters.
              </p>

              <p className="text-lg leading-relaxed">
                We are committed to safeguarding our clients' rights and interests through a comprehensive approach that includes astute negotiation, effective mediation, and vigorous advocacy before RERA authorities, consumer forums, civil courts, and High Courts across the country. Our objective is to navigate these disputes efficiently, striving for resolutions that protect our clients' investments and uphold their legal entitlements.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Our Property Dispute Services
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
                      <h3 className="text-lg font-semibold mb-2 text-[#0C2340]">
                        {service.title}
                      </h3>
                      <p className="text-gray-700 text-sm leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dispute Types */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Types of Property Disputes We Handle
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {disputeTypes.map((type, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-sm font-medium"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-4 text-[#0C2340]">
                Facing Property or Builder Disputes?
              </h3>
              <p className="text-gray-700 mb-6">
                Get expert legal assistance to resolve your property and construction disputes effectively.
              </p>
              <Button asChild className="bg-[#0C2340] hover:bg-[#0C2340]/90">
                <Link href="/contact-us">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
