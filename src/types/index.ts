export interface ServiceItem {
  id: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  iconName: string;
  features: string[];
  timing: string;
  eligibleForCamp: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'community' | 'patients' | 'hospital';
  categoryLabel: string;
  imageSrc: string;
  caption: string;
  date: string;
  location: string;
}

export interface Doctor {
  id: string;
  name: string;
  designation: string;
  degrees: string;
  specialty: string;
  visitingHours: string;
  roomNo: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
  summary: string;
  badge: string;
}

export interface AppointmentFormData {
  patientName: string;
  phone: string;
  age: string;
  gender: string;
  serviceId: string;
  preferredDate: string;
  preferredTime: string;
  address: string;
  notes: string;
}
