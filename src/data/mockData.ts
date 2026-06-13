export type Plan = {
  id: number;
  name: string;
  monthlyCost: number;
  effectivenessScore: number;
  description: string;
};

export type Service = {
  id: number;
  name: string;
  category: string;
  monthlyCost: number;
  effectiveness: number;
  satisfaction: number;
  coverageLikelihood: number;
  description: string;
};

export type SearchResult = {
  id: number;
  title: string;
  type: 'Disease' | 'Treatment';
  summary: string;
};

export type CoverageInsight = {
  id: number;
  title: string;
  coverageChance: number;
  provider: string;
  details: string;
};

export const plans: Plan[] = [
  {
    id: 1,
    name: 'Standard Care Bundle',
    monthlyCost: 120,
    effectivenessScore: 78,
    description: 'Balanced option for preventive care and common services.',
  },
  {
    id: 2,
    name: 'Value Health Package',
    monthlyCost: 95,
    effectivenessScore: 70,
    description: 'Lower cost plan focused on essential coverage and affordability.',
  },
  {
    id: 3,
    name: 'Premium Wellness Plan',
    monthlyCost: 185,
    effectivenessScore: 92,
    description: 'Higher support and coverage for complex care needs and wellness services.',
  },
];

export const services: Service[] = [
  {
    id: 1,
    name: 'Primary Care Management',
    category: 'Preventive',
    monthlyCost: 75,
    effectiveness: 82,
    satisfaction: 86,
    coverageLikelihood: 91,
    description: 'Coordinated primary care with preventive visits and condition monitoring.',
  },
  {
    id: 2,
    name: 'Telehealth Consultation',
    category: 'Virtual Care',
    monthlyCost: 40,
    effectiveness: 72,
    satisfaction: 78,
    coverageLikelihood: 84,
    description: 'Remote consultations for routine care and follow-up discussions.',
  },
  {
    id: 3,
    name: 'Chronic Disease Support',
    category: 'Specialty',
    monthlyCost: 150,
    effectiveness: 88,
    satisfaction: 91,
    coverageLikelihood: 76,
    description: 'Dedicated support for long-term conditions like diabetes and hypertension.',
  },
  {
    id: 4,
    name: 'Wellness and Preventive Plan',
    category: 'Wellness',
    monthlyCost: 60,
    effectiveness: 68,
    satisfaction: 74,
    coverageLikelihood: 63,
    description: 'Preventive screenings, wellness coaching, and lifestyle support.',
  },
];

export const searchCatalog: SearchResult[] = [
  {
    id: 1,
    title: 'Type 2 Diabetes',
    type: 'Disease',
    summary: 'A chronic condition affecting blood sugar regulation with many service and medication options.',
  },
  {
    id: 2,
    title: 'Hypertension Management',
    type: 'Treatment',
    summary: 'Programs and medications designed to keep blood pressure in a healthy range.',
  },
  {
    id: 3,
    title: 'Behavioral Health Therapy',
    type: 'Treatment',
    summary: 'Mental health support through counseling, coaching, and care coordination.',
  },
  {
    id: 4,
    title: 'Preventive Cancer Screening',
    type: 'Disease',
    summary: 'Regular screening services for early detection and better long-term outcomes.',
  },
];

export const coverageInsights: CoverageInsight[] = [
  {
    id: 1,
    title: 'Outpatient Procedure Coverage',
    coverageChance: 88,
    provider: 'Most major insurers',
    details: 'Outpatient exams and routine follow-up visits are generally covered when they are part of an approved care plan.',
  },
  {
    id: 2,
    title: 'Specialty Medication Support',
    coverageChance: 72,
    provider: 'Select formularies',
    details: 'Coverage depends on whether the medication is listed on the insurer formulary and whether prior authorization is granted.',
  },
  {
    id: 3,
    title: 'Chronic Condition Management',
    coverageChance: 79,
    provider: 'Most insurers with care programs',
    details: 'Plans that include chronic care programs typically cover regular monitoring and condition management services.',
  },
  {
    id: 4,
    title: 'Preventive Screening Services',
    coverageChance: 94,
    provider: 'Standard health plans',
    details: 'Preventive screenings are often covered at high rates when they follow recommended medical guidelines.',
  },
];
