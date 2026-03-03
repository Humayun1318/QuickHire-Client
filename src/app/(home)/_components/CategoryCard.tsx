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
      className="group flex md:flex-col items-center md:items-start p-6 border border-gray-200 hover:bg-[#4640DE] hover:text-white rounded-lg hover:border-accent hover:shadow-md transition-all"
    >
      {/* Icon */}
      <div className="relative w-12 h-12">
        <Image src={icon} alt={name} fill className="object-contain" />
      </div>

      {/* Text Content */}
      <div>
        <h3 className="font-heading text-xl md:text-2xl font-semibold text-[#25324B] group-hover:text-white transition-colors">
          {name}
        </h3>
        <p className="font-sans text-[#515B6F] group-hover:text-white mt-1">
          {jobs} jobs available →
        </p>
      </div>
    </Link>
  );
}
