import { LatestJobCard } from '@/components/LatestJobCard';
import ReusableCustomSection from '@/components/ReusableCustomSection';

export default function LatestJobsOpen() {
  return (
    <ReusableCustomSection
      titleStart="Features"
      titleHighlight="Jobs"
      linkText="Show all jobs"
      linkHref="/jobs"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((id) => (
          <LatestJobCard
            key={id}
            icon="/images/netlify-icon.png"
            title="Social Media Assistant"
            location="Netlify · Paris, France"
            type="Full-Time"
            categories={['Marketing', 'Design']}
          />
        ))}
      </div>
    </ReusableCustomSection>
  );
}
