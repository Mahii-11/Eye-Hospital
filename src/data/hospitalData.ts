import { ServiceItem, GalleryItem, Doctor, NewsItem } from '../types';

export const HOSPITAL_INFO = {
  name: 'Kishoreganj Eye Hospital',
  acronym: 'KEH',
  tagline: 'Specialized Secondary Eye Care Centre',
  parentOrg: 'Nari Uddug Kendra (NUK)',
  establishedYear: '2006',
  founder: 'Mashuda Khatun Shefali',
  founderRole: 'Founder Executive Director, NUK & Visionary of KEH',
  primaryPhone: '01738301501',
  altPhones: ['+8801720-015921', '+8801324-735141', '+8801324-735144'],
  email: 'info@kehbd.org',
  altEmail: 'nukkeh2006@gmail.com',
  address: {
    street: 'Latibabad, Kishoreganj Sadar',
    district: 'Kishoreganj',
    division: 'Dhaka Division',
    country: 'Bangladesh',
    postalCode: '2300',
    full: 'Latibabad, Kishoreganj Sadar, Kishoreganj - 2300, Bangladesh'
  },
  hours: {
    opd: 'Saturday – Thursday: 8:00 AM – 5:00 PM',
    emergency: '24/7 Emergency Eye Trauma Service',
    friday: 'Special surgical reviews & emergency on call'
  },
  partner: 'Collaborating Partner: WHO VISION 2020: The Right to Sight'
};

export const HERO_SLIDES = [
  {
    id: 1,
    imageSrc: '/src/assets/images/keh_hospital_building_1790604796889.jpg',
    altText: 'Kishoreganj Eye Hospital Modern Medical Facility in Latibabad'
  },
  {
    id: 2,
    imageSrc: '/src/assets/images/keh_hospital_interior_1790604814075.jpg',
    altText: 'Kishoreganj Eye Hospital Reception Lobby and Patient Care Center'
  },
  {
    id: 3,
    imageSrc: '/src/assets/images/keh_operation_theatre_1790604827363.jpg',
    altText: 'Advanced Ophthalmic Operating Theatre for Phacoemulsification'
  },
  {
    id: 4,
    imageSrc: '/src/assets/images/keh_patient_group_1790604862214.jpg',
    altText: 'Restored Vision - Post Operative Cataract Patient Community'
  }
];

