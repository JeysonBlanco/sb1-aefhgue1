import React from 'react';
import { Header } from './Header';
import { Hero } from './Hero';
import { EducationalSection } from './EducationalSection';
import { Footer } from './Footer';

export function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-100">
            {children}
          </div>
        </div>

        <EducationalSection />
      </div>

      <Footer />
    </div>
  );
}