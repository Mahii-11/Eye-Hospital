import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ShieldCheck, ExternalLink } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

export const ContactSection = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    subject: 'General Eye Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', subject: 'General Eye Inquiry', message: '' });
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50/80 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 mb-3">
            <MapPin className="w-3.5 h-3.5 text-sky-600" />
            <span>Hospital Contact & Latibabad Campus</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect With Our Eye Care Desk
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Whether you need to confirm surgical dates, schedule an OPD consultation, or arrange a community screening camp, our team is ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Contact Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <span>Hospital Information</span>
                <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  KEH
                </span>
              </h3>

              <div className="space-y-5 text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-sky-50 text-sky-700 flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider text-slate-500">
                      Physical Location
                    </strong>
                    <p className="text-slate-800 font-medium mt-0.5">
                      {HOSPITAL_INFO.address.full}
                    </p>
                    <span className="text-xs text-slate-500">
                      Easily accessible from Kishoreganj bypass & Sadar
                    </span>
                  </div>
                </div>

                {/* Primary Phone */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider text-slate-500">
                      Hotline & Appointment
                    </strong>
                    <a
                      href={`tel:${HOSPITAL_INFO.primaryPhone}`}
                      className="text-base font-extrabold text-sky-700 hover:text-sky-900 mt-0.5 block tracking-wide"
                    >
                      {HOSPITAL_INFO.primaryPhone}
                    </a>
                    <div className="text-xs text-slate-500 space-x-2 mt-1">
                      <span>Alt: +8801720-015921</span>
                      <span>·</span>
                      <span>+8801324-735141</span>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider text-slate-500">
                      Official Email
                    </strong>
                    <a
                      href={`mailto:${HOSPITAL_INFO.email}`}
                      className="text-slate-800 font-medium hover:text-sky-700 mt-0.5 block"
                    >
                      {HOSPITAL_INFO.email}
                    </a>
                    <span className="text-xs text-slate-500">
                      {HOSPITAL_INFO.altEmail}
                    </span>
                  </div>
                </div>

                {/* Timings */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900 font-semibold text-xs uppercase tracking-wider text-slate-500">
                      Visiting & Consultation Hours
                    </strong>
                    <p className="text-slate-800 font-medium mt-0.5">
                      {HOSPITAL_INFO.hours.opd}
                    </p>
                    <span className="text-xs font-semibold text-emerald-700 block mt-0.5">
                      {HOSPITAL_INFO.hours.emergency}
                    </span>
                  </div>
                </div>
              </div>

              {/* Institutional Note */}
              <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2.5 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
                <span>
                  Administered under <strong>Nari Uddug Kendra (NUK)</strong>, a registered non-profit development agency.
                </span>
              </div>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Send an Online Inquiry
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-6">
                Have a query regarding cataract surgery charges, camp dates, or vision tests? Leave a note and our front desk will get back to you.
              </p>

              {formSubmitted ? (
                <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2 animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">
                    Thank You! Message Received.
                  </h4>
                  <p className="text-xs text-emerald-700">
                    Our team will contact you at {formData.phone || 'your phone number'} shortly. For urgent needs, please call <strong>01738301501</strong>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Mohammad Ali"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 01712345678"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 bg-white"
                    >
                      <option value="General Eye Inquiry">General Eye Consultation</option>
                      <option value="Cataract / Phaco Surgery">Cataract / Phaco Surgery Inquiry</option>
                      <option value="Free Camp Inquiries">Free Rural Eye Camp Scheduling</option>
                      <option value="Computerized Glasses Test">Refraction & Spectacles</option>
                      <option value="Emergency Eye Trauma">Emergency Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message or Symptoms *
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please briefly describe patient's eye condition, age, or preferred time..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-sky-700 hover:bg-sky-800 text-white font-semibold text-sm shadow-sm transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Online Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
