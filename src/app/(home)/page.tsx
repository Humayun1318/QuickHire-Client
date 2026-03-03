import Banner from './_components/Banner';

export default function Home() {
  return (
    <div className="max-w-[1440px] mx-auto">
      {/* Top Section with fixed height of 794px */}
      <div className="relative h-[794px] w-full">
        <Banner />
      </div>

      {/* Rest of your page content */}
      <div className="px-4 md:px-0 max-w-[1280px] mx-auto py-16">
        {/* Other sections */}
      </div>
    </div>
  );
}
