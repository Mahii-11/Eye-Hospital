import React, { useState } from 'react';
import { X, Calendar, Clock, User, Phone, CheckCircle2, AlertCircle, Eye, ShieldCheck } from 'lucide-react';
import { SERVICES_LIST, HOSPITAL_INFO, DOCTORS_LIST } from '../data/hospitalData';

export const AppointmentModal = ({
  isOpen,
  onClose,
  preselectedServiceId
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    patientName: '',
    phone: '',
    age: '',
    gender: 'Male',
    serviceId: preselectedServiceId || 'opd',
    preferredDate: '',
    preferredTime: 'Morning (8:30 AM - 12:00 PM)',
    address: '',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div
        className="relative bg-white rounded-2xl max-w-xl w-full shadow-2xl border border-slate-200 overflow-hidden transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-sky-800 to-blue-900 px-6 py-5 text-white flex items-start justify-between">
          <div>
            <div className="flex items-center gap-1.5 text-xs text-sky-200 font-semibold tracking-wider uppercase mb-1">
              <Eye className="w-4 h-4 text-emerald-400" />
              <span>Kishoreganj Eye Hospital (KEH)</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Book Eye Consultation / Surgery
            </h3>
            <p className="text-xs sm:text-sm text-sky-100 mt-1">
              Latibabad Campus · OPD Consultation & Subsidized Surgery Booking
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-sky-200 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form or Confirmation */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-6 space-y-4 animate-in fade-in">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h4 className="text-2xl font-extrabold text-slate-900">
                  Appointment Request Confirmed!
                </h4>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.patientName}</strong>. Your consultation request for{' '}
                  <span className="text-sky-700 font-bold">
                    {SERVICES_LIST.find((s) => s.id === formData.serviceId)?.name || 'Eye Examination'}
                  </span>{' '}
                  has been queued at our Latibabad registration desk.
                </p>
              </div>

              {/* Summary Card */}
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 text-xs text-slate-700 space-y-2 text-left max-w-md mx-auto">
                <div className="flex justify-between">
                  <span className="text-slate-500">Contact Number:</span>
                  <span className="font-semibold text-slate-900">{formData.phone}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Preferred Slot:</span>
                  <span className="font-semibold text-slate-900">
                    {formData.preferredDate || 'Earliest Available'} ({formData.preferredTime})
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Hospital Desk Hotline:</span>
                  <span className="font-bold text-sky-700">{HOSPITAL_INFO.primaryPhone}</span>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`tel:${HOSPITAL_INFO.primaryPhone}`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Desk: {HOSPITAL_INFO.primaryPhone}</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 rounded-lg text-xs font-semibold transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Patient Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    placeholder="Full name of patient"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Mobile Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="01XXXXXXXXX"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Age (Years) *
                  </label>
                  <input
                    type="number"
                    required
                    min="1"
                    max="120"
                    value={formData.age}
                    onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                    placeholder="e.g. 58"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Gender
                  </label>
                  <select
                    value={formData.gender}
                    onChange={(e) => setFormData({ ...formData, gender: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Child">Child</option>
                  </select>
                </div>

                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={formData.preferredTime}
                    onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                  >
                    <option value="Morning (8:30 AM - 12:00 PM)">Morning (8:30 - 12)</option>
                    <option value="Afternoon (1:00 PM - 5:00 PM)">Afternoon (1 - 5)</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Service Required *
                  </label>
                  <select
                    value={formData.serviceId}
                    onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500 bg-white"
                  >
                    {SERVICES_LIST.map((srv) => (
                      <option key={srv.id} value={srv.id}>
                        {srv.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Visit Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Village / Upazila Address
                </label>
                <input
                  type="text"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  placeholder="e.g. Pakundia / Karimganj / Kishoreganj Sadar"
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Eye Symptoms / Additional Notes
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="e.g. Blurred vision, cloudy eyesight, diabetic eye checkup, previous surgery history..."
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-sky-700 hover:bg-sky-800 text-white font-bold text-sm shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm Appointment Request</span>
                </button>
              </div>

              <div className="flex items-center gap-2 text-[11px] text-slate-500 pt-1 justify-center">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Subsidized tickets & free surgical consultation for ultra-poor patients</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