export const HOSPITAL_STATS = [
  { label: 'Years of Dedicated Service', value: '18+', detail: 'Serving since 2006' },
  { label: 'Successful Cataract Surgeries', value: '52,000+', detail: 'Micro-incision & SICS' },
  { label: 'OPD Patients Treated', value: '280,000+', detail: 'Comprehensive eye care' },
  { label: 'Free Outreach Eye Camps', value: '450+', detail: 'Reaching haor & rural areas' }
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'opd',
    name: 'OPD (Out-Patient Department)',
    shortName: 'OPD',
    tagline: 'Comprehensive daily eye diagnostics and expert doctor consultations',
    description: 'Our Out-Patient Department provides systematic eye checkups using digital slit-lamps, autorefractors, and tonometer systems to detect vision impairment, glaucoma, and ocular diseases early.',
    iconName: 'Stethoscope',
    features: [
      'Digital slit-lamp anterior segment examination',
      'Applanation tonometry for early glaucoma detection',
      'Direct & indirect ophthalmoscopy for retina evaluation',
      'Subsidized tickets ensuring accessible care for all income groups'
    ],
    timing: 'Sat - Thu: 8:00 AM - 5:00 PM',
    eligibleForCamp: true
  },
  {
    id: 'ipd',
    name: 'IPD (In-Patient Department)',
    shortName: 'IPD',
    tagline: 'Safe, comfortable, and hygienic surgical recovery wards',
    description: 'Spacious in-patient facilities with dedicated male and female recovery wards, continuous nursing care, post-surgical monitoring, and compassionate support for elderly and rural surgical patients.',
    iconName: 'Bed',
    features: [
      'Separate hygienic wards with clean bedding and ventilation',
      '24/7 on-duty nursing and clinical support staff',
      'Nutritious meal arrangements for surgical patients',
      'Comprehensive pre-operative preparation and post-op round care'
    ],
    timing: '24 Hours Hospital Admission & Care',
    eligibleForCamp: false
  },
  {
    id: 'cataract-surgery',
    name: 'Cataract Surgery',
    shortName: 'Cataract Surgery',
    tagline: 'Safe sight-restoring surgery with premium Intraocular Lenses (IOL)',
    description: 'Small Incision Cataract Surgery (SICS) performed by experienced ophthalmic surgeons, replacing clouded natural lenses with high-definition artificial intraocular lenses (IOLs).',
    iconName: 'Eye',
    features: [
      'High-success Small Incision Cataract Surgery (SICS)',
      'Subsidized and free surgeries for ultra-poor rural citizens',
      'Rigorous biometry and A-scan for accurate lens power selection',
      'Full post-operative kit including protective goggles and medication'
    ],
    timing: 'Surgery Days: Mon, Wed, Sat (Scheduled)',
    eligibleForCamp: true
  },
  {
    id: 'phaco-surgery',
    name: 'Phaco Surgery',
    shortName: 'Phaco Surgery',
    tagline: 'Stitchless, painless micro-incision cataract removal',
    description: 'State-of-the-art ultrasound phacoemulsification technique allowing micro-incisions of less than 2.8mm, foldable hydrophobic lens implants, minimal recovery time, and fast return to daily activities.',
    iconName: 'Activity',
    features: [
      'Micro-incision stitchless procedure without needle injections',
      'Foldable hydrophobic and multi-focal premium IOL options',
      'Rapid visual rehabilitation within 24 to 48 hours',
      'Operated under high-precision German/Swiss surgical microscopes'
    ],
    timing: 'Daily Morning OT Sessions',
    eligibleForCamp: false
  },
  {
    id: 'refraction',
    name: 'Refraction & Vision Testing',
    shortName: 'Refraction',
    tagline: 'Computerized optical measurements and precision vision correction',
    description: 'Certified senior optometrists utilize computerized auto-refractometers and trial lens sets to identify myopia, hyperopia, astigmatism, and presbyopia for crystal clear focus.',
    iconName: 'Glasses',
    features: [
      'High-accuracy computerized auto-refractometer testing',
      'Subjective refraction and binocular balance checks',
      'Pediatric vision assessment for squint and lazy eye (amblyopia)',
      'Accurate prescription issuing for eyeglasses and occupational lenses'
    ],
    timing: 'Sat - Thu: 8:00 AM - 5:00 PM',
    eligibleForCamp: true
  },
  {
    id: 'optics-shop',
    name: 'Optics Shop',
    shortName: 'Optics Shop',
    tagline: 'In-house optical dispensary with guaranteed quality lenses',
    description: 'Our hospital optics unit offers verified prescription lenses, anti-blue light coatings, unbreakable lightweight frames, and budget-friendly options directly tailored to the doctor prescription.',
    iconName: 'ShoppingBag',
    features: [
      'Wide collection of durable metallic, TR90, and flexible frames',
      'Blue-cut, anti-reflective (ARC), photochromic, and progressive lenses',
      'Special discounted eyeglasses package for students and elderly',
      'Fast same-day dispensing for standard spherical corrections'
    ],
    timing: 'Sat - Thu: 8:00 AM - 6:00 PM',
    eligibleForCamp: false
  },
  {
    id: 'pharmacy-shop',
    name: 'Pharmacy Shop',
    shortName: 'Pharmacy Shop',
    tagline: '24/7 dedicated ophthalmic dispensary with certified medications',
    description: 'Fully stocked hospital pharmacy providing authentic ophthalmic medications, post-operative antibiotic-steroid eye drops, artificial tears, glaucoma hypotensive drops, and vitamins.',
    iconName: 'Pill',
    features: [
      '100% genuine temperature-regulated eye drops and ointments',
      'Prescription verification by qualified registered pharmacists',
      'Accessible pricing with non-profit subsidized rates for poor patients',
      'Open during all clinical and surgical emergency hours'
    ],
    timing: '24/7 Open for Patients & Emergency',
    eligibleForCamp: false
  },
  {
    id: 'vision-center',
    name: 'Vision Center',
    shortName: 'Vision Center',
    tagline: 'Community satellite primary eye clinics across rural upazilas',
    description: 'Extending primary eye care to remote haor and riverine upazilas of Kishoreganj through permanent Vision Centers equipped with tele-ophthalmology connectivity to hospital consultants.',
    iconName: 'MapPin',
    features: [
      'Grassroots primary eye screenings and visual acuity checks',
      'Direct tele-consultation link with KEH senior ophthalmologists',
      'Fast referral linkage with patient transport to the base hospital',
      'Community eye health counseling and spectacles dispensing'
    ],
    timing: 'Sat - Thu: 9:00 AM - 4:00 PM',
    eligibleForCamp: true
  },
  {
    id: 'camp',
    name: 'Camp (Free Eye Outreach)',
    shortName: 'Camp',
    tagline: 'Mobile field screening camps restoring sight to remote communities',
    description: 'Regular outreach camps organized in union parishads, rural schools, and remote villages in Kishoreganj and neighboring districts, diagnosing cataracts and providing free surgical transportation.',
    iconName: 'Users',
    features: [
      'Free visual acuity screening and basic medication distribution',
      'Patient identification for completely free cataract operations',
      'Hospital bus pickup and drop facility for poor surgical patients',
      'Awareness seminars against untreated cataracts and child blindness'
    ],
    timing: 'Scheduled Weekends & Special Camp Dates',
    eligibleForCamp: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Post-Operative Cataract Recovery',
    category: 'patients',
    categoryLabel: 'Patient Care',
    imageSrc: '/src/assets/images/keh_patient_group_1790604862214.jpg',
    caption: 'Elderly rural patients smiling after successful cataract restoration at Kishoreganj Eye Hospital. Over 50,000 lives have had their vision restored.',
    date: '2026',
    location: 'KEH Courtyard, Latibabad'
  },
  {
    id: 'gal-2',
    title: 'Rural Community Eye Screening',
    category: 'community',
    categoryLabel: 'Community Camps',
    imageSrc: '/src/assets/images/keh_community_screening_1790604876848.jpg',
    caption: 'Outreach mobile eye camp in a rural village: an elderly gentleman with traditional prayer cap receives a detailed eye exam and vision counseling.',
    date: '2026',
    location: 'Outreach Camp, Pakundia'
  },
  {
    id: 'gal-3',
    title: 'Modern Hospital Architecture',
    category: 'hospital',
    categoryLabel: 'Hospital & OT',
    imageSrc: '/src/assets/images/keh_hospital_building_1790604796889.jpg',
    caption: 'Main multi-story hospital complex at Latibabad, providing secondary ophthalmic services to Kishoreganj and adjacent districts.',
    date: '2026',
    location: 'Latibabad Campus'
  },
  {
    id: 'gal-4',
    title: 'Precision Phaco Operating Theatre',
    category: 'hospital',
    categoryLabel: 'Hospital & OT',
    imageSrc: '/src/assets/images/keh_operation_theatre_1790604827363.jpg',
    caption: 'High-end surgical suite equipped with advanced ophthalmic microscopes and stitchless phacoemulsification systems.',
    date: '2026',
    location: 'Main Surgical OT Wing'
  },
  {
    id: 'gal-5',
    title: 'Welcoming Reception & OPD Lobby',
    category: 'hospital',
    categoryLabel: 'Hospital & OT',
    imageSrc: '/src/assets/images/keh_hospital_interior_1790604814075.jpg',
    caption: 'Spacious patient reception and diagnostic waiting lounge designed for comfort, clear navigation, and prompt registration.',
    date: '2026',
    location: 'Ground Floor OPD'
  }
];

