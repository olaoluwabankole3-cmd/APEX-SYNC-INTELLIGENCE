/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type PageId = 'home' | 'about' | 'services' | 'ecosystem' | 'journal' | 'careers' | 'contact';

export interface EcosystemProduct {
  id: string;
  name: string;
  tagline: string;
  status: 'Available' | 'Currently in Development' | 'Private Beta' | 'Coming Soon';
  description: string;
  longDescription: string;
  highlightColor?: string;
  capabilities: string[];
  businessValue: string;
}

export interface ServiceOffering {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  approach: string[];
  expectedOutcome: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  author: string;
  category: 'Artificial Intelligence' | 'Engineering' | 'Research' | 'Leadership' | 'Product' | 'Design' | 'Future Thinking';
  readTime: string;
  content: string[];
  featured?: boolean;
}

export interface OpenRole {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Contract' | 'Remote' | 'Hybrid';
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface ContactInquiry {
  name: string;
  email: string;
  organization?: string;
  role?: string;
  subject: string;
  category: 'Business' | 'Partnerships' | 'Careers' | 'Investors' | 'Media' | 'Support' | 'General';
  message: string;
}

export interface SubCategory {
  title: string;
  purpose?: string;
  capabilities?: string[];
  perfectFor?: string[];
  industries?: string[];
  modules?: string[];
  examples?: string[];
  displays?: string[];
  features?: string[];
  deliverables?: string[];
  includes?: string[];
  topics?: string[];
}

export interface Division {
  id: string;
  num: string;
  title: string;
  tagline: string;
  subCategories: SubCategory[];
}

export interface SpecializedSolution {
  id: string;
  title: string;
  features: string[];
}

export interface FutureProductDef {
  id: string;
  name: string;
  tagline: string;
  description: string;
  examples?: string[];
}

