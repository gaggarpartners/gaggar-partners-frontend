import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Shield, Heart, FileText, Home } from "lucide-react";

export default function PrivateClientAdvisory() {
  const keyServices = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Private Trusts & Family Offices",
      description: "Establishment of private trusts and family offices for asset optimization, long-term financial security, and seamless integration of personal wealth with business interests",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Succession Planning for Family Enterprises",
      description: "Seamless succession planning for family enterprises and individuals, ensuring continuity of family businesses and preservation of family legacy across generations",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Philanthropic Endeavors",
      description: "Strategic advisory on philanthropic initiatives, charitable foundations, and social impact investments aligned with family values and long-term objectives",
    },
    {
      icon: <Home className="w-6 h-6" />,
      title: "Comprehensive Estate Planning",
      description: "Comprehensive estate planning ensuring assets are preserved, transferred, and aligned with overall business objectives and family wealth preservation strategies",
    },
  ];

  const clientProfiles = [
    "High Net Worth Individuals",
    "Ultra High Net Worth Families",
    "Family Enterprises",
    "Business Owners",
    "Entrepreneurs",
    "Multi-Generational Families",
    "Philanthropists",
    "Family Offices",
    "Private Investors",
    "International Families",
    "Professional Services Partners",
    "Corporate Executives",
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
            Private Client Practice Advisory
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Bespoke Legal Solutions for High-Net-Worth Individuals and Families
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-8">
                Gaggar & Partners' Private Client Practice offers bespoke legal solutions for high-net-worth individuals and families, seamlessly integrating personal wealth with business interests. We advise on wealth management, family governance, philanthropy, and establishing private trusts, family offices, and other structures to manage assets and minimize tax. Our services cover prenuptial agreements, intergenerational wealth transfer, and succession planning for closely held family businesses, aligning personal and corporate goals. We develop customized legal frameworks to protect assets and promote family harmony, also providing assertive representation in disputes. Critically, we offer comprehensive Estate Planning, including asset structuring, drafting wills, trusts, and navigating complex tax laws for seamless succession. Our expertise extends to business continuity planning, shareholder agreements with succession clauses, and handling sensitive litigation related to wills, trusts, and inheritance.
              </p>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Wealth Management & Asset Structuring</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our wealth management practice focuses on creating sophisticated structures that seamlessly integrate personal wealth with business interests while optimizing tax efficiency and asset protection. We design customized solutions that preserve and enhance family wealth across multiple generations.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Private Trust Structures:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Discretionary and fixed trust establishment</li>
                      <li>• Family trust deed drafting and administration</li>
                      <li>• Trust tax optimization strategies</li>
                      <li>• Beneficiary protection and succession planning</li>
                      <li>• Trust migration and restructuring</li>
                      <li>• Charitable trust and foundation structures</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Family Office Establishment:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Single and multi-family office structuring</li>
                      <li>• Investment policy statement development</li>
                      <li>• Family governance framework creation</li>
                      <li>• Risk management and compliance protocols</li>
                      <li>• Next-generation education and engagement</li>
                      <li>• Family constitution and mission statements</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  We provide comprehensive guidance on asset protection strategies, offshore structuring options, and cross-border wealth management solutions that comply with international tax treaties and reporting requirements while maintaining privacy and control.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Family Governance & Philanthropic Endeavors</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our family governance practice helps high-net-worth families establish formal structures and processes that promote family unity, facilitate decision-making, and ensure the successful transfer of values and wealth across generations.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Family Governance Structures:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Family council and board establishment</li>
                      <li>• Family employment policies and guidelines</li>
                      <li>• Conflict resolution mechanisms</li>
                      <li>• Decision-making protocols and voting agreements</li>
                      <li>• Family mission and vision development</li>
                      <li>• Intergenerational communication frameworks</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Philanthropic Planning:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Charitable foundation establishment and governance</li>
                      <li>• Private foundation vs. donor advised funds analysis</li>
                      <li>• Impact investing and ESG integration</li>
                      <li>• Tax-efficient charitable giving strategies</li>
                      <li>• International philanthropy structures</li>
                      <li>• Legacy and values-based giving programs</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  We assist families in creating meaningful philanthropic legacies through strategic charitable planning that aligns with family values while maximizing tax benefits and social impact across multiple generations.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Prenuptial Agreements & Family Protection</h3>
                <p className="text-lg leading-relaxed mb-4">
                  We provide comprehensive family protection services including sophisticated prenuptial and postnuptial agreements that protect family assets while promoting family harmony and addressing sensitive relationship dynamics.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Marriage & Partnership Agreements:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Prenuptial agreement drafting and negotiation</li>
                      <li>• Postnuptial agreement modifications</li>
                      <li>• Asset protection and separate property designation</li>
                      <li>• Business interest protection clauses</li>
                      <li>• Spousal support and alimony arrangements</li>
                      <li>• International marriage contract considerations</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Asset Protection Planning:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Domestic asset protection trust structures</li>
                      <li>• Offshore asset protection strategies</li>
                      <li>• LLC and partnership protection planning</li>
                      <li>• Homestead and insurance optimization</li>
                      <li>• Professional liability protection</li>
                      <li>• Creditor protection and privacy planning</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  Our customized legal frameworks protect family assets from potential creditors, litigation risks, and relationship breakdowns while maintaining flexibility for changing family circumstances and business needs.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Intergenerational Wealth Transfer & Succession Planning</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our succession planning practice ensures seamless transfer of wealth and business interests across generations while minimizing tax impact and preserving family relationships through carefully structured transition strategies.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Family Business Succession:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Closely held business succession planning</li>
                      <li>• Buy-sell agreement drafting and valuation</li>
                      <li>• Management succession and training programs</li>
                      <li>• Ownership transition strategies</li>
                      <li>• Key employee retention and incentive plans</li>
                      <li>• Exit strategy planning and execution</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Wealth Transfer Optimization:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Generation-skipping transfer tax planning</li>
                      <li>• Grantor retained annuity trusts (GRATs)</li>
                      <li>• Charitable remainder and lead trusts</li>
                      <li>• Family limited partnerships and LLCs</li>
                      <li>• Installment sales and self-canceling notes</li>
                      <li>• International tax treaty optimization</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  We align personal and corporate goals through integrated succession planning that ensures business continuity while preserving family relationships and maximizing after-tax wealth transfer to future generations.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6 mb-8">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Comprehensive Estate Planning & Tax Optimization</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our estate planning practice provides comprehensive solutions for asset structuring, will and trust drafting, and navigation of complex tax laws to ensure seamless succession while minimizing tax burden and maximizing wealth preservation.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Estate Documentation:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Comprehensive will drafting and execution</li>
                      <li>• Revocable and irrevocable trust creation</li>
                      <li>• Power of attorney and healthcare directives</li>
                      <li>• Trust administration and fiduciary services</li>
                      <li>• Estate settlement and probate administration</li>
                      <li>• Cross-border estate planning coordination</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Tax Planning Strategies:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Estate and gift tax minimization</li>
                      <li>• Income tax deferral and optimization</li>
                      <li>• Generation-skipping tax planning</li>
                      <li>• International tax compliance and reporting</li>
                      <li>• State tax residency planning</li>
                      <li>• Charitable deduction optimization</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  We navigate complex tax laws and regulations to create sophisticated estate plans that preserve wealth, minimize tax exposure, and ensure smooth asset transfers while maintaining flexibility for changing circumstances and family needs.
                </p>
              </div>

              <div className="border-l-4 border-[#CBA135] pl-6">
                <h3 className="text-2xl font-bold text-[#0C2340] mb-4">Business Continuity & Dispute Resolution</h3>
                <p className="text-lg leading-relaxed mb-4">
                  Our practice extends to comprehensive business continuity planning and assertive representation in disputes, ensuring protection of family interests and business operations through both preventive planning and skilled litigation when necessary.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Business Continuity Planning:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Shareholder agreements with succession clauses</li>
                      <li>• Key person insurance and contingency planning</li>
                      <li>• Management buyout and succession financing</li>
                      <li>• Business valuation and periodic updates</li>
                      <li>• Corporate governance and fiduciary duties</li>
                      <li>• Risk management and insurance optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0C2340] mb-2">Sensitive Litigation & Disputes:</h4>
                    <ul className="text-sm space-y-1 text-gray-700">
                      <li>• Will and trust contest litigation</li>
                      <li>• Inheritance and beneficiary disputes</li>
                      <li>• Fiduciary duty breach claims</li>
                      <li>• Family business ownership disputes</li>
                      <li>• Marital and partnership dissolution</li>
                      <li>• Confidential mediation and arbitration</li>
                    </ul>
                  </div>
                </div>
                <p className="text-base leading-relaxed">
                  We provide assertive yet discrete representation in sensitive family and business disputes while maintaining focus on preserving family relationships and business value through strategic negotiation and skilled advocacy when litigation becomes necessary.
                </p>
              </div>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Our Distinguished Private Client Services
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

          {/* Client Profiles */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Distinguished Client Profiles
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {clientProfiles.map((profile, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-sm font-medium"
                  >
                    {profile}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Specialized Services */}
          <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-6 text-[#0C2340] text-center">
                Specialized Private Client Services
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-[#0C2340] mb-3 text-lg">Wealth Integration & Optimization</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Integration of personal wealth with business interests</li>
                    <li>• Tax-efficient wealth structuring strategies</li>
                    <li>• Cross-border wealth management solutions</li>
                    <li>• Family office establishment and governance</li>
                    <li>• Private trust structures and administration</li>
                  </ul>
                </div>
                <div className="p-6 bg-gray-50 rounded-lg">
                  <h4 className="font-semibold text-[#0C2340] mb-3 text-lg">Legacy & Succession Planning</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Multi-generational wealth transfer strategies</li>
                    <li>• Family enterprise succession planning</li>
                    <li>• Comprehensive estate planning and asset protection</li>
                    <li>• Philanthropic structuring and charitable foundations</li>
                    <li>• Family governance and constitution frameworks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-4 text-[#0C2340]">
                Preserve and Enhance Your Family Legacy
              </h3>
              <p className="text-gray-700 mb-6">
                Experience bespoke private client services that seamlessly integrate personal wealth with business interests for multi-generational prosperity.
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
