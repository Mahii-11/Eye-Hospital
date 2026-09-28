import React from 'react';
import { Eye, MapPin, Phone, Mail, Clock, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { HOSPITAL_INFO, SERVICES_LIST } from '../data/hospitalData';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800">
      {/* Upper Main Footer: Three-Column Layout as requested */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">

          {/* Column 1: Hospital Identity & Contact Details with modern icons */}
          <div className="lg:col-span-5 space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-500 to-blue-700 text-white flex items-center justify-center shadow-md">
                <Eye className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="font-extrabold text-xl text-white tracking-tight block">
                  Kishoreganj Eye Hospital
                </span>
                <span className="text-xs text-sky-400 font-medium">
                  A Specialized Secondary Eye Care Centre · Under NUK
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Serving the rural community of Kishoreganj and adjacent haor regions since 2006. Dedicated to eliminating avoidable cataract blindness through modern phacoemulsification, comprehensive OPD/IPD, and free surgical outreach.
            </p>

            {/* Contact Details with Modern Icons */}
            <div className="space-y-3 text-sm text-slate-300 pt-2">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                <span>{HOSPITAL_INFO.address.full}</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`tel:${HOSPITAL_INFO.primaryPhone}`}
                  className="font-bold text-white hover:text-sky-300 tracking-wider"
                >
                  Hotline: {HOSPITAL_INFO.primaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`mailto:${HOSPITAL_INFO.email}`}
                  className="text-slate-300 hover:text-white"
                >
                  {HOSPITAL_INFO.email}
                </a>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{HOSPITAL_INFO.hours.opd} | 24/7 Trauma Service</span>
              </div>
            </div>
          </div>

          {/* Column 2: Important Links */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Important Links & Services
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm text-slate-400">
              <a href="#home" className="hover:text-sky-400 transition-colors py-1">
                Home
              </a>
              <a href="#about" className="hover:text-sky-400 transition-colors py-1">
                About Founder & NUK
              </a>
              <a href="#services" className="hover:text-sky-400 transition-colors py-1">
                Our Services
              </a>
              <a href="#gallery" className="hover:text-sky-400 transition-colors py-1">
                Photo Gallery
              </a>
              <a href="#doctors" className="hover:text-sky-400 transition-colors py-1">
                Specialist Doctors
              </a>
              <a href="#news" className="hover:text-sky-400 transition-colors py-1">
                Camp Schedules
              </a>
              <a href="#contact" className="hover:text-sky-400 transition-colors py-1">
                Contact & Directions
              </a>
              <span className="text-sky-400 font-semibold py-1">
                VISION 2020 Partner
              </span>
            </div>

            <div className="pt-4 border-t border-slate-800/80">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2">
                Core Clinical Departments
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                {['OPD', 'IPD', 'Cataract', 'Phaco Surgery', 'Refraction', 'Optics', 'Pharmacy', 'Vision Center', 'Camps'].map((dept) => (
                  <span
                    key={dept}
                    className="bg-slate-900 border border-slate-800 px-2 py-1 rounded text-slate-300"
                  >
                    {dept}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Column 3: Institutional Affiliation & Social Media Handles */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-b border-slate-800 pb-2">
              Affiliations & Social Connect
            </h4>

            <p className="text-xs text-slate-400 leading-relaxed">
              Kishoreganj Eye Hospital operates as a specialized healthcare organ of <strong className="text-white">Nari Uddug Kendra (NUK)</strong>, promoting health equity, women&apos;s empowerment, and community eye health in Bangladesh.
            </p>

            <div className="p-3.5 bg-slate-900 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-1.5">
              <div className="flex items-center gap-2 text-sky-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>WHO VISION 2020 Partner</span>
              </div>
              <p className="text-[11px] text-slate-400">
                Collaborating on the global initiative for the elimination of avoidable blindness.
              </p>
            </div>

            {/* Social Media Handles */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-2.5">
                Social Media Handles
              </span>
              <div className="flex items-center gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-sky-700 transition-colors"
                  aria-label="Facebook Page"
                >
                  <span className="font-bold text-sm">f</span>
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-red-600 transition-colors"
                  aria-label="YouTube Channel"
                >
                  <span className="font-bold text-xs">YT</span>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <span className="font-bold text-xs">in</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-slate-900 bg-slate-950/90 py-6 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Kishoreganj Eye Hospital (KEH) · Under Nari Uddug Kendra (NUK). All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Heart className="w-3.5 h-3.5 text-rose-500 fill-current" />
              <span>Dedicated to sight restoration in rural Bangladesh</span>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
