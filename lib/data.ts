import {
  Zap,
  PanelsTopLeft,
  Building2,
  Cog,
  Wind,
  Sofa,
  Factory,
  Plug,
  Power,
  Settings2,
  Wrench,
  ClipboardCheck,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Youtube,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

export const company = {
  name: "High Power Engineering Limited",
  tagline: "Your Pinnacle in Electrical and Power Solutions!",
  description:
    "Leading provider of power generation, electrical infrastructure, and industrial solutions across South Asia. We deliver reliable, efficient, and sustainable energy systems for businesses of every size.",
  email: "contact@highpowerbd.com",
  phone: "+8801842 11 39 39",
  address:
    "Rokeya Nibash (Ground Floor), 91 Shohid Jan-E-Alam Shorok, Muradpur",
  shortAddress: "Muradpur, Chattogram, Bangladesh",
  founded: 2010,
};

export const socialLinks = [
  { label: "Facebook", href: "#", icon: Facebook },
  { label: "Twitter", href: "#", icon: Twitter },
  { label: "YouTube", href: "#", icon: Youtube },
  { label: "LinkedIn", href: "#", icon: Linkedin },
];

export const contactEmails = [
  "contact@highpowerbd.com",
  "sales@highpowerbd.com",
  "support@highpowerbd.com",
];

export type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string; description?: string }[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Diesel Generators", href: "/products#diesel" },
      { label: "Gas Generators", href: "/products#gas" },
      { label: "Power Transformers", href: "/products#transformers" },
      { label: "Panel Boards", href: "/products#panels" },
      { label: "Substation Equipment", href: "/products#substation" },
      { label: "Power Plants", href: "/products#plants" },
      { label: "Synchronizing Panels", href: "/products#sync" },
      { label: "Electrical Equipment", href: "/products#equipment" },
    ],
  },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
];

export type ServiceTile = {
  title: string;
  icon: LucideIcon;
  href: string;
};

export const serviceTiles: ServiceTile[] = [
  { title: "Power Plant", icon: Factory, href: "/services#power-plant" },
  { title: "Panel Board", icon: PanelsTopLeft, href: "/services#panel-board" },
  { title: "Substation", icon: Building2, href: "/services#substation" },
  { title: "Generator", icon: Cog, href: "/services#generator" },
  { title: "Air Conditioner", icon: Wind, href: "/services#ac" },
  { title: "Interior Design", icon: Sofa, href: "/services#interior" },
];

export type Product = {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
};

export const products: Product[] = [
  {
    title: "Diesel Generators",
    description:
      "Heavy-duty diesel generators from 10 kVA to 3000 kVA for industrial and commercial use.",
    icon: Cog,
    href: "/products#diesel",
  },
  {
    title: "Gas Generators",
    description:
      "Clean-burning gas generators engineered for efficiency and low emissions.",
    icon: Zap,
    href: "/products#gas",
  },
  {
    title: "Power Transformers",
    description:
      "Distribution and power transformers built to international standards.",
    icon: Power,
    href: "/products#transformers",
  },
  {
    title: "Panel Boards",
    description:
      "LV/MV switchgear and custom control panels for every application.",
    icon: PanelsTopLeft,
    href: "/products#panels",
  },
  {
    title: "Substation Equipment",
    description:
      "Complete substation solutions including CT, PT, isolators, and busbars.",
    icon: Building2,
    href: "/products#substation",
  },
  {
    title: "Power Plants",
    description:
      "Turnkey power plant design, supply, and commissioning up to 500 MW.",
    icon: Factory,
    href: "/products#plants",
  },
  {
    title: "Synchronizing Panels",
    description:
      "Auto-sync panels for paralleling multiple generators seamlessly.",
    icon: Settings2,
    href: "/products#sync",
  },
  {
    title: "Electrical Equipment",
    description:
      "Cables, switchgear, breakers, and full electrical accessory lines.",
    icon: Plug,
    href: "/products#equipment",
  },
];

export type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    title: "Annual Maintenance Contract",
    description:
      "Comprehensive yearly maintenance contracts covering preventive checks, parts, and 24/7 support.",
    icon: ClipboardCheck,
  },
  {
    title: "Supply-Installation-Maintenance",
    description:
      "End-to-end project delivery — from procurement to commissioning and lifetime maintenance.",
    icon: Wrench,
  },
  {
    title: "Corporate Service",
    description:
      "Dedicated engineering teams for corporate clients requiring multi-site service contracts.",
    icon: Settings2,
  },
];

export type Slide = {
  title: string;
  subtitle: string;
  icon: LucideIcon;
  gradient: string;
  image: string;
};

