/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { QualityHighlights } from './components/QualityHighlights.tsx';
import { AboutSection } from './components/AboutSection.tsx';
import { ProductsSection } from './components/ProductsSection.tsx';
import { FarmGallerySection } from './components/FarmGallerySection.tsx';
import { BreedsSection } from './components/BreedsSection.tsx';
import { FeedFodderSection } from './components/FeedFodderSection.tsx';
import { InfrastructureSection } from './components/InfrastructureSection.tsx';
import { MilkCalculator } from './components/MilkCalculator.tsx';
import { VisitHoursSection } from './components/VisitHoursSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { QuickContactBar } from './components/QuickContactBar.tsx';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [enquiryProduct, setEnquiryProduct] = useState('Fresh Milk');
  const [enquiryMessage, setEnquiryMessage] = useState('');

  // Handle active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'gallery', 'breeds', 'feed', 'infrastructure', 'contact'];
      const scrollY = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenEnquiry = (productName?: string) => {
    if (productName) {
      setEnquiryProduct(productName);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePreFillCalculator = (productName: string, notes: string) => {
    setEnquiryProduct(productName);
    setEnquiryMessage(notes);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-stone-900 selection:bg-emerald-800 selection:text-white pb-14 sm:pb-0">
      
      {/* Header following 3-Zone Contract */}
      <Header
        activeSection={activeSection}
        onOpenEnquiry={() => handleOpenEnquiry()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        
        {/* 1. Hero Banner with agricultural imagery & direct calls */}
        <Hero onOpenEnquiry={() => handleOpenEnquiry()} />

        {/* 2. Quality Highlights Metrics Bar */}
        <QualityHighlights />

        {/* 3. About Us & Farm Philosophy */}
        <AboutSection />

        {/* 4. Our 7 Products Showcase */}
        <ProductsSection
          onSelectProductForEnquiry={(prod) => handleOpenEnquiry(prod)}
        />

        {/* 4b. High-Definition Farm Product Photo Showcase */}
        <FarmGallerySection
          onSelectProductForEnquiry={(prod) => handleOpenEnquiry(prod)}
        />

        {/* 5. Milk Calculator / Family Quantity Planner */}
        <MilkCalculator onPreFillEnquiry={handlePreFillCalculator} />

        {/* 6. Cow & Buffalo Breeds (Murrah & Sahiwal) */}
        <BreedsSection />

        {/* 7. Feed & Fodder Nutrition Details */}
        <FeedFodderSection />

        {/* 8. Farm Infrastructure & Hygiene Protocols */}
        <InfrastructureSection />

        {/* 9. Opening Hours & Visit Information (5:00 AM – 7:00 PM) */}
        <VisitHoursSection />

        {/* 10. Contact & Enquiry Form with Phone & Validation */}
        <ContactSection
          initialProduct={enquiryProduct}
          initialMessage={enquiryMessage}
        />

      </main>

      {/* Footer */}
      <Footer />

      {/* Compact Quick Contact Bar for Mobile Devices */}
      <QuickContactBar onOpenEnquiry={() => handleOpenEnquiry()} />

    </div>
  );
}
