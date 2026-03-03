'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function StartPostingSection() {
  return (
    <section className="relative w-full min-h-[500px] sm:min-h-[450px] md:h-[414px] overflow-hidden mb-16 sm:mb-20 md:mb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0" >
        <Image
          src="/images/rectangle.png"
          alt="Background"
          fill
          className="md:object-cover"
        />
      </div>

      {/* Content - Directly using max-w-[1280px] to match Banner pattern */}
      <div className="relative z-10 h-full w-full md:px-24">
        <div className="h-full py-8 sm:py-10 md:py-12 lg:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center gap-6 sm:gap-8 lg:gap-12">
            {/* LEFT SIDE - Main Content */}
            <div className="space-y-4 sm:space-y-5 md:space-y-6 text-center lg:text-left">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight">
                Start posting <br className="hidden sm:block" />
                jobs today
              </h2>
              <p className="font-sans text-sm sm:text-base font-medium text-white/80 max-w-md mx-auto lg:mx-0">
                Start posting jobs for only $10.
              </p>
              <Link
                href="/signup"
                className="inline-block bg-white hover:bg-accent/90 text-[#4640DE] font-sans font-bold px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 rounded-lg transition-colors text-sm sm:text-base"
              >
                Sign Up For Free
              </Link>
            </div>

            {/* RIGHT SIDE - Image - Positioned at bottom 0 of the 414px section */}
            <div className="relative w-full mt-6 sm:mt-8 lg:mt-0 h-[200px] sm:h-[250px] md:h-[280px] lg:h-full">
              <div className="relative w-full md:w-auto h-full lg:absolute lg:bottom-0 lg:right-0 lg:w-[110%]  lg:h-[90%]">
                <Image
                  src="/images/dashboard.png"
                  alt="Dashboard preview"
                  fill
                  className="object-contain object-center lg:object-bottom lg:object-right"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
