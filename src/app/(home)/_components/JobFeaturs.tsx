import { JobCard } from '@/components/JobCard';
import ReusableCustomSection from '@/components/ReusableCustomSection';

const jobs = [
  {
    id: 1,
    icon: '/images/design-icon.png',
    type: 'Full Time',
    title: 'Visual Designer',
    location: 'Blinkist · Granada, Spain',
    description:
      'Blinkist is looking for a Visual Designer to help team design systems and experiences.',
    category: 'Design',
  },
  {
    id: 2,
    icon: '/images/dev-icon.png',
    type: 'Full Time',
    title: 'Frontend Developer',
    location: 'Remote · USA',
    description: 'We are hiring a frontend developer with React experience.',
    category: 'Development',
  },
  {
    id: 3,
    icon: '/images/marketing-icon.png',
    type: 'Part Time',
    title: 'Marketing Manager',
    location: 'Berlin · Germany',
    description: 'Looking for a creative marketing manager to lead campaigns.',
    category: 'Marketing',
  },
  {
    id: 4,
    icon: '/images/finance-icon.png',
    type: 'Contract',
    title: 'Finance Analyst',
    location: 'London · UK',
    description: 'Join our finance team and analyze company growth.',
    category: 'Finance',
  },
];

export default function JobFeatures() {
  return (
    <ReusableCustomSection
      titleStart="Features"
      titleHighlight="Jobs"
      linkText="Show all jobs"
      linkHref="/jobs"
    >
      <section className="bg-white">
        {/* Mobile Scroll - Horizontal Scroll on Small Screens */}
        <div className="flex gap-4 sm:gap-5 overflow-x-auto scrollbar-hide md:hidden pb-4 sm:pb-5 -mx-4 sm:-mx-0 px-4 sm:px-0">
          {jobs.map((job) => (
            <div key={job.id} className="min-w-[280px] sm:min-w-[300px]">
              <JobCard {...job} />
            </div>
          ))}
        </div>

        {/* Tablet Grid (2 columns) */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-5">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>

        {/* Desktop Grid (4 columns) */}
        <div className="hidden lg:grid grid-cols-4 gap-6">
          {jobs.map((job) => (
            <JobCard key={job.id} {...job} />
          ))}
        </div>
      </section>
    </ReusableCustomSection>
  );
}
