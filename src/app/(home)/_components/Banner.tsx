'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { Job } from '@/types';
import { JobCard } from '@/components/JobCard';
import { JobSkeleton } from '@/components/JobSkeleton';
import { Search, MapPin, ChevronDown } from 'lucide-react'; // Added ChevronDown
import { fetcher } from '@/lib/api';
import { QueryFunctionContext } from '@tanstack/react-query';

const fetchJobs = async (
  context: QueryFunctionContext<[string, { search: string; location: string }]>
): Promise<Job[]> => {
  const [_key, { search, location }] = context.queryKey;
  const params = new URLSearchParams();
  if (search) params.append('search', search);
  if (location) params.append('location', location);
  return fetcher<Job[]>(`/api/jobs?${params.toString()}`);
};

export default function Banner() {
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');

  return (
    <div className="relative h-[794px] w-full">
      {/* Background Image - Behind everything, covers 70% of right side */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Desktop: Right side (60% width) */}
        <div className="absolute right-0 top-0 w-[60%] h-full hidden md:block">
          <Image
            src="/images/Pattern.png"
            alt="Background"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Mobile: Bottom right corner */}
        <div className="absolute bottom-0 right-0 w-[45%] h-[60%] top-[40%] md:hidden">
          <Image
            src="/images/Pattern.png"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        {/* Left side background color */}
        <div className="absolute left-0 top-0 w-[30%] h-full bg-white" />
      </div>

      {/* Content - On top of background */}
      <div className="relative z-10 h-full flex flex-col">
        <Navbar />

        {/* Banner Content - Takes remaining height */}
        <div className="flex-1 w-full mt-4 md:mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 h-full max-w-[1288px] mx-auto">
            {/* LEFT SIDE - Text Content */}
            <div className="flex items-center px-4 md:px-0 md:pr-8 z-20">
              <div className="space-y-6 md:space-y-8 w-full">
                {/* "Discover more than" text */}
                <div className="space-y-2">
                  <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-semibold text-[#25324B]">
                    <span className="">Discover</span>
                    <br /> <span>more than </span>
                    <br />
                    <span className="text-[#26A4FF]">5000+ Jobs</span>
                  </h1>
                  <Image
                    src="/images/Vector.png"
                    alt="Underline"
                    width={455}
                    height={20}
                    className="object-contain"
                  />
                </div>

                {/* Description */}
                <p className="font-sans text-[#515B6F] text-lg md:text-xl max-w-lg font-normal">
                  Great platform for the job seeker that searching for new
                  career heights and passionate about startups.
                </p>

                {/* Search Form */}
                <div className="space-y-4 w-full md:w-[150%] relative z-30 ">
                  <div className="flex flex-col sm:flex-row gap-4 bg-white p-4 md:p-6 rounded-lg shadow-lg">
                    {/* Job title input with icon and bottom border */}
                    <div className="flex-1 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Job title or keyword"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="w-full pl-10 pr-4 py-3 md:py-4 bg-white border-0 border-b-2 border-gray-200 font-sans text-gray-700 focus:outline-none focus:border-accent transition-colors placeholder:text-gray-400"
                      />
                    </div>

                    {/* Location input with icon and DOWN ARROW */}
                    <div className="flex-1 relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        placeholder="Florence, Italy"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full pl-10 pr-10 py-3 md:py-4 bg-white border-0 border-b-2 border-gray-200 font-sans text-gray-700 focus:outline-none focus:border-accent transition-colors placeholder:text-gray-400"
                      />
                    </div>

                    {/* Search button */}
                    <button className="bg-[#4640DE] hover:bg-accent/90 text-white font-sans font-medium px-6 md:px-8 py-3 md:py-4 rounded-lg transition-colors whitespace-nowrap">
                      Search my job
                    </button>
                  </div>

                  {/* Popular searches */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-sans text-[#202430] text-base font-medium">
                      Popular:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {['UI Designer', 'Ux Researcher', 'Android', 'Admin'].map(
                        (item) => (
                          <button
                            key={item}
                            onClick={() => setSearch(item)}
                            className="font-sans text-base font-medium text-[#202430]"
                          >
                            {item}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE - Content Image (70% width area) - WITH SEARCH FORM OVER IT */}
            <div className="relative h-full hidden md:flex items-start justify-end">
              <div className="relative w-[100%] h-full">
                <Image
                  src="/images/Pic.png"
                  alt="Job seekers"
                  fill
                  className="object-contain"
                  style={{ objectPosition: 'top right' }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
