import type { Service, Feature, Brand, Testimonial, ProductCategory } from './types';
import {
  Video,
  Camera,
  ShieldCheck,
  Speaker,
  Laptop,
  Users,
  Wrench,
  Clock,
  Shield,
  BadgeCent,
  Search,
} from 'lucide-react';
import {
  HikvisionLogo,
  CanonLogo,
  ViewSonicLogo,
  SonyLogo,
  EpsonLogo,
} from '@/components/brand-logos';
import type { ImagePlaceholder } from './placeholder-images';

export const services: Service[] = [
  {
    title: 'Projector Repair',
    icon: Video,
    imageId: 'service-projector',
    description: 'Expert repairs for all major projector brands. We fix everything from dim bulbs to color wheel issues.',
  },
  {
    title: 'DSLR/SLR Camera Repair',
    icon: Camera,
    imageId: 'service-dslr',
    description: 'Professional servicing for digital and film cameras. Sensor cleaning, lens calibration, and more.',
  },
  {
    title: 'Security Camera Setup',
    icon: ShieldCheck,
    imageId: 'service-cctv',
    description: 'Complete installation and maintenance services for CCTV and security camera systems.',
  },
  {
    title: 'Audio-Visual Equipment',
    icon: Speaker,
    imageId: 'service-av',
    description: 'Repairs for speakers, amplifiers, mixers, and other professional audio-visual gear.',
  },
  {
    title: 'Computer/IT Equipment',
    icon: Laptop,
    imageId: 'service-it',
    description: 'From laptop screen replacements to data recovery, we handle all your IT hardware needs.',
  },
  {
    title: 'All Electronic Services',
    icon: Wrench,
    imageId: 'service-generic',
    description: 'Have something else? We offer a wide range of electronic repair services. Contact us for a free quote!',
  },
];

export const features: Feature[] = [
  {
    icon: Users,
    title: 'Experienced Technicians',
    description: 'Our team has years of hands-on experience with a vast range of electronic devices.',
  },
  {
    icon: Wrench,
    title: 'Genuine Spare Parts',
    description: 'We use only high-quality, genuine parts to ensure the longevity and performance of your repairs.',
  },
  {
    icon: Clock,
    title: 'Quick Turnaround',
    description: 'We understand your time is valuable. We strive for the fastest possible repair times.',
  },
  {
    icon: Shield,
    title: 'Warranty on Repairs',
    description: 'All our services come with a warranty, giving you peace of mind.',
  },
  {
    icon: BadgeCent,
    title: 'Competitive Pricing',
    description: 'Get top-quality service without breaking the bank. Our prices are fair and transparent.',
  },
  {
    icon: Search,
    title: 'Free Diagnosis',
    description: 'We offer a completely free, no-obligation diagnosis and quote for your device.',
  },
];

export const brands: Brand[] = [
  { name: 'Hikvision', logo: HikvisionLogo },
  { name: 'Canon', logo: CanonLogo },
  { name: 'ViewSonic', logo: ViewSonicLogo },
  { name: 'Sony', logo: SonyLogo },
  { name: 'Epson', logo: EpsonLogo },
  { name: 'Hikvision', logo: HikvisionLogo },
  { name: 'Canon', logo: CanonLogo },
  { name: 'ViewSonic', logo: ViewSonicLogo },
  { name: 'Sony', logo: SonyLogo },
  { name: 'Epson', logo: EpsonLogo },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Rohan Sharma',
    role: 'Event Photographer',
    avatarId: 'testimonial-1',
    rating: 5,
    comment: 'Proton Technosystem saved my Canon 5D Mark IV right before a big wedding shoot. The service was fast, professional, and the camera works like new. Highly recommended!',
  },
  {
    name: 'Anita Desai',
    role: 'Office Manager',
    avatarId: 'testimonial-2',
    rating: 4.5,
    comment: 'Our office projector was down and they fixed it within a day. The pricing was very reasonable, and the team was extremely courteous. Great experience.',
  },
  {
    name: 'Vikram Singh',
    role: 'Homeowner',
    avatarId: 'testimonial-3',
    rating: 5,
    comment: 'They installed a full security camera system at my home. The team was professional, clean, and explained everything perfectly. I feel much safer now. Thank you!',
  },
];


