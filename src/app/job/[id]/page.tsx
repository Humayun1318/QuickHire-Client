'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Navbar from '@/components/shared/Navbar';
import Footer from '@/components/shared/Footer';
import { ApplicationModal } from './_components/ApplicationModal';
import Container from '@/components/Container';

import { ArrowLeft } from 'lucide-react';

// Simple mock data
const jobs = [
  {
    id: 1,
    slug: 'senior-product-designer',
    title: 'Senior Product Designer',
    company: 'Designify',
    location: 'Remote · USA',
    type: 'Full Time',
    category: 'Design',
    postedAt: '2 days ago',
    description:
      'We are looking for a Senior Product Designer to join our growing design team. You will be responsible for leading the design of key features and products, working closely with product managers and engineers.',
  },
  {
    id: 2,
    slug: 'frontend-developer',
    title: 'Frontend Developer',
    company: 'TechCorp',
    location: 'Berlin · Germany',
    type: 'Full Time',
    category: 'Development',
    postedAt: '1 day ago',
    description:
      'We are seeking a talented Frontend Developer to join our engineering team. You will be building responsive web applications using modern React frameworks.',
  },
  {
    id: 3,
    slug: 'marketing-manager',
    title: 'Marketing Manager',
    company: 'GrowthHub',
    location: 'London · UK',
    type: 'Part Time',
    category: 'Marketing',
    postedAt: '3 days ago',
    description:
      'Lead our marketing campaigns and grow our brand presence across multiple channels. Develop strategies to increase user acquisition and engagement.',
  },
];

export default function JobDetailsPage() {
  const params = useParams();
  const slug = Number(params.id as string); // Assuming the route is /job/[id]
  const [job, setJob] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const foundJob = jobs.find((j) => j.id === slug);
    setTimeout(() => {
      setJob(foundJob);
      setLoading(false);
    }, 300);
  }, [slug]);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Container>
        <Navbar />
      </Container>

      <main className="flex-1 pt-20 md:pt-24">
        <Container>
          <div className="py-6 md:py-8">
            {/* Back Navigation */}
            <Link
              href="/jobs"
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-[#4640DE] transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Jobs
            </Link>

            {/* Job Details Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 md:p-8">
              {loading ? (
                /* Loading Skeleton */
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="h-8 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="h-5 bg-gray-200 rounded w-1/2 animate-pulse"></div>
                    <div className="flex gap-3">
                      <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
                      <div className="h-6 bg-gray-200 rounded w-20 animate-pulse"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                  </div>
                </div>
              ) : !job ? (
                /* Not Found State */
                <div className="text-center py-12">
                  <h2 className="font-heading text-xl font-semibold text-gray-900 mb-2">
                    Job Not Found
                  </h2>
                  <p className="text-gray-600 mb-6">
                    The job you're looking for doesn't exist.
                  </p>
                  <Link
                    href="/jobs"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#4640DE] text-white rounded-lg hover:bg-[#4640DE]/90 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Jobs
                  </Link>
                </div>
              ) : (
                /* Job Content */
                <>
                  {/* Title */}
                  <h1 className="font-heading text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                    {job.title}
                  </h1>

                  {/* Company & Meta */}
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="font-sans text-gray-700 font-medium">
                      {job.company}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="font-sans text-gray-600 text-sm">
                      {job.location}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="font-sans text-gray-500 text-sm">
                      Posted {job.postedAt}
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-green-100 text-green-600 text-xs font-medium px-3 py-1.5 rounded-full">
                      {job.type}
                    </span>
                    <span className="border border-orange-300 text-orange-500 text-xs font-medium px-3 py-1.5 rounded-full">
                      {job.category}
                    </span>
                  </div>

                  {/* Description */}
                  <div className="border-t border-gray-100 pt-6">
                    <h2 className="font-heading text-lg font-semibold text-gray-900 mb-3">
                      Job Description
                    </h2>
                    <p className="font-sans text-gray-600 leading-relaxed">
                      {job.description}
                    </p>
                  </div>

                  {/* Apply Button */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="w-full sm:w-auto px-8 py-3 bg-[#4640DE] hover:bg-[#4640DE]/90 text-white font-sans font-medium rounded-lg transition-colors"
                    >
                      Apply for this position
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </Container>
      </main>

      <Footer />

      {/* Application Modal */}
      {job && (
        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          jobTitle={job.title}
          companyName={job.company}
        />
      )}
    </div>
  );
}
