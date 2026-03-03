import { useQuery } from '@tanstack/react-query';

export interface Job {
  id: number;
  icon: string;
  title: string;
  location: string;
  type: string;
  categories: string[];
  company: string;
  postedAt: string;
  salary: string;
  slug: string;
}

// Mock API function - Replace with actual API call
const fetchJobs = async (): Promise<Job[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Return mock data
  return [
    {
      id: 1,
      icon: '/images/design-icon.png',
      title: 'Senior Product Designer',
      location: 'Remote · USA',
      type: 'Full Time',
      categories: ['Design', 'Product'],
      company: 'Designify',
      postedAt: '2 days ago',
      salary: '$120k - $150k',
      slug: 'senior-product-designer',
    },
    {
      id: 2,
      icon: '/images/dev-icon.png',
      title: 'Frontend Developer',
      location: 'Berlin · Germany',
      type: 'Full Time',
      categories: ['Development', 'React'],
      company: 'TechCorp',
      postedAt: '1 day ago',
      salary: '$80k - $100k',
      slug: 'frontend-developer',
    },
    {
      id: 3,
      icon: '/images/marketing-icon.png',
      title: 'Marketing Manager',
      location: 'London · UK',
      type: 'Part Time',
      categories: ['Marketing', 'Management'],
      company: 'GrowthHub',
      postedAt: '3 days ago',
      salary: '$60k - $80k',
      slug: 'marketing-manager',
    },
    {
      id: 4,
      icon: '/images/finance-icon.png',
      title: 'Financial Analyst',
      location: 'New York · USA',
      type: 'Contract',
      categories: ['Finance', 'Analysis'],
      company: 'FinCorp',
      postedAt: '5 days ago',
      salary: '$90k - $110k',
      slug: 'financial-analyst',
    },
    {
      id: 5,
      icon: '/images/sales-icon.png',
      title: 'Sales Representative',
      location: 'Remote · Europe',
      type: 'Full Time',
      categories: ['Sales', 'Business'],
      company: 'SalesForce',
      postedAt: '1 week ago',
      salary: '$70k - $90k',
      slug: 'sales-representative',
    },
    {
      id: 6,
      icon: '/images/support-icon.png',
      title: 'Customer Support Specialist',
      location: 'Remote · Global',
      type: 'Full Time',
      categories: ['Support', 'Customer Service'],
      company: 'SupportHub',
      postedAt: '2 days ago',
      salary: '$50k - $65k',
      slug: 'customer-support-specialist',
    },
    {
      id: 7,
      icon: '/images/dev-icon.png',
      title: 'Backend Engineer',
      location: 'Remote · USA',
      type: 'Full Time',
      categories: ['Development', 'Node.js'],
      company: 'TechCorp',
      postedAt: '4 days ago',
      salary: '$130k - $160k',
      slug: 'backend-engineer',
    },
    {
      id: 8,
      icon: '/images/design-icon.png',
      title: 'UX Researcher',
      location: 'San Francisco · USA',
      type: 'Contract',
      categories: ['Design', 'Research'],
      company: 'Designify',
      postedAt: '3 days ago',
      salary: '$100k - $130k',
      slug: 'ux-researcher',
    },
  ];
};

export const useJobs = () => {
  return useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobs,
  });
};
