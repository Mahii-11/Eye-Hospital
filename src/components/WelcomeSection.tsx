import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Heart, Award, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';
import { HOSPITAL_INFO } from '../data/hospitalData';

interface WelcomeSectionProps {
  onOpenAppointment: () => void;
}

export const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onOpenAppointment }) => {
  const [showFullHistory, setShowFullHistory] = useState(false);

  return (
    <section id="about" className="py-20 bg-slate-50/60 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Profile Photo of the woman in red saree in styled rounded frame */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background decorative halo */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-200 to-blue-100 rounded-3xl -rotate-2 blur-sm"></div>

              {/* Styled Rounded Card Frame */}
              <div className="relative bg-white rounded-2xl p-4 sm:p-5 shadow-xl shadow-slate-200/70 border border-slate-150 overflow-hidden">
                {/* Image Container with precise rounded frame and shadow */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 shadow-inner group">
                  <img
                    src="/src/assets/images/keh_founder_profile_1790604845555.jpg"
                    alt="Mashuda Khatun Shefali, Founder Executive Director of NUK and Visionary of Kishoreganj Eye Hospital"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                  />
                  {/* Subtle brand tag */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md px-3.5 py-2 rounded-lg border border-slate-100 shadow-sm flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        Social Visionary & Founder
                      </p>
                      <h4 className="text-sm font-bold text-slate-900 leading-tight">
                        {HOSPITAL_INFO.founder}
                      </h4>
                    </div>
                    <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                      Est. 2006
                    </span>
                  </div>
                </div>

                {/* Profile Caption & Quote */}
                <div className="mt-4 pt-3 border-t border-slate-150 space-y-3">
                  <p className="text-xs text-slate-600 italic leading-relaxed">
                    &ldquo;Restoring someone&apos;s eyesight gives back their dignity, livelihood, and independence. At Kishoreganj Eye Hospital, our promise is that no rural mother or father should lose their vision simply because they cannot afford care.&rdquo;
                  </p>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-sky-600" />
                      Executive Director, NUK
                    </span>
                    <span className="flex items-center gap-1 font-medium text-slate-700">
                      <Award className="w-3.5 h-3.5 text-amber-500" />
                      Ashoka & Synergos Fellow
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Welcome and Background text paragraphs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Clean Section Kicker */}
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-sky-700 mb-2">
              <span className="w-2 h-2 rounded-full bg-sky-600"></span>
              <span>Welcome to Kishoreganj Eye Hospital (KEH)</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Compassionate Eye Care for Every Citizen Since 2006
            </h2>

            {/* Structured Paragraphs with generous line height */}
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              <p>
                Welcome to <strong className="text-slate-900 font-semibold">Kishoreganj Eye Hospital</strong>, a premier specialized secondary eye care institution situated in <strong className="text-slate-900 font-semibold">Latibabad, Kishoreganj</strong>. Established under the visionary initiative of <strong className="text-slate-900 font-semibold">Nari Uddug Kendra (NUK)</strong>, KEH was founded to combat the high prevalence of avoidable blindness and bring modern ophthalmic medicine to rural Bangladesh.
              </p>

              <p>
                The hospital was conceived out of a deeply personal calling by founder <strong className="text-slate-900 font-semibold">Mashuda Khatun Shefali</strong>, who witnessed firsthand the hardship her mother faced with severe eyesight loss in a region with no access to ophthalmologists. That empathy transformed into a non-profit mission: ensuring that high-grade cataract surgery, computerized refraction, and preventive eye medicine are accessible to everyone, regardless of socio-economic status.
              </p>

              <p>
                As an accredited collaborating partner of the <strong className="text-slate-900 font-semibold">WHO VISION 2020: The Right to Sight</strong> campaign, our medical complex hosts dedicated surgical suites, digital slit-lamp examination units, an automated refraction lab, 24/7 in-patient care, and mobile outreach teams serving the most remote haor communities.
              </p>

              {showFullHistory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="space-y-4 pt-2 text-slate-600"
                >
                  <p>
                    Over eighteen years of continuous operation, KEH has performed more than 52,000 sight-restoring cataract surgeries (both SICS and ultrasound phacoemulsification) and treated over a quarter-million out-patients. Our comprehensive model connects permanent base hospital facilities in Latibabad with grassroots Vision Centers and regular outreach surgical camps across Kishoreganj, Netrokona, and surrounding haor belts.
                  </p>
                  <p>
                    Through generous partner subsidies and institutional support, ultra-poor patients receive complete surgical care, intraocular lenses (IOL), hospital stay, and protective medication completely free of cost.
                  </p>
                </motion.div>
              )}
            </div>

            {/* Trust Highlights Checklist */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-200">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  WHO VISION 2020 Collaborating Partner
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Micro-Incision Phaco & Foldable IOL
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Free Surgeries for Underprivileged Patients
                </span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <span className="text-sm font-semibold text-slate-800">
                  Outreach Mobile Camps in Remote Haor Areas
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-sky-700 hover:bg-sky-800 text-white font-semibold text-sm shadow-sm shadow-sky-700/20 active:scale-98 transition-all cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setShowFullHistory(!showFullHistory)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-slate-300 hover:bg-slate-100 text-slate-700 font-semibold text-sm transition-colors cursor-pointer"
              >
                <span>{showFullHistory ? 'Show Less History' : 'Read Our Full Story'}</span>
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
