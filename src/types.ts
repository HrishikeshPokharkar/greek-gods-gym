export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: number;
  period: string;
  badge?: string;
  benefits: string[];
  ctaText: string;
  recommended?: boolean;
}

export interface Trainer {
  id: string;
  name: string;
  title: string;
  specialty: string;
  experience: string;
  accolades: string[];
  bio: string;
  quote: string;
}

export interface FeaturePoint {
  id: string;
  title: string;
  category: string;
  description: string;
  specs: string[];
}
