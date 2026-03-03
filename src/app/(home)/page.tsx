import Banner from './_components/Banner';
import CategorySection from './_components/CategorySection';
import JobFeatures from './_components/JobFeaturs';
import LatestJobsOpen from './_components/LatestJobsOpen';
import StartPostingSection from './_components/StartPostingSection';
import TrustedCompanies from './_components/TrustedCompanies';

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Top Section with fixed height of 794px */}
      <div className="relative h-[794px] w-full max-w-[1288px] mx-auto md:px-2">
        <Banner />
      </div>

      {/* Rest of your page content */}
      <div className="px-4 md:px-2 max-w-[1288px] mx-auto">
        <TrustedCompanies />
        <CategorySection />
        <StartPostingSection />
        <JobFeatures />
        <LatestJobsOpen />
      </div>
    </div>
  );
}
