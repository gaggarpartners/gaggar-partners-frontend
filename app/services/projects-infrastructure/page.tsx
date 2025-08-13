import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Hammer, FileText, Users } from "lucide-react";

export default function ProjectsInfrastructure() {
  const keyServices = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Greenfield & Brownfield Development",
      description:
        "Comprehensive legal counsel for both new infrastructure projects and rehabilitation of existing facilities, covering initial structuring to seamless transaction management",
    },
    {
      icon: <Hammer className="w-6 h-6" />,
      title: "Risk Assessment & Contract Drafting",
      description:
        "Meticulous contract drafting and comprehensive risk assessment with two decades of experience in complex infrastructure transaction processes",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Bidding & Procurement Documentation",
      description:
        "Expert advice on complex bidding processes, RFQs and RFPs preparation, and comprehensive procurement documentation for infrastructure projects",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Project Lifecycle Management",
      description:
        "End-to-end legal frameworks ensuring successful project lifecycles from initial conception to completion and sustainable growth achievement",
    },
  ];

  const infrastructureSectors = [
    "Roads & Highways",
    "Airports & Aviation",
    "Power Generation & Transmission",
    "Water Treatment & Distribution",
    "Railways & Metro Systems",
    "Ports & Maritime Infrastructure",
    "Healthcare Facilities",
    "Educational Infrastructure",
    "Smart Cities & Urban Development",
    "Renewable Energy Projects",
    "Oil & Gas Infrastructure",
    "Mining & Industrial Projects",
    "Telecommunications Infrastructure",
    "Waste Management Systems",
    "Public Housing Projects",
    "Commercial Complexes",
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
            <Building2 size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            Projects & Infrastructure
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Two Decades of Excellence in Infrastructure Legal Counsel
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                We provide incisive legal counsel for Projects & Infrastructure
                ventures, encompassing both greenfield and brownfield
                developments. Our Partners have around two decades of experience
                in providing comprehensive support from initial structuring and
                risk assessment to meticulous contract drafting and seamless
                transaction management.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our commitment ensures successful project lifecycles through
                precise legal frameworks, expert management of transaction
                processes, and astute advice on complex bidding and procurement
                documentation like RFQs and RFPs. We build projects on a solid
                legal foundation for sustainable growth and achieving
                infrastructure ambitions.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our expertise spans across diverse infrastructure sectors, from
                traditional physical infrastructure to modern smart city
                developments. We provide end-to-end legal support covering
                project structuring, regulatory compliance, environmental
                clearances, land acquisition, construction agreements, and
                project financing arrangements.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                With extensive experience in both public and private
                infrastructure projects, we navigate complex regulatory
                frameworks, manage stakeholder relationships, and ensure
                compliance with statutory requirements while optimizing
                commercial outcomes for our clients.
              </p>

              <p className="text-lg leading-relaxed">
                Our approach combines deep sector knowledge with practical
                transaction experience, enabling us to deliver strategic legal
                solutions that support infrastructure development goals while
                mitigating risks and ensuring regulatory compliance throughout
                the project lifecycle.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl  font-bold mb-8 text-[#0C2340] text-center">
              Our Comprehensive Infrastructure Services
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

          {/* Infrastructure Sectors */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl  font-bold mb-8 text-[#0C2340] text-center">
              Infrastructure Sectors & Project Types
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {infrastructureSectors.map((sector, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-sm font-medium"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Development Types */}
          <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#0C2340] text-center">
                Our Infrastructure Development Expertise
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-[#0C2340] mb-3 text-lg">
                    Greenfield Projects
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    New infrastructure developments from ground up
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Initial project structuring and feasibility</li>
                    <li>• Land acquisition and regulatory approvals</li>
                    <li>• Environmental impact assessments</li>
                    <li>• Greenfield financing and investment structures</li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-[#0C2340] mb-3 text-lg">
                    Brownfield Projects
                  </h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Rehabilitation and expansion of existing infrastructure
                  </p>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Asset acquisition and due diligence</li>
                    <li>• Renovation and modernization agreements</li>
                    <li>• Compliance upgrades and regulatory alignment</li>
                    <li>• Brownfield refinancing and restructuring</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl  font-bold mb-4 text-[#0C2340]">
                Ready to Build Your Infrastructure Vision?
              </h3>
              <p className="text-gray-700 mb-6">
                Leverage two decades of infrastructure legal expertise to
                structure and execute your greenfield and brownfield
                developments with precision.
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
