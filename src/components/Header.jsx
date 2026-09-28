import React, { useState } from 'react';
import { Phone, Calendar, Menu, X, Eye, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const Header = ({ onOpenAppointment, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Photo Gallery', href: '#gallery' },
    { label: 'Doctors', href: '#doctors' },
    { label: 'News', href: '#news' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all duration-200">
      {/* Top Notification / Institutional Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-sky-400 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>An Initiative of Nari Uddug Kendra (NUK)</span>
            </span>
            <span className="hidden md:inline text-slate-600">|</span>
            <span className="hidden md:inline text-slate-300">
              WHO VISION 2020: The Right to Sight Partner
            </span>
            <span className="hidden lg:inline text-slate-600">|</span>
            <span className="hidden lg:flex items-center gap-1 text-slate-300">
              <MapPin className="w-3 h-3 text-sky-400" />
              <span>Latibabad, Kishoreganj</span>
            </span>
          </div>

          <div className="flex items-center gap-4 ml-auto">
            <span className="hidden sm:flex items-center gap-1 text-slate-300">
              <Clock className="w-3 h-3 text-emerald-400" />
              <span>OPD: Sat – Thu (8am – 5pm)</span>
            </span>
            <a
              href="tel:01738301501"
              className="flex items-center gap-1.5 text-white font-semibold hover:text-sky-300 transition-colors"
            >
              <Phone className="w-3 h-3 text-sky-400" />
              <span>Hotline: {HOSPITAL_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Identity */}
          <a
            href="#home"
            className="flex items-center gap-3.5 group text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
          >
            <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-sky-600 to-blue-700 text-white shadow-md shadow-sky-600/20 group-hover:scale-105 transition-transform duration-200">
              {/* Refined Medical Eye Logo */}
              <div className="relative">
                <Eye className="w-7 h-7 text-white stroke-[2.2]" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full ring-2 ring-white"></span>
              </div>
            </div>
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-extrabold text-xl sm:text-2xl text-slate-900 tracking-tight leading-none group-hover:text-sky-700 transition-colors">
                  Kishoreganj Eye Hospital
                </span>
                <span className="inline-block text-xs font-bold text-sky-700 bg-sky-50 px-1.5 py-0.5 rounded border border-sky-200">
                  KEH
                </span>
              </div>
              <p className="text-xs font-medium text-slate-500 tracking-wide mt-1">
                A Specialized Secondary Eye Care Centre · Under NUK
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-all duration-150 ${
                    isActive
                      ? 'text-sky-700 bg-sky-50 font-bold'
                      : 'text-slate-600 hover:text-sky-700 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

        

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href="tel:01738301501"
              className="p-2 text-sky-700 bg-sky-50 rounded-lg border border-sky-200"
              aria-label="Call Hospital"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-150">
          <div className="px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-slate-700 hover:text-sky-700 hover:bg-sky-50"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <a
                href="tel:01738301501"
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-sky-200 bg-sky-50 text-sky-900 font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-sky-600" />
                <span>Call Helpline: 01738301501</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAppointment();
                }}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-sky-700 text-white font-semibold text-sm shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
