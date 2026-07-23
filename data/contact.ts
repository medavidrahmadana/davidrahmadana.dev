export interface ContactInfo {
  type: 'email' | 'github' | 'linkedin' | 'location' | 'resume';
  label: string;
  value: string; // URL for github/linkedin/resume, email address for email, plain text for location
  icon: any; // Lucide icon component
}

export const contactData: ContactInfo[] = [
  {
    type: 'email',
    label: 'Email',
    value: 'me.davidrahmadana@gmail.com',
    icon: require('lucide-react').Mail,
  },
  {
    type: 'linkedin',
    label: 'LinkedIn',
    value: 'https://linkedin.com/in/davidrahmadana',
    icon: require('lucide-react').Linkedin,
  },
  {
    type: 'github',
    label: 'GitHub',
    value: 'https://github.com/medavidrahmadana',
    icon: require('lucide-react').Github,
  },
  {
    type: 'location',
    label: 'Location',
    value: 'Banyuwangi, Indonesia',
    icon: require('lucide-react').MapPin,
  },
];
