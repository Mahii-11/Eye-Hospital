import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, MapPin, Calendar, Camera, Filter } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/hospitalData';

export const GallerySection = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'patients', label: 'Patient Care' },
    { id: 'community', label: 'Community Outreach & Camps' },
    { id: 'hospital', label: 'Hospital & OT Suites' }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-24 bg-slate-50/70 border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200 mb-3">
              <Camera className="w-3.5 h-3.5 text-sky-600" />
              <span>Real Impact & Medical Facilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Photo Gallery & Community Engagement
            </h2>
            <p className="mt-3 text-base text-slate-600 max-w-2xl">
              Witness our journey restoring vision across rural Kishoreganj — from hospital surgical theaters to community screenings and smiling post-operative patients.
            </p>
          </div>

          {/* Interactive Category Filter Tabs (Zero-pill button style) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-white rounded-xl border border-slate-200 shadow-xs overflow-x-auto max-w-full">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-sky-700 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Clean Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setSelectedPhoto(item)}
                className="group relative bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-100">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/20 backdrop-blur-md px-3 py-1 rounded-md">
                      <ZoomIn className="w-3.5 h-3.5" />
                      <span>Click to view full photo</span>
                    </span>
                  </div>

                  {/* Clean unboxed category kicker on top */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200/80 shadow-xs text-xs font-semibold text-sky-800">
                    {item.categoryLabel}
                  </div>
                </div>

                {/* Caption / Information */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                      {item.caption}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-sky-600" />
                      <span>{item.location}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{item.date}</span>
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Featured Community Banner */}
        <div className="mt-14 bg-white rounded-2xl border border-sky-200/80 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-sky-700">
                Community Ophthalmology Initiative
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                Have a Rural Community or Union in Need of a Free Eye Camp?
              </h3>
              <p className="text-sm text-slate-600 max-w-2xl">
                We coordinate with local Union Parishad leaders, teachers, and social welfare organizations to schedule field screenings and free surgical camps in remote areas.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              <a
                href="tel:01738301501"
                className="px-5 py-3 rounded-lg bg-sky-700 hover:bg-sky-800 text-white font-semibold text-sm shadow-sm transition-all"
              >
                Inquire for Camp Organizing
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div
            className="relative max-w-4xl w-full bg-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-slate-700"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-4 bg-slate-950 flex items-center justify-between border-b border-slate-800 text-white">
              <div>
                <span className="text-xs text-sky-400 font-semibold tracking-wide">
                  {selectedPhoto.categoryLabel} · {selectedPhoto.location}
                </span>
                <h4 className="text-lg font-bold text-white mt-0.5">
                  {selectedPhoto.title}
                </h4>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                aria-label="Close photo preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Photo */}
            <div className="relative max-h-[65vh] w-full flex items-center justify-center bg-black">
              <img
                src={selectedPhoto.imageSrc}
                alt={selectedPhoto.title}
                referrerPolicy="no-referrer"
                className="max-h-[65vh] w-auto max-w-full object-contain"
              />
            </div>

            {/* Caption & Location footer */}
            <div className="p-5 bg-slate-950 border-t border-slate-800 text-slate-300 text-sm leading-relaxed">
              <p>{selectedPhoto.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
