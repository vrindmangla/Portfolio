import type { ReactNode } from 'react';

export interface NavItem {
  name: string;
  href: string;
  icon?: ReactNode;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
  category: SkillCategory;
}

export type SkillCategory =
  | 'programming'
  | 'data-analytics'
  | 'sql'
  | 'machine-learning'
  | 'visualization'
  | 'libraries'
  | 'databases';

export interface SkillCategoryInfo {
  id: SkillCategory;
  title: string;
  icon: string;
  skills: Skill[];
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  features: string[];
  metrics?: string;
  image: string;
  github?: string;
  demo?: string;
  category: ProjectCategory;
}

export type ProjectCategory = 'analytics' | 'ml' | 'visualization' | 'testing';

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credential?: string;
  image?: string;
  verifyLink?: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  duration: string;
  grade?: string;
  description?: string;
  achievements?: string[];
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface StatCounter {
  label: string;
  value: number;
  suffix?: string;
  icon: string;
}

export interface SkillScore {
  name: string;
  score: number;
  color: string;
  icon: string;
}
