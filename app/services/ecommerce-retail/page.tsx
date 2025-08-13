import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ShoppingCart, Globe, CreditCard, Truck } from "lucide-react";

export default function EcommerceRetail() {
  const keyServices = [
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      title: "Business Model Formulation & Strategic Legal Counsel",
      description: "Comprehensive services across start-up, retail, franchise, wholesale, and distribution models, supporting client growth and operational needs with strategic legal guidance",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Regulatory Compliance & Market Entry",
      description: "Expert advisory on regulatory compliance including FDI and forex regulations, Indian market entry strategies, and establishing business presence with necessary licenses",
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Digital Operations & Website Legal Requirements",
      description: "Comprehensive support for digital operations, covering website legal requirements including privacy policies, terms of use, and other website agreements specific to client requirements",
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Transactional Support & Commercial Contracts",
      description: "Expert transactional support for joint ventures, franchising, licensing, and key commercial contracts, ensuring operations are legally sound and commercially viable",
    },
  ];

  const businessModels = [
    "Start-up E-commerce",
    "Retail Operations",
    "Franchise Models",
    "Wholesale Distribution",
    "Online Marketplaces",
    "Digital Retail Platforms",
    "Luxury Retail Brands",
    "Multinational Market Entry",
    "Joint Ventures",
    "Licensing Arrangements",
    "Cross-border E-commerce",
    "Omnichannel Retail",
    "Subscription Commerce",
    "Mobile Commerce",
    "Social Commerce",
    "Direct-to-Consumer Brands",
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
            <ShoppingCart size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            E-Commerce & Retail
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Strategic Legal Counsel for Retail & E-Commerce Excellence
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Our dedicated team offers extensive experience in the retail and e-commerce sectors, providing strategic legal counsel across start-up, retail, franchise, wholesale, and distribution models. We deliver comprehensive legal solutions that address the full spectrum of retail and e-commerce challenges.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We offer comprehensive services supporting client growth and operational needs, including business model formulation, regulatory compliance (FDI, forex), and transactional support for joint ventures, franchising, licensing, and key commercial contracts.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our expertise extends to digital operations, covering website legal requirements including but not limited to privacy policies, terms of use, other website agreements specific to meet the client's requirements, ensuring comprehensive digital compliance and operational excellence.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We also advise on Indian market entry strategies, establishing business presence, securing necessary licenses and regulatory approvals, and managing labor and employment matters. Our strategic approach ensures seamless market entry and sustainable operations.
              </p>

              <p className="text-lg leading-relaxed">
                Our team has successfully assisted leading multinational brands, including luxury retailers, in establishing and growing their presence in India, ensuring their operations are legally sound, commercially viable, and competitively positioned in the dynamic retail landscape.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Our Comprehensive E-Commerce & Retail Legal Services
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

          {/* Business Models */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              E-Commerce & Retail Business Models We Support
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {businessModels.map((model, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-sm font-medium"
                  >
                    {model}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Legal Framework */}
          <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-6 text-[#0C2340] text-center">
                Comprehensive E-Commerce & Retail Legal Framework
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Market Entry & Compliance</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Indian market entry strategies</li>
                    <li>• FDI and forex regulatory compliance</li>
                    <li>• Business presence establishment</li>
                    <li>• Licensing and regulatory approvals</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Digital Operations</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Website legal requirements</li>
                    <li>• Privacy policies and terms of use</li>
                    <li>• Digital platform compliance</li>
                    <li>• E-commerce regulatory frameworks</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Transactional Support</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• Joint ventures and partnerships</li>
                    <li>• Franchising and licensing agreements</li>
                    <li>• Commercial contracts and operations</li>
                    <li>• Employment and labor matters</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-4 text-[#0C2340]">
                Ready to Establish Market-Leading Operations?
              </h3>
              <p className="text-gray-700 mb-6">
                Experience extensive retail and e-commerce legal expertise that ensures operations are legally sound, commercially viable, and competitively positioned.
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
