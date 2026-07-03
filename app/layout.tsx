import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/sonner';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://vrindmangla.com'),
  title: {
    default: 'Vrind Mangla | Data Analyst & Power BI Developer',
    template: '%s | Vrind Mangla',
  },
  description:
    'Portfolio of Vrind Mangla - Data Analyst, Power BI Developer, and SQL Enthusiast. Skilled in Python, SQL, Machine Learning, and Data Visualization. Transforming raw data into actionable business insights.',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0F172A' },
  ],
  keywords: [
    'Data Analyst',
    'Power BI',
    'SQL Developer',
    'Python',
    'Data Visualization',
    'Machine Learning',
    'Business Intelligence',
    'Vrind Mangla',
    'Portfolio',
    'Data Analytics',
    'Dashboard Development',
  ],
  authors: [{ name: 'Vrind Mangla', url: 'https://vrindmangla.com' }],
  creator: 'Vrind Mangla',
  publisher: 'Vrind Mangla',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vrindmangla.com',
    siteName: 'Vrind Mangla Portfolio',
    title: 'Vrind Mangla | Data Analyst & Power BI Developer',
    description:
      'Portfolio showcasing data analytics projects, SQL expertise, Power BI dashboards, and machine learning solutions.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Vrind Mangla - Data Analyst Portfolio',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vrind Mangla | Data Analyst & Power BI Developer',
    description:
      'Portfolio showcasing data analytics projects, SQL expertise, Power BI dashboards, and machine learning solutions.',
    images: ['/og-image.png'],
    creator: '@vrindmangla',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ url: '/site.webmanifest', rel: 'manifest' }],
  },
  alternates: {
    canonical: 'https://vrindmangla.com',
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
