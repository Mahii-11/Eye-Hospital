import React from 'react';
import { Award, Users, Activity, HeartHandshake, PhoneCall } from 'lucide-react';
import { HOSPITAL_STATS, HOSPITAL_INFO } from '../data/hospitalData';

interface StatsBannerProps {
  onOpenAppointment: () => void;
}

export const StatsBanner: React.FC<StatsBannerProps> = ({ onOpenAppointment }) => {
  const statIcons = [Award, Activity, Users, HeartHandshake];

  return (
    <div className="relative -mt-6 sm:-mt-8 z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl shadow-slate-900/5 border border-slate-100 p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {HOSPITAL_STATS.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.label}
                className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                  idx !== 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''
                }`}
              >
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm font-bold text-slate-800 leading-snug">
                  {stat.label}
                </span>
                <span className="text-xs text-slate-500 mt-0.5">
                  {stat.detail}
                </span>
              </div>
            );
          })}
        </div>

        {/* Quick Action Ribbon */}
        <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-slate-700 text-sm">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></div>
            <span>
              <strong className="text-slate-900">Hospital OPD Open Today:</strong> Specialized Cataract & Eye Testing Available Now
            </span>
          </div>

          <div className="flex items-center gap-3 flex-wrap justify-center">
            <a
              href="tel:01738301501"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-sky-800 bg-sky-50 hover:bg-sky-100 border border-sky-200 px-3.5 py-1.5 rounded-lg transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-sky-600" />
              <span>Call OPD Desk: {HOSPITAL_INFO.primaryPhone}</span>
            </a>
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-white bg-sky-700 hover:bg-sky-800 px-4 py-1.5 rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              Book an Eye Examination
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
