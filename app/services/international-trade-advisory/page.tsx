import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, FileCheck, Scale, Users } from "lucide-react";

export default function InternationalTradeAdvisory() {
  const keyServices = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "International Trade Laws & Treaties",
      description:
        "Expert advisory on international trade regulations, bilateral and multilateral trade treaties, and cross-border compliance requirements across diverse commodities",
    },
    {
      icon: <FileCheck className="w-6 h-6" />,
      title: "Trade Documentation & Incoterms",
      description:
        "Meticulous drafting and negotiation of bespoke sale and purchase agreements, letters of credit, guarantees, and comprehensive trade documentation with Incoterms expertise",
    },
    {
      icon: <Scale className="w-6 h-6" />,
      title: "Regulatory Compliance & Government Procurement",
      description:
        "Navigate complex regulatory frameworks, customs procedures, and government procurement processes with jurisdiction-specific insights and compliance strategies",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Banking Instruments & Trade Finance",
      description:
        "Structuring and executing complex global trade deals with comprehensive banking instruments, trade finance solutions, and risk mitigation strategies",
    },
  ];

  const tradeAreas = [
    "Commodities Trading",
    "Manufacturing Exports",
    "Technology Transfer",
    "Pharmaceuticals",
    "Textiles & Apparel",
    "Automotive Components",
    "Food & Agricultural Products",
    "Electronics & IT Hardware",
    "Chemical Products",
    "Energy & Power Equipment",
    "Mining & Minerals",
    "Infrastructure Equipment",
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
            <Globe size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            International Trade & Transaction Advisory
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Comprehensive Legal Solutions for Complex Global Trade Operations
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                We provide comprehensive legal advisory on international trade
                and cross-border commercial transactions across diverse
                commodities. Our practice delivers practical, solution-oriented
                advice, leveraging extensive experience in structuring and
                executing complex global trade deals to safeguard client
                interests and facilitate seamless operations.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our expert team advises on international trade laws, treaties,
                international commercial terms (Incoterms), regulatory
                compliance, and government procurement processes. We
                meticulously draft and negotiate all critical trade-related
                documentation including bespoke sale and purchase agreements,
                letters of credit, guarantees, and other complex trade documents
                alongside comprehensive banking instruments.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                With a trusted global network, we deliver seamless,
                jurisdiction-specific insights, providing legally sound and
                commercially viable solutions for clients navigating the
                complexities of international trade. Our approach combines deep
                regulatory knowledge with practical commercial understanding to
                ensure optimal outcomes.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We specialize in cross-border transaction structuring, trade
                finance arrangements, customs and export-import regulations,
                international arbitration, and dispute resolution. Our team's
                expertise spans multiple jurisdictions, enabling us to provide
                comprehensive support for multinational trade operations.
              </p>

              <p className="text-lg leading-relaxed">
                From commodity trading agreements and supply chain optimization
                to trade finance documentation and regulatory compliance, we
                ensure your international business operations are legally
                robust, commercially sound, and operationally efficient across
                all markets and jurisdictions.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl    font-bold mb-8 text-[#0C2340] text-center">
              Our International Trade Expertise
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

          {/* Trade Areas */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl    font-bold mb-8 text-[#0C2340] text-center">
              Trade Sectors & Commodities
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {tradeAreas.map((area, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-sm font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl    font-bold mb-6 text-[#0C2340] text-center">
                Specialized Trade Services
              </h3>
              <div className="grid md:grid-cols-3 gap-4 text-center">
                <div className="p-4">
                  <h4 className="font-semibold text-[#0C2340] mb-2">
                    Documentation Excellence
                  </h4>
                  <p className="text-sm text-gray-700">
                    Letters of Credit, Bills of Lading, Commercial Invoices,
                    Export-Import Documentation
                  </p>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#0C2340] mb-2">
                    Trade Finance Structuring
                  </h4>
                  <p className="text-sm text-gray-700">
                    Banking Instruments, Guarantees, Trade Credit Arrangements,
                    Risk Mitigation
                  </p>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold text-[#0C2340] mb-2">
                    Regulatory Navigation
                  </h4>
                  <p className="text-sm text-gray-700">
                    Customs Procedures, Export Controls, Sanctions Compliance,
                    Multi-jurisdictional Requirements
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl    font-bold mb-4 text-[#0C2340]">
                Ready to Execute Complex Global Trade Deals?
              </h3>
              <p className="text-gray-700 mb-6">
                Leverage our extensive experience in international trade law to
                structure and execute your cross-border commercial transactions
                with confidence.
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
