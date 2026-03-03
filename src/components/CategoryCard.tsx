import Link from 'next/link';
import Image from 'next/image';

interface CategoryCardProps {
  name: string;
  jobs: number;
  icon: string;
}

export function CategoryCard({ name, jobs, icon }: CategoryCardProps) {
  return (
    <Link
      href={`/jobs?category=${name.toLowerCase()}`}
      className="group flex flex-col sm:flex-row md:flex-col items-center sm:items-start gap-3 sm:gap-4 p-4 sm:p-5 md:p-6 border border-gray-200 hover:bg-[#4640DE] hover:text-white rounded-lg hover:border-accent hover:shadow-md transition-all"
    >
      {/* Icon */}
      <div className="relative w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 flex-shrink-0">
        <Image src={icon} alt={name} fill className="object-contain" />
      </div>

      {/* Text Content */}
      <div className="text-center sm:text-left">
        <h3 className="font-heading text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-[#25324B] group-hover:text-white transition-colors">
          {name}
        </h3>
        <p className="font-sans text-xs sm:text-sm md:text-base text-[#515B6F] group-hover:text-white mt-0.5 sm:mt-1">
          {jobs} jobs available →
        </p>
      </div>
    </Link>
  );
}
