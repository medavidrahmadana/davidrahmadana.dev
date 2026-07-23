export interface Achievement {
  title: string;
  organization: string;
  date: string; // e.g., '2023-09' or 'September 2023'
  description: string;
  icon: any; // Lucide icon component
  badge?: string; // optional badge text
}

export const achievementsData: Achievement[] = [
  {
    title: 'Best Mobile App Award',
    organization: 'Tech Innovation Awards',
    date: '2022-11',
    description: 'Recognized for outstanding UI/UX and performance in the Android market.',
    icon: require('lucide-react').Award,
    badge: 'Award',
  },
  {
    title: 'Certified Laravel Developer',
    organization: 'Laravel Certification Board',
    date: '2021-06',
    description: 'Professional certification validating deep expertise in Laravel framework.',
    icon: require('lucide-react').BadgeCheck,
    badge: 'Certification',
  },
  {
    title: 'Open Source Contributor',
    organization: 'GitHub',
    date: '2020-04',
    description: 'Contributed to 15+ repositories, focusing on performance optimizations and documentation.',
    icon: require('lucide-react').GitBranch,
  },
  {
    title: 'Speaker at VueConf 2023',
    organization: 'Vue.js Community',
    date: '2023-03',
    description: 'Delivered a talk on scalable state management with Pinia and Vuex.',
    icon: require('lucide-react').Mic,
    badge: 'Speaker',
  },
];
