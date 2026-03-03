import { AppSidebar } from '@/components/app-sidebar';
import { SiteHeader } from '@/components/site-header';
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar';
import { JobDataTable } from './_components/JobDataTable';

// Sample data
const sampleJobs = [
  {
    id: 1,
    title: 'Senior Frontend Developer',
    type: 'Full Time',
    location: 'Remote · USA',
    description:
      'We are looking for an experienced frontend developer with React expertise to join our growing team.',
    category: 'Development',
  },
  {
    id: 2,
    title: 'UX Designer',
    type: 'Full Time',
    location: 'Berlin · Germany',
    description:
      'Help us design beautiful and intuitive user experiences for our products.',
    category: 'Design',
  },
  {
    id: 3,
    title: 'Marketing Manager',
    type: 'Part Time',
    location: 'London · UK',
    description: 'Lead our marketing campaigns and grow our brand presence.',
    category: 'Marketing',
  },
];

export default function AdminDashboard() {
  return (
    <SidebarProvider className="max-h-screen max-w-screen-2xl mx-auto w-full">
      <AppSidebar variant="inset" className="" />
      <SidebarInset className="">
        <SiteHeader />
        <div className="mt-12 px-12">
          <JobDataTable data={sampleJobs} />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