export const productCategories: ProductCategory[] = [
  {
    id: "projectors",
    title: "Projectors",
    imageId: 'product-projector',
    items: [
      { name: "Epson Home Cinema 2250", spec: "1080p, 2700 Lumens, 3LCD" },
      { name: "ViewSonic PA503S", spec: "SVGA, 3800 Lumens, DLP" },
      { name: "Sony VPL-HW45ES", spec: "Full HD, 1800 Lumens, SXRD" },
    ]
  },
  {
    id: "dslr-cameras",
    title: "DSLR Cameras",
    imageId: 'product-dslr',
    items: [
      { name: "Canon EOS R6", spec: "20.1MP, 4K Video, Full-Frame" },
      { name: "Nikon D850", spec: "45.7MP, 4K Video, FX-Format" },
      { name: "Sony Alpha a7 III", spec: "24.2MP, 4K HDR, Full-Frame" },
    ]
  },
  {
    id: "security-cameras",
    title: "Security",
    imageId: 'product-cctv',
    items: [
      { name: "Hikvision DS-2CD2143G0-I", spec: "4MP, Dome, IR Night Vision" },
      { name: "CP Plus 2.4MP Bullet", spec: "1080p, Weatherproof, IR" },
      { name: "Dahua 5MP Turret", spec: "Starlight, Built-in Mic, IP67" },
    ]
  },
  {
    id: "av-equipment",
    title: "AV Equipment",
    imageId: 'product-av',
    items: [
      { name: "JBL EON615", spec: "15-inch, 1000W, Powered Speaker" },
      { name: "Shure SM58", spec: "Cardioid Dynamic Vocal Mic" },
      { name: "Behringer Xenyx Q802USB", spec: "8-Input 2-Bus Mixer" },
    ]
  },
  {
    id: "it-equipment",
    title: "IT Equipment",
    imageId: 'product-it',
    items: [
      { name: "Dell XPS 13", spec: "Intel Core i7, 16GB RAM, 512GB SSD" },
      { name: "HP Spectre x360", spec: "Intel Core i5, 8GB RAM, 256GB SSD" },
      { name: "Lenovo ThinkPad X1 Carbon", spec: "Intel Core i7, 16GB RAM, 1TB SSD" },
    ]
  }
];


export const placeholderImages: Omit<ImagePlaceholder, 'imageUrl'>[] = [
    { id: 'hero-workshop', description: 'A modern electronics repair workshop', imageHint: 'electronics workshop' },
    { id: 'service-projector', description: 'Close-up of a projector lens', imageHint: 'projector lens' },
    { id: 'service-dslr', description: 'A DSLR camera on a workbench', imageHint: 'DSLR camera' },
    { id: 'service-cctv', description: 'A security camera mounted on a wall', imageHint: 'security camera' },
    { id: 'service-av', description: 'Audio mixing console', imageHint: 'audio mixer' },
    { id: 'service-it', description: 'An open laptop being repaired', imageHint: 'laptop repair' },
    { id: 'service-generic', description: 'Various electronic components', imageHint: 'electronic components' },
    { id: 'testimonial-1', description: 'Profile picture of a male photographer', imageHint: 'male portrait' },
    { id: 'testimonial-2', description: 'Profile picture of a female office worker', imageHint: 'female portrait' },
    { id: 'testimonial-3', description: 'Profile picture of a male homeowner', imageHint: 'man smiling' },
    { id: 'product-projector', description: 'A home cinema setup with a projector', imageHint: 'home cinema' },
    { id: 'product-dslr', description: 'A collection of dslr cameras', imageHint: 'camera collection' },
    { id: 'product-cctv', description: 'Multiple cctv cameras on display', imageHint: 'CCTV display' },
    { id: 'product-av', description: 'Professional audio equipment', imageHint: 'audio equipment' },
    { id: 'product-it', description: 'Modern laptops on a desk', imageHint: 'laptops desk' },
].map(img => ({ ...img, imageUrl: `https://picsum.photos/seed/${img.id}/800/600` }));
