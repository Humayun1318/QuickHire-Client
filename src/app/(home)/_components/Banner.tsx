'use client';

import Image from 'next/image';
import Navbar from '../../../components/shared/Navbar';
import { useState } from 'react';
import { Job } from '@/types';

import { Search, MapPin, ChevronDown } from 'lucide-react';
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
    <div className="relative md:h-[794px] w-full ">
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
        <div className="absolute h-full w-[60%] bottom-0 right-[5%] top-[45%]  md:hidden">
          <Image
            src="/images/Pattern.png"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        {/* Left side background color */}
        {/* <div className="absolute left-0 top-0 w-[30%] h-full bg-white hidden md:block" /> */}
      </div>

      {/* Content - On top of background */}
      <div
        className="relative z-10 h-full flex flex-col
          /* MOBILE: 375px screen */
          max-w-[343px] mx-auto px-4

          /* TABLET: 768px screen */
          sm:max-w-[688px] sm:mx-auto

          /* DESKTOP: 1440px screen */
          lg:max-w-[1280px] lg:mx-auto"
      >
        <Navbar />

        {/* Banner Content - Takes remaining height */}
        <div className="flex-1 w-full mt-4 md:mt-8">
          {/* Content container with EXACT 1280px width on desktop - NO PADDING */}
          <div className="md:h-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-8 lg:gap-12">
              {/* LEFT SIDE - Text Content */}
              <div className="flex items-center z-20 py-8 lg:py-0">
                <div className="space-y-4 md:space-y-6 lg:space-y-8 w-full">
                  {/* "Discover more than" text */}
                  <div className="space-y-1 md:space-y-2">
                    <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-[#25324B] leading-tight">
                      <span>Discover</span>
                      <br />
                      <span>more than </span>
                      <br />
                      <span className="text-[#26A4FF]">5000+ Jobs</span>
                    </h1>
                    <div className="w-[280px] sm:w-[350px] md:w-[400px] lg:w-[455px]">
                      <Image
                        src="/images/Vector.png"
                        alt="Underline"
                        width={455}
                        height={20}
                        className="object-contain w-full h-auto"
                      />
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-sans text-[#515B6F] text-sm sm:text-base md:text-lg lg:text-xl max-w-lg font-normal">
                    Great platform for the job seeker that searching for new
                    career heights and passionate about startups.
                  </p>

                  {/* Search Form */}
                  <div className="space-y-3 md:space-y-4 w-full lg:w-[130%] xl:w-[150%] relative z-30">
                    <div className="flex flex-col sm:flex-row gap-3 md:gap-4 bg-white p-3 sm:p-4 md:p-6 rounded-lg shadow-lg">
                      {/* Job title input with icon and bottom border */}
                      <div className="flex-1 relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                          type="text"
                          placeholder="Job title or keyword"
                          value={search}
                          onChange={(e) => setSearch(e.target.value)}
                          className="w-full pl-8 sm:pl-10 pr-4 py-2 sm:py-3 md:py-4 bg-white border-0 border-b-2 border-gray-200 font-sans text-sm sm:text-base text-gray-700 focus:outline-none focus:border-accent transition-colors placeholder:text-gray-400"
                        />
                      </div>

                      {/* Location input with icon and DOWN ARROW */}
                      <div className="flex-1 relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                        <input
                          type="text"
                          placeholder="Florence, Italy"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full pl-8 sm:pl-10 pr-8 sm:pr-10 py-2 sm:py-3 md:py-4 bg-white border-0 border-b-2 border-gray-200 font-sans text-sm sm:text-base text-gray-700 focus:outline-none focus:border-accent transition-colors placeholder:text-gray-400"
                        />
                      </div>

                      {/* Search button */}
                      <button className="bg-[#4640DE] hover:bg-accent/90 text-white font-sans font-medium px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg transition-colors whitespace-nowrap text-sm sm:text-base">
                        Search my job
                      </button>
                    </div>

                    {/* Popular searches */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-sans text-[#202430] text-xs sm:text-sm md:text-base font-medium">
                        Popular:
                      </span>
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {[
                          'UI Designer',
                          'Ux Researcher',
                          'Android',
                          'Admin',
                        ].map((item) => (
                          <button
                            key={item}
                            onClick={() => setSearch(item)}
                            className="font-sans text-xs sm:text-sm md:text-base font-medium text-[#202430] hover:text-[#4640DE] transition-colors"
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Content Image */}
              <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-full w-full hidden lg:flex items-start justify-end">
                <div className="relative w-full h-full">
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
    </div>
  );
}
