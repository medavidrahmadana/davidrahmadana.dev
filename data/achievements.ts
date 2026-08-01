export interface Achievement {
  title: string;
  organization: string;
  date: string; // e.g., '2023-09' or 'September 2023'
  description: string;
  icon: any; // Lucide icon component
  badge?: string; // optional badge text
  image?: string; // Certificate / Trophy screenshot image
}

export const achievementsData: Achievement[] = [
  {
    title: 'Employee of the Month for May',
    organization: 'PT Cubiconia Kanaya Pratama',
    date: '2026-05',
    description: 'Awarded Best Employee of the Month in May after 3 months of service, announced at the monthly internal meeting on June 6, 2026.',
    icon: require('lucide-react').Award,
    badge: 'Award',
    image: '/achievements/best-employee.jpeg',
  },
  {
    title: 'Certified WRAP Researchship',
    organization: 'HUMIC Engineering Research Center',
    date: '2024-06',
    description: 'Telkom University programs under the Work Ready Program (WRAP) track, involving students as researchers at HUMIC Engineering Research Center.',
    icon: require('lucide-react').BadgeCheck,
    badge: 'Training program',
    image: '/achievements/Sertifikat-Humic.jpg',
  },
  {
    title: 'Caster PMCC 2023',
    organization: 'Level Infinite Indonesia',
    date: '2023-11',
    description: 'Official caster certificate awarded for participating in PUBG MOBILE CAMPUS CHAMPIONSHIP 2023 by Level Infinite Indonesia at Telkom University.',
    icon: require('lucide-react').Mic,
    badge: 'Speaker',
    image: '/achievements/pmcc-2023-as-caster.png.jpg',
  },
  {
    title: 'Caster PMCC 2024',
    organization: 'Level Infinite & KRAFTON',
    date: '2024-10',
    description: 'Tel-U Esports official award for dedication and caster contribution on PUBG Mobile Campus Championship 2024.',
    icon: require('lucide-react').Mic,
    badge: 'Speaker',
    image: '/achievements/pmcc-2024-as-caster.png',
  },
];
