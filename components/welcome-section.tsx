import { Users, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function WelcomeSection() {
  return (
    <section className="py-12 md:py-16 bg-legal-pattern-subtle rounded-3xl mx-4 my-6">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl   font-bold mb-6 text-[#0C2340]">
            WELCOME TO GAGGAR & PARTNERS
          </h2>
          <p className="text-lg text-gray-700">
            Our expertise lies in strategy and innovation. We understand your universe and the way the new age economy
            is unravelling. We are ideally poised to partner with our clients foraying in the future and are committed
            to building a long lasting relationship founded on the bedrock of trust.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="group flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 rounded-lg bg-[#0C2340]/5 flex items-center justify-center mb-4 group-hover:bg-[#CBA135]/10 group-hover:scale-110 transition-all duration-300">
              <Users size={24} className="text-[#CBA135]" strokeWidth="1.5" />
            </div>
            <h3 className="text-xl   font-semibold mb-2 text-[#0C2340] group-hover:text-[#CBA135] transition-colors">
              Understanding the Client
            </h3>
            <p className="text-gray-600">
              We take time to understand your business needs and challenges to provide tailored solutions.
            </p>
          </div>

          <div className="group flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 rounded-lg bg-[#0C2340]/5 flex items-center justify-center mb-4 group-hover:bg-[#CBA135]/10 group-hover:scale-110 transition-all duration-300">
              <Lightbulb size={24} className="text-[#CBA135]" strokeWidth="1.5" />
            </div>
            <h3 className="text-xl   font-semibold mb-2 text-[#0C2340] group-hover:text-[#CBA135] transition-colors">
              Innovative Solution
            </h3>
            <p className="text-gray-600">
              We develop creative and effective strategies to address complex legal challenges with innovative
              solutions.
            </p>
          </div>

          <div className="group flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 rounded-lg bg-[#0C2340]/5 flex items-center justify-center mb-4 group-hover:bg-[#CBA135]/10 group-hover:scale-110 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#CBA135"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-globe"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                <path d="M2 12h20" />
              </svg>
            </div>
            <h3 className="text-lg   font-semibold mb-2 text-[#0C2340] group-hover:text-[#CBA135] transition-colors">
              Holistic Perspective
            </h3>
            <p className="text-gray-600">
              We provide comprehensive legal solutions that consider all aspects of your business and legal needs.
            </p>
          </div>

          <div className="group flex flex-col items-center text-center hover:-translate-y-2 transition-all duration-300">
            <div className="w-16 h-16 rounded-lg bg-[#0C2340]/5 flex items-center justify-center mb-4 group-hover:bg-[#CBA135]/10 group-hover:scale-110 transition-all duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#CBA135"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-shield-check"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-lg   font-semibold mb-2 text-[#0C2340] group-hover:text-[#CBA135] transition-colors">
              Trusted Advisor
            </h3>
            <p className="text-gray-600">
              We build long-lasting relationships founded on trust, integrity, and exceptional legal expertise.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            asChild
            variant="outline"
            className="border-[#0C2340] text-[#0C2340] hover:bg-[#0C2340] hover:text-white hover:scale-105 transition-all duration-200"
          >
            <Link href="/about-us" className="flex items-center">
              Learn More About Us
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
