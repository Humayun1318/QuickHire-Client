'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { LatestJobCard } from '@/components/LatestJobCard';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import Container from '@/components/Container';

import { Search, X, Briefcase, Filter } from 'lucide-react';
import { useJobs } from '@/services/jobServices';

// Filter options
const jobTypes = ['Full Time', 'Part Time', 'Contract', 'Remote', 'Internship'];
const categories = [
  'Design',
  'Development',
  'Marketing',
  'Sales',
  'Finance',
  'Support',
  'Product',
  'Data',
];
const locations = [
  'Remote',
  'USA',
  'Europe',
  'UK',
  'Germany',
  'France',
  'Canada',
  'Asia',
];

export default function JobsPage() {
  const searchParams = useSearchParams();
  const { data: jobs = [], isLoading, error } = useJobs();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState('newest');
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Handle search params from home page
  useEffect(() => {
    const searchParam = searchParams.get('search');
    const locationParam = searchParams.get('location');

    if (searchParam) {
      setSearchQuery(searchParam);
    }

    if (locationParam) {
      // Find matching location in our locations list
      const matchedLocation = locations.find((loc) =>
        locationParam.toLowerCase().includes(loc.toLowerCase())
      );
      if (matchedLocation) {
        setSelectedLocations([matchedLocation]);
      }
    }
  }, [searchParams]);

  // Filter jobs based on selected filters
  useEffect(() => {
    let filtered = jobs;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(
        (job) =>
          job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          job.company.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Job type filter
    if (selectedTypes.length > 0) {
      filtered = filtered.filter((job) => selectedTypes.includes(job.type));
    }

    // Category filter
    if (selectedCategories.length > 0) {
      filtered = filtered.filter((job) =>
        job.categories.some((cat) => selectedCategories.includes(cat))
      );
    }

    // Location filter
    if (selectedLocations.length > 0) {
      filtered = filtered.filter((job) =>
        selectedLocations.some((loc) => job.location.includes(loc))
      );
    }

    setFilteredJobs(filtered);
  }, [jobs, searchQuery, selectedTypes, selectedCategories, selectedLocations]);

  const toggleFilter = (
    type: 'type' | 'category' | 'location',
    value: string
  ) => {
    if (type === 'type') {
      setSelectedTypes((prev) =>
        prev.includes(value)
          ? prev.filter((t) => t !== value)
          : [...prev, value]
      );
    } else if (type === 'category') {
      setSelectedCategories((prev) =>
        prev.includes(value)
          ? prev.filter((c) => c !== value)
          : [...prev, value]
      );
    } else {
      setSelectedLocations((prev) =>
        prev.includes(value)
          ? prev.filter((l) => l !== value)
          : [...prev, value]
      );
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedTypes([]);
    setSelectedCategories([]);
    setSelectedLocations([]);
    setSortBy('newest');
  };

  const totalFilters =
    selectedTypes.length + selectedCategories.length + selectedLocations.length;

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Container>
        <Navbar />
      </Container>

      <main className="flex-1 pt-12">
        {/* Header Section */}
        <Container>
          <div className="py-8 md:py-12">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                  Find Your Dream Job
                </h1>
                <p className="font-sans text-gray-600 mt-2">
                  {isLoading
                    ? 'Loading jobs...'
                    : `Browse through ${filteredJobs.length} jobs available`}
                </p>
              </div>

              {/* Mobile Filter Button - Only show when not loading and no error */}
              {!isLoading && !error && (
                <div className="lg:hidden">
                  <button
                    onClick={() => setMobileFiltersOpen(true)}
                    className="flex items-center justify-center gap-2 px-6 py-3 bg-[#4640DE] text-white rounded-lg font-sans text-sm font-medium w-full"
                  >
                    <Filter className="w-4 h-4" />
                    <span>Filters</span>
                    {totalFilters > 0 && (
                      <span className="bg-white text-[#4640DE] w-5 h-5 rounded-full text-xs flex items-center justify-center">
                        {totalFilters}
                      </span>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </Container>

        {/* Main Content - Two Column Layout */}
        <Container>
          <div className="flex flex-col lg:flex-row gap-8 py-8">
            {/* Left Sidebar - Filters (only show when not loading and no error) */}
            {!isLoading && !error && (
              <div className="hidden lg:block lg:w-[35%] xl:w-[30%]">
                <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="font-heading text-lg font-semibold text-gray-900">
                      Filters
                    </h2>
                    {totalFilters > 0 && (
                      <button
                        onClick={clearAllFilters}
                        className="text-sm text-[#4640DE] hover:text-[#4640DE]/80 font-medium"
                      >
                        Clear all
                      </button>
                    )}
                  </div>

                  {/* Search Input */}
                  <div className="mb-6">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search jobs..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#4640DE]/20 focus:border-[#4640DE] transition-colors"
                      />
                    </div>
                  </div>

                  {/* Sort By */}
                  <div className="mb-6">
                    <h3 className="font-sans text-sm font-semibold text-gray-900 mb-3">
                      Sort By
                    </h3>
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-sans text-sm text-gray-700 bg-white focus:outline-none focus:ring-2 focus:ring-[#4640DE]/20 focus:border-[#4640DE] transition-colors"
                    >
                      <option value="newest">Newest First</option>
                      <option value="oldest">Oldest First</option>
                    </select>
                  </div>

                  {/* Job Type Filter */}
                  <div className="mb-6">
                    <h3 className="font-sans text-sm font-semibold text-gray-900 mb-3">
                      Job Type
                    </h3>
                    <div className="space-y-2">
                      {jobTypes.map((type) => (
                        <label
                          key={type}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={selectedTypes.includes(type)}
                            onChange={() => toggleFilter('type', type)}
                            className="w-4 h-4 rounded border-gray-300 text-[#4640DE] focus:ring-[#4640DE]"
                          />
                          <span className="font-sans text-sm text-gray-700 group-hover:text-gray-900">
                            {type}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h3 className="font-sans text-sm font-semibold text-gray-900 mb-3">
                      Category
                    </h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                      {categories.map((category) => (
                        <label
                          key={category}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={selectedCategories.includes(category)}
                            onChange={() => toggleFilter('category', category)}
                            className="w-4 h-4 rounded border-gray-300 text-[#4640DE] focus:ring-[#4640DE]"
                          />
                          <span className="font-sans text-sm text-gray-700 group-hover:text-gray-900">
                            {category}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Location Filter */}
                  <div className="mb-6">
                    <h3 className="font-sans text-sm font-semibold text-gray-900 mb-3">
                      Location
                    </h3>
                    <div className="space-y-2">
                      {locations.map((location) => (
                        <label
                          key={location}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            checked={selectedLocations.includes(location)}
                            onChange={() => toggleFilter('location', location)}
                            className="w-4 h-4 rounded border-gray-300 text-[#4640DE] focus:ring-[#4640DE]"
                          />
                          <span className="font-sans text-sm text-gray-700 group-hover:text-gray-900">
                            {location}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Active Filters */}
                  {totalFilters > 0 && (
                    <div className="pt-4 border-t border-gray-200">
                      <h3 className="font-sans text-sm font-semibold text-gray-900 mb-3">
                        Active Filters
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedTypes.map((type) => (
                          <span
                            key={type}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-[#4640DE]/10 text-[#4640DE] font-sans text-xs rounded-full"
                          >
                            {type}
                            <X
                              className="w-3 h-3 cursor-pointer hover:text-[#4640DE]/80"
                              onClick={() => toggleFilter('type', type)}
                            />
                          </span>
                        ))}
                        {selectedCategories.map((cat) => (
                          <span
                            key={cat}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-[#4640DE]/10 text-[#4640DE] font-sans text-xs rounded-full"
                          >
                            {cat}
                            <X
                              className="w-3 h-3 cursor-pointer hover:text-[#4640DE]/80"
                              onClick={() => toggleFilter('category', cat)}
                            />
                          </span>
                        ))}
                        {selectedLocations.map((loc) => (
                          <span
                            key={loc}
                            className="inline-flex items-center gap-1 px-3 py-1 bg-[#4640DE]/10 text-[#4640DE] font-sans text-xs rounded-full"
                          >
                            {loc}
                            <X
                              className="w-3 h-3 cursor-pointer hover:text-[#4640DE]/80"
                              onClick={() => toggleFilter('location', loc)}
                            />
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Right Side - Job Cards */}
            <div className="flex-1 lg:w-[65%] xl:w-[70%]">
              {/* Results Stats */}
              {!isLoading && !error && (
                <div className="flex items-center justify-between mb-6">
                  <p className="font-sans text-sm text-gray-600">
                    Showing{' '}
                    <span className="font-semibold text-gray-900">
                      {filteredJobs.length}
                    </span>{' '}
                    jobs
                  </p>
                </div>
              )}

              {/* Loading State */}
              {isLoading && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="bg-white rounded-xl border border-gray-200 p-6"
                    >
                      <div className="flex gap-4">
                        <div className="w-14 h-14 bg-gray-200 rounded-lg animate-pulse"></div>
                        <div className="flex-1 space-y-3">
                          <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                          <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                          <div className="flex gap-2">
                            <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
                            <div className="h-6 bg-gray-200 rounded w-16 animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Error State */}
              {error && (
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                  <div className="flex flex-col items-center justify-center text-gray-400 max-w-md mx-auto">
                    <Briefcase className="w-16 h-16 mb-4 stroke-1 text-red-300" />
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                      Something went wrong
                    </h3>
                    <p className="font-sans text-gray-600 mb-6">
                      Failed to load jobs. Please try again later.
                    </p>
                    <button
                      onClick={() => window.location.reload()}
                      className="px-6 py-3 bg-[#4640DE] hover:bg-[#4640DE]/90 text-white font-sans text-sm font-medium rounded-lg transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                </div>
              )}

              {/* Empty State */}
              {!isLoading && !error && filteredJobs.length === 0 && (
                <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                  <div className="flex flex-col items-center justify-center text-gray-400 max-w-md mx-auto">
                    <Briefcase className="w-16 h-16 mb-4 stroke-1" />
                    <h3 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                      No jobs found
                    </h3>
                    <p className="font-sans text-gray-600 mb-6">
                      We couldn't find any jobs matching your criteria. Try
                      adjusting your filters or search query.
                    </p>
                    <button
                      onClick={clearAllFilters}
                      className="px-6 py-3 bg-[#4640DE] hover:bg-[#4640DE]/90 text-white font-sans text-sm font-medium rounded-lg transition-colors"
                    >
                      Clear all filters
                    </button>
                  </div>
                </div>
              )}

              {/* Job Cards Grid */}
              {!isLoading && !error && filteredJobs.length > 0 && (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredJobs.map((job) => (
                      <Link
                        href={`/job/${job.id}`}
                        key={job.id}
                        className="block"
                      >
                        <LatestJobCard
                          icon={job.icon}
                          title={job.title}
                          location={job.location}
                          type={job.type}
                          categories={job.categories}
                          company={job.company}
                        />
                      </Link>
                    ))}
                  </div>

                  {/* Load More Button */}
                  {filteredJobs.length > 8 && (
                    <div className="flex justify-center mt-8">
                      <button className="px-8 py-3 border border-gray-200 rounded-lg font-sans text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                        Load More Jobs
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </Container>

        {/* Mobile Filters Modal - Only show when not loading and no error */}
        {!isLoading && !error && mobileFiltersOpen && (
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setMobileFiltersOpen(false)}
            />

            {/* Modal */}
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
                <h3 className="font-heading text-lg font-semibold text-gray-900">
                  Filters
                </h3>
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              <div className="p-4 space-y-6">
                {/* Search Input */}
                <div>
                  <h4 className="font-sans text-sm font-semibold text-gray-900 mb-3">
                    Search
                  </h4>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      placeholder="Search jobs..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-4 py-2.5 border border-gray-200 rounded-lg font-sans text-sm focus:outline-none focus:ring-2 focus:ring-[#4640DE]/20 focus:border-[#4640DE]"
                    />
                  </div>
                </div>

                {/* Sort By */}
                <div>
                  <h4 className="font-sans text-sm font-semibold text-gray-900 mb-3">
                    Sort By
                  </h4>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg font-sans text-sm text-gray-700 bg-white"
                  >
                    <option value="newest">Newest First</option>
                    <option value="oldest">Oldest First</option>
                  </select>
                </div>

                {/* Job Type Filter */}
                <div>
                  <h4 className="font-sans text-sm font-semibold text-gray-900 mb-3">
                    Job Type
                  </h4>
                  <div className="space-y-3">
                    {jobTypes.map((type) => (
                      <label
                        key={type}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedTypes.includes(type)}
                          onChange={() => toggleFilter('type', type)}
                          className="w-5 h-5 rounded border-gray-300 text-[#4640DE] focus:ring-[#4640DE]"
                        />
                        <span className="font-sans text-base text-gray-700">
                          {type}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Category Filter */}
                <div>
                  <h4 className="font-sans text-sm font-semibold text-gray-900 mb-3">
                    Category
                  </h4>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <label
                        key={category}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={() => toggleFilter('category', category)}
                          className="w-5 h-5 rounded border-gray-300 text-[#4640DE] focus:ring-[#4640DE]"
                        />
                        <span className="font-sans text-base text-gray-700">
                          {category}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <h4 className="font-sans text-sm font-semibold text-gray-900 mb-3">
                    Location
                  </h4>
                  <div className="space-y-3">
                    {locations.map((location) => (
                      <label
                        key={location}
                        className="flex items-center gap-3 cursor-pointer"
                      >
                        <input
                          type="checkbox"
                          checked={selectedLocations.includes(location)}
                          onChange={() => toggleFilter('location', location)}
                          className="w-5 h-5 rounded border-gray-300 text-[#4640DE] focus:ring-[#4640DE]"
                        />
                        <span className="font-sans text-base text-gray-700">
                          {location}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear All */}
                {totalFilters > 0 && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-[#4640DE] font-medium"
                  >
                    Clear all filters
                  </button>
                )}
              </div>

              {/* Apply Button */}
              <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="w-full bg-[#4640DE] text-white font-sans font-medium py-3 rounded-lg hover:bg-[#4640DE]/90 transition-colors"
                >
                  Show {filteredJobs.length} jobs
                </button>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
