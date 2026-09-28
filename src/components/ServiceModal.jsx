import React from 'react';
import { X, CheckCircle2, Clock, Calendar, ArrowRight, ShieldCheck, Phone } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const ServiceModal = ({ service, onClose, onBookService }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-800 to-blue-900 px-6 py-5 text-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-sky-200 text-xs font-semibold tracking-wider uppercase mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Kishoreganj Eye Hospital · Specialized Service</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {service.name}
            </h3>
            <p className="text-sky-100 text-sm mt-1">{service.tagline}</p>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1.5 rounded-lg text-sky-200 hover:text-white hover:bg-white/10 transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body Content */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              Clinical Overview
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3">
              Included Facilities & Procedures
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-slate-700 font-medium leading-snug">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Timing & Accessibility */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3.5 bg-sky-50/70 rounded-xl border border-sky-100 text-xs">
            <div className="flex items-center gap-2 text-sky-900 font-medium">
              <Clock className="w-4 h-4 text-sky-600 shrink-0" />
              <span><strong>Operational Schedule:</strong> {service.timing}</span>
            </div>
            {service.eligibleForCamp && (
              <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-1 rounded">
                Free Outreach Eligible
              </span>
            )}
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-150 flex flex-wrap items-center justify-between gap-3">
          <a
            href="tel:01738301501"
            className="flex items-center gap-1.5 text-xs text-slate-700 font-semibold hover:text-sky-700"
          >
            <Phone className="w-3.5 h-3.5 text-sky-600" />
            <span>Direct Inquiry: {HOSPITAL_INFO.primaryPhone}</span>
          </a>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-800 hover:bg-slate-200/50 rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onBookService(service.id);
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-sky-700 hover:bg-sky-800 text-white text-xs font-semibold rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
