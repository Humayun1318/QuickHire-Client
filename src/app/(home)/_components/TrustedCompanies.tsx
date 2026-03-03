import Image from 'next/image';

export default function TrustedCompanies() {
  // Array of logo images from your public folder
  const companies = [
    { id: 1, src: '/images/vodafone-2017-logo.png', alt: 'Company 1' },
    { id: 2, src: '/images/intel-3.png', alt: 'Company 2' },
    { id: 3, src: '/images/tesla.png', alt: 'Company 3' },
    { id: 4, src: '/images/amd-logo-1.png', alt: 'Company 4' },
    { id: 5, src: '/images/talkit.png', alt: 'Company 5' },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
      {/* Description Text */}
      <div className="mb-6 sm:mb-8 md:mb-10 lg:mb-12">
        <p className="font-sans text-[#202430] text-sm sm:text-base md:text-lg font-normal opacity-50">
          Companies we helped grow
        </p>
      </div>

      {/* Company Logos - Flex Wrap */}
      <div className="flex flex-wrap justify-center sm:justify-around items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
        {companies.map((company) => (
          <div
            key={company.id}
            className="relative w-[80px] h-[40px] sm:w-[100px] sm:h-[50px] md:w-[120px] md:h-[60px] lg:w-[150px] lg:h-[70px] xl:w-[180px] xl:h-[80px] grayscale hover:grayscale-0 transition-all duration-300"
          >
            <Image
              src={company.src}
              alt={company.alt}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
