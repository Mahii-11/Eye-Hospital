import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Stethoscope,
  Bed,
  Eye,
  Activity,
  Glasses,
  ShoppingBag,
  Pill,
  MapPin,
  Users,
  ArrowRight,
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { SERVICES_LIST } from '../data/hospitalData';
import { ServiceModal } from './ServiceModal';

export const ServicesSection = ({ onOpenAppointmentForService }) => {
  const [selectedService, setSelectedService] = useState(null);

  // Icon mapping for clean medical representation
  const renderIcon = (iconName) => {
    const iconClass = "w-6 h-6 sm:w-7 sm:h-7";
    switch (iconName) {
      case 'Stethoscope':
        return <Stethoscope className={iconClass} />;
      case 'Bed':
        return <Bed className={iconClass} />;
      case 'Eye':
        return <Eye className={iconClass} />;
      case 'Activity':
        return <Activity className={iconClass} />;
      case 'Glasses':
        return <Glasses className={iconClass} />;
      case 'ShoppingBag':
        return <ShoppingBag className={iconClass} />;
      case 'Pill':
        return <Pill className={iconClass} />;
      case 'MapPin':
        return <MapPin className={iconClass} />;
      case 'Users':
        return <Users className={iconClass} />;
      default:
        return <Eye className={iconClass} />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 mb-3">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Comprehensive Secondary Eye Care</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Our Specialized Eye Care Services
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Modernized secondary ophthalmology integrating cutting-edge surgical units, digital diagnostics, optical dispensary, and rural outreach care across 9 dedicated departments.
          </p>
        </div>

        {/* 9 Services Modern Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((service, index) => (
            <motion.div
              key={service.id}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              onClick={() => setSelectedService(service)}
              className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-sky-300 transition-all cursor-pointer flex flex-col justify-between"
            >
              {/* Top Accent Indicator */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-sky-50 to-blue-100 text-sky-700 flex items-center justify-center group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300 shadow-xs">
                  {renderIcon(service.iconName)}
                </div>

                <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-sky-600 transition-colors">
                  0{index + 1}
                </span>
              </div>

              {/* Service Information */}
              <div className="flex-1">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                  {service.name}
                </h3>

                <p className="text-xs font-semibold text-sky-700/80 mt-1 uppercase tracking-wider">
                  {service.tagline}
                </p>

                <p className="mt-3 text-sm text-slate-600 line-clamp-3 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features bullet preview */}
              <div className="mt-5 pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">
                    {service.timing.split(':')[0]}: Regular service
                  </span>

                  <span className="inline-flex items-center gap-1 font-bold text-sky-700 group-hover:translate-x-1 transition-transform">
                    <span>Learn More</span>
                    <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Hospital Promise Callout */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-900 via-blue-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg sm:text-xl font-bold text-white">
              Need an Urgent Eye Checkup or Cataract Screening?
            </h4>
            <p className="text-sm text-sky-200">
              Our Latibabad OPD provides daily same-day consultation tickets from 8:00 AM.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 flex-wrap justify-center">
            <a
              href="tel:01738301501"
              className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 transition-colors"
            >
              Hotline: 01738301501
            </a>
            <button
              onClick={() => onOpenAppointmentForService('opd')}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm shadow-md transition-all cursor-pointer"
            >
              <span>Book Appointment Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Service Details Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={(serviceId) => {
          onOpenAppointmentForService(serviceId);
        }}
      />
    </section>
  );
};
