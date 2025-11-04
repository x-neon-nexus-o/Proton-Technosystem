import type { LucideIcon } from "lucide-react";

export interface Service {
  title: string;
  icon: LucideIcon;
  imageId: string;
  description: string;
}

export interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Brand {
  name: string;
  logo: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}

export interface Testimonial {
    name: string;
    role: string;
    avatarId: string;
    rating: number;
    comment: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  imageId: string;
  items: {
    name: string;
    spec: string;
  }[];
}

export type ImagePlaceholder = {
  id: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};
