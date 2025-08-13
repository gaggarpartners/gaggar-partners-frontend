import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, CheckCircle, FileSearch, AlertTriangle } from "lucide-react";

export default function RegulatoryCompliance() {
  const keyServices = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Emerging Technology Compliance",
      description: "Cutting-edge expertise in Blockchain, Crypto & Web3 compliance, alongside robust foundation in core Commercial & Business Laws",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Data Privacy & Protection Advisory",
      description: "Comprehensive guidance on Data Privacy and Data Protection regulations, ensuring compliance with evolving digital privacy frameworks",
    },
    {
      icon: <FileSearch className="w-6 h-6" />,
      title: "Fintech Advisory & RBI Compliance",
      description: "Specialized Fintech Advisory to support innovation compliant with RBI norms, navigating the complex regulatory landscape of financial technology",
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "AI Legal Implications & Employment Laws",
      description: "Expert guidance on legal implications of Artificial Intelligence, along with critical aspects of Employment and POSH Laws for ethical business operations",
    },
  ];

  const regulatorySpecialties = [
    "Blockchain & Cryptocurrency",
    "Web3 & Digital Assets",
    "Data Privacy & Protection",
    "Fintech & RBI Compliance",
    "Artificial Intelligence Law",
    "Employment & POSH Laws",
    "Commercial & Business Laws",
    "Digital Innovation Compliance",
    "Cybersecurity Regulations",
    "Consumer Protection",
    "Financial Technology Regulations",
    "Cross-border Data Transfer",
    "Digital Payment Compliance",
    "Technology Licensing",
    "Regulatory Sandboxes",
    "Innovation Policy Advisory",
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
            <Shield size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            Regulatory & Compliance
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Cutting-Edge Regulatory Expertise for Evolving Compliance Landscapes
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-8">
                Gaggar & Partners excels in Regulatory & Compliance, offering cutting-edge expertise in Blockchain, Crypto & Web3, alongside core Commercial & Business Laws. We provide comprehensive guidance on Data Privacy, Fintech Advisory, and the legal implications of AI. Our services extend to Employment/POSH Laws, empowering your business to thrive ethically and within regulatory bounds. We proactively address novel legal challenges, ensuring adherence to evolving standards. Gaggar & Partners is your trusted partner for navigating compliance complexities and fostering sustainable growth.
              </p>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Blockchain, Cryptocurrency & Web3 Compliance</h3>
                <p className="text-lg leading-relaxed mb-4">
                  In the rapidly evolving digital asset ecosystem, Gaggar & Partners stands at the forefront of blockchain and cryptocurrency regulatory compliance. Our specialized team provides comprehensive legal counsel covering the entire spectrum of digital asset operations, from initial token offerings to decentralized autonomous organizations (DAOs).
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Cryptocurrency Exchange Compliance:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Virtual Digital Asset (VDA) tax compliance under Finance Act 2022</li>
                      <li>• Anti-Money Laundering (AML) framework implementation</li>
                      <li>• Customer Due Diligence (CDD) procedures</li>
                      <li>• Suspicious Transaction Reports (STR) filing protocols</li>
                      <li>• Cross-border cryptocurrency transaction compliance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Web3 Infrastructure & DeFi:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Smart contract legal frameworks and auditing</li>
                      <li>• Decentralized Finance (DeFi) protocol compliance</li>
                      <li>• NFT marketplace regulatory compliance</li>
                      <li>• DAO governance structure legal validation</li>
                      <li>• Metaverse platform regulatory advisory</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  Our expertise extends to navigating the complex regulatory landscape of blockchain technology implementation, including compliance with emerging central bank digital currency (CBDC) frameworks, regulatory sandbox participation, and international blockchain interoperability standards.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Data Privacy & Protection Advisory</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our comprehensive data privacy practice is designed to navigate India's evolving data protection landscape while ensuring global compliance standards. With the implementation of the Digital Personal Data Protection Act (DPDP) 2023, organizations face unprecedented compliance requirements that demand specialized legal expertise.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">DPDP Act 2023 Compliance:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Data Principal rights implementation frameworks</li>
                      <li>• Consent management system design and deployment</li>
                      <li>• Data breach notification procedures (72-hour rule)</li>
                      <li>• Data Protection Impact Assessments (DPIA)</li>
                      <li>• Cross-border data transfer mechanism compliance</li>
                      <li>• Children's data protection (under 18 years) protocols</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">International Data Protection:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• GDPR compliance for EU data subjects</li>
                      <li>• Standard Contractual Clauses (SCCs) implementation</li>
                      <li>• Binding Corporate Rules (BCRs) development</li>
                      <li>• Privacy Shield and adequacy decision navigation</li>
                      <li>• Multi-jurisdictional privacy policy harmonization</li>
                      <li>• International data mapping and flow documentation</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  We provide end-to-end data governance solutions including comprehensive data audits, privacy-by-design implementation, data minimization strategies, and ongoing compliance monitoring systems that adapt to evolving regulatory requirements across multiple jurisdictions.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Fintech Advisory & RBI Compliance</h3>
                <p className="text-lg leading-relaxed mb-4">
                  The Reserve Bank of India's evolving fintech regulatory framework requires specialized expertise to navigate complex licensing requirements, operational guidelines, and compliance obligations. Our fintech advisory practice provides comprehensive support for innovative financial services while ensuring strict adherence to RBI directives.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Payment System Licensing:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Payment Aggregator (PA) license applications</li>
                      <li>• Payment Gateway authorization procedures</li>
                      <li>• Prepaid Payment Instrument (PPI) licensing</li>
                      <li>• White Label ATM operator permissions</li>
                      <li>• Bharat Bill Payment System (BBPS) compliance</li>
                      <li>• UPI participant bank integration protocols</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Digital Lending & NBFC:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Digital lending platform regulatory compliance</li>
                      <li>• NBFC-P2P registration and ongoing compliance</li>
                      <li>• Account Aggregator framework participation</li>
                      <li>• Credit scoring and alternative data usage</li>
                      <li>• Fair practices code implementation</li>
                      <li>• Digital KYC and Video KYC compliance</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  Our services include regulatory sandbox participation strategies, neo-banking partnership structuring, open banking API compliance, and comprehensive risk management framework development that aligns with RBI's prudential norms and operational guidelines.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Artificial Intelligence & Machine Learning Law</h3>
                <p className="text-lg leading-relaxed mb-4">
                  As artificial intelligence transforms business operations and decision-making processes, organizations must navigate an increasingly complex legal landscape. Our AI law practice addresses the multifaceted challenges of algorithmic governance, automated systems liability, and ethical AI implementation across various industry sectors.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">AI Governance & Ethics:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Algorithmic accountability framework development</li>
                      <li>• AI bias detection and mitigation strategies</li>
                      <li>• Explainable AI (XAI) compliance requirements</li>
                      <li>• Automated decision-making transparency protocols</li>
                      <li>• AI ethics committee establishment and governance</li>
                      <li>• Responsible AI development guidelines</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Regulatory & Liability Frameworks:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• AI system certification and validation processes</li>
                      <li>• Product liability for AI-driven decisions</li>
                      <li>• Healthcare AI regulatory approval (CDSCO)</li>
                      <li>• Autonomous vehicle regulation compliance</li>
                      <li>• Financial AI model governance (RBI guidelines)</li>
                      <li>• AI intellectual property protection strategies</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  We provide comprehensive AI legal auditing services, including algorithmic impact assessments, AI contract drafting for vendor relationships, data licensing for machine learning models, and compliance with emerging AI regulatory frameworks across healthcare, finance, transportation, and other regulated sectors.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Employment Laws & POSH Compliance</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our employment law practice ensures comprehensive compliance with India's evolving labor legislation, including the new labor codes and the critical Prevention of Sexual Harassment (POSH) Act requirements. We provide end-to-end solutions for workplace compliance, employee relations, and organizational policy development.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">POSH Act Comprehensive Compliance:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Internal Complaints Committee (ICC) constitution</li>
                      <li>• Local Complaints Committee (LCC) liaison procedures</li>
                      <li>• Annual POSH compliance reporting and filing</li>
                      <li>• Workplace policy drafting and implementation</li>
                      <li>• Employee sensitization and training programs</li>
                      <li>• Complaint investigation protocols and procedures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">New Labor Code Compliance:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Industrial Relations Code implementation</li>
                      <li>• Wage Code compliance and wage structure revision</li>
                      <li>• Social Security Code registration and contributions</li>
                      <li>• Occupational Safety, Health and Working Conditions Code</li>
                      <li>• Contract labor regulation and compliance</li>
                      <li>• Interstate migrant worker regulations</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  We offer specialized services including employment contract drafting with new code compliance, workplace investigation protocols, industrial dispute resolution, executive compensation structuring, and comprehensive HR policy development that addresses remote work regulations and gig economy employment frameworks.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Commercial & Business Laws</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our commercial law expertise encompasses the full spectrum of business regulatory compliance, from corporate governance and securities law to sector-specific regulations and international trade compliance. We provide strategic legal counsel that enables businesses to operate efficiently while maintaining strict regulatory adherence.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Corporate Governance & Securities:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Companies Act 2013 comprehensive compliance</li>
                      <li>• SEBI regulations for listed companies</li>
                      <li>• Board governance and independent director requirements</li>
                      <li>• Related party transaction compliance</li>
                      <li>• Corporate social responsibility (CSR) implementation</li>
                      <li>• Insider trading regulations and code of conduct</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">FDI & International Compliance:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Foreign Direct Investment (FDI) policy compliance</li>
                      <li>• Foreign Exchange Management Act (FEMA) adherence</li>
                      <li>• Overseas Direct Investment (ODI) regulations</li>
                      <li>• Transfer pricing documentation and compliance</li>
                      <li>• International trade agreement utilization</li>
                      <li>• Export-import regulations and customs compliance</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  We provide comprehensive regulatory risk assessment services, ongoing compliance monitoring systems, regulatory approval facilitation for business expansions, competition law compliance including merger and acquisition clearances, and specialized advisory for emerging sectors including renewable energy, healthcare, and technology services.
                </p>
              </div>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Our Comprehensive Regulatory & Compliance Services
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

          {/* Regulatory Specialties */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Our Regulatory & Compliance Specialties
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {regulatorySpecialties.map((specialty, index) => (
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
          
          {/* Expertise Areas */}
          <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-6 text-[#0C2340] text-center">
                Comprehensive Regulatory Expertise
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Emerging Technologies</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Blockchain and cryptocurrency compliance</li>
                    <li>• Web3 and digital asset regulations</li>
                    <li>• AI legal implications and governance</li>
                    <li>• Digital innovation regulatory frameworks</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Financial Technology</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• RBI compliance for fintech innovations</li>
                    <li>• Digital payment regulations</li>
                    <li>• Regulatory sandboxes and licensing</li>
                    <li>• Cross-border fintech operations</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Core Compliance</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Data privacy and protection laws</li>
                    <li>• Employment and POSH compliance</li>
                    <li>• Commercial and business law adherence</li>
                    <li>• Cybersecurity and data governance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-4 text-[#0C2340]">
                Ready to Navigate Evolving Regulatory Landscapes?
              </h3>
              <p className="text-gray-700 mb-6">
                Experience cutting-edge regulatory expertise that empowers your business to thrive in regulated environments while fostering sustainable growth.
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
