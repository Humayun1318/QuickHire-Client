'use client';

import Container from '@/components/Container';

import Image from 'next/image';
import Link from 'next/link';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Github,
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1F2432] text-white pt-16 pb-10">
      <Container>
        <div className="px-0">
          {/* Main 3 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Column 1 - Logo + Description */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="relative w-8 h-8">
                  <Image
                    src="/images/favicon.png"
                    alt="QuickHire"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-xl font-semibold">QuickHire</span>
              </div>

              <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
                Great platform for the job seeker that passionate about
                startups. Find your dream job easier.
              </p>
            </div>

            {/* Column 2 - Two Link Columns */}
            <div className="grid grid-cols-2 gap-8">
              {/* First Links Column */}
              <div>
                <h4 className="font-semibold mb-4">About</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link href="#">Companies</Link>
                  </li>
                  <li>
                    <Link href="#">Pricing</Link>
                  </li>
                  <li>
                    <Link href="#">Terms</Link>
                  </li>
                  <li>
                    <Link href="#">Advice</Link>
                  </li>
                  <li>
                    <Link href="#">Privacy Policy</Link>
                  </li>
                </ul>
              </div>

              {/* Second Links Column */}
              <div>
                <h4 className="font-semibold mb-4">Resources</h4>
                <ul className="space-y-3 text-sm text-gray-400">
                  <li>
                    <Link href="#">Help Docs</Link>
                  </li>
                  <li>
                    <Link href="#">Guide</Link>
                  </li>
                  <li>
                    <Link href="#">Updates</Link>
                  </li>
                  <li>
                    <Link href="#">Contact Us</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Column 3 - Newsletter */}
            <div>
              <h4 className="font-semibold mb-3">Get job notifications</h4>

              <p className="text-sm text-gray-400 mb-5">
                The latest job news, articles, sent to your inbox weekly.
              </p>

              {/* Input + Button */}
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-3 rounded-md bg-white text-black text-sm focus:outline-none"
                />
                <button className="px-6 w-fit md:w-auto py-3 bg-[#4640DE] hover:bg-[#5B56F0] transition-colors rounded-md text-sm font-medium whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Section - Two Columns */}
          <div className="border-t border-gray-700 mt-12 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              {/* Left Column - Copyright */}
              <div className="text-sm text-gray-500 order-1 md:order-1">
                © {currentYear} QuickHire. All rights reserved.
              </div>

              {/* Right Column - Social Media Icons */}
              <div className="flex items-center gap-4 order-2 md:order-2">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
