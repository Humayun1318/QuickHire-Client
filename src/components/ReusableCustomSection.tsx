import Link from 'next/link';
import { ReactNode } from 'react';

interface ReusableCustomSectionProps {
  titleStart: string;
  titleHighlight: string;
  linkText: string;
  linkHref: string;
  children: ReactNode;
}

export default function ReusableCustomSection({
  titleStart,
  titleHighlight,
  linkText,
  linkHref,
  children,
}: ReusableCustomSectionProps) {
  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-[#25324B]">
          <span>{titleStart}</span>{' '}
          <span className="text-[#26A4FF]">{titleHighlight}</span>
        </h2>

        <Link
          href={linkHref}
          className="items-center gap-2 font-semibold text-sm sm:text-base font-sans text-[#4640DE] hover:text-accent hidden md:flex"
        >
          <span>{linkText}</span>
          <span>→</span>
        </Link>
      </div>

      {/* Cards Area */}
      {children}

      {/* Mobile Link */}
      <Link
        href={linkHref}
        className="flex items-center gap-2 font-semibold text-sm sm:text-base font-sans text-[#4640DE] hover:text-accent md:hidden mt-6 sm:mt-8 justify-start"
      >
        <span>{linkText}</span>
        <span>→</span>
      </Link>
    </section>
  );
}
