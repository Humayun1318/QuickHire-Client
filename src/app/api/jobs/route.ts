import { NextRequest, NextResponse } from 'next/server';
import { Job } from '@/types';

// sample in-memory data
const jobs: Job[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    description: 'Build modern user interfaces with React.',
    company: 'TechCorp',
    salary: 80000,
    location: 'Remote',
    createdAt: new Date('2026-02-28'),
  },
  {
    id: '2',
    title: 'Backend Engineer',
    description: 'Design scalable server-side systems.',
    company: 'ServerSide Inc',
    salary: 95000,
    location: 'New York, NY',
    createdAt: new Date('2026-01-15'),
  },
  {
    id: '3',
    title: 'Full Stack Developer',
    description: 'Work across frontend and backend.',
    company: 'FullCycle LLC',
    salary: 90000,
    location: 'San Francisco, CA',
    createdAt: new Date('2026-03-01'),
  },
];

export function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const query = searchParams.get('search')?.toLowerCase() || '';
  const location = searchParams.get('location')?.toLowerCase() || '';

  let filtered = jobs;

  if (query) {
    filtered = filtered.filter(
      (j) =>
        j.title.toLowerCase().includes(query) ||
        j.description.toLowerCase().includes(query) ||
        j.company.toLowerCase().includes(query)
    );
  }

  if (location) {
    filtered = filtered.filter((j) =>
      j.location.toLowerCase().includes(location)
    );
  }

  return NextResponse.json(filtered);
}
