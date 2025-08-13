import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Copyright, Shield, FileText, Lightbulb } from "lucide-react"

export default function IntellectualProperty() {
  const keyServices = [
    {
      icon: <Copyright className="w-6 h-6" />,
      title: "IP Rights Identification & Protection",
      description: "Strategic advisory on the full spectrum of IP rights including trademarks, patents, copyrights, and trade secrets, helping clients identify, protect, and leverage their intellectual property assets",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "IP Audits & Portfolio Management",
      description: "Comprehensive IP audits and portfolio management services to optimize intellectual property assets, enhance competitive advantage, and align with business objectives",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Licensing & Commercialization",
      description: "Expert guidance on IP licensing strategies, commercialization opportunities, and technology transfer arrangements to maximize intellectual property value",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "IP Strategy & Joint Ventures",
      description: "Development of robust IP strategies aligned with business objectives, including IP aspects of joint ventures, technology transfer, and risk mitigation frameworks",
    },
  ]

  const ipSpecialties = [
    "Patents",
    "Trademarks",
    "Copyrights",
    "Trade Secrets",
    "Industrial Designs",
    "Geographical Indications",
    "Domain Names",
    "Plant Varieties",
    "IP Audits",
    "Portfolio Management",
    "IP Licensing",
    "Technology Transfer",
    "IP Commercialization",
    "Joint Venture IP",
    "IP Risk Mitigation",
    "Innovation Strategy",
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
            <Copyright size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl    font-bold mb-6 text-[#0C2340]">
            Intellectual Property Advisory
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Strategic IP Advisory for Innovation-Driven Economy Success
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-8">
                Gaggar & Partners offers strategic Intellectual Property Advisory services, recognizing IP as a critical asset in today's innovation-driven economy. We advise on the full spectrum of IP rights, including trademarks, patents, copyrights, and trade secrets, assisting clients in identifying, protecting, and leveraging their intellectual property through audits, portfolio management, licensing, and commercialization agreements. Our experienced team represents clients in contentious matters like trademark and copyright infringement, patent disputes, and trade secret claims, appearing before various Indian judicial and quasi judicial authorities to protect and enforce clients' valuable IP assets.
              </p>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">IP Rights Identification & Protection Strategy</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our comprehensive IP advisory begins with strategic identification and protection of intellectual property assets across all categories. We conduct thorough IP audits to uncover valuable intellectual property that may be underprotected or underutilized, developing tailored protection strategies that align with business objectives.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Patents & Innovations:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Patentability assessments and prior art searches</li>
                      <li>• Patent application drafting and prosecution</li>
                      <li>• Utility model and design patent strategies</li>
                      <li>• Freedom to operate (FTO) analysis</li>
                      <li>• Patent portfolio management and maintenance</li>
                      <li>• International patent filing strategies (PCT)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Trademarks & Brand Protection:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Trademark clearance searches and analysis</li>
                      <li>• Brand protection and enforcement strategies</li>
                      <li>• Multi-jurisdictional trademark registration</li>
                      <li>• Domain name protection and disputes</li>
                      <li>• Anti-counterfeiting measures and enforcement</li>
                      <li>• Madrid Protocol international registration</li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Copyrights & Creative Assets:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Copyright registration and protection strategies</li>
                      <li>• Software and digital content protection</li>
                      <li>• Work-for-hire and assignment agreements</li>
                      <li>• DMCA takedown and enforcement actions</li>
                      <li>• Creative commons and licensing frameworks</li>
                      <li>• Moral rights and attribution protection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Trade Secrets & Confidential Information:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Trade secret identification and classification</li>
                      <li>• Confidentiality and non-disclosure agreements</li>
                      <li>• Employee mobility and non-compete strategies</li>
                      <li>• Information security and access controls</li>
                      <li>• Trade secret misappropriation prevention</li>
                      <li>• Know-how protection and transfer protocols</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  Our IP identification and protection strategies integrate seamlessly with business operations, ensuring that intellectual property assets are not only legally protected but also strategically positioned to support competitive advantage and market leadership.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">IP Audits & Portfolio Management</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our comprehensive IP audit and portfolio management services provide strategic oversight of intellectual property assets, ensuring optimal protection, utilization, and commercial value extraction from IP investments across all business units and geographic markets.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Comprehensive IP Audits:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Enterprise-wide IP asset identification and mapping</li>
                      <li>• IP ownership verification and chain of title review</li>
                      <li>• Gap analysis and protection recommendations</li>
                      <li>• IP valuation and financial impact assessment</li>
                      <li>• Risk assessment and vulnerability analysis</li>
                      <li>• Due diligence support for M&A transactions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Strategic Portfolio Management:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• IP portfolio optimization and pruning strategies</li>
                      <li>• Renewal and maintenance decision frameworks</li>
                      <li>• Geographic expansion and filing strategies</li>
                      <li>• Budget allocation and cost optimization</li>
                      <li>• Performance metrics and KPI development</li>
                      <li>• Competitive intelligence and landscape analysis</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  We provide ongoing portfolio management services that ensure IP assets remain aligned with business strategy, market opportunities, and competitive positioning while optimizing costs and maximizing return on IP investments.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">IP Licensing & Commercialization Agreements</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our IP commercialization practice transforms intellectual property assets into revenue-generating business opportunities through strategic licensing, technology transfer, and partnership arrangements that maximize commercial value while preserving competitive advantage.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Licensing Strategy & Agreements:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Exclusive and non-exclusive licensing arrangements</li>
                      <li>• Cross-licensing and patent pool participation</li>
                      <li>• Royalty structure optimization and valuation</li>
                      <li>• Performance milestones and termination provisions</li>
                      <li>• International licensing and territory management</li>
                      <li>• Open source and collaborative licensing models</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Technology Transfer & Commercialization:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• University-industry technology transfer agreements</li>
                      <li>• Startup IP monetization and spin-off strategies</li>
                      <li>• Joint development and co-innovation agreements</li>
                      <li>• Manufacturing and distribution partnerships</li>
                      <li>• IP-backed financing and securitization</li>
                      <li>• Standard essential patent (SEP) licensing</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  We structure sophisticated commercialization agreements that balance revenue generation with strategic business objectives, ensuring that IP licensing and technology transfer arrangements support long-term competitive positioning and market growth.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Contentious IP Matters & Enforcement</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our experienced litigation team provides assertive representation in contentious intellectual property matters, appearing before various Indian judicial and quasi-judicial authorities to protect and enforce clients' valuable IP assets through strategic litigation and alternative dispute resolution.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Trademark & Copyright Enforcement:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Trademark infringement and passing off actions</li>
                      <li>• Copyright infringement and piracy enforcement</li>
                      <li>• Domain name disputes and cybersquatting</li>
                      <li>• Counterfeiting and brand protection enforcement</li>
                      <li>• Customs enforcement and border seizures</li>
                      <li>• Online platform takedown and enforcement</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Patent Disputes & Trade Secret Claims:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Patent infringement litigation and damages</li>
                      <li>• Patent validity challenges and oppositions</li>
                      <li>• Trade secret misappropriation claims</li>
                      <li>• Employee mobility and non-compete disputes</li>
                      <li>• Standard essential patent (SEP) disputes</li>
                      <li>• International Trade Commission (ITC) proceedings</li>
                    </ul>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Judicial Authorities Representation:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• High Courts and Supreme Court litigation</li>
                      <li>• District Courts and Commercial Courts</li>
                      <li>• Delhi High Court IP Division proceedings</li>
                      <li>• Intellectual Property Appellate Board (IPAB)</li>
                      <li>• Customs and enforcement authorities</li>
                      <li>• International arbitration and mediation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Quasi-Judicial Proceedings:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Patent Office opposition and revocation proceedings</li>
                      <li>• Trademark Registry opposition and cancellation</li>
                      <li>• Copyright Board proceedings and appeals</li>
                      <li>• Geographical Indications Registry matters</li>
                      <li>• Competition Commission of India (CCI) proceedings</li>
                      <li>• Administrative enforcement actions</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  We provide comprehensive enforcement strategies that combine litigation excellence with business pragmatism, ensuring that IP enforcement actions support overall business objectives while deterring future infringement and protecting market position.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Strategic IP Advisory & Innovation Support</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our strategic IP advisory practice integrates intellectual property considerations into overall business strategy, supporting innovation initiatives, competitive positioning, and long-term value creation through sophisticated IP management and strategic planning.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Innovation Strategy & IP Integration:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• R&D IP strategy and innovation roadmaps</li>
                      <li>• Open innovation and collaborative research</li>
                      <li>• IP landscape analysis and white space identification</li>
                      <li>• Emerging technology IP strategies (AI, blockchain, IoT)</li>
                      <li>• Patent thicket navigation and design around strategies</li>
                      <li>• Innovation incentive and IP ownership policies</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Business Integration & Risk Management:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• IP due diligence for investments and M&A</li>
                      <li>• Joint venture IP structuring and governance</li>
                      <li>• Supply chain IP risk assessment and mitigation</li>
                      <li>• International IP strategy and treaty optimization</li>
                      <li>• IP insurance and risk transfer mechanisms</li>
                      <li>• Regulatory compliance and government relations</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  We provide holistic IP advisory services that ensure intellectual property strategy aligns with and supports overall business strategy, enabling sustainable competitive advantage and innovation-led growth in today's knowledge economy.
                </p>
              </div>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl    font-bold mb-8 text-[#0C2340] text-center">
              Our Strategic IP Advisory Services
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

          {/* IP Specialties */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl    font-bold mb-8 text-[#0C2340] text-center">
              Our IP Advisory Specialties
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {ipSpecialties.map((specialty, index) => (
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
          
          {/* Strategic IP Services */}
          <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl    font-bold mb-6 text-[#0C2340] text-center">
                Strategic IP Advisory Framework
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">IP Identification & Protection</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Comprehensive IP audits and assessments</li>
                    <li>• Patent, trademark, and copyright protection</li>
                    <li>• Trade secret identification and safeguarding</li>
                    <li>• IP portfolio optimization strategies</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Commercialization & Licensing</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• IP licensing and monetization strategies</li>
                    <li>• Technology transfer arrangements</li>
                    <li>• Joint venture IP structuring</li>
                    <li>• IP commercialization frameworks</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Strategic Alignment & Risk Management</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Business objective alignment</li>
                    <li>• Competitive advantage enhancement</li>
                    <li>• IP risk assessment and mitigation</li>
                    <li>• Innovation strategy development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl    font-bold mb-4 text-[#0C2340]">
                Ready to Leverage Your Intellectual Property Assets?
              </h3>
              <p className="text-gray-700 mb-6">
                Develop robust IP strategies that align with business objectives, enhance competitive advantage, and drive innovation-led growth.
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
