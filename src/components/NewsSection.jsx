import React from 'react';
import { Newspaper, Calendar, ArrowRight, BellRing } from 'lucide-react';
import { NEWS_LIST } from '../data/hospitalData';

export const NewsSection = ({ onOpenAppointment }) => {
  return (
    <section id="news" className="py-20 bg-slate-50/70 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 mb-3">
              <BellRing className="w-3.5 h-3.5 text-sky-600" />
              <span>Announcements & Camp Schedules</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Hospital News & Field Eye Camps
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-xl">
              Stay updated on free outreach screening camps, technological upgrades, and community sight-restoration initiatives.
            </p>
          </div>
        </div>

        {/* News Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {NEWS_LIST.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span className="font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                    {item.badge}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-slate-400" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-medium">
                  {item.category}
                </span>

                <button
                  onClick={onOpenAppointment}
                  className="inline-flex items-center gap-1 text-xs font-bold text-sky-700 hover:text-sky-900 cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
