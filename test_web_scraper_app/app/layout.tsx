import './globals.css';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Smart Product Scraper',
  description: 'Scrape product listings and export to Google Sheets',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}