'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-transparent">
      <div className="flex justify-between items-center h-16 md:h-20">
        {/* LEFT SIDE: Logo + Navigation Links */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-10">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-1 sm:gap-2">
            <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10">
              <Image
                src="/images/favicon.png"
                alt="QuickHire"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-heading text-lg sm:text-xl md:text-2xl font-bold text-[#25324B]">
              QuickHire
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-4 lg:gap-8">
            <Link
              href="/find-jobs"
              className="font-sans text-[#515B6F] hover:text-accent text-sm lg:text-base font-medium transition-colors whitespace-nowrap"
            >
              Find Jobs
            </Link>
            <Link
              href="/browse-companies"
              className="font-sans text-[#515B6F] hover:text-accent text-sm lg:text-base font-medium transition-colors whitespace-nowrap"
            >
              Browse Companies
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE: Auth Buttons + Mobile Hamburger */}
        <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            <Link
              href="/login"
              className="font-sans text-[#4640DE] hover:text-accent px-3 lg:px-4 py-2 text-sm lg:text-base font-bold transition-colors whitespace-nowrap"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="font-sans bg-[#4640DE] text-white hover:bg-accent/90 px-3 lg:px-4 py-2 text-sm lg:text-base font-bold rounded-md transition-colors whitespace-nowrap"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden inline-flex items-center justify-center p-1.5 sm:p-2 rounded-md text-gray-700 hover:text-accent hover:bg-gray-100 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5 sm:h-6 sm:w-6" />
            ) : (
              <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="max-w-[375px] mx-auto px-4 py-4 sm:py-6 space-y-4">
            <div className="flex flex-col space-y-3">
              <Link
                href="/find-jobs"
                className="font-sans text-gray-700 hover:text-accent py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Find Jobs
              </Link>
              <Link
                href="/browse-companies"
                className="font-sans text-gray-700 hover:text-accent py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Browse Companies
              </Link>
            </div>

            <div className="flex flex-col space-y-3 pt-4 border-t border-gray-100">
              <Link
                href="/login"
                className="font-sans text-gray-700 hover:text-accent py-2 text-base font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="font-sans bg-[#4640DE] text-white hover:bg-accent/90 px-4 py-3 text-base font-medium rounded-md text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
