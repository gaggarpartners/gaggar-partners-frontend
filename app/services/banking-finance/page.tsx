import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Banknote, CreditCard, TrendingUp, Shield } from "lucide-react";

export default function BankingFinance() {
  const keyServices = [
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "End-to-End Transactional Support",
      description: "Comprehensive transaction management including drafting of finance and security documents, legal audits, disbursement compliance reports, and legal due diligence",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Project Finance Transactions",
      description: "Vast experience handling complex project finance transactions across infrastructure, energy and hospitality sectors with specialized legal expertise",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Securitization Advisory",
      description: "Expert advisory on securitization transactions, structured products, and complex financial instruments with regulatory compliance guidance",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Regulatory Compliance & Risk Mitigation",
      description: "In-depth understanding of RBI and SEBI compliances, facilitating seamless lending/borrowing processes and mitigating risks through specialized expertise",
    },
  ];

  const financialSpecialties = [
    "Project Finance",
    "Infrastructure Financing",
    "Energy Sector Finance",
    "Hospitality Finance",
    "Commercial Banking",
    "Investment Banking",
    "Securitization Transactions",
    "Structured Products",
    "RBI Compliance",
    "SEBI Regulatory Affairs",
    "Legal Due Diligence",
    "Disbursement Compliance",
    "Finance Documentation",
    "Security Documentation",
    "Banking Regulations",
    "Capital Markets",
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
            <Banknote size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            Banking & Finance
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            End-to-End Transactional Support Across Banking & Finance Spectrum
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Our team is known to provide end-to-end transactional support across the Banking & Finance (including Project Finance) spectrum. We deliver comprehensive legal solutions that span the entire transaction lifecycle from structuring to closure.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our services encompass managing end-to-end transactions including drafting of finance and security documents, conducting legal audits, preparing disbursement compliance reports, preparing legal due diligence reports, and advisory on securitization. We ensure meticulous attention to every aspect of financial transactions.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our lawyers also bring in vast experience of handling complex project finance transactions across infrastructure, energy and hospitality sectors. This specialized expertise enables us to navigate sector-specific challenges and deliver tailored solutions for complex financing structures.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our team is dedicated to facilitating seamless lending/borrowing processes and mitigating risks through our specialized legal expertise and in-depth understanding of the regulatory landscape including RBI and SEBI compliances. We provide strategic counsel that balances commercial objectives with regulatory requirements.
              </p>

              <p className="text-lg leading-relaxed">
                From traditional banking transactions to innovative financial products and complex project financing, we combine technical expertise with practical commercial understanding to deliver comprehensive legal support across the full spectrum of banking and finance operations.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl    font-bold mb-8 text-[#0C2340] text-center">
              Our Comprehensive Banking & Finance Expertise
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

          {/* Financial Specialties */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl    font-bold mb-8 text-[#0C2340] text-center">
              Our Banking & Finance Specialties
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {financialSpecialties.map((specialty, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-sm font-medium"
                  >
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Transaction Services */}
          <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl    font-bold mb-6 text-[#0C2340] text-center">
                Comprehensive Transaction Management
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Documentation & Due Diligence</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Finance and security document drafting</li>
                    <li>• Legal due diligence reports</li>
                    <li>• Disbursement compliance reports</li>
                    <li>• Legal audit and risk assessment</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Project Finance Expertise</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Infrastructure project financing</li>
                    <li>• Energy sector transactions</li>
                    <li>• Hospitality industry finance</li>
                    <li>• Complex structured financing</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Regulatory Compliance</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• RBI compliance and advisory</li>
                    <li>• SEBI regulatory requirements</li>
                    <li>• Securitization advisory</li>
                    <li>• Risk mitigation strategies</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl    font-bold mb-4 text-[#0C2340]">
                Ready for Comprehensive Banking & Finance Solutions?
              </h3>
              <p className="text-gray-700 mb-6">
                Experience end-to-end transactional support with specialized expertise in project finance, regulatory compliance, and risk mitigation.
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
