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
  type IconType as LucideIcon,
} from "@/components/icons";

export const company = {
  name: "High Power Engineering Limited",
  tagline: "Your Pinnacle in Electrical and Power Solutions!",
  description:
    "Leading provider of power generation, electrical infrastructure, and industrial solutions across South Asia. We deliver reliable, efficient, and sustainable energy systems for businesses of every size.",
  email: "contact@highpowerbd.com",
  phone: "01842 11 39 39",
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
      { label: "Substation Equipment", href: "/products/substation-equipment" },
      { label: "Elevator", href: "/products/lift" },
      { label: "Escalator", href: "/products/escalator" },
      { label: "Diesel Generators", href: "/products/diesel-generators" },
      { label: "Solar Systems", href: "/products/solar-systems" },
      { label: "Panel Board", href: "/products/panel-boards" },
      { label: "Electrical Equipment", href: "/products/electrical-equipment" },
      { label: "Cable Trays", href: "/products/cable-trays" },
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

export type LiftType = {
  label: string;
  description: string;
  image: string;
};

export type AccessoryGalleryImage = {
  title: string;
  caption: string;
  image: string;
};

export type Product = {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  icon: LucideIcon;
  href: string;
  image: string;
  liftTypes?: LiftType[];
  accessoryGallery?: {
    eyebrow: string;
    title: string;
    description: string;
    images: AccessoryGalleryImage[];
  };
};

export const products: Product[] = [
  {
    title: "Substation Equipment",
    slug: "substation-equipment",
    description:
      "Complete substation solutions including CT, PT, isolators, and busbars.",
    icon: Building2,
    href: "/products/substation-equipment",
    image: "/images/hpe-substation.jpg",
  },
  {
    title: "Lift",
    slug: "lift",
    description:
      "High-capacity lifts and elevators for industrial and commercial buildings.",
    longDescription:
      "We supply, install, and maintain a complete range of lifts and elevator systems tailored to residential, commercial, healthcare, and industrial applications. From passenger and home lifts to hospital beds, freight, capsule, and panoramic elevators — our portfolio covers every vertical-transport need, backed by reliable spare parts and service support.",
    icon: Building2,
    href: "/products/lift",
    image: "/images/hpe-elevator.jpg",
    liftTypes: [
      {
        label: "Passenger Lifts",
        description:
          "Smooth and energy-efficient passenger elevators designed for residential and commercial buildings of every height.",
        image: "/images/lifts/lift-passenger.jpg",
      },
      {
        label: "Home Lifts",
        description:
          "Compact home lifts that blend seamlessly into modern residences, with quiet operation and elegant finishes.",
        image: "/images/lifts/lift-home.jpg",
      },
      {
        label: "Cargo / Freight Lifts",
        description:
          "Heavy-duty freight elevators for warehouses, factories, and loading bays with high load capacity and rugged construction.",
        image: "/images/lifts/lift-cargo.jpg",
      },
      {
        label: "Hospital Lifts",
        description:
          "Stretcher-grade hospital elevators with extra-wide cabins, smooth ride quality, and reliable backup power support.",
        image: "/images/lifts/lift-hospital.jpg",
      },
      {
        label: "Capsule / Panoramic",
        description:
          "Architectural capsule and panoramic lifts with glass cabins for hotels, malls, and signature commercial spaces.",
        image: "/images/lifts/lift-capsule.jpg",
      },
      {
        label: "Escalators & Travelators",
        description:
          "Indoor and outdoor escalators and moving walks for high-traffic public and commercial environments.",
        image: "/images/lifts/lift-escalators.jpg",
      },
      {
        label: "Dumbwaiters / Service",
        description:
          "Compact dumbwaiter and service lifts for kitchens, libraries, restaurants, and back-of-house operations.",
        image: "/images/lifts/lift-dumbwaiters.jpg",
      },
      {
        label: "Parts & Accessories",
        description:
          "Genuine spare parts, drives, doors, cabins, and accessories to keep every lift running safely and reliably.",
        image: "/images/lifts/lift-parts.jpg",
      },
    ],
    accessoryGallery: {
      eyebrow: "Parts & Accessories",
      title: "Lift Accessories & Finishes Gallery",
      description:
        "Browse our range of cabin decorations, landing doors, ceilings, floors, handrails, and car operation panels — supplied and installed by our own engineering team.",
      images: [
        {
          title: "Cabin Decoration — Standard Stainless Steel",
          caption:
            "Hairline stainless steel and acrylic cabin finishes with PVC flooring — clean, durable, and ideal for offices and apartment buildings.",
          image: "/images/lifts/accessories/fuji-accessory-12.jpg",
        },
        {
          title: "Cabin Decoration — Mirror Etched Steel",
          caption:
            "Mirror and etched stainless steel cabin walls paired with brushed steel handrails and PVC floors, in FJ-005 and FJ-006 configurations.",
          image: "/images/lifts/accessories/fuji-accessory-13.jpg",
        },
        {
          title: "Cabin Decoration — Brushed Steel & Mirror",
          caption:
            "Painted steel and LED-lit cabins in brushed stainless steel and mirror polished finishes — models FJ-007 through FJ-010.",
          image: "/images/lifts/accessories/fuji-accessory-14.jpg",
        },
        {
          title: "Cabin Decoration — Golden & Rose Gold",
          caption:
            "Premium rose gold mirror, champagne mirror, and wooden frame cabins with tianzan stainless steel handrails for luxury developments.",
          image: "/images/lifts/accessories/fuji-accessory-16.jpg",
        },
        {
          title: "Landing Doors — Mirror & Etched",
          caption:
            "Decorative landing door panels in mirror etched and hairline stainless steel — models FJ-D001 through FJ-D004.",
          image: "/images/lifts/accessories/fuji-accessory-18.jpg",
        },
        {
          title: "Landing Doors — Golden & Rose Golden",
          caption:
            "Titanium golden, champagne golden, and rose golden etched landing doors in nine standard variants for hotels and commercial towers.",
          image: "/images/lifts/accessories/fuji-accessory-19.jpg",
        },
        {
          title: "Cabin Ceiling Designs",
          caption:
            "Eight ceiling styles in hairline stainless steel, mirror, and acrylic with integrated LED lighting — models FJ-D001 through FJ-D008.",
          image: "/images/lifts/accessories/fuji-accessory-20.jpg",
        },
        {
          title: "Floors, Handrails & RAL Colours",
          caption:
            "Decorative cabin floors, ten handrail profiles, and a full RAL colour palette so every cabin can be matched to your building interior.",
          image: "/images/lifts/accessories/fuji-accessory-21.jpg",
        },
        {
          title: "Car Operation Panels & Fixtures",
          caption:
            "Digital COP and LOP indicator panels, braille buttons, fireman switches, and hall lanterns — models FJ-COP and FJ-LOP series.",
          image: "/images/lifts/accessories/fuji-accessory-23.jpg",
        },
      ],
    },
  },
  {
    title: "Escalator",
    slug: "escalator",
    description:
      "Reliable escalators for high-traffic commercial and industrial spaces.",
    icon: Building2,
    href: "/products/escalator",
    image: "/images/hpe-escalator.jpg",
  },
  {
    title: "Diesel Generators",
    slug: "diesel-generators",
    description:
      "Heavy-duty diesel generators from 10 kVA to 3000 kVA for industrial and commercial use.",
    icon: Cog,
    href: "/products/diesel-generators",
    image: "/images/hpe-generator.jpg",
  },
  {
    title: "Solar Systems",
    slug: "solar-systems",
    description:
      "Turnkey solar power solutions including panels, inverters, and storage systems.",
    icon: Zap,
    href: "/products/solar-systems",
    image: "/images/hpe-solar.jpg",
  },
  {
    title: "Panel Boards",
    slug: "panel-boards",
    description:
      "LV/MV switchgear and custom control panels for every application.",
    icon: PanelsTopLeft,
    href: "/products/panel-boards",
    image: "/images/hpe-panel-board.jpg",
  },
  {
    title: "Electrical Equipment",
    slug: "electrical-equipment",
    description:
      "Cables, switchgear, breakers, and full electrical accessory lines.",
    icon: Plug,
    href: "/products/electrical-equipment",
    image: "/images/hpe-electrical.png",
  },
  {
    title: "Cable Trays",
    slug: "cable-trays",
    description:
      "Robust cable management solutions for industrial and commercial installations.",
    icon: Power,
    href: "/products/cable-trays",
    image: "/images/hpe-cable-tray.png",
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
    title: "Elevetor",
    subtitle:
      "High-performance lifts and elevators for industrial and commercial buildings.",
    icon: Factory,
    gradient: "from-secondary via-primary/80 to-secondary",
    image: "/images/hpe-elevator.jpg",
  },
  {
    title: "Escalator",
    subtitle:
      "Reliable escalators for high-traffic commercial and industrial spaces.",
    icon: Building2,
    gradient: "from-secondary via-primary/70 to-slate-900",
    image: "/images/hpe-escalator.jpg",
  },
  {
    title: "Substation",
    subtitle:
      "Complete substation solutions for industrial and commercial power distribution.",
    icon: PanelsTopLeft,
    gradient: "from-primary via-secondary to-slate-900",
    image: "/images/hpe-substation.jpg",
  },
  {
    title: "Transformer",
    subtitle:
      "Reliable power transformers for industrial and commercial applications.",
    icon: Power,
    gradient: "from-secondary via-primary/90 to-slate-900",
    image: "/images/hpe-transformer.jpg",
  },
  {
    title: "Diesel Generator",
    subtitle: "Reliable power generation for critical applications.",
    icon: Wind,
    gradient: "from-primary/90 via-secondary to-slate-900",
    image: "/images/hpe-generator.jpg",
  },
  {
    title: "Open Type Generator.",
    subtitle:
      "Reliable power generation for industrial and commercial applications.",
    icon: Wind,
    gradient: "from-primary/90 via-secondary to-slate-900",
    image: "/images/hpe-open-generator.jpg",
  },
  {
    title: "Renewable Energy",
    subtitle: "Sustainable power solutions for a greener future.",
    icon: Sofa,
    gradient: "from-secondary via-primary to-slate-900",
    image: "/images/hpe-solar.jpg",
  },
];

export const recentProjects = [
  {
    title: "315 KVA, 11 KV Distribution Transformer Repair",
    category: "Transformer",
    image: "/images/hpe-transformer.jpg",
  },
  {
    title: "Industrial Substation — Gazipur",
    category: "Substation",
    image: "/images/hpe-substation.jpg",
  },
  {
    title: "Generator Bank — Chittagong Port",
    category: "Generators",
    image: "/images/hpe-escalator.jpg",
  },
  {
    title: "Hospital Backup Power — Square Hospital",
    category: "Backup",
    image: "/images/hpe-solar.jpg",
  },
  {
    title: "RMG Factory Distribution Upgrade",
    category: "Switchgear",
    image: "/images/hpe-generator.jpg",
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
