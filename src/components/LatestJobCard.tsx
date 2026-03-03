// import Image from 'next/image';

// interface LatestJobCardProps {
//   icon: string;
//   title: string;
//   location: string;
//   type: string;
//   categories: string[];
// }

// export function LatestJobCard({
//   icon,
//   title,
//   location,
//   type,
//   categories,
// }: LatestJobCardProps) {
//   return (
//     <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
//       <div className="flex flex-col md:flex-row md:items-center gap-4">
//         {/* LEFT - Icon */}
//         <div className="w-14 h-14 relative shrink-0">
//           <Image src={icon} alt={title} fill className="object-contain" />
//         </div>

//         {/* RIGHT - Content */}
//         <div className="flex-1">
//           {/* Title */}
//           <h3 className="text-xl font-semibold text-[#25324B]">{title}</h3>

//           {/* Location */}
//           <p className="text-sm text-gray-500 mt-1">{location}</p>

//           {/* Tags Row */}
//           <div className="flex flex-wrap items-center gap-3 mt-4">
//             {/* Type */}
//             <span className="bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full">
//               {type}
//             </span>
//             <span>|</span>

//             {/* Categories */}
//             {categories.map((cat, index) => (
//               <span
//                 key={index}
//                 className="border border-orange-300 text-orange-500 text-xs font-medium px-3 py-1 rounded-full"
//               >
//                 {cat}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import Image from 'next/image';
import { MapPin, Briefcase, Clock, DollarSign } from 'lucide-react';

interface LatestJobCardProps {
  icon: string;
  title: string;
  location: string;
  type: string;
  categories: string[];
  company?: string;
  postedAt?: string;
  salary?: string;
}

export function LatestJobCard({
  icon,
  title,
  location,
  type,
  categories,
  company,
  postedAt,
  salary,
}: LatestJobCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all hover:border-[#4640DE]/20 group">
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        {/* Icon */}
        <div className="w-14 h-14 relative shrink-0 bg-gray-50 rounded-lg p-2 group-hover:bg-[#4640DE]/5 transition-colors">
          <Image src={icon} alt={title} fill className="object-contain p-2" />
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Title and Company */}
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="text-lg font-semibold text-[#25324B] group-hover:text-[#4640DE] transition-colors">
                {title}
              </h3>
              {company && (
                <p className="text-sm text-gray-500 mt-0.5">{company}</p>
              )}
            </div>

            {/* Posted Time */}
            {postedAt && (
              <span className="text-xs text-gray-400 bg-gray-50 px-2 py-1 rounded-full">
                {postedAt}
              </span>
            )}
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 mt-2">
            <MapPin className="w-4 h-4 text-gray-400" />
            <p className="text-sm text-gray-600">{location}</p>
          </div>

          {/* Tags Row */}
          <div className="flex flex-wrap items-center gap-3 mt-4">
            {/* Type Badge */}
            <span className="bg-green-100 text-green-600 text-xs font-medium px-3 py-1 rounded-full">
              {type}
            </span>

            {/* Separator */}
            <span className="text-gray-300 hidden sm:inline">|</span>

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

          {/* Footer with Salary and Apply */}
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            {salary && (
              <div className="flex items-center gap-1">
                <DollarSign className="w-4 h-4 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">
                  {salary}
                </span>
                <span className="text-xs text-gray-400">/year</span>
              </div>
            )}

            <button className="text-sm font-medium text-[#4640DE] hover:text-[#4640DE]/80 transition-colors">
              Apply Now →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
