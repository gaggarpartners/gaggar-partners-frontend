import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, TrendingUp, Calculator, Building, Briefcase } from "lucide-react";

export default function FinancialAdvisoryArm() {
  const keyServices = [
    {
      icon: <Calculator className="w-6 h-6" />,
      title: "Valuations & Financial Structuring",
      description: "Expert valuation services and sophisticated financial structuring solutions, particularly within the technology landscape, guided by extensive merchant banking experience",
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Investment Banking & Capital Markets",
      description: "Comprehensive investment banking services including capital raising, M&A advisory, and strategic financial guidance from setup through exit strategies",
    },
    {
      icon: <Building className="w-6 h-6" />,
      title: "Business Strategy & Regulatory Landscaping",
      description: "End-to-end business strategy development and regulatory landscape navigation, ensuring optimal positioning for growth and compliance",
    },
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "Dispute Resolution & Economic Advisory",
      description: "Specialized advisory in complex commercial and economic disputes, providing crucial financial and economic analysis for litigation and arbitration",
    },
  ];

  const serviceSpecialties = [
    "Company Valuations",
    "Financial Structuring",
    "Investment Banking",
    "Technology Sector Advisory",
    "Investment Rounds Guidance",
    "Exit Strategy Planning",
    "Commercial Dispute Advisory",
    "Economic Dispute Resolution",
    "Business Strategy Development",
    "Regulatory Compliance",
    "Capital Market Transactions",
    "M&A Advisory",
    "Due Diligence Services",
    "Financial Risk Assessment",
    "Strategic Planning",
    "Corporate Finance",
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
            <TrendingUp size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            Financial And Advisory Arm (FAAA)
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Expert Financial Advisory & Investment Banking Services
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-8">
                Gaggar & Partners boasts a dedicated Financial and Advisory Arm (FAAA), led by Chartered Accountant Mr. Gaurav Gaggar, formerly of Deloitte and a VP at a Grade A merchant banking company. FAAA specializes in valuations, financial structuring, and investment banking, particularly within the technology landscape. Mr. Gaggar personally guides numerous companies from setup through investment rounds and exit strategies, also providing crucial advice in complex commercial and economic disputes. We offer end-to-end services encompassing dispute resolution, business strategy, regulatory landscaping, and financial structuring, all built on a foundation of implicit trust, ensuring clients receive optimal legal and financial guidance.
              </p>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Leadership & Expertise</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Under the leadership of Chartered Accountant Mr. Gaurav Gaggar, our Financial and Advisory Arm combines deep technical expertise with extensive industry experience. Mr. Gaggar's background includes tenure at Deloitte and executive roles at Grade A merchant banking institutions, providing unparalleled insight into complex financial transactions and strategic advisory.
                </p>
                <div className="bg-gradient-to-r from-[#0C2340]/5 to-[#CBA135]/5 rounded-lg p-6 mb-4">
                  <h4 className="font-semibold text-[#0C2340] mb-3 text-lg">Mr. Gaurav Gaggar - Professional Background:</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-semibold text-[#0C2340] mb-2">Professional Credentials:</h5>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Chartered Accountant (CA) qualification</li>
                        <li>• Former Deloitte professional experience</li>
                        <li>• Vice President at Grade A merchant banking company</li>
                        <li>• Extensive technology sector expertise</li>
                        <li>• Investment banking and capital markets experience</li>
                        <li>• Complex dispute resolution specialization</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-[#0C2340] mb-2">Core Expertise Areas:</h5>
                      <ul className="text-sm space-y-1 text-gray-700">
                        <li>• Company valuations and financial modeling</li>
                        <li>• Investment rounds structuring and execution</li>
                        <li>• Exit strategy planning and implementation</li>
                        <li>• Commercial and economic dispute advisory</li>
                        <li>• Technology landscape financial advisory</li>
                        <li>• Strategic business development guidance</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  This unique combination of Big Four accounting firm experience, merchant banking expertise, and specialized technology sector knowledge enables FAAA to provide comprehensive financial advisory services that bridge legal, financial, and strategic considerations.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Valuations & Financial Structuring</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our valuation and financial structuring practice provides sophisticated analytical services that support strategic decision-making, transaction planning, and dispute resolution across various industry sectors with particular expertise in technology companies.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Company Valuations:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Discounted Cash Flow (DCF) modeling and analysis</li>
                      <li>• Comparable company analysis and market multiples</li>
                      <li>• Precedent transaction analysis</li>
                      <li>• Technology company valuation methodologies</li>
                      <li>• Startup and growth company valuations</li>
                      <li>• Intangible asset and intellectual property valuations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Financial Structuring Solutions:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Optimal capital structure design and implementation</li>
                      <li>• Debt and equity financing arrangements</li>
                      <li>• Complex financial instrument structuring</li>
                      <li>• Tax-efficient transaction structuring</li>
                      <li>• Cross-border transaction financial advisory</li>
                      <li>• Financial risk assessment and mitigation strategies</li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Technology Sector Specialization:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Software and SaaS company valuations</li>
                      <li>• Fintech and blockchain venture advisory</li>
                      <li>• E-commerce and digital platform valuations</li>
                      <li>• AI and machine learning company assessments</li>
                      <li>• Technology IP and data asset valuations</li>
                      <li>• Digital transformation financial impact analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Purpose-Driven Valuations:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• M&A transaction support and fairness opinions</li>
                      <li>• Investment round pricing and negotiation support</li>
                      <li>• Tax planning and compliance valuations</li>
                      <li>• Litigation and dispute resolution valuations</li>
                      <li>• Financial reporting and compliance valuations</li>
                      <li>• Employee stock option plan (ESOP) valuations</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  Our valuations are conducted using industry-standard methodologies while incorporating deep sector knowledge and market insights, ensuring accuracy, defensibility, and strategic relevance for our clients' specific objectives.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Investment Banking & Capital Markets</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our investment banking practice provides comprehensive capital markets advisory services, guiding companies through complex financial transactions from initial setup through successful exit strategies, with particular expertise in technology sector transactions.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Capital Raising & Investment Rounds:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Seed and Series A-Z funding round management</li>
                      <li>• Investor identification and relationship management</li>
                      <li>• Term sheet negotiation and structuring</li>
                      <li>• Due diligence coordination and management</li>
                      <li>• Investment documentation and closing support</li>
                      <li>• Post-investment governance and compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Mergers & Acquisitions Advisory:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Buy-side and sell-side M&A advisory</li>
                      <li>• Strategic buyer identification and approach</li>
                      <li>• Transaction structuring and negotiation support</li>
                      <li>• Comprehensive due diligence management</li>
                      <li>• Valuation analysis and pricing optimization</li>
                      <li>• Deal execution and closing coordination</li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Company Setup & Early Stage Advisory:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Corporate structure optimization and formation</li>
                      <li>• Business model validation and financial planning</li>
                      <li>• Founder equity and ESOP structuring</li>
                      <li>• Early-stage investor preparation and positioning</li>
                      <li>• Regulatory compliance and governance setup</li>
                      <li>• Strategic partnership and alliance structuring</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Exit Strategy Planning & Execution:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Strategic exit planning and preparation</li>
                      <li>• IPO readiness assessment and preparation</li>
                      <li>• Strategic sale process management</li>
                      <li>• Management buyout (MBO) structuring</li>
                      <li>• Succession planning and implementation</li>
                      <li>• Post-exit integration and transition support</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  Our investment banking services combine technical expertise with strategic insight, ensuring that each transaction is structured to maximize value while aligning with long-term strategic objectives and stakeholder interests.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Complex Commercial & Economic Dispute Advisory</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our dispute advisory practice provides crucial financial and economic analysis in complex commercial disputes, offering expert testimony, damage quantification, and strategic advisory services to support litigation and arbitration proceedings.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Economic Damages Assessment:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Lost profits and business interruption analysis</li>
                      <li>• Intellectual property damage quantification</li>
                      <li>• Contract breach financial impact assessment</li>
                      <li>• Market share and competitive harm analysis</li>
                      <li>• Valuation disputes and fair value determinations</li>
                      <li>• Regulatory compliance cost and penalty analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Expert Testimony & Litigation Support:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Expert witness testimony preparation and delivery</li>
                      <li>• Financial forensics and investigative analysis</li>
                      <li>• Complex financial modeling and scenario analysis</li>
                      <li>• Cross-examination preparation and support</li>
                      <li>• Settlement negotiation financial analysis</li>
                      <li>• International arbitration economic advisory</li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Commercial Dispute Categories:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Shareholder and partnership disputes</li>
                      <li>• Joint venture and alliance conflicts</li>
                      <li>• Technology licensing and IP disputes</li>
                      <li>• M&A transaction disputes and earnout disagreements</li>
                      <li>• Employment and compensation disputes</li>
                      <li>• Regulatory enforcement and compliance matters</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Specialized Industry Disputes:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Technology sector valuation disputes</li>
                      <li>• Financial services regulatory matters</li>
                      <li>• Healthcare and life sciences disputes</li>
                      <li>• Energy and infrastructure project disputes</li>
                      <li>• Real estate and construction conflicts</li>
                      <li>• Cross-border commercial arbitration</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  Our dispute advisory services combine rigorous financial analysis with clear communication, providing courts, arbitrators, and opposing parties with compelling economic evidence that supports our clients' positions and facilitates favorable resolutions.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Business Strategy & Regulatory Landscaping</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our comprehensive business strategy and regulatory advisory services provide end-to-end support for strategic planning, regulatory compliance, and business development initiatives, ensuring optimal positioning for sustainable growth and competitive advantage.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Strategic Business Development:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Comprehensive business strategy development</li>
                      <li>• Market entry and expansion planning</li>
                      <li>• Competitive analysis and positioning</li>
                      <li>• Strategic partnership and alliance development</li>
                      <li>• Business model innovation and optimization</li>
                      <li>• Performance measurement and KPI development</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Regulatory Landscape Navigation:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Regulatory impact assessment and compliance planning</li>
                      <li>• Industry-specific regulatory advisory</li>
                      <li>• Government relations and policy advocacy</li>
                      <li>• Cross-jurisdictional regulatory harmonization</li>
                      <li>• Regulatory change management and adaptation</li>
                      <li>• Compliance program design and implementation</li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Financial Strategy Integration:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Capital allocation and investment strategy</li>
                      <li>• Financial risk management and hedging strategies</li>
                      <li>• Treasury management and liquidity planning</li>
                      <li>• Tax strategy optimization and planning</li>
                      <li>• Corporate finance and funding strategies</li>
                      <li>• Financial reporting and investor relations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Technology Sector Strategic Advisory:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Digital transformation and innovation strategy</li>
                      <li>• Technology adoption and implementation planning</li>
                      <li>• Data monetization and analytics strategy</li>
                      <li>• Cybersecurity and risk management integration</li>
                      <li>• Intellectual property commercialization strategy</li>
                      <li>• Platform business model development</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  Built on a foundation of implicit trust and comprehensive expertise, our end-to-end services ensure that clients receive optimal legal and financial guidance that integrates seamlessly with their strategic objectives and operational requirements, delivering sustainable value and competitive advantage.
                </p>
              </div>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#0C2340] text-center">
              Our Comprehensive FAAA Services
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

          {/* Service Specialties */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[#0C2340] text-center">
              FAAA Service Specialties
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {serviceSpecialties.map((specialty, index) => (
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

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-[#0C2340]">
                Ready to Accelerate Your Financial Strategy?
              </h3>
              <p className="text-gray-700 mb-6">
                Experience expert financial advisory services that combine legal expertise with sophisticated financial analysis, particularly specialized for the technology landscape.
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
