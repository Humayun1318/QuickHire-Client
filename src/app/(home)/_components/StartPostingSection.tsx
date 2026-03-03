'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function StartPostingSection() {
  return (
    <section className="relative w-full md:h-[414px] overflow-hidden mb-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/rectangle.png"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full max-w-[1288px] mx-auto px-4 md:px-12 py-10 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full items-center">
          {/* LEFT SIDE - Main Content */}
          <div className="space-y-6">
            <h2 className="font-heading text-3xl md:text-5xl font-semibold text-center md:text-start text-white leading-tight">
              Start posting <br />
              jobs today
            </h2>
            <p className="font-sans text-base font-medium text-center md:text-start text-white/80">
              Start posting jobs for only $10.
            </p>
            <Link
              href="/signup"
              className="inline-block bg-white hover:bg-accent/90 text-[#4640DE] font-sans font-bold px-10 py-4 rounded-lg transition-colors text-base"
            >
              Sign Up For Free
            </Link>
          </div>

          {/* RIGHT SIDE - Image */}
          <div className="relative w-full mt-10 lg:mt-0 h-full">
            <div className="relative w-full h-[300px] lg:h-[85%] lg:absolute lg:bottom-0 lg:right-0">
              <Image
                src="/images/dashboard.png"
                alt="Dashboard preview"
                fill
                className="object-contain object-right lg:object-bottom"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