export const DOCTORS_LIST: Doctor[] = [
  {
    id: 'doc-1',
    name: 'Dr. Md. Rafiqul Islam',
    designation: 'Senior Consultant Ophthalmologist & Chief Phaco Surgeon',
    degrees: 'MBBS, DO, FCPS (Ophthalmology), Fellow in Phaco (India)',
    specialty: 'Micro-Incision Phacoemulsification, Premium IOL, Glaucoma',
    visitingHours: 'Saturday to Wednesday: 9:00 AM – 3:00 PM',
    roomNo: 'Room 102 (Consultant Suite)'
  },
  {
    id: 'doc-2',
    name: 'Dr. Nasreen Akhtar',
    designation: 'Consultant Eye Surgeon & Cornea Specialist',
    degrees: 'MBBS, MS (Ophth), Fellow in Anterior Segment',
    specialty: 'Cataract Surgery (SICS & Phaco), Corneal Diseases, Pterygium',
    visitingHours: 'Sunday to Thursday: 9:00 AM – 4:00 PM',
    roomNo: 'Room 104'
  },
  {
    id: 'doc-3',
    name: 'Dr. Tanvir Hossain',
    designation: 'Resident Medical Officer & Pediatric Eye Care Specialist',
    degrees: 'MBBS, D-Ophth, Diploma in Community Ophthalmology',
    specialty: 'Pediatric Refraction, Amblyopia, Diabetic Eye Screening',
    visitingHours: 'Saturday to Thursday: 8:00 AM – 2:00 PM',
    roomNo: 'Room 106'
  },
  {
    id: 'doc-4',
    name: 'Md. Kamrul Hasan',
    designation: 'Senior Clinical Optometrist & Vision Camp Coordinator',
    degrees: 'B.Optom (DU), Certified Low Vision Specialist',
    specialty: 'Computerized Refraction, Contact Lenses, Binocular Vision',
    visitingHours: 'Saturday to Thursday: 8:30 AM – 5:00 PM',
    roomNo: 'Room 108 (Refraction Lab)'
  }
];

