import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
}

export default function Container({
  children,
  fullWidth = false,
  className = '',
}: ContainerProps) {
  // =============================================
  // FULL WIDTH VARIANT
  // Used for: Banners, Footers, Sections with background images
  // =============================================
  if (fullWidth) {
    return (
      <div className={`w-full mx-auto max-w-[1440px] ${className}`}>
        {children}
      </div>
    );
  }

  // =============================================
  // STANDARD CONTENT VARIANT
  // Used for: Regular page content, cards, text sections
  // Dimensions:
  // - Mobile (375px): Content width = 343px (16px padding each side)
  // - Tablet (768px): Content width = 688px (40px padding each side)
  // - Desktop (1440px): Content width = 1280px (80px padding each side)
  // =============================================
  return (
    <div className={`w-full mx-auto ${className}`}>
      {/* Outer container - max width 1440px */}
      <div className="max-w-[1440px] mx-auto">
        {/* Inner container - responsive widths at each breakpoint */}
        <div
          className="
          /* MOBILE: 375px screen */
          max-w-[375px] mx-auto px-4

          /* TABLET: 768px screen */
          sm:max-w-[688px] sm:mx-auto

          /* DESKTOP: 1440px screen */
          lg:max-w-[1280px] lg:mx-auto
        "
        >
          {children}
        </div>
      </div>
    </div>
  );
}
