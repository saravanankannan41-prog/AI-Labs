export type PageRoute =
  | 'overview'
  | '6-core-ai-solutions'
  | 'case-studies-impact'
  | 'roi-calculator'
  | 'client-portal'
  | 'book-ai-audit-consultation';

export type SectorKey = 'retail' | 'mfg' | 'services';

export interface SolutionCardItem {
  id: string;
  iconName: 'chat' | 'eye' | 'trending' | 'receipt' | 'factory' | 'truck' | 'file' | 'shield' | 'briefcase' | 'clock' | 'users' | 'wallet';
  title: string;
  subtitle: string;
  tagText: string;
  headache: string;
  solution: string;
  result: string;
}

export interface SectorContent {
  key: SectorKey;
  label: string;
  headline: string;
  subheadline: string;
  highlights: string[];
  cards: SolutionCardItem[];
}

export interface CoreCapability {
  index: string;
  id: string;
  title: string;
  category: string;
  summary: string;
  problemSolved: string;
  integrations: string[];
  deploymentTime: string;
  measurableOutcome: string;
}

export interface CaseStudy {
  id: string;
  company: string;
  city: string;
  sector: SectorKey;
  sectorLabel: string;
  headline: string;
  summary: string;
  beforeState: string;
  changeImplemented: string;
  outcomeStatement: string;
  metrics: {
    label: string;
    value: string;
  }[];
  quote: string;
  spokesperson: string;
  role: string;
  stack: string[];
}

export interface SoftwareCompatibility {
  name: string;
  protocol: string;
  syncSpeed: string;
}

export interface AuditBooking {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  monthlyTurnover: string;
  cityOrMode: string;
  preferredDate: string;
  softwareStack: string[];
  primaryGoal: string;
}
