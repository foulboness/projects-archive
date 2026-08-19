export type ProjectCategory =
  | 'All Projects'
  | 'Web Development'
  | 'UI/UX'
  | 'React'
  | 'JavaScript'
  | 'TypeScript'
  | 'Full Stack'
  | 'Creative Experiments'
  | 'Tools';

export interface ProjectFeature {
  title: string;
  description: string;
  tag?: string;
}

export interface TechnicalHighlight {
  label: string;
  value: string;
  detail: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  category: ProjectCategory[];
  primaryCategory: ProjectCategory;
  technologies: string[];
  year: string;
  status: 'Production' | 'Experimental' | 'Archived' | 'Live Alpha' | 'Open Source';
  clientOrContext?: string;
  image: string;
  galleryImages?: string[];
  githubUrl: string;
  liveUrl: string;
  
  // Detailed view attributes
  fullDescription: string;
  problemAndConcept: {
    challenge: string;
    solution: string;
    architecture: string;
  };
  keyFeatures: ProjectFeature[];
  developmentHighlights: TechnicalHighlight[];
  stats?: {
    metric: string;
    label: string;
  }[];
  role: string;
  duration?: string;
}

export type ViewMode = 'grid' | 'ledger' | 'index';
export type SortOption = 'number-asc' | 'number-desc' | 'year-desc' | 'title-asc';