export const NEWS_LIST: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Free Mega Cataract Surgical Camp at Pakundia Upazila',
    date: 'October 12, 2026',
    category: 'Outreach Camp',
    summary: 'A day-long free eye camp with medicines, glasses screening, and free transportation to KEH for cataract surgeries.',
    badge: 'Upcoming Camp'
  },
  {
    id: 'news-2',
    title: 'World Sight Day: Free School Children Vision Screening',
    date: 'October 8, 2026',
    category: 'Community Health',
    summary: 'Screening program across 10 rural schools to identify uncorrected refractive errors and provide free spectacles.',
    badge: 'Awareness'
  },
  {
    id: 'news-3',
    title: 'Upgraded Phacoemulsification Unit Commissioned at KEH',
    date: 'September 15, 2026',
    category: 'Technology',
    summary: 'New high-precision ultrasound phaco technology installed for safer, painless micro-incision cataract procedures.',
    badge: 'Equipment'
  }
];

export const FAQS_LIST = [
  {
    q: 'How can I book an appointment or consultation at Kishoreganj Eye Hospital?',
    a: 'You can book an appointment by calling our dedicated helpline at 01738301501, submitting the online booking form on this website, or directly visiting the hospital OPD registration counter in Latibabad from Saturday to Thursday (8:00 AM – 5:00 PM).'
  },
  {
    q: 'What is the difference between SICS and Phaco Cataract Surgery?',
    a: 'Both are safe, sight-restoring surgeries. Phaco uses ultrasound energy through a microscopic stitchless opening (under 2.8mm) with foldable lenses and faster visual recovery within 24–48 hours. SICS (Small Incision Cataract Surgery) is a proven, highly reliable manual technique especially suited for advanced hard cataracts and is heavily subsidized at KEH.'
  },
  {
    q: 'Are cataract surgeries free for underprivileged or ultra-poor patients?',
    a: 'Yes! Kishoreganj Eye Hospital was established under Nari Uddug Kendra (NUK) specifically to combat avoidable blindness in rural Bangladesh. Through our community outreach camps and donor partnerships, eligible impoverished patients receive 100% free cataract surgery, intraocular lenses, medicines, and hospital stay.'
  },
  {
    q: 'Do you offer emergency eye trauma services?',
    a: 'Yes. Our Emergency Eye Care Department operates 24 hours a day, 7 days a week for acute ocular injuries, corneal foreign bodies, chemical burns, and sudden severe eye pain or vision loss.'
  }
];
