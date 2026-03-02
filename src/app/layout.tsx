import type { Metadata } from 'next';
import { Epilogue, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';

// Configure Epilogue (for body text/descriptions)
const epilogue = Epilogue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-epilogue',
  weight: ['400', '500', '600', '700'],
});

// Configure Plus Jakarta Sans (for headings)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: {
    default: 'QuickHire - Job Hiring Platform',
    template: '%s | QuickHire',
  },
  description:
    'Professional job hiring platform to connect talents with opportunities',
  keywords: ['jobs', 'hiring', 'recruitment'],
  authors: [{ name: 'QuickHire Team' }],
  creator: 'QuickHire',
  icons: {
    // This tells Next.js to use your favicon from the images folder
    icon: [
      {
        url: '/images/favicon.png',
        type: 'image/png',
      },
    ],
    //Add shortcut icon
    shortcut: ['/images/favicon.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${epilogue.variable} ${plusJakarta.variable}`}
    >
      <head>
        {/* Additional fallback for older browsers */}
        <link rel="icon" href="/images/favicon.png" type="image/png" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
