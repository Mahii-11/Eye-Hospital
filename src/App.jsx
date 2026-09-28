/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSlider } from './components/HeroSlider';
import { StatsBanner } from './components/StatsBanner';
import { WelcomeSection } from './components/WelcomeSection';
import { ServicesSection } from './components/ServicesSection';
import { GallerySection } from './components/GallerySection';
import { DoctorsSection } from './components/DoctorsSection';
import { NewsSection } from './components/NewsSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AppointmentModal } from './components/AppointmentModal';
import { Phone, Calendar } from 'lucide-react';
import { HOSPITAL_INFO } from './data/hospitalData';

export default function App() {
  const [isAppointmentOpen, setIsAppointmentOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState(undefined);
  const [activeSection, setActiveSection] = useState('home');

  // Active section spy on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'gallery', 'doctors', 'news', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenAppointment = (serviceId) => {
    setSelectedServiceId(serviceId);
    setIsAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-800 antialiased">
      {/* Header */}
      <Header
        onOpenAppointment={() => handleOpenAppointment()}
        activeSection={activeSection}
      />

      <main className="flex-1">
        {/* Hero Section: Clean full-width image slider, no text on banner, 4s auto transition */}
        <HeroSlider />

        {/* Stats & Quick Action Ribbon */}
        <StatsBanner onOpenAppointment={() => handleOpenAppointment()} />

        {/* Welcome Section: Two-column layout with woman in red saree & text paragraphs */}
        <WelcomeSection onOpenAppointment={() => handleOpenAppointment()} />

        {/* Our Services Section: 9 Modern Interactive Grid Cards */}
        <ServicesSection
          onOpenAppointmentForService={(serviceId) => handleOpenAppointment(serviceId)}
        />

        {/* Photo Gallery & Community Section: Patient group & community man with topi */}
        <GallerySection />

        {/* Specialist Doctors & Surgeons */}
        <DoctorsSection onOpenAppointment={() => handleOpenAppointment()} />

        {/* News & Camp Announcements */}
        <NewsSection onOpenAppointment={() => handleOpenAppointment()} />

        {/* FAQ Section */}
        <FaqSection />

        {/* Contact Us & Location */}
        <ContactSection />
      </main>

      {/* Footer: Solid Dark Blue 3-Column Layout */}
      <Footer />

      {/* Appointment & Consultation Booking Modal */}
      <AppointmentModal
        isOpen={isAppointmentOpen}
        onClose={() => setIsAppointmentOpen(false)}
        preselectedServiceId={selectedServiceId}
      />

      {/* Floating Quick Action Widget on Mobile & Desktop */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2.5">
        <a
          href={`tel:${HOSPITAL_INFO.primaryPhone}`}
          className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-xs font-bold"
          title="Call Kishoreganj Eye Hospital Helpline"
        >
          <Phone className="w-4 h-4 fill-current" />
          <span className="hidden sm:inline">Call Hotline</span>
          <span>{HOSPITAL_INFO.primaryPhone}</span>
        </a>

        <button
          onClick={() => handleOpenAppointment()}
          className="flex items-center gap-2 bg-sky-700 hover:bg-sky-800 text-white px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all text-xs font-bold cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Appointment</span>
        </button>
      </div>
    </div>
  );
}
