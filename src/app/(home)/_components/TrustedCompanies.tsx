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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1288px] mx-auto px-4 md:px-2">
        {/* Description Text */}
        <div className="mb-8 md:mb-12">
          <p className="font-sans text-[#202430] text-lg font-normal opacity-50">
            Companies we helped grow
          </p>
        </div>

        {/* Company Logos - Flex Wrap */}
        <div className="flex flex-wrap justify-around gap-8 md:gap-12 lg:gap-16">
          {companies.map((company) => (
            <div
              key={company.id}
              className="relative w-[120px] h-[60px] md:w-[150px] md:h-[70px] lg:w-[180px] lg:h-[80px] grayscale hover:grayscale-0 transition-all duration-300"
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
      </div>
    </section>
  );
}
