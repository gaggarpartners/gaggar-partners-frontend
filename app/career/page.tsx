import type { Metadata } from "next"
import { Suspense } from "react"
import CareerClientPageGAS from "./CareerClientPageGAS"

export const metadata: Metadata = {
  title: "Career Opportunities | Gaggar & Partners",
  description:
    "Join our team of legal professionals. Explore career opportunities at Gaggar & Partners and build your legal career with us.",
}

function CareerLoading() {
  return (
    <div className="min-h-screen bg-legal-pattern flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#CBA135] mx-auto mb-4"></div>
        <p className="text-[#0C2340] font-medium">Loading career page...</p>
      </div>
    </div>
  )
}

export default function CareerPage() {
  return (
    <Suspense fallback={<CareerLoading />}>
      <CareerClientPageGAS />
    </Suspense>
  )
}
