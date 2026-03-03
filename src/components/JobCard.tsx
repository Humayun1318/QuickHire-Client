import Image from 'next/image';

interface JobCardProps {
  icon: string;
  type: string;
  title: string;
  location: string;
  description: string;
  category: string;
}

export function JobCard({
  icon,
  type,
  title,
  location,
  description,
  category,
}: JobCardProps) {
  return (
    <div className="min-w-[280px] bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      {/* Top Row */}
      <div className="flex justify-between items-start mb-4">
        <div className="w-10 h-10 relative">
          <Image src={icon} alt={title} fill className="object-contain" />
        </div>

        <span className="text-base font-normal px-3 py-1 border border-[#4640DE] text-[#4640DE] rounded-md">
          {type}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-lg font-semibold text-[#25324B] mb-1">{title}</h3>

      {/* Location */}
      <p className="text-base font-normal text-[#515B6F] mb-3">{location}</p>

      {/* Description */}
      <p className="text-base font-normal  text-[#7C8493] line-clamp-2 mb-4">
        {description}
      </p>

      {/* Category */}
      <span className="inline-block bg-green-100 text-green-700 text-xs font-medium px-3 py-1 rounded-full">
        {category}
      </span>
    </div>
  );
}
