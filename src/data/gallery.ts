export type GalleryCategory = "Projects" | "Interiors" | "Events" | "Awards";

export interface GalleryItem {
  title: string;
  category: GalleryCategory;
  image: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    title: "Sri Krishna Nagar - Exterior",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description:
      "Front elevation of Sri Krishna Nagar showing the premium facade and landscaped frontage.",
  },
  {
    title: "Modern Living Room",
    category: "Interiors",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
    description:
      "A warm, contemporary living space designed for comfort, natural light and family time.",
  },
  {
    title: "Annual Meet 2024",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80",
    description:
      "Team World Wide Prominent Properties celebrating milestones and recognising partners at our Annual Meet 2024.",
  },
  {
    title: "Bihta Township - Aerial",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
    description:
      "Aerial view capturing the scale and planning of our Bihta residential township.",
  },
  {
    title: "Premium Kitchen Design",
    category: "Interiors",
    image:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=80",
    description:
      "Modular kitchen with premium finishes, ample storage and efficient work triangle.",
  },
  {
    title: "Best Builder Award",
    category: "Awards",
    image:
      "https://images.unsplash.com/photo-1561489422-45de3d015e3e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Recognition for consistent on‑time delivery and customer‑first approach in Patna.",
  },
  {
    title: "Canal Road Residency",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    description:
      "Street‑level perspective of our upcoming Canal Road premium residential project.",
  },
  {
    title: "Master Bedroom Suite",
    category: "Interiors",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80",
    description:
      "Spacious master bedroom with calm palette, layered lighting and bespoke wardrobe.",
  },
  {
    title: "Ground Breaking Ceremony",
    category: "Events",
    image:
      "https://images.unsplash.com/photo-1485217988980-11786ced9454?auto=format&fit=crop&w=1200&q=80",
    description:
      "Shilanyas ceremony with dignitaries and customers marking the start of a new project.",
  },
  {
    title: "Smart City Project",
    category: "Projects",
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Concept visual showcasing our vision for integrated smart city‑style living.",
  },
  {
    title: "Excellence in Construction",
    category: "Awards",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Industry award received for exemplary construction quality and engineering.",
  },
  {
    title: "Luxury Bathroom",
    category: "Interiors",
    image:
      "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1200&q=80",
    description:
      "Hotel‑style bathroom with premium fittings, mood lighting and clean lines.",
  },
];

export const galleryCategories: ("All" | GalleryCategory)[] = [
  "All",
  "Projects",
  "Interiors",
  "Events",
  "Awards",
];

