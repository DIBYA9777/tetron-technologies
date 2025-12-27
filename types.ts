
export interface NavItem {
  label: string;
  path: string;
}

export interface Program {
  id: string;
  title: string;
  category: string;
  duration: string;
  description: string;
  image: string;
  skills: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: string;
  suffix?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
