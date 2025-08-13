import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Gavel, FileText, Users, Shield } from "lucide-react";

export default function ClaimsDisputes() {
  const keyServices = [
    {
      icon: <Gavel className="w-6 h-6" />,
      title: "Commercial Litigation",
      description:
        "Expert representation in complex commercial disputes and business litigation matters",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Contract Disputes",
      description:
        "Resolution of contractual disagreements and breach of contract claims",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Alternative Dispute Resolution",
      description:
        "Mediation, arbitration, and other ADR methods for efficient dispute resolution",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Recovery & Enforcement",
      description:
        "Debt recovery, judgment enforcement, and asset protection strategies",
    },
  ];

  const disputeTypes = [
    "Contract Disputes",
    "Partnership Disputes",
    "Employment Disputes",
    "Property Disputes",
    "Intellectual Property",
    "Insurance Claims",
    "Construction Disputes",
    "Consumer Protection",
    "Regulatory Disputes",
    "Cross-border Disputes",
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
            <Gavel size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            Claims & Disputes
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Strategic Litigation and Dispute Resolution Excellence
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Gaggar & Partners fields one of the finest litigation teams,
                adept at navigating complex legal terrains to secure optimal
                business solutions. We expertly prosecute or defend clients
                before Courts, including the Supreme Court and High Courts,
                Domestic and International Arbitrations, and various Regulatory
                Forums/Tribunals like NCLT, NCLAT, and CCI.
              </p>

              <p className="text-lg leading-relaxed">
                Equipped to handle disputes with domestic and global
                ramifications across diverse sectors including Telecom,
                E-Commerce, and Banking, we provide end-to-end management,
                having advised leading financial institutions, Fortune 500
                companies, and high-net-worth individuals.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Our Dispute Resolution Services
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
              Types of Disputes We Handle
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
                Facing a Business Dispute?
              </h3>
              <p className="text-gray-700 mb-6">
                Get experienced legal representation to protect your interests
                and resolve disputes efficiently.
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
