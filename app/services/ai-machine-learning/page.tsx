import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Bot, Shield, FileText, Zap } from "lucide-react";

export default function AIMachineLearning() {
  const keyServices = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI/ML Legal & Regulatory Compliance",
      description: "Meticulous guidance through legal, regulatory, and ethical complexities of developing and deploying AI/ML technologies with comprehensive compliance frameworks",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Governance & IP Protection",
      description: "Robust AI governance structures and strategic intellectual property protection for AI innovations, algorithms, and data-driven technologies",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Technology Agreements & Licensing",
      description: "Expert structuring of investments, joint ventures, and licensing arrangements with essential technology agreements supporting operational realities",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Future Regulatory Risk Management",
      description: "Forward-looking legal solutions addressing future regulatory risks and ensuring long-term compliance in the evolving AI/ML landscape",
    },
  ];

  const aiTechnologies = [
    "Machine Learning Algorithms",
    "Natural Language Processing",
    "Computer Vision Systems",
    "Deep Learning Networks",
    "Robotics & Automation",
    "AI-Powered Analytics",
    "Automated Decision Systems",
    "Generative AI Technologies",
    "AI in Healthcare & Life Sciences",
    "Financial AI & Algorithmic Trading",
    "Autonomous Systems & Vehicles",
    "Smart Manufacturing & Industry 4.0",
    "AI-Driven EdTech Solutions",
    "Conversational AI & Virtual Assistants",
    "AI Ethics & Bias Mitigation",
    "Federated Learning Systems",
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
            <Bot size={32} className="text-[#CBA135]" />
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-[#0C2340]">
            Artificial Intelligence & Machine Learning
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto">
            Forward-Looking Legal Solutions at the Nexus of Law, Technology & Innovation
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-sm mb-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-lg leading-relaxed mb-6">
                Gaggar & Partners' AI/ML practice delivers forward-looking legal solutions at the nexus of law, technology, and innovation. We position ourselves at the forefront of emerging legal frameworks governing artificial intelligence and machine learning technologies.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                We meticulously guide clients through the legal, regulatory, and ethical complexities of developing and deploying AI/ML technologies, ensuring comprehensive compliance, robust AI governance, and strategic IP protection. Our approach integrates technical understanding with sophisticated legal analysis.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                Our team expertly structures and executes investments, joint ventures, and licensing arrangements, drafting essential technology agreements to support clients' operational realities and future regulatory risks. We provide strategic counsel that anticipates regulatory evolution in the AI space.
              </p>

              <p className="text-lg leading-relaxed mb-6">
                With deep expertise in AI ethics, algorithmic accountability, data governance, and emerging regulatory frameworks, we help clients navigate the complex intersection of innovation and compliance. Our practice encompasses both cutting-edge technology development and responsible AI deployment.
              </p>

              <p className="text-lg leading-relaxed">
                From AI model development and deployment to complex multi-jurisdictional regulatory compliance, we deliver comprehensive legal solutions that enable our clients to innovate with confidence while maintaining robust governance and risk management frameworks.
              </p>
            </div>
          </div>

          {/* Key Services */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              Our Comprehensive AI/ML Legal Expertise
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

          {/* AI Technologies */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl   font-bold mb-8 text-[#0C2340] text-center">
              AI/ML Technologies & Applications
            </h2>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <div className="flex flex-wrap gap-3 justify-center">
                {aiTechnologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-[#0C2340]/10 text-[#0C2340] rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Legal Framework */}
          <div className="mb-12">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-6 text-[#0C2340] text-center">
                Comprehensive AI/ML Legal Framework
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Regulatory Compliance</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• AI governance frameworks and policies</li>
                    <li>• Data protection and privacy compliance</li>
                    <li>• Algorithmic accountability and transparency</li>
                    <li>• Cross-border regulatory alignment</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">IP & Innovation</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• AI model and algorithm protection</li>
                    <li>• Patent strategy for AI innovations</li>
                    <li>• Trade secret and know-how protection</li>
                    <li>• Open source AI licensing strategies</li>
                  </ul>
                </div>
                <div className="p-4 text-center">
                  <h4 className="font-semibold text-[#0C2340] mb-3">Commercial Transactions</h4>
                  <ul className="text-sm text-gray-700 space-y-2 text-left">
                    <li>• AI technology licensing and joint ventures</li>
                    <li>• Investment structuring for AI companies</li>
                    <li>• Partnership agreements and collaborations</li>
                    <li>• Risk allocation in AI deployments</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl md:text-2xl   font-bold mb-4 text-[#0C2340]">
                Ready to Navigate the AI/ML Legal Landscape?
              </h3>
              <p className="text-gray-700 mb-6">
                Experience forward-looking legal solutions that address current compliance needs and future regulatory risks in AI/ML development and deployment.
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
