import Footer from '@/components/shared/Footer';
import Banner from './_components/Banner';
import CategorySection from './_components/CategorySection';
import JobFeatures from './_components/JobFeaturs';
import LatestJobsOpen from './_components/LatestJobsOpen';
import StartPostingSection from './_components/StartPostingSection';
import TrustedCompanies from './_components/TrustedCompanies';

import Container from '@/components/Container';

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      {/* BANNER - Full width (needs background images to stretch edge-to-edge) */}
      <Container fullWidth>
        <Banner />
      </Container>

      {/* TRUSTED COMPANIES - Standard content width */}
      <Container>
        <TrustedCompanies />
      </Container>

      {/* CATEGORY SECTION - Standard content width */}
      <Container>
        <CategorySection />
      </Container>

      {/* START POSTING SECTION - Full width (has background image) */}
      <Container>
        <StartPostingSection />
      </Container>

      {/* JOB FEATURES - Standard content width */}
      <Container>
        <JobFeatures />
      </Container>

      {/* LATEST JOBS OPEN - Full width (has dual background images) */}
      <Container>
        <LatestJobsOpen />
      </Container>

      {/* FOOTER - Full width (spans entire bottom) */}
      <Container fullWidth>
        <Footer />
      </Container>
    </main>
  );
}
