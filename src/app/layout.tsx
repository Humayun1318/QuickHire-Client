import type { Metadata } from 'next';
import { Epilogue, Plus_Jakarta_Sans } from 'next/font/google';
import '@/styles/globals.css';
import { Providers } from '@/providers';
import { Toaster } from 'react-hot-toast';

// Configure Epilogue (for body text/descriptions)
const epilogue = Epilogue({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-epilogue',
  weight: ['400', '500', '600', '700', '800', '900'],
});

// Configure Plus Jakarta Sans (for headings)
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '600', '700', '800'],
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
        <Providers>
          <main>{children}</main>
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#fff',
                color: '#363636',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                borderRadius: '8px',
                padding: '12px 16px',
                fontSize: '14px',
                fontFamily: 'sans-serif',
              },
              success: {
                icon: '✅',
                style: {
                  border: '1px solid #10b981',
                },
              },
              error: {
                icon: '❌',
                style: {
                  border: '1px solid #ef4444',
                },
              },
              loading: {
                icon: '⏳',
                style: {
                  border: '1px solid #4640DE',
                },
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
