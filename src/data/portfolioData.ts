export type ProjectCategory = 'Health-Tech & UX' | 'Product Explorations';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  yearOrEvent: string;
  meta: string[];
  summary: string;
  status: string;
  coverGradient: string;
  coverMotif: 'accessibility' | 'audio';
  role: string;
  problem: string;
  approach: string;
  takeaway: string;
}

export const QUICK_FACTS = [
  { label: 'Studying', value: 'B.Com, Healthcare Management' },
  { label: 'Institution', value: 'Humber Lakeshore · Toronto, ON' },
  { label: 'Focus', value: 'Health-tech product & UX design' },
  { label: 'Experience', value: '6+ hackathons · 1 win' },
  { label: 'Toolkit', value: 'Figma · Wireframing · Prototyping · HTML/CSS · React' },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'seniorgo',
    title: 'SeniorGO',
    category: 'Health-Tech & UX',
    yearOrEvent: 'ElleHacks 2025',
    meta: ['ElleHacks 2025', 'Figma', 'Accessibility', 'UI/UX'],
    summary:
      "At ElleHacks 2025, my team set out to improve digital accessibility and independence for elderly individuals and people facing mobility challenges. As part of Team GirlCode, I led the UI/UX design in Figma, creating an accessible, intuitive interface tailored to our audience's needs.",
    status: 'Concept in progress',
    coverGradient: 'from-[#d9ccff] to-[#ffd0e0]',
    coverMotif: 'accessibility',
    role: 'Lead UI/UX Designer (Team GirlCode)',
    problem:
      'Older adults and users with mobility challenges often encounter dense, low-contrast interfaces with small touch targets that make independent navigation stressful.',
    approach:
      'In a 3-day hackathon sprint, I mapped core user journeys, prioritized high-contrast typography and generous tap targets, and built an end-to-end interactive prototype in Figma.',
    takeaway:
      'Designing for accessibility early sharpens hierarchy and reduces friction for every user, especially under tight sprint timelines.',
  },
  {
    id: 'hop-tunes',
    title: 'Hop Tunes',
    category: 'Product Explorations',
    yearOrEvent: 'UX & Product Concept',
    meta: ['Figma', 'Product UX', 'Interaction Design'],
    summary:
      'A music discovery and mood-guided listening concept exploring playful interaction patterns, lightweight queue curation, and low-friction visual browsing.',
    status: 'Figma prototype',
    coverGradient: 'from-[#ffd9bf] to-[#ffc2d6]',
    coverMotif: 'audio',
    role: 'Product & UX Designer',
    problem:
      'Finding music that matches an immediate mood often takes too many taps through algorithmic feeds and cluttered home screens.',
    approach:
      'Wireframed streamlined discovery cards and mood-based entry points in Figma, testing visual pacing and touch-friendly controls.',
    takeaway:
      'Structured visual rhythm helps users orient faster without relying on heavy text labels.',
  },
];
