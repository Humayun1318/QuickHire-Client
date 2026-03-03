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
    <section className="py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-12">
          <h2 className="font-heading text-3xl md:text-5xl font-semibold text-[#25324B]">
            <span>{titleStart}</span>{' '}
            <span className="text-[#26A4FF]">{titleHighlight}</span>
          </h2>

          <Link
            href={linkHref}
            className="items-center gap-2 font-semibold text-base font-sans text-[#4640DE] hover:text-accent hidden md:flex"
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
          className="flex items-center gap-2 font-semibold text-base font-sans text-[#4640DE] hover:text-accent md:hidden mt-8 justify-start"
        >
          <span>{linkText}</span>
          <span>→</span>
        </Link>
      </div>
    </section>
  );
}
