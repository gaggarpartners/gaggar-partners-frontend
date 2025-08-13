import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  showButton?: boolean
}

export function ServiceCard({ title, description, icon, showButton = false }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "scale":
        return (
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
            className="md:w-8 md:h-8"
          >
            <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
            <path d="M7 21h10" />
            <path d="M12 3v18" />
            <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
          </svg>
        )
      case "building":
        return (
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
            className="md:w-8 md:h-8"
          >
            <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
            <path d="M9 22v-4h6v4" />
            <path d="M8 6h.01" />
            <path d="M16 6h.01" />
            <path d="M12 6h.01" />
            <path d="M12 10h.01" />
            <path d="M12 14h.01" />
            <path d="M16 10h.01" />
            <path d="M16 14h.01" />
            <path d="M8 10h.01" />
            <path d="M8 14h.01" />
          </svg>
        )
      case "gavel":
        return (
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
            className="md:w-8 md:h-8"
          >
            <path d="m14 13-7.5 7.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L11 10" />
            <path d="m16 16 6-6" />
            <path d="m8 8 6-6" />
            <path d="m9 7 8 8" />
            <path d="m21 11-8-8" />
          </svg>
        )
      case "trophy":
        return (
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
            className="md:w-8 md:h-8"
          >
            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
            <path d="M4 22h16" />
            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
          </svg>
        )
      case "shield":
        return (
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
            className="md:w-8 md:h-8"
          >
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
            <path d="m9 12 2 2 4-4" />
          </svg>
        )
      case "radio":
        return (
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
            className="md:w-8 md:h-8"
          >
            <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
            <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
            <circle cx="12" cy="12" r="2" />
            <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
            <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
          </svg>
        )
      case "home":
        return (
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
            className="md:w-8 md:h-8"
          >
            <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" />
            <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          </svg>
        )
      case "leaf":
        return (
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
            className="md:w-8 md:h-8"
          >
            <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
            <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
          </svg>
        )
      case "tv":
        return (
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
            className="md:w-8 md:h-8"
          >
            <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
            <polyline points="17,2 12,7 7,2" />
          </svg>
        )
      case "copyright":
        return (
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
            className="md:w-8 md:h-8"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
          </svg>
        )
      case "landmark":
        return (
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
            className="md:w-8 md:h-8"
          >
            <line x1="3" x2="21" y1="22" y2="22" />
            <line x1="6" x2="6" y1="18" y2="11" />
            <line x1="10" x2="10" y1="18" y2="11" />
            <line x1="14" x2="14" y1="18" y2="11" />
            <line x1="18" x2="18" y1="18" y2="11" />
            <polygon points="12 2 20 7 4 7" />
          </svg>
        )
      default:
        return (
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
            className="md:w-8 md:h-8"
          >
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
          </svg>
        )
    }
  }

  // Truncate description to 3 lines (approximately 150 characters)
  const truncateDescription = (text: string, maxLength = 150) => {
    if (text.length <= maxLength) return text
    return text.substring(0, maxLength).trim() + "..."
  }

  const shouldShowButton = description.length > 150

  return (
    <div className="bg-white rounded-lg shadow-md p-4 md:p-6 h-full flex flex-col">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#0C2340] flex items-center justify-center mb-3 md:mb-4 mx-auto">
        {getIcon()}
      </div>
      <h3 className="text-lg md:text-xl   font-semibold mb-2 md:mb-3 text-[#0C2340] leading-tight text-center">
        {title}
      </h3>
      <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center flex-grow">
        {truncateDescription(description)}
      </p>
      {(shouldShowButton || showButton) && (
        <div className="mt-4 text-center">
          <Button
            variant="outline"
            size="sm"
            className="border-[#CBA135] text-[#CBA135] hover:bg-[#CBA135] hover:text-white"
          >
            Learn More
            <ArrowRight size={14} className="ml-2" />
          </Button>
        </div>
      )}
    </div>
  )
}
