import Image from 'next/image';

interface LatestJobCardProps {
  icon: string;
  title: string;
  location: string;
  type: string;
  categories: string[];
}

export function LatestJobCard({
  icon,
  title,
  location,
  type,
  categories,
}: LatestJobCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        {/* LEFT - Icon */}
        <div className="w-14 h-14 relative shrink-0">
          <Image src={icon} alt={title} fill className="object-contain" />
        </div>

        {/* RIGHT - Content */}
        <div className="flex-1">
          {/* Title */}
          <h3 className="text-xl font-semibold text-[#25324B]">{title}</h3>

          {/* Location */}
          <p className="text-sm text-gray-500 mt-1">{location}</p>

          {/* Tags Row */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            {/* Type */}
            <span className="bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full">
              {type}
            </span>
            <span>|</span>

            {/* Categories */}
            {categories.map((cat, index) => (
              <span
                key={index}
                className="border border-orange-300 text-orange-500 text-xs font-medium px-3 py-1 rounded-full"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