export const heroSlides: Slide[] = [
  {
    title: "Powering Industry",
    subtitle: "Heavy-duty generators and turnkey power plants.",
    icon: Factory,
    gradient: "from-secondary via-primary/80 to-secondary",
    image: "/images/hpe-0.jpg",
  },
  {
    title: "Built for Reliability",
    subtitle: "Engineered electrical systems that never stop running.",
    icon: Power,
    gradient: "from-secondary via-primary/90 to-slate-900",
    image: "/images/hpe-1.jpg",
  },
  {
    title: "Switchgear & Panels",
    subtitle: "Custom control panels built to your specifications.",
    icon: PanelsTopLeft,
    gradient: "from-primary via-secondary to-slate-900",
    image: "/images/hpe-2.jpg",
  },
  {
    title: "Substations",
    subtitle: "Complete substation design, supply, and installation.",
    icon: Building2,
    gradient: "from-secondary via-primary/70 to-slate-900",
    image: "/images/hpe-3.jpg",
  },
  {
    title: "Climate Control",
    subtitle: "Industrial air conditioning for any environment.",
    icon: Wind,
    gradient: "from-primary/90 via-secondary to-slate-900",
    image: "/images/hpe-4.jpg",
  },
  {
    title: "Interior Solutions",
    subtitle: "Professional interior design for industrial spaces.",
    icon: Sofa,
    gradient: "from-secondary via-primary to-slate-900",
    image: "/images/hpe-5.jpg",
  },
];

export const recentProjects = [
  {
    title: "335 MW Combined Cycle Power Plant",
    category: "Power Plant",
    image: "/images/hpe-0.jpg",
  },
  {
    title: "Industrial Substation — Gazipur",
    category: "Substation",
    image: "/images/hpe-1.jpg",
  },
  {
    title: "Generator Bank — Chittagong Port",
    category: "Generators",
    image: "/images/hpe-2.jpg",
  },
  {
    title: "Hospital Backup Power — Square Hospital",
    category: "Backup",
    image: "/images/hpe-3.jpg",
  },
  {
    title: "RMG Factory Distribution Upgrade",
    category: "Switchgear",
    image: "/images/hpe-4.jpg",
  },
];

export const quickContact = {
  email: Mail,
  phone: Phone,
  address: MapPin,
};

export type ClientReview = {
  name: string;
  role: string;
  company: string;
  rating: number; // 1-5
  review: string;
  initials: string;
  color: string;
};

export const clientReviews: ClientReview[] = [
  {
    name: "Mohammad Rahman",
    role: "Plant Director",
    company: "Apex Group",
    rating: 5,
    review:
      "High Power BD delivered our 50 MW substation ahead of schedule. Their engineering team was professional from design through commissioning. We could not be happier with the reliability of the system.",
    initials: "MR",
    color: "from-primary to-secondary",
  },
  {
    name: "Sarah Akter",
    role: "Operations Manager",
    company: "Vertex Energy",
    rating: 5,
    review:
      "We have been working with High Power for over 6 years. Their generator installations and AMC service have kept our factory running through every power crisis. Truly a dependable partner.",
    initials: "SA",
    color: "from-secondary to-primary",
  },
  {
    name: "Engr. Tanvir Hasan",
    role: "Chief Engineer",
    company: "Polaris Industries",
    rating: 5,
    review:
      "The synchronizing panels and switchgear they supplied exceeded international quality standards. Their after-sales support is unmatched in Bangladesh.",
    initials: "TH",
    color: "from-primary/80 to-secondary",
  },
  {
    name: "Ayesha Siddiqua",
    role: "Facility Head",
    company: "Atlas Power",
    rating: 4,
    review:
      "From site survey to final handover, the High Power team demonstrated deep technical knowledge and a strong commitment to safety. Highly recommended for industrial projects.",
    initials: "AS",
    color: "from-secondary to-primary/80",
  },
  {
    name: "Kamal Uddin",
    role: "Project Manager",
    company: "BlueRiver Textiles",
    rating: 5,
    review:
      "Their turnkey solution for our RMG factory was outstanding. Capacity doubled with zero downtime during the upgrade. Excellent value for the investment.",
    initials: "KU",
    color: "from-primary to-slate-900",
  },
  {
    name: "Nadia Khan",
    role: "Director",
    company: "Crescent Hospitals",
    rating: 5,
    review:
      "Hospital-grade backup power is mission-critical, and High Power delivered exactly that. The 24/7 monitoring service gives us complete peace of mind.",
    initials: "NK",
    color: "from-secondary/80 to-primary",
  },
  {
    name: "Mahmud Hossain",
    role: "Procurement Lead",
    company: "Delta Corp",
    rating: 5,
    review:
      "We evaluated three vendors before choosing High Power. Their pricing was competitive, but it was the technical expertise that won us over. Five years on, still no regrets.",
    initials: "MH",
    color: "from-primary/90 to-secondary/90",
  },
  {
    name: "Rezaul Karim",
    role: "Site Engineer",
    company: "Emirates Construction",
    rating: 4,
    review:
      "Reliable equipment, on-time delivery, and a responsive service team. High Power BD has been our go-to supplier for power infrastructure across multiple sites.",
    initials: "RK",
    color: "from-secondary to-primary/70",
  },
];
