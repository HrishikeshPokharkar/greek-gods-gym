import { PricingTier, Trainer, FeaturePoint } from '../types';

export const HERO_COPY = {
  headline: "FORGE YOUR IMMORTAL LEGACY",
  subHeadline: "Strength is not granted by blood or prayer; it is hammered from raw iron through ruthless discipline. Enter our temple, shed human weakness, and construct a physique that outlives time.",
  primaryCta: "CLAIM INITIATION PASS",
  secondaryCta: "INSPECT THE ARSENAL",
  locationBadge: "OLYMPUS COMPOUND · SANCTUARY 01 · UNDERGROUND",
};

export const FEATURES: FeaturePoint[] = [
  {
    id: "equipment",
    category: "The Arsenal",
    title: "Calibrated Competition Iron",
    description: "Custom Eleiko barbells, hand-milled plates calibrated to competition gram tolerance, and solid steel dumbbells climbing to 200 lbs. Zero gimmicks, zero plastic.",
    specs: [
      "Eleiko IPF & IWF certified power bars",
      "Solid milled urethane dumbbells (5 to 200 lbs)",
      "Custom welded monoliths and heavy power cages"
    ]
  },
  {
    id: "trainers",
    category: "The Mentors",
    title: "Olympia-Tier Master Coaches",
    description: "Guided exclusively by IFBB Pro veterans and world-class strength biomechanists who demand absolute mechanical precision and refuse human excuses.",
    specs: [
      "15+ years elite competitive stage experience",
      "Biomechanical kinetic leverage mastery",
      "Zero tolerance for complacency or false form"
    ]
  },
  {
    id: "environment",
    category: "The Culture",
    title: "Zero-Distraction Iron Sanctuary",
    description: "Strict no-tripod policy, zero influencer vanity, and no leisurely loitering. Dark acoustics, magnesium chalk air, and heavy iron resonance engineered for unrelenting intensity.",
    specs: [
      "100% tripod & filming apparatus ban",
      "Curated low-tempo heavy metal & industrial soundscape",
      "Raw magnesium chalk barrels at every rack"
    ]
  }
];

export const PRICING_TIERS: PricingTier[] = [
  {
    id: "day-pass",
    name: "Day Pass",
    tagline: "Single Crucible Descent",
    price: 35,
    period: "single session",
    benefits: [
      "24-hour unhindered access to the heavy iron floor and calibrated power platforms",
      "Unlimited competition magnesium chalk and calibrated Eleiko specialty equipment",
      "Post-session Finnish dry sauna (190°F) and sub-zero plunge recovery access"
    ],
    ctaText: "SECURE DAY PASS",
    recommended: false
  },
  {
    id: "spartan-monthly",
    name: "Spartan Monthly",
    tagline: "The Unyielding Standard",
    price: 149,
    period: "per month",
    badge: "CORE STANDARD",
    benefits: [
      "24/7 keycard entry to the underground free-weight compound and plate-loaded arena",
      "Weekly progressive overload protocol audit and kinetic movement assessment",
      "Dedicated heavy iron locker, priority platform booking, and recovery suite access"
    ],
    ctaText: "ENLIST AS SPARTAN",
    recommended: true
  },
  {
    id: "olympian-annual",
    name: "Olympian Annual",
    tagline: "Absolute Mastery & Immortality",
    price: 1490,
    period: "per year",
    badge: "MOST REVERED",
    benefits: [
      "Unrestricted 365-day VIP access with reserved custom power cage privileges",
      "Monthly 1-on-1 kinetic biomechanical overhaul with Head Coaches Ares or Athena",
      "Full Olympic recovery suite privileges, bespoke leather lifting belt, and private storage"
    ],
    ctaText: "CLAIM OLYMPIAN IMMORTALITY",
    recommended: false
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: "ares",
    name: "Ares",
    title: "Director of Hypertrophy & Maximum Kinetic Force",
    specialty: "Structural Hypertrophy & Maximal Mechanical Tension",
    experience: "15 Years Competitive Elite Master",
    accolades: ["IFBB Pro Veteran", "Collegiate Strength Master", "Championship Prep Architect"],
    bio: "Former IFBB Pro and master of kinetic leverage with fifteen years spent tearing down fitness dogma. Ares does not monitor workouts; he orchestrates structural adaptation under ruthless maximal load. If you require applause, look elsewhere. If you seek unyielding density and battle-hardened strength, fall into line.",
    quote: "Iron never lies, never negotiates, and never pities your fatigue."
  },
  {
    id: "athena",
    name: "Athena",
    title: "Head of Biomechanical Architecture & Precision Conditioning",
    specialty: "Kinetic Geometry & Elite Neuromuscular Recruitment",
    experience: "12 Years Elite High-Performance Coach",
    accolades: ["M.S. Exercise Biomechanics", "National Powerlifting Record Holder", "Kinetic Force Analyst"],
    bio: "Master of Exercise Science, multi-time national powerlifting record holder, and merciless movement analyst. Athena dissects kinetic dysfunction down to the millimeter, reconstructing broken movement patterns into indestructible force generation. Her standards are non-negotiable, her athletes stand on podiums, and her protocol yields zero tolerance for weakness.",
    quote: "A millimeter of kinetic compromise is an invitation to failure. Lift with surgical precision."
  }
];

export const SANCTUARY_RULES = [
  {
    rule: "01. Ban on Filming & Tripods",
    detail: "This is a temple of labor, not a digital studio. Tripods and public content creation are forbidden on the iron floor."
  },
  {
    rule: "02. Rerack All Calibrated Iron",
    detail: "Strip your barbells to zero. Leave the knurling clean, return every plate to its indexed peg, or surrender your pass."
  },
  {
    rule: "03. Chalk and Brutal Focus",
    detail: "Heavy magnesium chalk is provided freely. Drop the weight only on deadlift platforms. Respect the lifter in the pocket."
  },
  {
    rule: "04. No Excuses, No Casual Loitering",
    detail: "If you are between sets, stay primed. Social lounging belongs outside the gate. Inside, we build immortals."
  }
];
