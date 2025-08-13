import Image from "next/image"

interface MemberCardProps {
  name: string
  position: string
  bio: string
  image: string
}

export function MemberCard({ name, position, bio, image }: MemberCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/3">
          <div className="relative h-64 md:h-full">
            <Image src={image || "/placeholder.svg"} alt={name} fill className="object-contain" />
          </div>
        </div>
        <div className="md:w-2/3 p-4 md:p-6 text-center md:text-left">
          <h3 className="text-xl md:text-2xl font-serif font-semibold mb-1 text-[#0C2340]">{name}</h3>
          <p className="text-[#CBA135] font-medium mb-3 md:mb-4 text-sm md:text-base">{position}</p>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">{bio}</p>
        </div>
      </div>
    </div>
  )
}
