import React from 'react';
import { motion } from 'motion/react';
import { UserCheck, Clock, MapPin, Award, Calendar, Stethoscope } from 'lucide-react';
import { DOCTORS_LIST } from '../data/hospitalData';

export const DoctorsSection = ({ onOpenAppointment }) => {
  return (
    <section id="doctors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 mb-3">
            <Stethoscope className="w-3.5 h-3.5 text-sky-600" />
            <span>Clinical Specialists</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Consultant Eye Specialists & Surgeons
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Our qualified team of ophthalmologists, ophthalmic surgeons, and senior optometrists provide accurate diagnosis, cataract surgery, and personalized visual care.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DOCTORS_LIST.map((doc, idx) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg hover:border-sky-300 transition-all duration-200"
            >
              <div>
                {/* Doctor Avatar / Icon Header */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-100 to-blue-50 text-sky-700 flex items-center justify-center mb-4 border border-sky-200 shadow-xs">
                  <UserCheck className="w-8 h-8" />
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {doc.name}
                </h3>
                <p className="text-xs font-semibold text-sky-700 mt-1">
                  {doc.designation}
                </p>

                <p className="text-xs text-slate-500 font-mono mt-1.5 leading-relaxed">
                  {doc.degrees}
                </p>

                <div className="mt-4 pt-3 border-t border-slate-100 space-y-2">
                  <div className="text-xs text-slate-700 font-medium">
                    <span className="text-slate-400 block text-[10px] uppercase font-bold tracking-wider">
                      Specialty
                    </span>
                    {doc.specialty}
                  </div>

                  <div className="flex items-start gap-1.5 text-xs text-slate-600 pt-1">
                    <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{doc.visitingHours}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-slate-500">
                    <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                    <span>{doc.roomNo}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <button
                  onClick={onOpenAppointment}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-sky-50 hover:bg-sky-100 text-sky-800 font-semibold text-xs border border-sky-200 transition-colors cursor-pointer"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Book Consultation</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
