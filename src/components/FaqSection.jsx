import React, { useState } from 'react';
import { ChevronDown, HelpCircle, PhoneCall } from 'lucide-react';
import { FAQS_LIST, HOSPITAL_INFO } from '../data/hospitalData';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-t border-slate-200/70">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-sky-600" />
            <span>Patient Guidance</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Essential information regarding cataract surgery, consultation tickets, and free outreach services.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS_LIST.map((faq, idx) => (
            <div
              key={idx}
              className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-xs transition-colors"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-4 sm:p-5 text-left font-bold text-slate-900 text-sm sm:text-base hover:text-sky-700 transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                    openIndex === idx ? 'rotate-180 text-sky-600' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-100 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-8 text-center text-xs text-slate-500">
          Have additional questions about eye treatments? Call our help desk anytime at{' '}
          <a href={`tel:${HOSPITAL_INFO.primaryPhone}`} className="text-sky-700 font-bold hover:underline">
            {HOSPITAL_INFO.primaryPhone}
          </a>
        </div>
      </div>
    </section>
  );
};
